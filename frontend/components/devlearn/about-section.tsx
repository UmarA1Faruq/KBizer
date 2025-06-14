// components/AboutSection.tsx
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
            </div>
        </section>
    );
}
