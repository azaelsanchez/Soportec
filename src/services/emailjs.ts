import emailjs from '@emailjs/browser'

interface ContactForm {
  name: string
  email: string
  phone?: string
  message: string
}

export async function sendContactEmail(data: ContactForm): Promise<void> {
  await emailjs.send(
    import.meta.env.VITE_EMAILJS_SERVICE_ID,
    import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    {
      from_name: data.name,
      from_email: data.email,
      name: data.name,
      email: data.email,
      phone: data.phone ?? '',
      message: data.message,
    },
    import.meta.env.VITE_EMAILJS_PUBLIC_KEY
  )
}
