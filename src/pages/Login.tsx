import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement authentication with backend
    toast({
      title: "Connexion en cours...",
      description: "Veuillez patienter",
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
                <h1 className="text-3xl font-bold">Bon retour !</h1>
                <p className="text-muted-foreground">
                  Connectez-vous pour accéder à votre compte
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium flex items-center gap-2">
                    <Mail className="w-4 h-4 text-primary" />
                    Email ou Téléphone
                  </label>
                  <Input
                    required
                    type="text"
                    placeholder="votre@email.com ou +225 07 00 00 00 00"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="h-12"
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded border-border" />
                    <span className="text-muted-foreground">Se souvenir de moi</span>
                  </label>
                  <Link to="/forgot-password" className="text-primary hover:underline">
                    Mot de passe oublié ?
                  </Link>
                </div>

                <Button size="lg" variant="hero" type="submit" className="w-full">
                  Se connecter
                </Button>
              </form>

              {/* Divider */}
              <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-border"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-card text-muted-foreground">Ou</span>
                </div>
              </div>

              {/* Sign Up Link */}
              <div className="text-center space-y-4">
                <p className="text-muted-foreground">
                  Vous n'avez pas de compte ?
                </p>
                <Button variant="outline" size="lg" asChild className="w-full">
                  <Link to="/register">Créer un compte gratuit</Link>
                </Button>
              </div>
            </div>

            {/* Security Note */}
            <p className="text-center text-sm text-muted-foreground mt-6">
              Vos données sont protégées et sécurisées
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Login;
