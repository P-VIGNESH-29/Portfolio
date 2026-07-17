import { NavLink, useLocation } from "react-router-dom";
import { Home, User, Briefcase, Code, Mail } from "lucide-react";
import { motion } from "framer-motion";

interface DockItem {
  name: string;
  path: string;
  icon: React.ComponentType<{ className?: string }>;
}

const dockItems: DockItem[] = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: User },
  { name: "Experience", path: "/experience", icon: Briefcase },
  { name: "Projects", path: "/projects", icon: Code },
  { name: "Contact", path: "/contact", icon: Mail },
];

export default function NavigationDock() {
  const location = useLocation();
  
  return (
    <nav className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-3 py-4 px-2.5 rounded-full border border-[var(--theme-border)] bg-[var(--theme-card-bg)] backdrop-blur-lg shadow-xl shadow-black/20">
      {dockItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        
        return (
          <div key={item.name} className="relative group">
            <NavLink
              to={item.path}
              className={`relative z-10 p-3.5 rounded-full flex items-center justify-center transition-colors duration-300 ${
                isActive 
                  ? "text-white" 
                  : "text-slate-400 hover:text-[var(--theme-text)]"
              }`}
            >
              {isActive && (
                <motion.div 
                  layoutId="active-dock-tab"
                  className="absolute inset-0 rounded-full bg-[var(--theme-accent)] shadow-[0_0_15px_var(--theme-accent)]"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}
              <motion.div 
                whileHover={{ scale: 1.15 }} 
                whileTap={{ scale: 0.9 }}
                className="relative z-10"
              >
                <Icon className="w-5 h-5" />
              </motion.div>
            </NavLink>

            {/* Hover Tooltip (Slides out to the right) */}
            <div className="absolute left-[110%] top-1/2 -translate-y-1/2 pointer-events-none opacity-0 translate-x-[-10px] group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
              <div className="px-3 py-1.5 rounded-lg border border-[var(--theme-border)] bg-[var(--theme-card-bg)] text-[var(--theme-text)] text-xs font-semibold tracking-wider uppercase shadow-md backdrop-blur-md">
                {item.name}
              </div>
            </div>
          </div>
        );
      })}
    </nav>
  );
}

// Mobile bottom navigation dock
export function MobileNavigationDock() {
  const location = useLocation();
  
  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 md:hidden flex items-center gap-3 py-2 px-4 rounded-full border border-[var(--theme-border)] bg-[var(--theme-card-bg)] backdrop-blur-lg shadow-xl shadow-black/20">
      {dockItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        
        return (
          <NavLink
            key={item.name}
            to={item.path}
            className={`relative z-10 p-3.5 rounded-full flex items-center justify-center transition-colors duration-300 ${
              isActive 
                ? "text-white" 
                : "text-slate-400 hover:text-[var(--theme-text)]"
            }`}
          >
            {isActive && (
              <motion.div 
                layoutId="active-mobile-dock-tab"
                className="absolute inset-0 rounded-full bg-[var(--theme-accent)] shadow-[0_0_15px_var(--theme-accent)]"
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
              />
            )}
            <motion.div 
              whileHover={{ scale: 1.15 }} 
              whileTap={{ scale: 0.9 }}
              className="relative z-10"
            >
              <Icon className="w-5 h-5" />
            </motion.div>
          </NavLink>
        );
      })}
    </nav>
  );
}
