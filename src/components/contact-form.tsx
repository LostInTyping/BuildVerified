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
        signal: AbortSignal.timeout(15000),
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
      setError("Network error. Please try again or email me directly.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
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

      <div aria-live="polite" aria-atomic="true">
        {status === "success" && (
          <p className="text-sm text-status-pass">
            ✓ Message sent! I&apos;ll get back to you soon.
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

      {/* Honeypot: hidden from humans, tempting to bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
    </form>
  );
}
