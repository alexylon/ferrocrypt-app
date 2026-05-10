import type { ComponentType, SVGProps } from "react";
import { Apple, Linux, Windows } from "../components/Icons";

export interface Platform {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  name: string;
  artifacts: string;
  note: string;
}

export const platforms: Platform[] = [
  {
    Icon: Apple,
    name: "macOS",
    artifacts: ".app · Apple silicon & Intel",
    note: "On first run, allow it from Privacy & Security.",
  },
  {
    Icon: Linux,
    name: "Linux",
    artifacts: ".deb · .rpm · AppImage",
    note: "Built for Debian/Ubuntu, Fedora/RHEL.",
  },
  {
    Icon: Windows,
    name: "Windows",
    artifacts: ".msi installer",
    note: "Signed installer · x86_64.",
  },
];
