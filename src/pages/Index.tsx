import HeroSection from "@/components/HeroSection";
import QuizSection from "@/components/QuizSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowToUseSection from "@/components/HowToUseSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <QuizSection />
      <BenefitsSection />
      <HowToUseSection />
      <CTASection />
      <FAQSection />
      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Index;
