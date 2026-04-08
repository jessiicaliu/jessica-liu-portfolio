import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import DictionaryEntry from "@/components/DictionaryEntry";
import TypingText from "@/components/TypingText";
import React, { useState } from "react";
import PolaroidCard from "@/components/PolaroidCard";

const SPARKLE_TINT = "rgb(255,208,215)";
const SPARKLE_OPACITY = 0.62;
const WASHI_TAPE_BACKGROUND = "linear-gradient(135deg, rgba(255,208,215,0.68) 0%, rgba(244,188,198,0.54) 100%)";
const WASHI_TAPE_SHADOW = "0 1px 4px rgba(0,0,0,0.06), inset 0 0 0 1px rgba(210,145,158,0.18)";

const Home = () => {
  const [flipped, setFlipped] = useState(false);
  return (
    <div className="flex flex-col justify-start pt-12 md:pt-32 lg:pt-36 pb-24 px-8 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto w-full">

        {/* ── Desktop layout ── */}
        <div className="hidden md:grid md:grid-cols-5 gap-10 md:gap-12 items-start">

          {/* Left col */}
          <div className="md:col-span-3 max-w-2xl">
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
                <span className="text-foreground/90">Jessica</span>
                <br />
                <span className="relative inline-block text-primary">
                  <motion.div
                    aria-hidden="true"
                    className="absolute left-full ml-2 top-8 pointer-events-none select-none"
                    style={{ color: SPARKLE_TINT, opacity: SPARKLE_OPACITY }}
                    initial={{ opacity: 0, scale: 0.4, rotate: -30 }}
                    animate={{ opacity: SPARKLE_OPACITY, scale: 1, rotate: 0 }}
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
                        animate={{ scale: [1, 1.35, 1], opacity: [0.55, 0.85, 0.55] }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      >
                        <path d="M12 0 L14.2 9.8 L24 12 L14.2 14.2 L12 24 L9.8 14.2 L0 12 L9.8 9.8 Z" />
                      </motion.svg>
                    </motion.div>
                  </motion.div>
                  <span className="relative z-10">Liu</span>
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
              <span className="mr-2">A</span>
              <TypingText />
            </motion.p>

            <motion.p
              className="mt-6 font-sans text-[15px] text-foreground/55 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              Hello! I'm a 2nd-year Management Engineering student at the University of Waterloo,
              minoring in computing and AI. I like taking ideas from start to finish and working on
              thoughtful solutions that keep people in mind. I'm interested in software engineering,
              data, and product roles.
              <br /><br />
              When I'm not at my desk, you'll find me at the gym, catching a concert, or grabbing
              sushi with friends. I also enjoy volunteering and staying connected to the engineering
              community.
              <br /><br />
              I'm currently open to Fall 2026 and Summer 2027 opportunities. Happy to chat!
            </motion.p>

            <motion.div
              className="mt-7 flex items-center gap-4"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="inline-flex">
                <motion.a
                  href="#contact"
                  className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#f0cfdd] bg-[#fff7fb] text-[#b5487a] font-sans text-sm font-semibold shadow-[0_4px_12px_-8px_rgba(181,72,122,0.35)] transition-all duration-250"
                  whileHover={{
                    boxShadow: "0 8px 18px -10px rgba(181,72,122,0.45)",
                    scale: 1.015,
                  }}
                >
                  <span className="text-[12px] text-[#d678a0]">✦</span>
                  Get In Touch
                  <span className="relative inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#fbe9f1] border border-[#efcddd]">
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-[1px] group-hover:translate-x-[1px] transition-transform duration-200" />
                  </span>
                </motion.a>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-8"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.55 }}
            >
              <DictionaryEntry />
            </motion.div>
          </div>

          {/* Right col — polaroid */}
          <motion.div
            className="md:col-span-2 flex justify-end"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 110, damping: 14, delay: 0.38 }}
          >
            <motion.div
              className="relative w-full max-w-[330px] mt-20"
              animate={{ y: [0, -7, 0], rotate: [-1.5, -0.4, -1.5] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 2, repeatDelay: 0 }}
              whileHover={{
                y: -14,
                rotate: 1.5,
                transition: { type: "spring", stiffness: 200, damping: 16 },
              }}
            >
              <PolaroidCard />
            </motion.div>
          </motion.div>
        </div>

        {/* ── Mobile layout ── */}
        <div className="flex flex-col md:hidden gap-0">
          <div>
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
                className="font-display text-6xl leading-[0.9] tracking-[-0.01em] text-foreground"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              >
                <span className="text-foreground/90">Jessica</span>
                <br />
                <span className="relative inline-block text-primary">
                  <motion.div
                    aria-hidden="true"
                    className="absolute left-full ml-2 top-8 pointer-events-none select-none"
                    style={{ color: SPARKLE_TINT, opacity: SPARKLE_OPACITY }}
                    initial={{ opacity: 0, scale: 0.4, rotate: -30 }}
                    animate={{ opacity: SPARKLE_OPACITY, scale: 1, rotate: 0 }}
                    transition={{ delay: 0.75, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <motion.div
                      className="relative w-9 h-9"
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
                        className="absolute -top-1.5 -right-1.5 w-3 h-3"
                        fill="currentColor"
                        animate={{ scale: [1, 1.35, 1], opacity: [0.55, 0.85, 0.55] }}
                        transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      >
                        <path d="M12 0 L14.2 9.8 L24 12 L14.2 14.2 L12 24 L9.8 14.2 L0 12 L9.8 9.8 Z" />
                      </motion.svg>
                    </motion.div>
                  </motion.div>
                  <span className="relative z-10">Liu</span>
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
              className="mt-4 font-sans text-lg text-foreground/60"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.55 }}
            >
              <span className="mr-2">A</span>
              <TypingText />
            </motion.p>
          </div>

          <div className="flex justify-center mt-8">
            <div className="w-full max-w-[280px]">
              <PolaroidCard />
            </div>
          </div>

          <motion.p
            className="mt-8 font-sans text-[15px] text-foreground/55 leading-relaxed"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            Hello! I'm a 2nd-year Management Engineering student at the University of Waterloo,
            minoring in computing and AI. I like taking ideas from start to finish and working on
            thoughtful solutions that keep people in mind. I'm interested in software engineering,
            data, and product roles.
            <br /><br />
            When I'm not at my desk, you'll find me at the gym, catching a concert, or grabbing
            sushi with friends. I also enjoy volunteering and staying connected to the engineering
            community.
            <br /><br />
            I'm currently open to Fall 2026 and Summer 2027 opportunities. Happy to chat!
          </motion.p>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.55 }}
          >
            <DictionaryEntry />
          </motion.div>

          <motion.div
            className="mt-7 flex items-center gap-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} className="inline-flex">
              <motion.a
                href="#contact"
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#f0cfdd] bg-[#fff7fb] text-[#b5487a] font-sans text-sm font-semibold shadow-[0_4px_12px_-8px_rgba(181,72,122,0.35)] transition-all duration-250"
                whileHover={{
                  boxShadow: "0 8px 18px -10px rgba(181,72,122,0.45)",
                  scale: 1.015,
                }}
              >
                <span className="text-[12px] text-[#d678a0]">✦</span>
                Get In Touch
                <span className="relative inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#fbe9f1] border border-[#efcddd]">
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:-translate-y-[1px] group-hover:translate-x-[1px] transition-transform duration-200" />
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Home;
