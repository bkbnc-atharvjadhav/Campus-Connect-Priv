import { motion } from "framer-motion";
import { Home, ArrowRight, Compass } from "lucide-react";
import { useSeo } from "@/lib/useSeo";
import Button from "@/components/ui/Button";
import MeshBackground from "@/components/ui/MeshBackground";

export default function NotFound() {
  useSeo({
    title: "Page Not Found",
    description: "The page you're looking for doesn't exist.",
    path: "/404",
  });

  return (
    <div className="relative flex min-h-[85vh] items-center justify-center overflow-hidden px-6 pt-24">
      <MeshBackground />
      <div className="relative mx-auto max-w-lg text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-grad-primary text-white shadow-glow"
        >
          <motion.div
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Compass size={40} />
          </motion.div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="mt-8 font-display text-6xl font-extrabold text-heading"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="mt-4 text-lg text-paragraph"
        >
          Looks like this page took an unscheduled leave of absence. Let's get you back on campus.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Button to="/" icon={Home} size="lg">Return Home</Button>
          <Button to="/contact" variant="secondary" icon={ArrowRight} size="lg">Contact Support</Button>
        </motion.div>
      </div>
    </div>
  );
}
