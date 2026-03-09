import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "About",
  description:
    "Career background, education, and approach to software quality.",
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
    featured: true,
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* Intro: profile card + bio */}
      <section>
        <div className="mx-auto max-w-6xl px-6 pt-10 pb-6 md:pt-12 md:pb-8">
          <div className="grid gap-4 sm:gap-5 md:grid-cols-[300px_minmax(0,1fr)] lg:grid-cols-[350px_minmax(0,1fr)]">
            {/* Profile card */}
            <div className="flex flex-col rounded-lg border border-border bg-bg-card p-4 sm:p-5">
              <div className="relative aspect-square w-full overflow-hidden rounded-lg transition-shadow duration-300 hover:shadow-accent-sm">
                <Image
                  src="/headshot.jpg"
                  alt="Ben Armour"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 350px, (min-width: 768px) 300px, 100vw"
                  priority
                />
              </div>
              <div className="flex flex-col gap-3 pt-4 sm:gap-4 sm:pt-5">
                <div>
                  <p className="text-xs font-medium uppercase tracking-widest text-text-muted">
                    Software QA Engineer
                  </p>
                  <h1 className="mt-1 text-2xl font-bold text-text-primary sm:mt-1.5 sm:text-3xl">
                    Ben Armour
                  </h1>
                </div>
                <div className="space-y-0.5">
                  <p className="text-sm text-text-secondary">Mason, OH</p>
                  <p className="text-sm text-text-secondary">
                    Open to on-site, hybrid &amp; remote
                  </p>
                  <p className="text-sm text-text-secondary">
                    Willing to relocate (US or abroad)
                  </p>
                </div>
              </div>
              <div className="mt-auto flex flex-col gap-2 pt-4">
                <a
                  href="https://linkedin.com/in/ben-armour"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ghost-btn ghost-btn-neutral"
                >
                  LinkedIn ↗
                </a>
                <a
                  href="mailto:armourbl@mail.uc.edu"
                  className="ghost-btn ghost-btn-neutral"
                >
                  armourbl@mail.uc.edu ↗
                </a>
              </div>
            </div>

            {/* Bio */}
            <div className="flex flex-col rounded-lg border border-border bg-bg-card p-4 sm:p-5">
              <h2 className="text-sm font-medium uppercase tracking-widest text-text-muted">
                Background
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-text-secondary">
                Hi, I&apos;m Ben, a Software QA Engineer based in Mason, Ohio. I help
                teams ship with confidence by combining practical test automation
                with deep manual validation from planning through release.
              </p>
              <div className="mt-5 space-y-4">
                <div className="border-l-2 border-accent pl-4">
                  <h3 className="text-sm font-semibold text-text-primary">
                    STRATACACHE
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    Led QA across digital menu board programs for national brands
                    including McDonald&apos;s, Taco Bell, KFC, and Burger King.
                    Built Cypress automation suites with reusable utilities,
                    increasing workflow efficiency and accuracy. Designed a
                    custom test lab with 1:1 staging/production parity and owned
                    the full defect lifecycle from triage through verified fix.
                  </p>
                </div>
                <div className="border-l-2 border-accent pl-4">
                  <h3 className="text-sm font-semibold text-text-primary">
                    University of Cincinnati IT Solutions Center
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    Built Cypress suites from scratch and validated applications
                    across multiple domains: criminal justice platforms serving
                    20+ states (OSDP, OCP, Risk Assessment, Case Management),
                    university systems like IT Expo and TeamEval, and
                    restricted-access programs including DRF-CoApp. Created test
                    plans, structured test data, and QA workflows that enabled
                    team scalability while partnering with developers to
                    prioritize risk and speed up defect resolution.
                  </p>
                </div>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-text-secondary">
                My focus is consistent, actionable quality work: test plans tied to
                risk, defect reports developers can act on quickly, and automation
                that stays reliable as products evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills & Tools */}
      <section>
        <hr className="section-divider" />
        <div className="mx-auto max-w-6xl px-6 py-6 md:py-8">
          <h2 className="text-sm font-medium uppercase tracking-widest text-text-muted">
            Skills &amp; Tools
          </h2>
          <div className="mt-4 grid gap-4 sm:gap-5 sm:grid-cols-2">
            {skillGroups.map((group) => (
              <div
                key={group.category}
                className={`rounded-lg border border-accent/20 bg-bg-card p-4 sm:p-5 transition-[border-color,box-shadow] duration-300 hover:border-accent/30 hover:shadow-accent-sm ${
                  group.featured ? "sm:col-span-2" : ""
                }`}
              >
                <h3 className="text-sm font-semibold text-accent">
                  {group.category}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {group.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {group.pills.map((pill) => (
                    <span
                      key={pill}
                      className={
                        group.featured
                          ? "rounded-full border border-accent/15 bg-accent/5 px-3 py-1 text-xs text-accent/80"
                          : "rounded-full border border-border bg-bg-elevated px-3 py-1 text-xs text-text-muted"
                      }
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section>
        <hr className="section-divider" />
        <div className="mx-auto max-w-6xl px-6 py-6 md:py-8">
          <h2 className="text-sm font-medium uppercase tracking-widest text-text-muted">
            Education
          </h2>
          <div className="mt-4 rounded-lg border border-border bg-bg-card p-4 sm:p-5">
            <p className="text-xs font-medium uppercase tracking-widest text-text-muted">
              Spring 2024
            </p>
            <h3 className="mt-1 text-lg font-semibold text-text-primary sm:text-xl">
              University of Cincinnati
            </h3>
            <p className="mt-2 text-sm text-text-secondary">
              BSc in Information Technology
            </p>
            <p className="text-sm text-text-secondary">
              Double Major: Software Development &amp; Game Design and Simulation
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-border bg-bg-elevated px-3 py-1 text-xs text-text-muted">
                3.85 / 4.00 GPA
              </span>
              <span className="rounded-full border border-border bg-bg-elevated px-3 py-1 text-xs text-text-muted">
                Magna Cum Laude
              </span>
              <span className="rounded-full border border-border bg-bg-elevated px-3 py-1 text-xs text-text-muted">
                Dean&apos;s List
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
