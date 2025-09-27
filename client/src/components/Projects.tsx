import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar, Star, Users, Zap, Bug, Globe, Smartphone } from "lucide-react";
import { PERSONAL_INFO } from "@/config/portfolio";

interface Project {
  title: string;
  description: string;
  details: string[];
  technologies: string[];
  duration: string;
  githubUrl?: string;
  liveUrl?: string;
  projectUrl?: string;
  featured?: boolean;
  type?: string;
  icon?: React.ReactNode;
}

export default function Projects() {
  // todo: remove mock functionality - replace with real data
  const projects: Project[] = [
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
      type: "Open Source",
      projectUrl: `https://summerofcode.withgoogle.com/programs/2025/projects/uxcDW4j2`,
      githubUrl: `https://issues.chromium.org/issues/427204855`,
      icon: <Star className="h-5 w-5 text-yellow-500" />
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
      githubUrl: `https://github.com/brijesh-giri-neu/StackOverflow-Clone`,
      // liveUrl: "#",
      featured: true,
      type: "Web Application",
      icon: <Users className="h-5 w-5 text-blue-500" />
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
      githubUrl: `https://github.com/brijesh-giri-neu/budget-manager`,
      type: "Mobile App",
      icon: <Zap className="h-5 w-5 text-green-500" />
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of technical projects demonstrating full-stack development and problem-solving skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`hover-elevate transition-all duration-300 ${
                project.featured ? 'ring-2 ring-primary/20 bg-primary/5' : ''
              }`}
              data-testid={`card-project-${index}`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {project.icon && (
                        <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-muted/50">
                          {project.icon}
                        </div>
                      )}
                      <CardTitle className="text-xl text-foreground">
                        {project.title}
                      </CardTitle>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                      {project.featured && (
                        <Badge className="bg-primary text-primary-foreground">
                          Featured
                        </Badge>
                      )}
                      {project.type && (
                        <Badge variant="outline" className="text-xs">
                          {project.type}
                        </Badge>
                      )}
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-3">
                  <Calendar className="h-4 w-4" />
                  <span data-testid={`text-project-duration-${index}`}>{project.duration}</span>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <ul className="space-y-2">
                  {project.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex text-sm text-muted-foreground">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs"
                        data-testid={`badge-tech-${index}-${techIndex}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 pt-2">
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
                        data-testid={`button-github-${index}`}
                      >
                        {project.type === "Open Source" ? (
                          <Bug className="mr-2 h-4 w-4" />
                        ) : (
                          <Github className="mr-2 h-4 w-4" />
                        )}
                        {project.type === "Open Source" ? "Issue" : "Code"}
                      </Button>
                    )}
                    {project.projectUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.projectUrl, '_blank', 'noopener,noreferrer')}
                        data-testid={`button-project-${index}`}
                      >
                        {project.type === "Open Source" ? (
                          <Star className="mr-2 h-4 w-4" />
                        ) : project.type === "Mobile App" ? (
                          <Smartphone className="mr-2 h-4 w-4" />
                        ) : (
                          <Globe className="mr-2 h-4 w-4" />
                        )}
                        {project.type === "Open Source" ? "Project" : "Live Demo"}
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.liveUrl, '_blank', 'noopener,noreferrer')}
                        data-testid={`button-live-${index}`}
                      >
                        {project.type === "Mobile App" ? (
                          <Smartphone className="mr-2 h-4 w-4" />
                        ) : (
                          <Globe className="mr-2 h-4 w-4" />
                        )}
                        Live Demo
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            onClick={() => window.open(`${PERSONAL_INFO.github}?tab=repositories`, '_blank', 'noopener,noreferrer')}
            data-testid="button-view-all-projects"
          >
            <Github className="mr-2 h-4 w-4" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}