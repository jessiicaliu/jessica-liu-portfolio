import { motion } from "framer-motion";
import type { ComponentType } from "react";
import Contact from "./Contact";
import Experience from "./Experience";
import Home from "./Home";
import Projects from "./Projects";
import Stack from "./Stack";

const SectionDivider = () => (
  <motion.div
    className="relative flex items-center justify-center h-16 px-8 md:px-16 lg:px-24"
    initial={{ opacity: 0, scaleX: 0.85 }}
    whileInView={{ opacity: 1, scaleX: 1 }}
    viewport={{ once: true, margin: "-20px" }}
    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
  >
    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-primary/30 to-primary/40" />
    <motion.span
      className="mx-4 text-xs text-primary/60 font-sans select-none"
      animate={{ opacity: [0.6, 1, 0.6], rotate: [0, 180, 360] }}
      transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
    >
      ✦
    </motion.span>
    <div className="flex-1 h-px bg-gradient-to-l from-transparent via-primary/30 to-primary/40" />
  </motion.div>
);

type SectionConfig = {
  id: string;
  Component: ComponentType;
};

const sections: SectionConfig[] = [
  { id: "about", Component: Home },
  { id: "experience", Component: Experience },
  { id: "projects", Component: Projects },
  { id: "stack", Component: Stack },
  { id: "contact", Component: Contact },
];

const ScrollableSite = () => {
  return (
    <main className="pb-24 md:pb-0">
      {sections.map(({ id, Component }, i) => (
        <div key={id}>
          <section id={id} className="scroll-mt-20">
            <Component />
          </section>
          {i < sections.length - 1 && <SectionDivider />}
        </div>
      ))}
    </main>
  );
};

export default ScrollableSite;
