import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const reviews = [
  {
    author: 'Enrique',
    text: 'Muy contento con su servicio remoto, la verdad que más de dos veces me ha salvado la vida, gracias a su efectividad y profesionalidad.',
  },
  {
    author: 'Alex Marzo',
    text: 'Muy contento con el trabajo que realizaron. Tenía un problema con el disco duro y tenía miedo de perder toda la información. Me lo repararon y no se perdió nada.',
  },
  {
    author: 'Clínica CCS',
    text: 'Tuve un problema importante con mi ordenador y pensaba que había perdido toda la información. Gracias a Soportec, pude recuperarlo todo sin perder ni un solo archivo. Trato excelente, rápido y muy profesional. Se nota que sabe lo que hace y transmite mucha tranquilidad en un momento de estrés. ¡Totalmente recomendable!',
  },
  {
    author: 'Ramón Iglesias Valiño',
    text: 'Eficacia y rapidez asegurada, servicio perfecto. Gracias',
  },
  {
    author: 'Maverick',
    text: 'Rapido y eficiente. Me ayudaron con todos los problemas que tenia con mi portatil, y con otro PC de escritorio.',
  },
  {
    author: 'Tatiana Tamasi',
    text: 'Tenía el ordenador bloqueado y necesitaba solucionarlo con urgencia para poder hacer las facturas de este mes. Miguel atendió rápido, fueron muy eficientes y en poco tiempo dejaron todo funcionando perfectamente. ¡Un servicio de 10! Muy agradecida por la profesionalidad y la rapidez.',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5 text-yellow-400 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  )
}

export function Reviews() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-16 md:py-24 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-gray-600 dark:text-gray-400">Reseñas reales de Google</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.author}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-100 dark:border-gray-800"
            >
              <Stars />
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">"{r.text}"</p>
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold">
                  {r.author[0]}
                </div>
                <span className="font-semibold text-gray-900 dark:text-white text-sm">{r.author}</span>
                <svg className="w-4 h-4 text-blue-500 ml-auto" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
