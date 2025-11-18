import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import { SlidersHorizontal } from "lucide-react";

const Listings = () => {
  const [showFilters, setShowFilters] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 10000000]);

  const properties = [
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
    {
      id: "4",
      title: "Premium Villa in Juhu",
      location: "Juhu, Mumbai",
      price: "₹12 Cr",
      image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80",
      bhk: 4,
      bathrooms: 4,
      area: "3,500 sq.ft",
      parking: 3,
      type: "sale" as const,
      status: "new" as const,
      furnished: true,
    },
    {
      id: "5",
      title: "Cozy 2 BHK in Powai",
      location: "Powai, Mumbai",
      price: "₹65,000",
      image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80",
      bhk: 2,
      bathrooms: 2,
      area: "1,100 sq.ft",
      parking: 1,
      type: "rent" as const,
      furnished: true,
    },
    {
      id: "6",
      title: "Elegant 3 BHK in Lower Parel",
      location: "Lower Parel, Mumbai",
      price: "₹4.2 Cr",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80",
      bhk: 3,
      bathrooms: 3,
      area: "2,000 sq.ft",
      parking: 2,
      type: "sale" as const,
      furnished: false,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main className="pt-24 pb-20 px-4">
        <div className="container mx-auto">
          <div className="mb-8">
            <h1 className="font-heading text-4xl font-bold mb-4">Properties in Mumbai</h1>
            <p className="text-muted-foreground">Explore {properties.length} premium properties</p>
          </div>

          <div className="flex gap-8">
            {/* Filters Sidebar */}
            <aside className={`${showFilters ? "block" : "hidden"} w-80 shrink-0`}>
              <Card className="p-6 sticky top-24 border-0 shadow-card">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-heading font-semibold text-xl">Filters</h2>
                  <Button variant="ghost" size="sm">Clear All</Button>
                </div>

                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-medium mb-3 block">Property Type</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="flat">Flat</SelectItem>
                        <SelectItem value="villa">Villa</SelectItem>
                        <SelectItem value="bungalow">Bungalow</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-3 block">For</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Rent or Sale" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="rent">Rent</SelectItem>
                        <SelectItem value="sale">Sale</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-3 block">BHK</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select BHK" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 BHK</SelectItem>
                        <SelectItem value="2">2 BHK</SelectItem>
                        <SelectItem value="3">3 BHK</SelectItem>
                        <SelectItem value="4">4+ BHK</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-3 block">Furnished Status</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="furnished">Furnished</SelectItem>
                        <SelectItem value="semi-furnished">Semi-Furnished</SelectItem>
                        <SelectItem value="unfurnished">Unfurnished</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-3 block">
                      Price Range: ₹{priceRange[0].toLocaleString()} - ₹{priceRange[1].toLocaleString()}
                    </label>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      min={0}
                      max={10000000}
                      step={100000}
                      className="mt-2"
                    />
                  </div>

                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                    Apply Filters
                  </Button>
                </div>
              </Card>
            </aside>

            {/* Properties Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  {showFilters ? "Hide" : "Show"} Filters
                </Button>

                <Select>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="area">Area</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {properties.map((property) => (
                  <PropertyCard key={property.id} {...property} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Listings;
