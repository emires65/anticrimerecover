import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, Phone, Shield, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    recoveryType: "",
    message: "",
    agreeToTerms: false
  });

  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreeToTerms) {
      toast({
        title: "Agreement Required",
        description: "Please agree to the confidentiality terms.",
        variant: "destructive"
      });
      return;
    }

    // Create email content
    const emailSubject = `Recovery Request: ${formData.recoveryType}`;
    const emailBody = `
New Recovery Request:

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Recovery Type: ${formData.recoveryType}

Message:
${formData.message}

Submitted at: ${new Date().toLocaleString()}
    `;

    // Create mailto link
    const mailtoLink = `mailto:Customerchatsupport@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    
    // Open email client
    window.location.href = mailtoLink;

    toast({
      title: "Recovery Request Prepared",
      description: "Your email client will open to send the request. Please send the email to complete your submission.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      recoveryType: "",
      message: "",
      agreeToTerms: false
    });
  };

  const recoveryTypes = [
    "Theft Recovery",
    "Lost Access/Keys", 
    "Scam Recovery",
    "Exchange Issues",
    "Banking Fraud",
    "Other"
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Recovery</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our team of recovery specialists is ready to evaluate your case and provide a confidential consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gradient-card border border-crypto-border shadow-card">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary rounded-lg">
                    <Mail className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">Email Support</div>
                    <div className="text-muted-foreground">Customerchatsupport@gmail.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-primary rounded-lg">
                    <Phone className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground">Phone Support</div>
                    <div className="text-muted-foreground">+1 218 208 2317</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="bg-gradient-card border border-crypto-border shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-primary rounded-lg w-fit mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2">Secure & Confidential Process</h3>
                  <p className="text-sm text-muted-foreground">All communications are encrypted and confidential</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-card border border-crypto-border shadow-card">
                <CardContent className="p-6 text-center">
                  <div className="p-3 bg-primary rounded-lg w-fit mx-auto mb-4">
                    <Clock className="h-8 w-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-semibold text-card-foreground mb-2">24/7 Emergency Response</h3>
                  <p className="text-sm text-muted-foreground">Round-the-clock support for urgent cases</p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="bg-gradient-card border border-crypto-border shadow-card">
            <CardHeader>
              <CardTitle className="text-xl text-card-foreground">Request Recovery Consultation</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-input border-crypto-border"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-input border-crypto-border"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-input border-crypto-border"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="recoveryType">Select Recovery Type</Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, recoveryType: value })}>
                    <SelectTrigger className="bg-input border-crypto-border">
                      <SelectValue placeholder="Choose recovery type" />
                    </SelectTrigger>
                    <SelectContent>
                      {recoveryTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Describe Your Situation</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Please provide details about your case..."
                    rows={4}
                    className="bg-input border-crypto-border"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="terms"
                    checked={formData.agreeToTerms}
                    onCheckedChange={(checked) => setFormData({ ...formData, agreeToTerms: checked as boolean })}
                  />
                  <Label htmlFor="terms" className="text-sm text-muted-foreground">
                    I understand that all information will be kept confidential
                  </Label>
                </div>

                <Button 
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="lg"
                >
                  Submit Recovery Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;