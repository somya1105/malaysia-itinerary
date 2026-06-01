"use client";

import { useState } from "react";

type Props = {
  onUnlock: (passcode: string) => boolean;
  onCancel: () => void;
};

export default function PasscodeGate({ onUnlock, onCancel }: Props) {
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!onUnlock(passcode)) setError(true);
  }

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50"
      onClick={onCancel}
    >
      <form
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-2xl"
      >
        <h2 className="text-lg font-bold mb-1">🔒 Enter passcode</h2>
        <p className="text-sm text-ink/60 mb-4">
          Read is open. Enter the passcode to unlock check / add / delete on this device.
        </p>
        <input
          autoFocus
          type="password"
          inputMode="text"
          value={passcode}
          onChange={(e) => {
            setPasscode(e.target.value);
            setError(false);
          }}
          placeholder="Passcode"
          className="w-full px-3 py-2 rounded border border-ink/20 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-ocean/30"
        />
        {error && (
          <p className="text-xs text-sunset mt-2">Wrong passcode. Try again.</p>
        )}
        <div className="flex gap-2 justify-end mt-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-3 py-1.5 text-sm text-ink/60 hover:text-ink"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={!passcode}
            className="px-4 py-1.5 text-sm bg-ocean text-white rounded font-medium disabled:opacity-40"
          >
            Unlock
          </button>
        </div>
      </form>
    </div>
  );
}
