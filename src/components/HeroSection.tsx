import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";
import { Search, Plus, MapPin, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-image.jpg";
import AnimatedStat from "@/components/AnimatedStat";

const HeroSection = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useState({
    from: "",
    to: "",
    date: ""
  });

  const handleQuickSearch = (e: React.FormEvent) => {
    e.preventDefault();
    navigate("/search", { state: searchParams });
  };
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Covoiturage en Afrique" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-background/50 to-background/20"></div>
      </div>

      {/* Quick Search Card - Responsive */}
      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-10 w-full max-w-6xl px-4">
        <div className="bg-card/95 rounded-2xl shadow-large p-4 md:p-6 backdrop-blur-md border border-border">
          <form onSubmit={handleQuickSearch} className="flex flex-col md:flex-row items-stretch md:items-end gap-3 md:gap-4">
            <div className="flex-1">
              <label className="text-sm font-medium flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-primary" />
                Départ
              </label>
              <Input 
                placeholder="Ex: Abidjan, Cocody" 
                className="h-12"
                value={searchParams.from}
                onChange={(e) => setSearchParams({ ...searchParams, from: e.target.value })}
              />
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-primary" />
                Arrivée
              </label>
              <Input 
                placeholder="Ex: Yamoussoukro" 
                className="h-12"
                value={searchParams.to}
                onChange={(e) => setSearchParams({ ...searchParams, to: e.target.value })}
              />
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-primary" />
                Date
              </label>
              <Input 
                type="date" 
                className="h-12"
                value={searchParams.date}
                onChange={(e) => setSearchParams({ ...searchParams, date: e.target.value })}
              />
            </div>
            <Button size="lg" variant="hero" className="h-12 md:px-8" type="submit">
              <Search className="w-5 h-5" />
              <span className="md:inline">Rechercher</span>
            </Button>
          </form>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 pb-48 md:pb-56 relative z-10">
        <div className="max-w-2xl">
          <div className="space-y-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" variant="hero" asChild>
                <Link to="/search">
                  <Search className="w-5 h-5" />
                  Trouver un trajet
                </Link>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link to="/publish">
                  <Plus className="w-5 h-5" />
                  Proposer un trajet
                </Link>
              </Button>
            </div>

            {/* Quick Stats - Animated */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <AnimatedStat 
                value={5000} 
                suffix="+" 
                label="Trajets réalisés" 
                colorClass="text-primary"
              />
              <AnimatedStat 
                value={2000} 
                suffix="+" 
                label="Utilisateurs actifs" 
                colorClass="text-secondary"
              />
              <AnimatedStat 
                value={48} 
                suffix="/5" 
                label="Note moyenne" 
                colorClass="text-accent"
                decimals={1}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
