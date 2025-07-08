import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Building2, 
  Heart, 
  Shield, 
  Home, 
  Plane, 
  Briefcase,
  Scale,
  Users,
  FileText,
  Car,
  Gavel,
  DollarSign
} from "lucide-react";

const PracticeAreas = () => {
  const practiceAreas = [
    {
      icon: Building2,
      title: "Corporate Law",
      description: "Business formation, mergers & acquisitions, corporate governance, and commercial litigation.",
      services: ["Business Formation", "M&A", "Corporate Governance", "Securities Law"]
    },
    {
      icon: Car,
      title: "Personal Injury",
      description: "Comprehensive representation for accident victims, medical malpractice, and wrongful death cases.",
      services: ["Auto Accidents", "Medical Malpractice", "Slip & Fall", "Product Liability"]
    },
    {
      icon: Shield,
      title: "Criminal Defense",
      description: "Aggressive defense for all criminal charges, from misdemeanors to serious felonies.",
      services: ["DUI Defense", "Felony Charges", "White Collar Crime", "Appeals"]
    },
    {
      icon: Heart,
      title: "Family Law",
      description: "Compassionate representation for divorce, custody, adoption, and domestic relations matters.",
      services: ["Divorce", "Child Custody", "Adoption", "Domestic Violence"]
    },
    {
      icon: Home,
      title: "Real Estate Law",
      description: "Complete real estate legal services for residential and commercial transactions.",
      services: ["Property Transactions", "Title Issues", "Zoning", "Landlord-Tenant"]
    },
    {
      icon: Plane,
      title: "Immigration Law",
      description: "Full-service immigration assistance for individuals, families, and businesses.",
      services: ["Visa Applications", "Green Cards", "Citizenship", "Deportation Defense"]
    },
    {
      icon: Briefcase,
      title: "Employment Law",
      description: "Protecting employee rights and helping employers navigate complex workplace issues.",
      services: ["Discrimination", "Wrongful Termination", "Employment Contracts", "FMLA"]
    },
    {
      icon: DollarSign,
      title: "Tax Law",
      description: "Strategic tax planning, dispute resolution, and compliance for individuals and businesses.",
      services: ["Tax Planning", "IRS Disputes", "Tax Litigation", "Estate Planning"]
    },
    {
      icon: FileText,
      title: "Intellectual Property",
      description: "Protecting and enforcing patents, trademarks, copyrights, and trade secrets.",
      services: ["Patent Filing", "Trademark Registration", "Copyright Protection", "IP Litigation"]
    },
    {
      icon: Users,
      title: "Estate Planning",
      description: "Comprehensive estate planning services to protect your legacy and provide for your family.",
      services: ["Wills", "Trusts", "Probate", "Elder Law"]
    },
    {
      icon: Gavel,
      title: "Civil Litigation",
      description: "Experienced trial lawyers handling complex civil disputes and commercial litigation.",
      services: ["Contract Disputes", "Business Litigation", "Appeals", "Arbitration"]
    },
    {
      icon: Scale,
      title: "Constitutional Law",
      description: "Defending constitutional rights and handling complex federal and state constitutional issues.",
      services: ["Civil Rights", "Federal Court", "Constitutional Challenges", "Appeal Practice"]
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Practice Areas
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            LegalPro offers comprehensive legal services across multiple practice areas. 
            Our experienced attorneys are dedicated to providing exceptional representation 
            and achieving the best possible outcomes for our clients.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {practiceAreas.map((area, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-elegant transition-all duration-300 group">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <area.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4">
                  {area.description}
                </CardDescription>
                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-sm">Key Services:</h4>
                  <ul className="space-y-1">
                    {area.services.map((service, serviceIndex) => (
                      <li key={serviceIndex} className="text-sm text-muted-foreground flex items-center">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-muted rounded-lg p-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Need Legal Assistance?
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our experienced attorneys are here to help. Contact us today for a free consultation 
            to discuss your legal needs and learn how we can assist you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Free Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/lawyers">Meet Our Lawyers</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PracticeAreas;