"use client";

import { useState } from "react";
import type { Activity } from "@/lib/supabase";

const CATEGORY_EMOJI: Record<string, string> = {
  flight: "✈️",
  lodging: "🛏️",
  restaurant: "🍽️",
  activity: "📍",
  transport: "🚗",
  tour: "🚌",
  work: "💻",
  ferry: "⛴️",
  note: "📝",
};

const CATEGORIES = [
  "activity",
  "restaurant",
  "transport",
  "flight",
  "lodging",
  "tour",
  "work",
  "ferry",
  "note",
];

type Props = {
  activity: Activity;
  unlocked: boolean;
  onToggle: (id: string, current: boolean) => void;
  onDelete: (id: string) => void;
  onUpdate: (id: string, payload: Partial<Activity>) => void;
};

export default function ActivityItem({
  activity,
  unlocked,
  onToggle,
  onDelete,
  onUpdate,
}: Props) {
  const [editing, setEditing] = useState(false);
  const emoji =
    (activity.category && CATEGORY_EMOJI[activity.category]) || "📍";

  // ---- EDIT MODE ----
  if (editing) {
    return (
      <li className="py-2 px-2 bg-ocean/5 rounded-lg">
        <EditForm
          activity={activity}
          onSave={(payload) => {
            onUpdate(activity.id, payload);
            setEditing(false);
          }}
          onCancel={() => setEditing(false)}
        />
      </li>
    );
  }

  // ---- READ-ONLY / TOGGLE MODE ----
  return (
    <li className="group flex items-start gap-3 py-2 px-2 rounded-lg hover:bg-ink/[0.02]">
      <button
        onClick={() => onToggle(activity.id, activity.done)}
        className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors ${
          activity.done
            ? "bg-ocean border-ocean text-white"
            : "border-ink/30 hover:border-ocean"
        }`}
        aria-label={activity.done ? "Mark not done" : "Mark done"}
      >
        {activity.done && (
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="w-3 h-3"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        )}
      </button>

      <div className="flex-1 min-w-0">
        <div className="flex items-baseline gap-2 flex-wrap">
          {activity.time && (
            <span className="text-xs font-mono tabular-nums text-ink/50 flex-shrink-0">
              {activity.time}
            </span>
          )}
          <span className="text-base">{emoji}</span>
          <span
            className={`font-medium ${
              activity.done ? "line-through text-ink/40" : ""
            }`}
          >
            {activity.title}
          </span>
        </div>
        {activity.location && (
          <p className="text-xs text-ink/50 mt-0.5 ml-1">{activity.location}</p>
        )}
        {activity.notes && (
          <p className="text-xs text-ink/60 mt-1 ml-1 italic">{activity.notes}</p>
        )}
      </div>

      {unlocked && (
        <div className="flex items-center gap-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => setEditing(true)}
            className="text-ink/40 hover:text-ocean px-2 py-1 text-sm"
            aria-label="Edit"
            title="Edit"
          >
            ✎
          </button>
          <button
            onClick={() => {
              if (confirm(`Remove "${activity.title}"?`)) onDelete(activity.id);
            }}
            className="text-ink/30 hover:text-sunset px-2 py-1 text-sm"
            aria-label="Delete"
            title="Delete"
          >
            ✕
          </button>
        </div>
      )}
    </li>
  );
}

// ---- Edit form (inline) ----
function EditForm({
  activity,
  onSave,
  onCancel,
}: {
  activity: Activity;
  onSave: (payload: Partial<Activity>) => void;
  onCancel: () => void;
}) {
  const [title, setTitle] = useState(activity.title);
  const [time, setTime] = useState(activity.time ?? "");
  const [category, setCategory] = useState(activity.category ?? "activity");
  const [location, setLocation] = useState(activity.location ?? "");
  const [notes, setNotes] = useState(activity.notes ?? "");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    onSave({
      title: title.trim(),
      time: time.trim() || null,
      category,
      location: location.trim() || null,
      notes: notes.trim() || null,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <input
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="What's the plan?"
        className="w-full px-3 py-2 rounded border border-ink/10 bg-white text-sm"
      />
      <div className="flex gap-2">
        <input
          value={time}
          onChange={(e) => setTime(e.target.value)}
          placeholder="Time (optional)"
          className="flex-1 px-3 py-2 rounded border border-ink/10 bg-white text-sm"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="px-3 py-2 rounded border border-ink/10 bg-white text-sm"
        >
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
      <input
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        placeholder="Location"
        className="w-full px-3 py-2 rounded border border-ink/10 bg-white text-sm"
      />
      <input
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        placeholder="Notes"
        className="w-full px-3 py-2 rounded border border-ink/10 bg-white text-sm"
      />
      <div className="flex gap-2 justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="px-3 py-1.5 text-sm text-ink/60 hover:text-ink"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={!title.trim()}
          className="px-4 py-1.5 text-sm bg-ocean text-white rounded font-medium disabled:opacity-40"
        >
          Save
        </button>
      </div>
    </form>
  );
}
