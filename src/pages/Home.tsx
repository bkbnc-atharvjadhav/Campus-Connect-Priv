import { ArrowRight, Calendar, CheckCircle2, ShieldCheck, Sparkles, Zap, Users2, TrendingUp, Award, Quote } from "lucide-react";
import { useSeo } from "@/lib/useSeo";
import Section, { Eyebrow } from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import GlassCard from "@/components/ui/GlassCard";
import MeshBackground from "@/components/ui/MeshBackground";
import StatCard from "@/components/ui/StatCard";
import IconTile from "@/components/ui/IconTile";
import { BrowserMockup, SkeletonBar } from "@/components/ui/DeviceMockup";
import FAQAccordion from "@/components/ui/FAQAccordion";
import CTASection from "@/components/sections/CTASection";
import { coreModules } from "@/data/modules";

const trustedBy = ["Vidyasagar Institute", "St. Xavier College", "Nirmal Polytechnic", "Greenfield University", "Horizon College of Arts"];

const comparison = [
  { feature: "Unified role-based platform", legacy: false, cc: true },
  { feature: "AI-generated insights & summaries", legacy: false, cc: true },
  { feature: "Real-time attendance & analytics", legacy: false, cc: true },
  { feature: "Placement cell automation", legacy: false, cc: true },
  { feature: "Modern, mobile-first experience", legacy: false, cc: true },
  { feature: "Bank-grade security & backups", legacy: false, cc: true },
];

const testimonials = [
  { quote: "Campus Connect replaced six different spreadsheets and three WhatsApp groups with one dashboard our whole staff actually enjoys using.", name: "Dr. R. Mehta", role: "Principal, Vidyasagar Institute" },
  { quote: "Our placement cell went from chasing emails to tracking every drive in real time. Offers went up, chaos went down.", name: "S. Kulkarni", role: "Placement Officer" },
  { quote: "Students finally have one place for timetables, grades and club activities. Support tickets dropped almost overnight.", name: "A. Fernandes", role: "HOD, Computer Science" },
];

const faqs = [
  { question: "How long does it take to onboard our institution?", answer: "Most institutions are fully onboarded within two to four weeks, including data migration, role setup and staff training." },
  { question: "Can Campus Connect integrate with our existing ERP?", answer: "Yes. Campus Connect offers integration pathways for common ERP, biometric and payment systems, with a dedicated migration team to help." },
  { question: "Is our institutional data secure?", answer: "Data is encrypted in transit and at rest, hosted on Cloudflare-protected infrastructure with role-based access control and regular backups." },
  { question: "Do you offer training for non-technical staff?", answer: "Every plan includes onboarding sessions, video guides and ongoing support so staff of any technical background can get comfortable fast." },
];

