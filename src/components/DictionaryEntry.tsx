import { useState } from "react";
import { motion } from "framer-motion";

type DictionaryEntryProps = {
  className?: string;
};

const REST_SHADOW = "0 2px 6px rgba(0,0,0,0.05), 0 10px 24px -6px rgba(0,0,0,0.15), 0 28px 52px -18px rgba(0,0,0,0.1)";
const HOVER_SHADOW = "0 4px 12px rgba(0,0,0,0.07), 0 16px 36px -6px rgba(0,0,0,0.18), 0 36px 64px -18px rgba(0,0,0,0.12)";

const DictionaryEntry = ({ className = "" }: DictionaryEntryProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    // Stable wrapper — never moves, so onMouseLeave fires reliably
    <div
      className={`relative max-w-md ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        className="relative bg-[#fefefe] border border-[#ebe8e3] rounded-xl p-6 md:p-7"
        style={{ fontFamily: "var(--font-sans)" }}
        initial={{ opacity: 0, y: 18, rotate: -0.8, boxShadow: REST_SHADOW }}
        animate={{
          opacity: 1,
          y: hovered ? -4 : 0,
          rotate: hovered ? 0.6 : 0,
          boxShadow: hovered ? HOVER_SHADOW : REST_SHADOW,
        }}
        transition={
          hovered
            ? { type: "spring", stiffness: 220, damping: 18 }
            : { type: "spring", stiffness: 120, damping: 16, delay: 0 }
        }
      >
        {/* Thumbtack */}
        <motion.div
          className="absolute -top-4 right-7 z-10 pointer-events-none select-none"
          initial={{ scale: 0, rotate: 30 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 14, delay: 1.0 }}
        >
          <svg viewBox="0 0 22 32" width="22" height="32" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="tack-head" cx="38%" cy="32%" r="65%">
                <stop offset="0%" stopColor="hsl(340, 80%, 80%)" />
                <stop offset="55%" stopColor="hsl(340, 72%, 62%)" />
                <stop offset="100%" stopColor="hsl(340, 72%, 44%)" />
              </radialGradient>
              <linearGradient id="tack-stem" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(340, 20%, 48%)" />
                <stop offset="40%" stopColor="hsl(340, 15%, 68%)" />
                <stop offset="100%" stopColor="hsl(340, 20%, 44%)" />
              </linearGradient>
              <filter id="tack-shadow" x="-40%" y="-20%" width="180%" height="200%">
                <feGaussianBlur stdDeviation="1.5" />
              </filter>
            </defs>
            <ellipse cx="13" cy="21" rx="5" ry="2" fill="rgba(0,0,0,0.18)" filter="url(#tack-shadow)" />
            <rect x="10" y="19" width="2.2" height="10" rx="1.1" fill="url(#tack-stem)" />
            <circle cx="11" cy="10" r="9.5" fill="url(#tack-head)" />
            <circle cx="11" cy="10" r="9.5" fill="none" stroke="hsl(340, 72%, 36%)" strokeWidth="0.7" opacity="0.35" />
            <ellipse cx="7.5" cy="6.5" rx="2.2" ry="1.4" fill="white" opacity="0.45" transform="rotate(-30 7.5 6.5)" />
          </svg>
        </motion.div>

        {/* Word */}
        <h3
          className="text-[1.18rem] font-bold tracking-tight text-[#18181a] drop-shadow-sm"
          style={{ fontFamily: "var(--font-sans)" }}
        >
          Management Engineering
        </h3>

        {/* Pronunciation & part of speech */}
        <p className="mt-0.5 text-[12px] tracking-wide text-foreground/40">
          <span style={{ fontFamily: "serif", fontStyle: "italic", letterSpacing: "0.02em" }}>
            /ˌmæn.ɪdʒ.mənt ˌen.dʒɪˈnɪr.ɪŋ/
          </span>
          <span className="mx-2 opacity-40">|</span>
          <span className="italic">noun</span>
        </p>

        {/* Divider */}
        <div className="my-3 h-px bg-gradient-to-r from-foreground/10 via-foreground/5 to-transparent" />

        {/* Definition */}
        <p className="text-[13.5px] leading-[1.7] text-foreground/70">
          a multidisciplinary field combining{" "}
          <span className="font-medium text-primary/70">software engineering</span>,{" "}
          <span className="font-medium text-primary/70">business</span>, and{" "}
          <span className="font-medium text-primary/70">data</span>{" "}
          to design and optimize complex systems
        </p>
      </motion.div>
    </div>
  );
};

export default DictionaryEntry;
