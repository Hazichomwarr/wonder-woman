// _components/EventPopup.tsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Transition from "./Transition";

const STORAGE_KEY = "ww_event_popup_dismissed_v1";

export default function EventPopup() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dismissed = window.localStorage.getItem(STORAGE_KEY);
    // If user previously dismissed, never open
    if (dismissed === "1") return;

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
  function eventSeen() {
    window.localStorage.setItem(STORAGE_KEY, "1");
    setOpen(false);
    router.push("/event/nyc-2026");
  }

  //Event Date
  const now = Date.now(); //current timeStamp in ms
  const currentYear = new Date().getFullYear(); //Dynamic current year;

  //Define Feb 27 of the same year (month is 1 for February)
  const targetDate = new Date(currentYear, 1, 27).getTime();

  //Calculate difference in ms
  const diffInMs = targetDate - now;

  //Convert to days(24h -> 60mns -> 60s -> 1000ms)
  const diffIndays = Math.ceil(diffInMs / (24 * 60 * 60 * 1000));
  const eventDate = diffIndays + " days.";

  return (
    <div
      className={`fixed inset-0 z-999 grid place-items-center p-4 transition-opacity duration-300 ${
        open ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      {/* overlay */}
      <button
        aria-label="Close"
        onClick={close}
        className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* modal */}
      <div
        className={`relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl transition-all duration-300 ease-out ${
          open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        <p className="text-xs text-center font-semibold text-orange-700">
          UPCOMING EVENT • NYC
        </p>

        <h3 className="mt-2 text-xl text-center font-bold text-neutral-900">
          WONDER WOMAN Festival — New York (in {eventDate})
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
          <button
            onClick={eventSeen}
            className="rounded-full bg-orange-600 px-5 py-2 text-sm font-medium text-white cursor-pointer hover:bg-orange-700"
          >
            See event details
          </button>
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
