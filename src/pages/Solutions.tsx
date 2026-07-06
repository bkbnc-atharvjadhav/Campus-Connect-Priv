import { useState } from "react";
import {
  GraduationCap, Users, ShieldCheck, Building2, Briefcase, ClipboardCheck,
  FileCheck2, Network, Heart, CheckCircle2, XCircle, ArrowRight,
} from "lucide-react";
import { useSeo } from "@/lib/useSeo";
import Section, { Eyebrow } from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";
import IconTile from "@/components/ui/IconTile";
import CTASection from "@/components/sections/CTASection";

interface Audience {
  icon: typeof GraduationCap;
  name: string;
  tagline: string;
  pains: string[];
  solutions: string[];
  benefits: string[];
}

const audiences: Audience[] = [
  {
    icon: GraduationCap,
    name: "Students",
    tagline: "One app for everything academic",
    pains: ["Timetables, grades and notices scattered across apps", "Missing club and event updates", "No visibility into attendance shortfalls until it's too late"],
    solutions: ["A single dashboard for attendance, grades and schedules", "Live club, event and placement updates", "Proactive alerts before attendance becomes a problem"],
    benefits: ["Less anxiety around deadlines and shortages", "One login, every academic detail", "Faster access to placement opportunities"],
  },
  {
    icon: Users,
    name: "Faculty",
    tagline: "Less admin, more teaching",
    pains: ["Manual attendance and grading", "Fragmented communication with students", "Time lost compiling reports for HODs"],
    solutions: ["One-tap attendance and digital gradebooks", "Built-in messaging and announcement tools", "Auto-generated performance and attendance reports"],
    benefits: ["Hours saved every week on admin work", "Clearer communication with students and HODs", "Reports ready in seconds, not days"],
  },
  {
    icon: ShieldCheck,
    name: "Principal",
    tagline: "Institution-wide visibility, instantly",
    pains: ["No real-time view across departments", "Slow escalation of critical issues", "Reporting to trustees takes days to compile"],
    solutions: ["Live, institution-wide analytics dashboard", "Prioritized alerts and approval workflows", "One-click reports for boards and accreditation"],
    benefits: ["Confident, data-backed decisions", "Faster response to emerging issues", "Board-ready reporting on demand"],
  },
  {
    icon: Building2,
    name: "Management",
    tagline: "Run the institution like a modern organization",
    pains: ["Manual, paper-heavy administration", "Disconnected finance, HR and academic data", "Difficulty demonstrating ROI on technology spend"],
    solutions: ["Centralized admin control center", "Unified data across every department", "Transparent analytics tied to institutional goals"],
    benefits: ["Lower operational overhead", "Better strategic visibility", "A platform that scales with enrollment"],
  },
  {
    icon: Briefcase,
    name: "Placement Cell",
    tagline: "From spreadsheets to a placement engine",
    pains: ["Drives and applications tracked over email", "No clear picture of offer conversion rates", "Manual resume and eligibility screening"],
    solutions: ["End-to-end drive and application tracking", "Live placement analytics and conversion funnels", "Automated eligibility filtering"],
    benefits: ["Higher offer conversion visibility", "Faster coordination with recruiters", "A placement record employers trust"],
  },
  {
    icon: ClipboardCheck,
    name: "Training & Placement",
    tagline: "Coordinate training with real outcomes",
    pains: ["Fragmented training schedules", "No link between training and placement outcomes", "Manual certification tracking"],
    solutions: ["Integrated training calendars and attendance", "Outcome tracking linked to placement data", "Digital certification records"],
    benefits: ["Clear ROI on training programs", "Better-prepared candidates", "Simplified compliance reporting"],
  },
  {
    icon: FileCheck2,
    name: "Examination Cell",
    tagline: "Exams, without the paper trail",
    pains: ["Manual exam scheduling and seating", "Result compilation errors", "Slow grievance resolution"],
    solutions: ["Digital exam scheduling and hall allocation", "Automated result compilation and validation", "Trackable grievance workflows"],
    benefits: ["Fewer scheduling conflicts", "Faster, more accurate results", "Transparent grievance handling"],
  },
  {
    icon: Network,
    name: "Admissions",
    tagline: "A smoother path from inquiry to enrollment",
    pains: ["Manual application tracking", "Slow follow-up with prospective students", "No visibility into funnel drop-off"],
    solutions: ["Digital application and document tracking", "Automated follow-up notifications", "Funnel analytics from inquiry to enrollment"],
    benefits: ["Higher conversion from inquiry to admission", "Faster processing times", "Data-driven admissions strategy"],
  },
  {
    icon: Building2,
    name: "Department Coordinators",
    tagline: "Coordinate staff and curriculum with ease",
    pains: ["Manual staff and room allocation", "Curriculum updates lost in email chains", "No shared view of departmental performance"],
    solutions: ["Digital staff and resource allocation", "Centralized curriculum and document management", "Departmental analytics dashboards"],
    benefits: ["Less coordination overhead", "Fewer scheduling conflicts", "Clear performance visibility"],
  },
  {
    icon: Heart,
    name: "Parents",
    tagline: "Stay informed, without chasing updates",
    pains: ["Limited visibility into attendance and grades", "Missed fee deadlines and notices", "No direct channel to faculty"],
    solutions: ["Real-time attendance and grade visibility", "Automated fee and notice reminders", "Direct, moderated communication with faculty"],
    benefits: ["Peace of mind without micromanaging", "Fewer missed deadlines", "A trusted line to the institution"],
  },
];

