import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Home, Building2, Hammer, CheckCircle2, Clock, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: <Home className="w-12 h-12" />,
      title: "Bungalow Renovation",
      description: "Complete renovation services for government officer bungalows with premium quality materials and expert craftsmanship.",
      features: [
        "Structural Assessment",
        "Interior Design Consultation",
        "Quality Material Selection",
        "Modern Amenities Installation",
        "Energy-Efficient Solutions",
      ],
      timeline: "8-12 weeks",
      pricing: "Starting from ₹15 Lakhs",
    },
    {
      icon: <Building2 className="w-12 h-12" />,
      title: "Flat Renovation",
      description: "Transform your apartment with our expert renovation services, from concept to completion.",
      features: [
        "Space Optimization",
        "Custom Furniture Design",
        "Electrical & Plumbing Upgrade",
        "False Ceiling & Lighting",
        "Premium Flooring Options",
      ],
      timeline: "4-8 weeks",
      pricing: "Starting from ₹8 Lakhs",
    },
    {
      icon: <Hammer className="w-12 h-12" />,
      title: "Office Renovation",
      description: "Create productive workspaces with modern designs and efficient layouts.",
      features: [
        "Workspace Planning",
        "Ergonomic Solutions",
        "Network Infrastructure",
        "Conference Room Setup",
        "Branding Integration",
      ],
      timeline: "6-10 weeks",
      pricing: "Starting from ₹12 Lakhs",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Initial Consultation",
      description: "We discuss your vision, requirements, and budget to create a tailored plan.",
    },
    {
      step: "02",
      title: "Design & Planning",
      description: "Our experts create detailed designs and project timelines for your approval.",
    },
    {
      step: "03",
      title: "Execution",
      description: "Skilled craftsmen bring your vision to life with quality materials and precision.",
    },
    {
      step: "04",
      title: "Quality Check & Handover",
      description: "Thorough inspection and final walkthrough before project completion.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary via-primary to-navy-light text-primary-foreground">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Services
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Premium renovation and real estate services tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-8 border-0 shadow-card hover:shadow-hover transition-all duration-300">
                <div className="w-20 h-20 mb-6 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
                  {service.icon}
                </div>
                <h2 className="font-heading text-2xl font-bold mb-4">{service.title}</h2>
                <p className="text-muted-foreground mb-6">{service.description}</p>
                
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center gap-4 mb-6 pb-6 border-t border-border pt-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                    <span className="text-sm font-medium">{service.timeline}</span>
                  </div>
                  <Badge variant="secondary">{service.pricing}</Badge>
                </div>

                <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A streamlined approach to delivering exceptional results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent text-accent-foreground flex items-center justify-center text-2xl font-heading font-bold">
                  {item.step}
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">Why Choose Ashvik?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center border-0 shadow-card">
              <Shield className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="font-heading font-semibold text-xl mb-3">Licensed & Insured</h3>
              <p className="text-muted-foreground text-sm">
                All our projects are fully insured with verified licenses and certifications.
              </p>
            </Card>

            <Card className="p-8 text-center border-0 shadow-card">
              <CheckCircle2 className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="font-heading font-semibold text-xl mb-3">Quality Guaranteed</h3>
              <p className="text-muted-foreground text-sm">
                We use only premium materials and provide warranty on all workmanship.
              </p>
            </Card>

            <Card className="p-8 text-center border-0 shadow-card">
              <Clock className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="font-heading font-semibold text-xl mb-3">On-Time Delivery</h3>
              <p className="text-muted-foreground text-sm">
                We respect your time and ensure project completion within agreed timelines.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">Ready to Transform Your Space?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Get a free consultation and quote for your renovation project
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <Link to="/contact">Request Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
