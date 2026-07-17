import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface NavNode {
  name: string;
  path: string;
  targetId?: string;
}

const navNodes: NavNode[] = [
  { name: "Home", path: "/", targetId: "home" },
  { name: "About", path: "/about" },
  { name: "Skills", path: "/", targetId: "skills" },
  { name: "Projects", path: "/projects" },
  { name: "Experience", path: "/experience" },
  { name: "Contact", path: "/contact" },
];

export default function LeftLoopNavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeIdx, setActiveIdx] = useState(0);

  // Continuously loop and highlight the nodes sequentially
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % navNodes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleClick = (node: NavNode) => {
    if (location.pathname === node.path && node.targetId) {
      const el = document.getElementById(node.targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    navigate(node.path);
  };

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center select-none">
      <div className="relative flex flex-col items-center gap-9">
        
        {/* Connecting web-line / symbiote string */}
        <div className="absolute top-2 bottom-2 w-[1.5px] transition-all duration-700 bg-gradient-to-b from-slate-700/40 via-lime-500/20 to-slate-700/40">
          {/* Animated glowing active tracer dot */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 w-2.5 h-16 rounded-full transition-all duration-1000 ease-in-out bg-lime-500 shadow-[0_0_12px_#84cc16]"
            style={{
              top: `${(activeIdx / (navNodes.length - 1)) * 88}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>

        {navNodes.map((node, idx) => {
          const isActive = activeIdx === idx;
          const isCurrentRoute = location.pathname === node.path;
          
          return (
            <button
              key={node.name}
              onClick={() => handleClick(node)}
              className="relative flex items-center group cursor-pointer focus:outline-none"
            >
              {/* Node dot */}
              <div 
                className={`w-3.5 h-3.5 rounded-full border-2 transition-all duration-700 z-10 flex items-center justify-center ${
                  isActive
                    ? "bg-lime-400 border-lime-400 scale-125 shadow-[0_0_10px_rgba(163,230,53,0.6)]"
                    : isCurrentRoute
                      ? "bg-emerald-600 border-emerald-600 shadow-[0_0_8px_rgba(5,150,105,0.4)]"
                      : "bg-slate-900 border-slate-700 group-hover:border-slate-500"
                }`}
              />

              {/* Float label */}
              <span className={`absolute left-8 px-2.5 py-1 text-[10px] font-bold tracking-widest uppercase rounded border transition-all duration-500 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 ${
                isActive
                  ? "opacity-100 translate-x-0 border-lime-400/25 bg-slate-900/90 text-lime-400 shadow-sm"
                  : isCurrentRoute
                    ? "opacity-80 translate-x-0 border-emerald-500/20 bg-emerald-900/80 text-emerald-400"
                    : "border-slate-800 bg-slate-950/70 text-slate-400"
              }`}>
                {node.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
