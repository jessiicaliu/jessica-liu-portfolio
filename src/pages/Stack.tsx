import { motion } from "framer-motion";
import TechStack from "@/components/TechStack";

const Stack = () => {
  return (
    <div className="px-6 md:px-16 lg:px-24 pt-10 pb-10">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="font-display text-3xl md:text-4xl text-gradient-rose font-medium">Stack</h1>
        </motion.div>

        <TechStack />
      </div>
    </div>
  );
};

export default Stack;
