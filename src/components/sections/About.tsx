import { useInView } from '@/hooks/use-in-view'
import { cn } from '@/lib/utils'
import { CheckCircle2 } from 'lucide-react'

export function About() {
  const { ref, isInView } = useInView({ threshold: 0.2 })

  const highlights = [
    'Profundo conhecimento do comportamento do shopper',
    'Estratégias validadas em mais de 100 lojas',
    'Foco implacável em conversão e margem',
    'Equipe multidisciplinar com DNA varejista',
  ]

  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div
            className={cn('opacity-0 order-2 lg:order-1', isInView && 'animate-fade-in-up')}
            style={{ animationDelay: '200ms' }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-accent rounded-2xl transform translate-x-4 translate-y-4 -z-10 opacity-20"></div>
              <img
                src="https://img.usecurling.com/p/800/800?q=teamwork&color=blue"
                alt="Equipe R Beccari trabalhando em estratégia"
                className="rounded-2xl shadow-xl w-full object-cover aspect-square"
              />
              <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-xl shadow-lg max-w-[200px] border border-border hidden md:block">
                <p className="text-4xl font-bold text-primary mb-1">
                  17<span className="text-accent">+</span>
                </p>
                <p className="text-sm text-muted-foreground font-medium">
                  Anos de experiência focada no varejo
                </p>
              </div>
            </div>
          </div>

          <div className={cn('opacity-0 order-1 lg:order-2', isInView && 'animate-fade-in-up')}>
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">
              Nossa História
            </h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
              A expertise que separa o seu supermercado da concorrência.
            </h3>
            <div className="space-y-4 text-foreground/80 text-lg mb-8">
              <p>
                Ao longo de quase duas décadas, a <strong>R Beccari</strong> tem sido a força
                criativa e estratégica por trás de centenas de campanhas de sucesso no setor
                supermercadista.
              </p>
              <p>
                Entendemos que o varejo não aceita amadorismo. Cada metro quadrado, cada
                precificação e cada comunicação visual importa. Nossa missão é traduzir os desafios
                complexos do dia a dia da loja em estratégias de marketing claras, atraentes e,
                acima de tudo, rentáveis.
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="text-accent shrink-0 mt-1" size={20} />
                  <span className="font-medium text-foreground/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
