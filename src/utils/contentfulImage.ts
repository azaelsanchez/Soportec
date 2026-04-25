export function contentfulImage(url: string, width?: number): string {
  if (!url) return ''
  const base = url.startsWith('//') ? `https:${url}` : url
  const params = new URLSearchParams({ fm: 'webp', q: '80' })
  if (width) params.set('w', String(width))
  return `${base}?${params.toString()}`
}
