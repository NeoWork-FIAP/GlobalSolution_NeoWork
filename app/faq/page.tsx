import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Mail, MessageCircle } from "lucide-react"

export default function FAQPage() {
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Perguntas Frequentes</h1>
          <p className="text-balance text-lg text-muted-foreground">Tire suas dúvidas sobre a plataforma SkillUp-AI</p>
        </div>

        <Accordion type="single" collapsible className="mb-12 w-full space-y-4">
          <AccordionItem value="item-1" className="rounded-lg border bg-card px-6">
            <AccordionTrigger className="text-left font-semibold">O que é a SkillUp-AI?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              A SkillUp-AI é uma plataforma de educação focada em ajudar profissionais a se adaptarem à automação e
              inteligência artificial através de cursos de upskilling e reskilling com trilhas personalizadas guiadas
              por IA.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2" className="rounded-lg border bg-card px-6">
            <AccordionTrigger className="text-left font-semibold">Como funciona a Rota Inteligente?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              A Rota Inteligente é nosso sistema exclusivo de IA que analisa seu perfil profissional, histórico de
              carreira e objetivos futuros para criar uma trilha de aprendizagem personalizada. A IA considera
              tendências do mercado e suas habilidades atuais para recomendar os melhores cursos para sua evolução
              profissional.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3" className="rounded-lg border bg-card px-6">
            <AccordionTrigger className="text-left font-semibold">
              Preciso ter conhecimento prévio em tecnologia?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Não! Nossos cursos são projetados para profissionais de todas as áreas e níveis de conhecimento. A Rota
              Inteligente irá identificar seu nível atual e recomendar cursos apropriados, desde o básico até o
              avançado.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4" className="rounded-lg border bg-card px-6">
            <AccordionTrigger className="text-left font-semibold">
              Quanto tempo leva para completar uma trilha?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              O tempo varia de acordo com a trilha escolhida e sua dedicação. Em média, nossas trilhas levam de 3 a 6
              meses para conclusão, com a flexibilidade de você estudar no seu próprio ritmo.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5" className="rounded-lg border bg-card px-6">
            <AccordionTrigger className="text-left font-semibold">
              Os certificados são reconhecidos pelo mercado?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Sim! Todos os nossos certificados são reconhecidos e valorizados por empresas parceiras. Ao concluir uma
              trilha, você recebe um certificado digital que pode ser compartilhado no LinkedIn e em seu currículo.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6" className="rounded-lg border bg-card px-6">
            <AccordionTrigger className="text-left font-semibold">Como faço para me cadastrar?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              É simples! Acesse a página de Usuários, preencha o formulário de cadastro com suas informações básicas e
              comece a explorar a plataforma. A Rota Inteligente será gerada automaticamente após você completar seu
              perfil.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7" className="rounded-lg border bg-card px-6">
            <AccordionTrigger className="text-left font-semibold">
              Posso alterar minha trilha de aprendizagem?
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Sim! A Rota Inteligente se adapta conforme você evolui. Você pode ajustar seus objetivos de carreira a
              qualquer momento, e a IA recalculará as melhores recomendações para você.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8" className="rounded-lg border bg-card px-6">
            <AccordionTrigger className="text-left font-semibold">Existe suporte durante o curso?</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              Absolutamente! Oferecemos suporte contínuo através de nossa comunidade, tutores especializados e
              assistência técnica. Você nunca estará sozinho em sua jornada de aprendizado.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <Mail className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Entre em Contato</CardTitle>
              <CardDescription>Ainda tem dúvidas? Nossa equipe está pronta para ajudar!</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <a href="mailto:contato@skillup-ai.com">contato@skillup-ai.com</a>
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <MessageCircle className="mb-2 h-8 w-8 text-primary" />
              <CardTitle>Conheça o Time</CardTitle>
              <CardDescription>Veja quem está por trás da SkillUp-AI</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild variant="outline" className="w-full bg-transparent">
                <Link href="/integrantes">Ver Integrantes</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
