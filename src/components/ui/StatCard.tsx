import { LucideIcon } from "lucide-react";
import Reveal from "./Reveal";

interface StatCardProps {
  icon: LucideIcon;
  value: string;
  label: string;
  delay?: number;
}

export default function StatCard({ icon: Icon, value, label, delay = 0 }: StatCardProps) {
  return (
    <Reveal delay={delay} className="glass rounded-card p-6 text-center shadow-softer">
      <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-grad-primary text-white">
        <Icon size={20} strokeWidth={2.2} />
      </div>
      <div className="font-display text-2xl font-extrabold text-heading">{value}</div>
      <div className="mt-1 text-sm text-paragraph">{label}</div>
    </Reveal>
  );
}
