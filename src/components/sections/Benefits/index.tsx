import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const benefits = [
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

export function Benefits() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-16 md:py-20 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="flex flex-col items-center text-center gap-4"
            >
              <img src={b.img} alt={b.alt} className="w-20 h-20 object-contain" />
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">{b.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
