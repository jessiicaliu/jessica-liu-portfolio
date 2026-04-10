import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard, { type Project } from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";

const projects: Project[] = [
  {
    name: "BuyOrBye",
    year: "2026",
    tagline: "AI Shopping Copilot",
    description:
      "An AI-assisted shopping copilot that helps users decide whether to buy now, wait, or skip by weighing price, use case, and alternatives.",
    tech: ["React", "Python", "LangChain", "JavaScript"],
    highlights: [
      "Smart price analysis with historical data",
      "Alternative product recommendations",
      "Natural language decision reasoning",
    ],
  },
  {
    name: "TrainVision",
    year: "2024",
    tagline: "Computer Vision Fitness",
    description:
      "Built a computer vision program to track exercise reps in real time using a webcam, and trained a model on custom exercises to adapt to individual movement patterns.",
    tech: ["HTML/CSS", "Python", "OpenCV"],
    highlights: [
      "Real-time webcam pose estimation",
      "Custom exercise model training",
      "Automatic rep counting & form feedback",
    ],
  },
  {
    name: "BudgetBuddy",
    year: "2024",
    tagline: "Financial Dashboard",
    description:
      "Built a financial tracker with user forms, automated calculations, and error validation, then designed a dynamic dashboard with pivot tables and graphs to visualize spending trends and insights.",
    tech: ["Excel", "VBA"],
    highlights: [
      "Automated expense categorization",
      "Interactive pivot table dashboards",
      "Visual spending trend analysis",
    ],
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <div className="px-6 md:px-16 lg:px-24 pt-20 pb-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-[11px] font-sans uppercase tracking-[0.3em] text-primary/45 mb-3 font-semibold">
            ✦ Selected Work
          </p>
              <h1 className="inline-block font-display text-4xl md:text-5xl leading-[1.32] pt-1 pb-2 text-primary font-medium">
            Projects
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.name}
              project={project}
              index={i}
              onOpen={() => setActiveProject(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeProject && (
          <ProjectModal
            project={activeProject}
            onClose={() => setActiveProject(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
