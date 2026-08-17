# Castle Wellness — Public Website

Next.js public website for Castle Wellness spa. Pulls Services, Packages, and Gallery data live from the backend — whatever you add/edit in the admin panel shows up here automatically.

## Setup

1. Make sure the backend (`castle-wellness-backend`) is running on `http://localhost:5000`
2. `npm install --legacy-peer-deps`
3. Copy `.env.local.example` to `.env.local`
4. `npm run dev`
5. Open `http://localhost:3000`

## Pages

- `/` — Home (hero, about teaser, popular services, packages, location CTA)
- `/about` — About + Location (map + address + phone)
- `/services` — Full services & pricing, each with a "Book This Therapy" WhatsApp link
- `/packages` — Full package list
- `/gallery` — Gallery grid, pulled from admin-uploaded images

## Notes

- Runs on port **3000** — backend on 5000, admin panel on 3001, all three run together.
- Every "Book"/"Enquire" button opens WhatsApp (`wa.me/917389569421`) with a pre-filled message.
- If Services/Packages/Gallery are empty, each page shows a friendly placeholder message instead of breaking — so the site is safe to launch even before all content is added.
- Design tokens (colors, fonts) live in `styles/globals.css` — shared across every page via `Header`/`Footer` components.
