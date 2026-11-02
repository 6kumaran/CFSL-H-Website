"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const DISPLAY_DURATION_MS = 1800;
const FADE_DURATION_MS = 480;

export function SplashScreen() {
  const [leaving, setLeaving] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    document.body.classList.add("cfsl-splash-active");
    const leaveTimer = window.setTimeout(() => setLeaving(true), DISPLAY_DURATION_MS);
    const removeTimer = window.setTimeout(() => {
      setVisible(false);
      document.body.classList.remove("cfsl-splash-active");
    }, DISPLAY_DURATION_MS + FADE_DURATION_MS);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
      document.body.classList.remove("cfsl-splash-active");
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`cfsl-splash${leaving ? " cfsl-splash--leaving" : ""}`}
      role="status"
      aria-label="CFSL, Hyderabad. Website loading."
      aria-live="polite"
    >
      <div className="cfsl-splash__content">
        <Image
          className="cfsl-splash__logo"
          src="/Central-Forensic-Science-Laboratory-removebg-preview.png"
          alt="Directorate of Forensic Science Services emblem"
          width={200}
          height={260}
          priority
          unoptimized
        />
        <span className="cfsl-splash__rule" aria-hidden="true" />
        <p className="cfsl-splash__title">CFSL, Hyderabad</p>
      </div>
    </div>
  );
}
