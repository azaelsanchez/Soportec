import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

import img1 from '../assets/trabajos/1.png'
import img2 from '../assets/trabajos/2.png'
import img3 from '../assets/trabajos/3.png'
import img4 from '../assets/trabajos/4.png'
import img5 from '../assets/trabajos/5.png'
import img6 from '../assets/trabajos/6.png'

interface Trabajo {
  id: number
  img: string
  title: string
  tipo: string
  fecha: string
  ubicacion: string
  problema: string
  solucion: string
  resultado: string
}

const trabajos: Trabajo[] = [
  {
    id: 1,
    img: img1,
    title: 'Ordenador bloqueado pone en jaque a un negocio',
    tipo: 'Desbloqueo de equipo',
    fecha: 'Diciembre 2025',
    ubicacion: 'Picassent, Valencia',
    problema: 'A finales de mes, una de nuestras clientas habituales —dueña de un pequeño negocio local— se encontró con un problema crítico: su ordenador había quedado completamente bloqueado justo cuando necesitaba preparar las facturas del mes. Sin ese equipo funcionando, no podía cerrar la contabilidad, enviar los documentos a proveedores ni avanzar con su trabajo diario. La urgencia era máxima.',
    solucion: 'Nos contactó con urgencia y como siempre en Soportec, la velocidad de respuesta es parte de nuestro ADN. Tras una primera evaluación, confirmamos que el bloqueo se debía a fallos acumulados en el sistema: actualizaciones pendientes, archivos temporales corruptos y procesos internos que llevaban semanas sin ser atendidos. Conseguimos desbloquear el sistema, optimizar el rendimiento del equipo, actualizar todo el software crítico y dejar el ordenador listo para emitir facturas sin retrasos.',
    resultado: '"¡Un servicio de 10! Muy agradecida por la profesionalidad y la rapidez." La clienta pudo entregar sus facturas a tiempo y desde entonces cuenta con nuestro mantenimiento preventivo para no volver a pasar por una situación similar.',
  },
  {
    id: 2,
    img: img2,
    title: 'Recuperación de equipo sin señal de vídeo',
    tipo: 'Reparación de hardware',
    fecha: 'Noviembre 2025',
    ubicacion: 'Alfafar, Valencia',
    problema: 'El cliente nos contactó después de estar dos semanas fuera de viaje. Al volver, su ordenador no daba señal de vídeo. Intentó algunas soluciones básicas por su cuenta —limpiar la RAM, cambiar la pila de la placa base— pero el problema empeoró: el ordenador encendía y se apagaba solo sin llegar a iniciar correctamente.',
    solucion: 'El cliente necesitaba una solución urgente… y además era domingo. A pesar de no ser horario habitual, decidimos atenderlo igualmente. Al revisar el equipo detectamos acumulación importante de polvo y zonas de la tarjeta gráfica ligeramente sulfatadas. Realizamos limpieza completa interna, tratamiento de la tarjeta gráfica, revisión de zócalos y conectores, pruebas de estrés y verificación final del sistema.',
    resultado: '"Me atendieron un domingo cuando otros no podían. Se nota la experiencia ya que actuaron de forma rápida y efectiva." El equipo arrancó correctamente, volvió a dar señal de vídeo y el cliente pudo seguir trabajando sin necesidad de sustituir componentes.',
  },
  {
    id: 3,
    img: img3,
    title: 'Recuperación total de un ordenador',
    tipo: 'Recuperación de datos',
    fecha: 'Noviembre 2025',
    ubicacion: "L'Eliana, Valencia",
    problema: 'Recibimos la llamada de un empresario bastante preocupado. Es propietario de una clínica especializada en el cuidado de bebés, y su ordenador principal —donde gestionaba historiales, documentación interna y toda la organización del centro— había dejado de funcionar de un momento para otro. Estaba convencido de que había perdido toda la información crítica de su negocio.',
    solucion: 'Desde el primer momento nuestro objetivo fue transmitirle tranquilidad. Le explicamos cada paso del proceso y las posibles soluciones antes de empezar. El equipo presentaba fallos en el sistema y problemas en el disco. Tras realizar un análisis completo y aplicar nuestras herramientas de recuperación, conseguimos una de esas satisfacciones que hacen que este trabajo valga la pena.',
    resultado: 'Recuperamos el 100% de sus archivos, sin perder ni un solo documento. Cuando el cliente comprobó que toda la información de su clínica estaba intacta, el alivio fue evidente. Agradeció especialmente la rapidez, el trato cercano y la profesionalidad en un momento de tanta presión.',
  },
  {
    id: 4,
    img: img4,
    title: 'Optimización y mantenimiento de Mac',
    tipo: 'Optimización macOS',
    fecha: 'Marzo 2025',
    ubicacion: 'Benetússer, Valencia',
    problema: 'Elisabeth tenía un Mac con un rendimiento muy lento. Tardaba en iniciarse y en abrir las aplicaciones, lo que dificultaba su trabajo diario.',
    solucion: 'Realizamos una optimización completa: limpieza de procesos innecesarios, actualización del sistema operativo y de los programas instalados y ajustes de arranque. El equipo recuperó su velocidad y funcionamiento normal en la misma sesión.',
    resultado: '"Me he puesto en contacto porque mi ordenador me iba lento y la verdad que me ha sorprendido con la rapidez que ha atendido mi cita y, sobre todo, la solución de la misma. Un chico muy amable y resolutivo. Sin lugar a dudas volvería a contactar."',
  },
  {
    id: 5,
    img: img5,
    title: 'Instalación completa de ordenador de sobremesa',
    tipo: 'Configuración inicial de PC',
    fecha: 'Mayo 2025',
    ubicacion: 'Valencia',
    problema: 'Jorge Rojas necesitaba la instalación y puesta en marcha completa de un PC de sobremesa nuevo, con sistema operativo y el software necesario para trabajar desde el primer día.',
    solucion: 'Realizamos la instalación completa de Windows y configuración del sistema. Además, gestionamos la adquisición e instalación del paquete Office para que pudiera trabajar con la máxima comodidad. Dejamos el equipo listo para trabajar a máximo rendimiento y el cliente recibió asesoramiento sobre otros servicios disponibles.',
    resultado: '"Muy buen trabajo. Quedé muy contento. 😁👍 Me instaló un ordenador de sobremesa, instaló Windows y el paquete Office. Fue rápido. Me comentó que también ofrece otros servicios de instalación y está chévere. Lo recomiendo."',
  },
  {
    id: 6,
    img: img6,
    title: 'Recuperación de datos y cambio de disco duro',
    tipo: 'Cambio de disco duro',
    fecha: 'Noviembre 2025',
    ubicacion: 'Valencia',
    problema: 'Alex Marzo acudió con un PC gaming que no arrancaba correctamente. Se dedica a la fotografía y edición de vídeo, por lo que la información almacenada —especialmente las fotos— era muy importante. La prioridad era recuperar toda su información antes de cualquier otra intervención.',
    solucion: 'Tras un diagnóstico completo, detectamos un fallo en el disco duro y realizamos la recuperación total de los datos antes de sustituirlo. En el cambio aprovechamos para instalar un disco SSD de mayor capacidad, ya que los archivos que maneja son bastante pesados.',
    resultado: '"Muy contento con el trabajo que realizaron. Tenía un problema con el disco duro y tenía miedo de perder toda la información. Me lo repararon y no se perdió nada." El equipo volvió a funcionar con normalidad conservando toda la información y archivos.',
  },
]

