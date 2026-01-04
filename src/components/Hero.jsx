import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section id="home" className={styles.hero}>
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

            <div className={styles.overlay} />

            <div className={`container ${styles.content}`}>
                <h1 className={styles.title}>Tetrad Construction</h1>
                <p className={styles.subtitle}>Partnering with Clients from Concept to Completion</p>
            </div>

            <div className={styles.actions}>
                <a className={styles.primary} href="#contact">Contact Us</a>
                <a className={styles.secondary} href="#services">Our Services</a>
            </div>
        </section>
    );
}