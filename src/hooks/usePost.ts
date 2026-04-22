import { useQuery } from '@tanstack/react-query'
import { getPostBySlug } from '../services/contentful'

export function usePost(slug: string) {
  return useQuery({
    queryKey: ['post', slug],
    queryFn: () => getPostBySlug(slug),
    enabled: !!slug,
  })
}
