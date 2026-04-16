import { motion } from "framer-motion";
import { Link } from "lucide-react";

export type Project = {
  name: string;
  year: string;
  tagline: string;
  description: string;
  tech: string[];
  link: string;
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
    className="group relative flex flex-col rounded-2xl p-5 overflow-hidden cursor-pointer border transition-all duration-200"
    style={{ borderColor: "rgba(255, 208, 215, 0.45)" }}
    initial={{ opacity: 0, y: 5 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{
      opacity: { duration: 0.3, delay: index * 0.07 },
      y: { duration: 0.3, delay: index * 0.07 },
      borderColor: { duration: 0.15, delay: 0 },
      default: { duration: 0.15 }
    }}
    whileHover={{
      borderColor: "hsla(340, 72%, 62%, 0.3)",
    }}
  >
    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
      style={{ background: "linear-gradient(to right, hsl(340,72%,98.5%) 0%, transparent 100%)" }}
    />
    <div className="relative flex items-start justify-between mb-3">
      <div className="flex-1 min-w-0">
        <h3 className="font-sans font-medium tracking-tight text-[1rem] text-foreground/80 group-hover:text-primary transition-colors duration-200 mb-0.5">
          {project.name}
        </h3>
        <p className="font-sans text-[11px] text-primary/45 font-medium group-hover:text-primary/60 transition-colors duration-200">
          {project.tagline}
        </p>
      </div>
      <div className="shrink-0 ml-3 w-6 h-6 rounded-full flex items-center justify-center bg-transparent border border-primary/10 group-hover:bg-primary/5 group-hover:border-primary/25 transition-all duration-200">
        <Link className="w-3 h-3 text-primary/30 group-hover:text-primary/70 transition-colors duration-200" />
      </div>
    </div>

    <p className="relative font-sans text-[12px] text-foreground/45 leading-relaxed mb-4 flex-1 group-hover:text-foreground/65 transition-colors duration-200">
      {project.description}
    </p>

    <div className="relative flex flex-wrap gap-1 mt-auto">
      {project.tech.map((t) => (
        <span
          key={t}
          className="font-sans text-[10px] px-2 py-0.5 rounded-full bg-primary/2 text-primary/50 border border-primary/10 font-medium group-hover:bg-primary/5 group-hover:text-primary/70 group-hover:border-primary/20 transition-all duration-200"
        >
          {t}
        </span>
      ))}
    </div>
  </motion.a>
);

export default ProjectCard;
