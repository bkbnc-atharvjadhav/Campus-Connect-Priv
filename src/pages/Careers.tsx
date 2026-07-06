import { Globe2, GraduationCap, Heart, Zap, ArrowRight, MapPin, Clock } from "lucide-react";
import { useSeo } from "@/lib/useSeo";
import Section, { Eyebrow } from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import IconTile from "@/components/ui/IconTile";
import Button from "@/components/ui/Button";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/sections/CTASection";

const benefits = [
  { icon: Globe2, title: "Remote Friendly", desc: "Work from anywhere — we care about outcomes, not office hours." },
  { icon: GraduationCap, title: "Learning Budget", desc: "Support for courses, books and conferences that grow your craft." },
  { icon: Heart, title: "Health First", desc: "Comprehensive health coverage for you and your family." },
  { icon: Zap, title: "Ownership", desc: "Real equity and real responsibility from day one." },
];

const positions = [
  { role: "Founding Frontend Engineer", type: "Full-time", location: "Remote / Mumbai" },
  { role: "Backend Engineer (Supabase / Cloudflare)", type: "Full-time", location: "Remote" },
  { role: "Product Designer", type: "Full-time", location: "Remote / Mumbai" },
  { role: "Campus Success Associate", type: "Full-time", location: "Mumbai" },
  { role: "Software Engineering Intern", type: "Internship", location: "Remote" },
];

const process = [
  "Application review", "Intro call with the founding team", "Practical work sample or pairing session", "Final conversation & offer",
];

const faqs = [
  { question: "Is Campus Connect fully remote?", answer: "Yes, the team works remote-first, with occasional in-person meetups for the Mumbai-based team." },
  { question: "Do you offer internships?", answer: "Yes, we run internships for students who want real ownership over shipped features, not busywork." },
  { question: "What's the interview process like?", answer: "A short application review, an intro call, a practical work sample, and a final conversation with the founding team." },
];

export default function Careers() {
  useSeo({
    title: "Careers",
    description: "Join Campus Connect and help build India's leading Campus Operating System. Open positions, benefits and culture.",
    path: "/careers",
  });

  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={<>Help build the <span className="text-gradient">operating system</span> for education</>}
        description="We're a small, founder-led team on a mission to modernize how institutions run. Come build it with us."
      >
        <Button href="#openings" size="lg">View Open Positions</Button>
      </PageHero>

      {/* BENEFITS */}
      <Section>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Why Join</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold text-heading sm:text-4xl">Work that matters, on a team that moves fast</h2>
        </Reveal>
        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <StaggerItem key={b.title}>
              <div className="h-full rounded-card border border-borderc bg-white p-7 text-center shadow-softer">
                <IconTile icon={b.icon} />
                <h3 className="mt-4 font-display font-bold text-heading">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paragraph">{b.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* OPEN POSITIONS */}
      <Section tone="muted" id="openings">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Open Positions</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold text-heading sm:text-4xl">Current openings</h2>
        </Reveal>
        <div className="mx-auto mt-14 max-w-3xl space-y-4">
          {positions.map((p, i) => (
            <Reveal key={p.role} delay={i * 0.04}>
              <div className="flex flex-col justify-between gap-4 rounded-card border border-borderc bg-white p-6 shadow-softer sm:flex-row sm:items-center">
                <div>
                  <h3 className="font-display font-bold text-heading">{p.role}</h3>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-muted">
                    <span className="flex items-center gap-1.5"><Clock size={14} /> {p.type}</span>
                    <span className="flex items-center gap-1.5"><MapPin size={14} /> {p.location}</span>
                  </div>
                </div>
                <Button href="mailto:careers@campusconnect.app" variant="secondary" icon={ArrowRight}>Apply</Button>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CULTURE */}
      <Section>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Culture</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold text-heading sm:text-4xl">Small team, real ownership</h2>
            <p className="mt-5 leading-relaxed text-paragraph">
              Every person on the team owns outcomes, not just tasks. We ship fast, talk to real institutions constantly, and build in public with our early partners.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <GlassCard hover={false}>
              <h3 className="font-display font-bold text-heading">Hiring Process</h3>
              <ol className="mt-5 space-y-4">
                {process.map((step, i) => (
                  <li key={step} className="flex items-start gap-3 text-sm text-paragraph">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {i + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            </GlassCard>
          </Reveal>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="muted">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold text-heading sm:text-4xl">Common questions</h2>
        </Reveal>
        <div className="mt-14">
          <FAQAccordion items={faqs} />
        </div>
      </Section>

      <CTASection
        title="Don't see the right role?"
        description="We're always open to meeting people who care about education technology. Reach out anyway."
        primaryLabel="Email Us"
        primaryTo="/contact"
        secondaryLabel="Back to About"
        secondaryTo="/about"
      />
    </>
  );
}
