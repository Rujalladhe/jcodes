import type { SVGProps } from "react";

/* ChainGPT signature gradient stops: coral #FC6756 → gold #F8CF3E → teal #26F4D0 → violet #724CE8 */

type IconProps = SVGProps<SVGSVGElement>;

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Sun — shown in dark mode (click to go light) */
export function SunIcon(props: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8L6 18M18 6l1.8-1.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* Moon — shown in light mode (click to go dark) */
export function MoonIcon(props: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M20 14.2A8 8 0 1 1 9.8 4 6.3 6.3 0 0 0 20 14.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* The 2x3 dotted grid mark beside "OUR ECOSYSTEM" */
export function EcosystemGridIcon(props: IconProps) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {[1.5, 7, 12.5].map((y) =>
        [3, 11].map((x) => <circle key={`${x}-${y}`} cx={x} cy={y} r="1.3" fill="currentColor" />)
      )}
    </svg>
  );
}

/* Two dots ".." used in eyebrow labels / buttons */
export function DoubleDotsIcon(props: IconProps) {
  return (
    <svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx="1.7" cy="2.1" r="1.65" fill="currentColor" />
      <circle cx="12.3" cy="2.1" r="1.65" fill="currentColor" />
    </svg>
  );
}

export function ArrowDownIcon(props: IconProps) {
  return (
    <svg width="22" height="48" viewBox="0 0 22 48" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M11 0V46M11 46L1 36M11 46L21 36" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/* Diagonal up-right link arrow */
export function ArrowDiagonalIcon(props: IconProps) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M3 11L11 3M11 3H4M11 3V10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1 7H19M19 7L13 1M19 7L13 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowLeftIcon(props: IconProps) {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M19 7H1M1 7L7 1M1 7L7 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function PlusIcon(props: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M8 1V15M1 8H15" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

export function MinusIcon(props: IconProps) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1 8H15" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

/* ===== Social icons (footer + join section) ===== */
export function TelegramIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M21.94 4.6L19 19.06c-.22 1-.81 1.24-1.64.77l-4.53-3.34-2.19 2.1c-.24.24-.44.44-.9.44l.32-4.6 8.4-7.59c.37-.32-.08-.5-.57-.18L6.92 13.6l-4.47-1.4c-.97-.3-.99-.97.2-1.44l17.5-6.74c.81-.3 1.52.18 1.26 1.42z" />
    </svg>
  );
}

export function DiscordIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M20.32 4.57A19.8 19.8 0 0015.45 3l-.24.45a18.3 18.3 0 014.34 1.4 16.3 16.3 0 00-12.16 0A18.3 18.3 0 018.8 3.45L8.55 3A19.8 19.8 0 003.68 4.57C.6 9.18-.24 13.67.18 18.1a20 20 0 006.1 3.1l.5-1.1a13 13 0 01-1.97-.95l.36-.28a14.3 14.3 0 0012.2 0l.36.28c-.62.37-1.28.69-1.97.95l.5 1.1a20 20 0 006.1-3.1c.5-5.13-.84-9.58-3.54-13.53zM8.02 15.33c-1.18 0-2.15-1.1-2.15-2.44 0-1.35.95-2.45 2.15-2.45 1.2 0 2.17 1.1 2.15 2.45 0 1.34-.95 2.44-2.15 2.44zm7.96 0c-1.18 0-2.15-1.1-2.15-2.44 0-1.35.95-2.45 2.15-2.45 1.2 0 2.17 1.1 2.15 2.45 0 1.34-.95 2.44-2.15 2.44z" />
    </svg>
  );
}

export function TwitterIcon(props: IconProps) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M18.9 1.15h3.68l-8.04 9.19L24 22.85h-7.4l-5.8-7.58-6.64 7.58H.48l8.6-9.83L0 1.15h7.59l5.24 6.93 6.07-6.93zm-1.29 19.5h2.04L6.49 3.24H4.3L17.61 20.65z" />
    </svg>
  );
}

export function YoutubeIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M23.5 6.2a3 3 0 00-2.12-2.13C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.52A3 3 0 00.5 6.2 31.3 31.3 0 000 12a31.3 31.3 0 00.5 5.8 3 3 0 002.12 2.13c1.88.52 9.38.52 9.38.52s7.5 0 9.38-.52a3 3 0 002.12-2.13A31.3 31.3 0 0024 12a31.3 31.3 0 00-.5-5.8zM9.6 15.57V8.43L15.8 12l-6.2 3.57z" />
    </svg>
  );
}

export function MediumIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M13.54 12c0 3.32-2.7 6.01-6.04 6.01S1.46 15.32 1.46 12 4.16 5.99 7.5 5.99s6.04 2.69 6.04 6.01zm6.63 0c0 3.13-1.35 5.66-3.02 5.66s-3.02-2.53-3.02-5.66 1.35-5.66 3.02-5.66S20.17 8.87 20.17 12zM24 12c0 2.8-.48 5.07-1.06 5.07-.59 0-1.06-2.27-1.06-5.07s.47-5.07 1.06-5.07S24 9.2 24 12z" />
    </svg>
  );
}

export function LinkedinIcon(props: IconProps) {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.07 2.07 0 110-4.14 2.07 2.07 0 010 4.14zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.73v20.53C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.74V1.73C24 .78 23.2 0 22.22 0z" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.69.24 2.69.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.89v2.25h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 01-1.38-.9 3.7 3.7 0 01-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07c-1.28.06-2.15.26-2.91.56-.79.3-1.46.72-2.13 1.38A5.9 5.9 0 00.63 4.14c-.3.76-.5 1.63-.56 2.91C.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.28.26 2.15.56 2.91.3.79.72 1.46 1.38 2.13.67.66 1.34 1.08 2.13 1.38.76.3 1.63.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.28-.06 2.15-.26 2.91-.56a5.9 5.9 0 002.13-1.38 5.9 5.9 0 001.38-2.13c.3-.76.5-1.63.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.28-.26-2.15-.56-2.91a5.9 5.9 0 00-1.38-2.13A5.9 5.9 0 0019.86.63c-.76-.3-1.63-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zM12 16a4 4 0 110-8 4 4 0 010 8zm6.41-10.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
    </svg>
  );
}

export function GithubIcon(props: IconProps) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 .3a12 12 0 00-3.8 23.4c.6.1.8-.26.8-.57v-2.2c-3.34.72-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.08-.75.09-.73.09-.73 1.2.08 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49.99.1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.66.25 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .31.21.68.81.57A12 12 0 0012 .3z" />
    </svg>
  );
}
