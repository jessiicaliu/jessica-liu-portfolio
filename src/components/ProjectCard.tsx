import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export type Project = {
  name: string;
  year: string;
  tagline: string;
  description: string;
  tech: string[];
  highlights: string[];
  demoVideo?: string;
};

const ProjectCard = ({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) => (
  <motion.div
    className="group relative cursor-pointer rounded-xl bg-white/80 border border-primary/10 p-4 md:p-5 hover:shadow-lg hover:border-primary/30 transition-all duration-300 flex flex-col gap-2 min-h-[160px]"
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.45, delay: index * 0.08 }}
    onClick={onOpen}
    whileHover={{ y: -3, scale: 1.01 }}
  >
    <div className="flex items-center justify-between mb-1">
      <div>
        <h3 className="font-display text-lg md:text-xl text-foreground/90 group-hover:text-primary transition-colors duration-300 mb-3">
          {project.name}
        </h3>
        <p className="font-sans text-[12px] text-primary/55 font-medium leading-snug mb-1.5">
          {project.tagline.charAt(0).toUpperCase() + project.tagline.slice(1)} · {project.year}
        </p>
      </div>
      <motion.div
        className="flex items-center gap-1 px-2 py-1 rounded-full bg-primary/5 border border-primary/10 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-300"
        whileHover={{ scale: 1.07 }}
      >
        <ArrowUpRight className="w-3 h-3 text-primary/40 group-hover:text-primary/80 transition-all duration-300" />
      </motion.div>
    </div>

    <p className="font-sans text-xs md:text-sm text-foreground/70 leading-snug mb-1">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-1 mt-auto">
      {project.tech.slice(0, 3).map((t) => (
        <span
          key={t}
          className="font-sans text-[10px] px-2 py-0.5 rounded-full bg-primary/5 text-primary/60 border border-primary/8 font-medium"
        >
          {t}
        </span>
      ))}
      {project.tech.length > 3 && (
        <span className="font-sans text-[10px] px-2 py-0.5 rounded-full bg-primary/5 text-primary/40 border border-primary/8 font-medium">
          +{project.tech.length - 3} more
        </span>
      )}
    </div>
  </motion.div>
);

export default ProjectCard;
