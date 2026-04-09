import React, { useState } from "react";
import { motion } from "framer-motion";

const WASHI_TAPE_BACKGROUND = "linear-gradient(135deg, rgba(255,208,215,0.68) 0%, rgba(244,188,198,0.54) 100%)";
const WASHI_TAPE_SHADOW = "0 1px 4px rgba(0,0,0,0.06), inset 0 0 0 1px rgba(210,145,158,0.18)";

export default function PolaroidCard() {
  const [flipped, setFlipped] = useState(false);
  return (
    <motion.div
      className="relative rounded-[0.85rem] bg-[#fefcf9] p-[14px] pb-11"
      style={{
        boxShadow: "0 2px 12px 0 hsl(340,72%,80%,0.13)",
      }}
    >
      {/* Washi tape */}
      <motion.div
        className="absolute -top-2 -left-2 z-20 w-14 h-[18px] rounded-[2px]"
        initial={{ opacity: 0, y: -5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 220, damping: 18, delay: 1.2 }}
        style={{ rotate: "-18deg", background: WASHI_TAPE_BACKGROUND, boxShadow: WASHI_TAPE_SHADOW }}
      />
      {/* Star sticker */}
      <motion.div
        className="absolute -top-5 -right-5 z-30 w-16 h-16"
        initial={{ scale: 0, rotate: 30 }}
        animate={{ scale: 1, rotate: 14 }}
        transition={{ type: "spring", stiffness: 320, damping: 12, delay: 0.95 }}
        whileHover={{
          rotate: 22,
          scale: 1.14,
          transition: { type: "spring", stiffness: 300, damping: 12 },
        }}
      >
        <img
          src="/images/star.svg"
          alt=""
          aria-hidden="true"
          className="w-full h-full select-none pointer-events-none"
          style={{ filter: "drop-shadow(1px 3px 6px rgba(0,0,0,0.18)) drop-shadow(0 1px 2px rgba(0,0,0,0.09))" }}
        />
      </motion.div>
      <div
        className="relative h-[332px] w-full overflow-hidden rounded-[3px] bg-white cursor-pointer"
        style={{ perspective: "1200px" }}
        onClick={() => setFlipped((f) => !f)}
      >
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            transition: "transform 0.7s cubic-bezier(.22,1,.36,1)",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front: headshot */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{ backfaceVisibility: "hidden" }}
          >
            <img
              src="/images/headshot.webp"
              alt="Jessica Liu headshot"
              className="h-full w-full object-cover"
              style={{
                objectPosition: "center 72%",
                transform: "scale(1.08)",
                filter: "brightness(1.05) saturate(0.93) contrast(0.91)",
              }}
            />

          </div>
          {/* Back: message image */}
          <div
            className="absolute inset-0 w-full h-full flex items-center justify-center"
            style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          >
            <img
              src="/images/poloroid-message.png"
              alt="Polaroid message"
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
