export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold">About</h1>

      <section className="mt-12">
        <p className="text-lg text-text-secondary">
          I&apos;m Ben Armour, a Software QA Engineer based in Mason, Ohio. I
          build test automation, validate software across distributed
          environments, and own quality from test planning through release.
        </p>
        <p className="mt-4 text-text-secondary">
          My background spans both automation and manual QA. At STRATACACHE, I
          led test planning for digital menu board systems — building lab
          infrastructure, expanding Cypress automation, managing defects end to
          end, and coordinating validation across multiple client programs with
          overlapping release timelines.
        </p>
        <p className="mt-4 text-text-secondary">
          Before that, at the University of Cincinnati IT Solutions Center, I
          developed Cypress test suites from scratch, strengthened regression
          coverage, and established QA workflows that the team could scale with.
        </p>
        <p className="mt-4 text-text-secondary">
          I care about reliable software. That means building automation that
          people trust, writing defect reports that developers can act on, and
          setting up environments that catch real issues before they reach
          production.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-sm font-medium uppercase tracking-widest text-text-muted">
          Education
        </h2>
        <div className="mt-6 rounded-lg border border-border bg-bg-card p-6">
          <h3 className="text-lg font-semibold">
            University of Cincinnati
          </h3>
          <p className="mt-1 text-text-secondary">
            BSc in Information Technology
          </p>
          <p className="text-sm text-text-muted">
            Double Major: Software Development &amp; Game Design and Simulation
          </p>
          <p className="text-sm text-text-muted">
            Graduated Spring 2024 &middot; Dean&apos;s List
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-sm font-medium uppercase tracking-widest text-text-muted">
          Location
        </h2>
        <p className="mt-4 text-text-secondary">
          Mason, OH — open to remote and hybrid opportunities.
        </p>
      </section>
    </main>
  );
}
