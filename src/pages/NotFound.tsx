import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

export function NotFound() {
  return (
    <>
      <Helmet>
        <title>Página no encontrada — Soportec</title>
      </Helmet>
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-8xl font-black text-yellow-400 mb-4">404</p>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Página no encontrada
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-sm mx-auto">
            La página que buscas no existe o ha sido movida.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Volver al inicio
          </Link>
        </motion.div>
      </div>
    </>
  )
}
