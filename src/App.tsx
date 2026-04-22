import { Routes, Route } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Layout } from './components/layout/Layout'
import { Home } from './pages/Home'
import { Blog } from './pages/Blog'
import { BlogPost } from './pages/BlogPost'
import { Services } from './pages/Services'
import { Portfolio } from './pages/Portfolio'
import { Contact } from './pages/Contact'

export default function App() {
  return (
    <AnimatePresence mode="wait">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/mis-trabajos" element={<Portfolio />} />
          <Route path="/contacto" element={<Contact />} />
        </Route>
      </Routes>
    </AnimatePresence>
  )
}
