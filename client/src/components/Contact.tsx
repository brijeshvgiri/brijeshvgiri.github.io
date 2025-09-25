import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      label: "Email",
      value: "brijeshveerbahadur@gmail.com",
      action: () => window.open('mailto:brijeshveerbahadur@gmail.com'),
      testId: "button-email"
    },
    {
      icon: <Phone className="h-5 w-5" />,
      label: "Phone",
      value: "(857) 230-0623",
      action: () => window.open('tel:+18572300623'),
      testId: "button-phone"
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      label: "Location",
      value: "Boston, MA",
      action: null,
      testId: "text-location"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="h-5 w-5" />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/brijeshgiri",
      testId: "button-social-linkedin"
    },
    {
      icon: <Github className="h-5 w-5" />,
      label: "GitHub",
      url: "#",
      testId: "button-social-github"
    },
    {
      icon: <ExternalLink className="h-5 w-5" />,
      label: "Portfolio",
      url: "#",
      testId: "button-social-portfolio"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a conversation about technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Card className="hover-elevate transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-muted p-2 rounded-lg">
                      {contact.icon}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground">{contact.label}</p>
                      {contact.action ? (
                        <Button
                          variant="ghost"
                          className="p-0 h-auto font-medium text-foreground justify-start"
                          onClick={contact.action}
                          data-testid={contact.testId}
                        >
                          {contact.value}
                        </Button>
                      ) : (
                        <p className="font-medium text-foreground" data-testid={contact.testId}>
                          {contact.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="hover-elevate transition-all duration-300">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className="bg-primary/10 p-2 rounded-lg">
                    <Linkedin className="h-5 w-5 text-primary" />
                  </div>
                  Social & Professional
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {socialLinks.map((social, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="bg-muted p-2 rounded-lg">
                      {social.icon}
                    </div>
                    <div className="flex-1">
                      <Button
                        variant="ghost"
                        className="p-0 h-auto font-medium text-foreground justify-start"
                        onClick={() => window.open(social.url, '_blank')}
                        data-testid={social.testId}
                      >
                        {social.label}
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-primary/10 to-chart-2/10 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to Work Together?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you're looking for a full-stack developer, need help with a specific project, 
                or want to discuss potential collaborations, I'd love to hear from you.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button 
                  onClick={() => window.open('mailto:brijeshveerbahadur@gmail.com?subject=Let\'s Connect')}
                  className="bg-primary hover:bg-primary/90"
                  data-testid="button-primary-contact"
                >
                  <Mail className="mr-2 h-4 w-4" />
                  Send Email
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => window.open('https://linkedin.com/in/brijeshgiri', '_blank')}
                  data-testid="button-linkedin-connect"
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}