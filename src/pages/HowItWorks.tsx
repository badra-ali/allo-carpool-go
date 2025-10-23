import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HowItWorksSection from "@/components/HowItWorksSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Star, MessageCircle, CreditCard } from "lucide-react";

const HowItWorks = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
            Comment ça marche ?
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Découvrez comment AlloCar facilite vos déplacements en quelques étapes simples
          </p>

          <HowItWorksSection />

          {/* Additional Features */}
          <div className="mt-16">
            <h2 className="text-3xl font-black text-center mb-8">
              Pourquoi choisir AlloCar ?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-bold">Sécurité garantie</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Tous nos conducteurs sont vérifiés. Vérification d'identité, permis de conduire et évaluations des utilisateurs.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Star className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-bold">Évaluations</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Système de notation transparent. Consultez les avis des autres utilisateurs avant de réserver.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-bold">Communication directe</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Messagerie intégrée pour échanger avec votre conducteur ou passager avant le trajet.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <CreditCard className="w-6 h-6 text-primary" />
                    </div>
                    <span className="font-bold">Paiement sécurisé</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Paiement en ligne via Mobile Money (Orange Money, MTN, Wave) ou en espèces.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
