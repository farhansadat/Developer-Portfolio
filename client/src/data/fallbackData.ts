import { Project, Skill, Certification, Experience, ContactMessage } from '../types';

export const fallbackProjects: Project[] = [
  {
    id: 1,
    title: "Luna Expense Tracker",
    description: "A comprehensive expense tracking application built with React and Node.js. Features include real-time expense monitoring, category management, and detailed financial analytics.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "Chart.js"],
    githubUrl: "https://github.com/farhansadat/Luna-Expense-Tracker",
    liveUrl: "https://luna-expense-tracker.netlify.app",
    imageUrl: "https://raw.githubusercontent.com/farhansadat/Luna-Expense-Tracker/main/screenshots/Dashboard.png",
    gradient: "from-blue-500 to-purple-600",
    icon: "fas fa-chart-line",
    color: "blue",
    featured: true
  },
  {
    id: 2,
    title: "Developer Portfolio",
    description: "A modern, responsive portfolio website showcasing my projects and skills. Built with React, TypeScript, and Tailwind CSS with smooth animations.",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vite"],
    githubUrl: "https://github.com/farhansadat/Mydevportfolio",
    liveUrl: "https://alimullahsadat.netlify.app",
    gradient: "from-emerald-500 to-teal-600",
    icon: "fas fa-code",
    color: "emerald",
    featured: true
  }
];

export const fallbackSkills: Skill[] = [
  {
    id: 1,
    name: "React",
    category: "Frontend",
    level: 90,
    icon: "fab fa-react",
    color: "blue",
    description: "Advanced proficiency in React development with hooks, context, and modern patterns"
  },
  {
    id: 2,
    name: "TypeScript",
    category: "Frontend",
    level: 85,
    icon: "fab fa-js-square",
    color: "blue",
    description: "Strong typing skills for scalable JavaScript applications"
  },
  {
    id: 3,
    name: "Node.js",
    category: "Backend",
    level: 80,
    icon: "fab fa-node-js",
    color: "green",
    description: "Server-side JavaScript development with Express and modern frameworks"
  },
  {
    id: 4,
    name: "Python",
    category: "Backend",
    level: 75,
    icon: "fab fa-python",
    color: "yellow",
    description: "Backend development, data analysis, and automation scripts"
  },
  {
    id: 5,
    name: "MongoDB",
    category: "Database",
    level: 70,
    icon: "fas fa-database",
    color: "green",
    description: "NoSQL database design and optimization"
  },
  {
    id: 6,
    name: "PostgreSQL",
    category: "Database",
    level: 75,
    icon: "fas fa-database",
    color: "blue",
    description: "Relational database design and complex queries"
  },
  {
    id: 7,
    name: "Docker",
    category: "DevOps",
    level: 65,
    icon: "fab fa-docker",
    color: "blue",
    description: "Containerization and deployment automation"
  },
  {
    id: 8,
    name: "Git",
    category: "Tools",
    level: 90,
    icon: "fab fa-git-alt",
    color: "orange",
    description: "Version control and collaborative development workflows"
  }
];

export const fallbackCertifications: Certification[] = [
  {
    id: 1,
    name: "AWS Certified Developer - Associate",
    organization: "Amazon Web Services",
    issueDate: "2024-01-15",
    expiryDate: "2027-01-15",
    credentialId: "AWS-DEV-2024-001",
    description: "Certified in developing and maintaining applications on AWS platform",
    skills: ["AWS", "Lambda", "DynamoDB", "S3", "CloudFormation"]
  },
  {
    id: 2,
    name: "React Developer Certification",
    organization: "Meta",
    issueDate: "2023-11-20",
    expiryDate: "2025-11-20",
    credentialId: "META-REACT-2023-002",
    description: "Advanced React development patterns and best practices",
    skills: ["React", "JavaScript", "Frontend Development"]
  }
];

export const fallbackExperiences: Experience[] = [
  {
    id: 1,
    company: "Tech Solutions GmbH",
    position: "Full Stack Developer",
    startDate: "2023-06-01",
    current: true,
    description: "Developing and maintaining web applications using React, Node.js, and PostgreSQL. Leading frontend architecture decisions and mentoring junior developers.",
    location: "Berlin, Germany",
    technologies: ["React", "Node.js", "PostgreSQL", "TypeScript", "Docker"],
    achievements: [
      "Improved application performance by 40% through code optimization",
      "Led migration from JavaScript to TypeScript across 5 projects",
      "Mentored 3 junior developers in modern web development practices"
    ]
  },
  {
    id: 2,
    company: "Digital Agency",
    position: "Frontend Developer",
    startDate: "2022-01-15",
    endDate: "2023-05-31",
    description: "Built responsive web applications and e-commerce platforms for various clients. Specialized in React development and UI/UX implementation.",
    location: "Remote",
    technologies: ["React", "JavaScript", "Tailwind CSS", "Next.js"],
    achievements: [
      "Delivered 12+ client projects on time and within budget",
      "Implemented accessibility standards across all projects",
      "Reduced page load times by 35% through optimization techniques"
    ]
  }
];

export const fallbackMessages: ContactMessage[] = [];