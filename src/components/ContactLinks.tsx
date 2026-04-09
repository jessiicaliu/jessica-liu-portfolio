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
      <span className="relative flex items-center font-semibold text-foreground/70 group-hover:text-primary transition-colors duration-300">
        <span className="relative z-10">Get in touch</span>
        <motion.span
          className="inline-block text-foreground/30 group-hover:text-primary transition-colors duration-300 ml-1"
          animate={{ x: [0, 3, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          →
        </motion.span>
        <span
          className="absolute left-0 bottom-0 h-px w-full rounded-full pointer-events-none bg-foreground/30 group-hover:bg-primary transition-colors duration-300"
          aria-hidden="true"
        />
      </span>
    </motion.a>
  </div>
);

export default ContactLinks;
