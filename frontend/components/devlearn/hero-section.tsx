import React from "react";

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('/circuit-board.svg')" }}>
        <h1></h1>
        <p></p>
      </div>
    </section>
  );
}