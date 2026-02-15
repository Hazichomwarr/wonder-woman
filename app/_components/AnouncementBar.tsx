// _components/AnouncementBar.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Transition from "./Transition";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setVisible(true);
    }, 3000);
    return () => window.clearTimeout(timer);
  }, []);

  // if (!visible) return null;

  return (
    <div
      className={`fixed inset-x-0 -top-4 z-999 bg-orange-600 text-white transition-all duration-300 ease-out ${visible ? "opacity-100 translate-y-4" : "opacity-0 -translate-y-full pointer-events-none"}
 `}
    >
      <div className="mx-auto flex flex-col max-w-6xl items-center gap-2 px-4 py-2 text-sm">
        {/* TEXT */}

        <Link
          href="/event/nyc-2026"
          className="flex-1 text-center font-medium cursor-pointer hover:underline"
        >
          🎉 Upcoming Event — Feb 27 • NYC → See details
        </Link>
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setVisible(false)}
          className={`cursor-pointer text-white/80 hover:text-white ${visible ? "opacity-100" : "opacity-0"}`}
        >
          ✕
        </button>
      </div>
    </div>
  );
}
