// Centralized Portfolio Configuration
// Update this file to modify all portfolio content

// Import assets using the @assets alias from vite.config.ts
import headshotImage from "@assets/images/headshot.png";
import chromeLogoImage from "@assets/logos/chrome.png";

// Asset Configuration
export const ASSETS = {
  images: {
    profile: {
      headshot: headshotImage
    },
    companies: {
      google: chromeLogoImage
    }
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
}

// Company Website Configuration
export const COMPANY_WEBSITES = {
  "Google": "https://www.google.com",
  "Northeastern University": "https://www.northeastern.edu",
  "Bracebridge Capital": "https://www.bracebridge.com",
  "HA Brick": "https://www.habrick.com",
  "GEP Worldwide": "https://www.gep.com"
};

// Experience Data
export const EXPERIENCES: ExperienceItem[] = [
  {
    company: "Google",
    role: "Open Source Contributor — Chrome Team, Google Summer of Code 2025",
    duration: "Apr 2025 – Present",
    description: [
      "Contributing to Chromium's TabStrip debugging infrastructure using C++ and TypeScript to visualize complex browser state management.",
      "Fixed critical WebUI bug affecting tab thumbnail updates across different system themes."
    ],
    skills: ["C++", "TypeScript", "Mojo IPC", "Chromium", "Debugging", "WebUI"],
    current: true,
    website: COMPANY_WEBSITES["Google"]
  },
  {
    company: "Northeastern University",
    role: "Teaching Assistant — Program Design",
    duration: "July 2025 – Present",
    description: [
      "Mentoring 200+ students in Java, software design patterns, and best practices.",
      "Supporting curriculum development and maintaining high academic standards."
    ],
    skills: ["Java", "OOP", "Design Patterns", "JUnit", "Teaching", "MVC"],
    current: true,
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
    website: COMPANY_WEBSITES["Bracebridge Capital"]
  },
  {
    company: "HA Brick",
    role: "Full Stack Developer",
    duration: "Feb 2022 – Jul 2023",
    description: [
      "Led development of a cloud-hosted ERP system serving 20+ construction projects with React frontend and .NET backend.",
      "Implemented real-time features with GraphQL and WebSockets, plus secure authentication systems."
    ],
    skills: ["C#", ".NET", "React", "TypeScript", "GraphQL", "WebSockets", "OAuth 2.0", "JWT", "SQL"],
    website: COMPANY_WEBSITES["HA Brick"]
  },
  {
    company: "GEP Worldwide",
    role: "Software Engineer",
    duration: "Jun 2019 – Nov 2021",
    description: [
      "Developed microservices for GEP-SMART SaaS platform serving Fortune 500 clients in global procurement workflows.",
      "Optimized high-volume invoice processing (70K+ invoices) and built event-driven automation features."
    ],
    skills: ["C#", ".NET Core", "REST APIs", "Microservices", "Event-Driven Architecture", "SQL", "Azure", "Apache Kafka"],
    website: COMPANY_WEBSITES["GEP Worldwide"]
  }
];

// Projects Data
export const PROJECTS: Project[] = [
  {
    title: "Google Summer of Code 2025 - Chrome Team",
    description: "Developing debugging tools for Chromium's TabStrip model to aid complex tab and session behavior analysis",
    details: [
      "Developing a feature for Google's Chrome team through Google Summer of Code 2025 to capture and visualize the live backend state of the tabstrip model—including tab order, group metadata, selection models, and session restore data—using C++, Mojo IPC, and TypeScript to aid debugging of complex tab and session behaviors across platforms.",
      "Fixed a bug in Chrome's WebUI TabStrip that prevented thumbnails from updating on theme changes, by extending C++ backend observers to trigger refresh logic in the ViewModel."
    ],
    technologies: ["C++", "TypeScript", "Mojo IPC", "Chromium", "Debugging", "WebUI"],
    duration: "Apr 2025 - Present",
    featured: true,
    type: "Open Source"
  },
  {
    title: "Stack Overflow-like Q&A Platform",
    description: "Full-stack Q&A web application using MERN stack with MVVM pattern and comprehensive testing",
    details: [
      "Built a full-stack Q&A web application using the MERN stack, leveraging the MVVM pattern to ensure separation of concerns, while designing a modular React UI with custom hooks.",
      "Developed RESTful APIs for CRUD operation and integrated Cypress for end-to-end testing, ensuring UI validation and consistency.",
      "Designed a scalable backend in Node.js, Express with a MongoDB database to power RESTful APIs, with JWT authentication, rate-limiting, and input validation via middlewares to guard against denial-of-service, XSS, and CSRF security attacks."
    ],
    technologies: ["JavaScript", "React", "Express", "Node.js", "MongoDB", "Cypress", "JWT", "MERN Stack"],
    duration: "Jan 2025 – Apr 2025",
    githubUrl: "#",
    liveUrl: "#",
    featured: true,
    type: "Web Application"
  },
  {
    title: "Budget Your Life",
    description: "Android personal finance management app with intelligent location-based features and MVVM architecture",
    details: [
      "Built an Android app to manage personal finances, leveraging MVVM architecture to ensure separation of concerns and decouple business logic and UI, while using Repository pattern and Factories to interact with databases for expense tracking.",
      "Implemented intuitive graphs, GPS location records, and smart reminders for automatic billing prompts at frequent locations, as well as regular expenses settings for recurring expenses.",
      "Achieved 95% code coverage through comprehensive JUnit testing and CI/CD with GitHub Actions."
    ],
    technologies: ["Java", "Android Studio", "Firebase", "Material Design", "JUnit", "Github Actions", "MVVM"],
    duration: "May 2025 – Aug 2025",
    githubUrl: "#",
    type: "Mobile App"
  }
];

// Education Data
export const EDUCATION: EducationItem[] = [
  {
    institution: "Northeastern University",
    degree: "Master of Science in Computer Science",
    duration: "Sep 2023 – May 2025",
    gpa: "4.0/4.0",
    courses: [
      "Program Design Paradigm",
      "Algorithms",
      "Database Design",
      "Web Development",
      "Mobile Application Development",
      "Software Engineering"
    ]
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
  resume: "#"
};

// Header Configuration
export const HEADER_CONFIG = {
  logo: "<BG/>",
  navigation: [
    { label: "About", id: "about" },
    { label: "Experience", id: "experience" },
    { label: "Projects", id: "projects" },
    { label: "Skills", id: "skills" },
    { label: "Education", id: "education" },
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
  description: "MS Computer Science graduate from Northeastern University with 4.0 GPA, specializing in distributed systems and microservices architecture. Currently contributing to Google's Chrome team through Google Summer of Code 2025, with 3+ years of experience building scalable, cloud-native applications and high-performance backend systems.",
  typewriterSettings: {
    speed: 60,
    deleteSpeed: 50,
    delayBetween: 3000
  },
  status: {
    location: "United States",
    availability: "Open to Work",
    currentRole: "Open Source Contributor"
  }
};
