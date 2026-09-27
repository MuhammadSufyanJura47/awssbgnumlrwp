# AWS Student Builder Group — NUML Rawalpindi

Frontend website for the AWS Student Builder Group at NUML Rawalpindi Campus. Built with Next.js, TypeScript, and Tailwind CSS. Ready for Vercel.

## Getting started

```bash
npm install
cp .env.example .env.local
npm run dev
```

Set `NEXT_PUBLIC_FORMSPREE_ENDPOINT` to your Formspree form URL, for example `https://formspree.io/f/xxxxxxxx`. The production SEO URL defaults to `https://awssbgnumlrwp.vercel.app`; set `NEXT_PUBLIC_SITE_URL` only when deploying the site on a different canonical domain.

## Update content

Editable content lives in `src/data/`:

- `site.ts` — name, navigation, social links, contact details
- `team.ts` — core team members
- `events.ts` — event cards and detail pages

### Team photos

Place files in `public/images/team/` using the paths already listed in `team.ts` (`lead.jpg`, `vice-lead.jpg`, and so on). If a file is missing, a placeholder is shown automatically.

### Events

Add an object to the `events` array in `src/data/events.ts`, plus posters and gallery images under `public/images/events/`. The `/events/[slug]` route, sitemap, and cards update from that data. Leave the array empty to keep the professional empty state.

### Logo

Use the official group logo at `public/images/logo/logo.svg`. The same asset is used in the navbar, footer, favicon, and social preview metadata.

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint
