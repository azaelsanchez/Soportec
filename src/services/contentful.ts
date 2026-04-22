import { createClient, type ContentfulClientApi } from 'contentful'
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer'
import { readingTime } from '../utils/readingTime'
import type { Post } from '../types'

let _client: ContentfulClientApi<undefined> | null = null

function getClient() {
  if (!_client) {
    _client = createClient({
      space: import.meta.env.VITE_CONTENTFUL_SPACE_ID,
      accessToken: import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN,
    })
  }
  return _client
}

export async function getPosts(page = 1, limit = 9): Promise<{ posts: Post[]; total: number }> {
  const res = await getClient().getEntries({
    content_type: 'blogPost',
    order: ['-fields.date'],
    limit,
    skip: (page - 1) * limit,
  })

  const posts = res.items.map(mapPost)
  return { posts, total: res.total }
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const res = await getClient().getEntries({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
  })
  if (!res.items.length) return null
  return mapPost(res.items[0])
}

export async function getLatestPosts(limit = 3): Promise<Post[]> {
  const { posts } = await getPosts(1, limit)
  return posts
}

function mapPost(item: any): Post {
  const fields = item.fields
  const bodyText = fields.body ? documentToPlainTextString(fields.body) : ''
  return {
    id: item.sys.id,
    title: fields.title,
    slug: fields.slug,
    date: fields.date,
    category: fields.category ?? '',
    excerpt: fields.excerpt ?? '',
    coverImage: fields.coverImage?.fields?.file?.url
      ? `https:${fields.coverImage.fields.file.url}`
      : '',
    body: fields.body,
    readingTime: readingTime(bodyText),
  }
}
