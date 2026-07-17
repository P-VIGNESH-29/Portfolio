import { useEffect, useRef } from "react";
import { Outlet, useLocation, ScrollRestoration, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import NavigationDock, { MobileNavigationDock } from "../components/NavigationDock";

const routes = ["/", "/about", "/experience", "/projects", "/contact"];

export default function RootLayout() {
  const location = useLocation();
  const navigate = useNavigate();
  const isTransitioning = useRef(false);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isTransitioning.current) return;

      const currentIndex = routes.indexOf(location.pathname);
      if (currentIndex === -1) return;

      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 15;
      const isAtTop = scrollTop <= 15;

      if (e.deltaY > 50 && isAtBottom && currentIndex < routes.length - 1) {
        isTransitioning.current = true;
        navigate(routes[currentIndex + 1]);
        window.scrollTo(0, 0);
        setTimeout(() => {
          isTransitioning.current = false;
        }, 1500);
      } else if (e.deltaY < -50 && isAtTop && currentIndex > 0) {
        isTransitioning.current = true;
        navigate(routes[currentIndex - 1]);
        window.scrollTo(0, 0);
        setTimeout(() => {
          isTransitioning.current = false;
        }, 1500);
      }
    };

    let touchStartY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isTransitioning.current) return;

      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchStartY - touchEndY; // positive: swipe up (scroll down), negative: swipe down (scroll up)

      const currentIndex = routes.indexOf(location.pathname);
      if (currentIndex === -1) return;

      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 15;
      const isAtTop = scrollTop <= 15;

      if (deltaY > 80 && isAtBottom && currentIndex < routes.length - 1) {
        isTransitioning.current = true;
        navigate(routes[currentIndex + 1]);
        window.scrollTo(0, 0);
        setTimeout(() => {
          isTransitioning.current = false;
        }, 1500);
      } else if (deltaY < -80 && isAtTop && currentIndex > 0) {
        isTransitioning.current = true;
        navigate(routes[currentIndex - 1]);
        window.scrollTo(0, 0);
        setTimeout(() => {
          isTransitioning.current = false;
        }, 1500);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: true });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [location.pathname, navigate]);

  return (
    <div className="relative min-h-screen w-full transition-colors duration-700 bg-[var(--theme-bg)] text-[var(--theme-text)] overflow-x-hidden selection:bg-rose-500/30 selection:text-rose-200 font-sans antialiased">

      <NavigationDock />
      <MobileNavigationDock />

      {/* Premium Background Elements */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Ambient background glows */}
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[130px] animate-pulse" style={{ animationDuration: "12s" }} />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-sky-500/10 blur-[130px] animate-pulse" style={{ animationDuration: "15s" }} />
        <div className="absolute top-[35%] left-[55%] w-[35%] h-[35%] rounded-full bg-cyan-500/5 blur-[110px] animate-pulse" style={{ animationDuration: "11s" }} />
        
        {/* Theme-aware Cyber Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--theme-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--theme-border)_1px,transparent_1px)] bg-[size:4.5rem_4.5rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-35" />
      </div>

      {/* Main Page Layout Container */}
      <main className="relative z-10 w-full min-h-screen flex flex-col justify-between">
        <AnimatePresence mode="wait" initial={true}>
          <motion.div
            key={location.pathname}
            initial="initial"
            animate="animate"
            exit="exit"
            className="w-full flex-grow flex flex-col"
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>

      {/* React Router Scroll Restoration */}
      <ScrollRestoration />
    </div>
  );
}
