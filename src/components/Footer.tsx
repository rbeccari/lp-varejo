import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold tracking-tighter">
              R Beccari<span className="text-accent">.</span>
            </h3>
            <p className="text-primary-foreground/70 max-w-xs">
              Estratégia e criação especializada para o mercado supermercadista há 17 anos.
            </p>
            <div className="flex gap-4 pt-2">
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Links Rápidos</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>
                <a href="#sobre" className="hover:text-accent transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-accent transition-colors">
                  Nossas Especialidades
                </a>
              </li>
              <li>
                <a href="#resultados" className="hover:text-accent transition-colors">
                  Resultados
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-accent transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contato</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent" />
                <span>contato@rbeccari.com.br</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent" />
                <span>+55 (11) 99999-9999</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent shrink-0 mt-1" />
                <span>
                  Av. Paulista, 1000 - Bela Vista
                  <br />
                  São Paulo - SP
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/50">
          <p>© {currentYear} 17 anos R Beccari. Todos os direitos reservados.</p>
          <p>Feito para o Varejo.</p>
        </div>
      </div>
    </footer>
  )
}
