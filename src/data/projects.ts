export interface Project {
  title: string;
  category: string;
  tech: string[];
  points: string[];
  color: string;
  html_url: string;
  stargazers_count?: number;
  forks_count?: number;
}

export const projectsList: Project[] = [
  {
    title: "Expense Tracker",
    category: "Full-Stack Development",
    tech: ["React", "Node.js", "Express", "MERN Stack", "Local Storage"],
    points: [
      "Built a comprehensive financial dashboard to log, monitor, and analyze spending patterns.",
      "Features dark and light theme options, an optimized global navigation header, and inline recurring monthly bills editing.",
      "Implemented instant sync mechanisms utilizing local storage."
    ],
    color: "from-blue-600 to-sky-500",
    html_url: "https://github.com/P-VIGNESH-29/Expense-Tracker.git",
    stargazers_count: 0,
    forks_count: 0
  },
  {
    title: "Cineverse",
    category: "Media & Entertainment",
    tech: ["React", "Node.js", "Express", "Full Stack", "Media App"],
    points: [
      "Designed a premium media aggregation and exploration dashboard layout.",
      "Integrated high-end movie card components, floating rating indices, and dedicated genre tag elements.",
      "Implemented transparent cutout poster handling and context-aware fallback states."
    ],
    color: "from-rose-600 to-orange-500",
    html_url: "https://github.com/P-VIGNESH-29/CINEVERSE.git",
    stargazers_count: 0,
    forks_count: 0
  },
  {
    title: "Gaze-UI – Accessible ATM Interface",
    category: "Accessibility & Eye Tracking",
    tech: ["JavaScript", "WebGazer.js", "Web Speech API", "HTML5", "CSS3"],
    points: [
      "Built a fully touchless ATM simulation supporting eye-tracking and voice commands.",
      "Integrated Web Speech API for bidirectional voice recognition and text-to-speech audio feedback.",
      "Implemented a 9-point gaze calibration system with 300ms dwell-time action triggering."
    ],
    color: "from-indigo-600 to-cyan-500",
    html_url: "https://github.com",
    stargazers_count: 12,
    forks_count: 2
  },
  {
    title: "Blockchain Land Registry System",
    category: "Web Security & Hashing",
    tech: ["Python", "Flask", "MySQL", "SQLAlchemy", "Tailwind CSS", "SHA-256"],
    points: [
      "Developed a secure, tamper-proof land records system with SHA-256 blockchain hashing.",
      "Designed role-based access controls with admin workflows and file integrity audits.",
      "Built custom genesis-block transactions ensuring data auditability."
    ],
    color: "from-purple-600 to-pink-500",
    html_url: "https://github.com",
    stargazers_count: 8,
    forks_count: 1
  },
  {
    title: "Hand Detecting Game",
    category: "Computer Vision",
    tech: ["Python", "MediaPipe", "OpenCV"],
    points: [
      "Built a motion-controlled game using real-time webcam hand gesture recognition.",
      "Processed live frames via OpenCV to track landmarks with sub-15ms latency.",
      "Mapped complex finger triggers to custom controls, enabling touchless UI inputs."
    ],
    color: "from-emerald-600 to-teal-500",
    html_url: "https://github.com",
    stargazers_count: 15,
    forks_count: 5
  }
];
