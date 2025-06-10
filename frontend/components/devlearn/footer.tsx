import { Github, Linkedin, Twitter, GraduationCap } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <GraduationCap className="h-8 w-8" />
              <span className="text-2xl font-bold">DevLearn</span>
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Empowering learners with the skills to succeed in the tech world.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/courses" className="hover:text-accent transition-colors">Courses</Link></li>
              <li><Link href="#about" className="hover:text-accent transition-colors">About Us</Link></li>
              <li><Link href="#recommendations" className="hover:text-accent transition-colors">AI Recommender</Link></li>
              <li><Link href="#" className="hover:text-accent transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Twitter" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="GitHub" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Github className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="LinkedIn" className="text-primary-foreground/80 hover:text-accent transition-colors">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} DevLearn. All rights reserved. Made with ❤️ by KBhizer.</p>
        </div>
      </div>
    </footer>
  );
}
