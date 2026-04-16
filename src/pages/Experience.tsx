import { motion } from "framer-motion";

type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  description: string;
};

const experiences: ExperienceEntry[] = [
  {
    company: "Ontario Ministry of Agriculture",
    role: "AI Engineer Intern",
    period: "Jan 2026 – Apr 2026",
    description: "RAG, agentic AI, and data pipelines",
  },
  {
    company: "University of Waterloo",
    role: "Data Analyst Intern",
    period: "May 2025 – Aug 2025",
    description: "Data visualization, analytics, and reporting",
  },
  {
    company: "Project Tech Careers",
    role: "Full Stack Developer",
    period: "Apr 2025 – Aug 2025",
    description: "Registration and payments system",
  },
  {
    company: "TechNova Hackathon",
    role: "UI/UX Designer",
    period: "Mar 2025 – Sep 2025",
    description: "Website and graphic design",
  },
];

const Experience = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 pt-4 pb-10">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="font-display text-3xl md:text-4xl leading-[1.32] pt-1 pb-2 text-primary font-medium">
            Experience
          </h1>
        </motion.div>

        {/* Experience List */}
        <div className="flex flex-col">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="group relative py-6 px-1 transition-all duration-300"
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.3, delay: i * 0.07 }}
            >
              {/* Subtle background reveal on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ background: "linear-gradient(to right, hsl(340,72%,98.5%) 0%, transparent 100%)" }}
              />

              <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                {/* Info block */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-baseline gap-x-2.5 mb-1.5">
                    <h3 className="font-sans font-medium tracking-tight text-[1.05rem] text-foreground/80 group-hover:text-primary transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <span className="font-sans text-[12px] text-primary/50 font-medium whitespace-nowrap">
                      {exp.company}
                    </span>
                  </div>
                  <p className="font-sans text-[13px] text-foreground/45 leading-relaxed group-hover:text-foreground/65 transition-colors duration-300">
                    {exp.description}
                  </p>
                </div>

                {/* Period tag */}
                <div className="shrink-0 self-start sm:self-center">
                  <span className="font-sans text-[10px] text-foreground/30 font-medium tracking-wide whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
              </div>

              {/* Minimal Divider System */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px]">
                {/* Default Line (Minimal) */}
                <div className="absolute inset-0 bg-primary/10 group-hover:opacity-0 transition-opacity duration-300" />
                {/* Hover Gradient Line (Liu & Ministry of Ag Pinks) */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(to right, rgb(255,208,215) 0%, hsl(340, 72%, 62%) 100%)" }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
