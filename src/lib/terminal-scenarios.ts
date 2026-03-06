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
  command: "pnpm exec jest --project api-contracts --verbose",
  logEntries: [
    { message: " PASS  tests/contracts/auth.spec.ts", tone: "pass", delayMs: 200 },
    { message: "  auth endpoints", tone: "muted", delayMs: 100 },
    { message: "    \u2713 POST /auth/login returns 200 with valid credentials (84 ms)", tone: "pass", delayMs: 140 },
    { message: "    \u2713 POST /auth/login returns 401 with bad password (32 ms)", tone: "pass", delayMs: 100 },
    { message: "    \u2713 POST /auth/refresh rotates token pair (41 ms)", tone: "pass", delayMs: 110 },
    { message: " PASS  tests/contracts/payments.spec.ts", tone: "pass", delayMs: 180 },
    { message: "  payment endpoints", tone: "muted", delayMs: 100 },
    { message: "    \u2713 POST /payments/charge matches OpenAPI schema (127 ms)", tone: "pass", delayMs: 150 },
    { message: "    \u2713 GET /payments/:id returns 404 for unknown id (18 ms)", tone: "pass", delayMs: 90 },
    { message: "    \u2713 POST /payments/refund returns 201 with receipt (93 ms)", tone: "pass", delayMs: 120 },
    { message: " PASS  tests/contracts/inventory.spec.ts", tone: "pass", delayMs: 180 },
    { message: "  inventory endpoints", tone: "muted", delayMs: 100 },
    { message: "    \u2713 GET /inventory returns paginated list (62 ms)", tone: "pass", delayMs: 130 },
    { message: "    \u2713 PATCH /inventory/:sku updates stock count (45 ms)", tone: "pass", delayMs: 100 },
    { message: "    \u2713 DELETE /inventory/:sku returns 204 no content (29 ms)", tone: "pass", delayMs: 90 },
    { message: "    \u2713 GET /inventory?status=low filters correctly (37 ms)", tone: "pass", delayMs: 100 },
    { message: "", tone: "muted", delayMs: 80 },
    { message: "Test Suites:  3 passed, 3 total", tone: "pass", delayMs: 120 },
    { message: "Tests:        10 passed, 10 total", tone: "pass", delayMs: 80 },
    { message: "Snapshots:    0 total", tone: "muted", delayMs: 60 },
    { message: "Time:         1.847 s", tone: "muted", delayMs: 60 },
    { message: "Ran all test suites.", tone: "muted", delayMs: 80 },
  ],
};

