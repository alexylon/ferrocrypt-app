import { features } from "../data/features";
import styles from "./Features.module.css";

export default function Features() {
  return (
    <section id="features" className={styles.section}>
      <div className="container">
        <div className={`section-head center ${styles.head}`}>
          <span className="section-eyebrow">About</span>
          <h2 className="section-title">
            What FerroCrypt does
          </h2>
          <p className="section-lede">
            One job: encrypting files and folders so only the intended reader
            can decrypt them. Below is what the app does and how it behaves.
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
