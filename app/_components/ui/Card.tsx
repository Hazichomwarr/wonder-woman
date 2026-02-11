// _components/ui/Card.tsx
import * as React from "react";
import { cn } from "@/app/_lib/utils";

// Card (base wrapper)
export function Card({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("rounded-xl border bg-white shadow-sm", className)}
      {...props}
    />
  );
}

// CardHeader
export function CardHeader({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pb-3", className)} {...props} />;
}

// CardTitle
export function CardTitle({
  className,
  ...props
}: React.HtmlHTMLAttributes<HTMLDivElement>) {
  return (
    <h3
      className={cn("text-base font-semibold leading-6", className)}
      {...props}
    />
  );
}

// CardDescription
export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("mt-1 text-sm text-neutral-600", className)} {...props} />
  );
}

// CardContent
export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 pt-0", className)} {...props} />;
}

// CardFooter
export function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex items-center justify-end gap-2 p-6 pt-0", className)}
      {...props}
    />
  );
}
