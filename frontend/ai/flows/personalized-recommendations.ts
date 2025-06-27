// This file is machine-generated - do not edit!

'use server';

/**
 * @fileOverview Recommends programming languages and courses tailored to the user's interests and goals.
 *
 * - personalizedRecommendations - A function that returns personalized learning resources.
 * - PersonalizedRecommendationsInput - The input type for the personalizedRecommendations function.
 * - PersonalizedRecommendationsOutput - The return type for the personalizedRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedRecommendationsInputSchema = z.object({
  interests: z
    .string()
    .describe('The users interests in programming, as a string.'),
  goals: z.string().describe('The users goals in programming, as a string.'),
});

export type PersonalizedRecommendationsInput = z.infer<
  typeof PersonalizedRecommendationsInputSchema
>;

const PersonalizedRecommendationsOutputSchema = z.object({
  languageRecommendations: z
    .array(z.string())
    .describe('A list of recommended programming languages.'),
  courseRecommendations: z
    .array(z.string())
    .describe('A list of recommended courses.'),
});

export type PersonalizedRecommendationsOutput = z.infer<
  typeof PersonalizedRecommendationsOutputSchema
>;

export async function personalizedRecommendations(
  input: PersonalizedRecommendationsInput
): Promise<PersonalizedRecommendationsOutput> {
  return personalizedRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedRecommendationsPrompt',
  input: {schema: PersonalizedRecommendationsInputSchema},
  output: {schema: PersonalizedRecommendationsOutputSchema},
  prompt: `Based on the user's stated interests and goals, recommend programming languages and courses that would be a good fit for them.

Interests: {{{interests}}}
Goals: {{{goals}}}

Return the recommendations as a JSON object.`,
});

const personalizedRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedRecommendationsFlow',
    inputSchema: PersonalizedRecommendationsInputSchema,
    outputSchema: PersonalizedRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
