import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

export function ShieldKey({ size = 22, ...props }: IconProps & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M16 3.5 5.5 7v8.4c0 6.8 4.6 10.9 10.5 13.1 5.9-2.2 10.5-6.3 10.5-13.1V7L16 3.5Z"
        stroke="url(#sk-stroke)"
        strokeWidth="1.5"
        strokeLinejoin="round"
        fill="url(#sk-fill)"
      />
      <circle cx="16" cy="14" r="2.6" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M16 16.6v5.4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M16 20.2h1.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <defs>
        <linearGradient id="sk-stroke" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#7df3ff" />
          <stop offset="1" stopColor="#0ab3c4" />
        </linearGradient>
        <linearGradient id="sk-fill" x1="0" y1="0" x2="0" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0c1424" />
          <stop offset="1" stopColor="#080d1a" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Lock(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V8a4 4 0 1 1 8 0v3" />
      <circle cx="12" cy="16" r="1.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function Key(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="8" cy="12" r="4" />
      <path d="M11.5 13.5 21 4" />
      <path d="m17 8 2 2" />
      <path d="m14.5 10.5 2 2" />
    </svg>
  );
}

export function FilesShield(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6" />
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M19 7v6" />
      <path d="m16 14 3 7 3-7c-1.5.6-4.5.6-6 0Z" />
    </svg>
  );
}

export function Cube(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m12 2.5 9 5v9l-9 5-9-5v-9l9-5Z" />
      <path d="m3.5 7.5 8.5 5 8.5-5" />
      <path d="M12 12.5V21" />
    </svg>
  );
}

export function Terminal(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="m7 9 3 3-3 3" />
      <path d="M13 15h4" />
    </svg>
  );
}

export function Plug(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M9 2v6" />
      <path d="M15 2v6" />
      <path d="M5 8h14v3a5 5 0 0 1-5 5h-4a5 5 0 0 1-5-5V8Z" />
      <path d="M12 16v6" />
    </svg>
  );
}

export function NoCloud(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M19.5 16a4 4 0 0 0-3-7.4 5.5 5.5 0 0 0-10.4 1.8" />
      <path d="M5 16h11" />
      <path d="m4 4 16 16" />
    </svg>
  );
}

export function GitHub(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.87-1.54-3.87-1.54-.52-1.32-1.28-1.67-1.28-1.67-1.04-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.55-.29-5.24-1.27-5.24-5.66 0-1.25.45-2.27 1.18-3.07-.12-.29-.51-1.45.11-3.03 0 0 .97-.31 3.17 1.18a11.05 11.05 0 0 1 5.78 0c2.2-1.49 3.17-1.18 3.17-1.18.62 1.58.23 2.74.11 3.03.74.8 1.18 1.82 1.18 3.07 0 4.4-2.69 5.37-5.25 5.65.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

export function Arrow(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

export function Check(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="m5 12 5 5 9-11" />
    </svg>
  );
}

export function CopyIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

export function ShieldCheck(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2.5 4 5v6.2c0 5.1 3.6 8 8 9.3 4.4-1.3 8-4.2 8-9.3V5l-8-2.5Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function Apple(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M17.05 12.04c-.03-3.07 2.5-4.55 2.61-4.62-1.42-2.08-3.63-2.36-4.42-2.39-1.88-.19-3.66 1.1-4.61 1.1-.96 0-2.42-1.07-3.97-1.04-2.04.03-3.93 1.18-4.98 3.01-2.12 3.69-.54 9.15 1.53 12.16 1.01 1.47 2.21 3.12 3.78 3.07 1.52-.06 2.09-.98 3.93-.98 1.83 0 2.35.98 3.96.95 1.63-.03 2.67-1.5 3.67-2.97 1.16-1.7 1.63-3.35 1.66-3.43-.04-.02-3.18-1.22-3.21-4.85ZM14.06 3.27c.84-1.02 1.41-2.43 1.25-3.85-1.21.05-2.68.81-3.55 1.82-.78.91-1.46 2.36-1.28 3.74 1.35.1 2.73-.69 3.58-1.71Z" />
    </svg>
  );
}

export function Linux(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12.5 0c-3 0-3.6 4.7-3 7-1 .9-1.7 2.2-2 3.7-.4 1.7-.8 4.4-2 6.1-.4.6-.7 1.4-.4 2 .1.3.4.6.8.6.4 0 1-.1 1.5-.4l.7-.3a.8.8 0 0 0 .4-.7c0-.2.1-.4.2-.4l.4.1c.4.5 1 1 1.8 1.1.6.1 1.2 0 1.7-.2.6 1.4 2 2.4 3.6 2.4 1.6 0 3-.9 3.5-2.3l.3-.1c.7 0 1.2-.4 1.6-.8.4-.5.6-1 .6-1.4 0-.4.5-.6 1.1-.8.6-.2 1.2-.6 1.2-1.3 0-.5-.5-.9-1-1.4-.4-.4-1-.8-1.4-1.4-.6-.9-1-2-1.2-3-.3-1.5-1.1-2.7-2-3.6.5-2 .1-7-3.4-7Zm-2 4.5c.5 0 1 .5 1 1s-.5 1-1 1-1-.5-1-1 .5-1 1-1Zm3.2 0c.5 0 1 .5 1 1s-.5 1-1 1-1-.5-1-1 .5-1 1-1Zm-2 2.7c.6 0 1.1.2 1.4.5l-.5.4-.4.4c-.1.1-.3.1-.5.1s-.5-.1-.6-.1l-.5-.4-.4-.4c.3-.3.9-.5 1.5-.5Z" />
    </svg>
  );
}

export function Windows(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M0 3.4 9.8 2v9.5H0V3.4Zm0 17.2V12h9.8v9.6L0 20.6ZM10.9 12H24v10.5l-13.1-1.6V12Zm0-9.8L24 1.5V11H10.9V2.2Z" />
    </svg>
  );
}
