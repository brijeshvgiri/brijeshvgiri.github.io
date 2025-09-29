// Centralized Portfolio Configuration
// Update this file to modify all portfolio content

// Import assets using the @assets alias from vite.config.ts
import headshotImage from "@assets/images/headshot.png";
import chromeLogoImage from "@assets/logos/chrome.png";
import gepLogoImage from "@assets/logos/gep.png";
import habrickLogoImage from "@assets/logos/habrick.png";
import neuLogoImage from "@assets/logos/neu.png";
import muLogoImage from "@assets/logos/mu.png";
import bracebridgeLogoImage from "@assets/logos/bracebridge.png";
import resumePDF from "@assets/docs/BrijeshGiri-MSCS.pdf";

// Import icons
import React from "react";
import { Code, Globe, Database, Cloud, Settings, Building2, University, GraduationCap, Monitor, Star, Users, Zap } from "lucide-react";


// Asset Configuration
export const ASSETS = {
  images: {
    profile: {
      headshot: headshotImage
    },
    companies: {
      google: chromeLogoImage,
      gep: gepLogoImage,
      habrick: habrickLogoImage,
      neu: neuLogoImage,
      mu: muLogoImage,
      bracebridge: bracebridgeLogoImage
    }
  },
  documents: {
    resume: resumePDF
  }
} as const;

// Icon Configuration
export const ICON_CONFIG = {
  size: "h-20 w-20", // 80px square for circular logos
  scale: "scale-75", // 75% scale to fit within container
  hero: {
    size: "h-12 w-12", // 24px square for hero social icons
    spacing: "mt-12" // top margin for hero icon container
  }
} as const;

export interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  description: string[];
  skills: string[];
  current?: boolean;
  icon?: React.ReactNode;
  website?: string;
}

export interface Project {
  title: string;
  description: string;
  details: string[];
  technologies: string[];
  duration: string;
  githubUrl?: string;
  projectUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  type?: string;
  icon?: React.ReactNode;
}

export interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  gpa?: string;
  courses: string[];
  icon: React.ReactNode;
}

export interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

// Company Website Configuration
export const COMPANY_WEBSITES = {
  "Google": "https://summerofcode.withgoogle.com/programs/2025/projects/uxcDW4j2",
  "Northeastern University": "https://www.northeastern.edu",
  "Bracebridge Capital": "https://www.bracebridgecapital.com/",
  "HA Brick": "https://www.habrick.co.in",
  "GEP Worldwide": "https://www.gep.com/software/gep-smart"
};

// Experience Data
export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Google Summer of Code",
    role: "Open Source Contributor — Google Chrome",
    duration: "Apr 2025 – Present",
    description: [
      "Contributing to Chromium's TabStrip debugging infrastructure using C++ and TypeScript to visualize complex browser state management.",
    ],
    skills: ["C++", "TypeScript", "Mojo IPC", "Chromium", "Debugging", "WebUI"],
    current: true,
    icon: React.createElement("img", { 
      src: ASSETS.images.companies.google, 
      alt: "Google Chrome Logo", 
      className: `${ICON_CONFIG.size} object-contain ${ICON_CONFIG.scale}` 
    }),
    website: COMPANY_WEBSITES["Google"]
  },
  {
    company: "Northeastern University",
    role: "Teaching Assistant — Program Design",
    duration: "July 2025 – Present",
    description: [
      "Mentoring 200+ students  in Java, MVC architecture, object oriented design, SOLID principles, design patterns, and JUnit testing.",
    ],
    skills: ["Java", "OOP", "Design Patterns", "JUnit", "Teaching", "MVC"],
    current: true,
    icon: React.createElement("img", { 
      src: ASSETS.images.companies.neu, 
      alt: "Northeastern University Logo", 
      className: `${ICON_CONFIG.size} object-contain ${ICON_CONFIG.scale}` 
    }),
    website: COMPANY_WEBSITES["Northeastern University"]
  },
  {
    company: "Bracebridge Capital",
    role: "Software Engineer Intern",
    duration: "May 2024 – Nov 2024",
    description: [
      "Built internal tools to streamline trading app distribution and optimize backend performance for financial operations.",
      "Established Python project standards and automated CI/CD pipelines, improving team productivity and deployment reliability."
    ],
    skills: ["Python", "C#", "Azure DevOps", "Docker", "CI/CD", "PowerShell", "Unit Testing", "REST APIs"],
    icon: React.createElement("img", { 
      src: ASSETS.images.companies.bracebridge, 
      alt: "Bracebridge Capital Logo", 
      className: `${ICON_CONFIG.size} object-contain ${ICON_CONFIG.scale}` 
    }),
    website: COMPANY_WEBSITES["Bracebridge Capital"]
  },
  {
    company: "HA Brick",
    role: "Full Stack Developer",
    duration: "Feb 2022 – Jul 2023",
    description: [
      "Engineered core features in a cloud-hosted ERP system for an emerging startup to automate asset tracking, supply chain management, e-invoicing, and tax compliance, streamlining operations for 20+ construction projects and helping secure $1.4 million in contracts.",
      "Implemented structured logging across microservices, real-time features with GraphQL and WebSockets, plus secure authentication systems.",
    ],
    skills: ["C#", ".NET", "React", "TypeScript", "GraphQL", "WebSockets", "OAuth 2.0", "JWT", "SQL"],
    icon: React.createElement("img", { 
      src: ASSETS.images.companies.habrick, 
      alt: "HA Brick Logo", 
      className: `${ICON_CONFIG.size} object-contain scale-90` 
    }),
    website: COMPANY_WEBSITES["HA Brick"]
  },
  {
    company: "GEP Worldwide",
    role: "Software Engineer",
    duration: "Jun 2019 – Nov 2021",
    description: [
      "Developed REST APIs and backend microservices for GEP-SMART, a multi-tiered cloud-native SaaS platform supporting global procurement workflows for Fortune 500 clients.",
      "Optimized high-volume invoice processing (70K+ invoices) and built event-driven automation features."
],
    skills: ["C#", ".NET Core", "REST APIs", "Microservices", "Event-Driven Architecture", "SQL", "Azure", "Apache Kafka"],
    icon: React.createElement("img", { 
      src: ASSETS.images.companies.gep, 
      alt: "GEP Worldwide Logo", 
      className: `${ICON_CONFIG.size} object-contain scale-90` 
    }),
    website: COMPANY_WEBSITES["GEP Worldwide"]
  }
];

