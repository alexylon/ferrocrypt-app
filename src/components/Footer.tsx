import styles from "./Footer.module.css";
import { ShieldKey } from "./Icons";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <span className={styles.brandMark}>
            <ShieldKey size={18} />
          </span>
          <span className={styles.brandText}>
            Ferro<span className={styles.brandAccent}>Crypt</span>
          </span>
        </div>

        <p className={styles.meta}>
          From Latin <em>ferrum</em> (iron) — pure-Rust file encryption ·
          GPL-3.0-only · Made by{" "}
          <a href="https://github.com/alexylon" target="_blank" rel="noopener noreferrer">
            Alexander Alexandrov
          </a>
        </p>

        <nav className={styles.links} aria-label="Project links">
          <a href="https://github.com/alexylon/ferrocrypt" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://crates.io/crates/ferrocrypt" target="_blank" rel="noopener noreferrer">
            crates.io
          </a>
          <a href="https://docs.rs/ferrocrypt" target="_blank" rel="noopener noreferrer">
            docs.rs
          </a>
          <a
            href="https://github.com/alexylon/ferrocrypt/blob/main/SECURITY.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Security
          </a>
        </nav>
      </div>
    </footer>
  );
}
