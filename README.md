# TechPro Solutions — Software Company Marketing Website

A Vietnamese-language marketing website for **TechPro Solutions**, a software company offering digital advertising, digital transformation consulting, custom software development, and website sales services.

## Key Technologies

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start (SSR/SPA hybrid) |
| Routing | TanStack Router v1 (file-based) |
| Frontend | React 19 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Icons | Lucide React |
| Language | TypeScript 5 (strict mode) |
| Forms | Netlify Forms |
| Deployment | Netlify |

## Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Home page — hero, services overview, stats, testimonials, CTA |
| `/dich-vu/quang-cao` | Digital advertising services |
| `/dich-vu/chuyen-doi-so` | Digital transformation consulting |
| `/dich-vu/giai-phap-phan-mem` | Custom software development |
| `/dich-vu/ban-website` | Website design & sales |
| `/ve-chung-toi` | About us — team, history, values |
| `/lien-he` | Contact page with Netlify Form |

## Running Locally

```bash
# Install dependencies
npm install

# Start dev server (port 3000 proxied via Netlify CLI on 8888)
npm run dev
```

> **Note:** Netlify Forms only works on actual Netlify deploys, not local dev.

## Building for Production

```bash
npm run build
```

The build output is in `dist/client` and served via Netlify's edge/SSR infrastructure.
