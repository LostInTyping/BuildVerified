export type LogTone = "muted" | "pass" | "retry" | "error";

export interface LogEntry {
  message: string;
  tone: LogTone;
  delayMs: number;
}

export interface TerminalScenario {
  id: string;
  label: string;
  command: string;
  logEntries: LogEntry[];
  portfolio?: boolean;
}

// ---------------------------------------------------------------------------
// Shared scenarios (not tied to a specific portfolio project)
// ---------------------------------------------------------------------------

const sharedApiContracts: TerminalScenario = {
  id: "shared-api-contracts",
  label: "API Contract Tests",
  command: 'pnpm exec jest --project api-contracts',
  logEntries: [
    { message: "Loading jest.config.ts from api-contracts...", tone: "muted", delayMs: 120 },
    { message: "RUNS  tests/contracts/auth.spec.ts", tone: "muted", delayMs: 200 },
    { message: "  \u2713 POST /auth/login returns 200 with valid credentials (84ms)", tone: "pass", delayMs: 150 },
    { message: "  \u2713 POST /auth/login returns 401 with bad password (32ms)", tone: "pass", delayMs: 100 },
    { message: "RUNS  tests/contracts/payments.spec.ts", tone: "muted", delayMs: 180 },
    { message: "  \u2713 POST /payments/charge matches OpenAPI schema (127ms)", tone: "pass", delayMs: 160 },
    { message: "  \u2713 GET /payments/:id returns 404 for unknown id (18ms)", tone: "pass", delayMs: 90 },
    { message: "RUNS  tests/contracts/inventory.spec.ts", tone: "muted", delayMs: 200 },
    { message: "  \u2713 GET /inventory returns paginated list (62ms)", tone: "pass", delayMs: 140 },
    { message: "  \u2713 PATCH /inventory/:sku updates stock count (45ms)", tone: "pass", delayMs: 110 },
    { message: "", tone: "muted", delayMs: 80 },
    { message: "Test Suites:  3 passed, 3 total", tone: "pass", delayMs: 120 },
    { message: "Tests:        6 passed, 0 failed", tone: "pass", delayMs: 100 },
  ],
};

const sharedLighthouse: TerminalScenario = {
  id: "shared-lighthouse",
  label: "Lighthouse Audit",
  command: "npx lighthouse-ci collect --url staging.example.com",
  logEntries: [
    { message: "Connecting to Chrome on port 9222...", tone: "muted", delayMs: 200 },
    { message: "Chrome connected (v124.0.6367.91)", tone: "muted", delayMs: 150 },
    { message: "Auditing https://staging.example.com ...", tone: "muted", delayMs: 280 },
    { message: "Performance          96", tone: "pass", delayMs: 180 },
    { message: "Accessibility        100", tone: "pass", delayMs: 120 },
    { message: "Best Practices       95", tone: "pass", delayMs: 120 },
    { message: "SEO                  98", tone: "pass", delayMs: 120 },
    { message: "First Contentful Paint   0.8s", tone: "muted", delayMs: 140 },
    { message: "Time to Interactive      1.2s", tone: "muted", delayMs: 140 },
    { message: "Saving report to ./lighthouse-report.html ...", tone: "muted", delayMs: 200 },
    { message: "All audits passed budget thresholds", tone: "pass", delayMs: 100 },
  ],
};

const sharedAxeA11y: TerminalScenario = {
  id: "shared-axe-a11y",
  label: "Accessibility Scan",
  command: "npx axe-core --pages /checkout /dashboard /settings",
  logEntries: [
    { message: "axe-core v4.9.1 — scanning 3 pages", tone: "muted", delayMs: 150 },
    { message: "Scanning /checkout ...", tone: "muted", delayMs: 240 },
    { message: "  0 violations, 42 passes", tone: "pass", delayMs: 130 },
    { message: "Scanning /dashboard ...", tone: "muted", delayMs: 260 },
    { message: "  1 violation (minor): color-contrast on .badge-muted", tone: "retry", delayMs: 150 },
    { message: "  58 passes", tone: "pass", delayMs: 100 },
    { message: "Scanning /settings ...", tone: "muted", delayMs: 240 },
    { message: "  0 violations, 36 passes", tone: "pass", delayMs: 130 },
    { message: "", tone: "muted", delayMs: 80 },
    { message: "Summary: 1 minor violation, 136 passes across 3 pages", tone: "pass", delayMs: 120 },
  ],
};

