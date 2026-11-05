
"use client";

import { useEffect, useMemo, useState } from "react";

type Position = [number, number];
type Ring = Position[];
type PolygonCoordinates = Ring[];
type Geometry = {
  type: "Polygon" | "MultiPolygon";
  coordinates: PolygonCoordinates | PolygonCoordinates[];
};
type Feature = {
  type: "Feature";
  properties?: Record<string, unknown>;
  geometry: Geometry;
};
type FeatureCollection = {
  type: "FeatureCollection";
  features: Feature[];
};

const jurisdictions = [
  { name: "Andhra Pradesh", number: 1, color: "#347eae" },
  { name: "Telangana", number: 2, color: "#155181" },
  { name: "Karnataka", number: 3, color: "#2a9e91" },
  { name: "Kerala", number: 4, color: "#6ebd83" },
  { name: "Tamil Nadu", number: 5, color: "#e2a12d" },
  { name: "Puducherry (UT)", number: 6, color: "#c95a46" },
  { name: "Lakshadweep (UT)", number: 7, color: "#c95a46" },
];

const highlighted = [
  "Andhra Pradesh",
  "Telangana",
  "Karnataka",
  "Kerala",
  "Tamil Nadu",
];

const MAP = {
  width: 900,
  height: 1000,
  minLon: 67.5,
  maxLon: 98.5,
  minLat: 5.5,
  maxLat: 37.5,
};

const HYDERABAD: Position = [78.4867, 17.385];

function project([lon, lat]: Position): Position {
  return [
    34 + ((lon - MAP.minLon) / (MAP.maxLon - MAP.minLon)) * (MAP.width - 68),
    28 + ((MAP.maxLat - lat) / (MAP.maxLat - MAP.minLat)) * (MAP.height - 56),
  ];
}

function geometryPolygons(geometry: Geometry): PolygonCoordinates[] {
  return geometry.type === "Polygon"
    ? [geometry.coordinates as PolygonCoordinates]
    : (geometry.coordinates as PolygonCoordinates[]);
}

function polygonPath(polygon: PolygonCoordinates): string {
  return polygon
    .map((ring) => {
      if (!ring.length) return "";

      return (
        ring
          .map((point, index) => {
            const [x, y] = project(point);
            return `${index === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`;
          })
          .join(" ") + " Z"
      );
    })
    .join(" ");
}

function featureName(feature: Feature): string {
  const props = feature.properties ?? {};

  const wanted = new Set(
    highlighted.map((name) => name.toLowerCase())
  );

  const values = Object.values(props).filter(
    (value): value is string => typeof value === "string"
  );

  const match = values.find((value) =>
    wanted.has(value.trim().toLowerCase())
  );

  if (match) return match.trim();

  return String(
    props.state_name ??
      props.STNAME ??
      props.name ??
      props.NAME_1 ??
      props.shapeName ??
      ""
  );
}

function featureCenter(feature: Feature): Position {
  // Use the centroid of the largest outer ring.
  // This avoids route origins being pulled outside coastal states.

  const polygons = geometryPolygons(feature.geometry);

  let largestRing: Ring | null = null;
  let largestArea = 0;

  for (const polygon of polygons) {
    const ring = polygon[0];

    if (!ring || ring.length < 3) continue;

    let twiceArea = 0;
    let cx = 0;
    let cy = 0;

    for (let i = 0; i < ring.length; i++) {
      const [x1, y1] = ring[i];
      const [x2, y2] = ring[(i + 1) % ring.length];

      const cross = x1 * y2 - x2 * y1;

      twiceArea += cross;
      cx += (x1 + x2) * cross;
      cy += (y1 + y2) * cross;
    }

    const area = Math.abs(twiceArea / 2);

    if (area > largestArea && Math.abs(twiceArea) > 1e-8) {
      largestArea = area;
      largestRing = ring;
    }
  }

  if (!largestRing) return HYDERABAD;

  let twiceArea = 0;
  let cx = 0;
  let cy = 0;

  for (let i = 0; i < largestRing.length; i++) {
    const [x1, y1] = largestRing[i];
    const [x2, y2] = largestRing[(i + 1) % largestRing.length];

    const cross = x1 * y2 - x2 * y1;

    twiceArea += cross;
    cx += (x1 + x2) * cross;
    cy += (y1 + y2) * cross;
  }

  return [
    cx / (3 * twiceArea),
    cy / (3 * twiceArea),
  ];
}

