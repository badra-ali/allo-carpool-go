import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";

const Plans = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black text-center mb-4">
            Nos abonnements
          </h1>
          <p className="text-xl text-muted-foreground text-center mb-12">
            Choisissez le plan qui correspond à vos besoins de mobilité
          </p>

          <PricingSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Plans;
