import { ReactNode, useState } from "react";
import MeshBackground from "../ui/MeshBackground";

export interface LegalSection {
  id: string;
  title: string;
  content: ReactNode;
}

export default function LegalLayout({
  eyebrow,
  title,
  updated,
  sections,
}: {
  eyebrow: string;
  title: string;
  updated: string;
  sections: LegalSection[];
}) {
  const [active, setActive] = useState(sections[0]?.id);

  return (
    <>
      <div className="relative overflow-hidden pt-40 pb-16 md:pt-48">
        <MeshBackground />
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <span className="inline-flex rounded-full border border-borderc bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary shadow-softer">
            {eyebrow}
          </span>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-heading sm:text-5xl">{title}</h1>
          <p className="mt-4 text-sm text-muted">Last updated: {updated}</p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 pb-28 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[240px_1fr]">
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-1 border-l border-borderc pl-4">
              {sections.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setActive(s.id)}
                  className={`block rounded-md px-2 py-1.5 text-sm transition-colors ${
                    active === s.id ? "font-semibold text-primary" : "text-paragraph hover:text-heading"
                  }`}
                >
                  {s.title}
                </a>
              ))}
            </div>
          </aside>

          <div className="space-y-14">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="scroll-mt-28">
                <h2 className="font-display text-2xl font-bold text-heading">{s.title}</h2>
                <div className="prose-legal mt-4 space-y-4 leading-relaxed text-paragraph">{s.content}</div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
