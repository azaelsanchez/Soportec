import { Helmet } from 'react-helmet-async'
import { LegalPage } from '../components/layout/LegalPage'

export function Refund() {
  return (
    <>
      <Helmet>
        <title>Política de Reembolso — Soportec</title>
        <meta name="description" content="Condiciones de devolución y reembolso de los servicios contratados." />
        <link rel="canonical" href="https://soportec.es/reembolso" />
      </Helmet>
      <LegalPage
        title="Política de Reembolso"
        description="Condiciones de devolución y reembolso de los servicios contratados."
        updatedAt="enero 2026"
      >
        <div dangerouslySetInnerHTML={{ __html: `<p>1. Derecho de desistimiento</p>

<p>Conforme a la normativa vigente de protección al consumidor, tienes derecho a desistir de la contratación del servicio en un plazo de 14 días naturales, siempre que el servicio no haya sido completamente ejecutado.</p>

<p>Una vez que el servicio técnico haya sido prestado total o parcialmente, no será posible el reembolso, salvo que exista un incumplimiento por parte del prestador del servicio.</p>

<p>2. Cancelaciones y cambios de cita</p>

<ul>
<li>
<p>Las cancelaciones deben solicitarse con al menos 24 horas de antelación a la cita programada.</p>
</li>
<li>
<p>Si cancelas con menos de 24 horas, o no estás presente en el domicilio en la hora acordada, se podrá cobrar un cargo mínimo por desplazamiento (si aplica), o no se realizará el reembolso.</p>
</li>
</ul>

<p>3. Reembolsos por insatisfacción del servicio
Si consideras que el servicio no ha sido realizado correctamente, puedes presentar una reclamación detallada en un plazo de 3 días naturales tras la visita. Analizaremos tu caso y, si procede, se podrá emitir un reembolso parcial o total, dependiendo de la naturaleza del fallo o incumplimiento.</p>

<p>4. Excepciones al derecho de desistimiento:​​</p>

<ul>
<li>
<p>Problemas técnicos que no puedan resolverse por limitaciones del equipo del cliente.</p>
</li>
<li>
<p>Reparaciones rechazadas o interrumpidas por decisión del cliente durante la visita.</p>
</li>
<li>
<p>Fallos posteriores causados por mal uso, virus, software descargado tras el servicio, o modificaciones ajenas a nuestro técnico.</p>
</li>
</ul>

<ul>
<li>
<p>No se aceptan reembolsos de contenido digital una vez comenzada la descarga o acceso, con previo consentimiento del consumidor.</p>
</li>
<li>
<p>Los planes de suscripción solo serán reembolsados 48h después de su contratación y sin haber sido utilizados.</p>
</li>
</ul>

<p>4. Procedimiento de reembolso
Para solicitar un reembolso, el cliente deberá:</p>

<ol>
<li>
<p>Enviar un correo a <a href="mailto:miguel.soportec@outlook.com">miguel.soportec@outlook.com</a> con el nombre completo, número de pedido, fecha del servicio y descripción del problema.</p>
</li>
<li>
<p>Una vez aprobado, se realizará el reembolso en el medio de pago más rápido y sencillo para SOPORTEC.</p>
</li>
</ol>

<p>5. Plazo de reembolso
En un plazo máximo de 14 días naturales desde que se apruebe el reembolso.</p>` }} />
      </LegalPage>
    </>
  )
}
