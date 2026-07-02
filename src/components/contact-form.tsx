"use client";

import { useState } from "react";
import { ReturnIcon } from "@/components/icons";
import { TerminalChrome } from "@/components/terminal-chrome";
import { site } from "@/lib/site";

type Status = "idle" | "sending" | "success" | "error";

const inputClasses =
  "mt-1.5 w-full rounded-sm border border-border bg-bg-primary px-3.5 py-2.5 text-sm text-text-primary placeholder-text-muted transition-colors duration-200 hover:border-accent-hover/30 focus:border-accent/70 focus:outline-none";

const missingClasses =
  "border-status-error/50 placeholder:text-status-error";

const labelClasses =
  "block font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted";

const barStatus: Record<Exclude<Status, "idle">, { text: string; tone: string }> = {
  sending: { text: "sending…", tone: "text-status-retry" },
  success: { text: "delivered", tone: "text-status-pass" },
  error: { text: "error", tone: "text-status-error" },
};

const fields = ["name", "email", "message"] as const;
type Field = (typeof fields)[number];

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [missing, setMissing] = useState<Partial<Record<Field, boolean>>>({});

  function fieldProps(field: Field, placeholder: string, extra = "") {
    const isMissing = missing[field];
    return {
      "aria-invalid": isMissing || undefined,
      className: `${inputClasses} ${extra} ${isMissing ? missingClasses : ""}`,
      placeholder: isMissing
        ? `${field.charAt(0).toUpperCase()}${field.slice(1)} required`
        : placeholder,
    };
  }

  function handleInput(event: React.FormEvent<HTMLFormElement>) {
    const field = (event.target as HTMLInputElement).name as Field;
    setMissing((current) =>
      current[field] ? { ...current, [field]: false } : current
    );
    if (status === "error" || status === "success") {
      setStatus("idle");
      setError(null);
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<
      string,
      string
    >;

    const empty = {
      name: !data.name.trim(),
      email: !data.email.trim(),
      message: !data.message.trim(),
    };
    if (empty.name || empty.email || empty.message) {
      setMissing(empty);
      const first = fields.find((field) => empty[field]);
      if (first) {
        (form.elements.namedItem(first) as HTMLElement | null)?.focus();
      }
      return;
    }
    setMissing({});

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
      setError("Network error.");
      setStatus("error");
    }
  }

  const hasMissing = Boolean(missing.name || missing.email || missing.message);

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-sm border border-border bg-bg-card">
      <TerminalChrome
        title="armourbl@buildverified:~/contact"
        right={
          status !== "idle" && (
            <span
              className={`ml-auto font-mono text-[10px] ${barStatus[status].tone}`}
            >
              ● {barStatus[status].text}
            </span>
          )
        }
      />
      <form
        onSubmit={handleSubmit}
        onInput={handleInput}
        noValidate
        className="flex flex-1 flex-col p-6 pb-3 sm:p-8 sm:pb-3.5"
      >
      <div className="grid gap-4 sm:grid-cols-2">
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
            {...fieldProps("name", "Your name")}
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
            {...fieldProps("email", "you@email.com")}
          />
        </div>
      </div>
      <div className="mt-4 flex flex-1 flex-col">
        <label htmlFor="message" className={labelClasses}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={7}
          required
          maxLength={5000}
          onKeyDown={(event) => {
            if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) {
              event.preventDefault();
              event.currentTarget.form?.requestSubmit();
            }
          }}
          {...fieldProps("message", "What can I help with?", "flex-1 resize-none")}
        />
      </div>

      <div className="mt-3 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="min-w-0">
          {(status === "idle" || status === "sending") && !hasMissing && (
            <p className="font-mono text-[11px] text-text-muted">
              usually reply within 1 business day
            </p>
          )}
          <div aria-live="polite" aria-atomic="true">
            {hasMissing && (
              <p className="font-mono text-[12px] text-status-error">
                ✗ required fields missing
              </p>
            )}
            {status === "success" && (
              <p className="font-mono text-[12px] text-status-pass">
                ✓ message delivered → {site.email}
              </p>
            )}
            {status === "error" && (
              <p className="font-mono text-[12px] text-status-error">
                ✗ {error}{" "}
                <a
                  href={`mailto:${site.email}`}
                  className="underline hover:text-text-primary"
                >
                  email me instead
                </a>
              </p>
            )}
          </div>
        </div>
        <button
          type="submit"
          disabled={status === "sending"}
          title="Ctrl/Cmd+Enter to send"
          className="ghost-btn ghost-btn-accent w-full disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto sm:shrink-0 sm:px-10"
        >
          {status === "sending" ? (
            "Sending…"
          ) : (
            <>
              Send Message
              <ReturnIcon className="h-3.5 w-3.5" />
            </>
          )}
        </button>
      </div>

      {/* Honeypot: hidden from humans, tempting to bots */}
      <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor="website">Website</label>
        <input type="text" id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      </form>
    </div>
  );
}
