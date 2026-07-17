import type { Variants } from "framer-motion";

export const pageVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.98,
    y: 15,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const,
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.99,
    y: -10,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export const childVariants: Variants = {
  initial: { opacity: 0, y: 15 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

// Subtle float effect for cards/menus
export const floatVariants = (delay: number = 0): Variants => ({
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
      delay,
    },
  },
});

// Central name glow pulse
export const pulseVariants: Variants = {
  animate: {
    textShadow: [
      "0 0 20px rgba(99, 102, 241, 0.2)",
      "0 0 35px rgba(99, 102, 241, 0.6)",
      "0 0 20px rgba(99, 102, 241, 0.2)",
    ],
    scale: [1, 1.02, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  },
};

// Subtle rotating orbit line background
export const rotateVariants = (speed: number = 60, reverse: boolean = false): Variants => ({
  animate: {
    rotate: reverse ? [360, 0] : [0, 360],
    transition: {
      duration: speed,
      repeat: Infinity,
      ease: "linear",
    },
  },
});
