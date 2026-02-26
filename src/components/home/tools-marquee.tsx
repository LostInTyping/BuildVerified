const tools = [
  "Cypress",
  "Playwright",
  "Selenium",
  "Jest",
  "Postman",
  "Jira",
  "GitHub Actions",
  "Docker",
  "SQL",
  "Git",
  "Zephyr",
  "TestRail",
  "Allure",
  "Confluence",
];

export function ToolsMarquee() {
  const tripled = [...tools, ...tools, ...tools];

  return (
    <div className="border-y border-border py-4 overflow-hidden">
      <div className="marquee-strip flex gap-4 whitespace-nowrap">
        {tripled.map((tool, i) => (
          <span
            key={`${tool}-${i}`}
            aria-hidden={i >= tools.length}
            className="rounded-full border border-border bg-bg-card px-4 py-1.5 text-sm text-text-secondary shrink-0"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
