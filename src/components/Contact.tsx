import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, MessageCircle, Mail, MapPin, Clock, Star } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hi! I'm ${formData.name}. Contact: ${formData.phone}. Message: ${formData.message}`;
    window.open(`https://api.whatsapp.com/send?phone=9157575675&text=${encodeURIComponent(whatsappMessage)}`, '_blank');
    
    toast({
      title: "Message Sent!",
      description: "We'll get back to you as soon as possible.",
    });
    
    setFormData({ name: '', phone: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Phone,
      title: "Call Us",
      value: "9157575675",
      description: "Available 24/7 for bookings",
      action: () => window.open('tel:9157575675', '_self'),
      color: "primary"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: "Quick Booking",
      description: "Instant response guaranteed",
      action: () => window.open('https://api.whatsapp.com/send?phone=9157575675', '_blank'),
      color: "accent"
    },
    {
      icon: Mail,
      title: "Email",
      value: "lankadhishcabservice@gmail.com",
      description: "For detailed inquiries",
      action: () => window.open('mailto:lankadhishcabservice@gmail.com', '_blank'),
      color: "primary"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kothariya Solvant, Gondal Road",
      description: "Rajkot, Gujarat",
      action: () => window.open('https://www.google.com/maps?q=kothariya%20solvant%20,%20Gondal%20road%20,%20Rajkot', '_blank'),
      color: "accent"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-primary/10 rounded-full mb-4">
            <p className="text-primary font-medium">Get In Touch</p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Book Your Ride?</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact us through any of these convenient methods. We're here to make your journey comfortable and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Contact Information</h3>
            {contactMethods.map((method, index) => (
              <Card 
                key={index}
                className="p-6 hover:shadow-[var(--shadow-elegant)] transition-all duration-300 cursor-pointer bg-white/80 backdrop-blur-sm group"
                onClick={method.action}
              >
                <div className="flex items-center">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${
                    method.color === 'primary' 
                      ? 'bg-gradient-to-br from-primary/20 to-primary-glow/20' 
                      : 'bg-gradient-to-br from-accent/20 to-accent-glow/20'
                  }`}>
                    <method.icon className={`h-6 w-6 ${
                      method.color === 'primary' ? 'text-primary' : 'text-accent'
                    }`} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                      {method.title}
                    </h4>
                    <p className="text-sm font-medium text-foreground mb-1">{method.value}</p>
                    <p className="text-xs text-muted-foreground">{method.description}</p>
                  </div>
                </div>
              </Card>
            ))}

            {/* Business Hours */}
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-primary mr-3" />
                <h4 className="font-semibold text-foreground">Business Hours</h4>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Sunday:</span>
                  <span className="font-medium text-foreground">24 Hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Emergency Service:</span>
                  <span className="font-medium text-primary">Always Available</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 bg-white/90 backdrop-blur-sm border-primary/20 shadow-[var(--shadow-elegant)]">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Send us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Phone Number
                </label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us about your travel requirements..."
                  rows={4}
                  required
                  className="transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-gradient-to-r from-primary to-primary-glow hover:shadow-[var(--shadow-primary)] transition-all duration-300"
                size="lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Send via WhatsApp
              </Button>
            </form>
          </Card>
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-8">
          <h3 className="text-3xl font-bold mb-8 text-foreground">What Our Customers Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: "Rajesh Patel",
                text: "Excellent service! Always on time and very professional drivers.",
                rating: 5
              },
              {
                name: "Priya Shah",
                text: "Very reliable for airport transfers. Highly recommended!",
                rating: 5
              },
              {
                name: "Amit Kumar",
                text: "Best cab service in Rajkot. Clean cars and fair pricing.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="p-6 bg-white/80 backdrop-blur-sm">
                <div className="flex justify-center mb-3">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4">"{testimonial.text}"</p>
                <p className="font-semibold text-foreground">- {testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;