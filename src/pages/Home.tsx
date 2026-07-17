import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Phone, MapPin, Mail, ArrowUpRight
} from "lucide-react";

import Typewriter from "../components/Typewriter";
import Particles from "../components/Particles";
import vigneshCutout from "../assets/vignesh-cutout.png";

const DEVELOPER_NAME = "Vignesh P";
const DEVELOPER_ROLE = "Full-Stack";
const DEVELOPER_SPECIALTY = "MERN Developer";
const BIO_WORDS = [
  "Full Stack Developer",
  "Node.js & Express Specialist",
  "React Frontend Engineer",
  "IT Graduate (2022 - 2026)"
];

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function NeonGeometricDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* Background soft glows */}
      <div className="absolute top-[15%] right-[5%] w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[80px]" />
      <div className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] bg-sky-500/10 rounded-full blur-[60px]" />
    </div>
  );
}

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - left - width / 2) / 30;
    const y = (clientY - top - height / 2) / 30;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden flex flex-col justify-start transition-all duration-700 bg-[var(--theme-bg)] text-[var(--theme-text)]">
      <Particles />

      {/* Dynamic Themed Background Decorations */}
      <NeonGeometricDecorations />

      {/* ================= PREMIUM HERO VIEWPORT SECTION ================= */}
      <section
        className="w-full min-h-screen flex items-center justify-center relative py-20 px-6 md:px-16 lg:px-24 z-10"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center relative z-10">

          {/* Hero Left Column (Bio & Intro) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateX: 15 }}
            animate={{ opacity: 1, scale: 1, rotateX: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20, mass: 1 }}
            className="lg:col-span-6 relative flex flex-col items-start text-left select-text py-7 pr-7 pl-10 rounded-[32px] border border-[var(--theme-border)] bg-[var(--theme-card-bg)] shadow-xl backdrop-blur-md overflow-visible group"
          >

            {/* High-end Glowing Border Animation */}
            <div className="absolute inset-0 pointer-events-none rounded-[32px] overflow-hidden">
              <svg className="absolute inset-0 w-full h-full" fill="none">
                {/* Base subtle border */}
                <rect
                  x="1.5"
                  y="1.5"
                  width="calc(100% - 3px)"
                  height="calc(100% - 3px)"
                  rx="30.5"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="opacity-20 text-[var(--theme-accent)]"
                />

                {/* Glowing traveling stroke 1 */}
                <motion.rect
                  x="1.5" y="1.5" width="calc(100% - 3px)" height="calc(100% - 3px)" rx="30.5"
                  pathLength="100"
                  stroke="url(#neonGradient)"
                  strokeWidth="2.5"
                  strokeDasharray="15 85"
                  strokeLinecap="round"
                  animate={{ strokeDashoffset: [100, 0] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  filter="url(#glow)"
                />

                {/* Glowing traveling stroke 2 (opposite) */}
                <motion.rect
                  x="1.5" y="1.5" width="calc(100% - 3px)" height="calc(100% - 3px)" rx="30.5"
                  pathLength="100"
                  stroke="url(#neonGradient)"
                  strokeWidth="2.5"
                  strokeDasharray="15 85"
                  strokeLinecap="round"
                  animate={{ strokeDashoffset: [50, -50] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  filter="url(#glow)"
                />

                <defs>
                  <linearGradient id="neonGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#38bdf8" />
                    <stop offset="100%" stopColor="#818cf8" />
                  </linearGradient>
                  <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>
              </svg>
            </div>



            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-5 w-full relative z-10"
            >
              {/* Special Tags */}
              <div className="flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border bg-white/5 backdrop-blur-md text-[10px] md:text-xs font-bold tracking-wider transition-all duration-700 border-blue-500/25 text-[var(--theme-accent)]">
                  <span className="w-2 h-2 rounded-full animate-ping bg-[var(--theme-accent)]" />
                  Available for Roles
                </span>
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border bg-blue-950/40 backdrop-blur-md text-[10px] md:text-xs font-bold tracking-wider transition-all duration-700 border-blue-500/30 text-blue-400">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                  Full-Stack Intern @ SocEdge
                </span>
              </div>

              {/* Title / Name */}
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[var(--theme-text)] leading-[0.9] mt-2 select-none">
                {DEVELOPER_NAME}
              </h1>

              {/* Role Title */}
              <h2 className="text-xl md:text-2xl font-light text-[var(--theme-text-muted)] tracking-wide">
                {DEVELOPER_ROLE} <span className="font-semibold text-[var(--theme-accent-secondary)]">({DEVELOPER_SPECIALTY})</span>
              </h2>

              {/* Animated Typewriter */}
              <div className="text-base md:text-lg text-[var(--theme-text-muted)] min-h-[28px] font-medium tracking-wide">
                I am a <Typewriter words={BIO_WORDS} />
              </div>

              {/* Quick Resume Card Summary */}
              <p className="text-sm md:text-base text-[var(--theme-text-muted)] leading-relaxed max-w-xl font-normal">
                Currently working as a Full-Stack Web Development Intern at SocEdge.
                I specialize in Node.js, Express, and React, building secure databases, touchless user interfaces, and scalable modular applications using the MERN stack.
              </p>

              {/* Contacts Line */}
              <div className="flex flex-wrap gap-y-2.5 gap-x-5 text-xs md:text-sm text-[var(--theme-text-muted)] pt-1 font-medium">
                <span className="flex items-center gap-2.5 hover:text-[var(--theme-text)] transition-colors">
                  <Phone className="w-4 h-4 text-[var(--theme-accent)]" />
                  +91 79046 97834
                </span>
                <span className="flex items-center gap-2.5 hover:text-[var(--theme-text)] transition-colors">
                  <MapPin className="w-4 h-4 text-[var(--theme-accent)]" />
                  Chennai, India
                </span>
                <span className="flex items-center gap-2.5 hover:text-[var(--theme-text)] transition-colors">
                  <Mail className="w-4 h-4 text-[var(--theme-accent)]" />
                  p.vignesh2909@gmail.com
                </span>
              </div>

              <div className="flex gap-3 pt-1">
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border bg-white/5 text-[var(--theme-text-muted)] hover:text-[var(--theme-text)] hover:border-[var(--theme-accent)] hover:shadow-lg transition-all duration-300 shadow-sm hover:shadow-sky-400/10"
                >
                  <LinkedinIcon className="w-4.5 h-4.5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border bg-white/5 text-[var(--theme-text-muted)] hover:text-[var(--theme-text)] hover:border-[var(--theme-accent)] hover:shadow-lg transition-all duration-300 shadow-sm hover:shadow-sky-400/10"
                >
                  <GithubIcon className="w-4.5 h-4.5" />
                </a>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/projects">
                  <motion.button
                    className="px-7 py-3 rounded-full font-semibold text-xs md:text-sm shadow-xl transition-all duration-700 cursor-pointer flex items-center gap-2 border border-transparent bg-[var(--theme-accent)] hover:bg-[var(--theme-accent-secondary)] text-slate-950 shadow-[var(--theme-accent)]/25 hover:shadow-[var(--theme-accent-secondary)]/40"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    View Projects
                    <ArrowUpRight className="w-4 h-4" />
                  </motion.button>
                </Link>

                <Link to="/contact">
                  <motion.button
                    className="px-7 py-3 rounded-full border bg-white/5 text-[var(--theme-text-muted)] hover:text-[var(--theme-text)] font-semibold text-xs md:text-sm shadow-md transition-all duration-700 cursor-pointer border-[var(--theme-border)] hover:border-[var(--theme-accent)] hover:shadow-[var(--theme-accent)]/10"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Contact Me
                  </motion.button>
                </Link>
              </div>

            </motion.div>
          </motion.div>
          {/* Hero Right Column (Transparent Portrait & Glows) */}
          <div className="lg:col-span-6 flex items-center justify-center relative">

            {/* Subtle glow layer behind the portrait */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[320px] h-[320px] md:w-[480px] md:h-[480px] rounded-full blur-[100px] opacity-80 transition-all duration-700 bg-gradient-to-tr from-blue-500/20 to-sky-400/15" />
            </div>

            {/* Mouse Parallax Image Container */}
            <motion.div
              animate={{
                x: mousePos.x * 0.8,
                y: mousePos.y * 0.8,
                rotateY: mousePos.x * 0.3,
                rotateX: -mousePos.y * 0.3,
              }}
              transition={{ type: "spring", stiffness: 90, damping: 25 }}
              style={{ transformStyle: "preserve-3d" }}
              className="relative w-full max-w-[380px] md:max-w-[480px] flex justify-center items-end"
            >
              {/* Geometric Solid Shapes (Masking Edges & Floating Decor) */}
              <div
                className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
                style={{ transform: "translateZ(10px)" }}
              >
                {/* --- MASKING SHAPES (SHOULDERS) --- */}
                {/* Left Shoulder Mask - Solid Rounded Rectangle */}
                <motion.div
                  animate={{ y: [0, -5, 5, 0], rotate: [-15, -10, -20, -15], scale: [1, 1.02, 0.98, 1] }}
                  transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-[2%] -left-4 md:-left-6 w-24 h-40 md:w-32 md:h-48 bg-[var(--theme-bg)] border-[6px] border-blue-600 rounded-3xl"
                  style={{ transformOrigin: "bottom right" }}
                >
                  <div className="absolute inset-2 border-2 border-sky-400 rounded-2xl" />
                </motion.div>

                {/* Right Shoulder Mask */}
                <motion.div
                  animate={{ y: [0, -8, 8, 0], rotate: [0, -5, 5, 0], scale: [1, 1.05, 0.95, 1] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute bottom-[4%] -right-2 md:-right-8 w-28 h-28 md:w-36 md:h-36 bg-[var(--theme-bg)] border-[4px] border-blue-600 shadow-[0_0_25px_rgba(37,99,235,0.4)] rounded-full flex items-center justify-center overflow-hidden z-30"
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent pointer-events-none" />
                </motion.div>

                {/* --- FLOATING SHAPES (AROUND IMAGE) --- */}
                {/* Top Left Floating Diamond */}
                <motion.div
                  animate={{ y: [0, -15, 0], rotate: [45, 90, 45] }}
                  transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[15%] -left-[10%] w-12 h-12 bg-sky-400 opacity-100"
                />

                {/* Top Right Solid Ring */}
                <motion.div
                  animate={{ y: [0, 20, 0], rotate: [0, -60, 0], scale: [1, 1.1, 1] }}
                  transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[5%] -right-[15%] w-16 h-16 rounded-full border-[8px] border-blue-600 opacity-100"
                />

                {/* Mid Left Solid Plus Sign */}
                <motion.div
                  animate={{ rotate: [0, 180, 360], scale: [1, 1.2, 1] }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute top-[45%] -left-[20%] w-8 h-8 opacity-100"
                >
                  <div className="absolute top-1/2 left-0 w-full h-[4px] bg-[var(--theme-accent-secondary)] -translate-y-1/2" />
                  <div className="absolute left-1/2 top-0 h-full w-[4px] bg-[var(--theme-accent-secondary)] -translate-x-1/2" />
                </motion.div>

                {/* Mid Right Solid Triangle */}
                <motion.svg
                  animate={{ y: [0, -10, 5, 0], rotate: [15, 45, 15] }}
                  transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-[60%] -right-[10%] w-14 h-14 text-blue-500 opacity-100"
                  viewBox="0 0 100 100" fill="currentColor"
                >
                  <polygon points="50,15 100,100 0,100" />
                </motion.svg>
              </div>

              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full flex justify-center select-none"
                style={{
                  WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 98%)",
                  maskImage: "linear-gradient(to bottom, black 60%, transparent 98%)"
                }}
              >
                {/* Portrait Cutout with transparent background */}
                <img
                  src={vigneshCutout}
                  alt="Vignesh P Cutout"
                  className="w-full h-auto max-h-[550px] md:max-h-[660px] object-contain opacity-95 hover:opacity-100 hover:scale-[1.01] transition-all duration-700 ease-out"
                  style={{
                    filter: "drop-shadow(0 20px 40px rgba(0,0,0,0.5)) drop-shadow(0 -10px 30px rgba(59,130,246,0.15))"
                  }}
                />
              </motion.div>
            </motion.div>

          </div>

        </div>
      </section>
    </div>
  );
};