import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Camera } from "lucide-react";

const Gallery = () => {
  const handleWhatsAppInquiry = () => {
    const message = "Hi! I'd like to see more photos of your taxi fleet.";
    window.open(`https://api.whatsapp.com/send?phone=9157575675&text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <p className="text-primary font-medium">Our Fleet</p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Gallery
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a look at our well-maintained fleet of vehicles, ready to serve you 24/7.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Sample gallery images - in real implementation, these would be actual fleet photos */}
          {Array.from({ length: 6 }, (_, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-2 group">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative overflow-hidden">
                <Camera className="h-12 w-12 text-primary/60" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">
                  {index === 0 && "Sedan - City Rides"}
                  {index === 1 && "SUV - Family Travel"}
                  {index === 2 && "Hatchback - Quick Trips"}
                  {index === 3 && "MUV - Group Travel"}
                  {index === 4 && "Premium Sedan"}
                  {index === 5 && "Tempo Traveller"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {index === 0 && "Comfortable sedan for city transportation"}
                  {index === 1 && "Spacious SUV perfect for family trips"}
                  {index === 2 && "Economical option for short distances"}
                  {index === 3 && "Ideal for group outings and events"}
                  {index === 4 && "Premium comfort for special occasions"}
                  {index === 5 && "Large capacity for group travel"}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="p-8 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-primary/20 max-w-2xl mx-auto">
            <Camera className="h-12 w-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Want to See More?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contact us to see more photos of our fleet and get detailed information about each vehicle.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-[var(--shadow-primary)] transition-all duration-300"
              onClick={handleWhatsAppInquiry}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              View More Photos
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Gallery;