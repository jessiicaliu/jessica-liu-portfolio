import { motion } from "framer-motion";
import { X, Sparkles, Code2, Play } from "lucide-react";
import type { Project } from "@/components/ProjectCard";

const SectionLabel = ({ icon: Icon, label }: { icon: React.ElementType; label: string }) => (
  <div className="flex items-center gap-2 mb-4">
    <Icon className="w-3.5 h-3.5 text-primary/55" />
    <span className="font-sans text-xs text-primary/55 uppercase tracking-[0.2em] font-semibold">
      {label}
    </span>
  </div>
);

const DemoSection = ({ demoVideo }: { demoVideo?: string }) => (
  <div className="mb-8">
    <SectionLabel icon={Play} label="Demo" />
    {demoVideo ? (
      <div className="rounded-2xl overflow-hidden border border-primary/10 w-full max-w-md mx-auto aspect-[16/7]">
        <video src={demoVideo} controls className="w-full h-full object-cover" preload="metadata" />
      </div>
    ) : (
      <div className="rounded-2xl border border-dashed border-primary/15 bg-pink-soft/10 w-full max-w-md mx-auto aspect-[16/7] flex flex-col items-center justify-center gap-3">
        <div className="w-12 h-12 rounded-full bg-pink-soft/40 flex items-center justify-center">
          <Play className="w-5 h-5 text-primary/40" />
        </div>
        <p className="font-sans text-sm text-foreground/35">Demo video coming soon!</p>
      </div>
    )}
  </div>
);

const HighlightsSection = ({ highlights }: { highlights: string[] }) => (
  <div className="mb-8">
    <SectionLabel icon={Sparkles} label="Highlights" />
    <div className="space-y-2.5">
      {highlights.map((h, i) => (
        <motion.div
          key={h}
          className="flex items-start gap-3 font-sans text-sm text-foreground/60"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 + i * 0.08 }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary/35 mt-1.5 shrink-0" />
          {h}
        </motion.div>
      ))}
    </div>
  </div>
);

const TechSection = ({ tech }: { tech: string[] }) => (
  <div>
    <SectionLabel icon={Code2} label="Built With" />
    <div className="flex flex-wrap gap-2">
      {tech.map((t, i) => (
        <motion.span
          key={t}
          className="font-sans text-xs px-3 py-1.5 rounded-full bg-pink-soft/40 text-primary/65 border border-primary/8 font-medium"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 + i * 0.05 }}
        >
          {t}
        </motion.span>
      ))}
    </div>
  </div>
);

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => (
  <motion.div
    className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
  >
    <motion.div
      className="absolute inset-0 bg-pink-soft/30 backdrop-blur-md"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    />

    <motion.div
      className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto bg-white/95 backdrop-blur-xl rounded-3xl border border-primary/12 shadow-2xl"
      initial={{ scale: 0.92, y: 30 }}
      animate={{ scale: 1, y: 0 }}
      exit={{ scale: 0.92, y: 30, opacity: 0 }}
      transition={{ type: "spring", damping: 30, stiffness: 300 }}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-30 p-2 rounded-full bg-pink-soft/40 backdrop-blur-sm border border-primary/10 text-foreground/50 hover:text-foreground hover:border-primary/20 transition-all duration-200"
      >
        <X className="w-4 h-4" />
      </button>

      <div className="relative px-8 pt-8 pb-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-soft/25 to-transparent pointer-events-none" />
        <div className="relative">
          <p className="font-sans text-[13px] text-primary/65 font-medium mb-1.5">
            {project.tagline.charAt(0).toUpperCase() + project.tagline.slice(1)} · {project.year}
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground/90">{project.name}</h2>
        </div>
      </div>

      <div className="px-8 pb-8">
        <p className="font-sans text-sm text-foreground/55 leading-relaxed mb-8">
          {project.description}
        </p>
        <DemoSection demoVideo={project.demoVideo} />
        <HighlightsSection highlights={project.highlights} />
        <TechSection tech={project.tech} />
      </div>
    </motion.div>
  </motion.div>
);

export default ProjectModal;
