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

const CardContent = ({ exp, i }: { exp: ExperienceEntry; i: number }) => (
  <motion.div
    whileHover={{ y: -2 }}
    transition={{ type: "spring", stiffness: 300, damping: 24 }}
  >
    <div
      className="group relative rounded-[16px] overflow-hidden transition-all duration-500"
      style={{
        background: "linear-gradient(135deg, hsl(0 0% 100% / 0.58), hsl(340 30% 97% / 0.42))",
        backdropFilter: "blur(16px) saturate(1.4)",
        border: "1px solid hsl(340 40% 90% / 0.5)",
        boxShadow: "0 4px 24px -8px hsl(340 50% 80% / 0.1), inset 0 1px 0 hsl(0 0% 100% / 0.6)",
      }}
    >
      <div className="p-5 md:p-6">
        {/* Header row: role + period pill balanced across full width */}
        <div className="flex items-start justify-between gap-4 mb-1">
          <h3 className="font-display text-[1.2rem] md:text-[1.35rem] text-foreground/90 leading-snug">
            {exp.role}
          </h3>
          <motion.span
            className="shrink-0 inline-block font-sans text-[10px] uppercase tracking-[0.22em] font-semibold px-3 py-1 rounded-full mt-1"
            style={{
              color: "hsl(340 72% 55%)",
              background: "hsl(340 72% 62% / 0.08)",
              border: "1px solid hsl(340 72% 62% / 0.12)",
            }}
            initial={{ opacity: 0, x: 8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 + 0.2 }}
          >
            {exp.period}
          </motion.span>
        </div>

        {/* Company */}
        <p className="font-sans text-[12px] text-primary/55 font-medium leading-snug mb-4">
          {exp.company}
        </p>

        {/* Decorative divider */}
        <div className="flex items-center gap-2 mb-4">
          <div className="w-5 h-px bg-primary/30" />
          <div className="aesthetic-heart" style={{ width: 6, height: 6 }} />
          <div className="w-10 h-px bg-gradient-to-r from-primary/15 to-transparent" />
        </div>

        {/* Bullets */}
        <ul className="space-y-2">
          {exp.bullets.map((bullet, j) => (
            <motion.li
              key={j}
              className="font-sans text-[12.5px] leading-[1.6] text-foreground/50 flex items-start gap-2.5 group/b"
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.08 + j * 0.04 + 0.3 }}
            >
              <span
                className="mt-[7px] shrink-0 w-[4px] h-[4px] rounded-full group-hover/b:scale-150 transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, hsl(340 72% 62% / 0.4), hsl(320 50% 70% / 0.3))",
                }}
              />
              <span className="group-hover/b:text-foreground/70 transition-colors duration-300">
                {bullet}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-[16px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 20% 20%, hsl(340 72% 62% / 0.05) 0%, transparent 55%)",
        }}
      />
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 pt-20 pb-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.p
            className="text-[11px] font-sans uppercase tracking-[0.35em] text-primary/40 mb-3 font-semibold"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            ✦ Where I've Been
          </motion.p>
          <h1 className="font-display text-4xl md:text-5xl leading-[1.32] pt-1 pb-2 text-primary">Experience</h1>
        </motion.div>

        {/* Timeline */}
        <div>
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="relative pl-9 pb-6"
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Dot */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  left: 3,
                  top: 30,
                  width: 8,
                  height: 8,
                  background: "hsl(340 72% 62% / 0.5)",
                }}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 + 0.1, type: "spring", stiffness: 320, damping: 18 }}
              />

              {/* Line segment growing downward — only between entries */}
              {i < experiences.length - 1 && (
                <motion.div
                  className="absolute w-px"
                  style={{
                    left: 6,
                    top: 42,
                    bottom: 0,
                    background: "hsl(340 72% 62% / 0.2)",
                    transformOrigin: "top",
                  }}
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.07 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                />
              )}

              <CardContent exp={exp} i={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
