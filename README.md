# Malik Group

Marketing site for Sanjeev Malik, Broker Associate with eXp Realty LLC, served at [sanjeevmalik.com](https://sanjeevmalik.com).

Next.js (App Router) and Tailwind CSS. Pages are static. The only server route is the lead form, which needs `BOLDTRAIL_API_KEY` at runtime. There is no database.

## Scripts

```bash
npm install
npm run dev
npm run lint
npm run build
```

## Lead form

The forms on `/contact`, `/sell`, and `/indian-realtor-orlando` post to `POST /api/lead` (Node.js runtime). The route checks the name, email, phone, message, buyer/seller choice, source page, and a hidden honeypot. It then creates a contact in BoldTrail (kvCORE Public API v2):

- `POST https://api.kvcore.com/v2/public/contact`
- Header `Authorization: Bearer ${BOLDTRAIL_API_KEY}`
- `Content-Type` and `Accept` are `application/json`
- Fields: `first_name`, `last_name`, `email`, `cell_phone_1` (10-digit number), `deal_type` (`buyer`, `seller`, or `buyer,seller`), `source` (`sanjeevmalik.com website`), and `capture_method` (`Website Lead Capture`)

The visitor’s message is added with `PUT https://api.kvcore.com/v2/public/contact/{id}/action/note` (`title` and `details`). The live API allows GET and PUT on that path, not POST. A new contact sometimes rejects a note for a moment, so the route retries briefly.

Copy `.env.example` to `.env.local` for local runs, and set `BOLDTRAIL_API_KEY` in the Vercel project. The key is read only on the server. If it is missing, or BoldTrail does not accept the contact, the visitor sees a short error and the phone number and email.

## Redirects

Old WordPress paths are redirected in `next.config.ts`, including with a trailing slash (Next.js normalizes the slash, then the rule matches):

| From | To |
| --- | --- |
| `/google-review` | `/reviews` |
| `/zillow-review` | Zillow team profile |
| `/neighborhoods` and nested paths | `/communities` |
| `/property-search` | https://sanjeevmalik.exprealty.com/ |
| `/service-areas` | `/communities` |

`/about` is unchanged.

## Notes

Search Homes links open https://sanjeevmalik.exprealty.com/. Home value links open https://sanjeevmalik.exprealty.com/seller/valuation/. A direct Google Business Profile URL was not in the source facts, so Google reviews point at a search and `/google-review` lands on `/reviews`. No street address is published. `public/logo-full.jpg` and `public/logo-icon.jpg` are the original art. The header, footer, favicon, and apple icon use tight crops of those same files (`logo-full-trim.png`, `logo-icon-trim.png`) so the mark is not lost in the white canvas.
