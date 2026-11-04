import type { Metadata } from "next";
import Link from "next/link";
import "./jurisdiction.css";

export const metadata: Metadata = {
  title: "Jurisdiction | CFSL Hyderabad",
  description: "Illustrative jurisdiction map of CFSL Hyderabad across five southern states and two Union Territories.",
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

export default function JurisdictionPage() {
  return (
    <>
      <section className="page-banner">
        <div className="site-container page-banner-inner">
          <nav className="breadcrumbs" aria-label="Breadcrumbs">
            <Link href="/">Home</Link><span aria-hidden="true">/</span>
            <Link href="/services">Services</Link><span aria-hidden="true">/</span>
            <span aria-current="page">Jurisdiction</span>
          </nav>
          <h1>Jurisdiction of CFSL, Hyderabad</h1>
          <p>Central Forensic Science Laboratory · Directorate of Forensic Science Services · Ministry of Home Affairs</p>
        </div>
      </section>

      <section className="section jurisdiction-page">
        <div className="site-container">
          <div className="jurisdiction-heading">
            <span className="section-kicker">Regional service coverage</span>
            <h2>States &amp; Union Territories served</h2>
            <p>Explore the seven jurisdictions shown in the supplied CFSL Hyderabad reference map.</p>
          </div>
          <div className="jurisdiction-layout">
            <div className="jurisdiction-map-panel">
              <svg className="jurisdiction-map" viewBox="0 0 890 840" role="img" aria-labelledby="jurisdiction-map-title jurisdiction-map-desc">
                <title id="jurisdiction-map-title">Illustrative map of CFSL Hyderabad jurisdiction</title>
                <desc id="jurisdiction-map-desc">Southern India with Andhra Pradesh, Telangana, Karnataka, Kerala and Tamil Nadu highlighted sequentially, followed by Puducherry, Lakshadweep and the CFSL Hyderabad location in Ramanthapur.</desc>
                <image href="/images/jurisdiction-map-reference.webp" width="890" height="840" className="jurisdiction-base" />
                <g className="jurisdiction-states">
                  <path className="jurisdiction-state jurisdiction-state-ap" d="M860,87 L857,85 L855,90 L847,91 L835,107 L817,108 L814,105 L806,105 L802,98 L797,98 L790,86 L785,92 L775,94 L776,103 L773,106 L756,111 L753,116 L755,117 L753,133 L743,134 L738,130 L734,137 L724,138 L715,125 L712,128 L712,138 L709,140 L709,153 L704,157 L688,154 L675,160 L672,165 L667,165 L665,170 L661,170 L660,176 L656,177 L656,184 L653,185 L650,197 L640,200 L633,198 L632,204 L625,205 L624,209 L618,209 L617,205 L611,215 L600,215 L599,212 L593,210 L592,214 L566,219 L564,223 L557,226 L561,227 L558,241 L552,241 L543,236 L535,242 L521,245 L520,248 L513,246 L510,251 L509,266 L505,270 L488,270 L486,274 L482,274 L481,281 L475,281 L471,277 L454,278 L451,281 L445,281 L444,290 L420,290 L419,293 L412,293 L411,290 L399,291 L382,288 L370,292 L372,308 L369,309 L367,318 L370,325 L376,329 L377,341 L373,347 L353,346 L358,350 L358,357 L352,373 L358,380 L363,381 L363,387 L360,390 L364,393 L364,410 L368,415 L366,425 L372,426 L375,417 L393,421 L396,429 L413,423 L417,415 L429,415 L430,419 L437,420 L438,433 L446,438 L454,437 L455,453 L467,458 L467,468 L460,476 L459,483 L446,487 L446,494 L455,499 L463,493 L468,476 L474,471 L494,470 L502,473 L507,466 L514,466 L518,462 L519,454 L528,454 L531,458 L551,453 L556,442 L560,440 L561,433 L571,431 L572,427 L564,406 L568,376 L561,356 L558,354 L561,327 L569,317 L573,303 L581,296 L595,290 L608,290 L611,292 L611,298 L617,300 L629,284 L635,267 L643,260 L669,261 L701,247 L701,242 L695,240 L695,234 L706,234 L701,229 L704,215 L722,200 L763,179 L786,152 L818,136 Z" fill="#347eae" aria-label="Andhra Pradesh" />
                  <path className="jurisdiction-state jurisdiction-state-tel" d="M668,166 L657,169 L632,167 L629,170 L623,170 L617,148 L605,145 L605,138 L600,127 L589,117 L578,118 L575,112 L563,113 L557,107 L553,107 L550,90 L550,102 L540,115 L532,119 L520,119 L511,115 L501,100 L501,89 L505,80 L517,71 L532,70 L540,74 L548,83 L552,80 L553,63 L544,55 L521,60 L511,54 L509,62 L502,62 L491,57 L489,50 L484,50 L482,44 L453,38 L450,63 L443,67 L443,76 L432,77 L425,72 L421,86 L417,89 L424,97 L424,103 L414,114 L414,120 L406,123 L402,129 L407,161 L396,181 L410,185 L411,195 L397,198 L396,204 L392,207 L398,215 L397,247 L393,252 L385,255 L388,258 L399,258 L403,261 L403,267 L399,268 L398,272 L401,288 L443,291 L444,281 L454,277 L472,277 L481,283 L481,274 L486,273 L488,269 L507,266 L506,255 L510,246 L520,245 L523,242 L533,243 L536,238 L540,237 L550,238 L553,242 L560,233 L560,221 L566,217 L577,218 L580,226 L592,233 L592,225 L580,222 L581,215 L602,213 L611,216 L611,211 L615,206 L631,203 L633,197 L653,194 L653,180 L661,169 L669,169 Z" fill="#155181" aria-label="Telangana" />
                  <path className="jurisdiction-state jurisdiction-state-ka" d="M387,129 L382,131 L373,147 L363,147 L362,161 L353,165 L347,175 L334,175 L325,184 L325,200 L295,199 L278,192 L282,212 L281,223 L258,224 L255,230 L247,230 L237,225 L233,235 L220,239 L218,246 L214,249 L208,249 L205,245 L194,253 L196,263 L206,268 L206,278 L198,299 L184,302 L192,307 L196,330 L193,331 L193,348 L189,353 L183,355 L183,360 L190,362 L193,372 L199,375 L206,407 L215,420 L219,449 L229,489 L238,489 L253,501 L257,501 L258,506 L263,508 L266,519 L280,532 L289,534 L293,542 L309,542 L311,548 L315,548 L323,555 L328,555 L330,559 L336,559 L340,564 L352,564 L359,552 L392,553 L396,543 L406,542 L412,533 L408,530 L394,528 L394,522 L403,515 L401,498 L411,495 L414,486 L419,483 L426,483 L442,490 L445,484 L455,480 L464,461 L451,456 L453,441 L441,441 L438,436 L434,435 L435,423 L426,423 L421,418 L412,429 L400,433 L394,433 L393,427 L389,424 L379,422 L376,429 L365,430 L363,428 L365,417 L360,412 L360,400 L367,399 L368,407 L380,410 L387,407 L389,400 L396,399 L393,395 L383,396 L381,393 L375,393 L373,398 L361,398 L357,392 L357,386 L360,384 L352,380 L349,375 L351,361 L354,358 L353,352 L349,350 L349,343 L370,345 L374,336 L365,322 L365,309 L369,304 L367,291 L377,285 L396,286 L395,267 L400,263 L382,258 L382,252 L390,249 L392,245 L395,217 L389,212 L389,204 L392,202 L393,191 L404,188 L393,183 L393,174 L398,172 L398,166 L403,160 L401,139 L390,138 Z" fill="#2a9e91" aria-label="Karnataka" />
                  <path className="jurisdiction-state jurisdiction-state-ker" d="M377,648 L365,656 L364,665 L354,677 L344,681 L328,678 L327,684 L321,684 L324,704 L334,721 L338,738 L344,742 L371,775 L376,764 L380,763 L376,755 L379,742 L375,738 L374,729 L388,702 L384,697 L376,695 L378,660 L381,658 Z M235,489 L232,495 L249,530 L259,532 L261,547 L276,557 L278,572 L284,576 L292,592 L296,613 L302,628 L306,631 L312,653 L314,654 L317,643 L327,633 L336,630 L352,633 L357,619 L352,614 L343,611 L343,604 L347,600 L345,592 L334,593 L334,583 L315,575 L316,566 L335,559 L317,555 L313,548 L309,547 L309,543 L304,546 L295,546 L290,538 L279,536 L278,530 L272,530 L265,522 L265,509 L259,509 L253,505 L246,496 L239,498 L235,494 Z" fill="#6ebd83" aria-label="Kerala" />
                  <path className="jurisdiction-state jurisdiction-state-tn" d="M572,447 L562,445 L553,457 L545,459 L544,464 L537,464 L523,457 L522,465 L517,470 L508,471 L505,477 L497,477 L492,473 L477,475 L472,478 L467,496 L459,503 L442,499 L441,493 L433,489 L424,490 L420,487 L416,496 L404,503 L407,516 L398,525 L408,526 L415,530 L415,537 L408,546 L399,547 L393,557 L380,555 L374,558 L361,557 L356,568 L337,567 L332,563 L324,569 L319,569 L319,572 L337,581 L337,587 L334,590 L349,591 L350,604 L346,608 L354,611 L360,617 L356,633 L364,644 L365,650 L374,645 L380,645 L384,652 L379,692 L388,693 L391,704 L377,733 L382,739 L379,752 L383,759 L377,779 L383,784 L399,789 L402,785 L410,784 L423,776 L435,764 L434,754 L442,732 L457,722 L465,722 L481,714 L492,712 L486,706 L487,693 L506,667 L507,656 L513,648 L523,644 L537,644 L547,648 L546,619 L538,611 L538,605 L546,603 L547,596 L541,574 L542,553 L535,550 L535,540 L547,538 L557,517 L566,508 L577,458 Z" fill="#e2a12d" aria-label="Tamil Nadu" />
                </g>
                <g className="jurisdiction-territories" fill="#c95a46">
                  <circle cx="80" cy="595" r="5" /><circle cx="105" cy="565" r="4" /><circle cx="140" cy="630" r="4" /><circle cx="109" cy="685" r="4" />
                  <circle cx="515" cy="542" r="5" /><circle cx="538" cy="505" r="4" /><circle cx="656" cy="240" r="4" />
                </g>
                <g className="jurisdiction-location" transform="translate(460 195)">
                  <circle className="jurisdiction-pin-pulse" r="27" fill="#c4423b" />
                  <path className="jurisdiction-pin" d="M0,-29 C-17,-29 -28,-17 -28,-2 C-28,18 0,40 0,40 C0,40 28,18 28,-2 C28,-17 17,-29 0,-29 Z" fill="#c4423b" stroke="white" strokeWidth="4" />
                  <circle cy="-3" r="9" fill="white" />
                </g>
                <g className="jurisdiction-location-label">
                  <rect x="35" y="142" width="260" height="48" rx="10" fill="#ffffff" stroke="#c4423b" strokeWidth="2" />
                  <text x="53" y="172" fontSize="21" fontWeight="700" fill="#a52c2b">CFSL Hyderabad</text>
                  <path d="M295 166 L430 190" stroke="#c4423b" strokeWidth="2" fill="none" />
                </g>
              </svg>
              <p className="jurisdiction-map-caption">Illustrative regional map, not to scale. Not a political or legal boundary depiction.</p>
            </div>
            <aside className="jurisdiction-info" aria-label="Jurisdiction list">
              <h3>States &amp; Union Territories served</h3>
              <ol className="jurisdiction-list">
                {jurisdictions.map((item) => (
                  <li key={item.number} className="jurisdiction-list-item" style={{ "--jurisdiction-accent": item.color, "--jurisdiction-index": item.number } as React.CSSProperties}>
                    <span className="jurisdiction-list-number">{item.number}</span>
                    <span>{item.name}</span>
                  </li>
                ))}
              </ol>
              <div className="jurisdiction-summary">
                <strong>Seven jurisdictions: 5 states and 2 Union Territories</strong>
                <p><strong>CFSL Hyderabad:</strong> Ramanthapur, Hyderabad, Telangana</p>
              </div>
            </aside>
          </div>
          <p className="jurisdiction-disclaimer">Jurisdictional coverage is reproduced from the reference image provided for this website. Confirm current official allocation before using it for case forwarding or legal purposes.</p>
        </div>
      </section>
    </>
  );
}
