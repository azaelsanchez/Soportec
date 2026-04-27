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
  { src: elcorteingles, alt: 'El Corte Inglés',         href: 'https://www.elcorteingles.es/' },
  { src: allianz,       alt: 'Allianz',                  href: 'https://www.allianz.es/' },
  { src: hp,            alt: 'HP',                       href: 'https://www.hp.com/es-es/shop/' },
  { src: clinicaccs,    alt: 'Clínica CCS',              href: 'https://clinicaccs.es/' },
  { src: lindt,         alt: 'Lindt',                    href: 'https://www.lindt.es/' },
  { src: ups,           alt: 'Unió de Pobles Solidaris', href: 'https://www.upsolidaris.org/' },
  { src: andrea,        alt: 'Andrea Osteofisio',        href: 'https://andreaosteofisio.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio' },
  { src: cdedatos,      alt: 'Clínica de Datos',         href: 'https://www.clinica-de-datos.es/' },
  { src: fcstore,       alt: 'FC Store',                 href: 'https://www.facebook.com/people/Effeci-Store/100054639375991/' },
  { src: calesse,       alt: 'Calesse Beach',            href: 'https://www.spiaggesestrilevante.it/' },
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
            <a
              key={logo.alt}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={logo.alt}
              className="flex items-center justify-center p-2 rounded-xl dark:bg-white dark:p-3 hover:scale-110 transition-transform duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="h-28 md:h-32 w-full object-contain"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
