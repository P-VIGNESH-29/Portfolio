import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

// Pre-generate stable random parameters to avoid hydration mismatch
const particles: Particle[] = Array.from({ length: 25 }).map((_, i) => ({
  id: i,
  x: Math.floor((i * 17) % 100), // pseudo-random distribution
  y: Math.floor((i * 23) % 100),
  size: ((i * 3) % 5) + 3, // sizes between 3px and 7px
  duration: ((i * 7) % 15) + 20, // speeds between 20s and 35s
  delay: -((i * 13) % 20), // start at different points in their cycles
}));

export default function Particles() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => {
        const bgClass = p.id % 2 === 0 ? "bg-lime-500/15 shadow-[0_0_8px_rgba(132,204,22,0.3)]" : "bg-emerald-500/15 shadow-[0_0_8px_rgba(16,185,129,0.3)]";

        return (
          <motion.div
            key={p.id}
            className={`absolute rounded-full blur-[0.5px] ${bgClass}`}
            style={{
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
            }}
            animate={{
              y: [0, -600],
              x: [0, (p.id % 2 === 0 ? 30 : -30)],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
              delay: p.delay,
            }}
          />
        );
      })}
    </div>
  );
}
