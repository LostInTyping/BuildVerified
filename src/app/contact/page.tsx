import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { SlideIn } from "@/components/slide-in";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for QA engineering opportunities.",
  openGraph: {
    url: "/contact",
  },
};

const railItems = [
  {
    label: "Email",
    href: `mailto:${site.email}`,
    text: site.email,
    external: false,
    icon: (
      <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm0 2.4 8 5.1 8-5.1" />
    ),
  },
  {
    label: "GitHub",
    href: site.githubUrl,
    text: site.githubLabel,
    external: true,
    icon: (
      <path d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.62-.2.62-.44v-1.68c-2.5.55-3.03-1.07-3.03-1.07-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.38 2.11.98 2.63.75.08-.58.31-.98.57-1.2-2-.23-4.1-1-4.1-4.45 0-.98.35-1.79.93-2.42-.1-.23-.4-1.15.08-2.4 0 0 .76-.24 2.48.92a8.6 8.6 0 0 1 4.51 0c1.72-1.16 2.47-.92 2.47-.92.49 1.25.18 2.17.09 2.4.58.63.93 1.44.93 2.42 0 3.47-2.11 4.22-4.12 4.44.32.28.61.83.61 1.67v2.48c0 .24.16.52.62.43A9 9 0 0 0 12 3Z" />
    ),
  },
  {
    label: "LinkedIn",
    href: site.linkedinUrl,
    text: site.linkedinLabel,
    external: true,
    icon: (
      <path d="M6.5 8.8v9.7M6.5 5.5v.1m4.3 3.2v9.7m0-6.8c0-1.6 1.3-2.9 2.9-2.9s2.9 1.3 2.9 2.9v6.8" />
    ),
  },
  {
    label: "Location",
    href: null,
    text: "Mason, OH. Open to on-site, hybrid, and remote. Willing to relocate within the US or abroad.",
    external: false,
    icon: (
      <path d="M12 21s-6.5-5.2-6.5-10a6.5 6.5 0 0 1 13 0c0 4.8-6.5 10-6.5 10Zm0-8.2a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z" />
    ),
  },
];

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <FadeIn>
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
          Get in touch<span className="terminal-cursor">_</span>
        </p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-bg-card px-3 py-1">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status-pass opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-status-pass" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-secondary">
            Open to QA opportunities
          </span>
        </div>
        <h1 className="font-display mt-5 text-4xl font-bold leading-tight sm:text-5xl">
          Let&apos;s build something{" "}
          <span className="gradient-text-brand">verified.</span>
        </h1>
        <p className="mt-4 max-w-xl text-text-secondary">
          Reach out directly or use the form. Either way it lands in my inbox.
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1.2fr]">
        {/* Contact rail */}
        <SlideIn direction="left" delay={0.1}>
          <ul className="space-y-7">
            {railItems.map((item) => (
              <li key={item.label} className="flex gap-3.5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                >
                  {item.icon}
                </svg>
                <div>
                  <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted">
                    {item.label}
                  </h2>
                  {item.href ? (
                    <a
                      href={item.href}
                      {...(item.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="mt-1 block text-sm text-text-primary transition-colors hover:text-accent"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-text-secondary">{item.text}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </SlideIn>

        {/* Form panel */}
        <SlideIn direction="right" delay={0.15}>
          <div className="portfolio-card rounded-sm border border-border bg-bg-card p-6 sm:p-8">
            <ContactForm />
          </div>
        </SlideIn>
      </div>
    </main>
  );
}
