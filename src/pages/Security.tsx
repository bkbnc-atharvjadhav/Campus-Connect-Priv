import { Server, Lock, KeyRound, DatabaseBackup, ShieldCheck, Cloud, Database, EyeOff, AlertTriangle, ListChecks } from "lucide-react";
import { useSeo } from "@/lib/useSeo";
import Section, { Eyebrow } from "@/components/ui/Section";
import PageHero from "@/components/ui/PageHero";
import Reveal, { StaggerGroup, StaggerItem } from "@/components/ui/Reveal";
import IconTile from "@/components/ui/IconTile";
import Button from "@/components/ui/Button";
import CTASection from "@/components/sections/CTASection";

const pillars = [
  { icon: Server, title: "Infrastructure", desc: "Deployed on redundant, cloud-native infrastructure with automatic failover and monitoring." },
  { icon: Lock, title: "Encryption", desc: "All data is encrypted in transit via TLS and at rest using industry-standard encryption." },
  { icon: KeyRound, title: "Authentication", desc: "Secure authentication with support for strong password policies and session management." },
  { icon: DatabaseBackup, title: "Backups", desc: "Automated, regular backups with tested recovery procedures to prevent data loss." },
  { icon: ShieldCheck, title: "Role-Based Access", desc: "Every user sees only what their role permits — least-privilege access by default." },
  { icon: Cloud, title: "Cloudflare Protection", desc: "DDoS mitigation, WAF and edge protection powered by Cloudflare." },
  { icon: Database, title: "Supabase Security", desc: "Managed Postgres with row-level security policies enforced at the database layer." },
  { icon: EyeOff, title: "Privacy", desc: "Institutional and personal data is never sold or shared with third parties for advertising." },
];

const compliance = [
  "Data minimization across all modules",
  "Configurable data retention policies per institution",
  "Ongoing third-party security review roadmap",
  "Alignment with applicable Indian data protection regulations",
];

export default function Security() {
  useSeo({
    title: "Security",
    description: "How Campus Connect protects institutional data — infrastructure, encryption, authentication, backups and compliance.",
    path: "/security",
  });

  return (
    <>
      <PageHero
        eyebrow="Security"
        title={<>Security you can <span className="text-gradient">explain to your board</span></>}
        description="Institutional data deserves enterprise-grade protection. Here's exactly how Campus Connect keeps it safe."
      />

      <Section>
        <StaggerGroup className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <StaggerItem key={p.title}>
              <div className="h-full rounded-card border border-borderc bg-white p-7 shadow-softer">
                <IconTile icon={p.icon} />
                <h3 className="mt-5 font-display text-lg font-bold text-heading">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paragraph">{p.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </Section>

      <Section tone="muted">
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <IconTile icon={AlertTriangle} size="lg" />
            <h2 className="mt-6 text-3xl font-extrabold text-heading sm:text-4xl">Responsible Disclosure</h2>
            <p className="mt-5 leading-relaxed text-paragraph">
              If you believe you've found a security vulnerability in Campus Connect, we want to hear from you. Please report it privately so we can investigate and respond before any public disclosure.
            </p>
            <Button href="mailto:security@campusconnect.app" variant="secondary" className="mt-6">Report a Vulnerability</Button>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="rounded-card border border-borderc bg-white p-8 shadow-softer">
              <div className="flex items-center gap-3">
                <IconTile icon={ListChecks} size="sm" />
                <h3 className="font-display font-bold text-heading">Compliance Roadmap</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {compliance.map((c) => (
                  <li key={c} className="text-sm leading-relaxed text-paragraph">{c}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <CTASection
        title="Have a security question before you commit?"
        description="Talk to our team directly about how Campus Connect fits your institution's compliance requirements."
        primaryLabel="Contact Security Team"
        primaryTo="/contact"
      />
    </>
  );
}
