import styles from "./Modes.module.css";
import { Key, Lock } from "./Icons";

export default function Modes() {
  return (
    <section id="modes" className={styles.section}>
      <div className="container">
        <div className={`section-head center ${styles.head}`}>
          <span className="section-eyebrow">Modes</span>
          <h2 className="section-title">
            Two modes,{" "}
            <span className={styles.headAccent}>one file format.</span>
          </h2>
          <p className="section-lede">
            Both modes write the same <code className={styles.code}>.fcr</code>{" "}
            file. On decrypt, FerroCrypt reads the recipient list from the file
            header and selects the right mode automatically — the file name and
            extension are not consulted.
          </p>
        </div>

        <div className={styles.grid}>
          <ModeCard
            tag="01 · Password"
            kind="passphrase"
            icon={<Lock width={22} height={22} />}
            title="Passphrase-based encryption"
            body="The same passphrase encrypts and decrypts the file. Argon2id stretches the passphrase into the key-wrapping key. Typical use: encrypting data only you need to read again."
            flow={[
              { label: "Passphrase", value: "argon2id" },
              { label: "Key wrap", value: "HKDF-SHA3-256" },
              { label: "Payload", value: "XChaCha20-Poly1305" },
              { label: "Output", value: ".fcr" },
            ]}
            bullets={[
              "Encrypt and decrypt files or folders with one passphrase.",
              "Live strength indicator and a confirmation field on encrypt.",
              "Configurable Argon2id memory cap on decrypt.",
            ]}
          />
          <ModeCard
            tag="02 · Key pair"
            kind="keypair"
            icon={<Key width={22} height={22} />}
            title="Public-key encryption"
            body="Encryption uses one or more X25519 recipient public keys. Decryption uses the matching password-protected private key. Typical use: sending encrypted data to someone else, or to several recipients at once."
            flow={[
              { label: "Recipient", value: "X25519 public key" },
              { label: "Agreement", value: "ECDH → HKDF-SHA3-256" },
              { label: "Payload", value: "XChaCha20-Poly1305" },
              { label: "Verify", value: "SHA3-256 fingerprint" },
            ]}
            bullets={[
              "Encrypt and decrypt files or folders with a key pair.",
              "Public keys are shared as fcr1… recipient strings.",
              "Multiple recipients can be combined into a single .fcr file.",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

interface ModeCardProps {
  tag: string;
  kind: "passphrase" | "keypair";
  icon: React.ReactNode;
  title: string;
  body: string;
  flow: { label: string; value: string }[];
  bullets: string[];
}

function ModeCard({ tag, kind, icon, title, body, flow, bullets }: ModeCardProps) {
  return (
    <article className={`${styles.card} ${styles[kind]}`}>
      <div className={styles.cardTop}>
        <span className={styles.cardTag}>{tag}</span>
        <span className={styles.iconWrap}>{icon}</span>
      </div>

      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardBody}>{body}</p>

      <div className={styles.flow} aria-hidden="true">
        {flow.map((step, i) => (
          <div className={styles.flowStep} key={step.label}>
            <span className={styles.flowLabel}>{step.label}</span>
            <span className={styles.flowValue}>{step.value}</span>
            {i < flow.length - 1 && (
              <span className={styles.flowArrow}>→</span>
            )}
          </div>
        ))}
      </div>

      <ul className={styles.bullets}>
        {bullets.map((b) => (
          <li key={b}>
            <span className={styles.bulletDot} aria-hidden="true" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
