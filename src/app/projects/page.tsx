import { getAllProjects } from "@/lib/projects";

export const metadata = {
  title: "Projects",
  description: "Timeline of professional and personal QA engineering work.",
};

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold">Projects</h1>
      <p className="mt-4 text-text-secondary">
        A timeline of engagements across professional and personal work.
      </p>

      <div className="mt-12 space-y-0">
        {projects.map((project, index) => (
          <div key={project.frontmatter.title} className="relative pl-8">
            {/* Timeline line */}
            {index < projects.length - 1 && (
              <div className="absolute left-[7px] top-4 h-full w-px bg-border" />
            )}
            {/* Timeline dot */}
            <div className="absolute left-0 top-[18px] h-[15px] w-[15px] rounded-full border-2 border-accent bg-bg-primary" />

            <div className="mb-8 rounded-lg border border-border bg-bg-card p-6">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-accent">
                    {project.frontmatter.company}
                  </p>
                  <h2 className="mt-1 text-lg font-semibold text-text-primary">
                    {project.frontmatter.role}
                  </h2>
                </div>
                <span className="shrink-0 text-xs text-text-muted">
                  {project.frontmatter.period}
                </span>
              </div>
              <p className="mt-3 text-sm text-text-secondary">
                {project.frontmatter.summary}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.frontmatter.stack.map((tool) => (
                  <span
                    key={tool}
                    className="rounded-full border border-border px-3 py-1 text-xs text-text-muted"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
