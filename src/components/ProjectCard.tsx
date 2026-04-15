import { motion } from "framer-motion";
import { Link } from "lucide-react";

export type Project = {
  name: string;
  year: string;
  tagline: string;
  description: string;
  tech: string[];
  highlights: string[];
  link: string;
  demoVideo?: string;
};

const ProjectCard = ({
  project,
  index,
}: {
  project: Project;
  index: number;
}) => (
  <motion.a
    href={project.link}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative cursor-pointer rounded-[16px] p-4 md:p-5 transition-all duration-300 flex flex-col gap-2 min-h-[160px] border border-primary/10 ring-1 ring-inset ring-pink-400/40"
    style={{
      background: "linear-gradient(135deg, rgba(255,255,255,0.55) 60%, hsl(340,72%,98%) 100%)",
      boxShadow: "0 2px 12px -4px hsl(340 50% 80% / 0.12)",
      backdropFilter: "blur(8px)",
    }}
    initial={{ opacity: 0, y: 6 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.35, delay: index * 0.07 }}
    whileHover={{ y: -3, scale: 1.01 }}
  >
    <div className="flex items-center justify-between mb-1">
      <div>
        <h3 className="font-display text-base md:text-lg text-foreground/90 group-hover:text-primary transition-colors duration-300 mb-2">
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
        <Link className="w-3 h-3 text-primary/40 group-hover:text-primary/80 transition-all duration-300" />
      </motion.div>
    </div>

    <p className="font-sans text-[11px] md:text-xs text-foreground/70 leading-snug mb-1">
      {project.description}
    </p>

    <div className="flex flex-wrap gap-1 mt-auto">
      {project.tech.map((t) => (
        <span
          key={t}
          className="font-sans text-[10px] px-2 py-0.5 rounded-full bg-primary/5 text-primary/60 border border-primary/8 font-medium"
        >
          {t}
        </span>
      ))}
    </div>
  </motion.a>
);

export default ProjectCard;
