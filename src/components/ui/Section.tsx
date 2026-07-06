import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  tone?: "surface" | "muted" | "dark";
  id?: string;
}

const tones = {
  surface: "bg-surface",
  muted: "bg-section",
  dark: "bg-dark text-white",
};

export default function Section({ children, className = "", tone = "surface", id }: SectionProps) {
  return (
    <section id={id} className={`relative py-20 md:py-28 ${tones[tone]} ${className}`}>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-borderc bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary shadow-softer">
      {children}
    </span>
  );
}
