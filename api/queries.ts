import { useQuery } from '@tanstack/react-query';
import { fetcher } from './client';
import { Content, ContentSchema, Topic, TopicSchema } from './schema';

export function useTopics() {
  return useQuery<Topic[]>({
    queryKey: ['topics'],
    queryFn: async () => {
      const res = await fetcher<Topic[]>('/topics');
      return TopicSchema.array().parse(res);
    },
  });
}

export function useContent(id: string) {
  return useQuery<Content>({
    queryKey: ['content', id],
    queryFn: async () => {
      const res = await fetcher<Content>(`/content/${id}`);
      return ContentSchema.parse(res);
    },
    enabled: !!id,
  });
}
