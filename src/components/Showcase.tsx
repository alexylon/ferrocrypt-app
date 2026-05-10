import { useCallback, useEffect, useState } from "react";
import styles from "./Showcase.module.css";

interface Shot {
  src: string;
  alt: string;
  tag: string;
  title: string;
  body: string;
}

const shots: Shot[] = [
  {
    src: "/images/screenshots/screenshot-1.png",
    alt: "FerroCrypt — encrypt with a passphrase",
    tag: "Password mode",
    title: "Lock a file behind one passphrase",
    body: "Argon2id stretches your passphrase. Strength is measured in real time.",
  },
  {
    src: "/images/screenshots/screenshot-2.png",
    alt: "FerroCrypt — encrypt with a recipient public key",
    tag: "Key pair · encrypt",
    title: "Encrypt for a recipient’s public key",
    body: "Drop in a public key — the SHA3-256 fingerprint is shown for verification.",
  },
  {
    src: "/images/screenshots/screenshot-3.png",
    alt: "FerroCrypt — decrypt with a private key",
    tag: "Key pair · decrypt",
    title: "Decrypt with your password-protected private key",
    body: "Private keys never leave the disk in plaintext. Wrong passphrases fail fast and clearly.",
  },
  {
    src: "/images/screenshots/screenshot-4.png",
    alt: "FerroCrypt — generate a new X25519 key pair",
    tag: "Key pair · generate",
    title: "Generate a fresh X25519 key pair",
    body: "Choose a folder, pick a private-key password, and ship — the app refuses to clobber an existing pair.",
  },
];

export default function Showcase() {
  const [active, setActive] = useState(0);
  const [lightbox, setLightbox] = useState<string | null>(null);

  const close = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (!lightbox) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [lightbox, close]);

  const current = shots[active];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.head}>
          <span className="section-eyebrow">A guided tour</span>
          <h2 className="section-title">
            Four screens. Two modes.
            <br />
            <span className={styles.headAccent}>Zero ambiguity.</span>
          </h2>
          <p className="section-lede">
            Every workflow is a single, clear path from input to ciphertext —
            no hidden settings, no surprise prompts. Click any tab to inspect
            in detail.
          </p>
        </div>

        <div className={styles.layout}>
          <div className={styles.stage}>
            <button
              type="button"
              className={styles.frame}
              onClick={() => setLightbox(current.src)}
              aria-label="Enlarge screenshot"
            >
              <div className={styles.frameGlow} aria-hidden="true" />
              <img
                src={current.src}
                alt={current.alt}
                width={600}
                height={900}
                className={styles.frameImage}
              />
            </button>
            <div className={styles.caption}>
              <span className={styles.captionTag}>{current.tag}</span>
              <h3 className={styles.captionTitle}>{current.title}</h3>
              <p className={styles.captionBody}>{current.body}</p>
            </div>
          </div>

          <div className={styles.thumbs} role="tablist" aria-label="Screenshots">
            {shots.map((shot, idx) => (
              <button
                key={shot.src}
                role="tab"
                aria-selected={idx === active}
                className={`${styles.thumb} ${idx === active ? styles.thumbActive : ""}`}
                onClick={() => setActive(idx)}
              >
                <span className={styles.thumbIndex}>0{idx + 1}</span>
                <span className={styles.thumbLabel}>
                  <span className={styles.thumbTag}>{shot.tag}</span>
                  <span className={styles.thumbTitle}>{shot.title}</span>
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {lightbox && (
        <div className={styles.lightbox} onClick={close} role="dialog" aria-modal="true">
          <img src={lightbox} alt="Screenshot enlarged" className={styles.lightboxImage} />
        </div>
      )}
    </section>
  );
}
