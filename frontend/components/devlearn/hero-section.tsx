import React from "react";

export default function HeroSection() {
    return (
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('/circuit-board.svg')" }}>
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-primary"> Unlock Your <span className="text-accent">Coding Potential</span></h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-foreground/80"> DevLearn is your interactive gateway to mastering programming languages...</p>
            </div>
        </section>
    );
}