const sharedLighthouse: TerminalScenario = {
  id: "shared-lighthouse",
  label: "Lighthouse Audit",
  command: "lhci autorun --collect.url=https://staging.example.com",
  logEntries: [
    { message: "Running Lighthouse 3 time(s) on https://staging.example.com", tone: "muted", delayMs: 200 },
    { message: "Run #1...done.", tone: "muted", delayMs: 260 },
    { message: "Run #2...done.", tone: "muted", delayMs: 240 },
    { message: "Run #3...done.", tone: "muted", delayMs: 250 },
    { message: "Done running Lighthouse!", tone: "muted", delayMs: 150 },
    { message: "", tone: "muted", delayMs: 100 },
    { message: "Checking assertions against 1 URL(s), 3 total run(s)", tone: "muted", delayMs: 160 },
    { message: "", tone: "muted", delayMs: 80 },
    { message: "9 result(s) for https://staging.example.com :", tone: "muted", delayMs: 140 },
    { message: "", tone: "muted", delayMs: 60 },
    { message: "  \u2705  categories:performance passing for minScore assertion", tone: "pass", delayMs: 140 },
    { message: "        expected: >=0.9      found: 0.96", tone: "pass", delayMs: 80 },
    { message: "  \u2705  categories:accessibility passing for minScore assertion", tone: "pass", delayMs: 130 },
    { message: "        expected: >=0.9      found: 1", tone: "pass", delayMs: 80 },
    { message: "  \u2705  categories:best-practices passing for minScore assertion", tone: "pass", delayMs: 130 },
    { message: "        expected: >=0.9      found: 0.95", tone: "pass", delayMs: 80 },
    { message: "  \u2705  categories:seo passing for minScore assertion", tone: "pass", delayMs: 130 },
    { message: "        expected: >=0.9      found: 0.98", tone: "pass", delayMs: 80 },
    { message: "  \u2705  first-contentful-paint passing for maxNumericValue assertion", tone: "pass", delayMs: 130 },
    { message: "        expected: <=2000     found: 842", tone: "pass", delayMs: 80 },
    { message: "  \u2705  largest-contentful-paint passing for maxNumericValue assertion", tone: "pass", delayMs: 130 },
    { message: "        expected: <=2500     found: 1140", tone: "pass", delayMs: 80 },
    { message: "  \u2705  interactive passing for maxNumericValue assertion", tone: "pass", delayMs: 130 },
    { message: "        expected: <=3500     found: 1203", tone: "pass", delayMs: 80 },
    { message: "  \u2705  cumulative-layout-shift passing for maxNumericValue assertion", tone: "pass", delayMs: 130 },
    { message: "        expected: <=0.1      found: 0.003", tone: "pass", delayMs: 80 },
    { message: "", tone: "muted", delayMs: 80 },
    { message: "All results processed!", tone: "pass", delayMs: 100 },
  ],
};

const sharedAxeA11y: TerminalScenario = {
  id: "shared-axe-a11y",
  label: "Accessibility Scan",
  command: "npx @axe-core/cli https://staging.example.com/checkout, https://staging.example.com/dashboard, https://staging.example.com/settings",
  logEntries: [
    { message: "Running axe-core 4.10.2 in chrome-headless", tone: "muted", delayMs: 180 },
    { message: "", tone: "muted", delayMs: 100 },
    { message: "Testing https://staging.example.com/checkout ... please wait, this may take a minute.", tone: "muted", delayMs: 280 },
    { message: "  0 violations found!", tone: "pass", delayMs: 200 },
    { message: "", tone: "muted", delayMs: 100 },
    { message: "Testing https://staging.example.com/dashboard ... please wait, this may take a minute.", tone: "muted", delayMs: 300 },
    { message: "", tone: "muted", delayMs: 80 },
    { message: "  Violation of \"color-contrast\" with 1 occurrences!", tone: "retry", delayMs: 160 },
    { message: "    Elements must meet minimum color contrast ratio thresholds. Correct invalid elements at:", tone: "muted", delayMs: 120 },
    { message: "     - .badge-muted > span", tone: "muted", delayMs: 100 },
    { message: "    For details, see: https://dequeuniversity.com/rules/axe/4.10/color-contrast", tone: "muted", delayMs: 120 },
    { message: "", tone: "muted", delayMs: 60 },
    { message: "1 Accessibility issues detected.", tone: "retry", delayMs: 140 },
    { message: "", tone: "muted", delayMs: 100 },
    { message: "Testing https://staging.example.com/settings ... please wait, this may take a minute.", tone: "muted", delayMs: 280 },
    { message: "  0 violations found!", tone: "pass", delayMs: 200 },
    { message: "", tone: "muted", delayMs: 100 },
    { message: "Testing complete of 3 pages", tone: "muted", delayMs: 140 },
    { message: "", tone: "muted", delayMs: 80 },
    { message: "Please note that only 20% to 50% of all accessibility issues can", tone: "muted", delayMs: 100 },
    { message: "automatically be detected. Manual testing is always required. For more", tone: "muted", delayMs: 80 },
    { message: "information see: https://dequeuniversity.com/class/testing", tone: "muted", delayMs: 80 },
  ],
};

