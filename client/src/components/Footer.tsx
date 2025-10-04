import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PERSONAL_INFO, ICON_CONFIG } from "@/config/portfolio";
import { FaChrome } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground mb-2">
              {PERSONAL_INFO.name}
            </h3>
            <p className="text-muted-foreground text-sm">
              {PERSONAL_INFO.title}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open(PERSONAL_INFO.linkedin, '_blank', 'noopener,noreferrer')}
              data-testid="footer-button-linkedin"
            >
              <Linkedin className={ICON_CONFIG.hero.size} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open(PERSONAL_INFO.github, '_blank', 'noopener,noreferrer')}
              data-testid="footer-button-github"
            >
              <Github className={ICON_CONFIG.hero.size} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open(PERSONAL_INFO.gerrit, '_blank', 'noopener,noreferrer')}
              data-testid="footer-button-gerrit"
            >
              <FaChrome className={ICON_CONFIG.hero.size} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open(`mailto:${PERSONAL_INFO.email}`)}
              data-testid="footer-button-email"
            >
              <Mail className={ICON_CONFIG.hero.size} />
            </Button>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end gap-1 flex-wrap">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 flex-shrink-0" fill="currentColor" />
              <span>© {currentYear} {PERSONAL_INFO.name}</span>
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="border-t border-card-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
            Currently seeking new opportunities in software engineering and full-stack development.
            <br className="hidden sm:block" />
            <span className="block sm:inline">Open to remote work and relocation for the right opportunity.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}