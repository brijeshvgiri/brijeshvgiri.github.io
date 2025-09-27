import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, ExternalLink } from "lucide-react";
import { CompanyIcon } from "@/components/IconSystem";
import { EXPERIENCES } from "@/config/portfolio";

export default function Experience() {
  const experiences = EXPERIENCES;

  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building scalable solutions and contributing to impactful projects across diverse industries
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className="relative flex items-start gap-8"
                data-testid={`timeline-item-${index}`}
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <CompanyIcon company={exp.company} size="xl" />
                  </div>
                  {exp.current && (
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                      <Badge className="bg-chart-2 text-white text-xs px-2 py-1 shadow-lg">
                        Current
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <Card className="hover-elevate transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-1">
                            {exp.role}
                          </h3>
                          <div className="flex items-center gap-3">
                            {exp.website ? (
                              <a
                                href={exp.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-lg font-medium text-primary hover:text-primary/80 dark:hover:text-blue-300 hover:underline transition-colors duration-200 flex items-center gap-2"
                              >
                                {exp.company}
                                <ExternalLink className="h-4 w-4" />
                              </a>
                            ) : (
                              <h4 className="text-lg font-medium text-primary">
                                {exp.company}
                              </h4>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2 lg:justify-end text-sm text-muted-foreground whitespace-nowrap">
                          <CalendarDays className="h-4 w-4" />
                          <span data-testid={`text-duration-${index}`}>{exp.duration}</span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      <ul className="space-y-2">
                        {exp.description.map((item, descIndex) => (
                          <li key={descIndex} className="flex text-muted-foreground">
                            <span className="text-primary mr-3 mt-1">•</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2 pt-4">
                        {exp.skills.map((skill, skillIndex) => (
                          <Badge 
                            key={skillIndex} 
                            variant="secondary" 
                            className="text-xs"
                            data-testid={`badge-skill-${index}-${skillIndex}`}
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}