import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Mis trabajos — Soportec</title>
        <meta name="description" content="Trabajos y proyectos realizados por Soportec en Valencia." />
      </Helmet>
      <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Mis trabajos
          </h1>
          <p className="text-gray-500 dark:text-gray-400 mb-8 max-w-sm mx-auto">
            Próximamente compartiré aquí algunos de los proyectos realizados para clientes.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Volver al inicio
          </Link>
        </motion.div>
      </div>
    </>
  )
}
