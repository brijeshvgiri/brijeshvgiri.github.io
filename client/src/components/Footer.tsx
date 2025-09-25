import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Brijesh Giri
            </h3>
            <p className="text-muted-foreground text-sm">
              Software Engineer & Full Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open('https://linkedin.com/in/brijeshgiri', '_blank', 'noopener,noreferrer')}
              data-testid="footer-button-linkedin"
            >
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open('#', '_blank', 'noopener,noreferrer')}
              data-testid="footer-button-github"
            >
              <Github className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => window.open('mailto:brijeshveerbahadur@gmail.com')}
              data-testid="footer-button-email"
            >
              <Mail className="h-5 w-5" />
            </Button>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm flex items-center justify-center md:justify-end gap-1">
              Made with <Heart className="h-4 w-4 text-red-500" fill="currentColor" /> 
              © {currentYear} Brijesh Giri
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <div className="border-t border-card-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            Currently seeking new opportunities in software engineering and full-stack development.
            <br />
            Open to remote work and relocation for the right opportunity.
          </p>
        </div>
      </div>
    </footer>
  );
}