const sharedDeploy: TerminalScenario = {
  id: "shared-deploy",
  label: "Deploy Pipeline",
  command: "./deploy.sh --env staging --tag v2.14.0",
  logEntries: [
    { message: "Pulling image registry.io/app:v2.14.0 ...", tone: "muted", delayMs: 280 },
    { message: "Image digest: sha256:a4f8e2c...verified", tone: "muted", delayMs: 150 },
    { message: "Stopping current containers...", tone: "muted", delayMs: 200 },
    { message: "Starting v2.14.0 on staging-1, staging-2...", tone: "muted", delayMs: 260 },
    { message: "Health check staging-1: 200 OK (142ms)", tone: "pass", delayMs: 180 },
    { message: "Health check staging-2: 200 OK (137ms)", tone: "pass", delayMs: 160 },
    { message: "DNS propagation check... resolved in 3.2s", tone: "muted", delayMs: 300 },
    { message: "Smoke test /api/status: 200", tone: "pass", delayMs: 140 },
    { message: "Smoke test /api/health: 200", tone: "pass", delayMs: 120 },
    { message: "Deploy v2.14.0 to staging complete", tone: "pass", delayMs: 100 },
  ],
};

// ---------------------------------------------------------------------------
// Portfolio-linked scenarios
// ---------------------------------------------------------------------------

const macysMissionCritical: TerminalScenario = {
  id: "macys-mission-critical-system",
  label: "Macy's Regression Suite",
  command: 'npx cypress run --spec "tests/e2e/checkout/**"',
  portfolio: true,
  logEntries: [
    { message: "Cypress 13.8.0 — Running 5 suites against staging.macys.io", tone: "muted", delayMs: 200 },
    { message: "", tone: "muted", delayMs: 80 },
    { message: "  cart-promotions.cy.ts", tone: "muted", delayMs: 150 },
    { message: "    \u2713 applies BOGO discount to eligible items (1842ms)", tone: "pass", delayMs: 180 },
    { message: "    \u2713 stacks loyalty coupon with sale price (1204ms)", tone: "pass", delayMs: 140 },
    { message: "  session-timeout.cy.ts", tone: "muted", delayMs: 150 },
    { message: "    \u2713 preserves cart after session refresh (2301ms)", tone: "pass", delayMs: 200 },
    { message: "    \u2713 redirects to login after 30min idle (1580ms)", tone: "pass", delayMs: 160 },
    { message: "  payment-validation.cy.ts", tone: "muted", delayMs: 150 },
    { message: "    \u2713 rejects expired credit card (934ms)", tone: "pass", delayMs: 120 },
    { message: "    \u2713 processes Apple Pay tokenized payment (1673ms)", tone: "pass", delayMs: 180 },
    { message: "  inventory-sync.cy.ts", tone: "muted", delayMs: 150 },
    { message: "    \u2713 shows out-of-stock when warehouse count is 0 (1102ms)", tone: "pass", delayMs: 140 },
    { message: "    \u21bb retrying: updates stock badge after POS sale (attempt 2/3)", tone: "retry", delayMs: 280 },
    { message: "    \u2713 updates stock badge after POS sale (2450ms)", tone: "pass", delayMs: 160 },
    { message: "  order-lifecycle.cy.ts", tone: "muted", delayMs: 150 },
    { message: "    \u2713 completes guest checkout end-to-end (3102ms)", tone: "pass", delayMs: 200 },
    { message: "    \u2713 sends order confirmation email (1847ms)", tone: "pass", delayMs: 150 },
    { message: "", tone: "muted", delayMs: 80 },
    { message: "Tests: 10 passed, 0 failed (1 retried) \u2014 18.2s", tone: "pass", delayMs: 120 },
  ],
};

