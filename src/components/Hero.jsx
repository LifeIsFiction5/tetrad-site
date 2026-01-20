import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      {/* Top media strip */}
      <div className={styles.media}>
        <video
          className={styles.video}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster="/video/hero-poster.jpg"
        >
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>
        <div className={styles.mediaOverlay} />
        <div className={styles.centerContent} >
                    <p className={styles.kicker}>KANSAS CITY • COMMERCIAL CONSTRUCTION</p>

          <h1 className={`${styles.title} brandHeading`}>
            <span>TETRAD</span>
            <span>BUILDING</span>
            <span>GROUP, LLC</span>
          </h1>
        </div>
      </div>
    

      <div className={styles.maroon}>
  <div className={styles.maroonInner}>
    <p className={styles.tagline}>PARTNERING WITH CLIENTS FROM CONCEPT TO COMPLETION</p>

    <h2 className={styles.maroonTitle}>Talk with our team</h2>

    <p className={styles.maroonBody}>
      Reliable scheduling, clear communication, and high-quality work — built to meet strict standards.
    </p>

    <div className={styles.actions}>
      <a className={styles.primary} href="tel:8163990701">Call 816-399-0701</a>
      <a className={styles.secondary} href="#contact">Email Us</a>
    </div>

    <div className={styles.meta}>
      <span>Est. 2015</span>
      <span>Telecom / Data</span>
      <span>Kansas City</span>
    </div>
  </div>
</div>
    </section>
  );
}
