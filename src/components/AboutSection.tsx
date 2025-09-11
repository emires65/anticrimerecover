import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Users, DollarSign, CheckCircle } from "lucide-react";
import forensicsTeam from "@/assets/forensics-team-tracing.jpg";
import happyVictim from "@/assets/happy-victim-success.jpg";

const AboutSection = () => {
  const stats = [
    { icon: Trophy, value: "98%", label: "Success Rate" },
    { icon: Users, value: "5000+", label: "Cases Resolved" },
    { icon: DollarSign, value: "$200M+", label: "Million $ Recovered" },
  ];

  const features = [
    "Stolen through sophisticated scams",
    "Lost due to fraudulent schemes", 
    "Transferred through wire fraud",
    "Compromised through cybercrime",
    "Inaccessible due to fraud or theft"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Anti Crime Recovery</h2>
          <h3 className="text-xl md:text-2xl text-primary font-semibold mb-6">
            Professional Crime & Fraud Recovery Service
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="mb-6">
              <img 
                src={forensicsTeam} 
                alt="Investigators trace a scammer through a live network map"
                className="w-full h-64 object-cover rounded-lg shadow-card"
              />
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Anti Crime Recovery is the industry leader in recovering stolen funds from various types of financial crimes. 
              We've developed advanced investigative techniques and forensic methodologies to track, locate, and recover 
              assets that have been:
            </p>

            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With a team of law enforcement experts, financial investigators, and forensic specialists, 
              we've successfully recovered millions in stolen assets for our clients worldwide.
            </p>
            
            <div className="mt-6">
              <img 
                src={happyVictim} 
                alt="A victim praises the website after getting help"
                className="w-full h-64 object-cover rounded-lg shadow-card"
              />
            </div>
          </div>

          <div className="space-y-6">
            {stats.map((stat, index) => (
              <Card key={index} className="bg-gradient-card border border-crypto-border shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary rounded-lg">
                      <stat.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-primary">{stat.value}</div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;