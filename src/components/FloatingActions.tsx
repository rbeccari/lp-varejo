import { useState, useEffect } from 'react'
import { ArrowUp, MessageCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-4 items-end">
      <button
        onClick={scrollToTop}
        className={cn(
          'p-3 bg-primary text-primary-foreground rounded-full shadow-lg transition-all duration-300 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
          showBackToTop
            ? 'translate-y-0 opacity-100'
            : 'translate-y-10 opacity-0 pointer-events-none',
        )}
        aria-label="Voltar ao topo"
      >
        <ArrowUp size={20} />
      </button>

      <a
        href="https://wa.me/5519981267959"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center p-4 bg-[#25D366] text-white rounded-full shadow-lg transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  )
}
