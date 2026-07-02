# Contact Page Overhaul Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Working contact form via a Cloudflare Worker (`send_email` binding), restyled contact page in the site's ops-console design language, GitHub link on contact page + footer, and `Armourbl@buildverified.com` as the site email.

**Architecture:** The Next.js site is a static export on Cloudflare Pages; it cannot run server code. A small Worker in `workers/contact-form/` handles `POST /api/contact` on the same domain (Worker routes shadow the Pages project for that path - same-origin, no CORS) and emails submissions to the verified inbox through Cloudflare Email Routing. The frontend form is one client component; the rest of the contact page stays a server component.

**Tech Stack:** Next.js 16 (static export), Tailwind v4 theme tokens, Cloudflare Workers + `send_email` binding, `mimetext` for MIME building, wrangler 4.x (already authenticated on this machine).

## Global Constraints

- Spec: `docs/superpowers/specs/2026-07-01-contact-page-design.md`.
- Email Routing is ALREADY enabled on buildverified.com; `armourbl@buildverified.com` → `benarmour72@gmail.com` (verified). Do not re-run that setup.
- Displayed email is exactly `Armourbl@buildverified.com` (capital A); the routing rule matches case-insensitively.
- Worker From address: `noreply@buildverified.com`. Destination: `benarmour72@gmail.com` (must be the verified destination - NOT the @buildverified.com alias).
- Repo has no JS test framework; tasks verify with exact curl/build/browser checks instead. Do not add a test framework.
- The main app's `node_modules`/lockfile must not churn: install worker deps with `pnpm install --ignore-workspace` inside `workers/contact-form/` (it keeps its own lockfile).
- Commits: conventional style (`feat(contact): …`), no Co-Authored-By lines.
- Validation caps (used in Worker AND mirrored as `maxLength` in the form): name ≤ 200, email ≤ 320, message ≤ 5000.
- Honeypot field name: `website`.
- Design tokens to use (defined in `src/app/globals.css`): `text-text-muted`, `text-text-secondary`, `text-text-primary`, `bg-bg-card`, `border-border`, `text-accent`, `text-status-pass`, `text-status-error`, `.ghost-btn`, `.ghost-btn-accent`, `.gradient-text-brand`, `.font-display`, `.terminal-cursor`.

---

### Task 1: Contact-form Worker

**Files:**
- Create: `workers/contact-form/package.json`
- Create: `workers/contact-form/wrangler.jsonc`
- Create: `workers/contact-form/tsconfig.json`
- Create: `workers/contact-form/src/index.ts`
- Create: `workers/contact-form/.gitignore`

**Interfaces:**
- Consumes: nothing from the repo (standalone package).
- Produces: HTTP contract used by Task 3's form - `POST /api/contact` with JSON `{name: string, email: string, message: string, website: string}`; responses `200 {"ok":true}`, `400 {"ok":false,"error":"<message>"}`, `405 {"ok":false,"error":"Method not allowed"}`, `500 {"ok":false,"error":"Failed to send message. Please email me directly."}`.

- [ ] **Step 1: Scaffold the package**

`workers/contact-form/package.json`:

```json
{
  "name": "buildverified-contact-form",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "wrangler dev",
    "deploy": "wrangler deploy"
  },
  "dependencies": {
    "mimetext": "^3.0.27"
  },
  "devDependencies": {
    "@cloudflare/workers-types": "^4.20250620.0",
    "typescript": "^5",
    "wrangler": "^4.0.0"
  }
}
```

`workers/contact-form/wrangler.jsonc`:

```jsonc
{
  "name": "buildverified-contact-form",
  "main": "src/index.ts",
  "compatibility_date": "2026-06-28",
  "send_email": [
    {
      "name": "CONTACT_EMAIL",
      "destination_address": "benarmour72@gmail.com"
    }
  ],
  "routes": [
    { "pattern": "buildverified.com/api/contact*", "zone_name": "buildverified.com" },
    { "pattern": "www.buildverified.com/api/contact*", "zone_name": "buildverified.com" }
  ]
}
```

`workers/contact-form/tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ES2022",
    "moduleResolution": "bundler",
    "lib": ["ES2022"],
    "types": ["@cloudflare/workers-types"],
    "strict": true,
    "noEmit": true
  },
  "include": ["src"]
}
```

`workers/contact-form/.gitignore`:

