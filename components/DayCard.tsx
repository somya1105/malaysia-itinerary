"use client";

import { useState } from "react";
import type { Activity } from "@/lib/supabase";
import { DAY_IMAGES } from "@/lib/dayImages";
import ActivityItem from "./ActivityItem";
import AddActivityForm from "./AddActivityForm";

type Props = {
  dayNumber: number;
  activities: Activity[];
  unlocked: boolean;
  onToggle: (id: string, current: boolean) => void;
  onDelete: (id: string) => void;
  onAdd: (payload: Partial<Activity>) => void;
  onUpdate: (id: string, payload: Partial<Activity>) => void;
};

export default function DayCard({
  dayNumber,
  activities,
  unlocked,
  onToggle,
  onDelete,
  onAdd,
  onUpdate,
}: Props) {
  const [open, setOpen] = useState(true);
  const [adding, setAdding] = useState(false);
  const [imgError, setImgError] = useState(false);

  const sample = activities[0];
  const date = sample?.date;
  const dayName = sample?.day_name;
  const done = activities.filter((a) => a.done).length;
  const total = activities.length;

  const image = DAY_IMAGES[dayNumber];

  return (
    <section className="bg-white rounded-2xl shadow-sm border border-ink/5 overflow-hidden">
      {/* Image banner */}
      {image && (
        <div
          className={`relative w-full h-40 sm:h-48 overflow-hidden bg-gradient-to-br ${image.gradient}`}
        >
          {!imgError && (
            <img
              src={image.src}
              alt={image.alt}
              className="absolute inset-0 w-full h-full object-cover"
              onError={() => setImgError(true)}
              loading="lazy"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/15 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <p className="text-xs font-semibold uppercase tracking-widest opacity-90">
              Day {dayNumber}
            </p>
            <h2 className="text-xl sm:text-2xl font-bold leading-tight mt-1 drop-shadow-sm">
              {dayName ? `${dayName} · ` : ""}
              {date ? formatDate(date) : ""}
            </h2>
          </div>
        </div>
      )}

      {/* Collapse header (only shown if no image) */}
      {!image && (
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
        </button>
      )}

      {/* Status row + collapse toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full px-5 py-3 flex items-center justify-between hover:bg-ink/[0.02] transition-colors border-b border-ink/5"
      >
        <span className="text-sm text-ink/60">
          <span className="tabular-nums font-medium">
            {done}/{total}
          </span>{" "}
          completed
        </span>
        <span
          className={`text-ink/60 transition-transform ${open ? "rotate-180" : ""}`}
        >
          ▾
        </span>
      </button>

      {open && (
        <div className="px-2 sm:px-5 pb-4 pt-2">
          <ul className="space-y-1">
            {activities.map((a) => (
              <ActivityItem
                key={a.id}
                activity={a}
                unlocked={unlocked}
                onToggle={onToggle}
                onDelete={onDelete}
                onUpdate={onUpdate}
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
