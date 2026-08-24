import { Helmet } from 'react-helmet-async'
import { ServicesSection } from '../components/sections/ServicesSection'

export function Services() {
  return (
    <>
      <Helmet>
        <title>Servicios — Soportec | Técnico Informático en Valencia</title>
        <meta name="description" content="Servicios de soporte técnico informático en Valencia para particulares y empresas. Reparación, redes, ciberseguridad, mantenimiento y más." />
        <link rel="canonical" href="https://soportecvalencia.es/servicios" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://soportecvalencia.es/servicios" />
        <meta property="og:title" content="Servicios — Soportec | Técnico Informático en Valencia" />
        <meta property="og:description" content="Servicios de soporte técnico informático en Valencia para particulares y empresas. Reparación, redes, ciberseguridad, mantenimiento y más." />
      </Helmet>
      <div className="pt-8">
        <div className="max-w-6xl mx-auto px-4 pt-16 md:pt-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Servicios informáticos en Valencia
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Soporte técnico a domicilio y en remoto para particulares y empresas en Valencia y alrededores
          </p>
        </div>
        <ServicesSection />
      </div>
    </>
  )
}
