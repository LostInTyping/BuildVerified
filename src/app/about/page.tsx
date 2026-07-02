import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/fade-in";
import { SlideIn } from "@/components/slide-in";
import { AmbientNebulas } from "@/components/home/ambient-nebulas";
import { ArrowDownIcon } from "@/components/icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Career background, capabilities, education, and approach to software quality.",
  openGraph: {
    url: "/about",
  },
};

const skillGroups = [
  {
    category: "Test Automation",
    description:
      "Designed test automation architecture and built Cypress E2E suites with reusable commands and custom utilities across multi-app platforms. Integrated Jest for unit coverage and Playwright for cross-browser validation.",
    pills: ["Cypress", "Jest", "Playwright"],
  },
  {
    category: "Manual Testing & QA Process",
    description:
      "Test planning and execution from exploratory testing through regression and smoke cycles. Cross-browser and cross-device validation including a custom 1:1 production-parity test lab. Owned the full defect lifecycle from triage to verified fix.",
    pills: [
      "Test Planning",
      "Exploratory Testing",
      "Regression Testing",
      "UAT",
      "Performance Testing",
      "Cross-Browser Testing",
      "Defect Lifecycle",
      "Test Documentation",
    ],
  },
  {
    category: "API Testing",
    description:
      "Validated REST API endpoints with Postman across full request/response cycles. Verified integrations between frontend, backend, and third-party services.",
    pills: ["Postman", "REST APIs"],
  },
  {
    category: "Languages",
    description:
      "Primary languages for test automation, application code, and database queries. TypeScript and JavaScript for test suites and app code, Python for scripting, SQL for data validation.",
    pills: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    category: "Frameworks & Data",
    description:
      "Tested against React frontends and Node.js/Express backends with PostgreSQL and MongoDB data layers. Wrote queries to validate data integrity across service boundaries.",
    pills: ["React", "Node.js", "Express", "PostgreSQL", "MongoDB"],
  },
  {
    category: "CI & Infrastructure",
    description:
      "Configured GitHub Actions pipelines for automated test runs on PRs. Managed test environments with Docker containers and Linux-based staging setups.",
    pills: ["GitHub Actions", "GitLab", "Git", "Docker", "Linux"],
  },
  {
    category: "Tools & Reporting",
    description:
      "Tracked defects and test cases through Jira and QMetry, documented processes in Confluence, and built Tableau dashboards for test reporting and coverage metrics.",
    pills: ["GitHub", "Jira", "QMetry", "Confluence", "Tableau"],
  },
  {
    category: "Agile & Collaboration",
    description:
      "Active in Scrum ceremonies - sprint planning, standups, retrospectives, and story grooming. Reviewed test automation code and worked with developers, PMs, and stakeholders on architecture decisions and branching workflows.",
    pills: [
      "Scrum",
      "Kanban",
      "Sprint Planning",
      "Code Review",
      "Cross-Functional Teams",
    ],
  },
  {
    category: "AI-Assisted Development",
    description:
      "Coordinating multiple AI models in parallel to accelerate development and QA workflows. Using Claude Code, Codex, Gemini, and Kimi concurrently through custom skills, MCP servers, and hook automation - with multi-agent code review pipelines that compare findings across models. Designing agentic workflows that break tasks into independent work streams with human review at every checkpoint.",
    pills: [
      "Claude Code",
      "Codex",
      "Gemini",
      "Kimi",
      "Agent Deck",
      "MCP Servers",
      "Multi-Agent Orchestration",
      "Prompt Engineering",
      "Context Engineering",
      "Agentic Workflows",
      "Custom Skills & Hooks",
      "Human-in-the-Loop Review",
    ],
    wide: true,
  },
];

const jobs = [
  {
    company: "STRATACACHE",
    dates: "May 2024 - Feb 2026",
    role: "Software Quality Analyst II",
    summary:
      "Risk-based test planning for digital menu launches across McDonald's, Taco Bell, KFC, and Burger King on a platform powering 4 million signs globally. Designed the Cypress automation architecture from scratch and built custom test lab infrastructure with 1:1 staging-to-production parity.",
  },
  {
    company: "UC IT Solutions Center",
    dates: "Aug 2022 - May 2024",
    role: "QA Automation Engineer",
    summary:
      "Cypress test suites for criminal justice platforms serving states across the country. Validated enterprise and university systems for clients including Macy's and Brooksource across React, Node.js, and PostgreSQL stacks.",
  },
];

const eyebrowClasses =
  "font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-accent";

