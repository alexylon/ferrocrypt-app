import styles from "./Header.module.css";
import { GitHub, ShieldKey } from "./Icons";

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

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
        <button
          className={styles.logo}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span className={styles.logoMark}>
            <ShieldKey size={22} />
          </span>
          <span className={styles.logoText}>
            Ferro<span className={styles.logoAccent}>Crypt</span>
          </span>
        </button>

        <nav className={styles.nav} aria-label="Primary">
          {nav.map((item) => (
            <button key={item.id} onClick={() => scrollTo(item.id)}>
              {item.label}
            </button>
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
          <button
            className={styles.cta}
            onClick={() => scrollTo("download")}
          >
            Download
          </button>
        </div>
      </div>
    </header>
  );
}
