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
      "XChaCha20-Poly1305 STREAM-BE32 seals every chunk. If a single byte changes — header or payload — decryption refuses to produce plaintext.",
  },
  {
    Icon: Key,
    title: "Two encryption modes",
    description:
      "A passphrase you remember (Argon2id) or an X25519 key pair you share. Both produce the same .fcr format — the receiver doesn’t need to know which you used.",
  },
  {
    Icon: FilesShield,
    title: "Files and folders, streamed",
    description:
      "Encrypt a single file or an entire directory. Streaming chunks keep memory flat even on multi-gigabyte inputs; directories pack into a portable FerroCrypt Archive.",
  },
  {
    Icon: NoCloud,
    title: "Local-only, by design",
    description:
      "No accounts, no telemetry, no cloud. Plaintext, keys, and passphrases never leave your machine. A single app — install it, run it, encrypt.",
  },
  {
    Icon: Cube,
    title: "Pure Rust, no OpenSSL",
    description:
      "Built on audited RustCrypto primitives. The library forbids unsafe code. Hardened extraction refuses symlinks and NTFS reparse points at every directory step.",
  },
  {
    Icon: Plug,
    title: "Multi-recipient, fingerprinted",
    description:
      "A single .fcr can be encrypted to several public keys; any matching private key opens it. SHA3-256 fingerprints give you a stable, verifiable key ID.",
  },
  {
    Icon: Terminal,
    title: "Desktop, CLI, and library",
    description:
      "Use the desktop app for everyday encryption, drop the CLI into scripts, or embed the ferrocrypt crate directly. One format, three surfaces.",
  },
  {
    Icon: ShieldCheck,
    title: "Atomic, recoverable writes",
    description:
      "Output is staged before it’s moved into place. Failed decrypts never write to the final path — and partials can optionally be kept for forensic recovery.",
  },
];
