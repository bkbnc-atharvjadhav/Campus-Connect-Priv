import {
  GraduationCap,
  Users,
  Building2,
  Sparkles,
  BellRing,
  MessageSquareText,
  BarChart3,
  FileText,
  ShieldCheck,
  Briefcase,
  PartyPopper,
  Contact as ContactIcon,
  type LucideIcon,
} from "lucide-react";

export interface ModuleItem {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const coreModules: ModuleItem[] = [
  { icon: GraduationCap, title: "Student Portal", description: "Attendance, grades, timetables and resources in one calm, unified view." },
  { icon: Users, title: "Faculty Workspace", description: "Course management, grading and communication without the paperwork." },
  { icon: Building2, title: "Department Hub", description: "Coordinate curriculum, resources and staff across every department." },
  { icon: PartyPopper, title: "Club Management", description: "Run clubs, events and memberships with built-in approvals and budgets." },
  { icon: ContactIcon, title: "Alumni Network", description: "Keep alumni engaged with mentorship, events and giving, all in-platform." },
  { icon: Briefcase, title: "Placement Cell", description: "Track drives, applications and offers with live analytics for TPOs." },
  { icon: ShieldCheck, title: "Admin Control Center", description: "Institution-wide oversight with granular, role-based permissions." },
  { icon: Sparkles, title: "AI Assist", description: "AI-generated insights, summaries and recommendations across every module." },
  { icon: BellRing, title: "Notifications Engine", description: "Smart, prioritized alerts that reach the right person at the right time." },
  { icon: MessageSquareText, title: "Communication Hub", description: "Announcements, messaging and circulars replacing scattered WhatsApp groups." },
  { icon: BarChart3, title: "Analytics Dashboard", description: "Real-time visibility into attendance, performance and institutional health." },
  { icon: FileText, title: "Reports & Compliance", description: "Auto-generated reports for accreditation, audits and management reviews." },
];
