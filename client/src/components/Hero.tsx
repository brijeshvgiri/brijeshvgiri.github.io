import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import profileImage from "@assets/generated_images/Professional_developer_headshot_portrait_8fd63405.png";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent leading-tight">
                Brijesh Veer Bahadur Giri
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                Software Engineer & Full Stack Developer
              </h2>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>Boston, MA</span>
                <span>•</span>
                <span>Open to Work</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              MS Computer Science graduate from Northeastern University with 4.0 GPA, passionate about building scalable, 
              high-performance systems. Currently contributing to Google's Chrome team through Google Summer of Code 2025, 
              with 3+ years of experience in full-stack development, cloud computing, and software architecture.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-primary/90"
                data-testid="button-contact"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open('#', '_blank')}
                data-testid="button-resume"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Resume
              </Button>
            </div>

            <div className="flex gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open('https://linkedin.com/in/brijeshgiri', '_blank')}
                data-testid="button-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open('#', '_blank')}
                data-testid="button-github"
              >
                <Github className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Brijesh Giri"
                  className="w-full h-full object-cover"
                  data-testid="img-profile"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-primary to-chart-2 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-chart-2 to-primary rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}