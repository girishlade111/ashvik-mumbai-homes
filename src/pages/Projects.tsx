import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, Star } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Luxury Bungalow Renovation - Worli",
      location: "Worli, Mumbai",
      duration: "10 weeks",
      type: "Bungalow Renovation",
      beforeImage: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=800&q=80",
      description: "Complete renovation of a 4,000 sq.ft government officer bungalow with modern amenities and contemporary design.",
      testimonial: "Exceptional work! The team transformed our bungalow beyond our expectations.",
      client: "Mr. Rajesh Kumar",
      rating: 5,
    },
    {
      title: "Modern Apartment Makeover - Bandra",
      location: "Bandra West, Mumbai",
      duration: "6 weeks",
      type: "Flat Renovation",
      beforeImage: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
      description: "3 BHK apartment renovation with space optimization, custom furniture, and premium finishes.",
      testimonial: "Professional team with great attention to detail. Highly recommended!",
      client: "Mrs. Priya Sharma",
      rating: 5,
    },
    {
      title: "Heritage Bungalow Restoration - Colaba",
      location: "Colaba, Mumbai",
      duration: "14 weeks",
      type: "Bungalow Renovation",
      beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
      afterImage: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
      description: "Careful restoration of a heritage bungalow while preserving its colonial architecture and adding modern comforts.",
      testimonial: "They respected the heritage while making it livable. Outstanding work!",
      client: "Dr. Amit Patel",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary via-primary to-navy-light text-primary-foreground">
        <div className="container mx-auto text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
            Our Projects
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our portfolio of completed renovation and construction projects across Mumbai
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="space-y-20">
            {projects.map((project, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Before/After Images */}
                <div className="space-y-4">
                  <div className="relative group">
                    <Badge className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground">
                      Before
                    </Badge>
                    <img
                      src={project.beforeImage}
                      alt={`${project.title} - Before`}
                      className="w-full h-80 object-cover rounded-2xl shadow-card"
                    />
                  </div>
                  <div className="relative group">
                    <Badge className="absolute top-4 left-4 z-10 bg-accent text-accent-foreground">
                      After
                    </Badge>
                    <img
                      src={project.afterImage}
                      alt={`${project.title} - After`}
                      className="w-full h-80 object-cover rounded-2xl shadow-card"
                    />
                  </div>
                </div>

                {/* Project Details */}
                <div className={`${index % 2 === 1 ? "lg:order-first" : ""}`}>
                  <Card className="p-8 border-0 shadow-card h-full">
                    <Badge variant="secondary" className="mb-4">
                      {project.type}
                    </Badge>
                    <h2 className="font-heading text-3xl font-bold mb-4">{project.title}</h2>
                    
                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        {project.duration}
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6">{project.description}</p>

                    <div className="border-t border-border pt-6">
                      <div className="flex gap-1 mb-3">
                        {Array.from({ length: project.rating }).map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                        ))}
                      </div>
                      <p className="italic text-muted-foreground mb-2">"{project.testimonial}"</p>
                      <p className="font-semibold">— {project.client}</p>
                    </div>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-heading font-bold text-accent mb-2">150+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div>
              <div className="text-5xl font-heading font-bold text-accent mb-2">500+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div>
              <div className="text-5xl font-heading font-bold text-accent mb-2">15+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <div className="text-5xl font-heading font-bold text-accent mb-2">98%</div>
              <p className="text-muted-foreground">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
