import type { Metadata } from "next";
import type { ComponentType, SVGProps } from "react";
import { FadeIn } from "@/components/fade-in";
import { SlideIn } from "@/components/slide-in";
import { AmbientNebulas } from "@/components/home/ambient-nebulas";
import { ContactForm } from "@/components/contact-form";
import { CopyEmail } from "@/components/copy-email";
import {
  ArrowDownIcon,
  ArrowUpRightIcon,
  FileTextIcon,
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  MapPinIcon,
} from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for QA, SDET, and software development opportunities.",
  openGraph: {
    url: "/contact",
  },
};

type ContactLink = {
  label: string;
  href: string;
  text: string;
  external: boolean;
  // trailing affordance; rows without one get the ↗ arrow
  action?: "copy" | "download";
  icon: ComponentType<SVGProps<SVGSVGElement>>;
};

const resumeFile = "Ben-Armour-Resume.pdf";

const contactLinks: ContactLink[] = [
  {
    label: "Email",
    href: `mailto:${site.email}`,
    text: site.email,
    external: false,
    action: "copy",
    icon: MailIcon,
  },
  {
    label: "GitHub",
    href: site.githubUrl,
    text: site.githubLabel,
    external: true,
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: site.linkedinUrl,
    text: site.linkedinLabel,
    external: true,
    icon: LinkedInIcon,
  },
  {
    label: "Resume",
    href: `/${resumeFile}`,
    text: resumeFile,
    external: true,
    action: "download",
    icon: FileTextIcon,
  },
];

const [locality, region] = site.location.split(", ");

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  url: `${site.url}/contact`,
  mainEntity: {
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    email: `mailto:${site.email}`,
    url: site.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: locality,
      addressRegion: region,
      addressCountry: "US",
    },
    sameAs: [site.githubUrl, site.linkedinUrl],
  },
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <AmbientNebulas />
      <div className="grid gap-12 md:grid-cols-[1fr_1.35fr] lg:gap-16">
        {/* Identity column */}
        <SlideIn direction="left">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
            Get in touch<span className="terminal-cursor">_</span>
          </p>
          <h1 className="font-display mt-4 text-4xl font-bold leading-[1.1] sm:text-[52px]">
            Let&apos;s Build
            <span className="text-brand-primary">Verified</span>
          </h1>
          <p className="mt-4 max-w-md text-[15px] leading-[1.65] text-text-secondary">
            Looking for someone who owns{" "}
            <em className="font-display italic text-text-primary">quality</em>{" "}
            end-to-end? Reach out directly or use the form. Either way it lands
            in my inbox.
          </p>
          <div className="mt-8 flex items-center gap-2.5">
            <span className="relative flex h-2 w-2 shrink-0" aria-hidden="true">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-secondary opacity-60 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-secondary shadow-[0_0_8px_color-mix(in_srgb,var(--color-brand-secondary)_70%,transparent)]" />
            </span>
            <p className="font-mono text-[12px] uppercase tracking-[0.18em] text-brand-secondary [text-shadow:0_0_12px_color-mix(in_srgb,var(--color-brand-secondary)_35%,transparent)]">
              Available now
            </p>
          </div>
          <p className="mt-2 font-mono text-[12px] uppercase tracking-[0.18em] text-text-secondary">
            QA <span className="text-accent">/</span> SDET{" "}
            <span className="text-accent">/</span> Software Dev
          </p>
          <ul className="mt-10">
            {contactLinks.map((item, index) => (
              <li key={item.label} className="group/row relative">
                <a
                  href={item.href}
                  {...(item.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={`flex items-center justify-between gap-3 border-t border-border px-0.5 py-5 transition-[padding,border-color] duration-300 group-hover/row:border-border-hover group-hover/row:pl-2.5 ${
                    index === contactLinks.length - 1 ? "border-b" : ""
                  }`}
                >
                  <item.icon className="h-[17px] w-[17px] shrink-0 text-accent transition duration-300 group-hover/row:scale-105" />
                  <span className="text-sm font-medium text-text-primary">
                    {item.label}
                  </span>
                  <span className="ml-auto min-w-0 truncate font-mono text-[11.5px] text-text-muted transition-colors duration-300 group-hover/row:text-accent">
                    {item.text}
                  </span>
                  {item.action === "copy" ? (
                    <span aria-hidden="true" className="w-[22px] shrink-0" />
                  ) : item.action === "download" ? (
                    <ArrowDownIcon className="h-3.5 w-3.5 shrink-0 text-text-muted transition-all duration-300 group-hover/row:translate-y-0.5 group-hover/row:text-accent" />
                  ) : (
                    <ArrowUpRightIcon className="h-3.5 w-3.5 shrink-0 text-text-muted transition-all duration-300 group-hover/row:-translate-y-0.5 group-hover/row:translate-x-0.5 group-hover/row:text-accent" />
                  )}
                </a>
                {item.action === "copy" && <CopyEmail value={item.text} />}
              </li>
            ))}
          </ul>
        </SlideIn>

        {/* Form: terminal window */}
        <SlideIn direction="right" delay={0.1} className="h-full">
          <ContactForm />
        </SlideIn>
      </div>

      {/* Location */}
      <FadeIn delay={0.2}>
        <p className="mt-10 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center font-mono text-[11px] uppercase tracking-[0.18em] text-text-muted">
          <MapPinIcon className="h-3 w-3 text-accent" />
          <span className="text-text-secondary">{site.location}</span>
          <span aria-hidden="true" className="text-accent">
            ·
          </span>
          <span>
            on-site <span className="text-accent">/</span> hybrid{" "}
            <span className="text-accent">/</span> remote
          </span>
          <span aria-hidden="true" className="text-accent">
            ·
          </span>
          <span>open to relocation, US or abroad</span>
        </p>
      </FadeIn>
    </main>
  );
}
