import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Star, Quote, User } from "lucide-react";

const Reviews = () => {
  const reviews = [
    {
      name: "Jessica Martinez",
      title: "Corporate Client",
      rating: 5,
      date: "November 2024",
      review: "Sarah Mitchell and her team provided exceptional guidance during our company's acquisition. Their attention to detail and strategic thinking were instrumental in closing the deal successfully. Highly recommended for any business legal needs.",
      case: "Corporate Acquisition",
      lawyer: "Sarah Mitchell"
    },
    {
      name: "Robert Chen",
      title: "Personal Injury Client",
      rating: 5,
      date: "October 2024",
      review: "After my accident, Michael Rodriguez fought tirelessly for my case. He secured a settlement that exceeded my expectations and kept me informed throughout the entire process. His expertise and compassion made all the difference.",
      case: "Auto Accident Settlement",
      lawyer: "Michael Rodriguez"
    },
    {
      name: "Maria Gonzalez",
      title: "Criminal Defense Client",
      rating: 5,
      date: "September 2024",
      review: "Emily Chen saved my career and reputation. Her strategic defense and deep understanding of criminal law resulted in all charges being dropped. I can't thank her enough for her dedication and skill.",
      case: "White Collar Defense",
      lawyer: "Emily Chen"
    },
    {
      name: "David Kim",
      title: "Family Law Client",
      rating: 5,
      date: "August 2024",
      review: "David Thompson handled my divorce with professionalism and sensitivity. He helped me navigate a difficult situation while protecting my children's interests. His approach reduced conflict and stress significantly.",
      case: "Divorce & Custody",
      lawyer: "David Thompson"
    },
    {
      name: "Ana Rodriguez",
      title: "Immigration Client",
      rating: 5,
      date: "July 2024",
      review: "Jennifer Park helped my family obtain permanent residency. Her knowledge of immigration law and cultural understanding made the complex process manageable. We're forever grateful for her expertise.",
      case: "Green Card Application",
      lawyer: "Jennifer Park"
    },
    {
      name: "Thomas Wilson",
      title: "Real Estate Client",
      rating: 5,
      date: "June 2024",
      review: "Robert Williams guided us through a complex commercial real estate transaction. His expertise saved us from potential pitfalls and ensured a smooth closing. Exceptional service and knowledge.",
      case: "Commercial Real Estate",
      lawyer: "Robert Williams"
    },
    {
      name: "Lisa Thompson",
      title: "Personal Injury Client",
      rating: 5,
      date: "May 2024",
      review: "The entire LegalPro team was outstanding. They handled my medical malpractice case with precision and care. The settlement allowed me to focus on recovery without financial stress.",
      case: "Medical Malpractice",
      lawyer: "Michael Rodriguez"
    },
    {
      name: "Carlos Mendez",
      title: "Criminal Defense Client",
      rating: 5,
      date: "April 2024",
      review: "Facing serious charges was terrifying, but Emily Chen's aggressive defense strategy and courtroom skills resulted in a not guilty verdict. Her reputation as a top criminal defense attorney is well-deserved.",
      case: "Felony Defense",
      lawyer: "Emily Chen"
    },
    {
      name: "Jennifer Adams",
      title: "Estate Planning Client",
      rating: 5,
      date: "March 2024",
      review: "David Thompson created a comprehensive estate plan that gives me peace of mind. His thorough approach and clear explanations made the complex process understandable and stress-free.",
      case: "Estate Planning",
      lawyer: "David Thompson"
    }
  ];

  const stats = [
    { label: "Client Satisfaction", value: "99%" },
    { label: "Cases Won", value: "95%" },
    { label: "Years of Experience", value: "25+" },
    { label: "Happy Clients", value: "1000+" }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? "fill-primary text-primary" : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Client Reviews
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Read what our clients have to say about 
            their experience working with LegalPro. Their success stories are our greatest achievement.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review, index) => (
            <Card key={index} className="border-border bg-card hover:shadow-elegant transition-all duration-300">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <User className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{review.title}</p>
                    </div>
                  </div>
                  <Quote className="h-6 w-6 text-primary/30" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex space-x-1">
                    {renderStars(review.rating)}
                  </div>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 leading-relaxed">
                  "{review.review}"
                </CardDescription>
                <div className="space-y-2">
                  <Badge variant="secondary" className="text-xs">
                    {review.case}
                  </Badge>
                  <p className="text-sm text-muted-foreground">
                    Represented by <span className="text-foreground font-medium">{review.lawyer}</span>
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-muted rounded-lg p-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Join Our Satisfied Clients
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
            Ready to experience the LegalPro difference? Contact us today for a free consultation 
            and let us help you achieve the best possible outcome for your legal matter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/contact">Get Your Free Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/lawyers">Meet Our Team</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;