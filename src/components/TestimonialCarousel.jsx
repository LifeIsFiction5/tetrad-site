"use client";

import { useMemo, useState } from "react";
import styles from "./TestimonialCarousel.module.css";
import { use } from "react";

export default function TestimonialCarousel({ items }) {
    const testimonials = useMemo(() => items ?? [
        {
            quote: `I have had the distinct pleasure of working with TETRAD BUILDING GROUP LLC on very large scale building additions, building moves, engine generators and cable rack installation projects. They are an excellent team to work with… punctual, easy to get in touch with and complete projects in the allotted time frame...Their work is excellent... with quality… are aware of  strict standards and adhere to them all.`,
            author: "Phillip Sailas, Jr."
        },
    ], [items]);

    const [index, setIndex] = useState(0);
    const total = testimonials.length;

    const prev = () => setIndex((i) => (i - 1 + total) % total);
    const next = () => setIndex((i) => (i + 1) % total);

    const t = testimonials[index];

     return (
    <section id="testimonials" className={styles.section}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.header}>
          <h2 className={styles.title}>Testimonials</h2>
          <div className={styles.controls}>
            <button className={styles.navBtn} onClick={prev} aria-label="Previous testimonial">
              ←
            </button>
            <button className={styles.navBtn} onClick={next} aria-label="Next testimonial">
              →
            </button>
          </div>
        </div>

        <div className={styles.card} role="region" aria-live="polite">
          <blockquote className={styles.quote}>&ldquo;{t.quote}&rdquo;</blockquote>
          <p className={styles.author}>— {t.author}</p>

          <div className={styles.dots} aria-label="Testimonial navigation">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === index ? styles.dotActive : ""}`}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                aria-current={i === index ? "true" : "false"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}