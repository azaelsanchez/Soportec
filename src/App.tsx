import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Layout } from './components/layout/Layout'
import { ScrollToTop } from './components/layout/ScrollToTop'
import { Home } from './pages/Home'
import { Blog } from './pages/Blog'
import { BlogPost } from './pages/BlogPost'
import { Services } from './pages/Services'
import { Portfolio } from './pages/Portfolio'
import { Privacy } from './pages/Privacy'
import { Accessibility } from './pages/Accessibility'
import { Terms } from './pages/Terms'
import { Refund } from './pages/Refund'
import { NotFound } from './pages/NotFound'

export default function App() {
  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/mis-trabajos" element={<Portfolio />} />
            <Route path="/privacidad" element={<Privacy />} />
            <Route path="/accesibilidad" element={<Accessibility />} />
            <Route path="/terminos" element={<Terms />} />
            <Route path="/reembolso" element={<Refund />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  )
}
