import { Button } from "@/components/ui/button";
import { Check, Star } from "lucide-react";
import { Link } from "react-router-dom";

const PricingSection = () => {
  const plans = [
    {
      name: "Journalier",
      price: "500",
      period: "jour",
      description: "Parfait pour tester le service",
      features: [
        "Publication illimitée de trajets",
        "Recherche avancée",
        "Support client standard",
        "Notifications par SMS"
      ],
      cta: "Essayer",
      variant: "outline" as const
    },
    {
      name: "Mensuel",
      price: "5,000",
      period: "mois",
      description: "Le plus populaire pour les utilisateurs réguliers",
      features: [
        "Tous les avantages Journalier",
        "Badge Premium visible",
        "Mise en avant des trajets",
        "Commission réduite de 5%",
        "Support prioritaire",
        "Messagerie illimitée"
      ],
      cta: "Commencer",
      variant: "hero" as const,
      popular: true
    },
    {
      name: "Annuel",
      price: "50,000",
      period: "an",
      description: "Économisez 2 mois avec l'abonnement annuel",
      features: [
        "Tous les avantages Mensuel",
        "Économisez 16% par an",
        "Badge VIP exclusif",
        "Commission réduite de 3%",
        "Accompagnement dédié",
        "Accès anticipé aux nouveautés"
      ],
      cta: "Souscrire",
      variant: "secondary" as const
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <span className="px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold inline-block">
            Tarifs transparents
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">Choisissez votre abonnement</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des formules adaptées à vos besoins, sans engagement et résiliables à tout moment
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative rounded-2xl p-8 border-2 transition-base hover:shadow-large ${
                plan.popular 
                  ? 'border-primary bg-gradient-to-b from-primary/5 to-background scale-105' 
                  : 'border-border bg-card'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full gradient-hero shadow-medium">
                  <div className="flex items-center gap-1 text-primary-foreground text-sm font-bold">
                    <Star className="w-4 h-4 fill-current" />
                    Le plus populaire
                  </div>
                </div>
              )}

              <div className="space-y-6">
                {/* Header */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-primary">{plan.price}</span>
                  <span className="text-muted-foreground">FCFA / {plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 py-6 border-t border-b border-border">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  size="lg" 
                  variant={plan.variant}
                  className="w-full"
                  asChild
                >
                  <Link to="/register">{plan.cta}</Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Tous les paiements sont sécurisés via Mobile Money (Orange Money, MTN, Wave)
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
