import type { SVGProps } from "react";

export function WhatsAppIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M20 12a8 8 0 0 1-11.86 6.98L4 20l1.02-4.14A8 8 0 1 1 20 12Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M9.9 8.9c.2-.46.77-.56 1.12-.21l.67.67c.26.26.34.65.2.99l-.18.43a.8.8 0 0 0 .19.87l1.3 1.3c.24.24.61.31.92.17l.49-.22c.35-.16.76-.08 1.03.2l.55.55c.35.35.25.92-.21 1.12-1.2.53-2.64.45-3.78-.18-1.11-.62-2.5-1.95-3.24-3.04-.73-1.07-.86-2.43-.46-3.65Z"
        fill="currentColor"
      />
    </svg>
  );
}

