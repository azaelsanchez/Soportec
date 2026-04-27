import { Helmet } from 'react-helmet-async'
import { LegalPage } from '../components/layout/LegalPage'

export function Privacy() {
  return (
    <>
      <Helmet>
        <title>Política de Privacidad — Soportec</title>
        <meta name="description" content="Cómo tratamos y protegemos tus datos personales en Soportec." />
        <link rel="canonical" href="https://soportec.es/privacidad" />
      </Helmet>
      <LegalPage
        title="Política de Privacidad"
        description="Cómo tratamos y protegemos tus datos personales en Soportec."
        updatedAt="enero 2026"
      >
        <div dangerouslySetInnerHTML={{ __html: `<p>1. Responsable del tratamiento de los datos</p>

<ul>
<li>
<p>Responsable: SOPORTEC</p>
</li>
<li>
<p>NIF/CIF: 26751963L</p>
</li>
<li>
<p>Domicilio: Calle Dels Furs 20</p>
</li>
<li>
<p>Correo electrónico de contacto: <a href="mailto:miguel.soportec@outlook.com">miguel.soportec@outlook.com</a></p>
</li>
<li>
<p>Actividad: Servicio técnico informático a domicilio</p>
</li>
</ul>

<p>2. Finalidad del tratamiento
Los datos personales recabados a través del sitio web serán tratados con las siguientes finalidades:</p>

<ul>
<li>
<p>Gestionar solicitudes de información, presupuestos y citas.</p>
</li>
<li>
<p>Prestar los servicios contratados.</p>
</li>
<li>
<p>Realizar la facturación correspondiente.</p>
</li>
<li>
<p>Enviar comunicaciones relacionadas con el servicio (no publicitarias, salvo consentimiento expreso).</p>
</li>
<li>
<p>Cumplir con las obligaciones legales derivadas de nuestra actividad.</p>
</li>
</ul>

<p>3. Base legal para el tratamiento
Las bases legales que nos permiten tratar tus datos son:</p>

<ul>
<li>
<p>El consentimiento del usuario al contactar o contratar servicios.</p>
</li>
<li>
<p>La ejecución de un contrato o precontrato.</p>
</li>
<li>
<p>El cumplimiento de obligaciones legales (fiscales, contables, etc.).</p>
</li>
</ul>

<p>4. Plazo de conservación
Los datos se conservarán:</p>

<ul>
<li>
<p>Mientras exista una relación comercial o contractual.</p>
</li>
<li>
<p>Durante el tiempo necesario para cumplir con obligaciones legales.</p>
</li>
<li>
<p>O hasta que el usuario solicite su supresión, cuando proceda legalmente.</p>
</li>
</ul>

<p>5. Comunicación de datos a terceros
Tus datos no se cederán a terceros, salvo:</p>

<ul>
<li>
<p>A proveedores que prestan servicios auxiliares (hosting, gestoría, etc.), bajo contrato de confidencialidad.</p>
</li>
<li>
<p>A administraciones públicas cuando sea obligatorio por ley.</p>
</li>
</ul>

<p>6. Derechos del usuario
Puedes ejercer en cualquier momento los siguientes derechos:</p>

<ul>
<li>
<p>Acceso a tus datos personales.</p>
</li>
<li>
<p>Rectificación de datos inexactos o incompletos.</p>
</li>
<li>
<p>Supresión de tus datos cuando ya no sean necesarios.</p>
</li>
<li>
<p>Oposición al tratamiento, en determinados casos.</p>
</li>
<li>
<p>Limitación del tratamiento.</p>
</li>
<li>
<p>Portabilidad de los datos a otro responsable.</p>
</li>
</ul>

<p>Para ejercer estos derechos, envía un correo electrónico a <a href="mailto:miguel.soportec@outlook.com">miguel.soportec@outlook.com</a>, adjuntando una copia de tu DNI o documento identificativo.</p>

<p>También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (AEPD) si consideras que no hemos respetado tus derechos.</p>

<p>7. Medidas de seguridad
El responsable del tratamiento ha implementado las medidas técnicas y organizativas necesarias para garantizar la seguridad, integridad y confidencialidad de los datos personales, y evitar su pérdida, alteración o acceso no autorizado.</p>

<p>8. Cambios en la política de privacidad
Nos reservamos el derecho a modificar esta política para adaptarla a futuras novedades legislativas o cambios en la actividad.
La versión actualizada estará siempre disponible en esta web.</p>` }} />
      </LegalPage>
    </>
  )
}
