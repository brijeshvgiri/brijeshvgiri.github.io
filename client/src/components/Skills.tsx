import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TECHNICAL_SKILLS } from "@/config/portfolio";

export default function Skills() {
  const skillCategories = TECHNICAL_SKILLS;

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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
                <div className="flex flex-wrap gap-1 sm:gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex}
                      variant="secondary"
                      className="text-xs font-medium hover-elevate px-2 py-1 break-words max-w-full"
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