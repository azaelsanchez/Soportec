import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

import allianz from '../../../assets/clientes/Allianz-Logo_edited.png'
import cdedatos from '../../../assets/clientes/Cdedatos.png'
import fcstore from '../../../assets/clientes/FCStore.png'
import hp from '../../../assets/clientes/HP.png'
import ups from '../../../assets/clientes/UPS-4.png'
import andrea from '../../../assets/clientes/andrea_osteo.png'
import calesse from '../../../assets/clientes/calessebeach.png'
import clinicaccs from '../../../assets/clientes/clinicaccs.png'
import elcorteingles from '../../../assets/clientes/elcorteingles.png'
import lindt from '../../../assets/clientes/lindt-logo.png'

const logos = [
  { src: elcorteingles, alt: 'El Corte Inglés' },
  { src: allianz, alt: 'Allianz' },
  { src: hp, alt: 'HP' },
  { src: clinicaccs, alt: 'Clínica CCS' },
  { src: lindt, alt: 'Lindt' },
  { src: ups, alt: 'UPS' },
  { src: andrea, alt: 'Andrea Osteofisio' },
  { src: cdedatos, alt: 'Clínica de Datos' },
  { src: fcstore, alt: 'FC Store' },
  { src: calesse, alt: 'Calesse Beach' },
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
          className="text-center text-sm text-gray-500 uppercase tracking-widest mb-10 font-medium"
        >
          Empresas que confían en Soportec
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-5 gap-8 md:gap-12 items-center justify-items-center"
        >
          {logos.map(logo => (
            <img
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              className="h-20 md:h-24 w-full object-contain hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
