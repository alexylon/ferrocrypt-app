import CopyButton from "./CopyButton";
import { platforms } from "../data/platforms";
import { Arrow, GitHub } from "./Icons";
import styles from "./Download.module.css";

export default function Download() {
  return (
    <section id="download" className={styles.section}>
      <div className="container">
        <div className={`section-head center ${styles.head}`}>
          <span className="section-eyebrow">Download</span>
          <h2 className="section-title">
            Get <span className={styles.headAccent}>FerroCrypt</span>
          </h2>
          <p className="section-lede">
            Pre-built desktop packages for macOS, Linux, and Windows are on the{" "}
            <a
              href="https://github.com/alexylon/ferrocrypt/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Releases
            </a>{" "}
            page.
          </p>
        </div>

        <div className={styles.platforms}>
          {platforms.map(({ Icon, name, artifacts, note }) => (
            <a
              key={name}
              href="https://github.com/alexylon/ferrocrypt/releases/latest"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.platform}
            >
              <span className={styles.platformIcon}>
                <Icon width={26} height={26} />
              </span>
              <h3 className={styles.platformName}>{name}</h3>
              <p className={styles.platformArtifacts}>{artifacts}</p>
              <p className={styles.platformNote}>{note}</p>
              <span className={styles.platformCta}>
                Download
                <Arrow width={14} height={14} />
              </span>
            </a>
          ))}
        </div>

        <div className={styles.advanced}>
          <div className={styles.advancedHead}>
            <span className={styles.advancedTag}>For developers</span>
            <h3 className={styles.advancedTitle}>Library and CLI</h3>
            <p className={styles.advancedBody}>
              The desktop app and the command-line tool are both built on the
              <code className={styles.inlineCode}>{" "}ferrocrypt{" "}</code> Rust
              library. You can install the CLI for scripts, or use the
              library directly from Rust code.
            </p>
          </div>

          <div className={styles.cards}>
            <article className={styles.card}>
              <header className={styles.cardHeader}>
                <span className={styles.cardLabel}>Command line</span>
                <a
                  className={styles.cardSource}
                  href="https://crates.io/crates/ferrocrypt-cli"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  crates.io ↗
                </a>
              </header>
              <div className={styles.codeWrapper}>
                <pre className={styles.code}>
                  <code>cargo install ferrocrypt-cli</code>
                </pre>
                <CopyButton text="cargo install ferrocrypt-cli" />
              </div>
              <pre className={styles.codeBlock}>
{`# Encrypt a file with a passphrase
ferrocrypt encrypt -i secret.txt -o ./out

# Generate a key pair, encrypt for it
ferrocrypt keygen -o ./keys
ferrocrypt encrypt -i secret.txt -o ./out -k ./keys/public.key

# Decrypt with the matching private key
ferrocrypt decrypt -i ./out/secret.fcr -o ./plain \\
  -K ./keys/private.key`}
              </pre>
            </article>

            <article className={styles.card}>
              <header className={styles.cardHeader}>
                <span className={styles.cardLabel}>Rust library</span>
                <a
                  className={styles.cardSource}
                  href="https://docs.rs/ferrocrypt/latest/ferrocrypt/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  docs.rs ↗
                </a>
              </header>
              <div className={styles.codeWrapper}>
                <pre className={styles.code}>
                  <code>cargo add ferrocrypt</code>
                </pre>
                <CopyButton text="cargo add ferrocrypt" />
              </div>
              <pre className={styles.codeBlock}>
{`use ferrocrypt::{encrypt, decrypt};

// Encrypt a file with a passphrase
encrypt::passphrase(
    "secret.txt",
    "./out",
    passphrase,
)?;

// Decrypt with credentials chosen by the file
decrypt::run("./out/secret.fcr", "./plain", &creds)?;`}
              </pre>
            </article>
          </div>

          <a
            className={styles.repoLink}
            href="https://github.com/alexylon/ferrocrypt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHub width={16} height={16} />
            github.com/alexylon/ferrocrypt
          </a>
        </div>
      </div>
    </section>
  );
}
