# MoveMyCar UAE — Frontend Prototype

Client presentation prototype for a professional vehicle collection and delivery platform. **Not a rental platform.** Branding is provisional.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Pages

- `/` — public homepage and booking entry
- `/booking` — multi-step booking demonstration (localStorage only)
- `/tracking` — simulated customer tracking (use `MMC-DEMO-001`)
- `/dashboard` — admin/dispatch dashboard with editable demo records
- `/dealership` — dealership dashboard
- `/driver` — mobile-first driver workflow, inspection photo selection, and simulated handover

## Important

- No backend, real accounts, real payments, live GPS, or driver verification.
- Demo data is fabricated for interface demonstration and labeled accordingly.
- Photos are loaded from Unsplash URLs and require internet access. Verify image licensing and replace with approved assets before production.
- Install dependencies before building. For production, implement secure authentication, validation, persistence, maps, payments, driver checks, and UAE legal/compliance requirements.
