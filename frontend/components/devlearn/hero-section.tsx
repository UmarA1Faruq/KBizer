/* eslint-disable @typescript-eslint/no-unused-vars */
// import React from "react";
// import { Button } from "../ui/button";
// import Link from "next/link";
// import { ArrowRight } from "lucide-react";
// import Image from "next/image";

// export default function HeroSection() {
//     return (
//         <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
//             <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "url('/circuit-board.svg')" }}>
//              <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//                 <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-primary text-black"> Unlock Your <span className="text-accent">Coding Potential</span></h1>
//                 <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-foreground/80 text-black"> DevLearn is your interactive gateway to mastering programming languages...</p>
//             <Button asChild size="lg" className="bg-accent hover:bg-accent/90 ...">
//                 <Link href="/courses">
//                     Explore Courses
//                     <ArrowRight className="ml-2 h-5 w-5" />
//                 </Link>
//             </Button>
//             <Button asChild size="lg" variant="outline" className="...">
//                 <Link href="#recommendations">Get Recommendations</Link>
//             </Button>
//             </div>
//         <div className="mt-16 max-w-4xl mx-auto">
//             <Image
//             src="https://th.bing.com/th/id/OIP.yIXE3lDruYOkXqoR-ToztgHaD5?w=340&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
//             alt="DevLearn platform showcase"
//             width={1200}
//             height={600}
//             className="rounded-lg shadow-2xl"
//             data-ai-hint="programming interface"
//             priority
//           />
//         </div>
//         </div>
//         </section>
//     );
// }

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight, LogIn } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section className="relative py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-background">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-5"
                style={{ backgroundImage: "url('/circuit-board.svg')" }}
            ></div>



            {/* Hero Content */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-black">
                    Unlock Your <span className="text-purple-600">Coding Potential</span>
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-gray-700">
                    DevLearn is your interactive gateway to mastering programming languages. Explore curated paths, get AI-powered recommendations, and join a community of learners.
                </p>
                <div className="mt-8 flex justify-center space-x-4">
                    <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-6">
                        <Link href="/courses">
                            Explore Courses
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                    </Button>
                    <Button asChild size="lg" variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50 px-6">
                        <Link href="#recommendations">Get Recommendations</Link>
                    </Button>
                </div>
            </div>

            {/* Image Section */}
            <div className="mt-16 max-w-4xl mx-auto relative z-10 px-4">
                <Image
                    src="https://th.bing.com/th/id/OIP.yIXE3lDruYOkXqoR-ToztgHaD5?w=340&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
                    alt="DevLearn platform showcase"
                    width={500}
                    height={100}
                    className="rounded-lg shadow-2xl mx-auto"
                    priority
                />
            </div>
        </section>
    );
}