const sharedDeploy: TerminalScenario = {
  id: "shared-deploy",
  label: "Deploy Pipeline",
  command: "./deploy.sh --env staging --tag v2.14.0",
  logEntries: [
    { message: "[deploy] Pulling image registry.io/app:v2.14.0 ...", tone: "muted", delayMs: 280 },
    { message: "[deploy] Image digest: sha256:a4f8e2c...verified", tone: "muted", delayMs: 150 },
    { message: "[deploy] Running pre-deploy migrations...", tone: "muted", delayMs: 200 },
    { message: "[deploy] Applied 3 migrations in 4.2s", tone: "muted", delayMs: 180 },
    { message: "[deploy] Stopping current containers...", tone: "muted", delayMs: 200 },
    { message: "[deploy] Starting v2.14.0 on staging-1, staging-2, staging-3...", tone: "muted", delayMs: 260 },
    { message: "[deploy] Waiting for health checks...", tone: "muted", delayMs: 180 },
    { message: "[deploy] Health check staging-1: 200 OK (142ms)", tone: "pass", delayMs: 160 },
    { message: "[deploy] Health check staging-2: 200 OK (137ms)", tone: "pass", delayMs: 140 },
    { message: "[deploy] Health check staging-3: 200 OK (151ms)", tone: "pass", delayMs: 140 },
    { message: "[deploy] DNS propagation check... resolved in 3.2s", tone: "muted", delayMs: 280 },
    { message: "[deploy] Running smoke tests...", tone: "muted", delayMs: 160 },
    { message: "[smoke]  GET  /api/status: 200 OK (89ms)", tone: "pass", delayMs: 120 },
    { message: "[smoke]  GET  /api/health: 200 OK (74ms)", tone: "pass", delayMs: 100 },
    { message: "[smoke]  POST /api/auth/login: 200 OK (203ms)", tone: "pass", delayMs: 130 },
    { message: "[smoke]  GET  /api/users?limit=1: 200 OK (112ms)", tone: "pass", delayMs: 110 },
    { message: "[deploy] All smoke tests passed (4/4)", tone: "pass", delayMs: 140 },
    { message: "[deploy] Tagging previous image as rollback target", tone: "muted", delayMs: 160 },
    { message: "[deploy] Deploy v2.14.0 to staging complete", tone: "pass", delayMs: 120 },
    { message: "[deploy] Total deploy time: 47.3s", tone: "muted", delayMs: 100 },
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
    { message: "  (Run Starting)", tone: "muted", delayMs: 160 },
    { message: "", tone: "muted", delayMs: 80 },
    { message: "  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510", tone: "muted", delayMs: 60 },
    { message: "  \u2502 Cypress:    13.8.0                           \u2502", tone: "muted", delayMs: 60 },
    { message: "  \u2502 Browser:    Electron 118 (headless)          \u2502", tone: "muted", delayMs: 60 },
    { message: "  \u2502 Specs:      2 found                          \u2502", tone: "muted", delayMs: 60 },
    { message: "  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518", tone: "muted", delayMs: 80 },
    { message: "", tone: "muted", delayMs: 100 },
    { message: "  Running:  cart-promotions.cy.ts           (1 of 2)", tone: "muted", delayMs: 160 },
    { message: "", tone: "muted", delayMs: 80 },
    { message: "  Cart & Promotions", tone: "muted", delayMs: 120 },
    { message: "    \u2713 applies BOGO discount to eligible items (1842ms)", tone: "pass", delayMs: 180 },
    { message: "    \u2713 stacks loyalty coupon with sale price (1204ms)", tone: "pass", delayMs: 140 },
    { message: "    \u2713 preserves cart after session refresh (2301ms)", tone: "pass", delayMs: 180 },
    { message: "", tone: "muted", delayMs: 60 },
    { message: "  3 passing (5s)", tone: "pass", delayMs: 120 },
    { message: "", tone: "muted", delayMs: 100 },
    { message: "  Running:  payment-validation.cy.ts        (2 of 2)", tone: "muted", delayMs: 160 },
    { message: "", tone: "muted", delayMs: 80 },
    { message: "  Payment Validation", tone: "muted", delayMs: 120 },
    { message: "    \u2713 rejects expired credit card (934ms)", tone: "pass", delayMs: 120 },
    { message: "    \u2713 processes Apple Pay tokenized payment (1673ms)", tone: "pass", delayMs: 160 },
    { message: "    (Attempt 1 of 2) validates CVV on saved card", tone: "retry", delayMs: 240 },
    { message: "    \u2713 validates CVV on saved card (2140ms)", tone: "pass", delayMs: 160 },
    { message: "    \u2713 completes guest checkout end-to-end (3102ms)", tone: "pass", delayMs: 200 },
    { message: "", tone: "muted", delayMs: 60 },
    { message: "  4 passing (8s)", tone: "pass", delayMs: 120 },
    { message: "", tone: "muted", delayMs: 100 },
    { message: "  \u2714  All specs passed!                  00:13", tone: "pass", delayMs: 120 },
  ],
};

