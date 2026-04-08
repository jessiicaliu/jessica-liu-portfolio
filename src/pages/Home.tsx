import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import DictionaryEntry from "@/components/DictionaryEntry";
import HeroSection from "@/components/HeroSection";
import ProfileDescription from "@/components/ProfileDescription";
import ContactLinks from "@/components/ContactLinks";
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
            <HeroSection name="Jessica Liu" />

            <motion.div
              className="mt-6"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
            >
              <ProfileDescription />
            </motion.div>

            <motion.div
              className="mt-7"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <ContactLinks />
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
            <HeroSection name="Jessica Liu" />
          </div>

          <div className="flex justify-center mt-8">
            <div className="w-full max-w-[280px]">
              <PolaroidCard />
            </div>
          </div>

          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            <ProfileDescription />
          </motion.div>

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
            <ContactLinks />
          </motion.div>
        </div>

      </div>
    </div>
  );
};

export default Home;
