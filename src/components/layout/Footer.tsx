import { Link } from "react-router-dom";
import { Sparkles, Twitter, Linkedin, Instagram, Github } from "lucide-react";
import { footerLinks } from "@/data/nav";

function FooterColumn({ title, links }: { title: string; links: { label: string; to: string }[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-white">{title}</h4>
      <ul className="mt-4 space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-sm text-white/60 transition-colors hover:text-white">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="bg-dark pt-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 pb-14 md:grid-cols-6">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-grad-primary text-white">
                <Sparkles size={18} strokeWidth={2.4} />
              </span>
              <span className="font-display text-lg font-extrabold text-white">Campus Connect</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              The AI-powered campus operating system for modern educational institutions.
            </p>
            <div className="mt-6 flex gap-3">
              {[Twitter, Linkedin, Instagram, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Platform" links={footerLinks.platform} />
          <FooterColumn title="Solutions" links={footerLinks.solutions} />
          <FooterColumn title="Company" links={footerLinks.company} />
          <FooterColumn title="Legal" links={footerLinks.legal} />
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 py-8 md:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Campus Connect. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Designed & Developed by Department of Computer Science, B.K. Birla Night College ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
