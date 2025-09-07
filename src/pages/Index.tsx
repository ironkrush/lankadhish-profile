import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import PaymentInfo from "@/components/PaymentInfo";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Services />
     
      <PaymentInfo />
      <Contact />
    </main>
  );
};

export default Index;
