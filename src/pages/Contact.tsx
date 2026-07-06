import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, Twitter, Linkedin, Instagram } from "lucide-react";
import { useSeo } from "@/lib/useSeo";
import Section, { Eyebrow } from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import GlassCard from "@/components/ui/GlassCard";
import IconTile from "@/components/ui/IconTile";
import FAQAccordion from "@/components/ui/FAQAccordion";

const info = [
  { icon: Mail, label: "Email", value: "hello@campusconnect.app" },
  { icon: Phone, label: "Phone", value: "+91 98765 43210" },
  { icon: MapPin, label: "Location", value: "Mumbai, Maharashtra, India" },
  { icon: Clock, label: "Support Hours", value: "Mon – Sat, 9:00 AM – 7:00 PM IST" },
];

const faqs = [
  { question: "What's the fastest way to reach the team?", answer: "Email is fastest for detailed queries; use the demo form if you want a live walkthrough scheduled." },
  { question: "Do you support institutions outside India?", answer: "Campus Connect is built India-first but works for any institution with similar academic structures." },
];

export default function Contact() {
  useSeo({
    title: "Contact",
    description: "Get in touch with the Campus Connect team — book a demo, ask a question, or explore partnership opportunities.",
    path: "/contact",
  });
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Let's talk about <span className="text-gradient">your campus</span></>}
        description="Questions, partnerships, or just curious what Campus Connect could do for your institution — we'd love to hear from you."
      />

      <Section className="!pt-0">
        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <GlassCard hover={false}>
              {submitted ? (
                <div className="flex flex-col items-center py-10 text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="mt-5 font-display text-xl font-bold text-heading">Thanks — message sent!</h3>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-paragraph">
                    Someone from our team will get back to you within one business day.
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
                      <input required type="text" className="mt-2 w-full rounded-btn border border-borderc bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary" placeholder="Jordan Sharma" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-heading">Institution</label>
                      <input type="text" className="mt-2 w-full rounded-btn border border-borderc bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary" placeholder="Your college or university" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-heading">Email</label>
                    <input required type="email" className="mt-2 w-full rounded-btn border border-borderc bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary" placeholder="you@institution.edu" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-heading">Message</label>
                    <textarea required rows={5} className="mt-2 w-full rounded-2xl border border-borderc bg-white px-4 py-3 text-sm outline-none transition-colors focus:border-primary" placeholder="Tell us a bit about what you're looking for..." />
                  </div>
                  <Button type="submit" icon={Send} className="w-full sm:w-auto">Send Message</Button>
                </form>
              )}
            </GlassCard>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-2 space-y-5">
            {info.map((item) => (
              <div key={item.label} className="flex items-start gap-4 rounded-card border border-borderc bg-white p-5 shadow-softer">
                <IconTile icon={item.icon} size="sm" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted">{item.label}</p>
                  <p className="mt-1 text-sm font-medium text-heading">{item.value}</p>
                </div>
              </div>
            ))}
            <div className="flex gap-3 pt-2">
              {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-borderc text-paragraph transition-colors hover:border-primary hover:text-primary">
                  <Icon size={16} />
                </a>
              ))}
            </div>
            <Button to="/book-demo" className="w-full">Book a Live Demo Instead</Button>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="mt-10 flex h-72 items-center justify-center rounded-card border border-dashed border-borderc bg-section text-sm text-muted">
          Google Maps embed placeholder — Mumbai, Maharashtra
        </Reveal>
      </Section>

      <Section tone="muted">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold text-heading sm:text-4xl">Before you reach out</h2>
        </Reveal>
        <div className="mt-14">
          <FAQAccordion items={faqs} />
        </div>
      </Section>
    </>
  );
}
