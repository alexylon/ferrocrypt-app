import { features } from "../data/features";
import styles from "./Features.module.css";

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className="container">
        <div className={`section-head center ${styles.head}`}>
          <span className="section-eyebrow">What it does</span>
          <h2 className="section-title">
            Serious cryptography, in a single, friendly app.
          </h2>
          <p className="section-lede">
            FerroCrypt focuses on one job — keeping your files unreadable to
            anyone but the intended reader. Eight properties keep that promise
            honest.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map(({ Icon, title, description }) => (
            <article className={styles.card} key={title}>
              <div className={styles.iconWrap}>
                <Icon width={22} height={22} />
                <span className={styles.iconHalo} aria-hidden="true" />
              </div>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardBody}>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
