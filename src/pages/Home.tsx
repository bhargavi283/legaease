import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Scale, Users, Award, Clock, Shield, CheckCircle, Star, Phone, Mail, MapPin, Gavel, TrendingUp, Globe, ArrowRight } from "lucide-react";

const Home = () => {
  const features = [
    {
      icon: Scale,
      title: "Expert Legal Counsel",
      description: "Experienced attorneys with proven track records across multiple practice areas."
    },
    {
      icon: Users,
      title: "Client-Focused Approach",
      description: "Personalized legal strategies tailored to your unique situation and goals."
    },
    {
      icon: Award,
      title: "Award-Winning Service",
      description: "Recognized by peers and clients for excellence in legal representation."
    },
    {
      icon: Clock,
      title: "24/7 Availability",
      description: "Round-the-clock support when you need legal assistance most."
    }
  ];

  const practiceAreas = [
    "Corporate Law",
    "Personal Injury",
    "Criminal Defense",
    "Family Law",
    "Real Estate",
    "Immigration"
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 shadow-glow">
              <Award className="w-4 h-4 mr-2" />
              Trusted Legal Experts Since 1995
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Protecting Your Rights,
              <span className="text-primary block bg-gradient-primary bg-clip-text text-transparent">Securing Your Future</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Premier legal services with a commitment to excellence. Our experienced attorneys 
              provide strategic counsel and aggressive representation to achieve the best outcomes for our clients.
            </p>
            
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Cases Won</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">25+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">98%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="shadow-glow" asChild>
                <Link to="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Free Consultation
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/practice-areas">
                  Our Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose LegalEase?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine decades of experience with innovative legal strategies to deliver 
              exceptional results for our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-border bg-card hover:shadow-elegant hover:scale-105 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Practice Areas Preview */}
      <section className="py-20 px-4 bg-muted">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Practice Areas
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive legal services across multiple areas of law to meet all your needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {practiceAreas.map((area, index) => (
              <Card key={index} className="border-border bg-card hover:shadow-elegant hover:border-primary/30 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-lg font-medium text-foreground group-hover:text-primary transition-colors">{area}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Button asChild>
              <Link to="/practice-areas">View All Practice Areas</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Awards & Recognition
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by leading legal organizations and publications.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Award,
                title: "Best Law Firm 2024",
                organization: "Legal Excellence Awards",
                year: "2024"
              },
              {
                icon: TrendingUp,
                title: "Top Rated Legal Services",
                organization: "National Bar Association",
                year: "2023"
              },
              {
                icon: Globe,
                title: "ABA Certified Excellence",
                organization: "American Bar Association",
                year: "2023"
              },
              {
                icon: Gavel,
                title: "25 Years of Excellence",
                organization: "State Legal Board",
                year: "2024"
              }
            ].map((award, index) => (
              <Card key={index} className="text-center border-border bg-card hover:shadow-elegant hover:scale-105 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <award.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{award.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground font-medium">{award.organization}</p>
                  <p className="text-xs text-muted-foreground mt-1">{award.year}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it. See what our satisfied clients have to say about our legal services.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "LegalEase saved my business. Their expertise in corporate law is unmatched.",
                author: "Sarah Johnson",
                role: "CEO, TechStart Inc.",
                rating: 5
              },
              {
                quote: "Professional, responsive, and results-driven. I couldn't ask for better representation.",
                author: "Michael Chen",
                role: "Real Estate Developer",
                rating: 5
              },
              {
                quote: "They turned a nightmare situation into a victory. Truly exceptional lawyers.",
                author: "Emma Rodriguez",
                role: "Small Business Owner",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="border-border bg-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-primary fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-secondary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10"></div>
        <div className="container mx-auto max-w-4xl text-center relative">
          <div className="w-20 h-20 mx-auto mb-6 bg-primary/10 rounded-full flex items-center justify-center">
            <Shield className="h-10 w-10 text-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Protect Your Interests?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Don't wait until it's too late. Contact our experienced legal team today 
            for a free consultation and take the first step toward resolving your legal matters.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="shadow-glow" asChild>
              <Link to="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Schedule Your Free Consultation
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/lawyers">
                <Users className="w-5 h-5 mr-2" />
                Meet Our Team
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border">
        <div className="container mx-auto max-w-6xl px-4 py-16">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Scale className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">LegalEase</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
                Your trusted legal partner since 1995. We provide comprehensive legal services 
                with a commitment to excellence and client satisfaction.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>123 Legal Street, Law District, City 12345</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>(555) 123-LEGAL</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>contact@legalease.com</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { label: "About Us", href: "/about" },
                  { label: "Practice Areas", href: "/practice-areas" },
                  { label: "Our Lawyers", href: "/lawyers" },
                  { label: "Client Reviews", href: "/reviews" },
                  { label: "FAQ", href: "/faq" },
                  { label: "Contact", href: "/contact" }
                ].map((link) => (
                  <li key={link.href}>
                    <Link 
                      to={link.href} 
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Services */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-6">Legal Services</h3>
              <ul className="space-y-3">
                {[
                  "Corporate Law",
                  "Personal Injury",
                  "Criminal Defense",
                  "Family Law",
                  "Real Estate",
                  "Immigration"
                ].map((service) => (
                  <li key={service}>
                    <Link 
                      to="/practice-areas" 
                      className="text-muted-foreground hover:text-primary transition-colors duration-200"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-8 mt-12 text-center text-sm text-muted-foreground">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div>
                © 2024 LegalEase. All rights reserved. | Privacy Policy | Terms of Service | Attorney Advertising
              </div>
              <div className="text-xs">
                Licensed to practice law in all 50 states. Individual results may vary.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;