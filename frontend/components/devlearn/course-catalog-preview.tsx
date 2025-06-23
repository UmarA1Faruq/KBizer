/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code2, Globe2, DatabaseZap, Bot, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface CoursePreview {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  dataAiHint: string;
}

const courses: CoursePreview[] = [
  {
    id: "python",
    title: "Python Programming",
    description: "Master Python from basics to advanced concepts. Ideal for beginners and experienced developers.",
    icon: Code2,
    link: "/courses",
    dataAiHint: "python logo"
  },
  {
    id: "javascript",
    title: "JavaScript Essentials",
    description: "Learn the language of the web. Build interactive websites and applications.",
    icon: Code2, // Using Code2 as a generic, could be Braces or FileJson
    link: "/courses",
    dataAiHint: "javascript logo"
  },
  {
    id: "webdev",
    title: "Full-Stack Web Development",
    description: "Become a full-stack developer. Learn front-end and back-end technologies.",
    icon: Globe2,
    link: "/courses",
    dataAiHint: "web development"
  },
  {
    id: "ai-ml",
    title: "AI & Machine Learning",
    description: "Dive into the world of Artificial Intelligence and Machine Learning with practical projects.",
    icon: Bot,
    link: "/courses",
    dataAiHint: "artificial intelligence"
  },
];

export default function CourseCatalogPreview() {
  return (
    <section id="courses-preview" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Explore Our Learning Paths</h2>
          <p className="mt-3 text-lg text-foreground/70 max-w-xl mx-auto">
            Curated courses designed to take you from novice to expert in todays most in-demand technologies.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <Card key={course.id} className="flex flex-col hover:shadow-xl transition-shadow duration-300 ease-in-out transform hover:-translate-y-1">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <course.icon className="h-10 w-10 text-accent" />
                <CardTitle className="text-xl font-semibold text-primary">{course.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <CardDescription className="text-sm text-foreground/70 mb-4">{course.description}</CardDescription>
              </CardContent>
              <div className="p-6 pt-0 mt-auto">
                <Button asChild variant="outline" className="w-full border-accent text-accent hover:bg-accent/10">
                  <Link href={course.link}>
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
