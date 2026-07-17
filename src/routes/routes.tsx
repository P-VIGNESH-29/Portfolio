/* eslint-disable react-refresh/only-export-components */
import { lazy, Suspense } from "react";
import { createHashRouter, Navigate } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

// Lazy-loaded pages for optimization
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Experiance = lazy(() => import("../pages/Experiance"));
const Projects = lazy(() => import("../pages/Projects"));
const Contact = lazy(() => import("../pages/Contact"));

// Premium sleek loader for suspense fallback
const PageLoader = () => (
  <div className="flex h-[80vh] w-full items-center justify-center">
    <div className="relative flex items-center justify-center">
      {/* Outer ring */}
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-indigo-500/20 border-t-indigo-500" />
      {/* Inner glowing pulse */}
      <div className="absolute h-8 w-8 animate-pulse rounded-full bg-purple-500/30 blur-sm" />
    </div>
  </div>
);

export const router = createHashRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<PageLoader />}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "experience",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Experiance />
          </Suspense>
        ),
      },
      {
        path: "projects",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Projects />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<PageLoader />}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);
