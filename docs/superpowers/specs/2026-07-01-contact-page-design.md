# Contact Page Overhaul - Design

**Date:** 2026-07-01
**Status:** Approved

## Goal

Make the contact page real: a working contact form (Cloudflare-native, no third-party form service), the new `Armourbl@buildverified.com` email, a GitHub link, and styling that matches the site's dark ops-console design language.

## Context

- Site is a Next.js 16 static export (`output: "export"`) - no server code in the app itself.
- Hosted on Cloudflare Pages (project `buildverified`, direct upload via `wrangler pages deploy out`), serving `buildverified.com` and `www.buildverified.com`.
- Cloudflare Email Routing is **already enabled** on the buildverified.com zone: `armourbl@buildverified.com` forwards to `benarmour72@gmail.com` (verified destination). Done via API on 2026-07-01.
- Current contact page (`src/app/contact/page.tsx`) posts to a placeholder Formspree URL and shows the old UC email; no GitHub link anywhere on the site.

## Part 1 - Email (done)

Email Routing enabled on the zone (MX/SPF records added), destination `benarmour72@gmail.com` verified, rule `armourbl@buildverified.com` → Gmail active. Catch-all off. Receive-only; Gmail "Send mail as" is an optional follow-up, out of scope.

## Part 2 - Contact form backend: Cloudflare Worker

New directory `workers/contact-form/` in this repo:

- **Endpoint:** `POST /api/contact`, JSON body `{ name, email, message, website }`.
- **Routes:** `buildverified.com/api/contact*` and `www.buildverified.com/api/contact*` (Worker routes take precedence over the Pages project for those paths → same-origin POST, no CORS).
- **Email delivery:** `send_email` binding (Email Routing). MIME message built with the `mimetext` package.
  - From: `noreply@buildverified.com` (must be on-domain for the binding).
  - To: `benarmour72@gmail.com` (must be a verified Email Routing destination - forwarding-address rules don't apply to binding sends).
  - Reply-To: submitter's email, so replies from Gmail go straight to them.
  - Subject: `Contact form: <name>`.
- **Validation:** name/email/message required; email shape check; length caps (name ≤ 200, email ≤ 320, message ≤ 5000). Reject with 400 + JSON error.
- **Spam defense:** hidden honeypot field `website` - if filled, return 200 (pretend success) and drop the message. No CAPTCHA in v1; Turnstile is a later add if spam appears.
- **Responses:** JSON `{ ok: true }` on success; `{ ok: false, error }` with 400/405/500 otherwise.
- **Deploy:** one-time `wrangler deploy` from `workers/contact-form/` (wrangler config in that directory).

## Part 3 - Frontend

- `src/lib/site.ts`: `email` → `Armourbl@buildverified.com`; add `githubUrl: "https://github.com/LostInTyping"` and `githubLabel: "github.com/LostInTyping"`.
- New client component `src/components/contact-form.tsx`:
  - Controlled form, fetch POST to `/api/contact`, honeypot field included (visually hidden, `aria-hidden`, `tabIndex={-1}`).
  - States: idle → sending (button disabled, "Sending…") → success (inline "✓ Message sent - I'll get back to you soon", form resets) / error (inline message + mailto fallback link).
- `src/app/contact/page.tsx` rebuilt (stays a server component, embeds the form):
  - Eyebrow `GET IN TOUCH` in mono/uppercase with blinking terminal cursor (existing `.terminal-cursor`).
  - Availability pill: pulsing green dot (`--color-status-pass`) + "Open to QA opportunities".
  - Display-font headline (Space Grotesk) with gradient-accent word (existing `.gradient-text-brand`).
  - Two-column split (stacks on mobile): left contact rail - email, GitHub, LinkedIn, location - each with a small inline SVG icon; right column the form in a `bg-bg-card` elevated panel with border + glow-on-hover treatment, ghost-accent submit button matching `.ghost-btn` conventions.
- `src/components/footer.tsx`: add GitHub link alongside LinkedIn/Email.

## Error handling

- Worker: 405 for non-POST, 400 for validation failures, 500 (with generic message) for send failures; never echoes internals.
- Form: network/500 → inline error with mailto fallback; 400 → shows the validation message.

## Testing / verification

- `pnpm lint` and `pnpm build` stay clean (static export).
- `wrangler dev` for the Worker: happy path, each validation rejection, honeypot drop, non-POST.
- Playwright against local `next dev`: page renders, form states (success/error) work with the Worker running locally.
- After deploy: real end-to-end submit on buildverified.com → email arrives in Gmail.

## Out of scope

- Gmail "Send mail as" for outbound `@buildverified.com` mail.
- Turnstile/CAPTCHA, rate limiting.
- Forwarding one address to multiple inboxes.
