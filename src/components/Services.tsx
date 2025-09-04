import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, Clock, Users, Plane, Car } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Car,
      title: "Local City Rides",
      description: "Convenient transportation within Rajkot and nearby areas",
      features: ["Door-to-door service", "Real-time tracking", "Safe & comfortable"],
      color: "primary"
    },
    {
      icon: Plane,
      title: "Airport Transfers",
      description: "Reliable airport pickup and drop services",
      features: ["Flight monitoring", "Meet & greet", "Luggage assistance"],
      color: "accent"
    },
    {
      icon: MapPin,
      title: "Outstation Trips",
      description: "Long-distance travel across Gujarat and beyond",
      features: ["Experienced drivers", "Multiple stops", "Competitive rates"],
      color: "primary"
    },
    {
      icon: Clock,
      title: "24/7 Emergency",
      description: "Round-the-clock emergency transportation",
      features: ["Immediate response", "Medical emergencies", "Always available"],
      color: "accent"
    }
  ];

  const handleWhatsAppInquiry = (service: string) => {
    const message = `Hi! I'm interested in ${service}. Can you provide more details?`;
    window.open(`https://api.whatsapp.com/send?phone=9157575675&text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
            <p className="text-accent font-medium">Our Services</p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Transportation Solutions for <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Every Need</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From quick city rides to long-distance journeys, we've got you covered with professional service and competitive rates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="p-8 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2 bg-white/80 backdrop-blur-sm group"
            >
              <div className="flex items-start mb-6">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mr-4 ${
                  service.color === 'primary' 
                    ? 'bg-gradient-to-br from-primary/20 to-primary-glow/20' 
                    : 'bg-gradient-to-br from-accent/20 to-accent-glow/20'
                }`}>
                  <service.icon className={`h-7 w-7 ${
                    service.color === 'primary' ? 'text-primary' : 'text-accent'
                  }`} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              <div className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-3 ${
                      service.color === 'primary' ? 'bg-primary' : 'bg-accent'
                    }`} />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-[var(--shadow-primary)] transition-all duration-300"
                onClick={() => handleWhatsAppInquiry(service.title)}
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Book Now via WhatsApp
              </Button>
            </Card>
          ))}
        </div>

        {/* Special Offers Section */}
        <Card className="p-8 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 border-primary/20 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold mb-4 text-foreground">
              Special Rates for Regular Customers
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Join our loyalty program and enjoy discounted rates, priority booking, and exclusive offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-accent to-accent-glow hover:shadow-[var(--shadow-accent)] transition-all duration-300"
                onClick={() => handleWhatsAppInquiry("Loyalty Program")}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Learn More
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                onClick={() => window.open('tel:9157575675', '_self')}
              >
                Call for Details
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Services;