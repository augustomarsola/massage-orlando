import type { SVGProps } from "react";

export function SmsIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M4 5.5h16a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9.2L5 19.7V16.5H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="8.5" cy="11" r="1.2" fill="currentColor" />
      <circle cx="12" cy="11" r="1.2" fill="currentColor" />
      <circle cx="15.5" cy="11" r="1.2" fill="currentColor" />
    </svg>
  );
}

