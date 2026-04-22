import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { useCounterAnimation } from '../../../hooks/useCounterAnimation'

const stats = [
  { value: 10, suffix: '+', label: 'Años de experiencia' },
  { value: 500, suffix: '+', label: 'Clientes satisfechos' },
  { value: 98, suffix: '%', label: 'Problemas resueltos' },
  { value: 24, suffix: 'h', label: 'Tiempo de respuesta' },
]

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCounterAnimation(value)
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-white mb-1">
        <span ref={ref as React.RefObject<HTMLSpanElement>}>{count}</span>{suffix}
      </div>
      <div className="text-blue-200 text-sm">{label}</div>
    </div>
  )
}

export function Stats() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-16 bg-blue-700 dark:bg-blue-800">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map(s => (
            <StatItem key={s.label} {...s} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
