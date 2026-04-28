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
        <ServicesSection />
      </div>
    </>
  )
}
