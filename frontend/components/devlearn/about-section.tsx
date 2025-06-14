// components/AboutSection.tsx
import { Gem, Lightbulb, Target } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function AboutSection() {
    return (
        <section id="about" className="py-16 md:py-24 bg-secondary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary">About DevLearn</h2>
                    <p className="mt-3 text-lg text-foreground/70 max-w-xl mx-auto">
                        Empowering the next generation of developers through innovative and accessible learning experiences.
                    </p>
                </div>
                {/* Gambar */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <Image
                            src="https://placehold.co/600x400.png"
                            alt="Team collaboration or learning environment"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-xl"
                            data-ai-hint="education technology team"
                        />
                    </div>
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 bg-accent text-accent-foreground p-3 rounded-full">
                                <Target className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-primary mb-1">Our Mission</h3>
                                <p className="text-foreground/80">
                                    To provide high-quality, engaging, and personalized programming education to learners worldwide, irrespective of their background or experience.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 bg-accent text-accent-foreground p-3 rounded-full">
                                <Lightbulb className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-primary mb-1">Our Vision</h3>
                                <p className="text-foreground/80">
                                    To be the leading platform for interactive coding education, fostering a global community of skilled and confident developers who can shape the future of technology.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 bg-accent text-accent-foreground p-3 rounded-full">
                                <Gem className="h-6 w-6" />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-primary mb-1">Our Values</h3>
                                <p className="text-foreground/80">
                                    Innovation, Accessibility, Community, and a Passion for Continuous Learning. We believe in empowering individuals through knowledge.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
