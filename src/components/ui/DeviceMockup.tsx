import { ReactNode } from "react";
import { motion } from "framer-motion";

export function BrowserMockup({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`overflow-hidden rounded-card border border-borderc bg-white shadow-soft ${className}`}
      style={{ perspective: 1000 }}
    >
      <div className="flex items-center gap-2 border-b border-borderc bg-section px-5 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        <div className="ml-4 h-5 flex-1 rounded-md bg-white/70" />
      </div>
      <div className="p-6">{children}</div>
    </motion.div>
  );
}

export function PhoneMockup({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className={`mx-auto w-64 rounded-[2.5rem] border-[6px] border-dark bg-dark p-2 shadow-soft ${className}`}
    >
      <div className="h-5 w-full" />
      <div className="rounded-[1.75rem] bg-white p-4">{children}</div>
      <div className="mx-auto mt-2 h-1 w-24 rounded-full bg-white/20" />
    </motion.div>
  );
}

export function SkeletonBar({ width = "100%" }: { width?: string }) {
  return <div className="h-3 rounded-full bg-section" style={{ width }} />;
}
