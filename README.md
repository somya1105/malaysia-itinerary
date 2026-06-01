# Malaysia Honeymoon Itinerary

A day-by-day itinerary site with checkboxes, inline add/remove. Next.js 14 + Supabase, deployable to Vercel.

## What you get

- 10-day Malaysia itinerary (12-21 June 2026) pre-seeded
- Checkbox per item with persistence
- Inline add & delete
- Progress bar at the top
- Categories (flight, lodging, restaurant, activity, transport, work, ferry, tour, note)
- Mobile-friendly

## Setup (one-time, ~10 min)

### 1. Create Supabase project

1. Go to https://supabase.com → New Project
2. Pick a name (e.g. `malaysia-honeymoon`), set a database password, choose region nearest you
3. Wait ~2 min for provisioning

### 2. Run the schema + seed

1. In your Supabase project: **SQL Editor** → New query
2. Paste contents of `supabase/schema.sql` → Run
3. New query → paste contents of `supabase/seed.sql` → Run
4. Verify under **Table Editor** → `activities` (should show ~80 rows)

### 3. Get your keys

✅ **Already done.** The `.env.local` file in this repo has Somya's values pre-populated:
- `NEXT_PUBLIC_SUPABASE_URL=https://thgmxwfmmcyzyxhgssax.supabase.co`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY=...` (anon key, safe for client-side)

If you ever regenerate the anon key in Supabase (Project Settings → API → Rotate), update `.env.local` AND the Vercel env vars.

### 4. Run locally (optional)

```bash
npm install
npm run dev
```

Open http://localhost:3000

### 5. Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or push to GitHub and use the Vercel dashboard import flow.

**Important:** In Vercel project settings → Environment Variables, add THREE values from `.env.local`:

```
NEXT_PUBLIC_SUPABASE_URL=https://thgmxwfmmcyzyxhgssax.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRoZ214d2ZtbWN5enl4aGdzc2F4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAzMDc2NzUsImV4cCI6MjA5NTg4MzY3NX0.bnJqK6YskNxNj8Mvy4jOSraZ9O86e8qZ-vK01Kqcfo4
NEXT_PUBLIC_EDIT_PASSCODE=malaysia2026
```

Apply to Production, Preview, and Development. Then redeploy.

## Passcode gate

The site is **read-open, write-gated**. Anyone with the URL can SEE the itinerary, but check/add/delete requires entering the passcode.

- Current passcode: `malaysia2026` (from `.env.local`)
- Click the "🔒 View-only" pill in the top-right of the site to unlock.
- Unlocked state is stored per-device via `localStorage` — enter once, never re-enter on that browser.
- Click "🔓 Unlocked" to re-lock if you hand someone the URL temporarily.

**Change the passcode:** edit `NEXT_PUBLIC_EDIT_PASSCODE` in `.env.local` (for local) AND in Vercel's env vars (for production), then redeploy.

**Security honest-talk:** the passcode is `NEXT_PUBLIC_*` so it ends up in the JavaScript bundle. Someone who downloads the JS and reads it can find the code. This is "good-enough security" to stop drive-by editors, not nation-state attackers. For real auth, add Supabase Auth (see TODO at bottom of README).

## File structure

```
itinerary-app/
├── app/
│   ├── globals.css        Tailwind base
│   ├── layout.tsx         Root layout
│   └── page.tsx           Main itinerary page
├── components/
│   ├── DayCard.tsx        Per-day collapsible card
│   ├── ActivityItem.tsx   Single row with checkbox + delete
│   └── AddActivityForm.tsx
├── lib/
│   └── supabase.ts        Client + types
├── supabase/
│   ├── schema.sql         Create table + RLS
│   └── seed.sql           80+ items, 10 days pre-populated
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
├── postcss.config.js
├── .env.local.example
└── README.md
```

## Customizing

**Change the trip title:** edit `app/page.tsx` and `app/layout.tsx`.

**Re-color:** edit `tailwind.config.ts` — `ocean`, `sunset`, `sand`, `ink` are the four colors.

**Add categories:** edit `CATEGORY_EMOJI` in `components/ActivityItem.tsx` and the `CATEGORIES` array in `components/AddActivityForm.tsx`.

**Reset the data:** in Supabase SQL editor: `truncate activities;` then re-run `seed.sql`.

## Security note

The seed uses a permissive RLS policy (`Allow all`). This is fine for a personal trip link you keep private. **If you share the URL publicly, anyone with it can edit your data.**

To lock it down: add Supabase Auth, then change the policy to `auth.uid() is not null` or row-level by user ID.

## Quick fixes

**"relation \"activities\" does not exist"** → you didn't run `schema.sql` in Supabase. Do step 2.

**Items don't save** → check that `.env.local` has the correct Supabase URL + anon key, and that you're using the `anon public` key (not `service_role`).

**Times off by 2.5 hours** → all times in seed are in MYT (Malaysia local time). Don't adjust your phone clock until you land.
