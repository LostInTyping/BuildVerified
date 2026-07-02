import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function Icon({ strokeWidth = 1.5, children, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <Icon strokeWidth={2} {...props}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </Icon>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <Icon strokeWidth={2} {...props}>
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </Icon>
  );
}

export function ArrowLeftIcon(props: IconProps) {
  return (
    <Icon strokeWidth={2} {...props}>
      <path d="M19 12H5" />
      <path d="m12 19-7-7 7-7" />
    </Icon>
  );
}

export function ArrowDownIcon(props: IconProps) {
  return (
    <Icon strokeWidth={2} {...props}>
      <path d="M12 5v14" />
      <path d="m5 12 7 7 7-7" />
    </Icon>
  );
}

export function ReturnIcon(props: IconProps) {
  return (
    <Icon strokeWidth={2} {...props}>
      <path d="M20 5v6a4 4 0 0 1-4 4H5" />
      <path d="m9 10-5 5 5 5" />
    </Icon>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <Icon strokeWidth={2} {...props}>
      <path d="m5 13 4 4 10-10" />
    </Icon>
  );
}

export function CopyIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <rect x="9" y="9" width="11" height="11" rx="1.5" />
      <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
    </Icon>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm0 2.4 8 5.1 8-5.1" />
    </Icon>
  );
}

export function GitHubIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.62-.2.62-.44v-1.68c-2.5.55-3.03-1.07-3.03-1.07-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.38 2.11.98 2.63.75.08-.58.31-.98.57-1.2-2-.23-4.1-1-4.1-4.45 0-.98.35-1.79.93-2.42-.1-.23-.4-1.15.08-2.4 0 0 .76-.24 2.48.92a8.6 8.6 0 0 1 4.51 0c1.72-1.16 2.47-.92 2.47-.92.49 1.25.18 2.17.09 2.4.58.63.93 1.44.93 2.42 0 3.47-2.11 4.22-4.12 4.44.32.28.61.83.61 1.67v2.48c0 .24.16.52.62.43A9 9 0 0 0 12 3Z" />
    </Icon>
  );
}

export function LinkedInIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M6.5 8.8v9.7M6.5 5.5v.1m4.3 3.2v9.7m0-6.8c0-1.6 1.3-2.9 2.9-2.9s2.9 1.3 2.9 2.9v6.8" />
    </Icon>
  );
}

export function FileTextIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7l-4-4Zm0 0v4h4M9.5 12.5h5m-5 4h5" />
    </Icon>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <Icon {...props}>
      <path d="M12 21s-6.5-5.4-6.5-10.2a6.5 6.5 0 0 1 13 0C18.5 15.6 12 21 12 21Z" />
      <circle cx="12" cy="10.5" r="2.2" />
    </Icon>
  );
}
