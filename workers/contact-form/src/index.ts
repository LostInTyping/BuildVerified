import { EmailMessage } from "cloudflare:email";
import { createMimeMessage, Mailbox } from "mimetext";

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
    msg.setHeader("Reply-To", new Mailbox(email));
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
