import { Button } from "@/components/ui/button";
import { Bitcoin, Shield, Lock, Unlock } from "lucide-react";
import heroBannerAbstract from "@/assets/hero-banner-abstract.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20">
        <img 
          src={heroBannerAbstract} 
          alt="Abstract protection motif with shield, lock, and network"
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-glow">
          <Bitcoin className="h-16 w-16 text-primary" />
        </div>
        <div className="absolute top-40 right-20 animate-glow delay-1000">
          <Shield className="h-20 w-20 text-primary" />
        </div>
        <div className="absolute bottom-40 left-20 animate-glow delay-2000">
          <Lock className="h-12 w-12 text-primary" />
        </div>
        <div className="absolute bottom-20 right-10 animate-glow delay-3000">
          <Unlock className="h-14 w-14 text-primary" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Recover Your{" "}
              <span className="text-primary">Stolen Assets</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-primary font-semibold">
              Professional Scam & Fraud Recovery Service
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl">
              We specialize in recovering stolen funds from scams, fraud, and cybercrime with our expert investigation team and proven recovery methods.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                onClick={() => scrollToSection('contact')}
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg"
              >
                RECOVER MY FUNDS
              </Button>
              <Button 
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('about')}
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg"
              >
                LEARN MORE
              </Button>
            </div>
          </div>

          {/* Visual Elements */}
          <div className="relative hidden lg:block">
            <div className="relative w-full h-96 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-primary rounded-full opacity-20 animate-glow"></div>
              <div className="grid grid-cols-2 gap-8 z-10">
                <div className="p-6 bg-card rounded-xl border border-crypto-border shadow-card">
                  <Bitcoin className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-semibold text-card-foreground">Crypto Recovery</h3>
                </div>
                <div className="p-6 bg-card rounded-xl border border-crypto-border shadow-card">
                  <Shield className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-semibold text-card-foreground">Fraud Investigation</h3>
                </div>
                <div className="p-6 bg-card rounded-xl border border-crypto-border shadow-card">
                  <Lock className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-semibold text-card-foreground">Scam Recovery</h3>
                </div>
                <div className="p-6 bg-card rounded-xl border border-crypto-border shadow-card">
                  <Unlock className="h-12 w-12 text-primary mb-4" />
                  <h3 className="font-semibold text-card-foreground">Asset Recovery</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;