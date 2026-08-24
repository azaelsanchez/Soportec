import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { usePosts } from '../hooks/usePosts'

const LIMIT = 9

function SkeletonCard() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden animate-pulse">
      <div className="h-48 bg-gray-200 dark:bg-gray-800" />
      <div className="p-5 space-y-3">
        <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-1/4" />
        <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded w-full" />
        <div className="h-5 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
        <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-2/3" />
        <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-1/3 mt-4" />
      </div>
    </div>
  )
}

export function Blog() {
  const [page, setPage] = useState(1)
  const { data, isLoading, isError } = usePosts(page, LIMIT)

  const totalPages = data ? Math.ceil(data.total / LIMIT) : 0

  return (
    <>
      <Helmet>
        <title>Blog — Soportec | Técnico Informático en Valencia</title>
        <meta name="description" content="Artículos y consejos de informática para particulares y empresas en Valencia. Aprende sobre mantenimiento, seguridad, reparación y más." />
        <link rel="canonical" href="https://soportecvalencia.es/blog" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://soportecvalencia.es/blog" />
        <meta property="og:title" content="Blog — Soportec | Técnico Informático en Valencia" />
        <meta property="og:description" content="Artículos y consejos de informática para particulares y empresas en Valencia." />
        <meta property="og:image" content="https://soportecvalencia.es/favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Blog — Soportec | Técnico Informático en Valencia" />
        <meta name="twitter:description" content="Artículos y consejos de informática para particulares y empresas en Valencia." />
      </Helmet>

      <div className="min-h-screen bg-gray-50 dark:bg-gray-950 pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
              Blog de informática en Valencia
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Consejos, guías y noticias de informática para particulares y empresas
            </p>
          </motion.div>

          {isError && (
            <div className="text-center py-16">
              <p className="text-gray-500 dark:text-gray-400">No se pudieron cargar los artículos. Inténtalo más tarde.</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {isLoading
              ? Array.from({ length: LIMIT }).map((_, i) => <SkeletonCard key={i} />)
              : data?.posts.map((post, i) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-lg transition-shadow group flex flex-col"
                  >
                    <Link to={`/blog/${post.slug}`} className="block h-48 overflow-hidden bg-gray-100 dark:bg-gray-800 flex-shrink-0">
                      {post.coverImage ? (
                        <img
                          src={post.coverImage}
                          alt={post.title}
                          loading="lazy"
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <svg className="w-12 h-12 text-gray-300 dark:text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                        </div>
                      )}
                    </Link>

                    <div className="p-5 flex flex-col flex-1">
                      {post.category && (
                        <span className="text-xs font-medium text-yellow-600 dark:text-yellow-400 uppercase tracking-wide mb-1">
                          {post.category}
                        </span>
                      )}
                      <h2 className="text-base font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      {post.excerpt && (
                        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-3 mb-4 flex-1">{post.excerpt}</p>
                      )}
                      <div className="flex items-center justify-between text-xs text-gray-400 dark:text-gray-500 mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                        <span>
                          {new Date(post.date).toLocaleDateString('es-ES', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric',
                          })}
                        </span>
                        <span>{post.readingTime} min lectura</span>
                      </div>
                    </div>
                  </motion.article>
                ))}
          </div>

          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 mt-12">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                ← Anterior
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(n => (
                <button
                  key={n}
                  onClick={() => setPage(n)}
                  className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
                    n === page
                      ? 'bg-yellow-400 text-gray-900'
                      : 'border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                >
                  {n}
                </button>
              ))}

              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-4 py-2 rounded-lg border border-gray-200 dark:border-gray-700 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                Siguiente →
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