const digitalMenuPlatform: TerminalScenario = {
  id: "digital-menu-platform",
  label: "Menu Platform E2E",
  command: 'npx cypress run --spec "tests/e2e/menu/**"',
  portfolio: true,
  logEntries: [
    { message: "  (Run Starting)", tone: "muted", delayMs: 160 },
    { message: "", tone: "muted", delayMs: 80 },
    { message: "  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510", tone: "muted", delayMs: 60 },
    { message: "  \u2502 Cypress:    13.8.0                           \u2502", tone: "muted", delayMs: 60 },
    { message: "  \u2502 Browser:    Chrome 124 (headless)            \u2502", tone: "muted", delayMs: 60 },
    { message: "  \u2502 Specs:      2 found                          \u2502", tone: "muted", delayMs: 60 },
    { message: "  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518", tone: "muted", delayMs: 80 },
    { message: "", tone: "muted", delayMs: 100 },
    { message: "  Running:  daypart-transitions.cy.ts       (1 of 2)", tone: "muted", delayMs: 160 },
    { message: "", tone: "muted", delayMs: 80 },
    { message: "  Daypart Transitions", tone: "muted", delayMs: 120 },
    { message: "    \u2713 switches from breakfast to lunch at 11:00 (2104ms)", tone: "pass", delayMs: 180 },
    { message: "    (Attempt 1 of 2) hides breakfast-only items after transition", tone: "retry", delayMs: 240 },
    { message: "    \u2713 hides breakfast-only items after transition (1876ms)", tone: "pass", delayMs: 160 },
    { message: "    \u2713 renders cached menu when API is unreachable (980ms)", tone: "pass", delayMs: 130 },
    { message: "", tone: "muted", delayMs: 60 },
    { message: "  3 passing (5s)", tone: "pass", delayMs: 120 },
    { message: "", tone: "muted", delayMs: 100 },
    { message: "  Running:  menu-sync.cy.ts                 (2 of 2)", tone: "muted", delayMs: 160 },
    { message: "", tone: "muted", delayMs: 80 },
    { message: "  Menu Sync", tone: "muted", delayMs: 120 },
    { message: "    \u2713 publishes scheduled menu at future datetime (1540ms)", tone: "pass", delayMs: 160 },
    { message: "    \u2713 syncs price update across 12 kiosk nodes (2830ms)", tone: "pass", delayMs: 200 },
    { message: "    \u2713 propagates item 86'd status within 5s (1450ms)", tone: "pass", delayMs: 140 },
    { message: "    \u2713 shows connectivity banner during offline mode (742ms)", tone: "pass", delayMs: 110 },
    { message: "", tone: "muted", delayMs: 60 },
    { message: "  4 passing (7s)", tone: "pass", delayMs: 120 },
    { message: "", tone: "muted", delayMs: 100 },
    { message: "  \u2714  All specs passed!                  00:12", tone: "pass", delayMs: 120 },
  ],
};

