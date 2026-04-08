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

const Experience = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 pt-20 pb-24">
      <div className="max-w-5xl mx-auto">
        <div className="mb-14">
          <p className="text-[11px] font-sans uppercase tracking-[0.3em] text-primary/45 mb-3 font-semibold">
            ✦ Where I've Been
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-primary">Experience</h1>
        </div>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <div key={exp.company} className="rounded-2xl border border-primary/10 bg-white/40 p-5 md:p-6">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1.5 sm:gap-4 mb-3">
                <div>
                  <h3 className="font-display text-xl md:text-2xl text-foreground/85">{exp.role}</h3>
                  <p className="font-sans text-sm text-primary/70 font-medium">{exp.company}</p>
                </div>
                <span className="self-start shrink-0 font-sans text-[11px] uppercase tracking-[0.18em] text-primary/50 font-semibold bg-primary/6 border border-primary/10 rounded-full px-3 py-1">
                  {exp.period}
                </span>
              </div>

              <div className="h-px bg-gradient-to-r from-primary/10 via-primary/5 to-transparent mb-4" />

              <ul className="space-y-2">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="font-sans text-sm text-foreground/50 flex items-start gap-2.5">
                    <span className="mt-[5px] shrink-0 w-1 h-1 rounded-full bg-primary/40" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
