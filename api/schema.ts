import { z } from 'zod';

export const TopicSchema = z.object({
  id: z.string(),
  title: z.string(),
  objective: z.string(),
  tools: z.array(z.string()),
});

export type Topic = z.infer<typeof TopicSchema>;

export const ContentSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  theory: z.string(),
  image: z.string(),
  summary: z.string(),
});

export type Content = z.infer<typeof ContentSchema>;
