"use client";

import { useEffect, useMemo, useState, useCallback } from "react";
import Image from "next/image";
import styles from "./ProjectsGallery.module.css";
import { projectImages } from "@/data/projectsImages";

export default function ProjectsGallery({ items }) {
  const images = useMemo(() => items ?? projectImages, [items]);
  const total = images.length;

  const [openIndex, setOpenIndex] = useState(null);

  const isOpen = openIndex !== null;
  const active = isOpen ? images[openIndex] : null;

  const close = useCallback(() => setOpenIndex(null), []);
  const prev = useCallback(() => {
    setOpenIndex((i) => (i === null ? i : (i - 1 + total) % total));
  }, [total]);
  const next = useCallback(() => {
    setOpenIndex((i) => (i === null ? i : (i + 1) % total));
  }, [total]);

  useEffect(() => {
    if (!isOpen) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, close, prev, next]);

  return (
    <>
      <div className={styles.grid} aria-label="Projects gallery">
        {images.map((img, idx) => (
          <button
            key={img.src}
            className={styles.tile}
            type="button"
            onClick={() => setOpenIndex(idx)}
            aria-label={`Open image: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(max-width: 900px) 100vw, 33vw"
              className={styles.image}
              style={{ objectPosition: img.focus ?? "50% 50%" }}
            />
            <span className={styles.overlay} />
          </button>
        ))}
      </div>

      {isOpen && active && (
        <div
          className={styles.backdrop}
          role="dialog"
          aria-modal="true"
          aria-label="Project image viewer"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className={styles.lightbox}>
            <button className={styles.closeBtn} onClick={close} aria-label="Close">
              ✕
            </button>

            <button className={styles.prevBtn} onClick={prev} aria-label="Previous image">
              ←
            </button>

            <div className={styles.media}>
              <Image
                src={active.src}
                alt={active.alt}
                fill
                sizes="90vw"
                className={styles.lightboxImg}
                priority
              />
            </div>

            <button className={styles.nextBtn} onClick={next} aria-label="Next image">
              →
            </button>

            <p className={styles.caption}>
              {active.alt} <span className={styles.counter}>({openIndex + 1}/{total})</span>
            </p>
          </div>
        </div>
      )}
    </>
  );
}
