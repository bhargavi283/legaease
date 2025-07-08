import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Scale, Users, Award, Clock, Shield, CheckCircle } from "lucide-react";

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
      <section className="relative bg-gradient-hero py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6">
              Trusted Legal Experts Since 1995
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Protecting Your Rights,
              <span className="text-primary block">Securing Your Future</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Premier legal services with a commitment to excellence. Our experienced attorneys 
              provide strategic counsel and aggressive representation to achieve the best outcomes for our clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link to="/contact">Free Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/practice-areas">Our Services</Link>
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
              Why Choose LegalPro?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine decades of experience with innovative legal strategies to deliver 
              exceptional results for our clients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center border-border bg-card hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
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
              <Card key={index} className="border-border bg-card hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    <span className="text-lg font-medium text-foreground">{area}</span>
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-secondary">
        <div className="container mx-auto max-w-4xl text-center">
          <Shield className="h-16 w-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Protect Your Interests?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Don't wait until it's too late. Contact our experienced legal team today 
            for a free consultation and take the first step toward resolving your legal matters.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Schedule Your Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;