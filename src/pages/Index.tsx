import HeroSection from "@/components/HeroSection";
import QuizSection from "@/components/QuizSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowToUseSection from "@/components/HowToUseSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

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
    </main>
  );
};

export default Index;
