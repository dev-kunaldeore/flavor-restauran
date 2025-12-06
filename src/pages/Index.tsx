import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyBestSection from "@/components/WhyBestSection";
import MenuSection from "@/components/MenuSection";
import StatsSection from "@/components/StatsSection";
import FranchiseSection from "@/components/FranchiseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import SupportSection from "@/components/SupportSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <WhyBestSection />
      <MenuSection />
      <StatsSection />
      <FranchiseSection />
      <TestimonialsSection />
      <SupportSection />
      <LocationSection />
      <Footer />
    </main>
  );
};

export default Index;
