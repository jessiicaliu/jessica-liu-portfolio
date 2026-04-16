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
        initial={{ opacity: 0, x: -3 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        Hi, I'm
      </motion.p>
      <div className="relative">
        <motion.h1
          className="font-display text-4xl md:text-5xl lg:text-[4.5rem] leading-[0.9] tracking-[-0.01em] text-foreground"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <span className="text-foreground/90">{name.split(" ")[0]}</span>
          <br />
          <span className="relative inline-block text-primary">
            {/* Sparkle beside 'Liu' */}
            <motion.div
              aria-hidden="true"
              className="absolute left-full ml-2 top-8 pointer-events-none select-none"
              style={{ color: "rgb(255,208,215)", opacity: 0.62 }}
              initial={{ opacity: 0, scale: 0.4, rotate: -30 }}
              animate={{ opacity: 0.62, scale: 1, rotate: 0 }}
              transition={{ delay: 0.75, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                className="relative w-9 h-9 md:w-11 md:h-11"
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <motion.svg
                  viewBox="0 0 24 24"
                  className="absolute inset-0 w-full h-full"
                  fill="currentColor"
                  animate={{ rotate: [0, 14, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <path d="M12 0 L14.2 9.8 L24 12 L14.2 14.2 L12 24 L9.8 14.2 L0 12 L9.8 9.8 Z" />
                </motion.svg>
                <motion.svg
                  viewBox="0 0 24 24"
                  className="absolute -top-1.5 -right-1.5 w-3 h-3 md:w-3.5 md:h-3.5"
                  fill="currentColor"
                  animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.75, 0.5] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <path d="M12 0 L14.2 9.8 L24 12 L14.2 14.2 L12 24 L9.8 14.2 L0 12 L9.8 9.8 Z" />
                </motion.svg>
              </motion.div>
            </motion.div>
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
        className="mt-3 font-sans text-sm md:text-base text-foreground/60"
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        <span className="mr-2">a</span>
        <TypingText />
      </motion.p>
    </>
  );
};

export default HeroSection;
