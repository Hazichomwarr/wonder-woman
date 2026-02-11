// _components/ui/Button.tsx
import React from "react";

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
}) {
  const base =
    "rounded px-4 py-2 text-sm transition cursor-pointer active:scale-95";
  const variants =
    variant === "primary"
      ? "bg-orange-600 text-white hover:bg-orange-700"
      : "border bg-white hover:bg-neutral-100";

  return (
    <button className={`${base} ${variants} ${className}`} {...props}>
      {children}
    </button>
  );
}
