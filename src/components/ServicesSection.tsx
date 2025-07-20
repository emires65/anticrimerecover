import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Key, ShieldAlert, Building, AlertTriangle, CreditCard, Search } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Key,
      title: "Lost Key Recovery",
      description: "Recover access to wallets with lost or forgotten private keys and passwords."
    },
    {
      icon: ShieldAlert,
      title: "Theft Recovery", 
      description: "Track and recover cryptocurrency stolen through hacks, phishing, or other malicious activities."
    },
    {
      icon: Building,
      title: "Exchange Issues",
      description: "Resolve issues with exchanges including frozen accounts and failed transactions."
    },
    {
      icon: AlertTriangle,
      title: "Scam Recovery",
      description: "Specialized techniques to recover funds lost to investment scams and fraudulent schemes."
    },
    {
      icon: CreditCard,
      title: "Banking Recovery", 
      description: "Recover traditional banking funds lost through wire fraud or unauthorized transfers."
    },
    {
      icon: Search,
      title: "Forensic Analysis",
      description: "Advanced blockchain forensics to trace and recover misplaced or stolen digital assets."
    }
  ];

  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-card-foreground">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive cryptocurrency and digital asset recovery solutions tailored to your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gradient-card border border-crypto-border shadow-card hover:shadow-glow transition-all duration-300 group">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4 p-4 bg-primary rounded-lg group-hover:animate-glow">
                  <service.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;