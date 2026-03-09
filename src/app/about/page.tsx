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

const skillCategories = [
  {
    category: "Test Automation",
    skills: ["Cypress", "Jest", "Playwright"],
  },
  {
    category: "Manual Testing & Documentation",
    skills: [
      "Test planning and execution",
      "Exploratory testing",
      "Regression and smoke testing",
      "Test case documentation",
      "Defect lifecycle management",
    ],
  },
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    category: "Application Stacks",
    skills: ["React", "Node.js", "Express", "PostgreSQL", "MongoDB"],
  },
  {
    category: "API & Tools",
    skills: ["Postman", "REST APIs", "Tableau"],
  },
  {
    category: "CI & Infrastructure",
    skills: ["GitHub Actions", "GitLab", "Git", "Docker", "Linux"],
  },
  {
    category: "Management & Reporting",
    skills: ["Jira", "QMetry", "Confluence"],
  },
  {
    category: "AI-Assisted Development",
    skills: ["AI-accelerated test development", "Human-in-the-loop review"],
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

      {/* Skills grid */}
      <section>
        <hr className="section-divider" />
        <div className="mx-auto max-w-6xl px-6 py-6 md:py-8">
          <h2 className="text-sm font-medium uppercase tracking-widest text-text-muted">
            Skills &amp; Tools
          </h2>
          <div className="mt-4 grid gap-4 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((cat) => (
              <div
                key={cat.category}
                className="rounded-lg border border-border bg-bg-card p-4 sm:p-5"
              >
                <h3 className="text-sm font-semibold text-text-primary">
                  {cat.category}
                </h3>
                <ul className="mt-3 space-y-1.5">
                  {cat.skills.map((skill) => (
                    <li key={skill} className="text-sm text-text-secondary">
                      {skill}
                    </li>
                  ))}
                </ul>
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
