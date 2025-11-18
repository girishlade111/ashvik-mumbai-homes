import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, Target, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for perfection in every project, delivering quality that exceeds expectations.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Integrity",
      description: "Transparent processes and honest communication build lasting relationships with our clients.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Innovation",
      description: "Embracing modern techniques and sustainable practices for better results.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Commitment",
      description: "Dedicated to your satisfaction from initial consultation to final handover.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary via-primary to-navy-light text-primary-foreground">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            About Ashvik Construction
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Building Foundations, Creating Futures since 2008
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2008, Ashvik Construction has been transforming spaces across Mumbai for over 15 years. 
                  What started as a small renovation business has grown into one of Mumbai's most trusted names in 
                  real estate and construction.
                </p>
                <p>
                  Our journey began with a simple mission: to provide honest, high-quality renovation services to 
                  government officers and families looking to transform their living spaces. Over the years, we've 
                  expanded our services to include property sales and rentals, always maintaining our commitment to 
                  excellence.
                </p>
                <p>
                  Today, with over 150 completed projects and 500+ satisfied clients, we continue to set new standards 
                  in the industry. Our team of skilled professionals brings decades of combined experience, ensuring 
                  every project receives the attention and expertise it deserves.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80"
                alt="Team at work"
                className="rounded-2xl shadow-card h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&q=80"
                alt="Project discussion"
                className="rounded-2xl shadow-card h-64 object-cover mt-8"
              />
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80"
                alt="Quality inspection"
                className="rounded-2xl shadow-card h-64 object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&q=80"
                alt="Completed project"
                className="rounded-2xl shadow-card h-64 object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center border-0 shadow-card hover:shadow-hover transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                  {value.icon}
                </div>
                <h3 className="font-heading font-semibold text-xl mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experienced professionals dedicated to bringing your vision to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-card hover:shadow-hover transition-all duration-300">
                <div className="aspect-square bg-muted"></div>
                <div className="p-6 text-center">
                  <h3 className="font-heading font-semibold text-xl mb-1">Team Member</h3>
                  <p className="text-muted-foreground text-sm mb-3">Position</p>
                  <p className="text-sm text-muted-foreground">
                    Brief description of expertise and experience.
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who trusted us with their dreams
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/projects">View Our Work</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
