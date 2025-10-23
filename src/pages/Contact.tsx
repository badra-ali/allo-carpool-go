import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission with backend
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 space-y-4">
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold inline-block">
                Contactez-nous
              </span>
              <h1 className="text-4xl md:text-5xl font-bold">Une question ? Nous sommes là pour vous aider</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Notre équipe est disponible pour répondre à toutes vos questions
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Contact Cards */}
              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border text-center space-y-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto">
                  <Mail className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <a href="mailto:contact@allocar.ci" className="text-muted-foreground hover:text-primary transition-base">
                    contact@allocar.ci
                  </a>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border text-center space-y-4">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto">
                  <Phone className="w-7 h-7 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Téléphone</h3>
                  <a href="tel:+2250707000000" className="text-muted-foreground hover:text-primary transition-base">
                    +225 07 07 00 00 00
                  </a>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-6 shadow-soft border border-border text-center space-y-4">
                <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto">
                  <Clock className="w-7 h-7 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Horaires</h3>
                  <p className="text-muted-foreground">
                    Lun - Sam: 8h - 18h
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-card rounded-2xl p-8 shadow-medium border border-border">
                <h2 className="text-2xl font-bold mb-6">Envoyez-nous un message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Nom complet *</label>
                    <Input
                      required
                      placeholder="Votre nom"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email *</label>
                    <Input
                      required
                      type="email"
                      placeholder="votre.email@exemple.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Téléphone</label>
                    <Input
                      type="tel"
                      placeholder="+225 07 00 00 00 00"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium">Message *</label>
                    <Textarea
                      required
                      placeholder="Décrivez votre demande..."
                      rows={6}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <Button size="lg" variant="hero" type="submit" className="w-full">
                    Envoyer le message
                  </Button>
                </form>
              </div>

              {/* Info Section */}
              <div className="space-y-8">
                <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-2">Notre adresse</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Plateau, Abidjan<br />
                        Côte d'Ivoire
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 text-primary-foreground">
                  <h3 className="text-2xl font-bold mb-4">Besoin d'aide immédiate ?</h3>
                  <p className="mb-6 opacity-90">
                    Consultez notre FAQ ou contactez notre support client disponible 6j/7
                  </p>
                  <Button variant="outline" className="bg-background text-primary hover:bg-background/90">
                    Voir la FAQ
                  </Button>
                </div>

                <div className="bg-card rounded-2xl p-8 shadow-soft border border-border">
                  <h3 className="font-bold mb-4">Vous êtes une entreprise ?</h3>
                  <p className="text-muted-foreground mb-4">
                    Découvrez nos solutions dédiées aux professionnels pour le covoiturage de vos équipes.
                  </p>
                  <Button variant="default" className="w-full">
                    En savoir plus
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
