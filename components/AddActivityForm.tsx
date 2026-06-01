"use client";

import { useState } from "react";
import type { Activity } from "@/lib/supabase";

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
  dayNumber: number;
  date: string;
  dayName: string;
  position: number;
  onSubmit: (payload: Partial<Activity>) => void;
  onCancel: () => void;
};

export default function AddActivityForm({
  dayNumber,
  date,
  dayName,
  position,
  onSubmit,
  onCancel,
}: Props) {
  const [title, setTitle] = useState("");
  const [time, setTime] = useState("");
  const [category, setCategory] = useState("activity");
  const [location, setLocation] = useState("");
  const [notes, setNotes] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit({
      day_number: dayNumber,
      date,
      day_name: dayName,
      time: time || null,
      title: title.trim(),
      category,
      location: location.trim() || null,
      notes: notes.trim() || null,
      done: false,
      position,
    });
    setTitle("");
    setTime("");
    setLocation("");
    setNotes("");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-2 p-3 bg-ink/[0.03] rounded-lg space-y-2"
    >
      <input
        autoFocus
        placeholder="What's the plan?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-3 py-2 rounded border border-ink/10 bg-white text-sm"
      />
      <div className="flex gap-2">
        <input
          placeholder="Time (optional)"
          value={time}
          onChange={(e) => setTime(e.target.value)}
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
        placeholder="Location (optional)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="w-full px-3 py-2 rounded border border-ink/10 bg-white text-sm"
      />
      <input
        placeholder="Notes (optional)"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
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
          Add
        </button>
      </div>
    </form>
  );
}
