import React from "react";
import { motion } from "framer-motion";

interface ContactLinksProps {
  className?: string;
}

const ContactLinks: React.FC<ContactLinksProps> = ({ className = "" }) => (
  <div className={`flex items-center ${className}`}>
    <motion.a
      href="#contact"
      className="group relative inline-flex items-center gap-2.5 font-display text-[15px] text-foreground/65 hover:text-foreground/90 transition-colors duration-300"
      whileHover={{ x: 3 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <span className="text-[10px] text-foreground/25 group-hover:text-primary/50 transition-colors duration-300">✦</span>
      <span className="font-semibold text-foreground/70 border border-foreground/15 rounded-lg px-3 py-1 shadow-lg ring-1 ring-primary/10 transition-all duration-200 bg-transparent backdrop-blur-sm bg-glass/80 group-hover:bg-primary/10 group-hover:scale-105 group-hover:shadow-xl">
        Get in touch
      </span>
      <motion.span
        className="inline-block text-foreground/30 group-hover:text-primary/50 transition-colors duration-300"
        animate={{ x: [0, 3, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        →
      </motion.span>

      {/* Removed hover underline for a cleaner look */}
    </motion.a>
  </div>
);

export default ContactLinks;
