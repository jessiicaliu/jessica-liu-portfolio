import { motion } from "framer-motion";
import ProjectCard, { type Project } from "@/components/ProjectCard";

const projects: Project[] = [
  {
    name: "TellTale",
    year: "2026",
    tagline: "Interview Prep Platform",
    description:
      "Generates role-specific mock interview questions from a job description, tracks gaze and posture in real time via camera, scores responses for filler words and STAR-method adherence, and compiles it all into a coaching report.",
    tech: ["Next.js", "TypeScript", "Supabase", "MediaPipe", "Groq", "Whisper"],
    highlights: [
      "Inference pipeline on Groq generating role-specific questions from parsed job descriptions in under 800ms",
      "MediaPipe pose and gaze tracking running fully client-side at 30+ FPS with no backend dependency",
      "Whisper transcription pipeline scoring filler-word density and STAR-method structure, compiled into weighted coaching reports",
    ],
    link: "https://github.com/jessiicaliu/telltale",
  },
  {
    name: "BuyOrBye",
    year: "2026",
    tagline: "Shopping Decision Engine",
    description:
      "Paste an Amazon link and get a Buy or Skip verdict. Runs 6 parallel agents to pull live pricing, reviews, and competitor data, then scores it all into a weighted recommendation.",
    tech: ["React", "Python", "FastAPI", "LangGraph", "LangChain", "Supabase", "OpenAI"],
    highlights: [
      "LangGraph state machine orchestrating 6 parallel agents to score and deliver weighted Buy/Skip verdicts",
      "Multi-tenant auth with OAuth 2.0, JWT, and Supabase RLS enforcing per-user row-level data isolation",
      "Live pricing and competitor data fetched via Tavily and Rainforest API and fed into the decision pipeline",
    ],
    link: "https://github.com/jessiicaliu/BuyorBye",
  },
  {
    name: "Rewindify",
    year: "2025",
    tagline: "Music History Tracker",
    description:
      "Pulls a full Spotify listening history and classifies every track as Ghost, Fading, or Rising based on how play frequency shifted over time.",
    tech: ["Next.js", "TypeScript", "Supabase", "Spotify API", "NextAuth.js"],
    highlights: [
      "Set-based TypeScript algorithm tracking listening state transitions across time windows in Spotify history",
      "Custom scoring model classifying tracks as Ghost, Fading, or Rising based on play frequency deltas over time",
      "Cut load time by 60% by parallelizing Spotify API calls across Next.js Server Components",
    ],
    link: "https://github.com/jessiicaliu/rewindify",
  },
];

const Projects = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 pt-10 pb-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-[11px] font-sans uppercase tracking-[0.3em] text-primary/45 mb-3 font-semibold">
            ✦ Selected Work
          </p>
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
