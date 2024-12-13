import { Project, SkillSet, SkillProficiency } from "@/types/portfolio";

export const projects: Project[] = [
  {
    title: "Algorithm Visualizer",
    description: "Interactive visualization of sorting and pathfinding algorithms using React",
    tech: ["React", "TypeScript", "Algorithms", "Data Structures"],
    github: "#"
  },
  {
    title: "Smart Task Manager",
    description: "AI-powered task management system with priority scheduling",
    tech: ["Python", "Machine Learning", "FastAPI", "React"],
    github: "#"
  },
  {
    title: "Secure Chat Application",
    description: "End-to-end encrypted messaging app with real-time communication",
    tech: ["Node.js", "WebSocket", "Cryptography", "React"],
    github: "#"
  }
];

export const skillProficiency: SkillProficiency = {
  languages: [
    { name: "Python", proficiency: 90 },
    { name: "JavaScript", proficiency: 85 },
    { name: "TypeScript", proficiency: 80 },
    { name: "Java", proficiency: 75 },
    { name: "C++", proficiency: 70 }
  ]
};

export const skills: SkillSet = {
  frameworks: ["React", "Next.js", "Node.js", "Express", "Django"],
  tools: ["Git", "Docker", "AWS", "Linux", "VS Code"],
  concepts: ["Data Structures", "Algorithms", "System Design", "Database Design"]
};