import { motion } from "framer-motion";
import ProjectCard, { type Project } from "@/components/ProjectCard";

const projects: Project[] = [
  {
    name: "TellTale",
    year: "2026",
    tagline: "Interview prep platform",
    description:
      "Generates mock interview questions from job descriptions, evaluates responses, and uses gaze and posture signals to produce coaching feedback.",
    tech: ["Next.js", "TypeScript", "Supabase", "MediaPipe", "Groq", "Whisper"],
    link: "https://github.com/jessiicaliu/telltale",
  },
  {
    name: "BuyOrBye",
    year: "2026",
    tagline: "Shopping decision engine",
    description:
      "Analyzes Amazon links using multiple agents to aggregate pricing, reviews, and alternatives into a buy/skip recommendation.",
    tech: ["React", "Python", "FastAPI", "LangGraph", "LangChain", "Supabase", "OpenAI"],
    link: "https://github.com/jessiicaliu/BuyorBye",
  },
  {
    name: "Rewindify",
    year: "2025",
    tagline: "Music history tracker",
    description:
      "Classifies Spotify listening history into trends such as Ghost, Fading, and Rising by analyzing how track frequency changes over time.",
    tech: ["Next.js", "TypeScript", "Supabase", "Spotify API"],
    link: "https://github.com/jessiicaliu/rewindify",
  },
];

const Projects = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 pt-10 pb-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="inline-block font-display text-3xl md:text-4xl leading-[1.32] pt-1 pb-2 text-primary font-medium">
            Projects
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
