export const metadata = {
  title: "Contact",
  description: "Get in touch for QA engineering opportunities.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-bold">Get in Touch</h1>
      <p className="mt-4 text-text-secondary">
        Interested in working together? Reach out directly or use the form
        below.
      </p>

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {/* Direct contact */}
        <div className="space-y-6">
          <div>
            <h2 className="text-sm font-medium uppercase tracking-widest text-text-muted">
              Email
            </h2>
            <a
              href="mailto:armourbl@mail.uc.edu"
              className="mt-2 block text-accent transition-colors hover:text-accent-hover"
            >
              armourbl@mail.uc.edu
            </a>
          </div>
          <div>
            <h2 className="text-sm font-medium uppercase tracking-widest text-text-muted">
              LinkedIn
            </h2>
            <a
              href="https://linkedin.com/in/ben-armour"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 block text-accent transition-colors hover:text-accent-hover"
            >
              linkedin.com/in/ben-armour
            </a>
          </div>
          <div>
            <h2 className="text-sm font-medium uppercase tracking-widest text-text-muted">
              Location
            </h2>
            <p className="mt-2 text-text-secondary">
              Mason, OH — open to remote and hybrid
            </p>
          </div>
        </div>

        {/* Contact form */}
        <form
          action="https://formspree.io/f/YOUR_FORM_ID"
          method="POST"
          className="space-y-4"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-text-secondary"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 w-full rounded-lg border border-border bg-bg-card px-4 py-2 text-text-primary placeholder-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="Your name"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-text-secondary"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 w-full rounded-lg border border-border bg-bg-card px-4 py-2 text-text-primary placeholder-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="you@email.com"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-text-secondary"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              className="mt-1 w-full rounded-lg border border-border bg-bg-card px-4 py-2 text-text-primary placeholder-text-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
              placeholder="What can I help with?"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-lg bg-accent px-6 py-3 text-sm font-medium text-bg-primary transition-colors hover:bg-accent-hover"
          >
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
