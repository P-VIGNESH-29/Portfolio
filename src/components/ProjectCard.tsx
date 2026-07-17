import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ExternalLink, Star, GitBranch } from "lucide-react";
import type { Project } from "../data/projects";

// Inline Github Icon
function GithubIcon({ className }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

// Utility to convert string to Title Case
function toTitleCase(str: string): string {
  return str
    .replace(/[-_]/g, " ")
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

interface ProjectCardProps {
  project: Project;
  idx: number;
  isHomePage?: boolean;
}

export default function ProjectCard({ project, idx, isHomePage = false }: ProjectCardProps) {
  // Show fewer details (only first 2 points) on the Home page
  const pointsToShow = isHomePage ? project.points.slice(0, 2) : project.points;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: idx * 0.1, type: "spring", stiffness: 100 }}
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="group relative rounded-2xl border border-slate-800 bg-slate-900/90 shadow-xl backdrop-blur-md overflow-hidden flex flex-col justify-between transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
    >
      {/* Top Gradient Border Trim */}
      <div className={`h-1.5 w-full bg-gradient-to-r ${project.color}`} />

      {/* Background Graphic Glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-sky-400 rounded-2xl blur-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" />
      
      {/* Abstract shape in corner */}
      <motion.div 
        className="absolute -top-12 -right-12 w-40 h-40 bg-blue-500/5 rounded-full blur-[35px] pointer-events-none"
        animate={{ scale: [1, 1.15, 1], rotate: [0, 90, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <div className="p-6 md:p-8 flex-grow flex flex-col justify-start relative z-10">
        <div className="flex justify-between items-start mb-6">
          <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-sky-400 text-white flex items-center justify-center shadow-lg shadow-blue-500/20">
            <GithubIcon className="w-5.5 h-5.5" />
          </div>
          <div className="flex items-center gap-3 text-slate-400 text-xs font-semibold">
            <span className="flex items-center gap-1">
              <Star className="w-3.5 h-3.5 text-yellow-500" /> {project.stargazers_count || 0}
            </span>
            <span className="flex items-center gap-1">
              <GitBranch className="w-3.5 h-3.5 text-sky-400" /> {project.forks_count || 0}
            </span>
          </div>
        </div>
        
        <div>
          {/* Tag header: Small text, all-uppercase, tag headers */}
          <span className="text-[10px] font-bold text-blue-400 tracking-wider uppercase block">
            {project.category}
          </span>
          {/* Title: Title case text rule */}
          <h3 className="text-xl font-bold text-white mt-2 group-hover:text-blue-400 transition-colors line-clamp-2">
            {toTitleCase(project.title)}
          </h3>
        </div>

        {/* Bulleted Features */}
        <ul className="mt-4 space-y-2 text-sm text-slate-405 leading-relaxed list-disc pl-4 flex-grow">
          {pointsToShow.map((pt, i) => (
            <li key={i}>{pt}</li>
          ))}
        </ul>

        {/* Tech Stack Badges */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span 
              key={t}
              className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-950/60 border border-slate-800 text-slate-400"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="p-6 md:px-8 border-t border-slate-800 flex justify-end items-center relative z-10">
        {isHomePage ? (
          <Link 
            to="/projects" 
            className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-white transition-colors"
          >
            Explore Details
            <ExternalLink className="w-3.5 h-3.5" />
          </Link>
        ) : (
          <a 
            href={project.html_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-white transition-colors"
          >
            View Project
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>
    </motion.div>
  );
}
