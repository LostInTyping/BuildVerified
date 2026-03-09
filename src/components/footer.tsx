export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-primary">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <p className="text-base font-semibold text-text-primary">
              Ben Armour
            </p>
            <p className="mt-0.5 text-sm text-text-muted">
              Software QA Engineer
            </p>
          </div>
          <div className="flex gap-6">
            <a
              href="https://linkedin.com/in/ben-armour"
              target="_blank"
              rel="noopener noreferrer"
              className="text-base text-text-secondary transition-colors hover:text-text-primary"
            >
              LinkedIn
            </a>
            <a
              href="mailto:armourbl@mail.uc.edu"
              className="text-base text-text-secondary transition-colors hover:text-text-primary"
            >
              Email
            </a>
          </div>
          <p className="text-sm text-text-muted">
            &copy; {new Date().getFullYear()} Ben Armour
          </p>
        </div>
      </div>
    </footer>
  );
}
