import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays } from "lucide-react";
import { EDUCATION } from "@/config/portfolio";

export default function Education() {
  const education = EDUCATION;

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Strong academic foundation in computer science and software engineering
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 sm:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/50 to-primary/20"></div>
          
          <div className="space-y-8 sm:space-y-12">
            {education.map((edu, index) => (
              <div 
                key={index} 
                className="relative flex items-start gap-4 sm:gap-8"
                data-testid={`timeline-item-${index}`}
              >
                {/* Timeline dot */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full border-2 border-primary/10 bg-white shadow-sm flex items-center justify-center overflow-hidden">
                    {edu.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <Card className="hover-elevate transition-all duration-300">
                    <CardHeader className="pb-4">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-1">
                            {edu.degree}
                          </h3>
                          <h4 className="text-lg font-medium text-primary">
                            {edu.institution}
                          </h4>
                        </div>
                        <div className="flex flex-col lg:text-right gap-2">
                          <div className="flex items-center gap-2 lg:justify-end">
                            <CalendarDays className="h-4 w-4 text-muted-foreground" />
                            <span 
                              className="text-sm text-muted-foreground whitespace-nowrap"
                              data-testid={`text-duration-${index}`}
                            >
                              {edu.duration}
                            </span>
                          </div>
                          {edu.gpa && (
                            <Badge 
                              className="bg-chart-2 text-white self-start lg:self-end"
                              data-testid={`badge-gpa-${index}`}
                            >
                              GPA: {edu.gpa}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div>
                        <h5 className="font-medium text-foreground mb-3">Relevant Coursework:</h5>
                        <div className="flex flex-wrap gap-1 sm:gap-2">
                          {edu.courses.map((course, courseIndex) => (
                            <Badge 
                              key={courseIndex} 
                              variant="outline" 
                              className="text-xs px-2 py-1 break-words max-w-full"
                              data-testid={`badge-course-${index}-${courseIndex}`}
                            >
                              {course}
                            </Badge>
                          ))}
                        </div>
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