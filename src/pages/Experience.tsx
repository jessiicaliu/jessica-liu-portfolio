import { motion } from "framer-motion";

type ExperienceEntry = {
  company: string;
  role: string;
  period: string;
  bullets: string[];
};

const experiences: ExperienceEntry[] = [
  {
    company: "Ontario Ministry of Agriculture, Food and Agribusiness (OMAFA)",
    role: "Software Developer",
    period: "Jan 2026 — Apr 2026",
    bullets: ["[blank]", "[blank]", "[blank]"],
  },
  {
    company: "University of Waterloo - Faculty of Engineering",
    role: "Data Analyst",
    period: "May 2025 — Aug 2025",
    bullets: [
      "developed 20+ WCMS pages on the UW Engineering website, reaching 5000+ visitors monthly",
      "built a Power BI dashboard linking grad fair attendance to application trends for recruitment insights.",
      "resolved 50+ issues via Jira and trained colleagues on WCMS content updates.",
      "tracked site performance with Google Analytics and Looker Studio, delivering monthly traffic reports.",
    ],
  },
  {
    company: "Project Tech Careers",
    role: "Full Stack Developer",
    period: "Apr 2025 — Aug 2025",
    bullets: [
      "built a full registration and payment flow with React, Stripe, and AWS Amplify, handling secure transactions for 70+ participants.",
      "implemented role-based access control on the backend, separating admin and participant permissions across the platform.",
    ],
  },
  {
    company: "TechNova Hackathon",
    role: "UI/UX Designer",
    period: "Mar 2025 — Aug 2025",
    bullets: [
      "designed Figma prototypes and branded assets for the hackathon website, reaching 500+ prospective hackers.",
      "worked with developers to translate designs into functional website features.",
    ],
  },
];

type ExperienceItemProps = {
  exp: ExperienceEntry;
  i: number;
};

const ExperienceItem = ({ exp, i }: ExperienceItemProps) => {
  return (
    <div className="relative pl-10 md:pl-14">
      {/* Timeline dot */}
      <motion.div
        className="absolute left-0 top-5 flex items-center justify-center"
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.4, delay: i * 0.15 + 0.2, type: "spring", stiffness: 200 }}
      >
        {/* Outer ring pulse */}
        <motion.div
          className="absolute w-5 h-5 rounded-full bg-primary/20"
          animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0, 0.4] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        />
        {/* Inner dot */}
        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-primary to-pink-400 shadow-[0_0_8px_2px_rgba(var(--primary-rgb,219,39,119),0.35)] z-10" />
      </motion.div>

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: -18 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10"
      >
        <motion.div
          whileHover={{ y: -2 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="rounded-2xl border border-primary/10 bg-white/40 backdrop-blur-sm p-5 md:p-6 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_30px_-8px_rgba(0,0,0,0.13)] hover:border-primary/20 transition-all duration-300"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 sm:gap-4 mb-3">
            <div>
              <h3 className="font-display text-xl md:text-2xl text-foreground/85 leading-tight mb-0.5">
                {exp.role}
              </h3>
              <p className="font-sans text-sm text-primary/70 font-medium">{exp.company}</p>
            </div>
            <span className="self-start shrink-0 font-sans text-[11px] uppercase tracking-[0.18em] text-primary/50 font-semibold bg-primary/6 border border-primary/10 rounded-full px-3 py-1">
              {exp.period}
            </span>
          </div>

          <div className="h-px bg-gradient-to-r from-primary/10 via-primary/5 to-transparent mb-4" />

          <motion.ul
            className="space-y-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.15 + 0.25 }}
          >
            {exp.bullets.map((bullet, j) => (
              <motion.li
                key={j}
                className="font-sans text-sm text-foreground/50 flex items-start gap-2.5"
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.15 + j * 0.06 + 0.3 }}
              >
                <span className="mt-[5px] shrink-0 w-1 h-1 rounded-full bg-primary/40" />
                {bullet}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

const Experience = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 pt-20 pb-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[11px] font-sans uppercase tracking-[0.3em] text-primary/45 mb-3 font-semibold">
            ✦ Where I've Been
          </p>
          <h1 className="inline-block font-display text-4xl md:text-5xl leading-[1.32] pt-1 pb-2 text-primary">Experience</h1>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <motion.div
            className="absolute left-[4px] top-0 bottom-0 w-px origin-top"
            style={{
              background: "linear-gradient(to bottom, hsl(var(--primary) / 0.35), hsl(var(--primary) / 0.08) 85%, transparent)",
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            whileInView={{ scaleY: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          />

          {experiences.map((exp, i) => (
            <ExperienceItem key={exp.company} exp={exp} i={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
