import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Github, Calendar, Star, Bug, Globe, Smartphone, Download, Maximize2, Play } from "lucide-react";
import { PERSONAL_INFO, PROJECTS } from "@/config/portfolio";

/** Accepts watch/share/embed URLs or a bare 11-character video id. */
function getYoutubeVideoId(input: string): string | null {
  const trimmed = input.trim();
  if (/^[\w-]{11}$/.test(trimmed)) return trimmed;
  try {
    const u = new URL(trimmed);
    if (u.hostname === "youtu.be") {
      const id = u.pathname.replace(/^\//, "").split("/")[0];
      return id || null;
    }
    if (u.hostname === "www.youtube.com" || u.hostname === "youtube.com" || u.hostname === "m.youtube.com") {
      if (u.pathname.startsWith("/embed/")) {
        return u.pathname.slice(7).split("/")[0] || null;
      }
      if (u.pathname.startsWith("/shorts/")) {
        return u.pathname.slice(8).split("/")[0] || null;
      }
      const v = u.searchParams.get("v");
      if (v) return v;
    }
  } catch {
    return null;
  }
  return null;
}

export default function Projects() {
  const projects = PROJECTS;
  const [selectedDemo, setSelectedDemo] = useState<{
    url: string;
    title: string;
    type: "gif" | "youtube";
  } | null>(null);
  const [hoveredProjectIndex, setHoveredProjectIndex] = useState<number | null>(null);

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

        <div className="grid md:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {projects.map((project, index) => {
            const youtubeDemoId = project.demoYoutubeUrl
              ? getYoutubeVideoId(project.demoYoutubeUrl)
              : null;
            const hasDemo = Boolean(youtubeDemoId || project.demoGifUrl);
            const isDemoHovered = hoveredProjectIndex === index;
            return (
            <Card 
              key={index} 
              className={`hover-elevate transition-all duration-300 h-full flex flex-col overflow-hidden ${
                project.featured ? 'ring-2 ring-primary/20 bg-primary/5' : ''
              }`}
              data-testid={`card-project-${index}`}
            >
              {/* Content Section - Header First */}
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
                    <div className="flex flex-wrap items-center gap-2 mb-3">
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
                    <p className="text-muted-foreground text-sm leading-5 line-clamp-2 min-h-[2.5rem]">
                      {project.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-3">
                  <Calendar className="h-4 w-4" />
                  <span data-testid={`text-project-duration-${index}`}>{project.duration}</span>
                </div>
              </CardHeader>

              {/* Demo Section - After Header, Compact */}
              {hasDemo && (
                <div className="px-6 pb-4">
                  <div 
                    className="relative w-full h-[300px] rounded-lg bg-muted/20 cursor-pointer group transition-all duration-300 overflow-hidden border border-border/50"
                    onMouseEnter={() => setHoveredProjectIndex(index)}
                    onMouseLeave={() =>
                      setHoveredProjectIndex((prev) => (prev === index ? null : prev))
                    }
                    onClick={() => {
                      if (youtubeDemoId) {
                        setSelectedDemo({
                          url: youtubeDemoId,
                          title: project.title,
                          type: "youtube",
                        });
                        return;
                      }
                      if (project.demoGifUrl) {
                        setSelectedDemo({
                          url: project.demoGifUrl,
                          title: project.title,
                          type: "gif",
                        });
                      }
                    }}
                    role="button"
                    tabIndex={0}
                  >
                    {youtubeDemoId ? (
                      <>
                        {isDemoHovered ? (
                          <iframe
                            title={`${project.title} demo preview`}
                            src={`https://www.youtube-nocookie.com/embed/${youtubeDemoId}?autoplay=1&mute=1&playsinline=1&controls=0&rel=0&modestbranding=1&loop=1&playlist=${youtubeDemoId}`}
                            className="absolute inset-0 h-full w-full"
                            allow="autoplay; encrypted-media; picture-in-picture"
                            referrerPolicy="strict-origin-when-cross-origin"
                            // Let the card click go through (open modal)
                            style={{ pointerEvents: "none" }}
                          />
                        ) : (
                          <>
                            <img
                              src={`https://i.ytimg.com/vi/${youtubeDemoId}/hqdefault.jpg`}
                              alt=""
                              className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/35 transition-opacity group-hover:bg-black/25" />
                            <div className="relative flex h-full w-full flex-col items-center justify-center gap-2 px-4 text-center">
                              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-lg ring-2 ring-white/30">
                                <Play className="ml-0.5 h-5 w-5" fill="currentColor" aria-hidden />
                              </div>
                            </div>
                          </>
                        )}
                      </>
                    ) : project.demoGifUrl ? (
                      hoveredProjectIndex === index ? (
                        <img 
                          src={project.demoGifUrl} 
                          alt={`${project.title} demo`}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center gap-2 bg-muted/40 px-4 text-center">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background/80 shadow-sm ring-1 ring-border">
                            <Play className="h-4 w-4 text-muted-foreground" aria-hidden />
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Click here to view demo
                          </p>
                        </div>
                      )
                    ) : null}
                    
                    {/* Click to expand indicator */}
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-black/70 backdrop-blur-sm rounded-full p-1.5">
                        <Maximize2 className="h-3.5 w-3.5 text-white" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <CardContent className="space-y-6 flex-1 flex flex-col">
                <ul className="space-y-2">
                  {project.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex text-sm text-muted-foreground">
                      <span className="text-primary mr-3 mt-1">•</span>
                      <span className="leading-relaxed text-justify" style={{ textJustify: 'inter-word', wordSpacing: '0.05em' }}>{detail}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex flex-wrap gap-1 sm:gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="outline" 
                        className="text-xs px-2 py-1 break-words max-w-full"
                        data-testid={`badge-tech-${index}-${techIndex}`}
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-4 mt-4">
                    {project.githubUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 text-xs sm:text-sm"
                        onClick={() => window.open(project.githubUrl, '_blank', 'noopener,noreferrer')}
                        data-testid={`button-github-${index}`}
                      >
                        {project.type === "Open Source" ? (
                          <Bug className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        ) : (
                          <Github className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        )}
                        <span className="truncate">{project.type === "Open Source" ? "Issue" : "Code"}</span>
                      </Button>
                    )}
                    {project.projectUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 text-xs sm:text-sm"
                        onClick={() => window.open(project.projectUrl, '_blank', 'noopener,noreferrer')}
                        data-testid={`button-project-${index}`}
                      >
                        {project.type === "Open Source" ? (
                          <Star className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        ) : project.type === "Mobile App" ? (
                          <Smartphone className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        ) : (
                          <Globe className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        )}
                        <span className="truncate">{project.type === "Open Source" ? "Project" : "Live Demo"}</span>
                      </Button>
                    )}
                    {project.liveUrl && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 text-xs sm:text-sm"
                        onClick={() => window.open(project.liveUrl, '_blank', 'noopener,noreferrer')}
                        data-testid={`button-live-${index}`}
                      >
                        {project.type === "Mobile App" ? (
                          <Smartphone className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        ) : (
                          <Globe className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        )}
                        <span className="truncate">Live Demo</span>
                      </Button>
                    )}
                    {project.apkUrl && project.type === "Mobile App" && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 text-xs sm:text-sm"
                        onClick={() => window.open(project.apkUrl, '_blank', 'noopener,noreferrer')}
                        data-testid={`button-apk-${index}`}
                      >
                        <Download className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="truncate">Download APK</span>
                      </Button>
                    )}
                    {project.downloadUrl && project.type === "Desktop Application" && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 text-xs sm:text-sm"
                        onClick={() => window.open(project.downloadUrl, '_blank', 'noopener,noreferrer')}
                        data-testid={`button-download-${index}`}
                      >
                        <Download className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="truncate">Download</span>
                      </Button>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
            );
          })}
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

      {/* Demo Modal */}
      <Dialog open={!!selectedDemo} onOpenChange={(open) => !open && setSelectedDemo(null)}>
        <DialogContent className="max-w-4xl w-full p-0">
          <DialogHeader className="px-6 pt-6">
            <DialogTitle>{selectedDemo?.title} - Demo</DialogTitle>
          </DialogHeader>
          <div className="p-6">
            {selectedDemo?.type === "gif" ? (
              <img 
                src={selectedDemo.url} 
                alt={`${selectedDemo.title} demo`}
                className="w-full h-auto rounded-lg"
              />
            ) : selectedDemo?.type === "youtube" ? (
              <div className="aspect-video w-full overflow-hidden rounded-lg bg-black">
                <iframe
                  title={`${selectedDemo.title} demo`}
                  src={`https://www.youtube-nocookie.com/embed/${selectedDemo.url}?autoplay=1&rel=0`}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}