import styles from "./Modes.module.css";
import { Key, Lock } from "./Icons";

export default function Modes() {
  return (
    <section id="modes" className={styles.section}>
      <div className="container">
        <div className={`section-head center ${styles.head}`}>
          <span className="section-eyebrow">Two modes</span>
          <h2 className="section-title">
            One file format,{" "}
            <span className={styles.headAccent}>two ways to seal it.</span>
          </h2>
          <p className="section-lede">
            Both modes produce the same <code className={styles.code}>.fcr</code>{" "}
            file. FerroCrypt reads its own header to know which one to use on the
            way back — you never pick the wrong tool.
          </p>
        </div>

        <div className={styles.grid}>
          <ModeCard
            tag="01 · Password"
            kind="passphrase"
            icon={<Lock width={22} height={22} />}
            title="Encrypt with a passphrase"
            body="Choose a passphrase strong enough to resist offline guessing. Argon2id stretches it on encrypt and decrypt; the same passphrase opens the file. Ideal for personal archives."
            flow={[
              { label: "Passphrase", value: "argon2id" },
              { label: "Key wrap", value: "HKDF-SHA3-256" },
              { label: "Payload", value: "XChaCha20-Poly1305" },
              { label: "Output", value: ".fcr" },
            ]}
            bullets={[
              "Live strength meter, no silent weak passwords.",
              "Confirmation field prevents typos in the only key you have.",
              "Configurable Argon2id memory cap on decrypt.",
            ]}
          />
          <ModeCard
            tag="02 · Key pair"
            kind="keypair"
            icon={<Key width={22} height={22} />}
            title="Encrypt for a public key"
            body="Generate an X25519 key pair, share the public half, keep the password-protected private half. A single file can be encrypted for many recipients — any matching private key unlocks it."
            flow={[
              { label: "Recipient", value: "X25519 public key" },
              { label: "Agreement", value: "ECDH → HKDF-SHA3-256" },
              { label: "Payload", value: "XChaCha20-Poly1305" },
              { label: "Verify", value: "SHA3-256 fingerprint" },
            ]}
            bullets={[
              "Public keys travel as fcr1… recipient strings.",
              "Private keys are stored encrypted, with their own password.",
              "Multi-recipient encryption in a single .fcr file.",
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
