import type { Metadata } from "next";

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
    skills: ["Cypress", "Playwright", "Selenium", "Jest"],
  },
  {
    category: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "SQL"],
  },
  {
    category: "API & Tools",
    skills: ["Postman", "REST APIs", "Tableau", "Charles Proxy"],
  },
  {
    category: "CI & Infrastructure",
    skills: ["GitHub Actions", "GitLab", "Docker", "Linux"],
  },
  {
    category: "Management & Reporting",
    skills: ["Jira", "QMetry", "Confluence", "Allure"],
  },
  {
    category: "AI-Assisted Development",
    skills: ["AI-accelerated test development", "Human-in-the-loop review"],
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      {/* Intro: profile card + bio */}
      <div className="grid gap-8 md:grid-cols-[260px_1fr] md:items-start">
        {/* Profile card */}
        <div className="rounded-xl border border-border bg-bg-card p-6">
          <div className="mb-4 h-20 w-20 rounded-full border-2 border-border bg-bg-elevated" />
          <h1 className="text-2xl font-bold">Ben Armour</h1>
          <p className="mt-1 text-sm text-accent">Software QA Engineer</p>
          <div className="mt-4 space-y-0.5">
            <p className="text-sm text-text-muted">Mason, OH</p>
            <p className="text-sm text-text-muted">
              Open to on-site, hybrid &amp; remote
            </p>
            <p className="text-sm text-text-muted">
              Willing to relocate (US or abroad)
            </p>
          </div>
          <div className="mt-5 flex flex-col gap-2 border-t border-border pt-5">
            <a
              href="https://linkedin.com/in/ben-armour"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              LinkedIn ↗
            </a>
            <a
              href="mailto:armourbl@mail.uc.edu"
              className="text-sm text-text-secondary transition-colors hover:text-text-primary"
            >
              armourbl@mail.uc.edu ↗
            </a>
          </div>
        </div>

        {/* Bio */}
        <div className="space-y-4">
          <p className="text-lg text-text-secondary">
            Hi, I&apos;m Ben, a Software QA Engineer based in Mason, Ohio. I help
            teams ship with confidence by combining practical test automation
            with deep manual validation from planning through release.
          </p>
          <p className="text-text-secondary">
            At STRATACACHE, I led QA across multi-client digital menu board
            programs with overlapping timelines. I built and maintained Cypress
            coverage, validated releases across distributed environments, and
            created lab setups that mirrored production so issues surfaced early.
          </p>
          <p className="text-text-secondary">
            At the University of Cincinnati IT Solutions Center, I built Cypress
            suites from scratch and expanded regression coverage while partnering
            closely with developers to prioritize risk and speed up defect
            resolution.
          </p>
          <p className="text-text-secondary">
            My focus is consistent, actionable quality work: test plans tied to
            risk, defect reports developers can act on quickly, and automation
            that stays reliable as products evolve.
          </p>
        </div>
      </div>

      {/* Skills grid */}
      <section className="mt-16">
        <h2 className="text-sm font-medium uppercase tracking-widest text-text-muted">
          Skills &amp; Tools
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat) => (
            <div
              key={cat.category}
              className="rounded-lg border border-border bg-bg-card p-5"
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
      </section>

      {/* Education */}
      <section className="mt-16">
        <h2 className="text-sm font-medium uppercase tracking-widest text-text-muted">
          Education
        </h2>
        <div className="mt-6 rounded-lg border border-border bg-bg-card p-6">
          <h3 className="text-lg font-semibold">University of Cincinnati</h3>
          <p className="mt-1 text-text-secondary">BSc in Information Technology</p>
          <p className="text-sm text-text-muted">
            Double Major: Software Development &amp; Game Design and Simulation
          </p>
          <p className="text-sm text-text-muted">
            Graduated Spring 2024 &middot; 3.85 / 4.00 GPA &middot; Dean&apos;s
            List
          </p>
        </div>
      </section>
    </main>
  );
}
