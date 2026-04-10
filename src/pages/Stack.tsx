import { motion } from "framer-motion";
import TechStack from "@/components/TechStack";

const Stack = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 pt-20 pb-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-[11px] font-sans uppercase tracking-[0.3em] text-primary/45 mb-3 font-semibold">
            ✦ Tools & Technologies
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-gradient-rose font-medium">Stack</h1>
        </motion.div>

        <TechStack />
      </div>
    </div>
  );
};

export default Stack;
