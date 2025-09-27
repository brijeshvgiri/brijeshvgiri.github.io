import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ExternalLink, ArrowDown, MessageCircle } from "lucide-react";
import TypewriterText from "@/components/TypewriterText";
import { HERO_CONTENT, PERSONAL_INFO, ASSETS } from "@/config/portfolio";
import { FaChrome } from "react-icons/fa";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        block: 'start',
        inline: 'nearest'
      });
    }
  };

  return (
    <section id="about" className="min-h-screen flex items-center bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground dark:text-foreground light:text-primary/80 leading-tight">
                {HERO_CONTENT.greeting}
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium h-8 md:h-10">
                <TypewriterText 
                  texts={HERO_CONTENT.typewriterTexts}
                  speed={HERO_CONTENT.typewriterSettings.speed}
                  deleteSpeed={HERO_CONTENT.typewriterSettings.deleteSpeed}
                  delayBetween={HERO_CONTENT.typewriterSettings.delayBetween}
                />
              </h2>
              <div className="flex items-center gap-2 text-muted-foreground">
                <span>{HERO_CONTENT.status.location}</span>
                <span>•</span>
                <span className="text-chart-2 font-medium dark:text-green-400">{HERO_CONTENT.status.availability}</span>
                <span>•</span>
                <span className="text-primary font-medium dark:text-blue-400">{HERO_CONTENT.status.currentRole}</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              MS Computer Science graduate from Northeastern University with 4.0 GPA, specializing in distributed systems 
              and microservices architecture. Currently contributing to <span className="text-primary font-semibold dark:text-blue-400">Google's Chrome team</span> through 
              Google Summer of Code 2025, with 3+ years of experience building scalable, cloud-native applications and 
              high-performance backend systems.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-blue-700 dark:hover:bg-blue-500 transition-all duration-200"
                data-testid="button-contact"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Get In Touch
              </Button>
              <Button 
                variant="outline"
                onClick={() => window.open(ASSETS.documents.resume, '_blank', 'noopener,noreferrer')}
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
                onClick={() => window.open(PERSONAL_INFO.linkedin, '_blank', 'noopener,noreferrer')}
                data-testid="button-linkedin"
              >
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open(PERSONAL_INFO.github, '_blank', 'noopener,noreferrer')}
                data-testid="button-github"
              >
                <Github className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open(PERSONAL_INFO.gerrit, '_blank', 'noopener,noreferrer')}
                data-testid="button-chromium"
              >
                <FaChrome className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => window.open(`mailto:${PERSONAL_INFO.email}`)}
                data-testid="button-email"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-primary/20 transition-all duration-300 group-hover:border-primary/40 bg-gradient-to-br from-background/95 to-muted/80">
                <img
                  src={ASSETS.images.profile.headshot}
                  alt={PERSONAL_INFO.name}
                  className="w-full h-full object-cover object-center transition-all duration-500 ease-out group-hover:scale-110 group-hover:brightness-110 group-hover:contrast-110 dark:group-hover:brightness-105 dark:group-hover:contrast-105 filter brightness-110 contrast-105 dark:brightness-115 dark:contrast-105 dark:saturate-95"
                  data-testid="img-profile"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-primary/15 to-chart-2/15 dark:from-primary/25 dark:to-chart-2/25 rounded-full opacity-40 dark:opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-chart-2/15 to-primary/15 dark:from-chart-2/25 dark:to-primary/25 rounded-full opacity-40 dark:opacity-50 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
        
        {/* Explore My Journey Button - Bottom Center */}
        <div className="flex justify-center mt-16">
          <Button 
            onClick={() => scrollToSection('experience')}
            className="bg-primary hover:bg-blue-700 dark:hover:bg-blue-500 text-white px-8 py-3 text-lg font-medium transition-all duration-200"
            data-testid="button-explore"
          >
            <ArrowDown className="mr-2 h-5 w-5" />
            Explore My Journey
          </Button>
        </div>
      </div>
    </section>
  );
}