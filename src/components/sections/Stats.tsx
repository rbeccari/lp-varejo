import { useInView } from '@/hooks/use-in-view'
import { useAnimatedCounter } from '@/hooks/use-animated-counter'
import { cn } from '@/lib/utils'

import logoExamine from '@/assets/logo-negativo-retangulo-01-4156c.png'
import logoBarbosao from '@/assets/logo-044da.png'
import logoFauna from '@/assets/logo-fauna-aa403.png'

const logos = [
  { src: logoExamine, alt: 'Examine Supermercados' },
  { src: logoBarbosao, alt: 'Barbosão Supermercados' },
  { src: logoFauna, alt: 'Fauna Varejista' },
  { src: 'https://img.usecurling.com/i?q=market&color=multicolor', alt: 'Market Supermercados' },
  { src: 'https://img.usecurling.com/i?q=grocery&color=multicolor', alt: 'Grocery Store' },
  { src: 'https://img.usecurling.com/i?q=retail&color=multicolor', alt: 'Retail Express' },
]

function StatItem({
  label,
  value,
  suffix = '',
  isInView,
  delay,
}: {
  label: string
  value: number
  suffix?: string
  isInView: boolean
  delay: number
}) {
  const count = useAnimatedCounter(value, 2500, isInView)

  return (
    <div
      className={cn('text-center opacity-0', isInView && 'animate-fade-in-up')}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-5xl md:text-6xl font-extrabold text-accent mb-2">
        {count}
        {suffix}
      </div>
      <div className="text-lg font-medium text-white/90 uppercase tracking-wide">{label}</div>
    </div>
  )
}

export function Stats() {
  const { ref, isInView } = useInView({ threshold: 0.3 })

  return (
    <section id="resultados" className="py-24 bg-primary overflow-hidden relative">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      ></div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          <StatItem label="Anos de Mercado" value={17} suffix="+" isInView={isInView} delay={0} />
          <StatItem
            label="Supermercados Atendidos"
            value={100}
            suffix="+"
            isInView={isInView}
            delay={200}
          />
          <StatItem
            label="Campanhas Realizadas"
            value={5000}
            suffix="+"
            isInView={isInView}
            delay={400}
          />
        </div>

        <div
          className={cn(
            'pt-16 border-t border-white/10 opacity-0',
            isInView && 'animate-fade-in-up',
          )}
          style={{ animationDelay: '600ms' }}
        >
          <p className="text-center text-white/50 text-sm font-semibold uppercase tracking-widest mb-8">
            Marcas que confiam na nossa estratégia
          </p>

          <div className="bg-white/95 py-10 md:py-12 px-6 rounded-2xl shadow-xl border border-white/20 w-full">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
              {logos.map((logo, i) => (
                <img
                  key={i}
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 sm:h-16 md:h-20 w-auto max-w-[130px] sm:max-w-[160px] md:max-w-[200px] object-contain hover:scale-105 transition-transform duration-300 drop-shadow-sm"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
