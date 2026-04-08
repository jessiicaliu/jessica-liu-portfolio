type StackCategory = {
  label: string;
  items: string[];
};

const stack: StackCategory[] = [
  {
    label: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "R", "HTML", "CSS", "VBA"],
  },
  {
    label: "Frameworks & Libraries",
    items: ["React", "Next.js", "FastAPI", "Node.js", "Express.js", "Tailwind CSS", "Framer Motion", "Axios", "LangChain", "LangGraph"],
  },
  {
    label: "AI / ML & Data",
    items: ["RAG", "Multi-Agent Systems", "Embeddings & Vector Databases", "Hybrid Retrieval", "Semantic Ranking", "ETL pipelines", "YOLO", "OpenCV", "Pandas"],
  },
  {
    label: "Tools & Platforms",
    items: ["GitHub", "Docker", "Vercel", "Supabase", "Microsoft Azure", "AWS", "Google Cloud", "PostgreSQL", "SQLite", "Postman", "Claude", "Codex"],
  },
  {
    label: "Design & Visualization",
    items: ["Power BI", "Excel", "Google Analytics", "Looker Studio", "Figma", "Canva", "Adobe Photoshop", "Final Cut Pro"],
  },
];

const Stack = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 pt-20 pb-24">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <p className="text-[11px] font-sans uppercase tracking-[0.3em] text-primary/45 mb-3 font-semibold">
            ✦ Tools & Technologies
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-gradient-rose">Stack</h1>
        </div>

        <div className="space-y-8">
          {stack.map((category) => (
            <div key={category.label}>
              <div className="flex items-center gap-3 mb-4">
                <span className="font-sans text-[11px] uppercase tracking-[0.28em] font-semibold text-foreground/50">
                  {category.label}
                </span>
                <div className="h-px flex-1 bg-gradient-to-r from-primary/15 to-transparent" />
              </div>

              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="font-sans text-sm px-3 py-1.5 rounded-full bg-pink-soft/20 border border-primary/10 text-foreground/60 font-medium"
                  >
                    {item}
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

export default Stack;
