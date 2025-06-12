import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('/circuit-board.svg')" }}>
             <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-primary"> Unlock Your <span className="text-accent">Coding Potential</span></h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-foreground/80"> DevLearn is your interactive gateway to mastering programming languages...</p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 ...">
                <Link href="/courses">
                    Explore Courses
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="...">
                <Link href="#recommendations">Get Recommendations</Link>
            </Button>
            </div>
        <div>
            <Image
            src="https://placehold.co/1200x600.png"
            alt="DevLearn platform showcase"
            width={1200}
            height={600}
            className="rounded-lg shadow-2xl"
            data-ai-hint="programming interface"
            priority
          />
        </div>
        </div>
        </section>
    );
}