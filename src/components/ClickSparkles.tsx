import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Particle = {
  id: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
  rotate: number;
  duration: number;
  symbol: "heart" | "sparkle" | "dot";
  color: string;
};

const SYMBOLS: Array<Particle["symbol"]> = ["heart", "sparkle", "dot"];
const COLORS = ["#ff5ea8", "#ff83bc", "#f7a8d1", "#e45887"];
const BURST_COUNT = 8;
const MAX_PARTICLES = 120;
const PARTICLE_SYMBOL: Record<Particle["symbol"], string> = {
  heart: "♡",
  sparkle: "✦",
  dot: "•",
};

const randomBetween = (min: number, max: number) => Math.random() * (max - min) + min;

const makeParticle = (id: number, x: number, y: number): Particle => {
  const angle = randomBetween(0, Math.PI * 2);
  const speed = randomBetween(22, 72);

  return {
    id,
    x,
    y,
    dx: Math.cos(angle) * speed,
    dy: Math.sin(angle) * speed - randomBetween(10, 24),
    size: randomBetween(10, 16),
    rotate: randomBetween(-35, 35),
    duration: randomBetween(0.55, 0.9),
    symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  };
};

const ClickSparkles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const nextId = useRef(1);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      const created = Array.from({ length: BURST_COUNT }, () => {
        const particle = makeParticle(nextId.current, event.clientX, event.clientY);
        nextId.current += 1;
        return particle;
      });

      setParticles((prev) => [...prev, ...created].slice(-MAX_PARTICLES));
    };

    window.addEventListener("pointerdown", handlePointerDown);
    return () => window.removeEventListener("pointerdown", handlePointerDown);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[70] overflow-hidden" aria-hidden="true">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute block select-none leading-none"
          style={{
            left: particle.x,
            top: particle.y,
            color: particle.color,
            fontSize: `${particle.size}px`,
          }}
          initial={{ opacity: 0, x: 0, y: 0, scale: 0.5, rotate: 0 }}
          animate={{
            opacity: [0, 1, 0],
            x: particle.dx,
            y: particle.dy,
            scale: [0.5, 1, 0.72],
            rotate: particle.rotate,
          }}
          transition={{ duration: particle.duration, ease: "easeOut" }}
          onAnimationComplete={() => {
            setParticles((prev) => prev.filter((item) => item.id !== particle.id));
          }}
        >
          {PARTICLE_SYMBOL[particle.symbol]}
        </motion.span>
      ))}
    </div>
  );
};

export default ClickSparkles;
