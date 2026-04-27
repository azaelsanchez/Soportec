# Soportec — Web Corporativa

Web corporativa para **Soportec**, técnico informático a domicilio en Valencia. Proyecto real de cliente y pieza de portfolio del desarrollador.

**Web original:** [Wix → migrada a esta stack](https://titlesitio.wixsite.com/soportec)  
**Producción:** [soportec.es](https://soportec.es)

---

## Stack

| Capa | Tecnología |
|------|-----------|
| Build | Vite 8 + React 19 + TypeScript |
| Estilos | Tailwind CSS v3 (`darkMode: 'class'`) |
| Routing | React Router v7 |
| Data fetching | TanStack Query v5 |
| Animaciones | Framer Motion |
| CMS | Contentful (headless, solo blog) |
| Formulario | @emailjs/browser v4 |
| SEO | react-helmet-async + OG tags + JSON-LD |
| Deploy | Vercel |

---

## Funcionalidades

- Landing page completa con Hero, Servicios, Stats animadas, Reseñas y Blog preview
- **Blog** con ~90 artículos migrados desde Wix, rich text renderizado desde Contentful
- Barra de progreso de lectura en artículos
- **Modo oscuro** persistido en localStorage, sin flash en carga
- Skeleton loaders mientras cargan los posts
- Formulario de contacto con EmailJS y toast notifications
- SEO completo: canonical, Open Graph, Twitter Cards, JSON-LD (`LocalBusiness` + `BlogPosting`)
- Sitemap automático con `vite-plugin-sitemap`
- Páginas legales (Privacidad, Aviso Legal, Accesibilidad, Devoluciones)
- Página `/mis-trabajos` con 6 casos reales y modal de detalle
- 404 personalizada con `noindex`
- Botón flotante de WhatsApp

---

## Estructura

```
src/
  components/
    ui/               # Button, Card, Badge, Toast, Skeleton
    layout/           # Header, Footer, Layout, ScrollToTop, LegalPage
    sections/         # Hero, WhyUs, Stats, ServicesSection, Reviews, ClientLogos, BlogPreview, ContactSection, Benefits
    blog/
  hooks/              # useDarkMode, usePosts, usePost, useReadingProgress, useCounterAnimation
  pages/              # Home, Blog, BlogPost, Services, Portfolio, Contact, NotFound + páginas legales
  services/           # contentful.ts, emailjs.ts
  types/              # index.ts (tipos centralizados)
  utils/              # cn.ts, readingTime.ts, contentfulImage.ts
public/
  robots.txt
  sitemap.xml
  favicon.png
```

---

## Configuración

### 1. Requisitos

- Node.js ≥ 20
- npm ≥ 10
- Cuenta en [Contentful](https://www.contentful.com/) (free tier)
- Cuenta en [EmailJS](https://www.emailjs.com/) (free tier)

### 2. Instalar dependencias

```bash
npm install
```

### 3. Variables de entorno

Crea `.env.local` en la raíz del proyecto:

```env
VITE_CONTENTFUL_SPACE_ID=tu_space_id
VITE_CONTENTFUL_ACCESS_TOKEN=tu_delivery_token
VITE_EMAILJS_SERVICE_ID=tu_service_id
VITE_EMAILJS_TEMPLATE_ID=tu_template_id
VITE_EMAILJS_PUBLIC_KEY=tu_public_key
VITE_SITE_URL=https://soportec.es
```

El archivo `.env.example` documenta las claves disponibles (sin valores reales).

### 4. Contentful — Content type `blogPost`

Campos necesarios:

| Campo | Tipo |
|-------|------|
| `title` | Text (corto) |
| `slug` | Text (corto, único) |
| `date` | Date |
| `category` | Text (corto) |
| `excerpt` | Text (largo) |
| `coverImage` | Media |
| `body` | Rich Text |

### 5. Ejecutar en desarrollo

```bash
npm run dev
```

### 6. Build

```bash
npm run build
npm run preview   # previsualizar el build
```

---

## Deploy en Vercel

1. Subir el repo a GitHub
2. Importar en [vercel.com](https://vercel.com)
3. Añadir las variables de entorno en **Settings → Environment Variables** (Production, Preview y Development)
4. El build command es `npm run build` y el output directory es `dist`

---

## Notas

- `@emailjs/browser` v4 — no usar el paquete deprecado `emailjs-com`
- Las imágenes de Contentful se optimizan automáticamente con `?fm=webp&q=80&w=` via `contentfulImage.ts`
- Las reseñas de Google son estáticas (la Places API requiere facturación)
- Si se añade analytics, usar Plausible o Umami (sin banner de cookies)
