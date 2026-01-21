"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectsHero.module.css";
import { projectImages } from "@/data/projectsImages";

export default function ProjectsHero({ items, intervalMs = 6500 }) {
  const slides = useMemo(() => items ?? projectImages, [items]);
  const total = slides.length;

  const [active, setActive] = useState(0);
  const [prev, setPrev] = useState(null);
  const [pan, setPan] = useState("panA"); // per-slide class

  const pickPan = useCallback(() => {
    const pans = ["panA", "panB", "panC", "panD"];
    return pans[Math.floor(Math.random() * pans.length)];
  }, []);

  const goTo = useCallback(
    (idx) => {
      if (idx === active) return;
      setPrev(active);
      setActive(idx);
      setPan(pickPan());
      window.setTimeout(() => setPrev(null), 520); // match CSS fade
    },
    [active, pickPan]
  );

  const next = useCallback(() => {
    goTo((active + 1) % total);
  }, [active, total, goTo]);

  const prevSlide = useCallback(() => {
    goTo((active - 1 + total) % total);
  }, [active, total, goTo]);

  // autoplay
  useEffect(() => {
    if (total <= 1) return;
    const id = window.setInterval(() => {
      setPrev((p) => (p === null ? active : p));
      setActive((a) => (a + 1) % total);
      setPan(pickPan());
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [active, total, intervalMs, pickPan]);

  // keyboard
  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [prevSlide, next]);

  const current = slides[active];
  const outgoing = prev !== null ? slides[prev] : null;

  return (
    <section className={styles.hero} aria-label="Featured project photos">
      <div className={styles.stage}>
        {/* outgoing layer (fades out) */}
        {outgoing && (
          <div className={`${styles.layer} ${styles.out}`}>
            <Image
              src={outgoing.src}
              alt={outgoing.alt}
              fill
              priority={false}
              sizes="100vw"
              className={`${styles.img} ${styles[pan]}`}
              style={{ objectPosition: current.focus ?? "50% 50%"}}
            />
          </div>
        )}

        {/* active layer (fades in) */}
        <div className={`${styles.layer} ${styles.in}`}>
          <Image
            src={current.src}
            alt={current.alt}
            fill
            priority
            sizes="100vw"
            className={`${styles.img} ${styles[pan]}`}
            style={{ objectPosition: current.focus ?? "50% 50%"}}
          />
        </div>

        {/* overlays */}
        <div className={styles.overlay} aria-hidden="true" />
        <div className={styles.grain} aria-hidden="true" />

        {/* magazine content */}
        <div className={`container ${styles.content}`}>
          <p className={styles.kicker}>PROJECTS</p>
          <h1 className={styles.title}>
            Work that feels
            <br />
            built to last.
          </h1>

          <p className={styles.sub}>
            A selection of recent work. Click any photo below to view full-size.
          </p>

          <div className={styles.actions}>
            <Link className={styles.primary} href="#gallery">
              View Gallery
            </Link>
            <Link className={styles.secondary} href="/contact">
              Start a Project
            </Link>
          </div>

          <div className={styles.meta}>
            <span className={styles.caption}>{current.caption ?? current.alt}</span>
            <span className={styles.counter}>
              {active + 1}/{total}
            </span>
          </div>
        </div>

        {/* controls */}
        <div className={styles.controls} aria-label="Hero controls">
          <button className={styles.navBtn} onClick={prevSlide} aria-label="Previous photo">
            ←
          </button>
          <button className={styles.navBtn} onClick={next} aria-label="Next photo">
            →
          </button>
        </div>
      </div>
    </section>
  );
}
