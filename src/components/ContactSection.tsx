import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  Send,
  MessageSquare,
  Clock,
  CheckCircle
} from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      // In a real application, you would send this to your backend
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="text-accent-purple" size={24} />,
      label: "Email",
      value: "b23ee1024@iitj.ac.in",
      link: "mailto:b23ee1024@iitj.ac.in",
      description: "Best way to reach me"
    },
    {
      icon: <Phone className="text-accent-blue" size={24} />,
      label: "Phone",
      value: "+91-7994655634",
      link: "tel:+917994655634",
      description: "Available Mon-Fri, 9AM-6PM IST"
    },
    {
      icon: <MapPin className="text-accent-purple" size={24} />,
      label: "Location",
      value: "IIT Jodhpur, Rajasthan",
      link: "#",
      description: "Currently based at"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="text-accent-blue" size={24} />,
      label: "LinkedIn",
      username: "@goutham-a-s",
      link: "https://linkedin.com/in/goutham-a-s",
      description: "Professional network"
    },
    {
      icon: <Github className="text-accent-purple" size={24} />,
      label: "GitHub", 
      username: "@goutham-a-s",
      link: "https://github.com/goutham-a-s",
      description: "Code repositories"
    }
  ];

  const quickFacts = [
    {
      icon: <Clock className="text-accent-blue" size={20} />,
      text: "Usually responds within 24 hours"
    },
    {
      icon: <MessageSquare className="text-accent-purple" size={20} />,
      text: "Open to collaboration and opportunities"
    },
    {
      icon: <CheckCircle className="text-accent-blue" size={20} />,
      text: "Available for freelance projects"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background-secondary via-background to-background-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-xl text-secondary-text max-w-3xl mx-auto">
            Whether you have a project in mind, want to discuss opportunities, or just want to say hello, 
            I'd love to hear from you. Let's create something amazing together!
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="card-glow p-8 animate-slide-up">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold gradient-text">Send Message</h3>
                  <p className="text-secondary-text">
                    Fill out the form below and I'll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-white">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="bg-card border-border text-white placeholder:text-secondary-text"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-white">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-card border-border text-white placeholder:text-secondary-text"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project, opportunity, or just say hello..."
                      rows={6}
                      required
                      className="bg-card border-border text-white placeholder:text-secondary-text resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent-solid hover:bg-accent-purple text-white py-3 button-glow"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>

                {/* Quick Facts */}
                <div className="pt-6 border-t border-border">
                  <div className="space-y-3">
                    {quickFacts.map((fact, index) => (
                      <div key={index} className="flex items-center space-x-3 text-sm text-secondary-text">
                        {fact.icon}
                        <span>{fact.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              {/* Contact Details */}
              <Card className="card-glow p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold gradient-text">Contact Information</h3>
                  
                  <div className="space-y-6">
                    {contactInfo.map((contact, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0 p-3 bg-card rounded-full border border-accent-purple/20">
                          {contact.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">{contact.label}</h4>
                          <a 
                            href={contact.link}
                            className="text-accent-blue hover:text-accent-purple transition-colors font-medium"
                          >
                            {contact.value}
                          </a>
                          <p className="text-sm text-secondary-text mt-1">
                            {contact.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Social Links */}
              <Card className="card-glow p-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold gradient-text">Connect Online</h3>
                  
                  <div className="space-y-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-4 bg-card/50 rounded-lg hover:bg-card transition-all duration-300 hover:scale-105 group"
                      >
                        <div className="flex-shrink-0 p-2 bg-card rounded-full border border-accent-purple/20 group-hover:border-accent-purple/50 transition-colors">
                          {social.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-white group-hover:text-accent-purple transition-colors">
                            {social.label}
                          </h4>
                          <p className="text-accent-blue text-sm">{social.username}</p>
                          <p className="text-xs text-secondary-text">{social.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </Card>

              {/* Call to Action */}
              <Card className="card-glow p-8 text-center bg-gradient-accent/10">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold gradient-text">Ready to Collaborate?</h3>
                  <p className="text-secondary-text text-sm">
                    I'm always excited to work on innovative projects and connect with fellow engineers, 
                    researchers, and technology enthusiasts.
                  </p>
                  <Button 
                    onClick={() => document.getElementById('name')?.focus()}
                    variant="outline" 
                    className="border-accent-purple text-accent-purple hover:bg-accent-purple hover:text-white"
                  >
                    Start a Conversation
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;