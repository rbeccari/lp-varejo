import { useInView } from '@/hooks/use-in-view'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { useToast } from '@/hooks/use-toast'
import { Send } from 'lucide-react'

const formSchema = z.object({
  name: z.string().min(2, { message: 'Nome deve ter pelo menos 2 caracteres.' }),
  company: z.string().min(2, { message: 'Nome da empresa é obrigatório.' }),
  email: z.string().email({ message: 'E-mail inválido.' }),
  whatsapp: z.string().min(10, { message: 'WhatsApp inválido.' }),
  message: z.string().min(10, { message: 'A mensagem deve ter pelo menos 10 caracteres.' }),
})

export function Contact() {
  const { ref, isInView } = useInView({ threshold: 0.2 })
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      company: '',
      email: '',
      whatsapp: '',
      message: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
    toast({
      title: 'Mensagem enviada com sucesso!',
      description: 'Um de nossos especialistas entrará em contato em breve.',
    })
    form.reset()
  }

  return (
    <section id="contato" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className={cn('opacity-0', isInView && 'animate-fade-in-up')}>
            <h2 className="text-sm font-bold tracking-widest text-accent uppercase mb-3">
              Pronto para Transformar?
            </h2>
            <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
              Vamos impulsionar as vendas do seu supermercado.
            </h3>
            <p className="text-lg text-foreground/70 mb-8 max-w-lg">
              Preencha o formulário ao lado ou nos chame no WhatsApp. Nossa equipe analisará seu
              cenário e proporá a melhor estratégia de comunicação.
            </p>

            <div className="bg-muted p-8 rounded-2xl border border-border">
              <h4 className="font-semibold text-xl mb-4 text-primary">O que acontece a seguir?</h4>
              <ol className="space-y-4 text-foreground/80">
                <li className="flex gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold shrink-0">
                    1
                  </span>
                  <span>Análise inicial do seu posicionamento atual.</span>
                </li>
                <li className="flex gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold shrink-0">
                    2
                  </span>
                  <span>Reunião de diagnóstico com um especialista em varejo.</span>
                </li>
                <li className="flex gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-accent-foreground font-bold shrink-0">
                    3
                  </span>
                  <span>Apresentação de plano de ação customizado.</span>
                </li>
              </ol>
            </div>
          </div>

          <div
            className={cn(
              'bg-card p-8 md:p-10 rounded-2xl shadow-subtle border border-border opacity-0',
              isInView && 'animate-fade-in-up',
            )}
            style={{ animationDelay: '200ms' }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome Completo</FormLabel>
                        <FormControl>
                          <Input placeholder="João Silva" className="bg-background" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="company"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Supermercado/Empresa</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Supermercado Silva"
                            className="bg-background"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail Profissional</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="fale@rbeccari.com.br"
                            className="bg-background"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="whatsapp"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>WhatsApp</FormLabel>
                        <FormControl>
                          <Input placeholder="19 981267959" className="bg-background" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Como podemos ajudar?</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Conte-nos um pouco sobre os desafios atuais da sua loja..."
                          className="min-h-[120px] bg-background"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground h-12 text-base"
                >
                  <Send className="mr-2 h-5 w-5" /> Enviar Mensagem
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  )
}
