import { motion } from "framer-motion";
import TypingText from "@/components/TypingText";
import React from "react";

interface HeroSectionProps {
  name?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ name = "Jessica Liu" }) => {
  return (
    <>
      <motion.p
        className="font-sans italic text-sm text-foreground/55 mb-2 tracking-wide"
        initial={{ opacity: 0, x: -12 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        Hi, I'm
      </motion.p>
      <div className="relative">
        <motion.h1
          className="font-display text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-0.01em] text-foreground"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <span className="text-foreground/90">{name.split(" ")[0]}</span>
          <br />
          <span className="relative inline-block text-primary">
            <span className="relative z-10">{name.split(" ")[1]}</span>
            <motion.span
              className="absolute -bottom-1 left-0 h-[3px] rounded-full bg-primary/35"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.62, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            />
          </span>
        </motion.h1>
      </div>
      <motion.p
        className="mt-4 font-sans text-lg md:text-xl text-foreground/60"
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.55 }}
      >
        <span className="mr-2">a</span>
        <TypingText />
      </motion.p>
    </>
  );
};

export default HeroSection;
