import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar, Star, Users, Zap, Bug, Globe, Smartphone } from "lucide-react";
import { PERSONAL_INFO, PROJECTS } from "@/config/portfolio";

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
  const projects = PROJECTS;

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
              className={`hover-elevate transition-all duration-300 h-full flex flex-col ${
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

              <CardContent className="space-y-6 flex-1 flex flex-col">
                <ul className="space-y-2">
                  {project.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex text-sm text-muted-foreground">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span className="leading-relaxed text-justify">{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex-1 flex flex-col justify-between">
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

                  <div className="flex gap-3 pt-4 mt-4">
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
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
                        className="flex-1"
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
                        className="flex-1"
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