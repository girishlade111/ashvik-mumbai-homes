import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search } from "lucide-react";

const mumbaiLocalities = [
  "Colaba", "Cuffe Parade", "Marine Drive", "Lower Parel", "Worli", "Bandra West", "Bandra East",
  "Andheri West", "Andheri East", "Juhu", "Santacruz", "Khar", "Malad", "Kandivali", "Borivali",
  "Goregaon", "Powai", "Bhandup", "Chembur", "Ghatkopar", "Vikhroli", "Kurla", "Sion", "Matunga",
  "Dadar", "Prabhadevi", "Parel", "Byculla", "Wadala"
];

const SearchBar = () => {
  const [location, setLocation] = useState("");
  const [forType, setForType] = useState("");
  const [bhk, setBhk] = useState("");
  const [furnished, setFurnished] = useState("");

  const handleSearch = () => {
    console.log({ location, forType, bhk, furnished });
    // Navigate to listings with filters
  };

  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="bg-card rounded-2xl shadow-card p-6 backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger>
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              {mumbaiLocalities.map((locality) => (
                <SelectItem key={locality} value={locality.toLowerCase()}>
                  {locality}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={forType} onValueChange={setForType}>
            <SelectTrigger>
              <SelectValue placeholder="For" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rent">Rent</SelectItem>
              <SelectItem value="sale">Sale</SelectItem>
            </SelectContent>
          </Select>

          <Select value={bhk} onValueChange={setBhk}>
            <SelectTrigger>
              <SelectValue placeholder="BHK" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 BHK</SelectItem>
              <SelectItem value="2">2 BHK</SelectItem>
              <SelectItem value="3">3 BHK</SelectItem>
              <SelectItem value="4">4+ BHK</SelectItem>
            </SelectContent>
          </Select>

          <Select value={furnished} onValueChange={setFurnished}>
            <SelectTrigger>
              <SelectValue placeholder="Furnished" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="furnished">Furnished</SelectItem>
              <SelectItem value="semi-furnished">Semi-Furnished</SelectItem>
              <SelectItem value="unfurnished">Unfurnished</SelectItem>
            </SelectContent>
          </Select>

          <Button onClick={handleSearch} className="bg-accent text-accent-foreground hover:bg-accent/90 w-full">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
