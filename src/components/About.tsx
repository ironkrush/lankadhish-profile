import { Card } from "@/components/ui/card";
import { Shield, Clock, Users, Car } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Professional drivers with verified licenses and clean background checks"
    },
    {
      icon: Clock,
      title: "24/7 Available", 
      description: "Round-the-clock service for all your transportation needs"
    },
    {
      icon: Users,
      title: "Expert Drivers",
      description: "Experienced local drivers who know the best routes in Gujarat"
    },
    {
      icon: Car,
      title: "Well-Maintained Fleet",
      description: "Clean, comfortable vehicles regularly serviced for your safety"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <p className="text-primary font-medium">About Our Service</p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Why Choose <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Lankadhish?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            लंकाधीश कैब सर्विस गुजरात की एक विश्वसनीय और सुविधाजनक टैक्सी सेवा है। 
            हमारा उद्देश्य यात्रियों को सुरक्षित, आरामदायक और समय पर यात्रा का अनुभव कराना है।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 text-center hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm border-primary/10"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6 text-foreground">
              Your Trusted Travel Partner in Gujarat
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Reliable Service</h4>
                  <p className="text-muted-foreground">Count on us for punctual pickups and safe arrivals, every single time.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-accent rounded-full mt-3 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Local Expertise</h4>
                  <p className="text-muted-foreground">Our drivers know Gujarat's roads like the back of their hand.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mt-3 mr-4 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Affordable Rates</h4>
                  <p className="text-muted-foreground">Competitive pricing without compromising on quality and comfort.</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <div className="text-center">
              <div className="text-5xl font-bold text-primary mb-2">5+ Years</div>
              <div className="text-muted-foreground mb-6">Of Trusted Service</div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent mb-1">500+</div>
                  <div className="text-sm text-muted-foreground">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Service Hours</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;