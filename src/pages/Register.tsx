import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Mail, Lock, User, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Register = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "passenger" as "passenger" | "driver"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Erreur",
        description: "Les mots de passe ne correspondent pas",
        variant: "destructive"
      });
      return;
    }

    // TODO: Implement registration with backend
    toast({
      title: "Inscription réussie !",
      description: "Vérifiez votre email pour confirmer votre compte",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-large border border-border">
              {/* Header */}
              <div className="text-center mb-8 space-y-2">
                <h1 className="text-3xl font-bold">Créez votre compte</h1>
                <p className="text-muted-foreground">
                  Rejoignez la communauté AlloCar en quelques clics
                </p>
              </div>

              {/* Role Selection */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: "passenger" })}
                  className={`p-4 rounded-xl border-2 transition-base ${
                    formData.role === "passenger"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">🧑‍💼</div>
                    <div className="font-semibold">Passager</div>
                    <div className="text-xs text-muted-foreground">Je cherche un trajet</div>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData({ ...formData, role: "driver" })}
                  className={`p-4 rounded-xl border-2 transition-base ${
                    formData.role === "driver"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2">🚗</div>
                    <div className="font-semibold">Conducteur</div>
                    <div className="text-xs text-muted-foreground">Je propose un trajet</div>
                  </div>
                </button>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    Nom complet
                  </label>
                  <Input
                    required
                    placeholder="Jean Kouassi"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    Email
                  </label>
                  <Input
                    required
                    type="email"
                    placeholder="votre@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary" />
                    Téléphone
                  </label>
                  <Input
                    required
                    type="tel"
                    placeholder="+225 07 00 00 00 00"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Lock className="w-4 h-4 text-primary" />
                    Mot de passe
                  </label>
                  <Input
                    required
                    type="password"
                    placeholder="Min. 8 caractères"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="h-12"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Lock className="w-4 h-4 text-primary" />
                    Confirmer le mot de passe
                  </label>
                  <Input
                    required
                    type="password"
                    placeholder="Répétez votre mot de passe"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    className="h-12"
                  />
                </div>

                <div className="flex items-start gap-2 pt-2">
                  <input type="checkbox" required className="mt-1 rounded border-border" />
                  <label className="text-sm text-muted-foreground">
                    J'accepte les{" "}
                    <Link to="/terms" className="text-primary hover:underline">
                      conditions d'utilisation
                    </Link>{" "}
                    et la{" "}
                    <Link to="/privacy" className="text-primary hover:underline">
                      politique de confidentialité
                    </Link>
                  </label>
                </div>

                <Button size="lg" variant="hero" type="submit" className="w-full">
                  Créer mon compte
                </Button>
              </form>

              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-card text-muted-foreground">Ou</span>
                </div>
              </div>

              {/* Login Link */}
              <div className="text-center">
                <p className="text-muted-foreground">
                  Vous avez déjà un compte ?{" "}
                  <Link to="/login" className="text-primary font-semibold hover:underline">
                    Se connecter
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
