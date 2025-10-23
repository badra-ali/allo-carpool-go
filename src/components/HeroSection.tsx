import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, Plus, MapPin, Calendar } from "lucide-react";
import { Input } from "@/components/ui/input";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Covoiturage en Afrique" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/50"></div>
      </div>

      {/* Quick Search Card - Background */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 z-5 hidden lg:block">
        <div className="bg-card/90 rounded-2xl shadow-large p-8 backdrop-blur-md border border-border w-[380px]">
          <h3 className="text-2xl font-bold mb-6">Recherche rapide</h3>
          <form className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Départ
              </label>
              <Input placeholder="Ex: Abidjan, Cocody" className="h-12" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                Arrivée
              </label>
              <Input placeholder="Ex: Yamoussoukro" className="h-12" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                Date
              </label>
              <Input type="date" className="h-12" />
            </div>
            <Button size="lg" variant="hero" className="w-full" type="submit">
              <Search className="w-5 h-5" />
              Rechercher
            </Button>
          </form>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-2xl">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  🚗 Économisez jusqu'à 70% sur vos trajets
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                Voyagez <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">malin</span>,
                <br />voyagez ensemble
              </h1>
              <p className="text-xl text-muted-foreground">
                AlloCar connecte conducteurs et passagers pour des trajets économiques, conviviaux et écologiques à travers la Côte d'Ivoire.
              </p>
            </div>

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

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <div className="text-3xl font-bold text-primary">5000+</div>
                <div className="text-sm text-muted-foreground">Trajets réalisés</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary">2000+</div>
                <div className="text-sm text-muted-foreground">Utilisateurs actifs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">4.8/5</div>
                <div className="text-sm text-muted-foreground">Note moyenne</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
