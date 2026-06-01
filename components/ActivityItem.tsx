"use client";

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

type Props = {
  activity: Activity;
  unlocked: boolean;
  onToggle: (id: string, current: boolean) => void;
  onDelete: (id: string) => void;
};

export default function ActivityItem({
  activity,
  unlocked,
  onToggle,
  onDelete,
}: Props) {
  const emoji =
    (activity.category && CATEGORY_EMOJI[activity.category]) || "📍";

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
        <button
          onClick={() => {
            if (confirm(`Remove "${activity.title}"?`)) onDelete(activity.id);
          }}
          className="opacity-0 group-hover:opacity-100 transition-opacity text-ink/30 hover:text-sunset px-2 py-1 text-sm"
          aria-label="Delete"
        >
          ✕
        </button>
      )}
    </li>
  );
}