const digitalMenuPlatform: TerminalScenario = {
  id: "digital-menu-platform",
  label: "Menu Platform E2E",
  command: 'npx cypress run --spec "tests/e2e/menu/**"',
  portfolio: true,
  logEntries: [
    { message: "Cypress 13.8.0 — Running 4 suites against menu-staging.io", tone: "muted", delayMs: 200 },
    { message: "", tone: "muted", delayMs: 80 },
    { message: "  content-scheduling.cy.ts", tone: "muted", delayMs: 150 },
    { message: "    \u2713 publishes scheduled menu at future datetime (1540ms)", tone: "pass", delayMs: 160 },
    { message: "    \u2713 reverts to previous menu on schedule cancel (1203ms)", tone: "pass", delayMs: 140 },
    { message: "  daypart-transitions.cy.ts", tone: "muted", delayMs: 150 },
    { message: "    \u2713 switches from breakfast to lunch at 11:00 (2104ms)", tone: "pass", delayMs: 180 },
    { message: "    \u21bb retrying: hides breakfast-only items after transition (attempt 2/3)", tone: "retry", delayMs: 260 },
    { message: "    \u2713 hides breakfast-only items after transition (1876ms)", tone: "pass", delayMs: 150 },
    { message: "  kiosk-fallback.cy.ts", tone: "muted", delayMs: 150 },
    { message: "    \u2713 renders cached menu when API is unreachable (980ms)", tone: "pass", delayMs: 130 },
    { message: "    \u2713 shows connectivity banner during offline mode (742ms)", tone: "pass", delayMs: 110 },
    { message: "  menu-sync.cy.ts", tone: "muted", delayMs: 150 },
    { message: "    \u2713 syncs price update across 12 kiosk nodes (2830ms)", tone: "pass", delayMs: 200 },
    { message: "    \u2713 propagates item 86'd status within 5s (1450ms)", tone: "pass", delayMs: 140 },
    { message: "", tone: "muted", delayMs: 80 },
    { message: "Tests: 8 passed, 0 failed (1 retried) \u2014 14.1s", tone: "pass", delayMs: 120 },
  ],
};

const offenderRiskAssessment: TerminalScenario = {
  id: "offender-risk-assessment-case-planning",
  label: "Risk Assessment API Tests",
  command: "pnpm exec jest --project risk-scoring",
  portfolio: true,
  logEntries: [
    { message: "Loading jest.config.ts from risk-scoring...", tone: "muted", delayMs: 120 },
    { message: "RUNS  tests/api/risk-scoring.spec.ts", tone: "muted", delayMs: 200 },
    { message: "  \u2713 POST /assessments returns risk score 1-10 (94ms)", tone: "pass", delayMs: 150 },
    { message: "  \u2713 GET /assessments/:id includes factor breakdown (47ms)", tone: "pass", delayMs: 110 },
    { message: "  \u2713 rejects assessment with missing demographics (22ms)", tone: "pass", delayMs: 90 },
    { message: "RUNS  tests/api/case-plan-validation.spec.ts", tone: "muted", delayMs: 180 },
    { message: "  \u2713 POST /case-plans validates required intervention fields (68ms)", tone: "pass", delayMs: 140 },
    { message: "  \u2713 links case plan to active assessment (53ms)", tone: "pass", delayMs: 120 },
    { message: "  \u2713 prevents duplicate case plans for same offender (31ms)", tone: "pass", delayMs: 100 },
    { message: "RUNS  tests/api/assessment-workflows.spec.ts", tone: "muted", delayMs: 180 },
    { message: "  \u2713 completes full intake \u2192 scoring \u2192 plan workflow (284ms)", tone: "pass", delayMs: 200 },
    { message: "  \u2713 supervisor override updates final risk level (72ms)", tone: "pass", delayMs: 130 },
    { message: "", tone: "muted", delayMs: 80 },
    { message: "Test Suites:  3 passed, 3 total", tone: "pass", delayMs: 120 },
    { message: "Tests:        8 passed, 0 failed", tone: "pass", delayMs: 100 },
  ],
};

const ohioSentencingData: TerminalScenario = {
  id: "ohio-sentencing-data-platform",
  label: "OSDP Data Validation",
  command: "pnpm exec jest --project data-integrity",
  portfolio: true,
  logEntries: [
    { message: "Loading jest.config.ts from data-integrity...", tone: "muted", delayMs: 120 },
    { message: "RUNS  tests/etl/integrity.spec.ts", tone: "muted", delayMs: 200 },
    { message: "  \u2713 row counts match between source and warehouse (186ms)", tone: "pass", delayMs: 180 },
    { message: "  \u2713 no orphaned foreign keys in sentencing_records (94ms)", tone: "pass", delayMs: 140 },
    { message: "  \u2713 date fields fall within valid sentencing range (67ms)", tone: "pass", delayMs: 120 },
    { message: "RUNS  tests/etl/audit-trail.spec.ts", tone: "muted", delayMs: 180 },
    { message: "  \u2713 every mutation generates an audit log entry (112ms)", tone: "pass", delayMs: 150 },
    { message: "  \u2713 audit timestamps are monotonically increasing (43ms)", tone: "pass", delayMs: 100 },
    { message: "RUNS  tests/etl/data-parity.spec.ts", tone: "muted", delayMs: 200 },
    { message: "  \u2713 aggregate sentence counts match DOC report (231ms)", tone: "pass", delayMs: 180 },
    { message: "  \u21bb retrying: felony classification distribution within 0.1% (attempt 2/3)", tone: "retry", delayMs: 280 },
    { message: "  \u2713 felony classification distribution within 0.1% (302ms)", tone: "pass", delayMs: 160 },
    { message: "", tone: "muted", delayMs: 80 },
    { message: "Test Suites:  3 passed, 3 total", tone: "pass", delayMs: 120 },
    { message: "Tests:        7 passed, 0 failed (1 retried)", tone: "pass", delayMs: 100 },
  ],
};

