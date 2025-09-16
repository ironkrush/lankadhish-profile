import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Building, Hash, User, MessageCircle } from "lucide-react";

const PaymentInfo = () => {
  const handleWhatsAppPayment = () => {
    const message = "Hi! I'd like to make a payment for my cab booking.";
    window.open(`https://api.whatsapp.com/send?phone=9157575675&text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
            <p className="text-accent font-medium">Payment Information</p>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Easy & <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Secure Payments</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Multiple payment options available for your convenience. Pay online or in cash.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Bank Details Card */}
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-primary/20 hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary-glow/20 flex items-center justify-center mr-4">
                <Building className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Bank Transfer</h3>
                <p className="text-muted-foreground">Direct bank transfer details</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center p-4 bg-primary/5 rounded-lg">
                <User className="h-5 w-5 text-primary mr-3" />
                <div>
                  <div className="text-sm text-muted-foreground">Account Holder</div>
                  <div className="font-semibold">Amar Shyamkumar Jankar</div>
                </div>
              </div>

              <div className="flex items-center p-4 bg-primary/5 rounded-lg">
                <CreditCard className="h-5 w-5 text-primary mr-3" />
                <div>
                  <div className="text-sm text-muted-foreground">Account Number</div>
                  <div className="font-semibold">34810919179</div>
                </div>
              </div>

              <div className="flex items-center p-4 bg-primary/5 rounded-lg">
                <Hash className="h-5 w-5 text-primary mr-3" />
                <div>
                  <div className="text-sm text-muted-foreground">IFSC Code</div>
                  <div className="font-semibold">SBIN0018925</div>
                </div>
              </div>

              <div className="flex items-center p-4 bg-primary/5 rounded-lg">
                <Building className="h-5 w-5 text-primary mr-3" />
                <div>
                  <div className="text-sm text-muted-foreground">Bank Name</div>
                  <div className="font-semibold">State Bank of India</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Payment Options Card */}
          <Card className="p-8 bg-white/80 backdrop-blur-sm border-accent/20 hover:shadow-[var(--shadow-elegant)] transition-all duration-300">
            <div className="flex items-center mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent/20 to-accent-glow/20 flex items-center justify-center mr-4">
                <CreditCard className="h-7 w-7 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground">Payment Methods</h3>
                <p className="text-muted-foreground">Choose your preferred option</p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                <h4 className="font-semibold text-foreground mb-2">💳 Digital Payments</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• UPI (PhonePe, Google Pay, Paytm)</li>
                  <li>• Bank Transfer (NEFT/RTGS)</li>
                  <li>• Online Banking</li>
                </ul>
              </div>

              <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                <h4 className="font-semibold text-foreground mb-2">💵 Cash Payment</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Pay directly to driver</li>
                  <li>• Exact change preferred</li>
                  <li>• Receipt provided</li>
                </ul>
              </div>
            </div>

            <Button 
              className="w-full bg-gradient-to-r from-accent to-accent-glow hover:shadow-[var(--shadow-accent)] transition-all duration-300"
              onClick={handleWhatsAppPayment}
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Confirm Payment via WhatsApp
            </Button>
          </Card>
        </div>

        {/* GST Information */}
{/*         <Card className="mt-12 p-6 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-primary/20 text-center max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-2 text-foreground">GST Registered Business</h3>
          <p className="text-muted-foreground mb-4">
            We are a GST registered business. GST invoice available on request.
          </p>
          <div className="text-sm text-muted-foreground">
            Contact us for GST invoice and business receipts
          </div>
        </Card> */}
      </div>
    </section>
  );
};

export default PaymentInfo;
