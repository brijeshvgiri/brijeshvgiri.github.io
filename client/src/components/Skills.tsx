import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Globe, Database, Cloud, Settings } from "lucide-react";
import { CategoryIcons } from "@/components/IconSystem";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
  color: string;
}

export default function Skills() {
  // todo: remove mock functionality - replace with real data
  const skillCategories: SkillCategory[] = [
    {
      title: "Languages",
      icon: CategoryIcons["Languages"],
      skills: ["C#", "Java", "Python", "TypeScript", "JavaScript", "C++", "Shell"],
      color: "bg-primary/10 text-primary"
    },
    {
      title: "Web & Frameworks",
      icon: CategoryIcons["Web & Frameworks"],
      skills: [".NET", "Node.js", "Express", "React", "RESTful Services", "GraphQL", "JUnit", "Jest", "HTML", "CSS"],
      color: "bg-chart-2/10 text-chart-2"
    },
    {
      title: "Databases",
      icon: CategoryIcons["Databases"],
      skills: ["MySQL", "MSSQL", "PostgreSQL", "MongoDB", "Redis", "CosmosDB"],
      color: "bg-chart-3/10 text-chart-3"
    },
    {
      title: "Cloud Native",
      icon: CategoryIcons["Cloud Native"],
      skills: ["Apache Kafka", "Azure DevOps", "Docker", "Kubernetes", "Azure Logic App", "Event Grid", "AWS CloudWatch", "SNS"],
      color: "bg-chart-4/10 text-chart-4"
    },
    {
      title: "Tools",
      icon: CategoryIcons["Tools"],
      skills: ["Git", "GitLab", "Jira", "SonarQube", "Android Studio", "Visual Studio", "Selenium", "Jenkins", "Linux", "SQL Sentry", "GitHub Actions", "Gradle"],
      color: "bg-chart-5/10 text-chart-5"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the full technology stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card 
              key={index} 
              className="hover-elevate transition-all duration-300"
              data-testid={`card-skill-category-${index}`}
            >
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${category.color}`}>
                    {category.icon}
                  </div>
                  <span className="text-lg">{category.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs font-medium hover-elevate"
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

        {/* Additional Skills Note */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            Continuously learning and adapting to new technologies and industry best practices
          </p>
        </div>
      </div>
    </section>
  );
}