import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Bed, Bath, MapPin, Square, Car, Heart } from "lucide-react";
import { useState } from "react";

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: string;
  image: string;
  bhk: number;
  bathrooms: number;
  area: string;
  parking?: number;
  type: "sale" | "rent";
  status?: "new" | "sold" | "rented";
  furnished?: boolean;
}

const PropertyCard = ({
  id,
  title,
  location,
  price,
  image,
  bhk,
  bathrooms,
  area,
  parking,
  type,
  status,
  furnished,
}: PropertyCardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <Card className="group overflow-hidden border-0 shadow-card hover:shadow-hover transition-all duration-300">
      <Link to={`/property/${id}`}>
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            {status && (
              <Badge
                className={
                  status === "new"
                    ? "bg-accent text-accent-foreground"
                    : status === "sold"
                    ? "bg-destructive text-destructive-foreground"
                    : "bg-primary text-primary-foreground"
                }
              >
                {status.toUpperCase()}
              </Badge>
            )}
            <Badge variant="secondary">For {type}</Badge>
            {furnished && <Badge variant="outline" className="bg-background/80 backdrop-blur-sm">Furnished</Badge>}
          </div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsFavorite(!isFavorite);
            }}
            className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full hover:bg-background transition-colors"
            aria-label="Add to favorites"
          >
            <Heart className={`w-5 h-5 ${isFavorite ? "fill-accent text-accent" : "text-foreground"}`} />
          </button>
        </div>
      </Link>

      <div className="p-6">
        <Link to={`/property/${id}`}>
          <h3 className="font-heading font-semibold text-xl mb-2 group-hover:text-accent transition-colors line-clamp-1">
            {title}
          </h3>
        </Link>
        <div className="flex items-center gap-2 text-muted-foreground mb-4">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{location}</span>
        </div>

        <div className="flex items-center gap-4 mb-4 pb-4 border-b border-border">
          <div className="flex items-center gap-1.5">
            <Bed className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium">{bhk} BHK</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Bath className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium">{bathrooms}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Square className="w-4 h-4 text-muted-foreground" />
            <span className="text-sm font-medium">{area}</span>
          </div>
          {parking && (
            <div className="flex items-center gap-1.5">
              <Car className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium">{parking}</span>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-2xl font-heading font-bold text-accent">{price}</p>
            {type === "rent" && <p className="text-xs text-muted-foreground">per month</p>}
          </div>
          <Button size="sm" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
            <Link to={`/property/${id}`}>View Details</Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default PropertyCard;
