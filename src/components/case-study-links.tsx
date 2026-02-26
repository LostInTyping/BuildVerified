import type { CaseStudyLink, CaseStudyLinkKind } from "@/lib/case-studies";

const defaultNotes: Record<CaseStudyLinkKind, string> = {
  public_reference: "Public reference",
  restricted_access: "Login required",
  client_site: "Client website",
};

interface CaseStudyLinksProps {
  links?: CaseStudyLink[];
  className?: string;
}

export function CaseStudyLinks({ links, className = "" }: CaseStudyLinksProps) {
  if (!links?.length) return null;

  return (
    <div className={className}>
      <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-text-muted">
        Links
      </p>
      <div className="mt-2 space-y-1.5">
        {links.map((link) => (
          <p key={`${link.label}-${link.url}`} className="text-xs text-text-secondary">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent transition-colors hover:text-accent-hover hover:underline"
            >
              {link.label}
            </a>
            <span className="ml-1.5 text-text-muted">
              ({link.note ?? defaultNotes[link.kind]})
            </span>
          </p>
        ))}
      </div>
    </div>
  );
}
