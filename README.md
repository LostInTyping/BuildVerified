This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Cloudflare Pages

This project is configured for static export (`output: "export"`) and can be deployed directly to Cloudflare Pages.

1. Create a Cloudflare API token with:
   - `Cloudflare Pages:Edit`
   - `Zone:DNS:Edit`
   - `Zone:Zone:Read`
2. Export your token:

```bash
export CLOUDFLARE_API_TOKEN="<your-token>"
```

3. Create the Pages project (one-time setup):

```bash
npx wrangler pages project create buildverified --production-branch main
```

4. Build the static site:

```bash
pnpm build
```

5. Deploy to production:

```bash
npx wrangler pages deploy out --project-name buildverified --branch main
```

6. Attach custom domains:

```bash
npx wrangler pages domain add buildverified.com --project-name buildverified
npx wrangler pages domain add www.buildverified.com --project-name buildverified
```
