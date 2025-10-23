import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Search as SearchIcon, MapPin, Calendar, Users, Star } from "lucide-react";

const Search = () => {
  const location = useLocation();
  const searchParams = location.state as { from?: string; to?: string; date?: string } | null;
  
  const [filters, setFilters] = useState({
    from: searchParams?.from || "",
    to: searchParams?.to || "",
    date: searchParams?.date || "",
    seats: "1"
  });

  const allResults = [
    {
      id: 1,
      driver: "Koffi Mensah",
      rating: 4.8,
      from: "Abidjan, Cocody",
      to: "Yamoussoukro",
      date: "2024-11-15",
      time: "07:30",
      seats: 3,
      price: 2500
    },
    {
      id: 2,
      driver: "Aïcha Touré",
      rating: 4.9,
      from: "Abidjan, Yopougon",
      to: "San Pedro",
      date: "2024-11-15",
      time: "08:00",
      seats: 2,
      price: 3000
    }
  ];

  const [results, setResults] = useState(allResults);

  useEffect(() => {
    filterResults();
  }, [filters]);

  const filterResults = () => {
    let filtered = allResults;

    if (filters.from) {
      filtered = filtered.filter(r => 
        r.from.toLowerCase().includes(filters.from.toLowerCase())
      );
    }

    if (filters.to) {
      filtered = filtered.filter(r => 
        r.to.toLowerCase().includes(filters.to.toLowerCase())
      );
    }

    if (filters.date) {
      filtered = filtered.filter(r => r.date === filters.date);
    }

    if (filters.seats) {
      filtered = filtered.filter(r => r.seats >= parseInt(filters.seats));
    }

    setResults(filtered);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    filterResults();
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-black mb-8">Rechercher un trajet</h1>
          
          {/* Search Form */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <form onSubmit={handleSearch} className="grid md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Départ
                  </label>
                  <Input 
                    placeholder="Ex: Abidjan, Cocody" 
                    className="h-12"
                    value={filters.from}
                    onChange={(e) => setFilters({ ...filters, from: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Arrivée
                  </label>
                  <Input 
                    placeholder="Ex: Yamoussoukro" 
                    className="h-12"
                    value={filters.to}
                    onChange={(e) => setFilters({ ...filters, to: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    Date
                  </label>
                  <Input 
                    type="date" 
                    className="h-12"
                    value={filters.date}
                    onChange={(e) => setFilters({ ...filters, date: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold flex items-center gap-2">
                    <Users className="w-4 h-4 text-primary" />
                    Places
                  </label>
                  <Input 
                    type="number" 
                    min="1" 
                    className="h-12"
                    value={filters.seats}
                    onChange={(e) => setFilters({ ...filters, seats: e.target.value })}
                  />
                </div>
              </form>
              <Button size="lg" variant="hero" className="w-full mt-4" onClick={handleSearch}>
                <SearchIcon className="w-5 h-5" />
                Rechercher
              </Button>
            </CardContent>
          </Card>

          {/* Results */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold">{results.length} trajets disponibles</h2>
            {results.map((result) => (
              <Card key={result.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">
                          {result.driver.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <div className="font-bold">{result.driver}</div>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          {result.rating}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-black text-primary">{result.price} FCFA</div>
                      <div className="text-sm text-muted-foreground">par personne</div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-muted-foreground font-semibold mb-1">Départ</div>
                      <div className="font-bold">{result.from}</div>
                      <div className="text-sm text-muted-foreground">{result.time}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground font-semibold mb-1">Arrivée</div>
                      <div className="font-bold">{result.to}</div>
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground font-semibold mb-1">Places disponibles</div>
                      <div className="font-bold">{result.seats} places</div>
                    </div>
                  </div>
                  <Button variant="hero" className="w-full">
                    Réserver ce trajet
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Search;
