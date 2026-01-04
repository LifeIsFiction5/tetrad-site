import styles from "./AboutBand.module.css";

export default function AboutBand() {
  return (
    <section className={styles.band}>
      <div className={`container ${styles.inner}`}>
        <h2 className={styles.title}>Service Second to None</h2>
        <p className={styles.body}>
          Founded in 2015, we're a professional construction company that's proud to offer our services to clients nationwide.
          Located in the heartland of America, we provide great service, beginning and ending with experienced and friendly professionals.
          Our team of qualified individuals partners with you to achieve the goals you desire for your projects.
            We aim not only to meet your needs, but to exceed your expectations of what a dependable construction company can be, and build more than you can imagine.
        </p>
      </div>
    </section>
  );
}