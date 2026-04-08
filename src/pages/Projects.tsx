import { ArrowUpRight } from "lucide-react";

type Project = {
  name: string;
  year: string;
  description: string;
  tech: string[];
};

const projects: Project[] = [
  {
    name: "BuyOrBye",
    year: "2026",
    description:
      "An AI-assisted shopping copilot that helps users decide whether to buy now, wait, or skip by weighing price, use case, and alternatives.",
    tech: ["React", "Python", "LangChain", "JavaScript"],
  },
  {
    name: "TrainVision",
    year: "2024",
    description:
      "Built a computer vision program to track exercise reps in real time using a webcam, and trained a model on custom exercises to adapt to individual movement patterns.",
    tech: ["HTML/CSS", "Python", "OpenCV"],
  },
  {
    name: "BudgetBuddy",
    year: "2024",
    description:
      "Built a financial tracker with user forms, automated calculations, and error validation, then designed a dynamic dashboard with pivot tables and graphs to visualize spending trends and insights.",
    tech: ["Excel", "VBA"],
  },
];

const Projects = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 pt-20 pb-24">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <p className="text-[11px] font-sans uppercase tracking-[0.3em] text-primary/45 mb-3 font-semibold">
            ✦ Selected Work
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-primary">Projects</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project) => (
            <div
              key={project.name}
              className="rounded-2xl bg-pink-soft/20 border border-primary/10 p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-display text-xl text-foreground/85">{project.name}</h3>
                  <p className="font-sans text-[11px] text-primary/40 uppercase tracking-[0.15em] mt-0.5 font-semibold">
                    {project.year}
                  </p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-primary/20 shrink-0 mt-1" />
              </div>

              <p className="font-sans text-sm text-foreground/50 leading-relaxed mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="font-sans text-[11px] px-2.5 py-1 rounded-full bg-background/70 text-primary/55 border border-primary/10 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
