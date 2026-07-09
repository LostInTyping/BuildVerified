import type { Metadata } from "next";
import type { ReactNode } from "react";
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

const kit = [
  {
    label: "Automation",
    items: "Cypress · Jest · Playwright · Postman",
  },
  {
    label: "Testing",
    items: "Exploratory · Regression · UAT · Risk-based planning",
  },
  {
    label: "Languages",
    items: "JavaScript · TypeScript · Python · Bash · SQL · Kotlin",
  },
  {
    label: "Stacks",
    items: "React · Node.js · Express · PostgreSQL · MongoDB",
  },
  {
    label: "CI / Infra",
    items: "GitHub Actions · GitLab · Git · Docker · Linux",
  },
  {
    label: "Reporting",
    items: "Jira · QMetry · Confluence · Tableau",
  },
];

const jobs = [
  {
    company: "STRATACACHE",
    dates: "May 2024 - Feb 2026",
    role: "Software Quality Analyst II",
    summary:
      "Built a 150+ test client-agnostic Cypress framework from scratch, one shared core with per-brand configuration covering 8+ QSR brands, wired into CI as a merge-blocking quality gate. Led risk-based test planning for menu board launches across Tim Hortons, McDonald's, Taco Bell, KFC, and Burger King, on a platform behind 4 million+ digital menu boards. Chased environment defects down to embedded Linux/ARM media players in a 1:1 production-parity lab.",
  },
  {
    company: "UC IT Solutions Center",
    dates: "Aug 2022 - May 2024",
    role: "QA Automation Engineer",
    summary:
      "Built Cypress suites across four criminal justice platforms, including Ohio's first-of-its-kind statewide sentencing database for the Ohio Supreme Court and a risk assessment system used by corrections agencies in multiple states, raising regression coverage by 75%. Validated enterprise React, Node.js, and PostgreSQL systems across 9+ concurrent projects, from monorepo builds to Dockerized microservices, for clients including Brooksource and Macy's.",
  },
];

const eyebrowClasses =
  "font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-accent";

const proofClasses = "font-medium text-text-primary";

const payoffClasses =
  "font-display mt-1.5 text-[22px] italic leading-[1.4] text-text-primary sm:text-[26px]";

const tagClasses =
  "font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-text-muted";

function Ledger({ rows }: { rows: { label: string; value: ReactNode }[] }) {
  return (
    <div className="mt-3">
      {rows.map((row) => (
        <div key={row.label} className="flex items-baseline gap-2.5 py-1.5">
          <span className="shrink-0 font-mono text-[9.5px] font-bold uppercase tracking-[0.15em] text-text-muted">
            {row.label}
          </span>
          <span
            aria-hidden="true"
            className="min-w-5 flex-1 -translate-y-[3px] border-b border-dotted border-text-muted/45"
          />
          <span className="max-w-[62%] text-right font-mono text-[10.5px] leading-[1.7] text-text-primary">
            {row.value}
          </span>
        </div>
      ))}
    </div>
  );
}

