import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import EducationSection from "@/components/EducationSection"
import HowToBuySection from "@/components/HowToBuySection"
import CommunitySection from "@/components/CommunitySection"
import Footer from "@/components/Footer"

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <EducationSection />
        <HowToBuySection />
        <CommunitySection />
      </main>
      
      {/* Elfsight AI Chatbot */}
      <div className="elfsight-app-3983bae8-17c2-4cfb-8412-9cd648fda7ef" data-elfsight-app-lazy></div>
    </div>
  );
};

export default Index;
