import { useRef, useState } from "react";
import { motion } from "framer-motion";

type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
  techTerms?: string[];
};

const experiences: ExperienceEntry[] = [
  {
    company: "Ontario Ministry of Agriculture",
    role: "Software Engineer Intern (AI)",
    period: "Jan 2026 - Apr 2026",
    techTerms: ["RAG", "YOLO", "Python", "FastAPI", "React", "Azure", "0 to 1", "agentic ML"],
    bullets: [
      "Took multiple production tools from 0 to 1 for the Ontario government, owning each end to end, including a RAG chatbot on track to launch as an official provincial resource and an agentic ML system for crop detection and automated response",
      "Worked full-stack across Python, FastAPI, React, and Azure, from system design and backend APIs to frontend interfaces"
    ],
  },
  {
    company: "University of Waterloo - Faculty of Engineering",
    role: "Web Developer",
    period: "May 2025 - Aug 2025",
    techTerms: ["Power BI", "Google Analytics", "Python"],
    bullets: [
      "Developed and maintained production web pages for the Faculty of Engineering site, and wrote Python tooling to support a platform migration",
      "Used Power BI and Google Analytics to drive data-informed decisions across admissions and web performance"
    ],
  },
  {
    company: "Project Tech Careers",
    role: "Full Stack Developer",
    period: "Apr 2025 - Aug 2025",
    techTerms: ["React", "Stripe", "AWS Lambda", "PostgreSQL"],
    bullets: [
      "Engineered a full-stack registration and payment system in React, Stripe, AWS Lambda, and PostgreSQL, with role-based access for admins and participants",
    ],
  },
  {
    company: "TechNova Hackathon",
    role: "UI/UX Designer",
    period: "Mar 2025 - Aug 2025",
    techTerms: ["Figma"],
    bullets: [
      "Designed Figma components and a design system for the hackathon website, and shaped the brand identity across web, social, and sponsor materials",
    ],
  },
];

const highlightTerms = (text: string, terms: string[]) => {
  if (!terms.length) return text;
  const escaped = terms.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`(${escaped.join("|")})`, "g");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    terms.includes(part) ? (
      <span key={i} className="text-primary/80 font-semibold">
        {part}
      </span>
    ) : (
      part
    )
  );
};

const CardContent = ({ exp }: { exp: ExperienceEntry }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMouse({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
  <motion.div
    whileHover={{ y: -2 }}
    transition={{ type: "spring", stiffness: 300, damping: 24 }}
  >
    <div
      ref={ref}
      className="relative rounded-[16px] overflow-hidden transition-all duration-500 border border-primary/10 ring-1 ring-inset ring-pink-400/40"
      style={{
        background: "linear-gradient(135deg, rgba(255,255,255,0.94) 60%, hsl(340,72%,96% / 0.88) 90%)",
        boxShadow: "0 2px 12px -4px hsl(340 50% 80% / 0.12)",
        backdropFilter: "blur(8px)",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Cloudy mouse-follow glow */}
      <div
        className="absolute inset-0 rounded-[16px] pointer-events-none transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `
            radial-gradient(ellipse 500px 350px at ${mouse.x}px ${mouse.y}px, hsl(340 60% 75% / 0.035), transparent 30%),
            radial-gradient(ellipse 320px 240px at ${mouse.x - 40}px ${mouse.y + 30}px, hsl(320 50% 80% / 0.02), transparent 30%)
          `,
        }}
      />

        <div className="p-5 md:p-6">
          {/* Header row: role + period pill */}
          <div className="flex items-start justify-between gap-4 mb-1">
            <h3 className="font-display text-[1.2rem] md:text-[1.35rem] text-foreground/90 leading-snug">
              {exp.role}
            </h3>
            <span className="shrink-0 inline-block font-sans text-[10px] px-2 py-0.5 rounded-full mt-1 bg-primary/5 text-primary/60 border border-primary/8 font-bold">
              {exp.period}
            </span>
          </div>

          {/* Company */}
          <p className="font-sans text-[12px] text-primary/80 font-semibold leading-snug mb-4">
            {exp.company}
          </p>

          {/* Bullets */}
          <ul className="space-y-2">
            {exp.bullets.map((bullet, j) => (
              <li
                key={j}
                className="font-sans text-[12.5px] leading-[1.6] text-foreground/60 flex items-start gap-2.5 group/b"
              >
                <span
                  className="mt-[7px] shrink-0 w-[4px] h-[4px] rounded-full group-hover/b:scale-150 transition-all duration-300"
                  style={{
                    background: "linear-gradient(135deg, hsl(340 72% 62% / 0.75), hsl(320 50% 70% / 0.65))",
                  }}
                />
                <span className="group-hover/b:text-foreground/75 transition-colors duration-300">
                  {highlightTerms(bullet, exp.techTerms ?? [])}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 pt-20 pb-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-[11px] font-sans uppercase tracking-[0.35em] text-primary/40 mb-3 font-semibold">
            ✦ Where I've Been
          </p>
          <h1 className="font-display text-4xl md:text-5xl leading-[1.32] pt-1 pb-2 text-primary font-medium">Experience</h1>
        </motion.div>

        {/* Timeline */}
        <div>
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="relative pl-9 pb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: i * 0.07 }}
            >
              {/* Heart dot */}
              <motion.span
                className="absolute select-none"
                style={{ left: 1, top: 25, fontSize: 9, lineHeight: 1, color: "hsl(340 72% 62% / 0.6)" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 + 0.1, duration: 0.3 }}
              >
                ♥
              </motion.span>

              {/* Line segment growing downward */}
              {i < experiences.length - 1 && (
                <motion.div
                  className="absolute w-px"
                  style={{
                    left: 5,
                    top: 37,
                    bottom: 0,
                    background: "linear-gradient(to bottom, hsl(340 72% 62% / 0.2), hsl(340 72% 62% / 0.05))",
                    transformOrigin: "top",
                  }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.07 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                />
              )}

              <CardContent exp={exp} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
