import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

// This will be easily updatable from an admin panel later
const testimonials = [
  {
    id: 1,
    name: "Michael T.",
    location: "New York, USA",
    image: "/placeholder.svg", // Will use placeholder until admin system is built
    testimonial: "After losing 5 BTC to a sophisticated phishing attack, I thought my funds were gone forever. Encrypted Recovery tracked and recovered every coin within 3 weeks.",
    rating: 5
  },
  {
    id: 2,
    name: "Sarah L.",
    location: "London, UK", 
    image: "/placeholder.svg",
    testimonial: "My exchange account was frozen with over $100,000 in assets. After months of no response, Encrypted Recovery resolved the issue in just 10 days.",
    rating: 5
  },
  {
    id: 3,
    name: "David K.",
    location: "Toronto, Canada",
    image: "/placeholder.svg",
    testimonial: "I lost access to my hardware wallet containing my life savings in Ethereum. Encrypted Recovery restored access without compromising security.",
    rating: 5
  },
  {
    id: 4,
    name: "Jennifer R.",
    location: "Singapore",
    image: "/placeholder.svg",
    testimonial: "After falling victim to a DeFi rug pull, Encrypted Recovery traced the funds through multiple wallets and recovered 85% of my initial investment.",
    rating: 5
  },
  {
    id: 5,
    name: "Robert M.",
    location: "Sydney, Australia",
    image: "/placeholder.svg",
    testimonial: "I accidentally sent a large amount of USDT to the wrong address. Encrypted Recovery not only traced the funds but negotiated the return with the recipient.",
    rating: 5
  },
  {
    id: 6,
    name: "Thomas H.",
    location: "Berlin, Germany",
    image: "/placeholder.svg",
    testimonial: "Our company lost significant funds in a business email compromise. Encrypted Recovery worked with law enforcement to track and recover our assets.",
    rating: 5
  },
  {
    id: 7,
    name: "Emily J.",
    location: "Chicago, USA",
    image: "/placeholder.svg",
    testimonial: "After my father passed away, we couldn't access his crypto holdings. Encrypted Recovery helped us recover the family inheritance with sensitivity and professionalism.",
    rating: 5
  },
  {
    id: 8,
    name: "Carlos P.",
    location: "Madrid, Spain",
    image: "/placeholder.svg",
    testimonial: "I invested in what turned out to be a fraudulent ICO. Encrypted Recovery tracked down the operators and through legal pressure, recovered 70% of my investment.",
    rating: 5
  },
  {
    id: 9,
    name: "Sophia L.",
    location: "Dubai, UAE",
    image: "/placeholder.svg",
    testimonial: "My wallet was compromised in a SIM swap attack. Encrypted Recovery not only recovered my funds but helped improve my security to prevent future attacks.",
    rating: 5
  },
  {
    id: 10,
    name: "William T.",
    location: "Vancouver, Canada",
    image: "/placeholder.svg",
    testimonial: "I lost access to an old wallet from 2013 containing Bitcoin. Encrypted Recovery's specialized team recovered the private keys and helped me access what is now worth millions.",
    rating: 5
  }
];

const TestimonialsSection = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: rating }, (_, i) => (
      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-card-foreground">Client Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our cryptocurrency recovery services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-gradient-card border border-crypto-border shadow-card hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                
                <p className="text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonial.testimonial}"
                </p>
                
                <div className="flex items-center space-x-3">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-card-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;