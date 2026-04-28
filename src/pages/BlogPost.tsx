import { useParams, Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { BLOCKS, INLINES, MARKS } from '@contentful/rich-text-types'
import type { Options } from '@contentful/rich-text-react-renderer'
import { usePost } from '../hooks/usePost'
import { useReadingProgress } from '../hooks/useReadingProgress'

const richTextOptions: Options = {
  renderMark: {
    [MARKS.BOLD]: text => <strong className="font-bold">{text}</strong>,
    [MARKS.ITALIC]: text => <em className="italic">{text}</em>,
    [MARKS.CODE]: text => (
      <code className="bg-gray-100 dark:bg-gray-800 text-red-600 dark:text-red-400 px-1.5 py-0.5 rounded text-sm font-mono">
        {text}
      </code>
    ),
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (_, children) => (
      <p className="mb-5 leading-relaxed text-gray-700 dark:text-gray-300">{children}</p>
    ),
    [BLOCKS.HEADING_1]: (_, children) => (
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mt-10 mb-4">{children}</h1>
    ),
    [BLOCKS.HEADING_2]: (_, children) => (
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-3">{children}</h2>
    ),
    [BLOCKS.HEADING_3]: (_, children) => (
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-6 mb-3">{children}</h3>
    ),
    [BLOCKS.HEADING_4]: (_, children) => (
      <h4 className="text-lg font-bold text-gray-900 dark:text-white mt-5 mb-2">{children}</h4>
    ),
    [BLOCKS.UL_LIST]: (_, children) => (
      <ul className="list-disc pl-6 mb-5 space-y-2 text-gray-700 dark:text-gray-300">{children}</ul>
    ),
    [BLOCKS.OL_LIST]: (_, children) => (
      <ol className="list-decimal pl-6 mb-5 space-y-2 text-gray-700 dark:text-gray-300">{children}</ol>
    ),
    [BLOCKS.LIST_ITEM]: (_, children) => <li className="leading-relaxed pl-1">{children}</li>,
    [BLOCKS.QUOTE]: (_, children) => (
      <blockquote className="border-l-4 border-yellow-400 pl-4 my-6 italic text-gray-600 dark:text-gray-400">
        {children}
      </blockquote>
    ),
    [BLOCKS.HR]: () => <hr className="my-8 border-gray-200 dark:border-gray-700" />,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      const { file, title } = node.data?.target?.fields ?? {}
      const url = file?.url ? `https:${file.url}` : null
      if (!url) return null
      return (
        <figure className="my-8">
          <img src={url} alt={title ?? ''} className="rounded-xl w-full object-cover" />
          {title && (
            <figcaption className="text-center text-sm text-gray-500 dark:text-gray-400 mt-2">
              {title}
            </figcaption>
          )}
        </figure>
      )
    },
    [INLINES.HYPERLINK]: (node, children) => (
      <a
        href={node.data.uri}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 dark:text-blue-400 underline hover:no-underline"
      >
        {children}
      </a>
    ),
  },
}

function SkeletonPost() {
  return (
    <div className="animate-pulse max-w-3xl mx-auto">
      <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-1/4 mb-6" />
      <div className="h-10 bg-gray-200 dark:bg-gray-800 rounded w-full mb-3" />
      <div className="h-10 bg-gray-200 dark:bg-gray-800 rounded w-3/4 mb-6" />
      <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-1/3 mb-8" />
      <div className="h-72 bg-gray-200 dark:bg-gray-800 rounded-2xl mb-10" />
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="h-4 bg-gray-200 dark:bg-gray-800 rounded mb-3" style={{ width: `${85 + Math.random() * 15}%` }} />
      ))}
    </div>
  )
}

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>()
  const navigate = useNavigate()
  const { data: post, isLoading, isError } = usePost(slug ?? '')
  const progress = useReadingProgress()

  if (isError || (!isLoading && !post)) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-950 pt-24 pb-20 flex items-center justify-center">
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Artículo no encontrado</p>
          <button onClick={() => navigate('/blog')} className="text-blue-600 dark:text-blue-400 hover:underline">
            ← Volver al blog
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      {post && (
        <Helmet>
          <title>{post.title} — Soportec Blog</title>
          <meta name="description" content={post.excerpt || `Artículo: ${post.title}`} />
          <link rel="canonical" href={`https://soportecvalencia.es/blog/${post.slug}`} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={`https://soportecvalencia.es/blog/${post.slug}`} />
          <meta property="og:title" content={`${post.title} — Soportec Blog`} />
          <meta property="og:description" content={post.excerpt || `Artículo: ${post.title}`} />
          {post.coverImage && <meta property="og:image" content={post.coverImage} />}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={`${post.title} — Soportec Blog`} />
          <meta name="twitter:description" content={post.excerpt || `Artículo: ${post.title}`} />
          <script type="application/ld+json">{JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.excerpt,
            image: post.coverImage,
            datePublished: post.date,
            url: `https://soportecvalencia.es/blog/${post.slug}`,
            author: { '@type': 'Person', name: 'Miguel — Soportec' },
            publisher: {
              '@type': 'Organization',
              name: 'Soportec',
              url: 'https://soportecvalencia.es',
            },
          })}</script>
        </Helmet>
      )}

      <div
        className="fixed top-0 left-0 z-50 h-1 bg-yellow-400 transition-all duration-100"
        style={{ width: `${progress}%` }}
      />

      <div className="min-h-screen bg-white dark:bg-gray-950 pt-24 pb-20">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Volver al blog
            </Link>

            {isLoading ? (
              <SkeletonPost />
            ) : post ? (
              <>
                {post.category && (
                  <span className="text-xs font-medium text-yellow-600 dark:text-yellow-400 uppercase tracking-wide mb-3 block">
                    {post.category}
                  </span>
                )}

                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                  {post.title}
                </h1>

                <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-8">
                  <span>
                    {new Date(post.date).toLocaleDateString('es-ES', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric',
                    })}
                  </span>
                  <span>·</span>
                  <span>{post.readingTime} min de lectura</span>
                </div>

                {post.coverImage && (
                  <div className="rounded-2xl overflow-hidden mb-10 aspect-video bg-gray-100 dark:bg-gray-800">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      loading="eager"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                <article className="prose-custom">
                  {documentToReactComponents(post.body, richTextOptions)}
                </article>

                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    ← Ver todos los artículos
                  </Link>
                </div>
              </>
            ) : null}
          </motion.div>
        </div>
      </div>
    </>
  )
}