export default function Solutions() {
  useSeo({
    title: "Solutions",
    description: "See how Campus Connect solves real problems for Students, Faculty, Management, Placement Cell, Admissions and every campus role.",
    path: "/solutions",
  });
  const [active, setActive] = useState(0);
  const a = audiences[active];

  return (
    <>
      <PageHero
        eyebrow="Solutions by Role"
        title={<>Built for <span className="text-gradient">every seat</span> on campus</>}
        description="Every role on campus has different pain points. Campus Connect solves them all from one connected platform."
      />

      <Section className="!pt-0">
        <div className="flex flex-wrap justify-center gap-2">
          {audiences.map((item, i) => (
            <button
              key={item.name}
              onClick={() => setActive(i)}
              className={`flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
                active === i ? "bg-grad-primary text-white shadow-softer" : "glass text-paragraph hover:text-heading"
              }`}
            >
              <item.icon size={14} /> {item.name}
            </button>
          ))}
        </div>

        <Reveal key={active} className="mt-14">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-4">
              <IconTile icon={a.icon} size="lg" />
              <div>
                <h2 className="font-display text-2xl font-extrabold text-heading sm:text-3xl">{a.name}</h2>
                <p className="text-paragraph">{a.tagline}</p>
              </div>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-card border border-borderc bg-white p-7 shadow-softer">
                <h3 className="flex items-center gap-2 font-semibold text-heading">
                  <XCircle size={18} className="text-red-400" /> Pain Points
                </h3>
                <ul className="mt-4 space-y-3">
                  {a.pains.map((p) => (
                    <li key={p} className="text-sm leading-relaxed text-paragraph">{p}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-card border border-primary/20 bg-primary/5 p-7 shadow-softer">
                <h3 className="flex items-center gap-2 font-semibold text-heading">
                  <CheckCircle2 size={18} className="text-primary" /> How Campus Connect Solves It
                </h3>
                <ul className="mt-4 space-y-3">
                  {a.solutions.map((s) => (
                    <li key={s} className="text-sm leading-relaxed text-paragraph">{s}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-card border border-borderc bg-white p-7 shadow-softer">
              <h3 className="font-semibold text-heading">Benefits</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {a.benefits.map((b) => (
                  <div key={b} className="rounded-2xl bg-section p-4 text-sm text-paragraph">{b}</div>
                ))}
              </div>
            </div>

            <div className="mt-8 text-center">
              <Button to="/book-demo" icon={ArrowRight}>See it for {a.name}</Button>
            </div>
          </div>
        </Reveal>
      </Section>

      <CTASection
        title="Not sure where to start?"
        description="Tell us about your institution and we'll show you the exact modules that matter for your team."
      />
    </>
  );
}
