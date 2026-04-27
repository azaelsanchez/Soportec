import { Helmet } from 'react-helmet-async'
import { LegalPage } from '../components/layout/LegalPage'

export function Accessibility() {
  return (
    <>
      <Helmet>
        <title>Declaración de Accesibilidad — Soportec</title>
        <meta name="description" content="Compromiso de Soportec con la accesibilidad universal de su sitio web." />
        <link rel="canonical" href="https://soportec.es/accesibilidad" />
      </Helmet>
      <LegalPage
        title="Declaración de Accesibilidad"
        description="Compromiso de Soportec con la accesibilidad universal de su sitio web."
        updatedAt="enero 2026"
      >
        <div dangerouslySetInnerHTML={{ __html: `<p>SOPORTEC se compromete a hacer accesible su sitio web de conformidad con el Real Decreto 1112/2018, de 7 de septiembre, sobre accesibilidad de los sitios web y aplicaciones para dispositivos móviles del sector público. Aunque no es obligatorio para empresas privadas, consideramos esencial facilitar el acceso universal a nuestros servicios.</p>

<p>Situación de cumplimiento
Este sitio web es parcialmente conforme con el Real Decreto 1112/2018 debido a la falta de conformidad de algunos aspectos que se detallan a continuación.</p>

<p>Contenido no accesible
El contenido que se indica a continuación no es accesible por lo siguiente:</p>

<ul>
<li>
<p>Puede haber imágenes sin texto alternativo o con descripciones insuficientes.</p>
</li>
<li>
<p>Algunos elementos visuales podrían no tener suficiente contraste de color.</p>
</li>
<li>
<p>Puede que ciertos formularios o botones no estén etiquetados correctamente para lectores de pantalla.</p>
</li>
</ul>

<p>Preparación de la presente declaración de accesibilidad
Esta declaración fue preparada el 27 de abril de 2026, mediante una autoevaluación realizada por el propio titular del sitio web.</p>

<p>Observaciones y datos de contacto
Si encuentras barreras de acceso o quieres realizar alguna sugerencia para mejorar la accesibilidad de este sitio web, puedes ponerte en contacto con nosotros a través de:
📧 miguel.soportec@outlook.com
📞 +34 653.971.313</p>

<p>Procedimiento de aplicación
Si una vez realizada una solicitud de accesibilidad no estás satisfecho con la respuesta recibida, puedes dirigirte a la Agencia Española de Protección de Datos o al Defensor del Pueblo, según el tipo de reclamación.</p>` }} />
      </LegalPage>
    </>
  )
}
