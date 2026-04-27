import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useCounterAnimation } from '../../../hooks/useCounterAnimation'

import cdedatos from '../../../assets/partners/Cdedatos.png'
import anydesk from '../../../assets/partners/anydesk.png'
import microsoft365 from '../../../assets/partners/microsoft365.png'
import nordvpn from '../../../assets/partners/nordvpn.png'
import windows from '../../../assets/partners/Windows.svg'
import apple from '../../../assets/partners/apple.avif'

const stats = [
  { value: 10, suffix: '+', label: 'Años de experiencia' },
  { value: 500, suffix: '+', label: 'Clientes satisfechos' },
  { value: 98, suffix: '%', label: 'Problemas resueltos' },
  { value: 24, suffix: 'h', label: 'Tiempo de respuesta' },
]

const logos = [
  { src: cdedatos,    alt: 'Clínica de Datos', large: true,  href: 'https://www.clinica-de-datos.es/' },
  { src: microsoft365, alt: 'Microsoft 365',   large: false, href: 'https://www.microsoft.com/es-es/microsoft-365/buy/compare-all-microsoft-365-products' },
  { src: nordvpn,     alt: 'NordVPN',          large: false, href: 'https://nordvpn.com/es/refer-a-friend/referred/' },
]

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCounterAnimation(value)
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-1">
        <span ref={ref as React.RefObject<HTMLSpanElement>}>{count}</span>{suffix}
      </div>
      <div className="text-gray-600 dark:text-gray-400 text-sm">{label}</div>
    </div>
  )
}

export function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-16 bg-white dark:bg-black">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-14"
        >
          {stats.map(s => (
            <StatItem key={s.label} {...s} />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {logos.map(logo => {
            const img = (
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className={`object-contain ${logo.large ? 'h-16 md:h-20' : 'h-10 md:h-12'}`}
              />
            )
            const wrapper = 'flex items-center justify-center rounded-xl dark:bg-white dark:p-2 hover:scale-110 transition-transform duration-300'
            return logo.href ? (
              <a key={logo.alt} href={logo.href} target="_blank" rel="noopener noreferrer" aria-label={logo.alt} className={wrapper}>
                {img}
              </a>
            ) : (
              <span key={logo.alt} className={wrapper}>{img}</span>
            )
          })}

          {/* AnyDesk con Windows y Apple debajo */}
          <div className="flex flex-col items-center gap-2">
            <div className="rounded-xl dark:bg-white dark:p-2">
              <img src={anydesk} alt="AnyDesk" className="h-10 md:h-12 object-contain" />
            </div>
            <div className="flex gap-3 items-center">
              <a href="https://anydesk.com/es/downloads/thank-you?dv=win_exe" target="_blank" rel="noopener noreferrer" aria-label="Descargar AnyDesk para Windows" className="rounded-lg dark:bg-white dark:p-1 hover:scale-110 transition-transform duration-300">
                <img src={windows} alt="Windows" className="h-5 md:h-6 object-contain" />
              </a>
              <a href="https://anydesk.com/en/downloads/thank-you?dv=mac_dmg" target="_blank" rel="noopener noreferrer" aria-label="Descargar AnyDesk para Mac" className="rounded-lg dark:bg-white dark:p-1 hover:scale-110 transition-transform duration-300">
                <img src={apple} alt="Apple" className="h-7 md:h-8 object-contain" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
