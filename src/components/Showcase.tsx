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
    alt: "FerroCrypt — encrypt a file or folder with a passphrase",
    tag: "Password · encrypt",
    title: "Encrypt a file or folder with a passphrase",
    body: "The passphrase is stretched with Argon2id. A live strength indicator and a confirmation field make it harder to choose a weak or mistyped passphrase.",
  },
  {
    src: "/images/screenshots/screenshot-2.png",
    alt: "FerroCrypt — encrypt with a recipient public key",
    tag: "Key pair · encrypt",
    title: "Encrypt with a recipient’s public key",
    body: "Select a public key file or paste a fcr1… recipient string. The SHA3-256 fingerprint is shown so you can verify the key out of band.",
  },
  {
    src: "/images/screenshots/screenshot-3.png",
    alt: "FerroCrypt — decrypt with a private key",
    tag: "Key pair · decrypt",
    title: "Decrypt with a password-protected private key",
    body: "The private key is unlocked with its password and used to decrypt the .fcr file. A wrong password produces a clear, specific error.",
  },
  {
    src: "/images/screenshots/screenshot-4.png",
    alt: "FerroCrypt — generate a new X25519 key pair",
    tag: "Key pair · generate",
    title: "Generate an X25519 key pair",
    body: "Choose an output folder and a password for the private key. Existing key pairs in the folder are not overwritten.",
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
          <span className="section-eyebrow">Screens</span>
          <h2 className="section-title">
            Two modes, four workflows,
            <br />
            <span className={styles.headAccent}>one file format.</span>
          </h2>
          <p className="section-lede">
            FerroCrypt covers encrypt and decrypt for both passphrase and key
            pair modes, plus key generation. Click a tab to see the screen for
            each step.
          </p>
        </div>

        <div className={styles.layout}>
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
                  <span className={styles.thumbBody}>{shot.body}</span>
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
