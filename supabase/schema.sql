-- Run this once in Supabase SQL editor to create the table.

create extension if not exists "pgcrypto";

create table if not exists activities (
  id uuid primary key default gen_random_uuid(),
  day_number int not null,
  date date not null,
  day_name text,
  time text,
  title text not null,
  category text,
  location text,
  notes text,
  done boolean default false,
  position int default 0,
  created_at timestamptz default now()
);

create index if not exists activities_day_idx
  on activities (day_number, position);

-- Row Level Security (optional but recommended).
-- This permissive policy assumes single-user / shared-link usage.
-- Tighten if you add auth.
alter table activities enable row level security;

drop policy if exists "Allow all" on activities;
create policy "Allow all"
  on activities for all
  using (true)
  with check (true);
