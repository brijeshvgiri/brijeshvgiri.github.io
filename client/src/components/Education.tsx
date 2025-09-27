import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, CalendarDays } from "lucide-react";

interface EducationItem {
  institution: string;
  degree: string;
  duration: string;
  gpa?: string;
  courses: string[];
}

export default function Education() {
  // todo: remove mock functionality - replace with real data
  const education: EducationItem[] = [
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
      ]
    },
    {
      institution: "University of Mumbai",
      degree: "Bachelor of Engineering, Computer Engineering",
      duration: "2015 – 2019",
      courses: [
        "Algorithms",
        "Data Structures",
        "Operating Systems",
        "Object Oriented Design",
        "Cloud Computing",
        "Database Design",
        "Distributed Systems"
      ]
    }
  ];

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

        <div className="space-y-8 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className="hover-elevate transition-all duration-300"
              data-testid={`card-education-${index}`}
            >
              <CardHeader className="pb-4">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
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
                            className="text-sm text-muted-foreground"
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
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div>
                  <h5 className="font-medium text-foreground mb-3">Relevant Coursework:</h5>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course, courseIndex) => (
                      <Badge 
                        key={courseIndex} 
                        variant="outline" 
                        className="text-xs"
                        data-testid={`badge-course-${index}-${courseIndex}`}
                      >
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}