const offenderRiskAssessment: TerminalScenario = {
  id: "offender-risk-assessment-case-planning",
  label: "Risk Assessment API Tests",
  command: "pnpm exec jest --project risk-scoring --verbose",
  portfolio: true,
  logEntries: [
    { message: " PASS  tests/api/risk-scoring.spec.ts", tone: "pass", delayMs: 200 },
    { message: "  risk scoring engine", tone: "muted", delayMs: 100 },
    { message: "    \u2713 POST /assessments returns risk score 1-10 (94 ms)", tone: "pass", delayMs: 140 },
    { message: "    \u2713 GET /assessments/:id includes factor breakdown (47 ms)", tone: "pass", delayMs: 110 },
    { message: "    \u2713 rejects assessment with missing demographics (22 ms)", tone: "pass", delayMs: 90 },
    { message: "    \u2713 recalculates score when risk factors change (118 ms)", tone: "pass", delayMs: 140 },
    { message: " PASS  tests/api/case-plan-validation.spec.ts", tone: "pass", delayMs: 180 },
    { message: "  case plan validation", tone: "muted", delayMs: 100 },
    { message: "    \u2713 POST /case-plans validates required intervention fields (68 ms)", tone: "pass", delayMs: 130 },
    { message: "    \u2713 links case plan to active assessment (53 ms)", tone: "pass", delayMs: 110 },
    { message: "    \u2713 prevents duplicate case plans for same offender (31 ms)", tone: "pass", delayMs: 100 },
    { message: " PASS  tests/api/assessment-workflows.spec.ts", tone: "pass", delayMs: 180 },
    { message: "  assessment workflows", tone: "muted", delayMs: 100 },
    { message: "    \u2713 completes full intake \u2192 scoring \u2192 plan workflow (284 ms)", tone: "pass", delayMs: 200 },
    { message: "    \u2713 supervisor override updates final risk level (72 ms)", tone: "pass", delayMs: 120 },
    { message: "    \u2713 flags high-risk scores for mandatory review (56 ms)", tone: "pass", delayMs: 100 },
    { message: "", tone: "muted", delayMs: 80 },
    { message: "Test Suites:  3 passed, 3 total", tone: "pass", delayMs: 120 },
    { message: "Tests:        10 passed, 10 total", tone: "pass", delayMs: 80 },
    { message: "Snapshots:    0 total", tone: "muted", delayMs: 60 },
    { message: "Time:         2.391 s", tone: "muted", delayMs: 60 },
    { message: "Ran all test suites.", tone: "muted", delayMs: 80 },
  ],
};

const ohioSentencingData: TerminalScenario = {
  id: "ohio-sentencing-data-platform",
  label: "OSDP Data Validation",
  command: "pnpm exec jest --project data-integrity --verbose",
  portfolio: true,
  logEntries: [
    { message: " PASS  tests/etl/integrity.spec.ts", tone: "pass", delayMs: 200 },
    { message: "  data integrity checks", tone: "muted", delayMs: 100 },
    { message: "    \u2713 row counts match between source and warehouse (186 ms)", tone: "pass", delayMs: 170 },
    { message: "    \u2713 no orphaned foreign keys in sentencing_records (94 ms)", tone: "pass", delayMs: 130 },
    { message: "    \u2713 date fields fall within valid sentencing range (67 ms)", tone: "pass", delayMs: 110 },
    { message: "    \u2713 offender IDs are unique across jurisdictions (112 ms)", tone: "pass", delayMs: 140 },
    { message: " PASS  tests/etl/audit-trail.spec.ts", tone: "pass", delayMs: 180 },
    { message: "  audit trail", tone: "muted", delayMs: 100 },
    { message: "    \u2713 every mutation generates an audit log entry (112 ms)", tone: "pass", delayMs: 140 },
    { message: "    \u2713 audit timestamps are monotonically increasing (43 ms)", tone: "pass", delayMs: 100 },
    { message: " PASS  tests/etl/data-parity.spec.ts", tone: "pass", delayMs: 180 },
    { message: "  data parity", tone: "muted", delayMs: 100 },
    { message: "    \u2713 aggregate sentence counts match DOC report (231 ms)", tone: "pass", delayMs: 180 },
    { message: "    \u2713 felony classification distribution within 0.1% (302 ms)", tone: "pass", delayMs: 200 },
    { message: "    \u2713 county-level totals reconcile with state roll-up (187 ms)", tone: "pass", delayMs: 160 },
    { message: "", tone: "muted", delayMs: 80 },
    { message: "Test Suites:  3 passed, 3 total", tone: "pass", delayMs: 120 },
    { message: "Tests:        9 passed, 9 total", tone: "pass", delayMs: 80 },
    { message: "Snapshots:    0 total", tone: "muted", delayMs: 60 },
    { message: "Time:         3.047 s", tone: "muted", delayMs: 60 },
    { message: "Ran all test suites.", tone: "muted", delayMs: 80 },
  ],
};

