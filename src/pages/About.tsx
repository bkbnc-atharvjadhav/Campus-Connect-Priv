import { Target, Eye, Lightbulb, FlaskConical, Code2, Rocket, TrendingUp, User } from "lucide-react";
import { useSeo } from "@/lib/useSeo";
import Section, { Eyebrow } from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import IconTile from "@/components/ui/IconTile";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";

const timeline = [
  { icon: FlaskConical, phase: "Problem", desc: "Watched institutions run critical operations across spreadsheets, registers and WhatsApp groups." },
  { icon: Lightbulb, phase: "Research", desc: "Spoke with principals, faculty and students to map every workflow that needed rethinking." },
  { icon: Code2, phase: "Development", desc: "Built a modular platform architecture designed to scale from one department to an entire university." },
  { icon: Rocket, phase: "Launch", desc: "Shipped the first version of Campus Connect to early partner institutions." },
  { icon: TrendingUp, phase: "Growth", desc: "Expanding module by module, campus by campus, guided directly by user feedback." },
];

const values = [
  { title: "Clarity over clutter", desc: "Every screen should make the next action obvious." },
  { title: "Trust by design", desc: "Security and privacy are non-negotiable defaults, not settings." },
  { title: "Built with, not just for", desc: "Every module is shaped by direct conversations with real institutions." },
  { title: "Future ready", desc: "We build for where education technology is heading, not just where it is." },
];

const stack = ["React", "Supabase", "Cloudflare", "Lovable", "GitHub", "OpenAI"];

export default function About() {
  useSeo({
    title: "About",
    description: "Why Campus Connect was built, our mission, our team, and where we're headed next.",
    path: "/about",
  });

  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title={<>Building the <span className="text-gradient">operating system</span> education deserves</>}
        description="Campus Connect started with a simple observation: institutions run mission-critical work on tools never designed for it."
      />

      {/* WHY / MISSION / VISION */}
      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <GlassCard>
            <IconTile icon={Lightbulb} />
            <h3 className="mt-5 font-display text-lg font-bold text-heading">Why We Built This</h3>
            <p className="mt-2 text-sm leading-relaxed text-paragraph">
              Institutions deserve technology as thoughtful as the education they deliver — not a patchwork of spreadsheets and registers.
            </p>
          </GlassCard>
          <GlassCard delay={0.1}>
            <IconTile icon={Target} />
            <h3 className="mt-5 font-display text-lg font-bold text-heading">Our Mission</h3>
            <p className="mt-2 text-sm leading-relaxed text-paragraph">
              Give every institution, regardless of size or budget, a single intelligent platform to run their entire campus.
            </p>
          </GlassCard>
          <GlassCard delay={0.2}>
            <IconTile icon={Eye} />
            <h3 className="mt-5 font-display text-lg font-bold text-heading">Our Vision</h3>
            <p className="mt-2 text-sm leading-relaxed text-paragraph">
              To become India's leading Campus Operating System — the default infrastructure layer for education.
            </p>
          </GlassCard>
        </div>
      </Section>

      {/* TIMELINE */}
      <Section tone="muted">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Our Journey</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold text-heading sm:text-4xl">From a real problem to a real platform</h2>
        </Reveal>
        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-borderc md:left-1/2" />
          <div className="space-y-10">
            {timeline.map((t, i) => (
              <Reveal key={t.phase} delay={i * 0.05} className="relative flex gap-6 md:justify-center">
                <div className="z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-grad-primary text-white shadow-softer md:absolute md:left-1/2 md:-translate-x-1/2">
                  <t.icon size={20} />
                </div>
                <div className={`rounded-card border border-borderc bg-white p-6 shadow-softer md:w-[calc(50%-2.5rem)] ${i % 2 === 0 ? "md:mr-auto" : "md:ml-auto"}`}>
                  <p className="text-xs font-semibold uppercase tracking-wider text-primary">{t.phase}</p>
                  <p className="mt-2 text-sm leading-relaxed text-paragraph">{t.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* CORE VALUES */}
      <Section>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Core Values</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold text-heading sm:text-4xl">What guides how we build</h2>
        </Reveal>
        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <StaggerItem key={v.title}>
              <div className="h-full rounded-card border border-borderc bg-white p-6 shadow-softer">
                <h3 className="font-display font-bold text-heading">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paragraph">{v.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* TEAM */}
      <Section tone="muted">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Meet the Team</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold text-heading sm:text-4xl">The people building Campus Connect</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <GlassCard className="text-center">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-grad-primary text-white">
              <User size={36} />
            </div>
            <h3 className="mt-5 font-display font-bold text-heading">Atharv Amol Jadhav</h3>
            <p className="text-sm text-primary">Founder</p>
          </GlassCard>
          {[1, 2, 3].map((i) => (
            <GlassCard key={i} delay={i * 0.05} className="text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-section text-muted">
                <User size={36} />
              </div>
              <h3 className="mt-5 font-display font-bold text-heading">Future Team Member</h3>
              <p className="text-sm text-muted">Open Position</p>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* TECH STACK */}
      <Section>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Technology</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold text-heading sm:text-4xl">Built on a modern, reliable stack</h2>
        </Reveal>
        <Reveal delay={0.1} className="mt-12 flex flex-wrap justify-center gap-4">
          {stack.map((s) => (
            <span key={s} className="rounded-full border border-borderc bg-white px-6 py-3 font-display font-semibold text-heading shadow-softer">
              {s}
            </span>
          ))}
        </Reveal>
      </Section>

      {/* ROADMAP */}
      <Section tone="muted">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Roadmap</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold text-heading sm:text-4xl">Where we're headed</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { label: "Current", items: ["Core academic & admin modules", "Placement cell automation", "Role-based dashboards"] },
            { label: "Coming Soon", items: ["Deeper AI-generated insights", "Native mobile apps", "Alumni engagement suite"] },
            { label: "Future Vision", items: ["Multi-campus orchestration", "Predictive performance analytics", "Open developer ecosystem"] },
          ].map((col) => (
            <div key={col.label} className="rounded-card border border-borderc bg-white p-7 shadow-softer">
              <h3 className="font-display font-bold text-heading">{col.label}</h3>
              <ul className="mt-4 space-y-3">
                {col.items.map((it) => (
                  <li key={it} className="text-sm leading-relaxed text-paragraph">{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <CTASection
        title="Want to build the future of campus technology with us?"
        description="We're always looking for people who care deeply about education and craft."
        primaryLabel="View Careers"
        primaryTo="/careers"
        secondaryLabel="Contact Us"
        secondaryTo="/contact"
      />
    </>
  );
}
