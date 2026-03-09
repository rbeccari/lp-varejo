import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import logoBranco from '@/assets/logo-branco-rbeccari-da321.png'
import logoPreto from '@/assets/logo-preto-rbeccari-48b72.png'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Sobre', href: '#sobre' },
    { name: 'Especialidades', href: '#especialidades' },
    { name: 'Resultados', href: '#resultados' },
  ]

  const closeMobileMenu = () => setIsMobileMenuOpen(false)

  const isHeaderSolid = isScrolled || isMobileMenuOpen

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isHeaderSolid ? 'bg-background/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6',
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img
            src={isHeaderSolid ? logoPreto : logoBranco}
            alt="R Beccari Marketing"
            className="h-8 md:h-10 w-auto object-contain transition-all duration-300"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={cn(
                    'text-sm font-medium transition-colors hover:text-accent',
                    isHeaderSolid ? 'text-foreground/80' : 'text-white/90 hover:text-white',
                  )}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <Button
            asChild
            className="bg-accent text-accent-foreground hover:bg-accent/90 transition-transform hover:scale-105"
          >
            <a href="#contato">Falar com Especialista</a>
          </Button>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            'md:hidden p-2 transition-colors',
            isHeaderSolid ? 'text-foreground' : 'text-white',
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[72px] z-40 bg-background flex flex-col items-center justify-center animate-in fade-in slide-in-from-top-4 duration-300 md:hidden">
          <nav className="flex flex-col items-center gap-8 w-full px-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-2xl font-semibold text-foreground hover:text-accent transition-colors"
                onClick={closeMobileMenu}
              >
                {link.name}
              </a>
            ))}
            <Button
              asChild
              className="w-full max-w-sm mt-4 bg-accent text-accent-foreground text-lg h-12"
            >
              <a href="#contato" onClick={closeMobileMenu}>
                Falar com Especialista
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
