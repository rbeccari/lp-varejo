import { Button } from '@/components/ui/button'
import { useInView } from '@/hooks/use-in-view'
import { cn } from '@/lib/utils'

export function Hero() {
  const { ref, isInView } = useInView()

  return (
    <section className="relative min-h-[100svh] flex items-center pt-20 overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://img.usecurling.com/p/1920/1080?q=supermarket&color=blue"
          alt="Supermarket interior"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/50 to-background" />
      </div>

      <div
        ref={ref}
        className="container mx-auto px-4 relative z-10 flex flex-col items-center text-center max-w-4xl"
      >
        <div className={cn('opacity-0', isInView && 'animate-fade-in-up')}>
          <span className="inline-block py-1 px-3 rounded-full bg-accent/20 text-accent font-semibold text-sm mb-6 border border-accent/30">
            Autoridade em Varejo
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
            17 Anos Transformando o <span className="text-accent">Varejo.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
            Estratégia e criação especializada para o mercado supermercadista. Aceleramos vendas,
            construímos marcas e otimizamos a experiência no PDV.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              asChild
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base h-14 px-8 transition-transform hover:scale-105"
            >
              <a href="#contato">Conheça nossas soluções</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="bg-transparent border-white/30 text-white hover:bg-white/10 text-base h-14 px-8"
            >
              <a href="#sobre">Nossa Trajetória</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
