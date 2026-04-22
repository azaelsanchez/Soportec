import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const clients = [
  'El Corte Inglés',
  'Allianz',
  'HP',
  'Clínica CCS',
  'Lindt',
  'UPS Solidaris',
  'Andrea Osteofisio',
  'Clínica de Datos',
]

export function ClientLogos() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-14 bg-gray-50 dark:bg-gray-900 border-y border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-sm text-gray-500 dark:text-gray-500 uppercase tracking-widest mb-10 font-medium"
        >
          Empresas que confían en Soportec
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center items-center gap-6 md:gap-10"
        >
          {clients.map(name => (
            <div
              key={name}
              className="px-5 py-2.5 rounded-lg bg-white dark:bg-gray-950 border border-gray-200 dark:border-gray-800 text-gray-600 dark:text-gray-400 text-sm font-medium shadow-sm"
            >
              {name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
