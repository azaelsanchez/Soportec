import { Outlet } from 'react-router-dom'
import { Header } from '../Header'
import { Footer } from '../Footer'
import { WhatsAppButton } from '../../ui/WhatsAppButton'

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  )
}
