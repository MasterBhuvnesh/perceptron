import { z } from 'zod';

export const TopicSchema = z.object({
  id: z.string(),
  title: z.string(),
  objective: z.string(),
  tools: z.array(z.string()),
  status: z.enum(['completed', 'inprocess']),
});

export type Topic = z.infer<typeof TopicSchema>;

export const ContentSchema = z.object({
  id: z.string(),
  title: z.string(),
  description: z.string(),
  theory: z.array(z.string()),
  image: z.string(),
  summary: z.string(),
  author: z.string(),
  date: z.string(),
});

export type Content = z.infer<typeof ContentSchema>;
