import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Gallery from "@/components/Gallery";
import FindUs from "@/components/FindUs";
import Footer from "@/components/Footer";
import WhatsAppBubble from "@/components/WhatsAppBubble";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Gallery />
        <FindUs />
      </main>
      <Footer />
      <WhatsAppBubble />
    </>
  );
}
