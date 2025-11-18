import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Bed,
  Bath,
  Square,
  Car,
  MapPin,
  Phone,
  Mail,
  Share2,
  Heart,
  Download,
  CalendarIcon,
  ChevronLeft,
  ChevronRight,
  Check,
} from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

const PropertyDetail = () => {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [scheduleName, setScheduleName] = useState("");
  const [scheduleEmail, setScheduleEmail] = useState("");
  const [schedulePhone, setSchedulePhone] = useState("");

  // Mock property data - in production, fetch based on id
  const property = {
    id: id || "1",
    title: "Luxury 3 BHK Apartment in Bandra West",
    location: "Bandra West, Mumbai",
    price: "₹3.5 Cr",
    type: "sale" as "sale" | "rent",
    status: "new" as "new" | "sold" | "rented",
    furnished: true,
    bhk: 3,
    bathrooms: 3,
    area: "1,850 sq.ft",
    parking: 2,
    description:
      "Experience luxury living in this stunning 3 BHK apartment located in the heart of Bandra West. This premium property features modern architecture, spacious rooms, and high-end finishes throughout. Perfect for families looking for comfort and style in one of Mumbai's most sought-after neighborhoods.",
    images: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1200&q=80",
    ],
    floorPlan: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80",
    amenities: [
      "24/7 Security",
      "Power Backup",
      "Elevator",
      "Gym",
      "Swimming Pool",
      "Children's Play Area",
      "Clubhouse",
      "Landscaped Gardens",
      "Intercom Facility",
      "Visitor Parking",
      "Water Supply",
      "Maintenance Staff",
    ],
    specifications: {
      propertyAge: "New Construction",
      facing: "North-East",
      flooring: "Vitrified Tiles",
      waterSupply: "Municipal + Borewell",
      availability: "Immediate",
      furnishing: "Fully Furnished",
      transactionType: "New Property",
      overlooking: "Park & Garden",
    },
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const handleScheduleVisit = () => {
    if (!selectedDate || !scheduleName || !scheduleEmail || !schedulePhone) {
      toast.error("Please fill all fields and select a date");
      return;
    }
    toast.success("Visit scheduled successfully! We'll contact you soon.");
    setScheduleName("");
    setScheduleEmail("");
    setSchedulePhone("");
    setSelectedDate(undefined);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: property.title,
        text: `Check out this property: ${property.title}`,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link to="/listings" className="text-muted-foreground hover:text-accent transition-colors">
              ← Back to Listings
            </Link>
          </div>

          {/* Image Carousel */}
          <div className="mb-8">
            <div className="relative aspect-[21/9] rounded-2xl overflow-hidden shadow-card group">
              <img
                src={property.images[currentImageIndex]}
                alt={`${property.title} - Image ${currentImageIndex + 1}`}
                className="w-full h-full object-cover"
              />
              
              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-background"
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Status Badges */}
              <div className="absolute top-4 left-4 flex gap-2">
                {property.status && (
                  <Badge
                    className={
                      property.status === "new"
                        ? "bg-accent text-accent-foreground"
                        : property.status === "sold"
                        ? "bg-destructive text-destructive-foreground"
                        : "bg-primary text-primary-foreground"
                    }
                  >
                    {property.status.toUpperCase()}
                  </Badge>
                )}
                <Badge variant="secondary">For {property.type}</Badge>
              </div>

              {/* Action Buttons */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
                  aria-label="Add to favorites"
                >
                  <Heart className={`w-5 h-5 ${isFavorite ? "fill-accent text-accent" : ""}`} />
                </button>
                <button
                  onClick={handleShare}
                  className="w-10 h-10 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
                  aria-label="Share property"
                >
                  <Share2 className="w-5 h-5" />
                </button>
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 right-4 px-4 py-2 bg-background/90 backdrop-blur-sm rounded-full text-sm font-medium">
                {currentImageIndex + 1} / {property.images.length}
              </div>
            </div>

            {/* Thumbnail Strip */}
            <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
              {property.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={cn(
                    "relative flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all",
                    currentImageIndex === index
                      ? "border-accent shadow-gold"
                      : "border-transparent opacity-60 hover:opacity-100"
                  )}
                >
                  <img src={image} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Title and Price */}
              <div>
                <h1 className="font-heading text-4xl font-bold mb-4">{property.title}</h1>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin className="w-5 h-5" />
                  <span className="text-lg">{property.location}</span>
                </div>
                <div className="flex items-baseline gap-2">
                  <p className="text-4xl font-heading font-bold text-accent">{property.price}</p>
                  {property.type === "rent" && (
                    <span className="text-muted-foreground">per month</span>
                  )}
                </div>
              </div>

              {/* Key Features */}
              <Card className="p-6 border-0 shadow-card">
                <h2 className="font-heading text-2xl font-semibold mb-4">Key Features</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center">
                      <Bed className="w-8 h-8 text-accent" />
                    </div>
                    <p className="font-semibold text-lg">{property.bhk} BHK</p>
                    <p className="text-sm text-muted-foreground">Bedrooms</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center">
                      <Bath className="w-8 h-8 text-accent" />
                    </div>
                    <p className="font-semibold text-lg">{property.bathrooms}</p>
                    <p className="text-sm text-muted-foreground">Bathrooms</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center">
                      <Square className="w-8 h-8 text-accent" />
                    </div>
                    <p className="font-semibold text-lg">{property.area}</p>
                    <p className="text-sm text-muted-foreground">Built-up Area</p>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center">
                      <Car className="w-8 h-8 text-accent" />
                    </div>
                    <p className="font-semibold text-lg">{property.parking}</p>
                    <p className="text-sm text-muted-foreground">Parking</p>
                  </div>
                </div>
              </Card>

              {/* Description */}
              <Card className="p-6 border-0 shadow-card">
                <h2 className="font-heading text-2xl font-semibold mb-4">Description</h2>
                <p className="text-muted-foreground leading-relaxed">{property.description}</p>
              </Card>

              {/* Specifications */}
              <Card className="p-6 border-0 shadow-card">
                <h2 className="font-heading text-2xl font-semibold mb-4">Specifications</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(property.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-3 border-b border-border">
                      <span className="text-muted-foreground capitalize">
                        {key.replace(/([A-Z])/g, " $1").trim()}
                      </span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Amenities */}
              <Card className="p-6 border-0 shadow-card">
                <h2 className="font-heading text-2xl font-semibold mb-4">Amenities</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-accent shrink-0" />
                      <span className="text-sm">{amenity}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Floor Plan */}
              <Card className="p-6 border-0 shadow-card">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-heading text-2xl font-semibold">Floor Plan</h2>
                  <Button variant="outline" size="sm" asChild>
                    <a href={property.floorPlan} download>
                      <Download className="w-4 h-4 mr-2" />
                      Download
                    </a>
                  </Button>
                </div>
                <img
                  src={property.floorPlan}
                  alt="Floor plan"
                  className="w-full rounded-lg shadow-sm"
                />
              </Card>

              {/* Location Map */}
              <Card className="p-6 border-0 shadow-card">
                <h2 className="font-heading text-2xl font-semibold mb-4">Location</h2>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-2 text-muted-foreground" />
                    <p className="text-muted-foreground">Map Integration Coming Soon</p>
                    <p className="text-sm text-muted-foreground mt-1">{property.location}</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                {/* Contact Card */}
                <Card className="p-6 border-0 shadow-card">
                  <h3 className="font-heading text-xl font-semibold mb-4">Contact Us</h3>
                  <div className="space-y-3">
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" asChild>
                      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                        WhatsApp Now
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="tel:+919876543210">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </a>
                    </Button>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="mailto:info@ashvikconstruction.com">
                        <Mail className="w-4 h-4 mr-2" />
                        Email
                      </a>
                    </Button>
                  </div>
                </Card>

                {/* Schedule Visit */}
                <Card className="p-6 border-0 shadow-card">
                  <h3 className="font-heading text-xl font-semibold mb-4">Schedule a Visit</h3>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="visit-name">Full Name</Label>
                      <Input
                        id="visit-name"
                        value={scheduleName}
                        onChange={(e) => setScheduleName(e.target.value)}
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <Label htmlFor="visit-email">Email</Label>
                      <Input
                        id="visit-email"
                        type="email"
                        value={scheduleEmail}
                        onChange={(e) => setScheduleEmail(e.target.value)}
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="visit-phone">Phone</Label>
                      <Input
                        id="visit-phone"
                        type="tel"
                        value={schedulePhone}
                        onChange={(e) => setSchedulePhone(e.target.value)}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <Label>Preferred Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal",
                              !selectedDate && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {selectedDate ? format(selectedDate, "PPP") : <span>Pick a date</span>}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            disabled={(date) => date < new Date()}
                            initialFocus
                            className={cn("p-3 pointer-events-auto")}
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                    <Button
                      onClick={handleScheduleVisit}
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                    >
                      Schedule Visit
                    </Button>
                  </div>
                </Card>

                {/* Download Brochure */}
                <Card className="p-6 border-0 shadow-card">
                  <h3 className="font-heading text-xl font-semibold mb-4">Property Brochure</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Download detailed information about this property
                  </p>
                  <Button variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download Brochure
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PropertyDetail;
