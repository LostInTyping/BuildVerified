export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-primary">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-8">
        <p className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Ben Armour
        </p>
        <div className="flex gap-4">
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
      </div>
    </footer>
  );
}
