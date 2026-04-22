import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { cn } from '../../../utils/cn'

const particulares = [
  { icon: '🖥️', text: 'Reparación y mantenimiento de ordenadores' },
  { icon: '🛡️', text: 'Eliminación de virus y optimización del sistema' },
  { icon: '💾', text: 'Copias de seguridad y recuperación de datos' },
  { icon: '⚙️', text: 'Instalación y configuración de software y periféricos' },
  { icon: '📚', text: 'Clases de informática adaptadas a cualquier nivel' },
  { icon: '📱', text: 'Asistencia con móviles, tablets y redes Wi-Fi domésticas' },
]

const empresas = [
  { icon: '🔧', text: 'Mantenimiento informático preventivo y correctivo' },
  { icon: '🌐', text: 'Configuración de redes y servidores' },
  { icon: '🔒', text: 'Ciberseguridad y copias de seguridad automatizadas' },
  { icon: '📧', text: 'Correo profesional y herramientas colaborativas con Google Workspace' },
  { icon: '🖥️', text: 'Soporte remoto y asistencia presencial' },
]

function ServiceList({ items, color }: { items: typeof particulares; color: string }) {
  return (
    <ul className="space-y-4">
      {items.map(item => (
        <li key={item.text} className="flex items-start gap-3">
          <span className="text-2xl leading-none mt-0.5">{item.icon}</span>
          <span className={cn('text-gray-700 dark:text-gray-300', color)}>{item.text}</span>
        </li>
      ))}
    </ul>
  )
}

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Servicios
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
            Soluciones informáticas para particulares y empresas en Valencia.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Particulares */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white dark:bg-gray-950 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Particulares</h3>
            </div>
            <ServiceList items={particulares} color="" />
          </motion.div>

          {/* Empresas */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white dark:bg-gray-950 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-sm"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 dark:text-blue-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Empresas</h3>
            </div>
            <ServiceList items={empresas} color="" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