function Modal({ trabajo, onClose }: { trabajo: Trabajo; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        className="bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <div className="relative">
          <img src={trabajo.img} alt={trabajo.title} className="w-full h-56 object-cover rounded-t-2xl" />
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="absolute top-3 right-3 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-wrap gap-3 mb-4 text-xs text-gray-500 dark:text-gray-400">
            <span className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 px-2.5 py-1 rounded-full font-medium">{trabajo.tipo}</span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              {trabajo.fecha}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              {trabajo.ubicacion}
            </span>
          </div>

          <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6">{trabajo.title}</h2>

          <div className="space-y-5">
            <div>
              <h3 className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white mb-2">
                <span className="w-6 h-6 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center text-red-500 text-xs">!</span>
                El problema
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{trabajo.problema}</p>
            </div>
            <div>
              <h3 className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white mb-2">
                <span className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-500 text-xs">→</span>
                La solución
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{trabajo.solucion}</p>
            </div>
            <div>
              <h3 className="flex items-center gap-2 font-semibold text-gray-900 dark:text-white mb-2">
                <span className="w-6 h-6 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center text-green-500 text-xs">✓</span>
                El resultado
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{trabajo.resultado}</p>
            </div>
          </div>

          <div className="mt-8 flex gap-3 justify-center">
            <a href="tel:+34628110705" className="btn-phone" style={{ animation: 'none', transform: 'none' }}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Llamar
            </a>
            <a
              href="https://wa.me/34628110705"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2.5 rounded-full text-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export function Portfolio() {
  const [selected, setSelected] = useState<Trabajo | null>(null)

  return (
    <>
      <Helmet>
        <title>Mis trabajos — Soportec | Técnico Informático en Valencia</title>
        <meta name="description" content="Casos reales de reparación, mantenimiento y recuperación de datos realizados por Soportec en Valencia. Resultados reales, clientes satisfechos." />
        <link rel="canonical" href="https://soportecvalencia.es/mis-trabajos" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://soportecvalencia.es/mis-trabajos" />
        <meta property="og:title" content="Mis trabajos — Soportec | Técnico Informático en Valencia" />
        <meta property="og:description" content="Casos reales de reparación, mantenimiento y recuperación de datos realizados por Soportec en Valencia." />
        <meta property="og:image" content="https://soportecvalencia.es/favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mis trabajos — Soportec" />
        <meta name="twitter:description" content="Casos reales de reparación, mantenimiento y recuperación de datos realizados por Soportec en Valencia." />
      </Helmet>

      <div className="min-h-screen bg-white dark:bg-gray-950 pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
              Trabajos de reparación informática en Valencia
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Casos reales de reparación informática, recuperación de datos y soporte técnico en Valencia. Me gusta que cada servicio deje a la gente tranquila, con su equipo funcionando como nuevo y sin complicaciones.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trabajos.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                onClick={() => setSelected(t)}
                className="group cursor-pointer bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={t.img}
                    alt={t.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-yellow-600 dark:text-yellow-400 uppercase tracking-wide">{t.tipo}</span>
                  <h2 className="text-base font-bold text-gray-900 dark:text-white mt-1 mb-3 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {t.title}
                  </h2>
                  <span className="text-sm text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1">
                    Ver caso completo
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {selected && <Modal trabajo={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </>
  )
}
