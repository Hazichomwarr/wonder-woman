// _components/Transition.tsx

"use client";

import React, { useEffect, useState } from "react";

type Props = { show: boolean; children: React.ReactNode };

export default function Transition({ show, children }: Props) {
  const [mounted, setMounted] = useState(show);

  //Mount immediately when `show` become `true`
  useEffect(() => {
    setMounted(true);
  }, [show]);

  //   //Unmount after exit animation
  //   function handleTransitionEnd() {
  //     if (!show) setMounted(false);
  //   }

  //   if (!mounted) return null;

  return (
    <div
      //   onTransitionEnd={handleTransitionEnd}
      className={`transition-all duration-300 ease-out ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
    >
      {children}
    </div>
  );
}