export default function Home() {
  useSeo({
    title: "AI-Powered Campus Operating System",
    description: "Campus Connect unifies Students, Faculty, Departments, Clubs, Alumni, Placement Cell and Administration on one intelligent platform.",
    path: "/",
  });

  return (
    <>
      {/* HERO */}
      <div className="relative overflow-hidden pt-40 pb-24 md:pt-52 md:pb-32">
        <MeshBackground />
        <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
          <Reveal>
            <Eyebrow>
              <Sparkles size={14} /> The Campus Operating System
            </Eyebrow>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-heading sm:text-5xl md:text-7xl">
              One platform for your <span className="text-gradient">entire campus</span>
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-paragraph md:text-xl">
              Campus Connect brings Students, Faculty, Departments, Clubs, Alumni, Placement Cell and Administration together — powered by AI, built for scale.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Button to="/book-demo" icon={Calendar} size="lg">Book a Demo</Button>
              <Button to="/platform" variant="secondary" icon={ArrowRight} size="lg">Explore Platform</Button>
            </div>
          </Reveal>
          <Reveal delay={0.4} className="mt-16">
            <BrowserMockup className="mx-auto max-w-4xl text-left">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-1 space-y-3 rounded-2xl bg-section p-4">
                  <SkeletonBar width="60%" />
                  <SkeletonBar width="80%" />
                  <SkeletonBar width="40%" />
                  <div className="mt-4 h-20 rounded-xl bg-grad-primary/10" />
                </div>
                <div className="col-span-2 space-y-3 rounded-2xl bg-section p-4">
                  <div className="flex justify-between">
                    <SkeletonBar width="30%" />
                    <SkeletonBar width="15%" />
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="h-16 rounded-xl bg-white shadow-softer" />
                    <div className="h-16 rounded-xl bg-white shadow-softer" />
                    <div className="h-16 rounded-xl bg-white shadow-softer" />
                  </div>
                  <div className="h-28 rounded-xl bg-grad-accent/10" />
                </div>
              </div>
            </BrowserMockup>
          </Reveal>
        </div>
      </div>

      {/* TRUSTED BY */}
      <Section tone="muted" className="!py-14">
        <Reveal className="text-center text-sm font-semibold uppercase tracking-wider text-muted">
          Trusted by forward-thinking institutions
        </Reveal>
        <Reveal delay={0.1} className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {trustedBy.map((name) => (
            <span key={name} className="font-display text-lg font-bold text-paragraph/50">{name}</span>
          ))}
        </Reveal>
      </Section>

      {/* PROBLEM STATEMENT */}
      <Section>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>The Problem</Eyebrow>
            <h2 className="mt-5 text-3xl font-extrabold text-heading sm:text-4xl">
              Institutions run on <span className="text-gradient">disconnected tools</span>
            </h2>
            <p className="mt-5 leading-relaxed text-paragraph">
              Attendance in one register, grades in another spreadsheet, placements tracked over email, and announcements lost in WhatsApp groups. Every disconnected tool costs time, trust and visibility.
            </p>
            <ul className="mt-6 space-y-3">
              {["Data scattered across spreadsheets and paper", "No real-time visibility for leadership", "Manual reporting that takes days, not seconds"].map((t) => (
                <li key={t} className="flex items-start gap-3 text-paragraph">
                  <CheckCircle2 className="mt-0.5 shrink-0 text-primary" size={18} />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.15}>
            <GlassCard hover={false} className="border-gradient">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-heading">Before Campus Connect</span>
                  <span className="text-xs text-muted">6+ disconnected tools</span>
                </div>
                {["Attendance Register", "Excel Gradebook", "Email Threads", "WhatsApp Groups", "Paper Reports"].map((tool) => (
                  <div key={tool} className="flex items-center justify-between rounded-2xl border border-borderc px-4 py-3">
                    <span className="text-sm text-paragraph">{tool}</span>
                    <span className="h-2 w-2 rounded-full bg-red-400" />
                  </div>
                ))}
              </div>
            </GlassCard>
          </Reveal>
        </div>
      </Section>

      {/* ECOSYSTEM DIAGRAM */}
      <Section tone="muted">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>The Ecosystem</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold text-heading sm:text-4xl">Every stakeholder, one system</h2>
          <p className="mt-5 leading-relaxed text-paragraph">
            Campus Connect connects every role in your institution through a single, intelligent core.
          </p>
        </Reveal>
        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
            {["Students", "Faculty", "Departments", "Clubs", "Alumni", "Placement Cell", "Administration", "Parents", "Principal"].map((role, i) => (
              <StaggerItem key={role}>
                <div className="flex flex-col items-center gap-3 rounded-card border border-borderc bg-white p-6 text-center shadow-softer">
                  <IconTile icon={Users2} size="sm" />
                  <span className="text-sm font-semibold text-heading">{role}</span>
                </div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </Section>

      {/* CORE MODULES */}
      <Section>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Core Modules</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold text-heading sm:text-4xl">Everything your campus needs, built in</h2>
          <p className="mt-5 leading-relaxed text-paragraph">Twelve modules working together as one connected system.</p>
        </Reveal>
        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreModules.map((m) => (
            <StaggerItem key={m.title}>
              <div className="h-full rounded-card border border-borderc bg-white p-7 shadow-softer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft">
                <IconTile icon={m.icon} />
                <h3 className="mt-5 font-display text-lg font-bold text-heading">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paragraph">{m.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* COMPARISON TABLE */}
      <Section tone="muted">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Why Campus Connect</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold text-heading sm:text-4xl">Built for today, not the last decade</h2>
        </Reveal>
        <Reveal delay={0.1} className="mx-auto mt-14 max-w-3xl overflow-hidden rounded-card border border-borderc bg-white shadow-softer">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-borderc bg-section text-sm">
                <th className="px-6 py-4 font-semibold text-heading">Feature</th>
                <th className="px-6 py-4 text-center font-semibold text-muted">Legacy Tools</th>
                <th className="px-6 py-4 text-center font-semibold text-primary">Campus Connect</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.feature} className="border-b border-borderc last:border-0">
                  <td className="px-6 py-4 text-sm text-paragraph">{row.feature}</td>
                  <td className="px-6 py-4 text-center">
                    <span className="mx-auto block h-2 w-2 rounded-full bg-muted/40" />
                  </td>
                  <td className="px-6 py-4 text-center">
                    <CheckCircle2 className="mx-auto text-primary" size={18} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </Section>

      {/* SECURITY */}
      <Section>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <IconTile icon={ShieldCheck} size="lg" />
            <h2 className="mt-6 text-3xl font-extrabold text-heading sm:text-4xl">
              Enterprise-grade security, by default
            </h2>
            <p className="mt-5 leading-relaxed text-paragraph">
              Every institution trusts Campus Connect with sensitive academic and personal data. Security isn't an add-on — it's built into the foundation.
            </p>
            <Button to="/security" variant="secondary" icon={ArrowRight} className="mt-6">Learn about Security</Button>
          </Reveal>
          <StaggerGroup className="grid grid-cols-2 gap-5">
            {[
              { icon: ShieldCheck, label: "Encrypted at rest & in transit" },
              { icon: Zap, label: "Cloudflare-protected infrastructure" },
              { icon: Users2, label: "Granular role-based access" },
              { icon: Award, label: "Automated daily backups" },
            ].map((s) => (
              <StaggerItem key={s.label}>
                <div className="rounded-card border border-borderc bg-white p-6 shadow-softer">
                  <IconTile icon={s.icon} size="sm" />
                  <p className="mt-4 text-sm font-medium text-heading">{s.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </Section>

      {/* STATS */}
      <Section tone="muted">
        <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
          <StatCard icon={Users2} value="40+" label="Institutions Onboarding" />
          <StatCard icon={TrendingUp} value="98%" label="Attendance Accuracy" delay={0.05} />
          <StatCard icon={Award} value="12" label="Integrated Modules" delay={0.1} />
          <StatCard icon={Zap} value="24/7" label="Platform Uptime" delay={0.15} />
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Testimonials</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold text-heading sm:text-4xl">Loved by the people who run campuses</h2>
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <GlassCard key={t.name} delay={i * 0.1}>
              <Quote className="text-primary/40" size={28} />
              <p className="mt-4 leading-relaxed text-paragraph">{t.quote}</p>
              <div className="mt-6">
                <p className="font-semibold text-heading">{t.name}</p>
                <p className="text-sm text-muted">{t.role}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </Section>

      {/* PARTNERS */}
      <Section tone="muted" className="!py-14">
        <Reveal className="text-center text-sm font-semibold uppercase tracking-wider text-muted">
          Technology partners powering the platform
        </Reveal>
        <Reveal delay={0.1} className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-4">
          {["React", "Supabase", "Cloudflare", "OpenAI", "GitHub"].map((p) => (
            <span key={p} className="font-display text-lg font-bold text-paragraph/50">{p}</span>
          ))}
        </Reveal>
      </Section>

      {/* FAQ */}
      <Section>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold text-heading sm:text-4xl">Questions, answered</h2>
        </Reveal>
        <div className="mt-14">
          <FAQAccordion items={faqs} />
        </div>
      </Section>

      <CTASection
        title="Ready to modernize your campus?"
        description="Join the institutions moving away from spreadsheets and WhatsApp groups — and onto a single, intelligent platform."
      />
    </>
  );
}
