import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Construction, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Header from "@/components/devlearn/header";
import Footer from "@/components/devlearn/footer";

export default function CoursesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex items-center justify-center">
        <Card className="w-full max-w-md text-center shadow-xl">
          <CardHeader>
            <div className="mx-auto bg-accent/10 p-4 rounded-full w-fit">
              <Construction className="h-12 w-12 text-accent" />
            </div>
            <CardTitle className="text-3xl font-bold text-primary mt-4">Course Catalog</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-lg text-foreground/70 mb-6">
              Our full course catalog is currently under construction. Were working hard to bring you an extensive range of programming courses. Stay tuned!
            </CardDescription>
            <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Go Back Home
              </Link>
            </Button>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
