import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Key, ShieldAlert, Building, AlertTriangle, CreditCard, Search } from "lucide-react";
import agentsArrest from "@/assets/agents-arrest-scammer.jpg";
import handcuffsEvidence from "@/assets/handcuffs-evidence.jpg";

const ServicesSection = () => {
  const services = [
    {
      icon: Key,
      title: "Identity Theft Recovery",
      description: "Recover accounts and funds compromised through identity theft and unauthorized access."
    },
    {
      icon: ShieldAlert,
      title: "Fraud Investigation", 
      description: "Investigate and recover assets stolen through various fraud schemes and scams."
    },
    {
      icon: Building,
      title: "Investment Scams",
      description: "Specialized recovery of funds lost to fake investment platforms and Ponzi schemes."
    },
    {
      icon: AlertTriangle,
      title: "Romance Scams",
      description: "Recover money lost to romance scams and online dating fraud schemes."
    },
    {
      icon: CreditCard,
      title: "Banking Fraud", 
      description: "Recover funds lost through wire fraud, unauthorized transfers, and banking scams."
    },
    {
      icon: Search,
      title: "Crypto Recovery",
      description: "Advanced blockchain forensics to trace and recover stolen or misplaced cryptocurrency."
    }
  ];

  return (
    <section id="services" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-card-foreground">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive crime investigation and asset recovery solutions for victims of fraud, scams, and financial crimes.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mt-12 mb-8">
            <div>
              <img 
                src={agentsArrest} 
                alt="Agents apprehend a cyber scammer in a late-night office raid"
                className="w-full h-64 object-cover rounded-lg shadow-card"
              />
            </div>
            <div>
              <img 
                src={handcuffsEvidence} 
                alt="A suspect's hands in handcuffs beside case evidence"
                className="w-full h-64 object-cover rounded-lg shadow-card"
              />
            </div>
          </div>
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