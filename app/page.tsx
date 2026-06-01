"use client";

import { useEffect, useState } from "react";
import { supabase, type Activity } from "@/lib/supabase";
import DayCard from "@/components/DayCard";

export default function Home() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    void fetchActivities();
  }, []);

  async function fetchActivities() {
    setLoading(true);
    const { data, error } = await supabase
      .from("activities")
      .select("*")
      .order("day_number", { ascending: true })
      .order("position", { ascending: true });
    if (error) console.error(error);
    setActivities(data ?? []);
    setLoading(false);
  }

  async function toggleDone(id: string, current: boolean) {
    setActivities((prev) =>
      prev.map((a) => (a.id === id ? { ...a, done: !current } : a))
    );
    await supabase.from("activities").update({ done: !current }).eq("id", id);
  }

  async function deleteActivity(id: string) {
    setActivities((prev) => prev.filter((a) => a.id !== id));
    await supabase.from("activities").delete().eq("id", id);
  }

  async function addActivity(payload: Partial<Activity>) {
    const { data, error } = await supabase
      .from("activities")
      .insert([payload])
      .select()
      .single();
    if (error) {
      console.error(error);
      return;
    }
    if (data) setActivities((prev) => [...prev, data]);
  }

  // Group activities by day
  const days = activities.reduce<Record<number, Activity[]>>((acc, a) => {
    (acc[a.day_number] ||= []).push(a);
    return acc;
  }, {});

  const sortedDayNumbers = Object.keys(days)
    .map(Number)
    .sort((a, b) => a - b);

  const totalDone = activities.filter((a) => a.done).length;
  const totalAll = activities.length;
  const pct = totalAll === 0 ? 0 : Math.round((totalDone / totalAll) * 100);

  return (
    <main className="max-w-3xl mx-auto px-4 py-8 sm:py-12">
      <header className="mb-8">
        <p className="text-xs uppercase tracking-widest text-ocean font-semibold">
          12 – 21 June 2026 · 10 days
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold mt-1">
          Malaysia Honeymoon
        </h1>
        <p className="text-sm text-ink/60 mt-1">
          KL · Genting · Perhentian Islands
        </p>
        <div className="mt-4 flex items-center gap-3">
          <div className="flex-1 h-2 bg-ink/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-ocean transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
          <span className="text-xs font-medium text-ink/70 tabular-nums">
            {totalDone}/{totalAll} ({pct}%)
          </span>
        </div>
      </header>

      {loading && (
        <div className="text-center py-12 text-ink/40">Loading itinerary…</div>
      )}

      {!loading && sortedDayNumbers.length === 0 && (
        <div className="text-center py-12 text-ink/60 border border-dashed rounded-lg">
          <p>No items yet.</p>
          <p className="text-sm mt-2">
            Run the seed SQL from <code>supabase/seed.sql</code> to populate.
          </p>
        </div>
      )}

      <div className="space-y-6">
        {sortedDayNumbers.map((dayNum) => (
          <DayCard
            key={dayNum}
            dayNumber={dayNum}
            activities={days[dayNum]}
            onToggle={toggleDone}
            onDelete={deleteActivity}
            onAdd={addActivity}
          />
        ))}
      </div>

      <footer className="mt-12 pt-6 border-t border-ink/10 text-xs text-ink/40 text-center">
        Built with Next.js + Supabase · Hosted on Vercel
      </footer>
    </main>
  );
}
