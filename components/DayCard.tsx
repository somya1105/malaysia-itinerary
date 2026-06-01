"use client";

import { useState } from "react";
import type { Activity } from "@/lib/supabase";
import ActivityItem from "./ActivityItem";
import AddActivityForm from "./AddActivityForm";

type Props = {
  dayNumber: number;
  activities: Activity[];
  onToggle: (id: string, current: boolean) => void;
  onDelete: (id: string) => void;
  onAdd: (payload: Partial<Activity>) => void;
};

export default function DayCard({
  dayNumber,
  activities,
  onToggle,
  onDelete,
  onAdd,
}: Props) {
  const [open, setOpen] = useState(true);
  const [adding, setAdding] = useState(false);

  const sample = activities[0];
  const date = sample?.date;
  const dayName = sample?.day_name;
  const done = activities.filter((a) => a.done).length;
  const total = activities.length;

  return (
    <section className="bg-white rounded-2xl shadow-sm border border-ink/5 overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-5 py-4 flex items-center justify-between hover:bg-ink/[0.02] transition-colors"
      >
        <div className="text-left">
          <p className="text-xs font-semibold uppercase tracking-wider text-ocean">
            Day {dayNumber}
          </p>
          <h2 className="text-lg font-semibold mt-0.5">
            {dayName ? `${dayName} · ` : ""}
            {date ? formatDate(date) : ""}
          </h2>
        </div>
        <div className="flex items-center gap-3 text-sm text-ink/60">
          <span className="tabular-nums">
            {done}/{total}
          </span>
          <span className={`transition-transform ${open ? "rotate-180" : ""}`}>
            ▾
          </span>
        </div>
      </button>

      {open && (
        <div className="px-2 sm:px-5 pb-4">
          <ul className="space-y-1">
            {activities.map((a) => (
              <ActivityItem
                key={a.id}
                activity={a}
                onToggle={onToggle}
                onDelete={onDelete}
              />
            ))}
          </ul>

          <div className="mt-3 px-2">
            {adding ? (
              <AddActivityForm
                dayNumber={dayNumber}
                date={date ?? ""}
                dayName={dayName ?? ""}
                position={total}
                onSubmit={(p) => {
                  onAdd(p);
                  setAdding(false);
                }}
                onCancel={() => setAdding(false)}
              />
            ) : (
              <button
                onClick={() => setAdding(true)}
                className="text-sm text-ocean font-medium hover:underline"
              >
                + Add item
              </button>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

function formatDate(iso: string) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "short",
  });
}
