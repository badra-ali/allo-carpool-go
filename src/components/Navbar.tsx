import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Car, Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-soft">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 transition-base hover:opacity-80">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <Car className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              AlloCar
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-foreground/80 hover:text-primary transition-base font-medium">
              Accueil
            </Link>
            <Link to="/how-it-works" className="text-foreground/80 hover:text-primary transition-base font-medium">
              Comment ça marche
            </Link>
            <Link to="/plans" className="text-foreground/80 hover:text-primary transition-base font-medium">
              Abonnements
            </Link>
            <Link to="/contact" className="text-foreground/80 hover:text-primary transition-base font-medium">
              Contact
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="ghost" asChild>
              <Link to="/login">Connexion</Link>
            </Button>
            <Button variant="hero" asChild>
              <Link to="/register">S'inscrire</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-base"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 space-y-4 animate-in slide-in-from-top">
            <Link
              to="/"
              className="block py-2 text-foreground/80 hover:text-primary transition-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Accueil
            </Link>
            <Link
              to="/how-it-works"
              className="block py-2 text-foreground/80 hover:text-primary transition-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Comment ça marche
            </Link>
            <Link
              to="/plans"
              className="block py-2 text-foreground/80 hover:text-primary transition-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Abonnements
            </Link>
            <Link
              to="/contact"
              className="block py-2 text-foreground/80 hover:text-primary transition-base font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="flex flex-col gap-3 pt-4">
              <Button variant="outline" asChild className="w-full">
                <Link to="/login">Connexion</Link>
              </Button>
              <Button variant="hero" asChild className="w-full">
                <Link to="/register">S'inscrire</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
