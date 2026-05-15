import styles from "./Cryptography.module.css";
import { Check } from "./Icons";

interface Primitive {
  role: string;
  name: string;
  note: string;
}

const primitives: Primitive[] = [
  {
    role: "Payload encryption",
    name: "XChaCha20-Poly1305",
    note: "STREAM-BE32, audited by NCC Group",
  },
  {
    role: "Passphrase KDF",
    name: "Argon2id",
    note: "Memory-hard, configurable cap",
  },
  {
    role: "Public-key agreement",
    name: "X25519",
    note: "Curve25519 elliptic-curve Diffie-Hellman",
  },
  {
    role: "Key derivation",
    name: "HKDF-SHA3-256",
    note: "Domain-separated, per recipient",
  },
  {
    role: "Header authentication",
    name: "HMAC-SHA3-256",
    note: "Authenticated metadata before any plaintext",
  },
  {
    role: "Public-key fingerprint",
    name: "SHA3-256",
    note: "Stable ID for independent verification",
  },
  {
    role: "Recipient encoding",
    name: "Bech32",
    note: "Lowercase fcr1… strings, error-detecting",
  },
];

const commitments = [
  {
    title: "Forbids unsafe code",
    body: "The ferrocrypt library is annotated #![forbid(unsafe_code)] — no raw pointers, no FFI, no exceptions.",
  },
  {
    title: "Hardened directory extraction",
    body: "cap-std capability handles refuse symlinks at every step. On Windows, NTFS reparse points are rejected explicitly.",
  },
  {
    title: "Atomic, no-clobber output",
    body: "Files stage to .incomplete first. Final renames refuse to overwrite. Failed decrypts leave no plaintext at the target path.",
  },
  {
    title: "Typed library errors",
    body: "Wrong credentials, tampered files, truncation, KDF caps — each surface as a distinct error so applications can respond correctly.",
  },
];

export default function Cryptography() {
  return (
    <section id="cryptography" className={styles.section}>
      <div className="container">
        <div className={`section-head center ${styles.head}`}>
          <span className="section-eyebrow">Cryptography</span>
          <h2 className="section-title">
            Primitives and file format
          </h2>
          <p className="section-lede">
            The on-disk format is documented in
            {" "}
            <a
              href="https://github.com/alexylon/ferrocrypt/blob/main/ferrocrypt-lib/FORMAT.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              FORMAT.md
            </a>
            . Every byte of a <code className={styles.code}>.fcr</code> file is
            either authenticated metadata or encrypted payload.
          </p>
        </div>

        <div className={styles.layout}>
          <div className={styles.table} role="table" aria-label="Cryptographic primitives">
            <div className={styles.tableHead} role="row">
              <span role="columnheader">Role</span>
              <span role="columnheader">Primitive</span>
            </div>
            {primitives.map((p) => (
              <div className={styles.row} role="row" key={p.role}>
                <span className={styles.rowRole} role="cell">{p.role}</span>
                <span className={styles.rowName} role="cell">
                  <strong>{p.name}</strong>
                  <span className={styles.rowNote}>{p.note}</span>
                </span>
              </div>
            ))}
            <div className={styles.tableFoot}>
              <span className={styles.footMark}>!</span>
              <span>
                FerroCrypt has not undergone an independent third-party security
                audit. The <a href="https://research.nccgroup.com/2020/02/26/public-report-rustcrypto-aes-gcm-and-chacha20poly1305-implementation-review/" target="_blank" rel="noopener noreferrer">chacha20poly1305</a> crate used for payload
                encryption was audited by NCC Group.
              </span>
            </div>
          </div>

          <div className={styles.commitments}>
            <h3 className={styles.commitmentsTitle}>Engineering commitments</h3>
            <ul className={styles.commitmentsList}>
              {commitments.map((c) => (
                <li key={c.title} className={styles.commitmentItem}>
                  <span className={styles.commitmentIcon}>
                    <Check width={14} height={14} />
                  </span>
                  <div>
                    <strong className={styles.commitmentName}>{c.title}</strong>
                    <p className={styles.commitmentBody}>{c.body}</p>
                  </div>
                </li>
              ))}
            </ul>
            <a
              className={styles.docsLink}
              href="https://github.com/alexylon/ferrocrypt/blob/main/SECURITY.md"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the security policy →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
