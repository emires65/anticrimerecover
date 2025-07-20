import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Cpu, Users2, HandCoins } from "lucide-react";

const WhyChooseSection = () => {
  const reasons = [
    {
      icon: Star,
      title: "Industry Pioneers",
      description: "The first and most trusted name in cryptocurrency recovery with years of proven success."
    },
    {
      icon: Cpu,
      title: "Proprietary Technology", 
      description: "Exclusive recovery methods developed by our team of blockchain security experts."
    },
    {
      icon: Users2,
      title: "Expert Team",
      description: "Cryptographers, forensic specialists, and blockchain analysts with decades of combined experience."
    },
    {
      icon: HandCoins,
      title: "No Recovery, No Fee",
      description: "We only charge if we successfully recover your funds, guaranteeing our commitment to results."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Encrypted Recovery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We stand apart from the competition with our proven track record and innovative approach to cryptocurrency recovery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="bg-gradient-card border border-crypto-border shadow-card hover:shadow-glow transition-all duration-300 group text-center">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 p-4 bg-primary rounded-lg group-hover:animate-glow">
                  <reason.icon className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;