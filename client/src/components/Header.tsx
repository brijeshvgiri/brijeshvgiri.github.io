import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        block: 'start',
        inline: 'nearest'
      });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-foreground">
          &lt;BG/&gt;
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <button
            onClick={() => scrollToSection('about')}
            className="text-muted-foreground hover:text-foreground hover-elevate px-3 py-2 rounded-md transition-all duration-200"
            data-testid="nav-about"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection('experience')}
            className="text-muted-foreground hover:text-foreground hover-elevate px-3 py-2 rounded-md transition-all duration-200"
            data-testid="nav-experience"
          >
            Experience
          </button>
          <button
            onClick={() => scrollToSection('education')}
            className="text-muted-foreground hover:text-foreground hover-elevate px-3 py-2 rounded-md transition-all duration-200"
            data-testid="nav-education"
          >
            Education
          </button>
          <button
            onClick={() => scrollToSection('skills')}
            className="text-muted-foreground hover:text-foreground hover-elevate px-3 py-2 rounded-md transition-all duration-200"
            data-testid="nav-skills"
          >
            Skills
          </button>
          <button
            onClick={() => scrollToSection('projects')}
            className="text-muted-foreground hover:text-foreground hover-elevate px-3 py-2 rounded-md transition-all duration-200"
            data-testid="nav-projects"
          >
            Projects
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="text-muted-foreground hover:text-foreground hover-elevate px-3 py-2 rounded-md transition-all duration-200"
            data-testid="nav-contact"
          >
            Contact
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-6 py-4 flex flex-col space-y-2">
            <button
              onClick={() => scrollToSection('about')}
              className="text-left text-muted-foreground hover:text-foreground hover-elevate px-3 py-2 rounded-md transition-all duration-200"
              data-testid="nav-mobile-about"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('experience')}
              className="text-left text-muted-foreground hover:text-foreground hover-elevate px-3 py-2 rounded-md transition-all duration-200"
              data-testid="nav-mobile-experience"
            >
              Experience
            </button>
            <button
              onClick={() => scrollToSection('education')}
              className="text-left text-muted-foreground hover:text-foreground hover-elevate px-3 py-2 rounded-md transition-all duration-200"
              data-testid="nav-mobile-education"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection('skills')}
              className="text-left text-muted-foreground hover:text-foreground hover-elevate px-3 py-2 rounded-md transition-all duration-200"
              data-testid="nav-mobile-skills"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-left text-muted-foreground hover:text-foreground hover-elevate px-3 py-2 rounded-md transition-all duration-200"
              data-testid="nav-mobile-projects"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-left text-muted-foreground hover:text-foreground hover-elevate px-3 py-2 rounded-md transition-all duration-200"
              data-testid="nav-mobile-contact"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}