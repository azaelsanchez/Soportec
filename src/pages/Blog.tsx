import { Helmet } from 'react-helmet-async'

export function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog — Soportec</title>
        <meta name="description" content="Artículos y consejos de informática para particulares y empresas." />
      </Helmet>
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold">Blog — WIP</h1>
      </div>
    </>
  )
}
