import { GraduationCap, LogIn } from 'lucide-react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <GraduationCap className="h-7 w-7 text-primary" />
          <span className="text-2xl font-bold text-primary">DevLearn</span>
        </Link>
        <nav className="flex items-center space-x-6">
          <Link href="#courses-preview" className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary">
            Courses
          </Link>
          <Link href="#testimonials" className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary">
            Testimonials
          </Link>
          <Link href="#recommendations" className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary">
            Recommend
          </Link>
          <Link href="#about" className="text-sm font-medium text-foreground/70 transition-colors hover:text-primary">
            About
          </Link>
          <Button asChild size="sm">
            <Link href="/login">
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
