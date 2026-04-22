import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const items = [
  {
    img: 'https://static.wixstatic.com/media/feb5e8_cf0545619ae142c7a4de09f7bac944cb~mv2.png/v1/fill/w_96,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/feb5e8_cf0545619ae142c7a4de09f7bac944cb~mv2.png',
    alt: 'personalizado servicio informatico valencia',
    title: 'Servicio personalizado',
  },
  {
    img: 'https://static.wixstatic.com/media/feb5e8_8f9725e2d2d442abba6d0aa2965e1b1b~mv2.png/v1/fill/w_96,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/feb5e8_8f9725e2d2d442abba6d0aa2965e1b1b~mv2.png',
    alt: 'calidad servicio informatico valencia',
    title: 'Servicio de calidad',
  },
  {
    img: 'https://static.wixstatic.com/media/feb5e8_76c8ccbc4713471194e69b2096d06c52~mv2.png/v1/fill/w_96,h_96,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/feb5e8_76c8ccbc4713471194e69b2096d06c52~mv2.png',
    alt: 'rápido servicio informatico valencia',
    title: 'Servicio rápido y cercano',
  },
]

export function WhyUs() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white text-center mb-12"
        >
          Por qué elegirnos
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Columna izquierda — ítems */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-8"
          >
            {items.map(item => (
              <div key={item.title} className="flex items-center gap-5">
                <img src={item.img} alt={item.alt} className="w-12 h-12 object-contain shrink-0" />
                <span className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</span>
              </div>
            ))}
          </motion.div>

          {/* Columna derecha — texto con highlights */}
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-700 dark:text-gray-300 text-base leading-relaxed"
          >
            Más de{' '}
            <mark className="bg-yellow-300 text-gray-900 px-0.5 rounded-sm font-semibold">10 años</mark>
            {' '}de experiencia ofreciendo servicios informáticos en Valencia y alrededores.{' '}
            <mark className="bg-yellow-300 text-gray-900 px-0.5 rounded-sm font-semibold">Servicio premium</mark>
            , personalizado y de calidad. Expertos en mantenimiento, soporte a domicilio y urgencias informáticas.
            {' '}¡Confía en los mejores para tus necesidades tecnológicas!
          </motion.p>
        </div>
      </div>
    </section>
  )
}
