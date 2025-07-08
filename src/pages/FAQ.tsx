import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { HelpCircle, MessageCircle, Phone, Mail } from "lucide-react";

const FAQ = () => {
  const faqCategories = [
    {
      title: "General Questions",
      icon: HelpCircle,
      questions: [
        {
          question: "What areas of law does LegalPro practice?",
          answer: "LegalPro provides comprehensive legal services across multiple practice areas including corporate law, personal injury, criminal defense, family law, real estate, immigration, employment law, tax law, intellectual property, estate planning, civil litigation, and constitutional law."
        },
        {
          question: "How much do your legal services cost?",
          answer: "Our fees vary depending on the type of case and complexity of the matter. We offer different fee structures including hourly rates, flat fees, and contingency fees (where applicable). We provide transparent pricing and will discuss all costs during your initial consultation."
        },
        {
          question: "Do you offer free consultations?",
          answer: "Yes, we offer free initial consultations for most practice areas. This allows us to understand your legal needs and determine how we can best assist you. The consultation typically lasts 30-60 minutes and gives you an opportunity to ask questions about your case."
        },
        {
          question: "How quickly can I meet with an attorney?",
          answer: "We understand that legal matters often require urgent attention. We typically can schedule consultations within 24-48 hours, and for emergency situations, we may be able to arrange same-day meetings."
        }
      ]
    },
    {
      title: "Case Process",
      icon: MessageCircle,
      questions: [
        {
          question: "What should I bring to my first meeting?",
          answer: "Please bring any relevant documents related to your case, including contracts, correspondence, court papers, medical records, or police reports. Also bring a list of questions you'd like to discuss and any relevant dates or timelines."
        },
        {
          question: "How long will my case take?",
          answer: "The timeline varies significantly depending on the type of case, its complexity, and whether it can be resolved through negotiation or requires litigation. During your consultation, we'll provide an estimated timeline based on similar cases we've handled."
        },
        {
          question: "Will my case go to trial?",
          answer: "Most cases are resolved through negotiation or alternative dispute resolution methods without going to trial. However, if trial becomes necessary, our experienced litigators are fully prepared to represent you in court."
        },
        {
          question: "How will you keep me informed about my case?",
          answer: "We believe in maintaining open communication with our clients. You'll receive regular updates via phone, email, or in-person meetings. We also provide access to a client portal where you can track case progress and review documents."
        }
      ]
    },
    {
      title: "Billing & Payment",
      icon: Phone,
      questions: [
        {
          question: "What payment methods do you accept?",
          answer: "We accept cash, checks, credit cards (Visa, MasterCard, American Express), wire transfers, and can arrange payment plans for qualifying cases. We also work with legal financing companies when appropriate."
        },
        {
          question: "Do you require a retainer?",
          answer: "For most cases, we do require a retainer fee upfront. The amount varies based on the complexity of your matter. This retainer is held in a trust account and applied to your legal fees as work is performed."
        },
        {
          question: "What happens if I can't afford legal representation?",
          answer: "We understand that legal issues can create financial stress. We offer payment plans, sliding scale fees for qualifying clients, and for certain types of cases, we work on a contingency fee basis where you only pay if we win your case."
        },
        {
          question: "Will you provide a written fee agreement?",
          answer: "Absolutely. We provide a clear, written fee agreement that outlines all costs, billing procedures, and payment terms before we begin work on your case. This ensures complete transparency and understanding of our billing practices."
        }
      ]
    }
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone Consultation",
      description: "Speak directly with our legal team",
      contact: "(555) 123-4567",
      action: "Call Now"
    },
    {
      icon: Mail,
      title: "Email Inquiry",
      description: "Send us your questions via email",
      contact: "info@legalpro.com",
      action: "Send Email"
    },
    {
      icon: MessageCircle,
      title: "Online Consultation",
      description: "Schedule a video consultation",
      contact: "Book online meeting",
      action: "Schedule Now"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our legal services, process, and policies. 
            If you don't see your question here, don't hesitate to contact us directly.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8 mb-16">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="border-border bg-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <category.icon className="h-6 w-6 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border-border"
                    >
                      <AccordionTrigger className="text-left hover:text-primary">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Still Have Questions Section */}
        <div className="bg-muted rounded-lg p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Still Have Questions?
            </h2>
            <p className="text-lg text-muted-foreground">
              Our legal experts are here to help. Choose your preferred way to get in touch with us.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-border bg-card text-center hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <method.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {method.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {method.description}
                  </p>
                  <p className="text-sm text-foreground font-medium mb-4">
                    {method.contact}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-6">
            Don't let legal issues overwhelm you. Our experienced team is ready to help.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">Schedule Your Free Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;