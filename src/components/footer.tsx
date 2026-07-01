import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-primary">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-base font-semibold text-text-primary">
              {site.name}
            </p>
            <p className="mt-0.5 text-sm text-text-muted">
              {site.role}
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href={site.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-text-secondary transition-colors hover:text-text-primary"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${site.email}`}
              className="text-base text-text-secondary transition-colors hover:text-text-primary"
            >
              Email
            </a>
          </div>
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