const brooksourceEnterprise: TerminalScenario = {
  id: "brooksource-enterprise-engagement",
  label: "Enterprise Deploy",
  command: "./deploy.sh --env staging --region us-east-1",
  portfolio: true,
  logEntries: [
    { message: "Building artifacts from commit a3f8c2e...", tone: "muted", delayMs: 250 },
    { message: "Docker image built: engagement-api:a3f8c2e (48s)", tone: "muted", delayMs: 200 },
    { message: "Pushing to ECR us-east-1...", tone: "muted", delayMs: 280 },
    { message: "Image pushed. Digest: sha256:d9e1f03...verified", tone: "muted", delayMs: 150 },
    { message: "Rolling update: 0/3 instances replaced", tone: "muted", delayMs: 200 },
    { message: "Rolling update: 3/3 instances replaced", tone: "pass", delayMs: 260 },
    { message: "Health check api-1.us-east-1: 200 OK (98ms)", tone: "pass", delayMs: 140 },
    { message: "Health check api-2.us-east-1: 200 OK (104ms)", tone: "pass", delayMs: 130 },
    { message: "Health check api-3.us-east-1: 200 OK (91ms)", tone: "pass", delayMs: 120 },
    { message: "Smoke test /api/engagements: 200 (12 records)", tone: "pass", delayMs: 150 },
    { message: "Rollback verification: previous image tagged as fallback", tone: "muted", delayMs: 180 },
    { message: "Deploy a3f8c2e to staging us-east-1 complete", tone: "pass", delayMs: 100 },
  ],
};

const drfCoapp: TerminalScenario = {
  id: "drf-coapp",
  label: "CoApp API Tests",
  command: "python manage.py test api.tests --verbosity 2",
  portfolio: true,
  logEntries: [
    { message: "Creating test database for alias 'default'...", tone: "muted", delayMs: 200 },
    { message: "System check identified no issues (0 silenced).", tone: "muted", delayMs: 150 },
    { message: "test_list_applications (api.tests.test_endpoints.ApplicationViewSetTest) ... ok", tone: "pass", delayMs: 140 },
    { message: "test_create_application (api.tests.test_endpoints.ApplicationViewSetTest) ... ok", tone: "pass", delayMs: 130 },
    { message: "test_filter_by_status (api.tests.test_endpoints.ApplicationViewSetTest) ... ok", tone: "pass", delayMs: 120 },
    { message: "test_coapplicant_serializer_fields (api.tests.test_serializers.CoAppSerializerTest) ... ok", tone: "pass", delayMs: 110 },
    { message: "test_nested_address_validation (api.tests.test_serializers.CoAppSerializerTest) ... ok", tone: "pass", delayMs: 120 },
    { message: "test_readonly_user_cannot_create (api.tests.test_permissions.PermissionTest) ... ok", tone: "pass", delayMs: 140 },
    { message: "test_admin_can_delete_application (api.tests.test_permissions.PermissionTest) ... ok", tone: "pass", delayMs: 130 },
    { message: "test_unauthenticated_request_returns_401 (api.tests.test_permissions.PermissionTest) ... ok", tone: "pass", delayMs: 100 },
    { message: "", tone: "muted", delayMs: 80 },
    { message: "----------------------------------------------------------------------", tone: "muted", delayMs: 90 },
    { message: "Ran 8 tests in 2.41s", tone: "muted", delayMs: 100 },
    { message: "OK", tone: "pass", delayMs: 80 },
  ],
};

