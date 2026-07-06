import { ReactNode } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import Section from "../ui/Section";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import MeshBackground from "../ui/MeshBackground";

interface CTASectionProps {
  title: string;
  description: string;
  primaryLabel?: string;
  primaryTo?: string;
  secondaryLabel?: string;
  secondaryTo?: string;
  children?: ReactNode;
}

export default function CTASection({
  title,
  description,
  primaryLabel = "Book a Demo",
  primaryTo = "/book-demo",
  secondaryLabel = "Talk to Us",
  secondaryTo = "/contact",
}: CTASectionProps) {
  return (
    <Section tone="dark" className="overflow-hidden">
      <MeshBackground dark />
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-extrabold text-white sm:text-4xl md:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-white/70">{description}</p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button to={primaryTo} icon={Calendar} size="lg">
            {primaryLabel}
          </Button>
          <Button to={secondaryTo} variant="secondary" icon={ArrowRight} size="lg" className="!bg-white/10 !text-white border-white/20">
            {secondaryLabel}
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
