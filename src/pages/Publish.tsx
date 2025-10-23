import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Calendar, Clock, Users, DollarSign } from "lucide-react";

const Publish = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-black mb-8">Proposer un trajet</h1>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">Détails du trajet</CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                {/* Departure */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Point de départ
                  </label>
                  <Input 
                    placeholder="Ex: Abidjan, Cocody" 
                    className="h-12" 
                    required
                  />
                </div>

                {/* Arrival */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    Point d'arrivée
                  </label>
                  <Input 
                    placeholder="Ex: Yamoussoukro" 
                    className="h-12" 
                    required
                  />
                </div>

                {/* Date and Time */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      Date de départ
                    </label>
                    <Input 
                      type="date" 
                      className="h-12" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      Heure de départ
                    </label>
                    <Input 
                      type="time" 
                      className="h-12" 
                      required
                    />
                  </div>
                </div>

                {/* Seats and Price */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      Nombre de places
                    </label>
                    <Input 
                      type="number" 
                      min="1" 
                      max="7" 
                      defaultValue="3" 
                      className="h-12" 
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-primary" />
                      Prix par place (FCFA)
                    </label>
                    <Input 
                      type="number" 
                      min="500" 
                      step="100" 
                      placeholder="2500" 
                      className="h-12" 
                      required
                    />
                  </div>
                </div>

                {/* Additional Information */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold">
                    Informations complémentaires
                  </label>
                  <Textarea 
                    placeholder="Ex: Accepte petits bagages, climatisation, musique..."
                    className="min-h-[100px]"
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit" 
                  size="lg" 
                  variant="hero" 
                  className="w-full"
                >
                  Publier mon trajet
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  En publiant ce trajet, vous acceptez nos conditions générales d'utilisation
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Tips Card */}
          <Card className="mt-6 bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Conseils pour un trajet réussi</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <p>✓ Soyez ponctuel au point de rendez-vous</p>
              <p>✓ Assurez-vous que votre véhicule est en bon état</p>
              <p>✓ Communiquez clairement vos conditions (bagages, arrêts, etc.)</p>
              <p>✓ Respectez les passagers et conduisez prudemment</p>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Publish;
