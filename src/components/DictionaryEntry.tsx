import { useState } from "react";
import { motion } from "framer-motion";

type DictionaryEntryProps = {
  className?: string;
};

const DictionaryEntry = ({ className = "" }: DictionaryEntryProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <>
      {/* Desktop / tablet */}
      <div
        className={`relative max-w-2xl min-w-[520px] hidden sm:block ${className}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <motion.div
          className="relative rounded-xl px-10 py-6 md:px-14 md:py-7 border border-primary/10 bg-white/60 backdrop-blur-[6px] shadow-none"
          style={{
            fontFamily: "var(--font-sans)",
            background: "linear-gradient(135deg, rgba(255,255,255,0.55) 60%, hsl(340,72%,98%) 100%)",
            boxShadow: "0 2px 12px 0 hsl(340,72%,80%,0.13)",
          }}
          initial={{ opacity: 0, y: 18, rotate: -0.8 }}
          animate={{ opacity: 1, y: hovered ? -4 : 0, rotate: hovered ? 0.6 : 0 }}
          transition={
            hovered
              ? { type: "spring", stiffness: 48, damping: 28 }
              : { type: "spring", stiffness: 36, damping: 26, delay: 0 }
          }
        >
          {/* Washi tape */}
          <motion.div
            className="absolute -top-2 -left-2 z-20 w-14 h-[18px] rounded-[2px]"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 18, delay: 1.2 }}
            style={{
              rotate: "-18deg",
              background: "linear-gradient(135deg, rgba(255,208,215,0.68) 0%, rgba(244,188,198,0.54) 100%)",
              boxShadow: "0 1px 4px rgba(0,0,0,0.06), inset 0 0 0 1px rgba(210,145,158,0.18)",
            }}
          />
          {/* Star sticker */}
          <motion.div
            className="absolute -top-5 -right-5 z-30 w-16 h-16"
            initial={{ scale: 0, rotate: 30 }}
            animate={{ scale: 1, rotate: 14 }}
            transition={{ type: "spring", stiffness: 320, damping: 12, delay: 0.95 }}
            whileHover={{ rotate: 22, scale: 1.14, transition: { type: "spring", stiffness: 300, damping: 12 } }}
          >
            <img src="/images/star.svg" alt="" aria-hidden="true" className="w-full h-full object-contain select-none pointer-events-none" />
          </motion.div>

          <h3 className="text-[1.18rem] font-normal tracking-tight text-[#18181a] drop-shadow-sm" style={{ fontFamily: "var(--font-sans)" }}>
            Management Engineering
          </h3>
          <p className="mt-0.5 text-[12px] tracking-wide text-foreground/40">
            <span style={{ fontFamily: "serif", fontStyle: "italic", letterSpacing: "0.02em" }}>
              /ˌmæn.ɪdʒ.mənt ˌen.dʒɪˈnɪr.ɪŋ/
            </span>
            <span className="mx-2 opacity-40">|</span>
            <span className="italic">noun</span>
          </p>
          <div className="my-3 h-px bg-gradient-to-r from-foreground/10 via-foreground/5 to-transparent" />
          <p className="text-[13.5px] leading-[1.7] text-foreground/70">
            a multidisciplinary field combining{" "}
            <span className="font-medium text-primary/70">software engineering</span>,{" "}
            <span className="font-medium text-primary/70">business</span>, and{" "}
            <span className="font-medium text-primary/70">data</span>{" "}
            to design and optimize complex systems
          </p>
        </motion.div>
      </div>

      {/* Mobile */}
      <div className={`relative w-full block sm:hidden ${className}`}>
        <motion.div
          className="relative rounded-lg px-5 py-4 border border-primary/10 bg-white/70 backdrop-blur-[4px]"
          style={{
            fontFamily: "var(--font-sans)",
            background: "linear-gradient(135deg, rgba(255,255,255,0.55) 60%, hsl(340,72%,98%) 100%)",
            boxShadow: "0 1px 6px 0 hsl(340,72%,80%,0.10)",
          }}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", stiffness: 36, damping: 26 }}
        >
          {/* Washi tape */}
          <motion.div
            className="absolute -top-2 -left-2 z-20 w-10 h-[13px] rounded-[2px]"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 220, damping: 18, delay: 1.2 }}
            style={{
              rotate: "-18deg",
              background: "linear-gradient(135deg, rgba(255,208,215,0.68) 0%, rgba(244,188,198,0.54) 100%)",
              boxShadow: "0 1px 4px rgba(0,0,0,0.06), inset 0 0 0 1px rgba(210,145,158,0.18)",
            }}
          />
          {/* Star sticker */}
          <motion.div
            className="absolute -top-4 -right-3 z-30 w-11 h-11"
            initial={{ scale: 0, rotate: 30 }}
            animate={{ scale: 1, rotate: 14 }}
            transition={{ type: "spring", stiffness: 320, damping: 12, delay: 0.95 }}
          >
            <img src="/images/star.svg" alt="" aria-hidden="true" className="w-full h-full object-contain select-none pointer-events-none" />
          </motion.div>

          <h3 className="text-[0.95rem] font-normal tracking-tight text-[#18181a] drop-shadow-sm pr-8" style={{ fontFamily: "var(--font-sans)" }}>
            Management Engineering
          </h3>
          <p className="mt-0.5 text-[10.5px] tracking-wide text-foreground/40">
            <span style={{ fontFamily: "serif", fontStyle: "italic", letterSpacing: "0.02em" }}>
              /ˌmæn.ɪdʒ.mənt ˌen.dʒɪˈnɪr.ɪŋ/
            </span>
            <span className="mx-1.5 opacity-40">|</span>
            <span className="italic">noun</span>
          </p>
          <div className="my-2 h-px bg-gradient-to-r from-foreground/10 via-foreground/5 to-transparent" />
          <p className="text-[12px] leading-[1.6] text-foreground/70">
            a multidisciplinary field combining{" "}
            <span className="font-medium text-primary/70">software engineering</span>,{" "}
            <span className="font-medium text-primary/70">business</span>, and{" "}
            <span className="font-medium text-primary/70">data</span>{" "}
            to design and optimize complex systems
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default DictionaryEntry;
