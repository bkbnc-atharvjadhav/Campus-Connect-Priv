import { ReactNode } from "react";

export default function Badge({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary ${className}`}
    >
      {children}
    </span>
  );
}
