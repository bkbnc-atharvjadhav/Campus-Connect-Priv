import { useState } from "react";
import {
  GraduationCap, Users, ShieldCheck, Building2, Heart, Briefcase, PartyPopper,
  Sparkles, BellRing, MessageSquareText, BarChart3, FileText, Cloud, Lock,
  Layers, Gauge, Plug, ArrowRight,
} from "lucide-react";
import { useSeo } from "@/lib/useSeo";
import Section, { Eyebrow } from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import IconTile from "@/components/ui/IconTile";
import { BrowserMockup, SkeletonBar } from "@/components/ui/DeviceMockup";
import CTASection from "@/components/sections/CTASection";

const dashboards = [
  { icon: GraduationCap, name: "Student", desc: "Attendance, grades, timetable, resources and club activity in one feed." },
  { icon: Users, name: "Faculty", desc: "Course rosters, grading, communication and schedules without spreadsheets." },
  { icon: ShieldCheck, name: "Principal", desc: "Institution-wide KPIs, alerts and approvals at a glance." },
  { icon: Building2, name: "Admin", desc: "User management, permissions, billing and system health." },
  { icon: Heart, name: "Parent", desc: "Real-time visibility into attendance, performance and fees." },
  { icon: Briefcase, name: "Placement Cell", desc: "Drive tracking, applications, offers and analytics." },
  { icon: Building2, name: "Department", desc: "Curriculum, staff allocation and departmental reporting." },
  { icon: PartyPopper, name: "Club Management", desc: "Events, memberships, budgets and approvals for every club." },
];

const aiFeatures = [
  { icon: Sparkles, title: "AI Insights", desc: "Automatic summaries of attendance trends, performance dips and risk flags." },
  { icon: BellRing, title: "Notifications Engine", desc: "Priority-ranked alerts that reach the right role at the right moment." },
  { icon: MessageSquareText, title: "Communication Hub", desc: "Unified announcements and messaging, replacing scattered group chats." },
  { icon: BarChart3, title: "Analytics Dashboard", desc: "Live, drillable dashboards for every stakeholder and every module." },
  { icon: FileText, title: "Automated Reports", desc: "Accreditation-ready reports generated in seconds, not days." },
];

const architecture = [
  { icon: Cloud, title: "Cloud Native", desc: "Deployed on scalable cloud infrastructure with automatic failover." },
  { icon: Lock, title: "Encrypted Everywhere", desc: "Data encrypted at rest and in transit, end to end." },
  { icon: Layers, title: "Modular Core", desc: "Every module is independently scalable and upgradable." },
  { icon: Gauge, title: "Built to Scale", desc: "From a single department to a multi-campus university group." },
  { icon: Plug, title: "Open Integrations", desc: "Connects with ERPs, biometric devices and payment gateways." },
];

export default function Platform() {
  useSeo({
    title: "Platform",
    description: "Explore the complete Campus Connect ecosystem — role-based dashboards, AI features, analytics and enterprise-grade architecture.",
    path: "/platform",
  });
  const [active, setActive] = useState(0);

  return (
    <>
      <PageHero
        eyebrow="The Platform"
        title={<>One system, <span className="text-gradient">every role covered</span></>}
        description="Campus Connect is a modular operating system for your institution — role-based dashboards, AI features and enterprise architecture working as one."
      >
        <Button to="/book-demo" size="lg">See it in action</Button>
        <Button to="/solutions" variant="secondary" size="lg" icon={ArrowRight}>Browse by role</Button>
      </PageHero>

      {/* INTERACTIVE OVERVIEW */}
      <Section>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Role-Based Dashboards</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold text-heading sm:text-4xl">A dashboard for every seat at the table</h2>
          <p className="mt-5 leading-relaxed text-paragraph">Select a role to preview what their day looks like inside Campus Connect.</p>
        </Reveal>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {dashboards.map((d, i) => (
            <button
              key={d.name}
              onClick={() => setActive(i)}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                active === i ? "bg-grad-primary text-white shadow-softer" : "glass text-paragraph hover:text-heading"
              }`}
            >
              {d.name}
            </button>
          ))}
        </div>

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-2">
          <Reveal key={active}>
            <IconTile icon={dashboards[active].icon} size="lg" />
            <h3 className="mt-6 font-display text-2xl font-bold text-heading">{dashboards[active].name} Dashboard</h3>
            <p className="mt-4 leading-relaxed text-paragraph">{dashboards[active].desc}</p>
          </Reveal>
          <BrowserMockup key={`m-${active}`}>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <SkeletonBar width="35%" />
                <SkeletonBar width="15%" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="h-16 rounded-xl bg-section" />
                <div className="h-16 rounded-xl bg-section" />
                <div className="h-16 rounded-xl bg-section" />
              </div>
              <div className="h-24 rounded-xl bg-grad-primary/10" />
              <SkeletonBar width="90%" />
              <SkeletonBar width="70%" />
            </div>
          </BrowserMockup>
        </div>
      </Section>

      {/* ARCHITECTURE DIAGRAM */}
      <Section tone="muted">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Platform Architecture</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold text-heading sm:text-4xl">Simple on the surface, powerful underneath</h2>
        </Reveal>
        <Reveal delay={0.1} className="mx-auto mt-14 max-w-4xl rounded-card border border-borderc bg-white p-10 shadow-softer">
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-borderc p-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Interface Layer</p>
              <p className="mt-2 text-sm text-paragraph">Web & mobile dashboards for every role</p>
            </div>
            <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-primary">Intelligence Core</p>
              <p className="mt-2 text-sm text-paragraph">AI engine, notifications, analytics & reporting</p>
            </div>
            <div className="rounded-2xl border border-borderc p-5 text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted">Data & Infra Layer</p>
              <p className="mt-2 text-sm text-paragraph">Encrypted storage, backups & integrations</p>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* AI FEATURES */}
      <Section>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>AI Features</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold text-heading sm:text-4xl">Intelligence built into every module</h2>
        </Reveal>
        <StaggerGroup className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {aiFeatures.map((f) => (
            <StaggerItem key={f.title}>
              <div className="h-full rounded-card border border-borderc bg-white p-7 shadow-softer transition-all duration-300 hover:-translate-y-1.5 hover:shadow-soft">
                <IconTile icon={f.icon} />
                <h3 className="mt-5 font-display text-lg font-bold text-heading">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paragraph">{f.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      {/* SECURITY / INTEGRATIONS / SCALABILITY */}
      <Section tone="muted">
        <Reveal className="mx-auto max-w-2xl text-center">
          <Eyebrow>Security, Integrations & Scale</Eyebrow>
          <h2 className="mt-5 text-3xl font-extrabold text-heading sm:text-4xl">Enterprise architecture, ready on day one</h2>
        </Reveal>
        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {architecture.map((a) => (
            <StaggerItem key={a.title}>
              <div className="h-full rounded-card border border-borderc bg-white p-6 text-center shadow-softer">
                <IconTile icon={a.icon} size="sm" />
                <h3 className="mt-4 text-sm font-bold text-heading">{a.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-paragraph">{a.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
        <Reveal delay={0.2} className="mt-10 text-center">
          <Button to="/security" variant="secondary" icon={ArrowRight}>Read the full Security overview</Button>
        </Reveal>
      </Section>

      <CTASection
        title="See the whole platform in a live walkthrough"
        description="Book a 30-minute demo tailored to your institution's departments and roles."
      />
    </>
  );
}
