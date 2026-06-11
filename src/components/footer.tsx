import Link from "next/link";
import { navLinks } from "@/lib/nav-links";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-primary">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          <div>
            <p className="text-base font-semibold text-text-primary">
              {site.name}
            </p>
            <p className="mt-0.5 text-sm text-text-muted">
              {site.role}
            </p>
            <p className="mt-0.5 text-sm text-text-muted">
              {site.location}
            </p>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-col items-center gap-2 sm:items-end">
            <div className="flex gap-6">
              <a
                href={site.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                LinkedIn
              </a>
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-text-secondary transition-colors hover:text-text-primary"
              >
                Email
              </a>
            </div>
            <p className="text-sm text-text-muted">
              &copy; {new Date().getFullYear()} {site.name}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
