import styles from "./AboutCard.module.css";

export default function AboutCard() {
  return (
    <section id="about" className={styles.wrap}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.card}>
          <p className={styles.kicker}>About Us</p>
          <h2 className={styles.title}>Building more than you can imagine</h2>
          <p className={styles.body}>
            Tetrad Building Group, LLC   has been a reliable company consisting of independent industry professionals since 2015.
             Being a great service provider means having complete and total confidence in the people providing those services,
              and we’re proud to have the best pros in the business working with us. With a focus on personalized service, competitive rates, and customer satisfaction,
               we’re always striving to meet and exceed our high standards and our clients’ expectations.
          </p>

          <div className={styles.actions}>
            <a className={styles.primary} href="#contact">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  );
}