const pillClasses =
  "rounded-sm border border-border bg-bg-elevated px-2.5 py-1 font-mono text-[10.5px] text-text-secondary";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 md:py-20">
      <AmbientNebulas />

      {/* Identity hero on a ruled baseline */}
      <section>
        <div className="grid gap-10 md:grid-cols-[340px_minmax(0,1fr)] md:items-end md:gap-14">
          <SlideIn direction="left" className="relative md:-mb-px">
            <div
              aria-hidden="true"
              className="absolute -inset-7 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-accent)_14%,transparent),transparent_70%)] blur-3xl"
            />
            <Image
              src="/headshot.jpg"
              alt="Ben Armour"
              width={700}
              height={840}
              priority
              sizes="(min-width: 768px) 340px, 100vw"
              className="relative aspect-[5/6] w-full rounded-t-sm border border-b-0 border-border object-cover"
            />
          </SlideIn>
          <SlideIn direction="right" delay={0.1} className="md:pb-11">
            <p className={eyebrowClasses}>
              whoami<span className="terminal-cursor">_</span>
            </p>
            <h1 className="gradient-text-brand font-display mt-3 text-5xl font-bold leading-[1.05] sm:text-[60px] sm:leading-[1.02]">
              Ben Armour
            </h1>
            <p className="font-display mt-3 text-[21px] font-medium italic text-text-primary sm:text-[23px]">
              The person behind every{" "}
              <span className="text-accent">verified</span> build.
            </p>
            <p className="mt-4 max-w-[34rem] text-[15px] leading-[1.7] text-text-secondary">
              Four years of test automation, risk-based planning, and full
              defect lifecycle ownership. I help teams ship with confidence by
              aligning test strategy with release schedules and reducing
              production risk.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="ghost-btn ghost-btn-accent">
                Get in touch
              </Link>
              <a
                href="/Ben-Armour-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="ghost-btn ghost-btn-neutral"
              >
                Resume
                <ArrowDownIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </SlideIn>
        </div>
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1.5 border-t border-border px-1 pt-3.5 font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted">
            <span>
              QA <span className="text-accent">/</span> SDET{" "}
              <span className="text-accent">/</span> Software Dev
            </span>
            <span className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full bg-brand-secondary shadow-[0_0_8px_color-mix(in_srgb,var(--color-brand-secondary)_70%,transparent)]"
              />
              <span className="text-brand-secondary">available now</span>
              <span aria-hidden="true" className="text-accent">
                ·
              </span>
              <span>{site.location}</span>
              <span aria-hidden="true" className="text-accent">
                ·
              </span>
              <span>relocation ok</span>
            </span>
          </div>
        </FadeIn>
      </section>

      {/* Background */}
      <section className="mt-16 md:mt-20">
        <FadeIn>
          <p className={eyebrowClasses}>Background_</p>
          <p className="font-display mt-1.5 text-2xl font-bold italic text-text-primary sm:text-[26px]">
            Where the reps came from.
          </p>
        </FadeIn>
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {jobs.map((job, index) => (
            <FadeIn key={job.company} delay={0.1 + index * 0.1} className="h-full">
              <div className="h-full rounded-sm border border-border bg-bg-card p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <h3 className="font-display text-[17px] font-bold text-text-primary">
                    {job.company}
                  </h3>
                  <span className="font-mono text-[10px] tracking-[0.12em] text-text-muted">
                    {job.dates}
                  </span>
                </div>
                <p className="mt-0.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-accent">
                  {job.role}
                </p>
                <p className="mt-3 text-sm leading-[1.65] text-text-secondary">
                  {job.summary}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Skills & Tools */}
      <section className="mt-16 md:mt-20">
        <FadeIn>
          <p className={eyebrowClasses}>Skills &amp; Tools_</p>
          <p className="font-display mt-1.5 text-2xl font-bold italic text-text-primary sm:text-[26px]">
            The toolbox.
          </p>
        </FadeIn>
        <div className="mt-6 grid gap-5 sm:grid-cols-2">
          {skillGroups.map((group, index) => (
            <FadeIn
              key={group.category}
              delay={0.1 + Math.min(index, 5) * 0.05}
              className={`h-full ${"wide" in group ? "sm:col-span-2" : ""}`}
            >
              <div className="h-full rounded-sm border border-border bg-bg-card p-6 transition-[border-color,box-shadow] duration-300 hover:border-border-hover hover:shadow-accent-sm">
                <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.15em] text-accent">
                  <span aria-hidden="true">/</span> {group.category}
                </h3>
                <p className="mt-2.5 text-sm leading-[1.65] text-text-secondary">
                  {group.description}
                </p>
                <div className="mt-3.5 flex flex-wrap gap-2">
                  {group.pills.map((pill) => (
                    <span key={pill} className={pillClasses}>
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mt-16 md:mt-20">
        <FadeIn>
          <p className={eyebrowClasses}>Education_</p>
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="mt-5 flex flex-wrap items-center justify-between gap-4 border-b border-t border-border px-1 py-5">
            <div>
              <h3 className="font-display text-[17px] font-bold text-text-primary">
                University of Cincinnati
              </h3>
              <p className="mt-1 text-sm text-text-secondary">
                BS Information Technology · Software Development &amp; Game
                Design and Simulation
              </p>
            </div>
            <p className="font-mono text-[10.5px] uppercase tracking-[0.13em] text-text-muted">
              3.85 GPA <span className="text-accent">·</span> Magna Cum Laude{" "}
              <span className="text-accent">·</span> graduated 1 year early
            </p>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
