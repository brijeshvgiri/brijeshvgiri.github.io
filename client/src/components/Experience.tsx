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
        "Architected and developed advanced debugging tools for Chromium's TabStrip microservices architecture using C++ and Mojo IPC patterns.",
        "Implemented real-time state visualization system capable of handling distributed tab management across multiple browser processes.",
        "Optimized inter-process communication protocols between browser components, reducing debugging overhead by 40%.",
        "Collaborated with Google's Chrome team to establish best practices for distributed system debugging in large-scale applications."
      ],
      skills: ["C++", "TypeScript", "Chromium", "Microservices", "IPC", "Distributed Systems"],
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
        "Designed and implemented high-frequency trading microservices architecture, processing 10K+ transactions/second with sub-millisecond latency.",
        "Built distributed app deployment platform serving 50+ trading applications with zero-downtime deployments and automatic rollback capabilities.",
        "Orchestrated containerized microservices ecosystem using Docker and Kubernetes, managing 10+ services with Azure DevOps for CI/CD automation.",
        "Optimized database query performance across distributed SQL clusters, achieving 25% improvement in trade execution speed."
      ],
      skills: ["C#", "Microservices", "Docker", "Kubernetes", "Azure DevOps", "High-Frequency Trading", "Distributed Systems"]
    },
    {
      company: "HA Brick",
      role: "Full Stack Developer",
      duration: "Feb 2022 – Jul 2023",
      location: "Mumbai, India",
      description: [
        "Architected and developed cloud-native ERP microservices platform handling 20+ construction projects with event-driven architecture.",
        "Built scalable microservices for asset tracking, supply chain management, and e-invoicing processing 50K+ transactions monthly.",
        "Implemented distributed logging and monitoring infrastructure using AWS CloudWatch, ensuring 99.9% system availability.",
        "Designed GraphQL federation layer connecting 8+ microservices with real-time WebSocket communication for seamless user experience."
      ],
      skills: ["C#", ".NET", "Microservices", "Event-Driven Architecture", "AWS", "GraphQL Federation", "WebSockets"]
    },
    {
      company: "GEP Worldwide",
      role: "Software Engineer",
      duration: "Jun 2019 – Nov 2021",
      location: "Mumbai, India",
      description: [
        "Architected distributed microservices platform serving Fortune 500 clients with 200K+ concurrent users across global procurement workflows.",
        "Built horizontally scalable rule processing engine using event-driven architecture, processing 100K+ business rules daily with sub-second response times.",
        "Designed fault-tolerant distributed system with Azure Service Bus, Redis clustering, and automatic failover supporting 99.99% uptime.",
        "Implemented bulk invoice processing pipeline handling 10K+ invoices using Apache Kafka and event sourcing patterns for audit compliance."
      ],
      skills: ["C#", ".NET Core", "Microservices", "Event Sourcing", "Apache Kafka", "Azure Service Bus", "Distributed Systems"]
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