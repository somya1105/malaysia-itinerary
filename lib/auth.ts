"use client";

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "itinerary-unlocked";
const PASSCODE = process.env.NEXT_PUBLIC_EDIT_PASSCODE ?? "";

export function useEditLock() {
  const [unlocked, setUnlocked] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setUnlocked(localStorage.getItem(STORAGE_KEY) === "yes");
    setHydrated(true);
  }, []);

  const unlock = useCallback((input: string) => {
    if (PASSCODE && input === PASSCODE) {
      localStorage.setItem(STORAGE_KEY, "yes");
      setUnlocked(true);
      return true;
    }
    return false;
  }, []);

  const lock = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setUnlocked(false);
  }, []);

  return { unlocked, hydrated, unlock, lock };
}
