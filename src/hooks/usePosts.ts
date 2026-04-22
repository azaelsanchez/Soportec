import { useQuery } from '@tanstack/react-query'
import { getPosts, getLatestPosts } from '../services/contentful'

export function usePosts(page = 1, limit = 9) {
  return useQuery({
    queryKey: ['posts', page, limit],
    queryFn: () => getPosts(page, limit),
  })
}

export function useLatestPosts(limit = 3) {
  return useQuery({
    queryKey: ['posts', 'latest', limit],
    queryFn: () => getLatestPosts(limit),
  })
}
