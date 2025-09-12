import type { SVGProps } from "react";

export function PhoneIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.5 5.5c0-1.105.895-2 2-2h2.1c.86 0 1.617.552 1.884 1.368l.93 2.86c.25.769-.087 1.61-.806 2.02l-1.05.6c-.33.189-.48.58-.357.936a13.96 13.96 0 0 0 7.445 7.446c.355.123.747-.028.936-.358l.6-1.049c.41-.719 1.25-1.056 2.02-.807l2.86.93A2.003 2.003 0 0 1 20.5 19.4V21.5c0 1.105-.895 2-2 2h-.75C8.268 23.5.5 15.732.5 6.25V5.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

