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
  const doubled = [...tools, ...tools];

  return (
    <div className="border-y border-border py-4 overflow-hidden">
      <div
        className="flex gap-4 whitespace-nowrap"
        style={{ animation: "marquee 32s linear infinite" }}
      >
        {doubled.map((tool, i) => (
          <span
            key={`${tool}-${i}`}
            className="rounded-full border border-border bg-bg-card px-4 py-1.5 text-sm text-text-secondary shrink-0"
          >
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}