// Projects Data
export const PROJECTS: Project[] = [
  {
    title: "Chromium - GSOC 2025",
    description: "Developing debugging tools for Chromium's TabStrip model to aid debugging of complex tab behavior",
    details: [
      "Developing a feature for Google's Chrome team through Google Summer of Code 2025 to capture and visualize the live backend state of the tabstrip model, including tab order, group metadata, selection models, and session restore data, using C++, Mojo IPC, and TypeScript to aid debugging of complex tab and session behaviors across platforms.",
      "Fixed a bug in Chrome's WebUI TabStrip that prevented thumbnails from updating on theme changes, by extending C++ backend observers to trigger refresh logic in the ViewModel."
    ],
    technologies: ["C++", "TypeScript", "Mojo IPC", "Chromium", "Debugging", "WebUI"],
    duration: "Apr 2025 - Present",
    featured: true,
    type: "Open Source",
    projectUrl: "https://summerofcode.withgoogle.com/programs/2025/projects/uxcDW4j2",
    githubUrl: "https://issues.chromium.org/issues/427204855",
    icon: React.createElement(Star, { className: "h-5 w-5 text-yellow-500" })
  },
  {
    title: "Stack Overflow-like Q&A Platform",
    description: "Full-stack Q&A web application using MERN stack with MVVM pattern",
    details: [
      "Built a full-stack Q&A web application using the MERN stack, leveraging the MVVM pattern to ensure separation of concerns, while designing a modular React UI with custom hooks.",
      "Developed RESTful APIs for CRUD operation and integrated Cypress for end-to-end testing, ensuring UI validation and consistency.",
      "Designed a scalable backend in Node.js, Express with a MongoDB database to power RESTful APIs, with JWT authentication, rate-limiting, and input validation via middlewares to guard against denial-of-service, XSS, and CSRF security attacks."
    ],
    technologies: ["JavaScript", "React", "Express", "Node.js", "MongoDB", "Cypress", "JWT", "MERN Stack"],
    duration: "Jan 2025 – Apr 2025",
    githubUrl: "https://github.com/brijesh-giri-neu/StackOverflow-Clone",
    featured: false,
    type: "Web Application",
    icon: React.createElement(Users, { className: "h-5 w-5 text-blue-500" })
  },
  {
    title: "Budget Your Life",
    description: "Android personal finance management app with intelligent location-based features",
    details: [
      "Built an Android app to manage personal finances, leveraging MVVM architecture to ensure separation of concerns and decouple business logic and UI, while using Repository pattern and Factories to interact with databases for expense tracking.",
      "Implemented intuitive graphs, GPS location records, and smart reminders for automatic billing prompts at frequent locations, as well as regular expenses settings for recurring expenses.",
      "Achieved 95% code coverage through comprehensive JUnit testing and CI/CD with GitHub Actions."
    ],
    technologies: ["Java", "Android Studio", "Firebase", "Material Design", "JUnit", "Github Actions", "MVVM"],
    duration: "May 2025 – Aug 2025",
    githubUrl: "https://github.com/brijesh-giri-neu/budget-manager",
    type: "Mobile App",
    icon: React.createElement(Zap, { className: "h-5 w-5 text-green-500" })
  }
];

