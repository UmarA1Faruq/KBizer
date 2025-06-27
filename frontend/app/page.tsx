import Header from "@/components/devlearn/header";
import HeroSection from "@/components/devlearn/hero-section";
import CourseCatalogPreview from "@/components/devlearn/course-catalog-preview";
import TestimonialsSection from "@/components/devlearn/testimonials-section";
import PersonalizedRecommendationsSection from "@/components/devlearn/personalized-recommendations-section";
import AboutSection from "@/components/devlearn/about-section";
import Footer from "@/components/devlearn/footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <CourseCatalogPreview />
        <TestimonialsSection />
        <PersonalizedRecommendationsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
