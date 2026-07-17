import PageContainer from "../components/PageContainer";
import { motion } from "framer-motion";
import { childVariants } from "../animations/variants";
import { GraduationCap, Code } from "lucide-react";

interface Skill {
  name: string;
  category: string;
}

const skillsList: Skill[] = [
  { name: "React.js", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "Tailwind CSS", category: "Frontend" },
  { name: "HTML5 & CSS3", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "MySQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Git", category: "Tools" },
  { name: "GitHub", category: "Tools" }
];

export default function About() {
  return (
    <PageContainer title="About Me" subtitle="My Academic & Professional Bio">
      <motion.div 
        variants={childVariants}
        className="grid md:grid-cols-2 gap-8 items-start select-text"
      >
        {/* Biography & Summary Card */}
        <div className="p-8 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-card-bg)] shadow-sm">
          <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
            <UserIcon className="w-5 h-5 text-[var(--theme-accent)]" />
            Professional Summary
          </h3>
          <p className="text-slate-300 leading-relaxed text-base">
            Currently working as a Full-Stack Web Development Intern at SocEdge with hands-on experience in full-stack web development, specializing in Node.js, Express, and React. I possess a proven ability to build end-to-end web applications with clean architecture, responsive UI, and secure backend systems. Adept at working across the full development lifecycle — from database design to deployment. Eager to contribute innovative solutions and grow within a dynamic, technology-driven team.
          </p>

          <div className="mt-8 pt-6 border-t border-[var(--theme-border)]">
            <h4 className="text-sm font-bold text-slate-200 mb-3 uppercase tracking-wider">
              Core Pillars
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-3 rounded-lg bg-rose-500/5 border border-rose-500/10 text-slate-200">
                <span className="block font-bold text-[var(--theme-accent)]">Full-Stack</span>
                <span className="text-xs text-slate-400">Node.js, Express & React</span>
              </div>
              <div className="p-3 rounded-lg bg-blue-500/5 border border-blue-500/10 text-slate-200">
                <span className="block font-bold text-[var(--theme-accent-secondary)]">Security</span>
                <span className="text-xs text-slate-400">SHA-256 Hashing</span>
              </div>
            </div>
          </div>
        </div>

        {/* Education Timeline Card */}
        <div className="p-8 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-card-bg)] shadow-sm space-y-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            <GraduationCap className="w-5 h-5 text-[var(--theme-accent)]" />
            Education Timeline
          </h3>

          <div className="space-y-6 relative pl-6 border-l border-[var(--theme-border)]">
            {/* BE */}
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[var(--theme-accent)]" />
              <span className="text-xs font-bold text-[var(--theme-accent)]">2022 - 2026</span>
              <h4 className="mt-1 font-bold text-white text-base">B.E. – Information Technology</h4>
              <p className="text-slate-400 text-sm">Annamalai University</p>
              <p className="text-xs font-bold text-[var(--theme-accent-secondary)] mt-1">CGPA: 7.96</p>
            </div>

            {/* HSC */}
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-slate-500" />
              <span className="text-xs font-bold text-slate-500">2021</span>
              <h4 className="mt-1 font-bold text-white text-base">HSC (Class XII)</h4>
              <p className="text-slate-400 text-sm">Kamaraj Matric Hr. Sec. School, Chidambaram</p>
              <p className="text-xs font-bold text-slate-500 mt-1">Marks: 80%</p>
            </div>

            {/* SSLC */}
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-slate-500" />
              <span className="text-xs font-bold text-slate-500">2019</span>
              <h4 className="mt-1 font-bold text-white text-base">SSLC (Class X)</h4>
              <p className="text-slate-400 text-sm">Kamaraj Matric Hr. Sec. School, Chidambaram</p>
              <p className="text-xs font-bold text-slate-500 mt-1">Marks: 76%</p>
            </div>
          </div>
        </div>

        {/* Skills Selection Component (Full-Width Row in the Grid) */}
        <div className="md:col-span-2 p-8 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-card-bg)] shadow-sm">
          <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-6">
            <Code className="w-5 h-5 text-[var(--theme-accent)]" />
            Skills & Tech Stack Selection
          </h3>
          <div className="flex flex-wrap gap-3">
            {skillsList.map((skill, idx) => (
              <div
                key={idx}
                className="px-4 py-2.5 rounded-xl border border-[var(--theme-border)] bg-slate-900/60 text-slate-350 font-medium text-sm flex items-center gap-2 transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.15)] hover:-translate-y-0.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span>{skill.name}</span>
                <span className="text-[10px] opacity-40 uppercase group-hover:opacity-75 transition-opacity">({skill.category})</span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </PageContainer>
  );
}

// Inline fallback icon
function UserIcon({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24" 
      strokeWidth={2} 
      stroke="currentColor" 
      className={className}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  );
}