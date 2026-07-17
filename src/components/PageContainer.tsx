import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { pageVariants } from "../animations/variants";

interface PageContainerProps {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

export default function PageContainer({ children, title, subtitle }: PageContainerProps) {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="relative w-full min-h-screen flex flex-col justify-start"
    >
      {/* Floating Glassmorphism Back Button */}
      <div className="fixed top-6 left-6 md:top-8 md:left-8 z-50">
        <Link to="/">
          <motion.div
            className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 bg-slate-955/60 backdrop-blur-md text-slate-300 hover:text-[var(--theme-accent)] shadow-lg shadow-black/20 transition-colors"
            whileHover={{ scale: 1.05, borderColor: "var(--theme-accent)" }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium tracking-wide">Back to Home</span>
          </motion.div>
        </Link>
      </div>

      {/* Page Header and Content wrapper */}
      <div className="w-full max-w-6xl mx-auto px-6 py-24 md:py-32 flex-grow flex flex-col justify-start">
        <header className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="text-xs font-semibold tracking-[0.2em] text-[var(--theme-accent)] uppercase">
              {subtitle || "Portfolio Section"}
            </span>
            <h1 className="mt-2 text-4xl md:text-6xl font-bold tracking-tight text-white bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-450">
              {title}
            </h1>
            <div className="mt-4 h-[2px] w-24 bg-[var(--theme-accent)]" />
          </motion.div>
        </header>

        <div className="relative z-10 w-full flex-grow">
          {children}
        </div>
      </div>
    </motion.div>
  );
}
