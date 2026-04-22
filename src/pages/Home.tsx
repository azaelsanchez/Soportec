import { Helmet } from 'react-helmet-async'
import { Hero } from '../components/sections/Hero'
import { WhyUs } from '../components/sections/WhyUs'
import { ServicesSection } from '../components/sections/ServicesSection'
import { Stats } from '../components/sections/Stats'
import { Reviews } from '../components/sections/Reviews'
import { ClientLogos } from '../components/sections/ClientLogos'
import { BlogPreview } from '../components/sections/BlogPreview'

export function Home() {
  return (
    <>
      <Helmet>
        <title>Soportec — Técnico Informático en Valencia</title>
        <meta name="description" content="Servicio técnico informático en Valencia para particulares y empresas. Reparación de ordenadores, redes, mantenimiento y más. Más de 10 años de experiencia." />
      </Helmet>

      <Hero />
      <WhyUs />
      <Stats />
      <ServicesSection />
      <Reviews />
      <ClientLogos />
      <BlogPreview />
    </>
  )
}
