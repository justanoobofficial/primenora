# Prime Nora Global Services Limited

Premium, modern e-commerce business website built with Next.js App Router, Tailwind CSS, Framer Motion, and a Firebase-ready product layer.

## Stack

- Next.js App Router
- React
- Tailwind CSS
- Framer Motion
- Firebase-ready catalog integration

## Run Locally

1. Install dependencies:

```bash
npm install
```

2. Copy the environment template:

```bash
cp .env.example .env.local
```

3. Start development:

```bash
npm run dev
```

## Deploy On Vercel

1. Push the project to GitHub.
2. Import the repository into Vercel.
3. Confirm the framework is detected as `Next.js`.
4. Add the environment variables from `.env.example` in Vercel Project Settings.
5. Deploy.

Production checklist:

- Use Node.js 20 or newer
- Add all Firebase environment variables
- Add your real WhatsApp number in international format
- Make sure Firestore has a `products` collection
- Make sure Firebase Storage image URLs are public if you use them on product cards

This repo already includes:

- `vercel.json` for clean Vercel project detection
- Next.js App Router structure
- remote image support for Unsplash and Firebase Storage
- server-friendly product fetching with fallback catalog data
- SEO pages, sitemap, and robots setup
- baseline security headers for deployment hardening

## Security Notes

- Keep real secrets only in Vercel Environment Variables, never in source code.
- This project now prefers server-only Firebase env vars such as `FIREBASE_API_KEY`.
- `NEXT_PUBLIC_WHATSAPP_NUMBER` is intentionally public because it is used in customer-facing chat links.
- If you use Firestore in production, configure proper Firebase Security Rules. Frontend code alone does not protect your database.
- Do not store admin credentials, service account JSON, private API keys, or payment secrets in `NEXT_PUBLIC_*` variables.

## Firebase Product Setup

The site falls back to seeded demo products until Firebase environment variables are added.

Required environment variables:

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`
- `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`

Firestore collection:

- `products`

Recommended product document shape:

```json
{
  "name": "Premium Long Grain Rice",
  "price": 68500,
  "category": "Foodstuff",
  "description": "Clean, stone-free long grain rice ideal for homes, events, and retail supply.",
  "image": "https://your-storage-image-url",
  "featured": true,
  "createdAt": "2026-04-01"
}
```

Recommended categories:

- `Foodstuff`
- `Footwear`
- `Household Items`
- `Fashion`
- `Coming Soon`
