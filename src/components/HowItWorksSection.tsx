import step1Icon from "@/assets/step1-icon.png";
import step2Icon from "@/assets/step2-icon.png";
import step3Icon from "@/assets/step3-icon.png";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      icon: step1Icon,
      title: "Recherchez ou proposez",
      description: "Entrez votre itinéraire et trouvez le trajet parfait, ou proposez vos places disponibles en quelques clics."
    },
    {
      number: "02",
      icon: step2Icon,
      title: "Réservez en toute confiance",
      description: "Consultez les profils vérifiés, les avis des utilisateurs et réservez votre place en toute sécurité."
    },
    {
      number: "03",
      icon: step3Icon,
      title: "Voyagez et partagez",
      description: "Rencontrez votre covoitureur, profitez du trajet et laissez un avis pour aider la communauté."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold inline-block">
            Simple et rapide
          </span>
          <h2 className="text-4xl md:text-5xl font-bold">Comment ça marche ?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Rejoignez des milliers d'Ivoiriens qui voyagent malin avec AlloCar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-large transition-base border border-border h-full">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-medium">
                  <span className="text-2xl font-bold text-primary-foreground">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="mb-6 mt-4">
                  <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden shadow-soft group-hover:scale-110 transition-base">
                    <img src={step.icon} alt={step.title} className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Content */}
                <div className="text-center space-y-3">
                  <h3 className="text-2xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/3 -right-6 lg:-right-12 w-12 lg:w-24 h-0.5 bg-gradient-to-r from-primary to-secondary"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
