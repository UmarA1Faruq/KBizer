/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import type { PersonalizedRecommendationsInput, PersonalizedRecommendationsOutput } from '@/ai/flows/personalized-recommendations';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { Code, BookOpen, Loader2, AlertCircle, Sparkles } from "lucide-react";
import { useState, type ComponentProps } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  interests: z.string().min(10, { message: "Please describe your interests in at least 10 characters." }).max(500),
  goals: z.string().min(10, { message: "Please describe your goals in at least 10 characters." }).max(500),
});

type PersonalizedRecommendationsFormProps = {
  getRecommendations: (input: PersonalizedRecommendationsInput) => Promise<PersonalizedRecommendationsOutput>;
} & ComponentProps<"div">;


export default function PersonalizedRecommendationsForm({ getRecommendations, ...props }: PersonalizedRecommendationsFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recommendations, setRecommendations] = useState<PersonalizedRecommendationsOutput | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      interests: "",
      goals: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = async (data) => {
    setIsLoading(true);
    setError(null);
    setRecommendations(null);
    try {
      const result = await getRecommendations(data);
      setRecommendations(result);
    } catch (e) {
      setError("Failed to get recommendations. Please try again.");
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto" {...props}>
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-primary">
            <Sparkles className="h-6 w-6" />
            Find Your Perfect Learning Path
          </CardTitle>
          <CardDescription>
            Tell us about your interests and goals, and our AI will suggest the best languages and courses for you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="interests"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Interests</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., web development, data analysis, game design"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="goals"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Your Goals</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="e.g., build a personal portfolio, change careers, learn a new skill"
                        className="resize-none"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isLoading} className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Getting Recommendations...
                  </>
                ) : (
                  "Get Recommendations"
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      {error && (
        <Card className="mt-6 border-destructive bg-destructive/10">
          <CardContent className="p-4">
            <div className="flex items-center text-destructive">
              <AlertCircle className="mr-2 h-5 w-5" />
              <p className="font-medium">{error}</p>
            </div>
          </CardContent>
        </Card>
      )}

      {recommendations && (
        <div className="mt-8 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary"><Code className="h-6 w-6" />Recommended Languages</CardTitle>
            </CardHeader>
            <CardContent>
              {recommendations.languageRecommendations.length > 0 ? (
                <ul className="list-disc list-inside space-y-1 text-foreground/80">
                  {recommendations.languageRecommendations.map((lang, index) => (
                    <li key={index}>{lang}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground">No specific language recommendations based on your input. Try broadening your interests/goals!</p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-primary"><BookOpen className="h-6 w-6" />Recommended Courses</CardTitle>
            </CardHeader>
            <CardContent>
              {recommendations.courseRecommendations.length > 0 ? (
              <ul className="list-disc list-inside space-y-1 text-foreground/80">
                {recommendations.courseRecommendations.map((course, index) => (
                  <li key={index}>{course}</li>
                ))}
              </ul>
              ) : (
                 <p className="text-muted-foreground">No specific course recommendations based on your input. Explore our general catalog!</p>
              )}
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
}