function ChapterNum({ n }: { n: string }) {
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -top-6 right-2 -z-10 select-none font-display text-[104px] font-bold leading-[0.8] text-[color:color-mix(in_srgb,var(--color-text-primary)_5%,transparent)] sm:text-[148px]"
    >
      {n}
    </span>
  );
}

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
              className="absolute inset-0 rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--color-accent)_14%,transparent),transparent_70%)] blur-3xl sm:-inset-7"
            />
            <div
              aria-hidden="true"
              className="absolute -top-3 left-3 h-full w-full rounded-t-sm border border-[color:color-mix(in_srgb,var(--color-accent)_45%,transparent)]"
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
              defect lifecycle ownership, most recently building the QA
              architecture behind 4 million+ digital menu boards for the
              world&rsquo;s biggest fast-food brands.
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
          <div className="border-t border-border" />
        </FadeIn>
      </section>

      {/* Body: background + skills as one joined grid with a continuous rail */}
      <div className="mt-14 grid gap-12 lg:grid-cols-[1.22fr_1fr]">
        <div className="relative isolate">
          <ChapterNum n="01" />
          <FadeIn>
            <h2 className={eyebrowClasses}>Background_</h2>
            <p className={payoffClasses}>
              Four years of{" "}
              <span className="font-medium text-accent">high-stakes QA.</span>
            </p>
          </FadeIn>
          <div className="relative mt-7 pl-7">
            <div
              aria-hidden="true"
              className="absolute bottom-2 left-0 top-2 w-px bg-border"
            />
            {jobs.map((job, index) => (
              <FadeIn key={job.company} delay={0.1 + index * 0.05}>
                <div className={index > 0 ? "relative mt-9" : "relative"}>
                  <span
                    aria-hidden="true"
                    className={
                      index === 0
                        ? "absolute -left-[31.5px] top-[7px] h-2 w-2 rounded-full bg-accent shadow-[0_0_10px_color-mix(in_srgb,var(--color-accent)_55%,transparent)]"
                        : "absolute -left-[31.5px] top-[7px] h-2 w-2 rounded-full border-[1.5px] border-accent bg-bg-primary"
                    }
                  />
                  <div className="flex flex-wrap items-baseline gap-x-3.5 gap-y-1">
                    <h3 className="font-display text-[19px] font-bold text-text-primary">
                      {job.company}
                    </h3>
                    <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-accent">
                      {job.role}
                    </p>
                    <p className="ml-auto font-mono text-[10.5px] tracking-[0.12em] text-text-muted">
                      {job.dates}
                    </p>
                  </div>
                  <p className="mt-2.5 text-sm leading-[1.7] text-text-secondary">
                    {job.summary}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="relative isolate mt-[52px]">
            <ChapterNum n="02" />
            <FadeIn>
              <h2 className={eyebrowClasses}>Skills &amp; Tools_</h2>
              <p className={payoffClasses}>
                Ship proof,{" "}
                <span className="font-medium text-accent">not promises.</span>
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="mt-4">
                <h3 className="font-display text-[23px] font-bold italic leading-[1.2] sm:text-[26px]">
                  <span className="text-accent">Automation</span> decides what
                  ships.
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.78] text-text-secondary">
                  I design the architecture, not just the specs:{" "}
                  <span className={proofClasses}>
                    frameworks built around a shared core
                  </span>
                  , so a single suite scales across products instead of forking
                  per team. Every REST endpoint validated across its full
                  request/response cycle, because silent integration failures
                  never announce themselves. The suites run in CI as{" "}
                  <span className={proofClasses}>
                    merge-blocking quality gates
                  </span>{" "}
                  with failure videos attached to every run. If the build is
                  red, it does not ship.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <div className="mt-11">
                <h3 className="font-display text-[23px] font-bold italic leading-[1.2] sm:text-[26px]">
                  <span className="text-accent">Exploration</span> finds what
                  automation can&rsquo;t.
                </h3>
                <p className="mt-3 text-[14.5px] leading-[1.78] text-text-secondary">
                  Tooling proves what you already know to check; the rest you go
                  find.{" "}
                  <span className={proofClasses}>
                    Risk-based planning decides where the hours go
                  </span>
                  , exploratory and regression cycles run against environments
                  held to production parity, and I own every defect through the
                  full lifecycle with{" "}
                  <span className={proofClasses}>
                    root cause analysis that ends in the code
                  </span>
                  , not in a ticket comment. I communicate release readiness
                  plainly to developers, PMs, and stakeholders.
                </p>
              </div>
            </FadeIn>
          </div>
          <div className="relative isolate mt-[52px]">
            <ChapterNum n="03" />
            <FadeIn>
              <h2 className={eyebrowClasses}>Off the clock_</h2>
              <p className={payoffClasses}>
                Built,{" "}
                <span className="font-medium text-accent">not bought.</span>
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h3 className="font-display mt-4 text-[23px] font-bold italic leading-[1.2] sm:text-[26px]">
                <span className="text-accent">Curiosity</span> keeps its own
                hours.
              </h3>
              <p className="mt-3 text-[14.5px] leading-[1.78] text-text-secondary">
                Most of what I do off the clock still involves building
                something: custom mechanical keyboards,{" "}
                <span className={proofClasses}>
                  built and soldered by hand
                </span>
                , around 20 so far with{" "}
                <span className={proofClasses}>
                  a different board on my desk most weeks
                </span>
                , and a homelab that self-hosts anything that sits still. The
                rest is hikes with my wife and our dog, and the video games
                that pulled me toward tech in the first place.
              </p>
            </FadeIn>
          </div>
        </div>
        <FadeIn delay={0.2}>
          <div className="rounded-lg border border-border bg-bg-card p-6 sm:p-7">
            <div>
              <p className={tagClasses}>
                status <span className="text-accent">/</span> open to work
              </p>
              <Ledger
                rows={[
                  {
                    label: "Status",
                    value: (
                      <span className="text-brand-secondary">
                        <span className="relative mr-2 inline-flex h-1.5 w-1.5">
                          <span
                            aria-hidden="true"
                            className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-secondary opacity-60 motion-reduce:animate-none"
                          />
                          <span
                            aria-hidden="true"
                            className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand-secondary shadow-[0_0_8px_color-mix(in_srgb,var(--color-brand-secondary)_70%,transparent)]"
                          />
                        </span>
                        available now
                      </span>
                    ),
                  },
                  { label: "Base", value: site.location },
                  { label: "Mode", value: "on-site · hybrid · remote" },
                  { label: "Relocation", value: "open, US or abroad" },
                  { label: "Roles", value: "QA · SDET · Software Dev" },
                ]}
              />
            </div>
            <div className="mt-9">
              <p className={tagClasses}>
                education <span className="text-accent">/</span> aug 2020 - apr
                2024
              </p>
              <h4 className="font-display mt-2 text-[16px] font-bold italic text-text-primary">
                University of Cincinnati
              </h4>
              <p className="mt-1.5 text-[12.5px] leading-[1.68] text-text-secondary">
                BS Information Technology, concentrations in Software
                Development and Game Design &amp; Simulation, completed while
                working QA at the university&rsquo;s IT Solutions Center.
              </p>
              <Ledger
                rows={[
                  { label: "GPA", value: "3.85 / 4.0" },
                  { label: "Honors", value: "Magna Cum Laude" },
                  { label: "Pace", value: "graduated 1 year early" },
                ]}
              />
            </div>
            <div className="mt-9">
              <p className={tagClasses}>
                extra <span className="text-accent">/</span> tooling &amp; open
                source
              </p>
              <h4 className="font-display mt-2 text-[16px] font-bold italic text-text-primary">
                I build the tooling I wish existed.
              </h4>
              <p className="mt-1.5 text-[12.5px] leading-[1.68] text-text-secondary">
                Chrome extensions and browser tooling built for the QA team: a
                Jira test case helper and a full UI overhaul for ActiVia,
                STRATACACHE&rsquo;s media platform. OSS contributor to NuvioTV, an
                Android TV streaming app, tracing playback defects to the codec
                level.
              </p>
            </div>
            <div className="mt-9">
              <p className={tagClasses}>
                extra <span className="text-accent">/</span> ai-assisted
              </p>
              <h4 className="font-display mt-2 text-[16px] font-bold italic text-text-primary">
                AI-assisted, human-verified.
              </h4>
              <p className="mt-1.5 text-[12.5px] leading-[1.68] text-text-secondary">
                Multiple AI models coordinated through custom skills, MCP
                servers, and hook automation. The review at every checkpoint
                stays human.
              </p>
            </div>
            <div className="mt-9">
              <p className={tagClasses}>
                the kit <span className="text-accent">_</span>
              </p>
              <Ledger
                rows={kit.map((row) => ({
                  label: row.label,
                  value: row.items,
                }))}
              />
            </div>
            <div className="mt-9">
              <p className={tagClasses}>
                off hours <span className="text-accent">/</span>
              </p>
              <Ledger
                rows={[
                  { label: "Keyboards", value: "20 built · 10+ in rotation" },
                  {
                    label: "Homelab",
                    value: "Pi-hole · WireGuard · self-hosted",
                  },
                  { label: "Elsewhere", value: "trails · dog · video games" },
                ]}
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </main>
  );
}