```
node_modules/
.wrangler/
```

- [ ] **Step 2: Install dependencies (standalone, not in the root workspace)**

Run: `cd workers/contact-form && pnpm install --ignore-workspace`
Expected: creates `workers/contact-form/pnpm-lock.yaml` and local `node_modules`; root `pnpm-lock.yaml` untouched (`git status` shows no change to root lockfile).

- [ ] **Step 3: Implement the Worker**

`workers/contact-form/src/index.ts`:

```ts
import { EmailMessage } from "cloudflare:email";
import { createMimeMessage } from "mimetext";

interface Env {
  CONTACT_EMAIL: SendEmail;
}

const FROM_ADDR = "noreply@buildverified.com";
const DEST_ADDR = "benarmour72@gmail.com";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

interface Submission {
  name: string;
  email: string;
  message: string;
}

/** Returns the cleaned submission, "spam" for honeypot hits, or an error string. */
function parseSubmission(
  data: unknown
): { ok: true; value: Submission } | { ok: false; spam: boolean; error: string } {
  if (typeof data !== "object" || data === null) {
    return { ok: false, spam: false, error: "Invalid request body." };
  }
  const record = data as Record<string, unknown>;
  const field = (key: string) =>
    typeof record[key] === "string" ? (record[key] as string).trim() : "";

  if (field("website") !== "") {
    return { ok: false, spam: true, error: "" };
  }

  const name = field("name");
  const email = field("email");
  const message = field("message");

  if (!name || !email || !message) {
    return { ok: false, spam: false, error: "Name, email, and message are required." };
  }
  if (name.length > 200 || email.length > 320 || message.length > 5000) {
    return { ok: false, spam: false, error: "One or more fields are too long." };
  }
  if (!EMAIL_RE.test(email)) {
    return { ok: false, spam: false, error: "Please enter a valid email address." };
  }
  return { ok: true, value: { name, email, message } };
}

function json(status: number, body: Record<string, unknown>): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method !== "POST") {
      return json(405, { ok: false, error: "Method not allowed" });
    }

    let data: unknown;
    try {
      data = await request.json();
    } catch {
      return json(400, { ok: false, error: "Invalid request body." });
    }

    const parsed = parseSubmission(data);
    if (!parsed.ok) {
      // Honeypot hits get a fake success so bots learn nothing.
      if (parsed.spam) return json(200, { ok: true });
      return json(400, { ok: false, error: parsed.error });
    }

    const { name, email, message } = parsed.value;
    // Strip header-breaking chars from anything that lands in MIME headers.
    const safeName = name.replace(/[\r\n"<>]/g, " ").trim();

    const msg = createMimeMessage();
    msg.setSender({ name: "BuildVerified Contact", addr: FROM_ADDR });
    msg.setRecipient(DEST_ADDR);
    msg.setHeader("Reply-To", email);
    msg.setSubject(`Contact form: ${safeName}`);
    msg.addMessage({
      contentType: "text/plain",
      data: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    try {
      await env.CONTACT_EMAIL.send(new EmailMessage(FROM_ADDR, DEST_ADDR, msg.asRaw()));
    } catch {
      return json(500, {
        ok: false,
        error: "Failed to send message. Please email me directly.",
      });
    }
    return json(200, { ok: true });
  },
} satisfies ExportedHandler<Env>;
```

- [ ] **Step 4: Type-check**

Run: `cd workers/contact-form && npx tsc --noEmit`
Expected: exits 0, no output. (`SendEmail`, `ExportedHandler`, and the `cloudflare:email` module come from `@cloudflare/workers-types`; if `cloudflare:email` is unresolved, add a `src/env.d.ts` with `declare module "cloudflare:email" { export class EmailMessage { constructor(from: string, to: string, raw: string); } }`.)

- [ ] **Step 5: Verify behavior with wrangler dev + curl**

Run in background: `cd workers/contact-form && npx wrangler dev --port 8787`
Wait for "Ready on http://localhost:8787", then run each check:

