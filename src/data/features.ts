import type { ComponentType, SVGProps } from "react";
import {
  Cube,
  FilesShield,
  Key,
  Lock,
  NoCloud,
  Plug,
  ShieldCheck,
  Terminal,
} from "../components/Icons";

export interface Feature {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    Icon: Lock,
    title: "Authenticated encryption",
    description:
      "Payload chunks are encrypted with XChaCha20-Poly1305 in STREAM-BE32 mode. If a header or payload byte is modified, decryption stops with a typed authentication error instead of producing plaintext.",
  },
  {
    Icon: Key,
    title: "Two encryption modes",
    description:
      "Encrypt with a passphrase (Argon2id) or with one or more X25519 recipient public keys. Both modes write the same .fcr file format; the receiver does not need to know which was used.",
  },
  {
    Icon: FilesShield,
    title: "Files and folders",
    description:
      "Encrypts a single file or an entire directory. Large inputs are processed in chunks, so memory usage stays flat. Directories are packed into the FerroCrypt Archive (FCA) format inside the encrypted payload.",
  },
  {
    Icon: NoCloud,
    title: "Local-only",
    description:
      "No accounts, no telemetry, no network access during encryption or decryption. Plaintext, passphrases, and private keys are read and written only on the local machine.",
  },
  {
    Icon: Cube,
    title: "Pure Rust",
    description:
      "Uses RustCrypto primitives and does not depend on OpenSSL. The library is annotated #![forbid(unsafe_code)]. Directory extraction is anchored to cap-std capability handles that refuse symlinks at every step.",
  },
  {
    Icon: Plug,
    title: "Multi-recipient files",
    description:
      "A single .fcr file can be encrypted to several X25519 public keys at once; any matching private key can decrypt it. Public keys can be shared as fcr1… recipient strings.",
  },
  {
    Icon: Terminal,
    title: "Library, with desktop and CLI on top",
    description:
      "The ferrocrypt library does the encryption. The desktop app and the ferrocrypt-cli command-line tool are two frontends on the same library. All three read and write the same .fcr file format.",
  },
  {
    Icon: ShieldCheck,
    title: "Atomic output",
    description:
      "Encrypted output and generated key files are written to a staged path first, then moved into place. A failed decrypt never writes to the final output path; partials can be retained for inspection if requested.",
  },
];
