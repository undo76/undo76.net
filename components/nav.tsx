import Link from "next/link";
import cx from "classnames";

const links = [
  { href: "https://github.com/vercel/next.js", label: "GitHub" },
  { href: "https://nextjs.org/docs", label: "Docs" },
  {
    href: "https://google.com",
    label: "Google",
    klass: "bg-red-700",
  },
  {
    href: "https://twitter.com",
    icon: (
      <svg
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "Twitter",
  },
];

export default function Nav() {
  return (
    <nav>
      <ul className="flex justify-between items-center p-8">
        <li>
          <Link href="/">
            <a className="text-blue-500 no-underline">Home</a>
          </Link>
        </li>
        <ul className="flex justify-between items-center space-x-4">
          {links.map(({ href, label, icon, klass }) => (
            <li key={`${href}${label}`}>
              <a
                href={href}
                className={cx(
                  "inline-flex items-center text-xs shadow",
                  { "btn-blue ": true },
                  klass
                )}
              >
                {icon && (
                  <span className="mr-2 stroke-current h-4 w-4">{icon}</span>
                )}
                <span className="animate-pulse">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </ul>
    </nav>
  );
}
