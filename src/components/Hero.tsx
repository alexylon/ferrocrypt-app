import styles from "./Hero.module.css";
import { Arrow, GitHub } from "./Icons";

const primitives = [
  "XChaCha20-Poly1305",
  "Argon2id",
  "X25519",
  "HKDF-SHA3-256",
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bgGlow} aria-hidden="true" />
      <div className={styles.bgLattice} aria-hidden="true" />

      <div className={`container ${styles.inner}`}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            <span>v0.3 — pure Rust, no OpenSSL</span>
          </div>

          <h1 className={styles.title}>
            File and folder encryption,
            <br />
            <span className={styles.titleAccent}>readable end to end.</span>
          </h1>

          <p className={styles.lede}>
            <span className="brand-mono">FerroCrypt</span> is a free,
            open-source desktop app that encrypts files and folders with a
            passphrase or an X25519 key pair. It runs locally, and the{" "}
            <a
              href="https://github.com/alexylon/ferrocrypt/blob/main/ferrocrypt-lib/FORMAT.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              file format
            </a>{" "}
            is documented byte for byte.
          </p>

          <div className={styles.actions}>
            <a
              className={styles.btnPrimary}
              href="#download"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("download")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Download for desktop
              <Arrow width={16} height={16} />
            </a>
            <a
              className={styles.btnSecondary}
              href="https://github.com/alexylon/ferrocrypt"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHub width={16} height={16} />
              View source
            </a>
          </div>

          <div className={styles.primitives} aria-label="Cryptographic primitives">
            <span className={styles.primitivesLabel}>built on</span>
            <ul className={styles.primitivesList}>
              {primitives.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className={styles.visualFrame}>
      <div className={styles.haloOuter} />
      <div className={styles.haloInner} />

      <svg className={styles.rings} viewBox="0 0 480 480" overflow="visible" aria-hidden="true">
        <defs>
          <linearGradient id="ringGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="rgba(125,243,255,0.0)" />
            <stop offset="40%" stopColor="rgba(125,243,255,0.55)" />
            <stop offset="60%" stopColor="rgba(10,179,196,0.55)" />
            <stop offset="100%" stopColor="rgba(10,179,196,0.0)" />
          </linearGradient>
        </defs>
        <circle cx="240" cy="240" r="270" stroke="url(#ringGrad)" strokeWidth="1" fill="none" strokeDasharray="2 6" />
        <circle cx="240" cy="240" r="230" stroke="url(#ringGrad)" strokeWidth="1" fill="none" strokeDasharray="4 10" />
        <circle cx="240" cy="240" r="190" stroke="url(#ringGrad)" strokeWidth="1" fill="none" />
      </svg>

      <div className={styles.appCard}>
        <img
          src="/images/screenshots/screenshot-1.png"
          alt=""
          className={styles.appImage}
          width="600"
          height="900"
          loading="eager"
        />
      </div>

      <div className={styles.codeChip}>
        <span className={styles.codeChipLabel}>fingerprint</span>
        <code>ce6d…20bb</code>
      </div>

      <div className={styles.statusChip}>
        <span className={styles.statusDot} />
        <span>encrypted · 1.2 GB</span>
      </div>
    </div>
  );
}
