import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";
import {
  SiAxios,
  SiCanva,
  SiClaude,
  SiCss,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFigma,
  SiFramer,
  SiGithub,
  SiGoogleanalytics,
  SiGooglecloud,
  SiHtml5,
  SiJavascript,
  SiLooker,
  SiNextdotjs,
  SiNodedotjs,
  SiOpencv,
  SiOpenai,
  SiPandas,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiR,
  SiReact,
  SiSqlite,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from "react-icons/si";
import {
  TbBinaryTree2,
  TbBrackets,
  TbBrain,
  TbChartBar,
  TbCloudComputing,
  TbDatabaseSearch,
  TbFileExcel,
  TbPhoto,
  TbRobot,
  TbTable,
  TbTargetArrow,
  TbTransform,
  TbVideo,
} from "react-icons/tb";

type TechItem = { name: string; Icon: IconType; color: string };

const stack: { label: string; items: TechItem[] }[] = [
  {
    label: "Languages",
    items: [
      { name: "Python", Icon: SiPython, color: "#3776AB" },
      { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "SQL", Icon: SiSqlite, color: "#0F80CC" },
      { name: "R", Icon: SiR, color: "#276DC3" },
      { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", Icon: SiCss, color: "#1572B6" },
      { name: "VBA", Icon: TbFileExcel, color: "#1D6F42" },
    ],
  },
  {
    label: "Frameworks & Libraries",
    items: [
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Next.js", Icon: SiNextdotjs, color: "#555555" },
      { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
      { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
      { name: "Express.js", Icon: SiExpress, color: "#444444" },
      { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Framer Motion", Icon: SiFramer, color: "#A855F7" },
      { name: "Axios", Icon: SiAxios, color: "#5A29E4" },
      { name: "LangChain", Icon: TbBrackets, color: "#10B981" },
      { name: "LangGraph", Icon: TbBinaryTree2, color: "#22C55E" },
    ],
  },
  {
    label: "AI / ML & Data",
    items: [
      { name: "RAG", Icon: TbDatabaseSearch, color: "#0EA5E9" },
      { name: "Multi-Agent Systems", Icon: TbRobot, color: "#8B5CF6" },
      { name: "Embeddings & Vector Databases", Icon: TbBrain, color: "#EC4899" },
      { name: "Hybrid Retrieval", Icon: TbCloudComputing, color: "#14B8A6" },
      { name: "Semantic Ranking", Icon: TbTargetArrow, color: "#F97316" },
      { name: "ETL pipelines", Icon: TbTransform, color: "#6366F1" },
      { name: "YOLO", Icon: TbTargetArrow, color: "#EF4444" },
      { name: "OpenCV", Icon: SiOpencv, color: "#5C3EE8" },
      { name: "Pandas", Icon: SiPandas, color: "#150458" },
    ],
  },
  {
    label: "Tools & Platforms",
    items: [
      { name: "GitHub", Icon: SiGithub, color: "#181717" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "Vercel", Icon: SiVercel, color: "#111111" },
      { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
      { name: "Microsoft Azure", Icon: TbCloudComputing, color: "#0078D4" },
      { name: "AWS", Icon: FaAws, color: "#FF9900" },
      { name: "Google Cloud", Icon: SiGooglecloud, color: "#4285F4" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "SQLite", Icon: SiSqlite, color: "#0F80CC" },
      { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
      { name: "Claude", Icon: SiClaude, color: "#F97316" },
      { name: "Codex", Icon: SiOpenai, color: "#412991" },
    ],
  },
  {
    label: "Design & Visualization",
    items: [
      { name: "Power BI", Icon: TbChartBar, color: "#F2C811" },
      { name: "Excel", Icon: TbTable, color: "#217346" },
      { name: "Google Analytics", Icon: SiGoogleanalytics, color: "#E37400" },
      { name: "Looker Studio", Icon: SiLooker, color: "#4285F4" },
      { name: "Figma", Icon: SiFigma, color: "#A259FF" },
      { name: "Canva", Icon: SiCanva, color: "#00C4CC" },
      { name: "Adobe Photoshop", Icon: TbPhoto, color: "#31A8FF" },
      { name: "Final Cut Pro", Icon: TbVideo, color: "#6B5BFF" },
    ],
  },
];

const TechStack = () => {
  return (
    <div className="mt-4 space-y-10">
      {stack.map((category, catIdx) => (
        <motion.div
          key={category.label}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.4, delay: catIdx * 0.05 }}
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="font-sans text-[11px] uppercase tracking-[0.28em] font-semibold text-foreground/50">
              {category.label}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-primary/15 to-transparent" />
          </div>

          <div className="flex flex-wrap gap-3">
            {category.items.map((tool) => (
              <motion.div
                key={tool.name}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
                className="group flex flex-col items-center gap-2 cursor-default w-[68px]"
              >
                <motion.div
                  className="w-14 h-14 flex items-center justify-center rounded-2xl transition-all duration-300"
                  style={{ background: `${tool.color}18` }}
                  whileHover={{
                    boxShadow: `0 8px 22px -6px ${tool.color}55`,
                    scale: 1.1,
                  }}
                  transition={{ duration: 0.25 }}
                >
                  <tool.Icon className="w-7 h-7" style={{ color: tool.color }} />
                </motion.div>
                <span className="text-[10.5px] font-sans font-medium text-foreground/55 group-hover:text-foreground/80 transition-colors duration-200 text-center leading-tight">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default TechStack;
