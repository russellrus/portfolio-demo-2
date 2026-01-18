import projectRetroSpaceShooter from './assets/project-retro-space-shooter.png';
import projectGalacticTaskManager from './assets/project-galactic-task-manager.jpeg';
import projectNebulaDashboard from './assets/project-nebula-dashboard.jpeg';

export const projects = [
  {
    id: 1,
    title: "Retro Space Shooter",
    description: "A classic 8-bit space shooter game built with JavaScript and Canvas.",
    tags: ["JavaScript", "HTML5 Canvas", "Game Dev"],
    demoLink: "#",
    githubLink: "#",
    image: projectGalacticTaskManager
  },
  {
    id: 2,
    title: "Galactic Task Manager",
    description: "Manage your daily missions with this React-based todo app.",
    tags: ["React", "LocalStorage", "Tailwind"],
    demoLink: "#",
    githubLink: "#",
    image: projectRetroSpaceShooter
  },
  {
    id: 3,
    title: "Nebula Dashboard",
    description: "Data visualization dashboard for tracking star systems.",
    tags: ["Vue.js", "D3.js", "API"],
    demoLink: "#",
    githubLink: "#",
    image: projectNebulaDashboard
  }
];

export const skills = [
  { name: "Frontend", items: ["React", "Vue", "Tailwind CSS", "Three.js"] },
  { name: "Backend", items: ["Node.js", "Supabase", "Python"] },
  { name: "Tools", items: ["Git", "Figma", "Vite", "Docker"] }
];
