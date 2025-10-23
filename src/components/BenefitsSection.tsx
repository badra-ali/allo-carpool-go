import { Wallet, Users, Leaf, Shield, Clock, Award } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Wallet,
      title: "Économisez de l'argent",
      description: "Réduisez vos coûts de transport jusqu'à 70% en partageant les frais de carburant et de péage."
    },
    {
      icon: Users,
      title: "Voyagez en bonne compagnie",
      description: "Rencontrez de nouvelles personnes et créez des liens lors de vos déplacements quotidiens."
    },
    {
      icon: Leaf,
      title: "Protégez l'environnement",
      description: "Réduisez les émissions de CO2 et contribuez à un avenir plus vert pour notre pays."
    },
    {
      icon: Shield,
      title: "Sécurité garantie",
      description: "Profils vérifiés, avis utilisateurs et système de notation pour voyager en toute confiance."
    },
    {
      icon: Clock,
      title: "Flexibilité totale",
      description: "Trouvez des trajets à tout moment, pour vos déplacements réguliers ou occasionnels."
    },
    {
      icon: Award,
      title: "Communauté de confiance",
      description: "Rejoignez une communauté engagée de covoitureurs vérifiés et évalués."
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <span className="px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold inline-block">
            Pourquoi AlloCar ?
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">Les avantages du covoiturage</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez comment AlloCar transforme vos déplacements quotidiens
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div 
                key={index} 
                className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-large transition-base border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-base shadow-soft">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
