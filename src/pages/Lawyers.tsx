import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, Phone, Award, GraduationCap, Scale } from "lucide-react";

const Lawyers = () => {
  const lawyers = [
    {
      name: "Sarah Mitchell",
      title: "Senior Partner",
      specialties: ["Corporate Law", "Mergers & Acquisitions"],
      education: "Harvard Law School, J.D.",
      experience: "20+ years",
      awards: ["Best Lawyers in America", "Super Lawyers"],
      email: "s.mitchell@legalpro.com",
      phone: "(555) 123-4567",
      bio: "Sarah is a nationally recognized corporate attorney with extensive experience in complex business transactions, mergers and acquisitions, and corporate governance. She has successfully represented Fortune 500 companies and emerging businesses alike.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Michael Rodriguez",
      title: "Partner",
      specialties: ["Personal Injury", "Medical Malpractice"],
      education: "Stanford Law School, J.D.",
      experience: "15+ years",
      awards: ["Trial Lawyer of the Year", "Million Dollar Advocates Forum"],
      email: "m.rodriguez@legalpro.com",
      phone: "(555) 123-4568",
      bio: "Michael is a skilled trial attorney who has secured millions in settlements and verdicts for injury victims. His compassionate approach and aggressive representation have earned him recognition as one of the top personal injury lawyers in the region.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Emily Chen",
      title: "Partner",
      specialties: ["Criminal Defense", "White Collar Crime"],
      education: "Yale Law School, J.D.",
      experience: "12+ years",
      awards: ["Criminal Defense Lawyer of the Year", "Rising Stars"],
      email: "e.chen@legalpro.com",
      phone: "(555) 123-4569",
      bio: "Emily is a former federal prosecutor who now uses her insider knowledge to provide exceptional criminal defense representation. She has successfully defended clients in high-profile cases and complex white-collar investigations.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "David Thompson",
      title: "Senior Associate",
      specialties: ["Family Law", "Estate Planning"],
      education: "Columbia Law School, J.D.",
      experience: "10+ years",
      awards: ["Family Law Attorney of the Year", "40 Under 40"],
      email: "d.thompson@legalpro.com",
      phone: "(555) 123-4570",
      bio: "David brings a compassionate and strategic approach to family law matters. He understands the emotional challenges his clients face and works tirelessly to achieve favorable outcomes while minimizing conflict and stress.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Jennifer Park",
      title: "Partner",
      specialties: ["Immigration Law", "Employment Law"],
      education: "NYU School of Law, J.D.",
      experience: "14+ years",
      awards: ["Immigration Lawyer of the Year", "Diversity & Inclusion Award"],
      email: "j.park@legalpro.com",
      phone: "(555) 123-4571",
      bio: "Jennifer is dedicated to helping individuals and families navigate the complex immigration system. Her bilingual abilities and cultural sensitivity make her particularly effective in representing diverse clients from around the world.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Robert Williams",
      title: "Senior Partner",
      specialties: ["Real Estate Law", "Commercial Litigation"],
      education: "Georgetown Law School, J.D.",
      experience: "25+ years",
      awards: ["Real Estate Lawyer of the Year", "Best Lawyers in America"],
      email: "r.williams@legalpro.com",
      phone: "(555) 123-4572",
      bio: "Robert has been practicing real estate law for over two decades and has handled some of the largest commercial real estate transactions in the region. His expertise extends to complex commercial litigation and dispute resolution.",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Legal Team
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Meet our experienced attorneys who are dedicated to providing exceptional legal 
            representation. Our team combines decades of experience with innovative strategies 
            to achieve the best outcomes for our clients.
          </p>
        </div>

        {/* Lawyers Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {lawyers.map((lawyer, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-32 h-32 mx-auto md:mx-0 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    <img 
                      src={lawyer.image} 
                      alt={lawyer.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <CardTitle className="text-2xl mb-2">{lawyer.name}</CardTitle>
                    <p className="text-primary font-semibold mb-3">{lawyer.title}</p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-4">
                      {lawyer.specialties.map((specialty, specialtyIndex) => (
                        <Badge key={specialtyIndex} variant="secondary">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center justify-center md:justify-start gap-2">
                        <GraduationCap className="h-4 w-4" />
                        <span>{lawyer.education}</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-2">
                        <Scale className="h-4 w-4" />
                        <span>{lawyer.experience} experience</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  {lawyer.bio}
                </CardDescription>
                
                {/* Awards */}
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground text-sm mb-2 flex items-center gap-2">
                    <Award className="h-4 w-4 text-primary" />
                    Awards & Recognition
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {lawyer.awards.map((award, awardIndex) => (
                      <Badge key={awardIndex} variant="outline" className="text-xs">
                        {award}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Mail className="h-4 w-4" />
                    {lawyer.email}
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    {lawyer.phone}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-muted rounded-lg p-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Work with Our Team?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our experienced attorneys are here to provide you with the legal guidance you need. 
            Contact us today to schedule a consultation with the right lawyer for your case.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/practice-areas">View Practice Areas</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lawyers;