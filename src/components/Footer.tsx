import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/ashvik-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <img src={logo} alt="Ashvik Construction" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm opacity-90 mb-4">
              Building Foundations, Creating Futures
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/listings" className="hover:text-accent transition-colors">Properties</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Services</Link></li>
              <li><Link to="/projects" className="hover:text-accent transition-colors">Projects</Link></li>
              <li><Link to="/about" className="hover:text-accent transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-accent transition-colors">Bungalow Renovation</Link></li>
              <li><Link to="/services" className="hover:text-accent transition-colors">Flat Renovation</Link></li>
              <li><Link to="/listings" className="hover:text-accent transition-colors">Property Sales</Link></li>
              <li><Link to="/listings" className="hover:text-accent transition-colors">Property Rentals</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-heading font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 shrink-0 mt-0.5" />
                <span>Mumbai, Maharashtra, India</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 shrink-0" />
                <a href="tel:+919876543210" className="hover:text-accent transition-colors">+91 98765 43210</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 shrink-0" />
                <a href="mailto:info@ashvikconstruction.com" className="hover:text-accent transition-colors">info@ashvikconstruction.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="opacity-90">© 2025 Ashvik Construction. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-accent transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-accent transition-colors">Terms of Service</Link>
          </div>
          <p className="opacity-90">
            Website by <a href="https://ladestack.in" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">LadeStack</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
