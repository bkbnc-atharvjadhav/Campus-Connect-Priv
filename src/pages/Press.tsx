import { Download, Palette, Type, User, Building2, Mail } from "lucide-react";
import { useSeo } from "@/lib/useSeo";
import Section, { Eyebrow } from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import IconTile from "@/components/ui/IconTile";
import Button from "@/components/ui/Button";

const colors = [
  { name: "Primary", hex: "#2563EB" },
  { name: "Secondary", hex: "#4F46E5" },
  { name: "Accent", hex: "#06B6D4" },
  { name: "Dark", hex: "#0B1120" },
];

export default function Press() {
  useSeo({
    title: "Press & Media Kit",
    description: "Campus Connect brand assets, logos, colors, typography and company overview for press and media use.",
    path: "/press",
  });

  return (
    <>
      <PageHero
        eyebrow="Press & Media"
        title={<>Campus Connect <span className="text-gradient">Media Kit</span></>}
        description="Logos, brand colors, typography and company information for press, partners and media coverage."
      />

      <Section className="!pt-0">
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-card border border-borderc bg-white p-8 shadow-softer">
            <IconTile icon={Download} />
            <h3 className="mt-5 font-display text-lg font-bold text-heading">Logo Downloads</h3>
            <p className="mt-2 text-sm leading-relaxed text-paragraph">Primary logo, wordmark and icon in SVG and PNG formats.</p>
            <Button variant="secondary" icon={Download} className="mt-5">Download Logo Pack</Button>
          </Reveal>
          <Reveal delay={0.05} className="rounded-card border border-borderc bg-white p-8 shadow-softer">
            <IconTile icon={Palette} />
            <h3 className="mt-5 font-display text-lg font-bold text-heading">Brand Colors</h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {colors.map((c) => (
                <div key={c.name} className="flex items-center gap-3 rounded-2xl border border-borderc p-3">
                  <span className="h-8 w-8 rounded-full shrink-0" style={{ backgroundColor: c.hex }} />
                  <div>
                    <p className="text-xs font-semibold text-heading">{c.name}</p>
                    <p className="text-xs text-muted">{c.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} className="rounded-card border border-borderc bg-white p-8 shadow-softer">
            <IconTile icon={Type} />
            <h3 className="mt-5 font-display text-lg font-bold text-heading">Typography</h3>
            <p className="mt-2 text-sm leading-relaxed text-paragraph">Display: Manrope (700–800). Body: Inter (400–600).</p>
            <p className="mt-4 font-display text-2xl font-extrabold text-heading">Manrope Aa</p>
            <p className="mt-1 font-sans text-lg text-paragraph">Inter Aa</p>
          </Reveal>
          <Reveal delay={0.15} className="rounded-card border border-borderc bg-white p-8 shadow-softer">
            <IconTile icon={User} />
            <h3 className="mt-5 font-display text-lg font-bold text-heading">Founder Bio</h3>
            <p className="mt-2 text-sm leading-relaxed text-paragraph">
              Atharv Amol Jadhav founded Campus Connect to give educational institutions a single, modern operating system in place of disconnected spreadsheets and legacy tools.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-6 rounded-card border border-borderc bg-white p-8 shadow-softer">
          <div className="flex items-center gap-3">
            <IconTile icon={Building2} size="sm" />
            <h3 className="font-display font-bold text-heading">Company Overview</h3>
          </div>
          <p className="mt-4 leading-relaxed text-paragraph">
            Campus Connect is an AI-powered campus operating system connecting Students, Faculty, Departments, Clubs, Alumni, Placement Cell and Administration on one unified platform — built to become India's leading Campus Operating System.
          </p>
        </Reveal>

        <Reveal delay={0.25} className="mt-6 flex flex-col items-center justify-between gap-4 rounded-card border border-borderc bg-section p-8 text-center sm:flex-row sm:text-left">
          <div className="flex items-center gap-3">
            <IconTile icon={Mail} size="sm" />
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Press Contact</p>
              <p className="font-medium text-heading">press@campusconnect.app</p>
            </div>
          </div>
          <Button to="/contact" variant="secondary">General Inquiries</Button>
        </Reveal>
      </Section>
    </>
  );
}
