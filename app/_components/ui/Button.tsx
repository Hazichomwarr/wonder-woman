// _components/ui/Button.tsx
import React from "react";

export default function Button({
  children,
  variant = "primary",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
}) {
  const styles =
    variant === "primary"
      ? "bg-black text-white hover:bg-neutral-800"
      : "border bg-white hover: bg-neutral-50";

  return (
    <button className={`rounded px-4 py-2 text-sm ${styles}`} {...props}>
      {children}
    </button>
  );
}
