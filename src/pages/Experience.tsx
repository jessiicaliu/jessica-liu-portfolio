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
    company: "Ontario Ministry of Agriculture, Food and Agribusiness (OMAFA)",
    role: "Software Developer",
    period: "Jan 2026 - Apr 2026",
    techTerms: ["RAG", "Azure OpenAI", "FastAPI", "React", "Tailwind", "Crawl4AI", "Python", "JavaScript"],
    bullets: [
      "Architected a production-grade multimodal RAG chatbot from 0 to 1 that queries 300+ agricultural publications and returns citation-backed answers with exact page references, powered by a custom semantic retrieval pipeline using Azure OpenAI, embedding-based indexing, and vector similarity search", 
      "Owned the full system stack from a PDF ingestion pipeline and FastAPI backend to a React and Tailwind chat interface with real-time streaming and image upload support; met with widespread acclaim and on track to launch as an official Ontario government resource", 
      "Built an AI-powered Python system using Crawl4AI to monitor 80+ stakeholder websites; leveraged Azure OpenAI to identify relevant subpages and extract required information, presenting results in a searchable viewer with an embedded chatbot; replaced manual research workflows and actively used internally", 
      "Developed a Python automation tool that extracts and validates data from government program application PDFs, applying custom parsing, cross-field validation logic, and automated Excel report generation; cut months of manual processing to seconds and adopted as a permanent internal tool", 
      "Shipped a JavaScript web application for external use featuring hydraulic calculations for water system design, multi-step UI state management, client-side PDF generation, and full English/French localization support"
    ],
  },
  {
    company: "University of Waterloo - Faculty of Engineering",
    role: "Data Analyst",
    period: "May 2025 - Aug 2025",
    techTerms: ["Power BI", "Google Analytics", "Looker Studio", "Jira"],
    bullets: [
      "Developed web pages for the Faculty of Engineering website, serving content for 5,000+ monthly visitors",
      "Built a Power BI dashboard integrating attendance and application data to analyze recruitment trends",
      "Monitored web and user engagement metrics using Google Analytics and Looker Studio, delivering monthly performance insights",
      "Resolved Jira tickets related to website issues and platform maintenance"
    ],
  },
  {
    company: "Project Tech Careers",
    role: "Full Stack Developer",
    period: "Apr 2025 - Aug 2025",
    techTerms: ["React", "Stripe", "AWS Amplify", "AWS Lambda", "DynamoDB"],
    bullets: [
      "Built an end-to-end registration and payment system using React, Stripe, and AWS Amplify, handling secure transactions for 70+ participants",
      "Implemented backend systems with AWS Amplify, AWS Lambda, and DynamoDB to manage role-based access across admin and participant roles",
    ],
  },
  {
    company: "TechNova Hackathon",
    role: "UI/UX Designer",
    period: "Mar 2025 - Aug 2025",
    techTerms: ["Figma"],
    bullets: [
      "Designed high-fidelity Figma prototypes and UI components for the hackathon website with consistent branding and layouts",
      "Collaborated with developers to translate designs into responsive frontend components and production UI features",
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