```bash
# 405 on GET
curl -s -o /dev/null -w "%{http_code}" http://localhost:8787/api/contact
# expected: 405

# 400 on missing fields
curl -s -X POST http://localhost:8787/api/contact -H "Content-Type: application/json" -d '{"name":"Ben"}'
# expected: {"ok":false,"error":"Name, email, and message are required."}

# 400 on bad email
curl -s -X POST http://localhost:8787/api/contact -H "Content-Type: application/json" -d '{"name":"Ben","email":"not-an-email","message":"hi","website":""}'
# expected: {"ok":false,"error":"Please enter a valid email address."}

# honeypot: fake success
curl -s -X POST http://localhost:8787/api/contact -H "Content-Type: application/json" -d '{"name":"Bot","email":"bot@spam.com","message":"buy stuff","website":"http://spam.com"}'
# expected: {"ok":true}   (and NO email logged by the dev server)

# happy path
curl -s -X POST http://localhost:8787/api/contact -H "Content-Type: application/json" -d '{"name":"Test Person","email":"test@example.com","message":"Hello from the plan"}'
# expected: {"ok":true} - wrangler dev runs send_email as a local stub; it logs the
# message instead of sending. Confirm the dev output mentions the email send.
```

Stop the dev server when done.

- [ ] **Step 6: Commit**

```bash
git add workers/contact-form
git commit -m "feat(contact): add Cloudflare Worker for contact form email delivery"
```

---

### Task 2: site.ts email/GitHub + footer GitHub link

**Files:**
- Modify: `src/lib/site.ts`
- Modify: `src/components/footer.tsx:36-51`

**Interfaces:**
- Produces: `site.email === "Armourbl@buildverified.com"`, `site.githubUrl`, `site.githubLabel` - consumed by Task 4's page and existing pages (`about/page.tsx`, footer) that already read `site.email`.

- [ ] **Step 1: Update `src/lib/site.ts`**

```ts
export const site = {
  name: "Ben Armour",
  role: "Software QA Engineer",
  location: "Mason, OH",
  email: "Armourbl@buildverified.com",
  linkedinUrl: "https://linkedin.com/in/ben-armour",
  linkedinLabel: "linkedin.com/in/ben-armour",
  githubUrl: "https://github.com/LostInTyping",
  githubLabel: "github.com/LostInTyping",
} as const;
```

- [ ] **Step 2: Add GitHub to the footer**

In `src/components/footer.tsx`, inside the `<div className="flex gap-6">` social block, add a GitHub anchor between LinkedIn and Email, matching the existing anchors exactly:

```tsx
<a
  href={site.githubUrl}
  target="_blank"
  rel="noopener noreferrer"
  className="text-sm text-text-secondary transition-colors hover:text-text-primary"
>
  GitHub
</a>
```

- [ ] **Step 3: Verify**

Run: `pnpm lint && pnpm build`
Expected: both exit 0; build output lists `/contact` among exported routes.

- [ ] **Step 4: Commit**

```bash
git add src/lib/site.ts src/components/footer.tsx
git commit -m "feat(site): switch email to Armourbl@buildverified.com and add GitHub link"
```

---

### Task 3: ContactForm client component

**Files:**
- Create: `src/components/contact-form.tsx`

**Interfaces:**
- Consumes: Task 1's HTTP contract (`POST /api/contact`), `site.email` from Task 2.
- Produces: `export function ContactForm()` - no props; rendered by Task 4's page.

- [ ] **Step 1: Write the component**

`src/components/contact-form.tsx`:

```tsx
"use client";

import { useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error";

const inputClasses =
  "mt-1.5 w-full rounded-sm border border-border bg-bg-primary px-3.5 py-2.5 text-sm text-text-primary placeholder-text-muted transition-colors focus:border-accent focus:outline-none";

const labelClasses =
  "block font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("sending");
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const body = (await res.json().catch(() => null)) as {
        ok?: boolean;
        error?: string;
      } | null;
      if (res.ok && body?.ok) {
        setStatus("success");
        form.reset();
      } else {
        setError(body?.error ?? "Something went wrong. Please try again.");
        setStatus("error");
      }
    } catch {
      setError("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate={false}>
      {/* Honeypot: hidden from humans, tempting to bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label htmlFor="name" className={labelClasses}>
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          maxLength={200}
          className={inputClasses}
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className={labelClasses}>
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          maxLength={320}
          className={inputClasses}
          placeholder="you@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          maxLength={5000}
          className={inputClasses}
          placeholder="What can I help with?"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="ghost-btn ghost-btn-accent w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
      </button>

      <div aria-live="polite">
        {status === "success" && (
          <p className="text-sm text-status-pass">
            ✓ Message sent - I&apos;ll get back to you soon.
          </p>
        )}
        {status === "error" && (
          <p className="text-sm text-status-error">
            {error}{" "}
            <a href={`mailto:${site.email}`} className="underline hover:text-text-primary">
              Email me directly
            </a>
            .
          </p>
        )}
      </div>
    </form>
  );
}
```

