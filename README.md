# BuildVerified.com

Personal portfolio site for **Ben Armour**, Software QA Engineer. Showcases enterprise QA experience, project deep-dives, and technical capabilities.

**Live:** [buildverified.com](https://buildverified.com)

## Tech Stack

- **Framework:** Next.js 16 (App Router, static generation)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4 (custom dark theme)
- **Content:** MDX with frontmatter (gray-matter + next-mdx-remote)
- **Animations:** Framer Motion
- **Package Manager:** pnpm
- **CI:** Claude Code GitHub Actions (auto PR review + interactive @claude)

## Project Structure

```
src/
  app/              Route pages (About, Capabilities, Portfolio, Experience, Contact)
  components/       React components (hero, navigation, cards)
  content/          MDX content files
    portfolio/      Project deep-dive writeups
    experience/     Career timeline entries
  lib/              Data utilities (portfolio.ts, experience.ts)
public/             Static assets
```

## Local Development

```bash
pnpm install
pnpm dev
```

Runs at [localhost:3000](http://localhost:3000).

```bash
pnpm build       # Production build
pnpm lint        # ESLint
pnpm exec tsc --noEmit  # Type check
```

## Content

Portfolio items and experience entries are MDX files in `src/content/`. Add a new `.mdx` file with the correct frontmatter and it's picked up automatically at build time.

## License

MIT
