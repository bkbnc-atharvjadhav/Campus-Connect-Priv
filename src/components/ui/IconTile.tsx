import { LucideIcon } from "lucide-react";

export default function IconTile({
  icon: Icon,
  gradient = true,
  size = "md",
}: {
  icon: LucideIcon;
  gradient?: boolean;
  size?: "sm" | "md" | "lg";
}) {
  const sizes = { sm: "h-9 w-9", md: "h-12 w-12", lg: "h-14 w-14" };
  const iconSizes = { sm: 16, md: 20, lg: 24 };
  return (
    <div
      className={`flex items-center justify-center rounded-2xl ${sizes[size]} ${
        gradient ? "bg-grad-primary text-white shadow-softer" : "bg-primary/10 text-primary"
      }`}
    >
      <Icon size={iconSizes[size]} strokeWidth={2.2} />
    </div>
  );
}
