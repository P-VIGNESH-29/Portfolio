import PageContainer from "../components/PageContainer";
import { motion } from "framer-motion";
import { childVariants } from "../animations/variants";
import { Phone, MapPin, Mail, Send } from "lucide-react";

// Custom SVG Brand Icons since they are missing in the lucide-react version
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

function LinkedinIcon({ className }: { className?: string }) {
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
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function Contact() {
  return (
    <PageContainer title="Get In Touch" subtitle="Connect With Me">
      <motion.div 
        variants={childVariants}
        className="grid md:grid-cols-5 gap-8 items-start max-w-5xl select-text"
      >
        {/* Contact Info Card */}
        <div className="md:col-span-2 space-y-6">
          <div className="p-8 rounded-3xl border border-[var(--theme-border)] bg-[var(--theme-card-bg)] shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-white mb-2">
              Contact Details
            </h3>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-rose-500/5 border border-rose-500/10 text-[var(--theme-accent)]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase tracking-widest">Phone</span>
                  <span className="text-sm font-semibold text-slate-200">+91 79046 97834</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-blue-500/5 border border-blue-500/10 text-[var(--theme-accent-secondary)]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase tracking-widest">Email</span>
                  <a href="mailto:p.vignesh2909@gmail.com" className="text-sm font-semibold text-[var(--theme-accent-secondary)] hover:underline">
                    p.vignesh2909@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-lg bg-emerald-500/5 border border-emerald-500/10 text-emerald-450">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[10px] text-slate-400 uppercase tracking-widest">Location</span>
                  <span className="text-sm font-semibold text-slate-200">Chennai, India</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[var(--theme-border)] space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Follow My Profiles
              </h4>
              <div className="flex gap-3">
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--theme-border)] text-xs font-semibold text-slate-300 hover:text-[var(--theme-accent)] hover:border-[var(--theme-accent)] transition-all bg-white/5"
                >
                  <LinkedinIcon className="w-3.5 h-3.5" />
                  LinkedIn
                </a>
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--theme-border)] text-xs font-semibold text-slate-300 hover:text-[var(--theme-accent)] hover:border-[var(--theme-accent)] transition-all bg-white/5"
                >
                  <GithubIcon className="w-3.5 h-3.5" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Message Form */}
        <form className="md:col-span-3 p-8 rounded-3xl border border-[var(--theme-border)] bg-[var(--theme-card-bg)] shadow-sm space-y-4">
          <h3 className="text-xl font-bold text-white mb-2">
            Send me a Message
          </h3>
          
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Your Name
            </label>
            <input 
              type="text" 
              placeholder="Vignesh P" 
              className="w-full px-4 py-3 rounded-xl border border-[var(--theme-border)] bg-slate-955/40 text-white placeholder-slate-500 focus:outline-none focus:border-[var(--theme-accent)] transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Email Address
            </label>
            <input 
              type="email" 
              placeholder="p.vignesh2909@gmail.com" 
              className="w-full px-4 py-3 rounded-xl border border-[var(--theme-border)] bg-slate-955/40 text-white placeholder-slate-500 focus:outline-none focus:border-[var(--theme-accent)] transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
              Message
            </label>
            <textarea 
              rows={4}
              placeholder="Let's build a MERN stack application together!" 
              className="w-full px-4 py-3 rounded-xl border border-[var(--theme-border)] bg-slate-955/40 text-white placeholder-slate-500 focus:outline-none focus:border-[var(--theme-accent)] transition-colors resize-none"
              required
            />
          </div>

          <button 
            type="submit"
            className="w-full py-3.5 rounded-xl bg-[var(--theme-accent)] hover:bg-[var(--theme-accent)]/85 text-white font-semibold text-sm cursor-pointer shadow-lg shadow-black/20 hover:shadow-lg transition-all flex items-center justify-center gap-2"
          >
            Send Message
            <Send className="w-4 h-4" />
          </button>
        </form>
      </motion.div>
    </PageContainer>
  );
}