const brooksourceEnterprise: TerminalScenario = {
  id: "brooksource-enterprise-engagement",
  label: "Enterprise Deploy",
  command: "./deploy.sh --env staging --region us-east-1",
  portfolio: true,
  logEntries: [
    { message: "[build]  Building artifacts from commit a3f8c2e...", tone: "muted", delayMs: 250 },
    { message: "[build]  Docker image built: engagement-api:a3f8c2e (48s)", tone: "muted", delayMs: 200 },
    { message: "[push]   Pushing to ECR us-east-1...", tone: "muted", delayMs: 280 },
    { message: "[push]   Image pushed. Digest: sha256:d9e1f03...verified", tone: "muted", delayMs: 150 },
    { message: "[deploy] Rolling update: 0/3 instances replaced", tone: "muted", delayMs: 200 },
    { message: "[deploy] Rolling update: 1/3 instances replaced", tone: "muted", delayMs: 220 },
    { message: "[deploy] Rolling update: 2/3 instances replaced", tone: "muted", delayMs: 220 },
    { message: "[deploy] Rolling update: 3/3 instances replaced", tone: "pass", delayMs: 240 },
    { message: "[health] Health check api-1.us-east-1: 200 OK (98ms)", tone: "pass", delayMs: 140 },
    { message: "[health] Health check api-2.us-east-1: 200 OK (104ms)", tone: "pass", delayMs: 120 },
    { message: "[health] Health check api-3.us-east-1: 200 OK (91ms)", tone: "pass", delayMs: 120 },
    { message: "[smoke]  GET  /api/engagements: 200 OK (12 records)", tone: "pass", delayMs: 130 },
    { message: "[smoke]  POST /api/engagements: 201 Created (148ms)", tone: "pass", delayMs: 110 },
    { message: "[smoke]  GET  /api/consultants?active=true: 200 OK (87ms)", tone: "pass", delayMs: 100 },
    { message: "[deploy] Rollback verification: previous image tagged as fallback", tone: "muted", delayMs: 180 },
    { message: "[deploy] CloudWatch alarm check: no alarms firing", tone: "pass", delayMs: 150 },
    { message: "[deploy] Deploy a3f8c2e to staging us-east-1 complete", tone: "pass", delayMs: 120 },
    { message: "[deploy] Total deploy time: 2m 14s", tone: "muted", delayMs: 100 },
  ],
};

