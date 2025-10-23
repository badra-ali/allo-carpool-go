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

      {/* Quick Search Card - Horizontal */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 w-full max-w-6xl px-4 hidden md:block">
        <div className="bg-card/95 rounded-2xl shadow-large p-6 backdrop-blur-md border border-border">
          <form className="flex items-end gap-4">
            <div className="flex-1">
              <label className="text-sm font-medium flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-primary" />
                Départ
              </label>
              <Input placeholder="Ex: Abidjan, Cocody" className="h-12" />
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-primary" />
                Arrivée
              </label>
              <Input placeholder="Ex: Yamoussoukro" className="h-12" />
            </div>
            <div className="flex-1">
              <label className="text-sm font-medium flex items-center gap-2 mb-2">
                <Calendar className="w-4 h-4 text-primary" />
                Date
              </label>
              <Input type="date" className="h-12" />
            </div>
            <Button size="lg" variant="hero" className="h-12 px-8" type="submit">
              <Search className="w-5 h-5" />
              Rechercher
            </Button>
          </form>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 pb-40 md:pb-52 relative z-10">
        <div className="max-w-2xl">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
                  🚗 Économisez jusqu'à 70% sur vos trajets
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                Voyagez <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">malin</span>, voyagez ensemble
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
