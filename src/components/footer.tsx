export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-primary">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold text-text-primary">
              Ben Armour
            </p>
            <p className="mt-0.5 text-xs text-text-muted">
              Software QA Engineer
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://linkedin.com/in/ben-armour"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              LinkedIn
            </a>
            <a
              href="mailto:armourbl@mail.uc.edu"
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              Email
            </a>
          </div>
          <p className="text-xs text-text-muted md:text-right">
            &copy; {new Date().getFullYear()} Ben Armour
          </p>
        </div>
      </div>
    </footer>
  );
}
