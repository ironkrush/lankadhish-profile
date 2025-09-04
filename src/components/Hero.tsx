import heroImage from "@/assets/hero-taxi.jpg";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Phone, MessageCircle, MapPin } from "lucide-react";

const Hero = () => {
  const handleCall = () => {
    window.open('tel:9157575675', '_self');
  };

  const handleWhatsApp = () => {
    window.open('https://api.whatsapp.com/send?phone=9157575675&text=I%20need%20a%20cab%20booking', '_blank');
  };

  const handleLocation = () => {
    window.open('https://www.google.com/maps?q=kothariya%20solvant%20,%20Gondal%20road%20,%20Rajkot', '_blank');
  };

  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-accent/10">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 flex flex-col lg:flex-row items-center justify-between min-h-screen">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-6">
            <p className="text-primary font-medium">Trusted Since 2020</p>
          </div>
          
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Lankadhish
            </span>
            <br />
            <span className="text-foreground">Cab Service</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            Gujarat's most trusted and reliable taxi service. Experience safe, comfortable, 
            and timely travel with our professional drivers and well-maintained fleet.
          </p>

          {/* Quick Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-[var(--shadow-primary)] transform hover:scale-105 transition-all duration-300"
              onClick={handleCall}
            >
              <Phone className="mr-2 h-5 w-5" />
              Call Now
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              onClick={handleWhatsApp}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp Booking
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-primary/20 hover:shadow-[var(--shadow-primary)] transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </Card>
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-accent/20 hover:shadow-[var(--shadow-accent)] transition-all duration-300">
              <div className="text-3xl font-bold text-accent mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Available Service</div>
            </Card>
            <Card className="p-6 bg-white/80 backdrop-blur-sm border-primary/20 hover:shadow-[var(--shadow-primary)] transition-all duration-300">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Safe & Reliable</div>
            </Card>
          </div>
        </div>

        {/* Right Content - Contact Card */}
        <div className="w-full lg:w-auto lg:ml-12">
          <Card className="p-8 bg-white/90 backdrop-blur-sm border-primary/20 shadow-[var(--shadow-elegant)] max-w-md mx-auto">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-foreground mb-2">Quick Contact</h3>
              <p className="text-muted-foreground">Get in touch for instant booking</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors cursor-pointer" onClick={handleCall}>
                <Phone className="h-5 w-5 text-primary mr-3" />
                <div>
                  <div className="font-medium">Call Us</div>
                  <div className="text-sm text-muted-foreground">9157575675</div>
                </div>
              </div>

              <div className="flex items-center p-4 bg-accent/5 rounded-lg hover:bg-accent/10 transition-colors cursor-pointer" onClick={handleWhatsApp}>
                <MessageCircle className="h-5 w-5 text-accent mr-3" />
                <div>
                  <div className="font-medium">WhatsApp</div>
                  <div className="text-sm text-muted-foreground">Quick Booking</div>
                </div>
              </div>

              <div className="flex items-center p-4 bg-primary/5 rounded-lg hover:bg-primary/10 transition-colors cursor-pointer" onClick={handleLocation}>
                <MapPin className="h-5 w-5 text-primary mr-3" />
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-sm text-muted-foreground">Rajkot, Gujarat</div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
      <div className="absolute bottom-40 right-20 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse" />
    </section>
  );
};

export default Hero;