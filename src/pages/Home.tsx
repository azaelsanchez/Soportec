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
  url: 'https://soportecvalencia.es',
  telephone: '+34653971313',
  email: 'miguel@soportec.eu',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Valencia',
    addressRegion: 'Comunitat Valenciana',
    addressCountry: 'ES',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 39.4699,
    longitude: -0.3763,
  },
  areaServed: [
    'Valencia',
    'Burjassot', 'Paterna', 'Manises', 'Mislata', 'Quart de Poblet', 'Aldaia', 'Alaquàs', 'Xirivella',
    'Moncada', 'Alboraia', 'Tavernes Blanques', 'Bonrepòs i Mirambell', 'Foios', 'Meliana', 'Godella',
    'Torrent', 'Paiporta', 'Picanya', 'Catarroja', 'Massanassa', 'Alfafar', 'Sedaví', 'Benetússer',
    'Sagunto', 'Puçol', 'El Puig de Santa Maria',
    'Alzira', 'Cullera', 'Sueca',
  ],
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
        <link rel="canonical" href="https://soportecvalencia.es/" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://soportecvalencia.es/" />
        <meta property="og:title" content="Soportec — Técnico Informático en Valencia" />
        <meta property="og:description" content="Servicio técnico informático en Valencia para particulares y empresas. Reparación de ordenadores, redes, mantenimiento y más." />
        <meta property="og:image" content="https://soportecvalencia.es/favicon.png" />
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
