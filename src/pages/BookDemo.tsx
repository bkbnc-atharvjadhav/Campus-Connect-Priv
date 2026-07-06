import { useState } from "react";
import { CheckCircle2, Calendar, Clock, Users2, Sparkles } from "lucide-react";
import { useSeo } from "@/lib/useSeo";
import Section, { Eyebrow } from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import IconTile from "@/components/ui/IconTile";
import Button from "@/components/ui/Button";
import FAQAccordion from "@/components/ui/FAQAccordion";

const benefits = [
  { icon: Clock, title: "30 Minutes", desc: "A focused walkthrough tailored to your institution's structure." },
  { icon: Users2, title: "Every Role Covered", desc: "See dashboards for students, faculty, admin and more." },
  { icon: Sparkles, title: "No Obligation", desc: "A conversation first — pricing and rollout come after, on your terms." },
];

const faqs = [
  { question: "Who should join the demo call?", answer: "Ideally someone from leadership plus a department head or IT contact who understands day-to-day workflows." },
  { question: "Can the demo be customized to our institution type?", answer: "Yes — let us know if you're a college, polytechnic, or university group and we'll tailor the walkthrough." },
];

export default function BookDemo() {
  useSeo({
    title: "Book a Demo",
    description: "Book a live walkthrough of Campus Connect tailored to your institution's departments and roles.",
    path: "/book-demo",
  });
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Book a Demo"
        title={<>See Campus Connect <span className="text-gradient">on your campus</span></>}
        description="A focused, 30-minute walkthrough — built around the departments and roles that matter most to you."
      />

      <Section className="!pt-0">
        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2 space-y-5">
            {benefits.map((b) => (
              <div key={b.title} className="flex items-start gap-4 rounded-card border border-borderc bg-white p-5 shadow-softer">
                <IconTile icon={b.icon} size="sm" />
                <div>
                  <h3 className="font-semibold text-heading">{b.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-paragraph">{b.desc}</p>
                </div>
              </div>
            ))}
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <GlassCard hover={false}>
              {submitted ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-heading">Demo request received!</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-paragraph">
                    We'll email you shortly with time slots that work for your team.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSubmitted(true);
                  }}
                  className="space-y-5"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium text-heading">Full Name</label>
                      <input required type="text" className="mt-2 w-full rounded-btn border border-borderc bg-white px-4 py-3 text-sm outline-none focus:border-primary" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-heading">Work Email</label>
                      <input required type="email" className="mt-2 w-full rounded-btn border border-borderc bg-white px-4 py-3 text-sm outline-none focus:border-primary" />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="text-sm font-medium text-heading">Institution Name</label>
                      <input required type="text" className="mt-2 w-full rounded-btn border border-borderc bg-white px-4 py-3 text-sm outline-none focus:border-primary" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-heading">Role</label>
                      <input type="text" placeholder="Principal, HOD, IT Head..." className="mt-2 w-full rounded-btn border border-borderc bg-white px-4 py-3 text-sm outline-none focus:border-primary" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-heading">Preferred Date & Time</label>
                    <div className="mt-2 flex items-center gap-3 rounded-2xl border border-dashed border-borderc bg-section p-6 text-sm text-muted">
                      <Calendar size={18} /> Calendly scheduling widget placeholder
                    </div>
                  </div>
                  <Button type="submit" icon={Calendar} className="w-full sm:w-auto">Request Demo</Button>
                </form>
              )}
            </GlassCard>
          </Reveal>
        </div>
      </Section>

      <Section tone="muted">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold text-heading sm:text-4xl">Before you book</h2>
        </Reveal>
        <div className="mt-14">
          <FAQAccordion items={faqs} />
        </div>
      </Section>
    </>
  );
}
