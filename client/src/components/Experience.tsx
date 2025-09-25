import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  duration: string;
  location: string;
  description: string[];
  skills: string[];
  current?: boolean;
}

export default function Experience() {
  // todo: remove mock functionality - replace with real data
  const experiences: ExperienceItem[] = [
    {
      company: "Google",
      role: "Open Source Contributor — Chrome Team, Google Summer of Code 2025",
      duration: "Apr 2025 – Present",
      location: "Remote",
      description: [
        "Developed a feature in C++ to capture and visualize the live state of Chromium's TabStrip to aid debugging of tab behaviors.",
        "Contributed to upstream patches in Git, fixing a bug that prevented thumbnail refreshes for tabs on OS-level theme updates.",
        "Collaborated with Chrome team engineers to implement debugging tools using C++, Mojo IPC, and TypeScript."
      ],
      skills: ["C++", "TypeScript", "Chromium", "Git", "Mojo IPC"],
      current: true
    },
    {
      company: "Northeastern University",
      role: "Teaching Assistant — Program Design",
      duration: "July 2025 – Present",
      location: "Boston, MA",
      description: [
        "Tutored 200+ students in Java, MVC architecture, object oriented design, SOLID principles, design patterns, and JUnit testing.",
        "Provided guidance on software engineering best practices and code quality standards.",
        "Assisted in curriculum development and student assessment."
      ],
      skills: ["Java", "OOP", "Design Patterns", "JUnit", "Teaching"],
      current: true
    },
    {
      company: "Bracebridge Capital",
      role: "Software Engineer Intern",
      duration: "May 2024 – Nov 2024",
      location: "Boston, MA",
      description: [
        "Optimized critical trading system components by identifying bottlenecks in T-SQL queries using SQL Sentry, achieving 25% speedup.",
        "Built an internal App Store to streamline distribution of trading apps, using C# and multi-threading for responsive interface.",
        "Automated CI/CD by containerizing services with Docker, orchestrating deployments for 10+ services via Azure DevOps."
      ],
      skills: ["C#", "T-SQL", "Docker", "Azure DevOps", "Multi-threading", "SQL Sentry"]
    },
    {
      company: "HA Brick",
      role: "Full Stack Developer",
      duration: "Feb 2022 – Jul 2023",
      location: "Mumbai, India",
      description: [
        "Engineered core features in a cloud-hosted ERP system for an emerging startup to automate asset tracking, supply chain management, e-invoicing, and tax compliance.",
        "Implemented structured logging across microservices, and centralized monitoring by shipping logs to AWS CloudWatch.",
        "Collaborated with UI/UX designers to build a React frontend with TypeScript, GraphQL, and Web Sockets for real-time updates."
      ],
      skills: ["C#", ".NET", "React", "TypeScript", "GraphQL", "AWS CloudWatch", "SQL"]
    },
    {
      company: "GEP Worldwide",
      role: "Software Engineer",
      duration: "Jun 2019 – Nov 2021",
      location: "Mumbai, India",
      description: [
        "Developed REST APIs and backend microservices for GEP-SMART, a multi-tiered cloud-native SaaS platform supporting global procurement workflows for Fortune 500 clients.",
        "Owned end-to-end delivery of a full-stack Rule Processing Engine that eliminated hard-coded business logic, empowering 200K+ users.",
        "Scaled performance-critical rule execution API using distributed, event-driven model with Azure Service Bus and Redis cache."
      ],
      skills: ["C#", ".NET Core", "Azure Service Bus", "Redis", "SQL", "REST APIs", "Microservices"]
    }
  ];

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

        <div className="space-y-8 max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="relative overflow-hidden hover-elevate transition-all duration-300"
              data-testid={`card-experience-${index}`}
            >
              {exp.current && (
                <div className="absolute top-0 right-0">
                  <Badge className="bg-chart-2 text-white rounded-tl-none rounded-br-none">
                    Current
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {exp.role}
                    </h3>
                    <h4 className="text-lg font-medium text-primary">
                      {exp.company}
                    </h4>
                  </div>
                  <div className="flex flex-col lg:text-right text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 lg:justify-end">
                      <CalendarDays className="h-4 w-4" />
                      <span data-testid={`text-duration-${index}`}>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 lg:justify-end mt-1">
                      <MapPin className="h-4 w-4" />
                      <span data-testid={`text-location-${index}`}>{exp.location}</span>
                    </div>
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
          ))}
        </div>
      </div>
    </section>
  );
}