const teamEval: TerminalScenario = {
  id: "team-eval",
  label: "Team Eval E2E",
  command: 'npx cypress run --spec "tests/e2e/evaluations/**"',
  portfolio: true,
  logEntries: [
    { message: "Cypress 13.8.0 — Running 3 suites against eval-staging.io", tone: "muted", delayMs: 200 },
    { message: "", tone: "muted", delayMs: 80 },
    { message: "  evaluation-workflows.cy.ts", tone: "muted", delayMs: 150 },
    { message: "    \u2713 manager creates new evaluation cycle (1320ms)", tone: "pass", delayMs: 160 },
    { message: "    \u2713 employee submits self-assessment (1780ms)", tone: "pass", delayMs: 180 },
    { message: "    \u2713 manager completes peer review assignment (1450ms)", tone: "pass", delayMs: 150 },
    { message: "  scoring-rubrics.cy.ts", tone: "muted", delayMs: 150 },
    { message: "    \u2713 applies 5-point rubric to competency ratings (940ms)", tone: "pass", delayMs: 130 },
    { message: "    \u2713 calculates weighted average across categories (1105ms)", tone: "pass", delayMs: 140 },
    { message: "    \u21bb retrying: enforces minimum comment length on low scores (attempt 2/3)", tone: "retry", delayMs: 260 },
    { message: "    \u2713 enforces minimum comment length on low scores (1620ms)", tone: "pass", delayMs: 150 },
    { message: "  report-generation.cy.ts", tone: "muted", delayMs: 150 },
    { message: "    \u2713 generates PDF summary for completed cycle (2340ms)", tone: "pass", delayMs: 200 },
    { message: "    \u2713 exports team roll-up CSV with all scores (1890ms)", tone: "pass", delayMs: 170 },
    { message: "", tone: "muted", delayMs: 80 },
    { message: "Tests: 8 passed, 0 failed (1 retried) \u2014 13.6s", tone: "pass", delayMs: 120 },
  ],
};

const universityItSystems: TerminalScenario = {
  id: "university-it-systems",
  label: "University Portal Audit",
  command: "npx lighthouse-ci collect --url portal.university.edu",
  portfolio: true,
  logEntries: [
    { message: "Connecting to Chrome on port 9222...", tone: "muted", delayMs: 200 },
    { message: "Chrome connected (v124.0.6367.91)", tone: "muted", delayMs: 150 },
    { message: "Auditing https://portal.university.edu ...", tone: "muted", delayMs: 280 },
    { message: "Performance          91", tone: "pass", delayMs: 180 },
    { message: "Accessibility        100", tone: "pass", delayMs: 120 },
    { message: "Best Practices       96", tone: "pass", delayMs: 120 },
    { message: "SEO                  97", tone: "pass", delayMs: 120 },
    { message: "First Contentful Paint   1.1s", tone: "muted", delayMs: 140 },
    { message: "Time to Interactive      1.8s", tone: "muted", delayMs: 140 },
    { message: "Largest Contentful Paint 1.4s", tone: "muted", delayMs: 140 },
    { message: "Saving report to ./lighthouse-report.html ...", tone: "muted", delayMs: 200 },
    { message: "All audits passed budget thresholds", tone: "pass", delayMs: 100 },
  ],
};

// ---------------------------------------------------------------------------
// Combined scenario list
// ---------------------------------------------------------------------------

export const scenarios: TerminalScenario[] = [
  // Shared
  sharedApiContracts,
  sharedLighthouse,
  sharedAxeA11y,
  sharedDeploy,
  // Portfolio-linked
  macysMissionCritical,
  digitalMenuPlatform,
  offenderRiskAssessment,
  ohioSentencingData,
  brooksourceEnterprise,
  drfCoapp,
  teamEval,
  universityItSystems,
];

// ---------------------------------------------------------------------------
// Utilities
// ---------------------------------------------------------------------------

const excludedSlugs: string[] = [];

export function validateScenarioCoverage(portfolioSlugs: string[]): void {
  const scenarioIds = new Set(
    scenarios.filter((s) => s.portfolio).map((s) => s.id),
  );

  for (const slug of portfolioSlugs) {
    if (!scenarioIds.has(slug) && !excludedSlugs.includes(slug)) {
      throw new Error(
        `Portfolio entry "${slug}" has no matching terminal scenario in src/lib/terminal-scenarios.ts. ` +
          `Add a scenario with id "${slug}" or add it to excludedSlugs.`,
      );
    }
  }
}

export function shuffleScenarios(
  input: TerminalScenario[],
): TerminalScenario[] {
  const shuffled = [...input];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}
