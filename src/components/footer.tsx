import { GitHubIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { site } from "@/lib/site";

const socialLinks = [
  { label: "Email", href: `mailto:${site.email}`, icon: MailIcon, external: false },
  { label: "GitHub", href: site.githubUrl, icon: GitHubIcon, external: true },
  { label: "LinkedIn", href: site.linkedinUrl, icon: LinkedInIcon, external: true },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-bg-card shadow-[inset_0_1px_0_0_var(--color-surface-highlight)]">
      <div className="mx-auto grid max-w-7xl justify-items-center gap-y-2 px-6 py-3 sm:grid-cols-3 sm:py-2.5">
        <p className="self-center font-display text-[15px] font-bold leading-none text-text-primary sm:justify-self-start">
          Build<span className="text-brand-primary">Verified</span>
        </p>
        <div className="flex items-center gap-2.5">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              aria-label={item.label}
              title={item.label}
              {...(item.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
              className="rounded-sm border border-transparent p-2 text-text-muted transition-all duration-200 hover:border-accent-hover/30 hover:bg-accent/5 hover:text-accent hover:shadow-accent-md"
            >
              <item.icon className="h-[19px] w-[19px]" />
            </a>
          ))}
        </div>
        <p className="self-center font-mono text-[10.5px] tracking-[0.14em] text-text-muted sm:justify-self-end">
          © {new Date().getFullYear()} {site.name}
        </p>
      </div>
    </footer>
  );
}