- [ ] **Step 2: Verify it compiles**

Run: `pnpm lint && pnpm build`
Expected: both exit 0 (component not rendered anywhere yet - that's fine).

- [ ] **Step 3: Commit**

```bash
git add src/components/contact-form.tsx
git commit -m "feat(contact): add client contact form with inline submit states"
```

---

### Task 4: Contact page rebuild (elevated split layout)

**Files:**
- Modify: `src/app/contact/page.tsx` (full rewrite)

**Interfaces:**
- Consumes: `ContactForm` from Task 3; `site.email` / `site.githubUrl` / `site.githubLabel` / `site.linkedinUrl` / `site.linkedinLabel` from Task 2; `FadeIn` / `SlideIn` from `@/components/fade-in` and `@/components/slide-in` (existing - both accept `children`, optional `delay`, `className`; `SlideIn` also `direction: "left" | "right"`).

- [ ] **Step 1: Rewrite the page**

`src/app/contact/page.tsx`:

```tsx
import type { Metadata } from "next";
import { FadeIn } from "@/components/fade-in";
import { SlideIn } from "@/components/slide-in";
import { ContactForm } from "@/components/contact-form";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for QA engineering opportunities.",
  openGraph: {
    url: "/contact",
  },
};

const railItems = [
  {
    label: "Email",
    href: `mailto:${site.email}`,
    text: site.email,
    external: false,
    icon: (
      <path d="M4 6h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Zm0 2.4 8 5.1 8-5.1" />
    ),
  },
  {
    label: "GitHub",
    href: site.githubUrl,
    text: site.githubLabel,
    external: true,
    icon: (
      <path d="M12 3a9 9 0 0 0-2.85 17.54c.45.08.62-.2.62-.44v-1.68c-2.5.55-3.03-1.07-3.03-1.07-.41-1.04-1-1.32-1-1.32-.82-.56.06-.55.06-.55.9.06 1.38.93 1.38.93.8 1.38 2.11.98 2.63.75.08-.58.31-.98.57-1.2-2-.23-4.1-1-4.1-4.45 0-.98.35-1.79.93-2.42-.1-.23-.4-1.15.08-2.4 0 0 .76-.24 2.48.92a8.6 8.6 0 0 1 4.51 0c1.72-1.16 2.47-.92 2.47-.92.49 1.25.18 2.17.09 2.4.58.63.93 1.44.93 2.42 0 3.47-2.11 4.22-4.12 4.44.32.28.61.83.61 1.67v2.48c0 .24.16.52.62.43A9 9 0 0 0 12 3Z" />
    ),
  },
  {
    label: "LinkedIn",
    href: site.linkedinUrl,
    text: site.linkedinLabel,
    external: true,
    icon: (
      <path d="M6.5 8.8v9.7M6.5 5.5v.1m4.3 3.2v9.7m0-6.8c0-1.6 1.3-2.9 2.9-2.9s2.9 1.3 2.9 2.9v6.8" />
    ),
  },
  {
    label: "Location",
    href: null,
    text: "Mason, OH - open to on-site, hybrid, and remote. Willing to relocate within the US or abroad.",
    external: false,
    icon: (
      <path d="M12 21s-6.5-5.2-6.5-10a6.5 6.5 0 0 1 13 0c0 4.8-6.5 10-6.5 10Zm0-8.2a1.8 1.8 0 1 0 0-3.6 1.8 1.8 0 0 0 0 3.6Z" />
    ),
  },
];

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <FadeIn>
        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
          Get in touch<span className="terminal-cursor">_</span>
        </p>
        <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-border bg-bg-card px-3 py-1">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-status-pass opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-status-pass" />
          </span>
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-secondary">
            Open to QA opportunities
          </span>
        </div>
        <h1 className="font-display mt-5 text-4xl font-bold leading-tight sm:text-5xl">
          Let&apos;s build something{" "}
          <span className="gradient-text-brand">verified.</span>
        </h1>
        <p className="mt-4 max-w-xl text-text-secondary">
          Reach out directly or use the form - either way it lands in my inbox.
        </p>
      </FadeIn>

      <div className="mt-12 grid gap-10 md:grid-cols-[1fr_1.2fr]">
        {/* Contact rail */}
        <SlideIn direction="left" delay={0.1}>
          <ul className="space-y-7">
            {railItems.map((item) => (
              <li key={item.label} className="flex gap-3.5">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                  className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                >
                  {item.icon}
                </svg>
                <div>
                  <h2 className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted">
                    {item.label}
                  </h2>
                  {item.href ? (
                    <a
                      href={item.href}
                      {...(item.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="mt-1 block text-sm text-text-primary transition-colors hover:text-accent"
                    >
                      {item.text}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-text-secondary">{item.text}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </SlideIn>

        {/* Form panel */}
        <SlideIn direction="right" delay={0.15}>
          <div className="portfolio-card rounded-sm border border-border bg-bg-card p-6 sm:p-8">
            <ContactForm />
          </div>
        </SlideIn>
      </div>
    </main>
  );
}
```

Note: GitHub icon is a filled glyph - for that one item the stroke styling still renders correctly since the path uses `fill="none"` inherited from the `<svg>`; if the GitHub mark looks hollow/wrong in the browser check, change the shared `<svg>` to `fill="currentColor" stroke="none"` for that item by adding a `filled: true` flag to the rail item and branching the two svg attributes.

- [ ] **Step 2: Build**

Run: `pnpm lint && pnpm build`
Expected: exit 0, `/contact` exported.

- [ ] **Step 3: Browser check (Playwright MCP)**

1. Run `pnpm dev` in the background; wait for ready.
2. Navigate to `http://localhost:3000/contact`, take a screenshot: verify eyebrow + cursor, availability pill with green dot, gradient headline, contact rail with 4 icon rows (GitHub shows `github.com/LostInTyping`), form panel on the right (stacked on mobile - also check a 375px-wide screenshot).
3. Success state: stub fetch before submitting - run `window.fetch = async () => new Response(JSON.stringify({ok:true}), {status:200, headers:{"Content-Type":"application/json"}})` via browser JS evaluation, fill the three fields, submit, verify "✓ Message sent" appears and fields reset.
4. Error state: stub `window.fetch = async () => new Response(JSON.stringify({ok:false,error:"One or more fields are too long."}), {status:400, headers:{"Content-Type":"application/json"}})`, submit again, verify the error text and the "Email me directly" mailto link render.
5. Stop the dev server.

- [ ] **Step 4: Commit**

```bash
git add src/app/contact/page.tsx
git commit -m "feat(contact): rebuild contact page with elevated split layout"
```

---

### Task 5: Deploy + end-to-end verification

**Files:** none (operational task)

**Interfaces:**
- Consumes: everything above; wrangler OAuth session already on this machine.

- [ ] **Step 1: Deploy the Worker**

Run: `cd workers/contact-form && npx wrangler deploy`
Expected: uploads `buildverified-contact-form`, registers both routes (`buildverified.com/api/contact*`, `www.buildverified.com/api/contact*`).

- [ ] **Step 2: Verify the live endpoint**

```bash
curl -s -o /dev/null -w "%{http_code}" https://buildverified.com/api/contact
# expected: 405 (Worker is answering, not the Pages 404)

curl -s -X POST https://buildverified.com/api/contact -H "Content-Type: application/json" -d '{"name":"Deploy Test","email":"test@example.com","message":"End-to-end test from deployment"}'
# expected: {"ok":true}
```

Then ask the user to confirm the "Contact form: Deploy Test" email arrived at benarmour72@gmail.com (via the armourbl reply-to path it will show reply-to test@example.com).

- [ ] **Step 3: Deploy the site - ONLY with user go-ahead**

This branch is stacked on `feat/homepage-improvements`; a Pages deploy publishes those homepage changes too. Confirm with the user (or merge PRs first), then:

```bash
pnpm build && npx wrangler pages deploy out --project-name buildverified
```

- [ ] **Step 4: Live smoke test**

Navigate to `https://buildverified.com/contact`, submit a real message, confirm inline success and that the email arrives in Gmail.

- [ ] **Step 5: Commit any remaining changes and push**

```bash
git push -u origin feat/contact-page
```
