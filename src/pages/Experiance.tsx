import PageContainer from "../components/PageContainer";
import { motion } from "framer-motion";
import { childVariants } from "../animations/variants";
import { Award, Briefcase, Calendar, ShieldCheck } from "lucide-react";

interface Internship {
  role: string;
  company: string;
  year: string;
  points: string[];
  color: string;
}

const internships: Internship[] = [
  {
    role: "Full-Stack Web Development Intern",
    company: "SocEdge",
    year: "Present",
    points: [
      "Currently working on full-stack web development specializing in Node.js, Express, and React.",
      "Building end-to-end web applications with clean architecture, responsive UI, and secure backend systems."
    ],
    color: "bg-blue-600 ring-blue-600/20"
  },
  {
    role: "AI/ML Intern",
    company: "HITAKEY Tech Solution",
    year: "2025",
    points: [
      "Explored supervised and unsupervised machine learning algorithms (linear regression, k-means, decision trees) through structured tasks.",
      "Implemented and evaluated models using Python and scikit-learn, gaining hands-on experience in end-to-end ML workflows."
    ],
    color: "bg-[var(--theme-accent)] ring-[var(--theme-accent)]/20"
  },
  {
    role: "UI/UX Design Intern",
    company: "AIIRF EDII – Incubation Research Foundation",
    year: "2024",
    points: [
      "Designed wireframes and user journey maps using Miro, applying design thinking principles to improve application navigation flow.",
      "Practiced UX heuristics, user personas, and empathy mapping to create user-centered prototype experiences."
    ],
    color: "bg-[var(--theme-accent-secondary)] ring-[var(--theme-accent-secondary)]/20"
  }
];

const certifications = [
  { title: "Python Programming", issuer: "CSC Computer Education" },
  { title: "Full Stack Web Development (Python)", issuer: "Qspiders, Velachery" },
  { title: "Social Networks, Privacy & Security in Online Social Media", issuer: "NPTEL" }
];

export default function Experiance() {
  return (
    <PageContainer title="Internships & Certifications" subtitle="My Work History & Training">
      <div className="grid md:grid-cols-12 gap-8 items-start select-text">
        
        {/* Internships Column */}
        <motion.div 
          variants={childVariants}
          className="md:col-span-8 space-y-8"
        >
          <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
            <Briefcase className="w-5 h-5 text-[var(--theme-accent)]" />
            Internship Experience
          </h3>

          <div className="relative pl-6 border-l border-[var(--theme-border)] space-y-12">
            {internships.map((intern, idx) => (
              <div key={idx} className="relative">
                {/* Timeline node */}
                <div className={`absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-slate-950 ${intern.color} ring-4`} />
                
                <div className="p-6 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-card-bg)] shadow-sm">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs font-semibold text-[var(--theme-accent)] flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {intern.year}
                    </span>
                  </div>
                  
                  <h4 className="mt-2 text-xl font-bold text-white">{intern.role}</h4>
                  <p className="text-slate-400 text-sm font-medium">{intern.company}</p>
                  
                  <ul className="mt-4 space-y-2 list-disc pl-4 text-sm text-slate-300 leading-relaxed">
                    {intern.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Column */}
        <motion.div 
          variants={childVariants}
          className="md:col-span-4 space-y-6"
        >
          <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
            <Award className="w-5 h-5 text-[var(--theme-accent)]" />
            Certifications
          </h3>

          <div className="space-y-4">
            {certifications.map((cert, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl border border-[var(--theme-border)] bg-[var(--theme-card-bg)] shadow-sm flex items-start gap-3 hover:border-[var(--theme-accent)] transition-all duration-300"
              >
                <ShieldCheck className="w-5 h-5 text-emerald-450 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-white text-sm leading-snug">
                    {cert.title}
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </PageContainer>
  );
}