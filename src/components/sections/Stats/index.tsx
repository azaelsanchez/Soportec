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
  { src: cdedatos, alt: 'Clínica de Datos', large: true },
  { src: anydesk, alt: 'AnyDesk', large: false },
  { src: microsoft365, alt: 'Microsoft 365', large: false },
  { src: nordvpn, alt: 'NordVPN', large: false },
  { src: windows, alt: 'Windows', large: false },
  { src: apple, alt: 'Apple', large: false },
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
          {logos.map(logo => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className={`object-contain hover:scale-110 transition-transform duration-300 cursor-pointer ${logo.large ? 'h-16 md:h-20' : 'h-10 md:h-12'}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
