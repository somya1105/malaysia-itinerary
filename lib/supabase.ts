import { createClient, SupabaseClient } from "@supabase/supabase-js";

// Defensive: fall back to safe placeholders during build / SSR
// if env vars are not yet set. Real values come from the browser
// at runtime once the user provides env vars in Vercel.
const url =
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://placeholder.supabase.co";
const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "placeholder-key";

export const supabase: SupabaseClient = createClient(url, key);

export const isConfigured =
  !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
  !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export type Activity = {
  id: string;
  day_number: number;
  date: string;
  day_name: string | null;
  time: string | null;
  title: string;
  category: string | null;
  location: string | null;
  notes: string | null;
  done: boolean;
  position: number;
  created_at: string;
};
