import { useInView } from '@/hooks/use-in-view'
import { useAnimatedCounter } from '@/hooks/use-animated-counter'
import { cn } from '@/lib/utils'

import logoMonteiro from '@/assets/monteiro-66d9f.png'
import logoAlvorada from '@/assets/alvorada-d77d1.png'
import logoRaizes from '@/assets/raizes-8d132.png'

const logos = [
  logoMonteiro,
  logoAlvorada,
  logoRaizes,
  'https://img.usecurling.com/i?q=walmart&color=gray',
  'https://img.usecurling.com/i?q=target&color=gray',
  'https://img.usecurling.com/i?q=costco&color=gray',
  'https://img.usecurling.com/i?q=kroger&color=gray',
  'https://img.usecurling.com/i?q=aldi&color=gray',
  'https://img.usecurling.com/i?q=carrefour&color=gray',
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

          <div className="flex overflow-hidden relative w-full group mask-image-linear">
            {/* First set of logos */}
            <div className="flex animate-marquee group-hover:pause-animation items-center whitespace-nowrap">
              {logos.map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt="Client Logo"
                  className="h-10 md:h-14 w-auto object-contain mx-8 md:mx-16 opacity-40 hover:opacity-100 transition-opacity filter invert brightness-0"
                />
              ))}
            </div>
            {/* Duplicate set for seamless scrolling */}
            <div
              className="flex animate-marquee group-hover:pause-animation items-center whitespace-nowrap"
              aria-hidden="true"
            >
              {logos.map((logo, i) => (
                <img
                  key={`dup-${i}`}
                  src={logo}
                  alt="Client Logo"
                  className="h-10 md:h-14 w-auto object-contain mx-8 md:mx-16 opacity-40 hover:opacity-100 transition-opacity filter invert brightness-0"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
