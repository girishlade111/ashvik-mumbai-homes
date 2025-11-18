import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Building2, Home, Hammer, Shield, Star, ArrowRight } from "lucide-react";

const Index = () => {
  const featuredProperties = [
    {
      id: "1",
      title: "Luxury 3 BHK Apartment in Bandra West",
      location: "Bandra West, Mumbai",
      price: "₹3.5 Cr",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
      bhk: 3,
      bathrooms: 3,
      area: "1,850 sq.ft",
      parking: 2,
      type: "sale" as const,
      status: "new" as const,
      furnished: true,
    },
    {
      id: "2",
      title: "Spacious 2 BHK with Sea View in Worli",
      location: "Worli, Mumbai",
      price: "₹95,000",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      bhk: 2,
      bathrooms: 2,
      area: "1,200 sq.ft",
      parking: 1,
      type: "rent" as const,
      furnished: true,
    },
    {
      id: "3",
      title: "Modern 1 BHK Apartment in Andheri",
      location: "Andheri West, Mumbai",
      price: "₹45,000",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80",
      bhk: 1,
      bathrooms: 1,
      area: "650 sq.ft",
      type: "rent" as const,
      furnished: false,
    },
  ];

  const services = [
    {
      icon: <Home className="w-8 h-8" />,
      title: "Bungalow Renovation",
      description: "Complete renovation services for government officer bungalows with premium quality materials.",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Flat Renovation",
      description: "Transform your apartment with our expert renovation and interior design services.",
    },
    {
      icon: <Hammer className="w-8 h-8" />,
      title: "Property Sales",
      description: "Buy premium properties across Mumbai's prime locations with verified documentation.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Property Rentals",
      description: "Find your perfect rental home with flexible terms and transparent processes.",
    },
  ];

  const testimonials = [
    {
      name: "Rajesh Sharma",
      role: "Government Officer",
      content: "Ashvik Construction transformed our bungalow beautifully. Professional service and excellent quality work.",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Homeowner",
      content: "Found my dream apartment through Ashvik. The entire process was smooth and transparent.",
      rating: 5,
    },
    {
      name: "Amit Desai",
      role: "Property Investor",
      content: "Reliable and trustworthy. Their renovation work exceeded our expectations in every way.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary via-primary to-navy-light text-primary-foreground">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
              Building Foundations, Creating Futures
            </h1>
            <p className="text-xl opacity-90 mb-8">
              Premium Real Estate & Renovation Services in Mumbai
            </p>
          </div>
          <SearchBar />
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-4">Featured Properties</h2>
              <p className="text-muted-foreground">Handpicked premium properties across Mumbai</p>
            </div>
            <Button variant="outline" asChild>
              <Link to="/listings">
                View All <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive real estate and renovation solutions tailored to your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-hover transition-all duration-300 border-0 shadow-card">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  {service.icon}
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">Ready to Find Your Dream Property?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Let us help you find the perfect home or transform your existing space
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <Link to="/listings">Browse Properties</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/contact">Request Estimate</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-muted-foreground">Trusted by hundreds of satisfied clients across Mumbai</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 border-0 shadow-card">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
