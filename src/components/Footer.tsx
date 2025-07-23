import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-3xl font-bold tracking-wider mb-4">
              <span className="text-primary-foreground">AG</span>
              <span className="text-secondary ml-1">FASHIONS</span>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              Elevating style through premium fashion and sustainable practices. 
              Join our community of fashion enthusiasts.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-secondary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-secondary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-secondary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:text-secondary">
                <Mail className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-primary-foreground/80 hover:text-secondary transition-colors">Home</a></li>
              <li><a href="#collections" className="text-primary-foreground/80 hover:text-secondary transition-colors">Collections</a></li>
              <li><a href="#about" className="text-primary-foreground/80 hover:text-secondary transition-colors">About</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-secondary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Care</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Size Guide</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Shipping Info</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">Returns</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-secondary transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 AG Fashions. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-primary-foreground/60 hover:text-secondary text-sm transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;