// Education Data
export const EDUCATION: EducationItem[] = [
  {
    institution: "Northeastern University",
    degree: "Master of Science, Computer Science",
    duration: "Sep 2023 – Dec 2025",
    gpa: "4.0",
    courses: [
      "Program Design Patterns",
      "Database Management Systems", 
      "Algorithms",
      "Mobile Application Development",
      "Fundamentals of Software Engineering",
      "Foundations of Artificial Intelligence",
      "Natural Language Processing"
    ],
    icon: React.createElement("img", {
      src: ASSETS.images.companies.neu,
      alt: "Northeastern University Logo",
      className: `${ICON_CONFIG.size} object-contain ${ICON_CONFIG.scale}`
    })
  },
  {
    institution: "University of Mumbai",
    degree: "Bachelor of Engineering, Computer Engineering",
    duration: "Jul 2015 – Jun 2019",
    courses: [
      "Algorithms",
      "Data Structures",
      "Operating Systems",
      "Object Oriented Design",
      "Cloud Computing",
      "Database Design",
      "Distributed Systems",
      "Computer Networks",
      "Cyber Security",
      "Digital Forensics",
    ],
    icon: React.createElement("img", {
      src: ASSETS.images.companies.mu,
      alt: "University of Mumbai Logo",
      className: `${ICON_CONFIG.size} object-contain scale-125`
    })
  }
];

// Technical Skills Data
export const TECHNICAL_SKILLS: SkillCategory[] = [
  {
    title: "Languages",
    icon: React.createElement(Code, { className: "h-6 w-6" }),
    skills: ["C#", "Java", "Python", "TypeScript", "JavaScript", "C++", "PowerShell", "Bash"],
    color: "bg-primary/10 text-primary"
  },
  {
    title: "Web & Frameworks",
    icon: React.createElement(Globe, { className: "h-6 w-6" }),
    skills: [".NET", "Node.js", "Express", "React", "ASP.NET MVC", "RESTful Services", "GraphQL", "JUnit", "Jest", "WPF", "MVVM", "XAML", "HTML", "CSS"],
    color: "bg-chart-2/10 text-chart-2"
  },
  {
    title: "Databases",
    icon: React.createElement(Database, { className: "h-6 w-6" }),
    skills: ["MySQL", "MSSQL", "PostgreSQL", "MongoDB", "Redis", "CosmosDB", "SQL Server", "DynamoDB", "Qdrant", "Neo4j", "Vector DB"],
    color: "bg-chart-3/10 text-chart-3"
  },
  {
    title: "Cloud Native",
    icon: React.createElement(Cloud, { className: "h-6 w-6" }),
    skills: ["Apache Kafka", "Azure DevOps", "Docker", "Kubernetes", "Azure Logic App", "GitHub Actions", "Azure Event Grid", "AWS CloudWatch", "SNS", "AWS Lambda", "Azure Functions"],
    color: "bg-chart-4/10 text-chart-4"
  },
  {
    title: "Tools",
    icon: React.createElement(Settings, { className: "h-6 w-6" }),
    skills: ["Git", "GitLab", "Jira", "Gerrit", "SonarQube", "Android Studio", "Visual Studio", "Elasticsearch", "Logstash", "Kibana", "Selenium", "Jenkins", "Linux", "SQL Sentry", "Gradle", "NPM"],
    color: "bg-chart-5/10 text-chart-5"
  },
  {
    title: "Development Domains",
    icon: React.createElement(Monitor, { className: "h-6 w-6" }),
    skills: ["Backend Development", "Microservices", "Event-Driven Architecture", "API Development", "Web Development", "Full-Stack Development", "Mobile Applications", "Desktop Applications"],
    color: "bg-purple-100 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400"
  }
];

// Personal Information
export const PERSONAL_INFO = {
  name: "Brijesh Giri",
  location: "United States",
  // Used for footer section
  title: "Software Engineer & Full Stack Developer",
  email: "brijeshveerbahadur@gmail.com",
  linkedin: "https://linkedin.com/in/brijeshvbgiri98",
  github: "https://github.com/brijesh-giri-neu",
  gerrit: "https://chromium-review.googlesource.com/q/owner:brijeshvgiri@gmail.com",
  resume: ASSETS.documents.resume
};

// Header Configuration
export const HEADER_CONFIG = {
  logo: "<BG/>",
  navigation: [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Experience", id: "experience" },
    { label: "Education", id: "education" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" }
  ]
};

// Hero Section Content
export const HERO_CONTENT = {
  greeting: "Hello, I'm Brijesh",
  typewriterTexts: [
    "Software Engineer & Full Stack Developer",
    "Open Source @ Google Chrome", 
    "C++ Developer",
    "Microservices & Cloud Architect",
    "Backend Engineer"
  ],
  description: React.createElement("span", null, 
    "Software Engineer with 4+ years of experience building scalable, cloud-native applications and high-performance backend systems. Currently contributing to ",
    React.createElement("span", { className: "text-primary font-semibold dark:text-blue-400" }, "Google's Chrome team"),
    " through Google Summer of Code 2025. I specialize in distributed systems, microservices architecture, and enterprise-grade software solutions."
  ),
  typewriterSettings: {
    speed: 60,
    deleteSpeed: 50,
    delayBetween: 3000
  },
  status: {
    location: "United States",
    availability: "Open to Work",
    currentRole: "Open-Source Contributor"
  }
};
