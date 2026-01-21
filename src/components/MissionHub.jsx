"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import LogoMark from "./LogoMark";
import styles from "./MissionHub.module.css";

export default function MissionHub() {
  const slides = useMemo(
    () => [
      {
        label: "Mission",
        title: "Mission Statement",
        text:
          "TETRAD BUILDING GROUP is the center cog in the corporate cube bringing together industry leaders and innovators for construction management services and complete turn-key projects.",
      },
      {
        label: "Vision",
        title: "Vision Statement",
        text:
          "TETRAD BUILDING GROUP clearly catches your vision, hammers out the details, and connects with a proven network of experts, innovators, and designers to build, install, or create cutting edge projects.",
      },
      {
        label: "Motto",
        title: "Motto",
        text: "TETRAD BUILDING GROUP — BUILDING MORE THAN YOU CAN IMAGINE",
      },
    ],
    []
  );

  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(null);
  const [pulse, setPulse] = useState(false);

  const triggerPulse = useCallback(() => {
    setPulse(true);
    window.setTimeout(() => setPulse(false), 450);
  }, []);

  const goTo = useCallback(
    (i) => {
      if (i === active) return;
      setPrev(active);
      setActive(i);
    },
    [active]
  );

  
  useEffect(() => {
    const id = window.setInterval(() => {
      setPrev(active);
      setActive((a) => (a + 1) % slides.length);
    }, 7000);
    return () => window.clearInterval(id);
  }, [active, slides.length]);

  const onLogoKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      triggerPulse();
    }
  };

  

  const current = slides[active];
  const outgoing = prev !== null ? slides[prev] : null;

  useEffect(() => {
  if (prev === null) return;
  const t = window.setTimeout(() => setPrev(null), 450); // match CSS duration
  return () => window.clearTimeout(t);
}, [prev]);

  return (
    <section className={styles.section}>
      <div className={`container ${styles.inner}`}>
        {/* Float wrapper keeps animation stable; logo inside can scale without “killing” float */}
        <button
          type="button"
          className={`${styles.logoFloat} ${pulse ? styles.logoPulse : ""}`}
          onClick={triggerPulse}
          onKeyDown={onLogoKeyDown}
          aria-label="Tetrad logo"
        >
          <LogoMark className={styles.logo} />
        </button>

        <div className={styles.statement} role="region" aria-live="polite">
  {outgoing && (
    <div
      key={`out-${prev}`} 
      className={`${styles.layer} ${styles.out}`}
    >
      <p className={styles.kicker}>{outgoing.title}</p>
      <p className={styles.text}>{outgoing.text}</p>
    </div>
  )}

  <div
    key={`in-${active}`} 
    className={`${styles.layer} ${styles.in}`}
  >
    <p className={styles.kicker}>{current.title}</p>
    <p className={styles.text}>{current.text}</p>
  </div>
</div>

        <div className={styles.controls} aria-label="Mission sections">
          {slides.map((s, i) => (
            <button
              key={s.label}
              type="button"
              className={`${styles.tab} ${i === active ? styles.tabActive : ""}`}
              onClick={() => goTo(i)}
              aria-current={i === active ? "true" : "false"}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
