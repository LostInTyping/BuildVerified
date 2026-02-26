export const metadata = {
  title: "About",
  description: "Career background, education, and approach to software quality.",
};

const skillCategories = [
  {
    category: "Test Automation",
    skills: ["Cypress", "Playwright", "Selenium", "Jest"],
  },
  {
    category: "API & Tools",
    skills: ["Postman", "REST APIs", "SQL", "Charles Proxy"],
  },
  {
    category: "CI & Infrastructure",
    skills: ["GitHub Actions", "Docker", "Linux", "Windows"],
  },
  {
    category: "Management & Reporting",
    skills: ["Jira", "Zephyr", "TestRail", "Allure", "Confluence"],
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
            <p className="text-sm text-text-muted">Open to remote &amp; hybrid</p>
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
            I&apos;m Ben Armour, a Software QA Engineer based in Mason, Ohio. I
            build test automation, validate software across distributed
            environments, and own quality from test planning through release.
          </p>
          <p className="text-text-secondary">
            My background spans both automation and manual QA. At STRATACACHE, I
            led test planning for digital menu board systems — building lab
            infrastructure, expanding Cypress automation, managing defects end to
            end, and coordinating validation across multiple client programs with
            overlapping release timelines.
          </p>
          <p className="text-text-secondary">
            Before that, at the University of Cincinnati IT Solutions Center, I
            developed Cypress test suites from scratch, strengthened regression
            coverage, and established QA workflows that the team could scale with.
          </p>
          <p className="text-text-secondary">
            I care about reliable software. That means building automation that
            people trust, writing defect reports that developers can act on, and
            setting up environments that catch real issues before they reach
            production.
          </p>
        </div>
      </div>

      {/* Skills grid */}
      <section className="mt-16">
        <h2 className="text-sm font-medium uppercase tracking-widest text-text-muted">
          Skills &amp; Tools
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
            Graduated Spring 2024 &middot; Dean&apos;s List
          </p>
        </div>
      </section>
    </main>
  );
}
