import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const particulares = [
  { icon: '🖥️', text: 'Reparación y mantenimiento de ordenadores' },
  { icon: '🛡️', text: 'Eliminación de virus y optimización del sistema' },
  { icon: '💾', text: 'Copias de seguridad y recuperación de datos' },
  { icon: '💿', text: 'Cambio de disco HDD a SSD' },
  { icon: '🖨️', text: 'Instalación y configuración de ordenadores e impresoras' },
  { icon: '🚀', text: 'Puesta en marcha de equipos nuevos' },
  { icon: '⚙️', text: 'Actualización y mantenimiento de sistemas operativos' },
  { icon: '📚', text: 'Clases presenciales y online de informática' },
  { icon: '📱', text: 'Asistencia con móviles, tablets y redes Wi-Fi domésticas' },
]

const empresas = [
  { icon: '🔧', text: 'Mantenimiento informático preventivo y correctivo' },
  { icon: '🌐', text: 'Configuración de redes, servidores y domótica' },
  { icon: '🔒', text: 'Ciberseguridad y copias de seguridad automatizadas' },
  { icon: '📧', text: 'Correo profesional y herramientas colaborativas con Google Workspace' },
  { icon: '🖥️', text: 'Soporte remoto personalizado y asistencia presencial' },
  { icon: '🌍', text: 'Desarrollo web y posicionamiento SEO' },
]

function ServiceList({ items }: { items: typeof particulares }) {
  return (
    <ul className="space-y-4">
      {items.map(item => (
        <li key={item.text} className="flex items-start gap-3">
          <span className="text-2xl leading-none mt-0.5">{item.icon}</span>
          <span className="text-gray-700 dark:text-gray-300">{item.text}</span>
        </li>
      ))}
    </ul>
  )
}

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="servicios" ref={ref} className="pt-16 pb-8 md:pt-24 md:pb-10 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nuestros servicios
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-2">
            En SOPORTEC Valencia ofrecemos servicio premium de soporte técnico a domicilio y en remoto en Valencia y alrededores, mantenimiento especializado para empresas y autónomos y soluciones personalizadas.
          </p>
          <p className="text-yellow-600 dark:text-yellow-400 font-semibold">
            ¡Tu tecnología, siempre en las mejores manos!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <ServiceList items={particulares} />
          </motion.div>

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
            <ServiceList items={empresas} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-row gap-4 justify-center mt-10"
        >
          <a href="tel:+34628110705" aria-label="Llamar a Soportec" className="btn-phone px-3 sm:px-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span className="hidden sm:inline">+34 628 11 07 05</span>
          </a>
          <a
            href="https://wa.me/34628110705"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
            className="btn-whatsapp inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-3 sm:px-8 py-4 rounded-xl text-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
