import styles from "./Header.module.css";
import { GitHub, ShieldKey } from "./Icons";

const nav = [
  { id: "features", label: "Features" },
  { id: "modes", label: "Modes" },
  { id: "cryptography", label: "Cryptography" },
  { id: "download", label: "Download" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <a className={styles.logo} href="#top">
          <span className={styles.logoMark}>
            <ShieldKey size={22} />
          </span>
          <span className={styles.logoText}>
            Ferro<span className={styles.logoAccent}>Crypt</span>
          </span>
        </a>

        <nav className={styles.nav} aria-label="Primary">
          {nav.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <a
            className={styles.github}
            href="https://github.com/alexylon/ferrocrypt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="FerroCrypt on GitHub"
          >
            <GitHub width={16} height={16} />
            <span className={styles.githubLabel}>GitHub</span>
          </a>
          <a className={styles.cta} href="#download">
            Download
          </a>
        </div>
      </div>
    </header>
  );
}
