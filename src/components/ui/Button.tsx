import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { LucideIcon } from "lucide-react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

interface ButtonProps {
  children: ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  size?: Size;
  icon?: LucideIcon;
  type?: "button" | "submit";
  className?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 rounded-btn font-semibold transition-all duration-300 whitespace-nowrap select-none";

const variants: Record<Variant, string> = {
  primary:
    "bg-grad-primary text-white shadow-soft hover:shadow-glow hover:-translate-y-0.5",
  secondary:
    "glass text-heading hover:-translate-y-0.5 hover:shadow-soft",
  ghost: "text-heading hover:text-primary",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  size = "md",
  icon: Icon,
  type = "button",
  className = "",
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
        {Icon && <Icon size={18} strokeWidth={2.2} />}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} target="_blank" rel="noreferrer" className={classes}>
        {children}
        {Icon && <Icon size={18} strokeWidth={2.2} />}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
      {Icon && <Icon size={18} strokeWidth={2.2} />}
    </button>
  );
}
