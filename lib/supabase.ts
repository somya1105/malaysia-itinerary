import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

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
