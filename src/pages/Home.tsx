import { Helmet } from 'react-helmet-async'
import { Hero } from '../components/sections/Hero'
import { WhyUs } from '../components/sections/WhyUs'
import { ServicesSection } from '../components/sections/ServicesSection'
import { Stats } from '../components/sections/Stats'
import { Reviews } from '../components/sections/Reviews'
import { ClientLogos } from '../components/sections/ClientLogos'
import { BlogPreview } from '../components/sections/BlogPreview'
import { ContactSection } from '../components/sections/ContactSection'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Soportec',
  description: 'Servicio técnico informático en Valencia para particulares y empresas. Reparación de ordenadores, redes, mantenimiento y más.',
  url: 'https://soportec.es',
  telephone: '+34653971313',
  email: 'miguel@soportec.eu',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Valencia',
    addressCountry: 'ES',
  },
  areaServed: 'Valencia',
  priceRange: '€€',
  sameAs: [
    'https://www.instagram.com/soportec.valencia',
    'https://www.facebook.com/profile.php?id=61582703607881',
  ],
}

export function Home() {
  return (
    <>
      <Helmet>
        <title>Soportec — Técnico Informático en Valencia</title>
        <meta name="description" content="Servicio técnico informático en Valencia para particulares y empresas. Reparación de ordenadores, redes, mantenimiento y más. Más de 10 años de experiencia." />
        <link rel="canonical" href="https://soportec.es/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://soportec.es/" />
        <meta property="og:title" content="Soportec — Técnico Informático en Valencia" />
        <meta property="og:description" content="Servicio técnico informático en Valencia para particulares y empresas. Reparación de ordenadores, redes, mantenimiento y más." />
        <meta property="og:image" content="https://soportec.es/favicon.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Soportec — Técnico Informático en Valencia" />
        <meta name="twitter:description" content="Servicio técnico informático en Valencia para particulares y empresas." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Hero />
      <WhyUs />
      <Stats />
      <ServicesSection />
      <Reviews />
      <ClientLogos />
      <BlogPreview />
      <ContactSection />
    </>
  )
}
