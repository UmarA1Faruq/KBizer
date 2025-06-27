import PersonalizedRecommendationsForm from './personalized-recommendations-form';
import { personalizedRecommendations } from '@/ai/flows/personalized-recommendations';

export default function PersonalizedRecommendationsSection() {
  return (
    <section id="recommendations" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Discover Your Personalized Path</h2>
          <p className="mt-3 text-lg text-foreground/70 max-w-xl mx-auto">
            Let our AI guide you to the programming languages and courses that best match your unique interests and career aspirations.
          </p>
        </div>
        <PersonalizedRecommendationsForm getRecommendations={personalizedRecommendations} />
      </div>
    </section>
  );
}
