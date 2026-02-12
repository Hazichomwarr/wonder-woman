// _components/AnouncementBar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="relative z-60 bg-orange-600 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2 text-sm">
        {/* TEXT */}
        <Link
          href="/event/nyc-2026"
          className="flex-1 text-center font-medium cursor-pointer hover:underline"
        >
          🎉 Upcoming Event — Feb 27 • NYC → See details
          {/* CLOSE BUTTON */}
          <button
            onClick={() => setVisible(false)}
            className="ml-20 cursor-pointer text-white/80 hover:text-white"
          >
            ✕
          </button>
        </Link>
      </div>
    </div>
  );
}