const drfCoapp: TerminalScenario = {
  id: "drf-coapp",
  label: "CoApp API Tests",
  command: "python manage.py test api.tests --verbosity 2",
  portfolio: true,
  logEntries: [
    { message: "Found 10 test(s).", tone: "muted", delayMs: 140 },
    { message: "Creating test database for alias 'default'...", tone: "muted", delayMs: 200 },
    { message: "System check identified no issues (0 silenced).", tone: "muted", delayMs: 150 },
    { message: "test_list_applications (api.tests.test_endpoints.ApplicationViewSetTest) ... ok", tone: "pass", delayMs: 130 },
    { message: "test_create_application (api.tests.test_endpoints.ApplicationViewSetTest) ... ok", tone: "pass", delayMs: 120 },
    { message: "test_filter_by_status (api.tests.test_endpoints.ApplicationViewSetTest) ... ok", tone: "pass", delayMs: 110 },
    { message: "test_retrieve_application (api.tests.test_endpoints.ApplicationViewSetTest) ... ok", tone: "pass", delayMs: 120 },
    { message: "test_coapplicant_serializer_fields (api.tests.test_serializers.CoAppSerializerTest) ... ok", tone: "pass", delayMs: 110 },
    { message: "test_nested_address_validation (api.tests.test_serializers.CoAppSerializerTest) ... ok", tone: "pass", delayMs: 120 },
    { message: "test_income_field_precision (api.tests.test_serializers.CoAppSerializerTest) ... ok", tone: "pass", delayMs: 100 },
    { message: "test_readonly_user_cannot_create (api.tests.test_permissions.PermissionTest) ... ok", tone: "pass", delayMs: 130 },
    { message: "test_admin_can_delete_application (api.tests.test_permissions.PermissionTest) ... ok", tone: "pass", delayMs: 120 },
    { message: "test_unauthenticated_request_returns_401 (api.tests.test_permissions.PermissionTest) ... ok", tone: "pass", delayMs: 100 },
    { message: "", tone: "muted", delayMs: 80 },
    { message: "----------------------------------------------------------------------", tone: "muted", delayMs: 60 },
    { message: "Ran 10 tests in 3.142s", tone: "muted", delayMs: 100 },
    { message: "", tone: "muted", delayMs: 60 },
    { message: "OK", tone: "pass", delayMs: 80 },
    { message: "Destroying test database for alias 'default'...", tone: "muted", delayMs: 120 },
  ],
};

const teamEval: TerminalScenario = {
  id: "team-eval",
  label: "Team Eval E2E",
  command: 'npx cypress run --spec "tests/e2e/evaluations/**"',
  portfolio: true,
  logEntries: [
    { message: "  (Run Starting)", tone: "muted", delayMs: 160 },
    { message: "", tone: "muted", delayMs: 80 },
    { message: "  \u250C\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2510", tone: "muted", delayMs: 60 },
    { message: "  \u2502 Cypress:    13.8.0                           \u2502", tone: "muted", delayMs: 60 },
    { message: "  \u2502 Browser:    Electron 118 (headless)          \u2502", tone: "muted", delayMs: 60 },
    { message: "  \u2502 Specs:      2 found                          \u2502", tone: "muted", delayMs: 60 },
    { message: "  \u2514\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2518", tone: "muted", delayMs: 80 },
    { message: "", tone: "muted", delayMs: 100 },
    { message: "  Running:  evaluation-workflows.cy.ts      (1 of 2)", tone: "muted", delayMs: 160 },
    { message: "", tone: "muted", delayMs: 80 },
    { message: "  Evaluation Workflows", tone: "muted", delayMs: 120 },
    { message: "    \u2713 manager creates new evaluation cycle (1320ms)", tone: "pass", delayMs: 150 },
    { message: "    \u2713 employee submits self-assessment (1780ms)", tone: "pass", delayMs: 170 },
    { message: "    \u2713 manager completes peer review assignment (1450ms)", tone: "pass", delayMs: 150 },
    { message: "    \u2713 generates PDF summary for completed cycle (2340ms)", tone: "pass", delayMs: 190 },
    { message: "", tone: "muted", delayMs: 60 },
    { message: "  4 passing (7s)", tone: "pass", delayMs: 120 },
    { message: "", tone: "muted", delayMs: 100 },
    { message: "  Running:  scoring-rubrics.cy.ts           (2 of 2)", tone: "muted", delayMs: 160 },
    { message: "", tone: "muted", delayMs: 80 },
    { message: "  Scoring Rubrics", tone: "muted", delayMs: 120 },
    { message: "    \u2713 applies 5-point rubric to competency ratings (940ms)", tone: "pass", delayMs: 130 },
    { message: "    \u2713 calculates weighted average across categories (1105ms)", tone: "pass", delayMs: 140 },
    { message: "    (Attempt 1 of 2) enforces minimum comment length on low scores", tone: "retry", delayMs: 240 },
    { message: "    \u2713 enforces minimum comment length on low scores (1620ms)", tone: "pass", delayMs: 150 },
    { message: "    \u2713 exports team roll-up CSV with all scores (1890ms)", tone: "pass", delayMs: 160 },
    { message: "", tone: "muted", delayMs: 60 },
    { message: "  4 passing (6s)", tone: "pass", delayMs: 120 },
    { message: "", tone: "muted", delayMs: 100 },
    { message: "  \u2714  All specs passed!                  00:13", tone: "pass", delayMs: 120 },
  ],
};

