import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll contact you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Address",
      details: "Mumbai, Maharashtra, India",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      details: "+91 98765 43210",
      link: "tel:+919876543210",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      details: "info@ashvikconstruction.com",
      link: "mailto:info@ashvikconstruction.com",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      details: "Mon - Sat: 9:00 AM - 7:00 PM",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary via-primary to-navy-light text-primary-foreground">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Get In Touch
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 text-center border-0 shadow-card hover:shadow-hover transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  {info.icon}
                </div>
                <h3 className="font-heading font-semibold text-lg mb-2">{info.title}</h3>
                {info.link ? (
                  <a href={info.link} className="text-muted-foreground hover:text-accent transition-colors">
                    {info.details}
                  </a>
                ) : (
                  <p className="text-muted-foreground">{info.details}</p>
                )}
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="font-heading text-3xl font-bold mb-4">Send Us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-2 block">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-2 block">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="text-sm font-medium mb-2 block">
                    Phone Number *
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    placeholder="Tell us about your project..."
                    rows={6}
                  />
                </div>

                <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                  Send Message
                </Button>
              </form>
            </div>

            <div className="lg:pl-12">
              <Card className="p-8 border-0 shadow-card mb-8">
                <h3 className="font-heading text-2xl font-bold mb-4">Quick Connect</h3>
                <p className="text-muted-foreground mb-6">
                  Prefer instant communication? Reach us directly via WhatsApp or phone call.
                </p>
                <div className="space-y-4">
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg" asChild>
                    <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                      Chat on WhatsApp
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full" size="lg" asChild>
                    <a href="tel:+919876543210">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </Card>

              <Card className="p-8 border-0 shadow-card">
                <h3 className="font-heading text-2xl font-bold mb-4">Office Location</h3>
                <div className="aspect-video bg-muted rounded-lg mb-4 flex items-center justify-center">
                  <MapPin className="w-12 h-12 text-muted-foreground" />
                </div>
                <p className="text-muted-foreground">
                  Visit our office in Mumbai to discuss your project in person. Schedule an appointment for a consultation.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
