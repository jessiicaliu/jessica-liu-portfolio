import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import DictionaryEntry from "@/components/DictionaryEntry";
import TypingText from "@/components/TypingText";

const WASHI_TAPE_BACKGROUND = "linear-gradient(135deg, rgba(255,208,215,0.68) 0%, rgba(244,188,198,0.54) 100%)";
const WASHI_TAPE_SHADOW = "0 1px 4px rgba(0,0,0,0.06), inset 0 0 0 1px rgba(210,145,158,0.18)";

const Home = () => {
  return (
    <div className="flex flex-col justify-start pt-28 md:pt-32 lg:pt-36 pb-24 px-8 md:px-16 lg:px-24">
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

            <motion.h1
              className="font-display text-6xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-0.01em] text-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              <span className="text-foreground/90">Jessica</span>
              <br />
              <span className="text-primary">Liu</span>
            </motion.h1>

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
              className="mt-8"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.55 }}
            >
              <DictionaryEntry />
            </motion.div>

            <motion.div
              className="mt-7"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#f0cfdd] bg-[#fff7fb] text-[#b5487a] font-sans text-sm font-semibold shadow-[0_4px_12px_-8px_rgba(181,72,122,0.35)] transition-all hover:shadow-[0_8px_18px_-10px_rgba(181,72,122,0.45)]"
              >
                <span className="text-[12px] text-[#d678a0]">✦</span>
                Get In Touch
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#fbe9f1] border border-[#efcddd]">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </a>
            </motion.div>
          </div>

          {/* Right col — polaroid */}
          <motion.div
            className="md:col-span-2 flex justify-end"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 110, damping: 14, delay: 0.38 }}
          >
            <div className="relative w-full max-w-[330px] mt-20">
              <div
                className="absolute -top-2 -left-2 z-20 w-14 h-[18px] rounded-[2px]"
                style={{ rotate: "-18deg", background: WASHI_TAPE_BACKGROUND, boxShadow: WASHI_TAPE_SHADOW }}
              />
              <div className="absolute -top-5 -right-5 z-30 w-16 h-16" style={{ rotate: "14deg" }}>
                <img src="/images/star.svg" alt="" aria-hidden="true" className="w-full h-full select-none pointer-events-none" />
              </div>
              <div
                className="relative rounded-[0.85rem] border border-[#ebe8e3] bg-[#fefcf9] p-[14px] pb-11"
                style={{ boxShadow: "0 2px 6px rgba(0,0,0,0.05), 0 10px 24px -6px rgba(0,0,0,0.15), 0 28px 52px -18px rgba(0,0,0,0.1)" }}
              >
                <div className="relative h-[332px] w-full overflow-hidden rounded-[3px] bg-white">
                  <img
                    src="/images/headshot.webp"
                    alt="Jessica Liu headshot"
                    className="h-full w-full object-cover"
                    style={{ objectPosition: "center 72%", transform: "scale(1.08)", filter: "brightness(1.05) saturate(0.93) contrast(0.91)" }}
                  />
                </div>
              </div>
            </div>
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
            <motion.h1
              className="font-display text-6xl leading-[0.9] tracking-[-0.01em] text-foreground"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            >
              <span className="text-foreground/90">Jessica</span>
              <br />
              <span className="text-primary">Liu</span>
            </motion.h1>
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

          <motion.div
            className="flex justify-center mt-8"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 110, damping: 14, delay: 0.28 }}
          >
            <div className="relative w-full max-w-[280px]">
              <div
                className="absolute -top-2 -left-2 z-20 w-14 h-[18px] rounded-[2px]"
                style={{ rotate: "-18deg", background: WASHI_TAPE_BACKGROUND, boxShadow: WASHI_TAPE_SHADOW }}
              />
              <div className="absolute -top-5 -right-5 z-30 w-14 h-14" style={{ rotate: "14deg" }}>
                <img src="/images/star.svg" alt="" aria-hidden="true" className="w-full h-full select-none pointer-events-none" />
              </div>
              <div
                className="relative rounded-[0.85rem] border border-[#ebe8e3] bg-[#fefcf9] p-[14px] pb-9"
                style={{ boxShadow: "0 2px 6px rgba(0,0,0,0.05), 0 10px 24px -6px rgba(0,0,0,0.15), 0 28px 52px -18px rgba(0,0,0,0.1)" }}
              >
                <div className="relative h-[280px] w-full overflow-hidden rounded-[3px] bg-white">
                  <img
                    src="/images/headshot.webp"
                    alt="Jessica Liu headshot"
                    className="h-full w-full object-cover"
                    style={{ objectPosition: "center 72%", transform: "scale(1.08)", filter: "brightness(1.05) saturate(0.93) contrast(0.91)" }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

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
            className="mt-7"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#f0cfdd] bg-[#fff7fb] text-[#b5487a] font-sans text-sm font-semibold shadow-[0_4px_12px_-8px_rgba(181,72,122,0.35)] transition-all hover:shadow-[0_8px_18px_-10px_rgba(181,72,122,0.45)]"
            >
              <span className="text-[12px] text-[#d678a0]">✦</span>
              Get In Touch
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[#fbe9f1] border border-[#efcddd]">
                <ArrowUpRight className="w-3.5 h-3.5" />
              </span>
            </a>
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Home;
