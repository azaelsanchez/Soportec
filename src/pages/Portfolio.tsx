import { Helmet } from 'react-helmet-async'

export function Portfolio() {
  return (
    <>
      <Helmet>
        <title>Mis trabajos — Soportec</title>
        <meta name="description" content="Trabajos realizados por Soportec en Valencia." />
      </Helmet>
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Mis trabajos — Próximamente</h1>
      </div>
    </>
  )
}
