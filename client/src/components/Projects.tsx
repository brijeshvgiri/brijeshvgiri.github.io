import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar } from "lucide-react";

interface Project {
  title: string;
  description: string;
  details: string[];
  technologies: string[];
  duration: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export default function Projects() {
  // todo: remove mock functionality - replace with real data
  const projects: Project[] = [
    {
      title: "Google Summer of Code 2025 - Chrome Team",
      description: "Debugging tools for Chromium's TabStrip model to aid complex tab and session behavior analysis",
      details: [
        "Architecting distributed debugging infrastructure for Chromium's multi-process browser architecture with real-time state synchronization",
        "Building scalable visualization system for complex tab management microservices handling millions of browser sessions globally",
        "Implementing advanced IPC communication patterns and distributed state management for debugging complex browser behaviors",
        "Contributing to open-source Chromium project with focus on developer tooling and distributed systems observability"
      ],
      technologies: ["C++", "TypeScript", "Distributed Systems", "Mojo IPC", "Microservices", "Open Source"],
      duration: "Apr 2025 - Present",
      featured: true
    },
    {
      title: "Q&A Web Platform",
      description: "Full-stack Q&A web application with modern architecture and comprehensive testing",
      details: [
        "Architected microservices-based Q&A platform with event-driven architecture supporting real-time notifications and search",
        "Implemented horizontal scaling with load balancing across multiple Node.js instances handling 10K+ concurrent users",
        "Built distributed caching layer with Redis for session management and MongoDB for persistent data with automatic sharding",
        "Designed comprehensive testing strategy with Cypress E2E tests and CI/CD pipeline ensuring 99% uptime"
      ],
      technologies: ["Node.js", "Microservices", "React", "MongoDB", "Redis", "Event-Driven Architecture", "Cypress"],
      duration: "Jan 2025 – Apr 2025",
      githubUrl: "#",
      liveUrl: "#",
      featured: true
    },
    {
      title: "Budget Your Life",
      description: "Android personal finance management app with intelligent location-based features",
      details: [
        "Built using MVVM architecture ensuring separation of concerns and clean code principles",
        "Implemented GPS location records and smart reminders for automatic billing prompts",
        "Achieved 95% code coverage through comprehensive JUnit testing and CI/CD with GitHub Actions"
      ],
      technologies: ["Java", "Android Studio", "Firebase", "Material Design", "JUnit", "Github Actions"],
      duration: "May 2025 – Aug 2025",
      githubUrl: "#"
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

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
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
                    <CardTitle className="text-xl mb-2 text-foreground">
                      {project.title}
                      {project.featured && (
                        <Badge className="ml-2 bg-primary text-primary-foreground">
                          Featured
                        </Badge>
                      )}
                    </CardTitle>
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
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(project.liveUrl, '_blank', 'noopener,noreferrer')}
                        data-testid={`button-live-${index}`}
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
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
            onClick={() => window.open('#', '_blank', 'noopener,noreferrer')}
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