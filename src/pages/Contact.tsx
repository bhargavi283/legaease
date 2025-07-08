import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, Scale, Send } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for contacting us. We'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Location",
      details: ["123 Legal Plaza, Suite 500", "Downtown District", "New York, NY 10001"]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["Main: (555) 123-4567", "Emergency: (555) 123-4568", "Fax: (555) 123-4569"]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@legalpro.com", "consultation@legalpro.com", "support@legalpro.com"]
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Emergency Only"]
    }
  ];

  const practiceAreas = [
    "Corporate Law",
    "Personal Injury",
    "Criminal Defense",
    "Family Law",
    "Real Estate Law",
    "Immigration Law",
    "Employment Law",
    "Tax Law",
    "Intellectual Property",
    "Estate Planning",
    "Civil Litigation",
    "Constitutional Law",
    "Other"
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Contact LegalPro
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to discuss your legal needs? Get in touch with our experienced team today. 
            We offer free consultations and are here to help you navigate your legal challenges.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-2xl">
                <Send className="h-6 w-6 text-primary" />
                Send Us a Message
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll get back to you within 24 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="(555) 123-4567" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="practiceArea">Practice Area</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select the area of law for your case" />
                    </SelectTrigger>
                    <SelectContent>
                      {practiceAreas.map((area, index) => (
                        <SelectItem key={index} value={area.toLowerCase().replace(/\s+/g, '-')}>
                          {area}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="urgency">Case Urgency</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="How urgent is your legal matter?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="immediate">Immediate (within 24 hours)</SelectItem>
                      <SelectItem value="urgent">Urgent (within 1 week)</SelectItem>
                      <SelectItem value="normal">Normal (within 2 weeks)</SelectItem>
                      <SelectItem value="planning">Planning ahead</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell Us About Your Case *</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Please provide details about your legal matter, including any important dates or deadlines..."
                    className="min-h-[120px]"
                    required 
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="consultation" />
                    <Label 
                      htmlFor="consultation" 
                      className="text-sm text-muted-foreground leading-relaxed"
                    >
                      I would like to schedule a free consultation
                    </Label>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Checkbox id="privacy" required />
                    <Label 
                      htmlFor="privacy" 
                      className="text-sm text-muted-foreground leading-relaxed"
                    >
                      I agree to the privacy policy and understand that this communication is confidential *
                    </Label>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full" 
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending Message..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl">
                  <Scale className="h-6 w-6 text-primary" />
                  Get In Touch
                </CardTitle>
                <CardDescription>
                  Multiple ways to reach our legal team
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <p key={detailIndex} className="text-sm text-muted-foreground">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Map Placeholder */}
            <Card className="border-border bg-card">
              <CardContent className="p-0">
                <div className="h-64 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <p className="text-muted-foreground">Interactive Map</p>
                    <p className="text-sm text-muted-foreground">
                      123 Legal Plaza, Suite 500<br />
                      Downtown District, NY 10001
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="border-border bg-card border-primary/20">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  Emergency Legal Assistance
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For urgent legal matters requiring immediate attention, call our emergency line.
                </p>
                <Button variant="outline" className="w-full">
                  Call Emergency Line: (555) 123-4568
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;