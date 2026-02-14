// _components/EventPopup.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

// const STORAGE_KEY = "ww_event_popup_dismissed_v1";

export default function EventPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // const dismissed = window.localStorage.getItem(STORAGE_KEY);
    // If user previously dismissed, never open
    // if (dismissed === "1") return;

    //Delayed Popup display
    const timer = window.setTimeout(() => {
      setOpen(true);
    }, 2500);

    return () => window.clearTimeout(timer);
  }, []);

  function close() {
    // window.localStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
  }

  if (!open) return;
  return (
    <div className="fixed inset-0 z-999 flex items-end justify-center p-4 sm:items-center">
      <div className="absolute inset-0 bg-black/50" onClick={close} />

      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl">
        <p className="text-xs text-center font-semibold text-orange-700">
          UPCOMING EVENT • NYC
        </p>

        <h3 className="mt-2 text-xl text-center font-bold text-neutral-900">
          WONDER WOMAN Festival — New York (in 2 weeks)
        </h3>
        <Image
          src="/event/event01.jpeg"
          alt="Festival event brochure"
          width={110}
          height={55}
          className="object-cover mt-4 mx-auto rounded-2xl shadow-2xl"
        />
        <p className="mt-2 text-sm text-neutral-600">
          Music • Food • Trivia • Community. Join us for a special edition in
          NYC.
        </p>
        <div className="mt-5 flex flex-wrap gap-3 justify-end">
          <Link
            href="/event/nyc-2026"
            className="rounded-full bg-orange-600 px-5 py-2 text-sm font-medium text-white cursor-pointer hover:bg-orange-700"
          >
            See event details
          </Link>
          <button
            onClick={close}
            className="rounded-full border px-5 py-2 text-sm font-medium cursor-pointer hover:bg-neutral-50"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
