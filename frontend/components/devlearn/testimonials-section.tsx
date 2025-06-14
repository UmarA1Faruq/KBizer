/* eslint-disable @typescript-eslint/no-unused-vars */
interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  avatarUrl?: string;
  avatarFallback: string;
  dataAiHint: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    quote: "DevLearn transformed my understanding of Python. The interactive lessons and AI recommendations were game-changers!",
    name: "Alice Wonderland",
    role: "Software Engineer",
    avatarUrl: "https://placehold.co/100x100.png",
    avatarFallback: "AW",
    dataAiHint: "professional portrait"
  },
  {
    id: "2",
    quote: "I finally grasped complex JavaScript concepts thanks to DevLearn. The platform is intuitive and engaging.",
    name: "Bob The Builder",
    role: "Front-End Developer",
    avatarUrl: "https://placehold.co/100x100.png",
    avatarFallback: "BB",
    dataAiHint: "developer headshot"
  },
  {
    id: "3",
    quote: "The personalized learning paths helped me focus on what truly mattered for my career goals. Highly recommended!",
    name: "Charlie Brown",
    role: "Data Scientist",
    avatarUrl: "https://placehold.co/100x100.png",
    avatarFallback: "CB",
    dataAiHint: "student smiling"
  },
];


export default function TestimonialsSection() {
    return (
        <section id="testimonials" className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">What Our Learners Say</h2>
                    <p className="mt-3 text-lg text-foreground/70 max-w-xl mx-auto">
                        Real stories from developers who ve leveled up their skills with DevLearn.
                    </p>
                </div>

            </div>
        </section>
    );
}