function curvePath(
  from: Position,
  to: Position,
  index: number
): string {
  const [x1, y1] = project(from);
  const [x2, y2] = project(to);

  const dx = x2 - x1;
  const dy = y2 - y1;
  const length = Math.max(Math.hypot(dx, dy), 1);

  // Perpendicular offsets give each route its own smooth arc.
  const normalX = -dy / length;
  const normalY = dx / length;

  const offsets = [-76, -34, 28, 72, 112];
  const bend = offsets[index] ?? 0;

  const c1x = x1 + dx * 0.34 + normalX * bend;
  const c1y = y1 + dy * 0.34 + normalY * bend;

  const c2x = x1 + dx * 0.78 + normalX * (bend * 0.48);
  const c2y = y1 + dy * 0.78 + normalY * (bend * 0.48);

  return `M ${x1.toFixed(1)} ${y1.toFixed(1)} C ${c1x.toFixed(1)} ${c1y.toFixed(1)}, ${c2x.toFixed(1)} ${c2y.toFixed(1)}, ${x2.toFixed(1)} ${y2.toFixed(1)}`;
}

export default function JurisdictionMap() {
  const [geo, setGeo] = useState<FeatureCollection | null>(null);
  const [loadError, setLoadError] = useState(false);

  useEffect(() => {
    let active = true;

    fetch("/data/india-states-2024.geojson")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Map data could not be loaded");
        }

        return response.json();
      })
      .then((data: FeatureCollection) => {
        if (
          active &&
          data?.type === "FeatureCollection" &&
          Array.isArray(data.features)
        ) {
          setGeo(data);
        } else if (active) {
          setLoadError(true);
        }
      })
      .catch(() => {
        if (active) setLoadError(true);
      });

    return () => {
      active = false;
    };
  }, []);

  const mapFeatures = useMemo(() => {
    if (!geo) return [];

    return geo.features.map((feature) => ({
      feature,
      name: featureName(feature),
      d: geometryPolygons(feature.geometry)
        .map(polygonPath)
        .join(" "),
    }));
  }, [geo]);

  const routeFeatures = useMemo(
    () =>
      highlighted
        .map((name) => {
          const found = mapFeatures.find(
            (item) =>
              item.name.toLowerCase() === name.toLowerCase()
          );

          return found
            ? {
                name,
                center: featureCenter(found.feature),
              }
            : null;
        })
        .filter(
          (
            item
          ): item is {
            name: string;
            center: Position;
          } => Boolean(item)
        ),
    [mapFeatures]
  );

  const [pinX, pinY] = project(HYDERABAD);

  return (
    <>
      <section className="section jurisdiction-page">
        <div className="site-container">
          <div className="jurisdiction-heading">
            <span className="section-kicker">
              Regional service coverage
            </span>

            <h2>States &amp; Union Territories served</h2>

            <p>
              Five southern states are highlighted across the full
              India map, with the service routes converging at
              CFSL Hyderabad.
            </p>
          </div>

          <div className="jurisdiction-layout">
            <div className="jurisdiction-map-panel">
              <div className="jurisdiction-map-wrap">
                {geo ? (
                  <svg
                    className="jurisdiction-map"
                    viewBox={`0 0 ${MAP.width} ${MAP.height}`}
                    role="img"
                    aria-labelledby="jurisdiction-map-title jurisdiction-map-desc"
                  >
                    <title id="jurisdiction-map-title">
                      India map showing CFSL Hyderabad jurisdiction
                    </title>

                    <desc id="jurisdiction-map-desc">
  Full India state and Union Territory map.
  Andhra Pradesh, Telangana, Karnataka, Kerala
  and Tamil Nadu are highlighted in sequence.
  The CFSL Hyderabad marker appears first,
  followed by five subtle curved routes that
  briefly converge at the marker and then fade
  away.
</desc>

                    <defs>
                      <marker
  id="jurisdiction-arrowhead"
  markerWidth="4"
  markerHeight="4"
  refX="3.4"
  refY="2"
  orient="auto"
  markerUnits="userSpaceOnUse"
>
  <path
    d="M0,0.4 L0,3.6 L4,2 z"
    fill="#c45b43"
  />
</marker>
                    </defs>

                    <g className="jurisdiction-state-layer">
                      {mapFeatures.map(({ feature, name, d }) => {
                        const index = highlighted.findIndex(
                          (state) =>
                            state.toLowerCase() === name.toLowerCase()
                        );

                        return (
                          <path
                            key={`${name}-${d.slice(0, 16)}`}
                            d={d}
                            className={`jurisdiction-state${
                              index >= 0
                                ? ` jurisdiction-state-highlight jurisdiction-state-${index + 1}`
                                : ""
                            }`}
                          />
                        );
                      })}
                    </g>

                    <g className="jurisdiction-routes">
                      {routeFeatures.map((route, index) => (
                        <path
                          key={route.name}
                          d={curvePath(
                            route.center,
                            HYDERABAD,
                            index
                          )}
                          className={`jurisdiction-route jurisdiction-route-${index + 1}`}
                          markerEnd="url(#jurisdiction-arrowhead)"
                          pathLength="1"
                        />
                      ))}
                    </g>

                    {/* Hyderabad pin appears before route animations */}
                    <g
                      className="jurisdiction-location"
                      transform={`translate(${pinX.toFixed(1)} ${(pinY - 35).toFixed(1)})`}
                    >
                      <circle
                        className="jurisdiction-pin-pulse"
                        r="27"
                      />

                      <path
                        className="jurisdiction-pin"
                        d="M0,-25 C-14,-25 -23,-15 -23,-1 C-23,16 0,35 0,35 C0,35 23,16 23,-1 C23,-15 14,-25 0,-25 Z"
                      />

                      <circle
                        cy="-2"
                        r="7"
                        className="jurisdiction-pin-core"
                      />
                    </g>

                    <g
                      className="jurisdiction-location-label"
                      transform={`translate(${pinX + 28} ${pinY - 61})`}
                    >
                      <rect width="190" height="38" rx="8" />
                      <text x="12" y="25">
                        CFSL Hyderabad
                      </text>
                    </g>
                  </svg>
                ) : (
                  <div
                    className="jurisdiction-map-loading"
                    role="status"
                  >
                    {loadError
                      ? "India map data could not be loaded. Check that the GeoJSON file is in public/data."
                      : "Loading India map…"}
                  </div>
                )}
              </div>

              <p className="jurisdiction-map-caption">
                State and Union Territory boundaries are shown for
                geographic context. Arrows are illustrative service
                links, not travel routes.
              </p>
            </div>

            <aside
              className="jurisdiction-info"
              aria-label="Jurisdiction list"
            >
              <h3>States &amp; Union Territories served</h3>

              <ol className="jurisdiction-list">
                {jurisdictions.map((item) => (
                  <li
                    key={item.number}
                    className="jurisdiction-list-item"
                    style={
                      {
                        "--jurisdiction-accent": item.color,
                        "--jurisdiction-index": item.number,
                      } as React.CSSProperties
                    }
                  >
                    <span className="jurisdiction-list-number">
                      {item.number}
                    </span>

                    <span>{item.name}</span>
                  </li>
                ))}
              </ol>

              <div className="jurisdiction-summary">
                <strong>
                  Seven jurisdictions: 5 states and 2 Union Territories
                </strong>

                <p>
                  <strong>CFSL Hyderabad:</strong> Ramanthapur,
                  Hyderabad, Telangana
                </p>
              </div>
            </aside>
          </div>

          <p className="jurisdiction-disclaimer">
            The highlighted coverage is reproduced from the
            jurisdiction reference supplied for this website.
            Confirm current official allocation before using it
            for case forwarding or legal purposes.
          </p>
        </div>
      </section>
    </>
  );
}
