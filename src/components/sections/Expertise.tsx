import { useInView } from '@/hooks/use-in-view'
import { cn } from '@/lib/utils'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Megaphone, LayoutPanelLeft, Tags, Lightbulb, TrendingUp, Users } from 'lucide-react'

const services = [
  {
    icon: Megaphone,
    title: 'Gestão de Campanhas',
    description:
      'Campanhas sazonais e promocionais de alto impacto que geram fluxo constante para a loja e aumentam o ticket médio.',
  },
  {
    icon: LayoutPanelLeft,
    title: 'Visual Merchandising',
    description:
      'Otimização do PDV com comunicação visual inteligente que guia o shopper, melhora a experiência e destaca produtos rentáveis.',
  },
  {
    icon: Tags,
    title: 'Estratégia Promocional',
    description:
      'Modelagem de ofertas e precificação estratégica para garantir competitividade sem sacrificar a margem de lucro.',
  },
  {
    icon: Lightbulb,
    title: 'Branding para o Varejo',
    description:
      'Construção e reposicionamento de marca, criando uma identidade forte que fideliza o cliente e transmite confiança.',
  },
  {
    icon: TrendingUp,
    title: 'Marketing Digital Varejista',
    description:
      'Gestão de redes sociais, tráfego pago geolocalizado e CRM focados em trazer o cliente do digital para a loja física.',
  },
  {
    icon: Users,
    title: 'Endomarketing',
    description:
      'Comunicação interna e engajamento da equipe de loja, pois o bom atendimento começa com colaboradores motivados e alinhados.',
  },
]

export function Expertise() {
  const { ref, isInView } = useInView({ threshold: 0.1 })

  return (
    <section id="especialidades" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4" ref={ref}>
        <div
          className={cn(
            'text-center max-w-3xl mx-auto mb-16 opacity-0',
            isInView && 'animate-fade-in-up',
          )}
        >
          <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">
            Especialidades
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Soluções 360º para o seu negócio
          </h3>
          <p className="text-lg text-foreground/70">
            Combinamos criatividade e análise de dados para entregar resultados reais. Da fachada da
            loja ao feed do Instagram, nós cuidamos de tudo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card
                key={index}
                className={cn(
                  'group border-transparent hover:border-accent/20 transition-all duration-300 hover:shadow-hover bg-card opacity-0 translate-y-8',
                  isInView && 'animate-fade-in-up',
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                    <Icon
                      className="text-primary group-hover:text-accent transition-colors"
                      size={24}
                    />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-foreground/70 group-hover:text-foreground/80 transition-colors">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