const universityItSystems: TerminalScenario = {
  id: "university-it-systems",
  label: "University Portal Audit",
  command: "lhci autorun --collect.url=https://portal.university.edu",
  portfolio: true,
  logEntries: [
    { message: "Running Lighthouse 3 time(s) on https://portal.university.edu", tone: "muted", delayMs: 200 },
    { message: "Run #1...done.", tone: "muted", delayMs: 260 },
    { message: "Run #2...done.", tone: "muted", delayMs: 240 },
    { message: "Run #3...done.", tone: "muted", delayMs: 250 },
    { message: "Done running Lighthouse!", tone: "muted", delayMs: 150 },
    { message: "", tone: "muted", delayMs: 100 },
    { message: "Checking assertions against 1 URL(s), 3 total run(s)", tone: "muted", delayMs: 160 },
    { message: "", tone: "muted", delayMs: 80 },
    { message: "8 result(s) for https://portal.university.edu :", tone: "muted", delayMs: 140 },
    { message: "", tone: "muted", delayMs: 60 },
    { message: "  \u2705  categories:performance passing for minScore assertion", tone: "pass", delayMs: 140 },
    { message: "        expected: >=0.85     found: 0.91", tone: "pass", delayMs: 80 },
    { message: "  \u2705  categories:accessibility passing for minScore assertion", tone: "pass", delayMs: 130 },
    { message: "        expected: >=0.95     found: 1", tone: "pass", delayMs: 80 },
    { message: "  \u2705  categories:best-practices passing for minScore assertion", tone: "pass", delayMs: 130 },
    { message: "        expected: >=0.9      found: 0.96", tone: "pass", delayMs: 80 },
    { message: "  \u2705  categories:seo passing for minScore assertion", tone: "pass", delayMs: 130 },
    { message: "        expected: >=0.9      found: 0.97", tone: "pass", delayMs: 80 },
    { message: "  \u2705  first-contentful-paint passing for maxNumericValue assertion", tone: "pass", delayMs: 130 },
    { message: "        expected: <=2500     found: 1124", tone: "pass", delayMs: 80 },
    { message: "  \u2705  largest-contentful-paint passing for maxNumericValue assertion", tone: "pass", delayMs: 130 },
    { message: "        expected: <=3000     found: 1482", tone: "pass", delayMs: 80 },
    { message: "  \u2705  interactive passing for maxNumericValue assertion", tone: "pass", delayMs: 130 },
    { message: "        expected: <=4000     found: 1843", tone: "pass", delayMs: 80 },
    { message: "  \u2705  cumulative-layout-shift passing for maxNumericValue assertion", tone: "pass", delayMs: 130 },
    { message: "        expected: <=0.1      found: 0.012", tone: "pass", delayMs: 80 },
    { message: "", tone: "muted", delayMs: 80 },
    { message: "All results processed!", tone: "pass", delayMs: 100 },
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
    scenarios.filter((scenario) => scenario.portfolio).map((scenario) => scenario.id),
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
