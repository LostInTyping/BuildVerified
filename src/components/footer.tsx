import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { site } from "@/lib/site";

const socialLinks = [
  { label: "Email", href: `mailto:${site.email}`, icon: MailIcon, external: false },
  { label: "GitHub", href: site.githubUrl, icon: GitHubIcon, external: true },
  { label: "LinkedIn", href: site.linkedinUrl, icon: LinkedInIcon, external: true },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-card">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-2 px-6 py-3 sm:justify-between">
        <div className="flex items-center gap-2.5">
          <p className="font-display text-[15px] font-bold leading-none text-text-primary">
            Build<span className="text-brand-primary">Verified</span>
          </p>
          <span aria-hidden="true" className="text-accent">
            ·
          </span>
          <span className="relative flex h-1.5 w-1.5 shrink-0" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-secondary opacity-60 motion-reduce:animate-none" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-secondary shadow-[0_0_8px_color-mix(in_srgb,var(--color-brand-secondary)_70%,transparent)]" />
          </span>
          <p className="font-mono text-[11px] uppercase tracking-[0.15em] text-brand-secondary">
            Available now
          </p>
        </div>
        <div className="flex items-center gap-1">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              title={item.label}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="p-2.5 text-text-muted transition-colors duration-200 hover:text-accent"
            >
              <item.icon className="h-[15px] w-[15px]" />
            </a>
          ))}
          <span aria-hidden="true" className="pl-1 pr-2 text-accent">
            ·
          </span>
          <p className="font-mono text-[10.5px] tracking-[0.14em] text-text-muted">
            © {new Date().getFullYear()} {site.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
