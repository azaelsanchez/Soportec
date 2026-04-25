import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { sendContactEmail } from '../../../services/emailjs'

type Status = 'idle' | 'loading' | 'success' | 'error'

function Toast({ status, onClose }: { status: 'success' | 'error'; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl shadow-lg text-sm font-medium whitespace-nowrap ${
        status === 'success'
          ? 'bg-green-50 dark:bg-green-900/40 text-green-800 dark:text-green-200 border border-green-200 dark:border-green-700'
          : 'bg-red-50 dark:bg-red-900/40 text-red-800 dark:text-red-200 border border-red-200 dark:border-red-700'
      }`}
    >
      {status === 'success' ? (
        <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ) : (
        <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )}
      <span>
        {status === 'success'
          ? 'Mensaje enviado. Te respondo pronto.'
          : 'Error al enviar. Inténtalo de nuevo o llámame.'}
      </span>
      <button onClick={onClose} aria-label="Cerrar" className="ml-2 opacity-60 hover:opacity-100 transition-opacity">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </motion.div>
  )
}

export function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [form, setForm] = useState({ name: '', surname: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [showToast, setShowToast] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('loading')
    try {
      await sendContactEmail({ name: `${form.name} ${form.surname}`.trim(), email: form.email, message: form.message })
      setStatus('success')
      setForm({ name: '', surname: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
    setShowToast(true)
    setTimeout(() => setShowToast(false), 5000)
  }

  return (
    <section id="contacto" ref={ref} className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-3">
            Hablemos
          </h2>
          <p className="text-gray-800 dark:text-gray-200 font-semibold text-lg mb-8 leading-snug">
            Soportec ofrece soporte informático en Valencia capital y alrededores.<br />
            Envíanos tu consulta y recibe asistencia rápida y cercana.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Row: Nombre | Apellido | Email */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label htmlFor="name" className="block text-sm italic text-gray-600 dark:text-gray-400 mb-1">
                  Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded border border-gray-300 dark:border-gray-700 bg-yellow-100 dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
                />
              </div>
              <div>
                <label htmlFor="surname" className="block text-sm italic text-gray-600 dark:text-gray-400 mb-1">
                  Apellido
                </label>
                <input
                  id="surname"
                  name="surname"
                  type="text"
                  value={form.surname}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded border border-gray-300 dark:border-gray-700 bg-yellow-100 dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm italic text-gray-600 dark:text-gray-400 mb-1">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-3 py-2.5 rounded border border-gray-300 dark:border-gray-700 bg-yellow-100 dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Mensaje */}
            <div>
              <label htmlFor="message" className="block text-sm italic text-gray-600 dark:text-gray-400 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full px-3 py-2.5 rounded border border-gray-300 dark:border-gray-700 bg-yellow-100 dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition resize-none"
              />
            </div>

            {/* Fila: email + botones izquierda, Enviar derecha */}
            <div className="flex items-center justify-between pt-1 gap-4">
              <div className="flex items-center gap-4">
                <a href="mailto:miguel@soportec.eu" className="flex items-center gap-2 text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-sm font-medium whitespace-nowrap">
                  <svg className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  miguel@soportec.eu
                </a>

                <a href="tel:+34653971313" className="btn-phone">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +34 653 971 313
                </a>

                <a href="https://wa.me/34653971313" target="_blank" rel="noopener noreferrer" className="btn-whatsapp inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-4 rounded-full text-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Chat on WhatsApp
                </a>
              </div>

              <button
                type="submit"
                disabled={status === 'loading'}
                className="bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-10 py-3 rounded transition-colors relative inline-flex items-center justify-center shrink-0"
              >
                <span className="inline-flex items-center gap-2 invisible">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /></svg>
                  Enviando...
                </span>
                <span className="absolute inline-flex items-center gap-2">
                  {status === 'loading' ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Enviando...
                    </>
                  ) : 'Enviar'}
                </span>
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      {showToast && (status === 'success' || status === 'error') && (
        <Toast status={status} onClose={() => setShowToast(false)} />
      )}
    </section>
  )
}
