import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import { FaAws } from "react-icons/fa";
import {
  SiCss,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiOpencv,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiSqlite,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiHuggingface,
} from "react-icons/si";
import {
  TbBinaryTree2,
  TbBrackets,
  TbCloudComputing,
  TbDatabaseSearch,
  TbRobot,
  TbTargetArrow,
  TbTransform,
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
      { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", Icon: SiCss, color: "#1572B6" },
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
      { name: "LangChain", Icon: TbBrackets, color: "#10B981" },
      { name: "LangGraph", Icon: TbBinaryTree2, color: "#22C55E" },
    ],
  },
  {
    label: "AI / ML & Data",
    items: [
      { name: "RAG", Icon: TbDatabaseSearch, color: "#0EA5E9" },
      { name: "Multi-Agent Systems", Icon: TbRobot, color: "#8B5CF6" },
      { name: "YOLO", Icon: TbTargetArrow, color: "#EF4444" },
      { name: "OpenCV", Icon: SiOpencv, color: "#5C3EE8" },
      { name: "ETL pipelines", Icon: TbTransform, color: "#6366F1" },
      { name: "Hugging Face", Icon: SiHuggingface, color: "#FFD21E" },
    ],
  },
  {
    label: "Tools & Platforms",
    items: [
      { name: "GitHub", Icon: SiGithub, color: "#181717" },
      { name: "Docker", Icon: SiDocker, color: "#2496ED" },
      { name: "AWS", Icon: FaAws, color: "#FF9900" },
      { name: "Microsoft Azure", Icon: TbCloudComputing, color: "#0078D4" },
      { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
      { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
      { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
      { name: "Vercel", Icon: SiVercel, color: "#111111" },
    ],
  },
];


const TechStack = () => {
  return (
    <div className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
      {stack.map((category, catIdx) => (
        <motion.div
          key={category.label}
          initial={{ opacity: 0, y: 2 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-20px" }}
          transition={{ duration: 0.3, delay: catIdx * 0.05 }}
        >
          {/* Category label */}
          <div className="flex items-center gap-2.5 mb-3">
            <span className="font-sans text-[10px] uppercase tracking-[0.28em] font-semibold text-foreground/50">
              {category.label}
            </span>
            <div className="h-px flex-1 bg-gradient-to-r from-foreground/10 to-transparent" />
          </div>

          {/* Icons */}
          <div className="grid gap-x-2 gap-y-3" style={{ gridTemplateColumns: "repeat(auto-fill, 52px)" }}>
            {category.items.map((tool, itemIdx) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.92 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.25, delay: catIdx * 0.05 + itemIdx * 0.03 }}
                whileHover={{ y: -1.5 }}
                style={{ transition: undefined }}
                className="group flex flex-col items-center gap-1.5 cursor-default w-[52px]"
              >
                <motion.div
                  className="w-11 h-11 flex items-center justify-center rounded-xl"
                  style={{ background: `${tool.color}15` }}
                  whileHover={{
                    boxShadow: `0 4px 12px -2px ${tool.color}35`,
                    scale: 1.05,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                >
                  <tool.Icon className="w-5 h-5" style={{ color: tool.color }} />
                </motion.div>
                <span className="text-[10px] font-sans font-medium text-foreground/50 group-hover:text-foreground/75 transition-colors duration-200 text-center leading-tight">
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
