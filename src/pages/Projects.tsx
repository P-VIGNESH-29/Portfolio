import { useEffect, useState } from "react";
import PageContainer from "../components/PageContainer";
import { motion, AnimatePresence } from "framer-motion";
import { childVariants } from "../animations/variants";
import { projectsList } from "../data/projects";
import type { Project } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

interface GithubRepo {
  fork: boolean;
  name: string;
  description: string | null;
  language: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
}

export default function Projects() {
  const [repos, setRepos] = useState<Project[]>(projectsList);

  useEffect(() => {
    const GITHUB_USERNAME = "vignesh2909"; 

    fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`)
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch");
        return res.json();
      })
      .then(data => {
        if (data && data.length > 0) {
          // Map fetched repositories to fit Project structure
          const fetched: Project[] = data
            .filter((r: GithubRepo) => {
              const lowerName = r.name.toLowerCase();
              return !r.fork && 
                lowerName !== "expense-tracker" && 
                lowerName !== "cineverse" && 
                !lowerName.includes("gaze-ui") && 
                !lowerName.includes("land-registry") && 
                !lowerName.includes("hand-detecting");
            })
            .map((r: GithubRepo) => ({
              title: r.name,
              category: "OPEN SOURCE",
              tech: [r.language || "GitHub"],
              points: [r.description || "A deep-dive engineering project built with passion. Explore the repository for full source code and documentation details."],
              color: "from-blue-600 to-indigo-500",
              html_url: r.html_url,
              stargazers_count: r.stargazers_count,
              forks_count: r.forks_count
            }));
          setRepos([...projectsList, ...fetched]);
        }
      })
      .catch(err => {
        console.error("GitHub fetch error (using fallbacks):", err);
      });
  }, []);

  return (
    <PageContainer title="My Creative Archive" subtitle="Featured Engineering Projects">
      <motion.div 
        variants={childVariants}
        className="select-text w-full"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          <AnimatePresence>
            {repos.map((repo, idx) => (
              <ProjectCard key={repo.html_url || idx} project={repo} idx={idx} />
            ))}
          </AnimatePresence>
        </div>
      </motion.div>
    </PageContainer>
  );
}