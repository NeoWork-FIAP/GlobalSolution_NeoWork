import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Target, TrendingUp, Users, Sparkles, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/20 px-4 py-20 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
              <Sparkles className="h-4 w-4" />
              <span>Educação para o Futuro do Trabalho</span>
            </div>
            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Prepare-se para o{" "}
              <span className="bg-gradient-to-r from-primary to-chart-1 bg-clip-text text-transparent">
                Futuro da IA
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
              A NeoWork é a plataforma que ajuda profissionais a se adaptarem à automação e IA através de cursos de
              upskilling e reskilling com trilhas personalizadas.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="/cursos">
                  Começar Agora
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="w-full sm:w-auto bg-transparent">
                <Link href="/sobre">Saiba Mais</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Por que escolher a NeoWork?</h2>
            <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
              Nossa plataforma oferece soluções completas para o desenvolvimento profissional na era da IA
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 transition-all hover:border-primary">
              <CardHeader>
                <Brain className="mb-2 h-10 w-10 text-primary" />
                <CardTitle>Rota Inteligente</CardTitle>
                <CardDescription>
                  IA analisa seu perfil e recomenda trilhas personalizadas de aprendizagem para garantir sua
                  empregabilidade
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 transition-all hover:border-primary">
              <CardHeader>
                <Target className="mb-2 h-10 w-10 text-primary" />
                <CardTitle>Cursos Focados</CardTitle>
                <CardDescription>
                  Conteúdos desenvolvidos especificamente para profissionais que precisam se adaptar à automação
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 transition-all hover:border-primary">
              <CardHeader>
                <TrendingUp className="mb-2 h-10 w-10 text-primary" />
                <CardTitle>Upskilling & Reskilling</CardTitle>
                <CardDescription>
                  Aprimore suas habilidades atuais ou desenvolva novas competências para o mercado do futuro
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 transition-all hover:border-primary">
              <CardHeader>
                <Users className="mb-2 h-10 w-10 text-primary" />
                <CardTitle>Comunidade Ativa</CardTitle>
                <CardDescription>
                  Conecte-se com outros profissionais em transição e compartilhe experiências de aprendizado
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 transition-all hover:border-primary">
              <CardHeader>
                <Sparkles className="mb-2 h-10 w-10 text-primary" />
                <CardTitle>Certificações</CardTitle>
                <CardDescription>
                  Obtenha certificados reconhecidos pelo mercado ao concluir suas trilhas de aprendizagem
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 transition-all hover:border-primary">
              <CardHeader>
                <ArrowRight className="mb-2 h-10 w-10 text-primary" />
                <CardTitle>Suporte Contínuo</CardTitle>
                <CardDescription>
                  Acompanhamento personalizado durante toda sua jornada de aprendizado e transição profissional
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Rota Inteligente Section */}
      <section className="bg-secondary/50 px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary">
                <Brain className="h-4 w-4" />
                <span>Diferencial Exclusivo</span>
              </div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">Rota Inteligente</h2>
              <p className="mb-6 text-pretty text-lg text-muted-foreground">
                Nossa IA analisa seu perfil profissional, histórico de carreira e objetivos futuros para criar uma
                trilha de aprendizagem personalizada que maximiza suas chances de empregabilidade.
              </p>
              <ul className="mb-8 space-y-3">
                <li className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-primary p-1">
                    <ArrowRight className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <span>Análise de perfil em tempo real</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-primary p-1">
                    <ArrowRight className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <span>Recomendações baseadas em tendências do mercado</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-primary p-1">
                    <ArrowRight className="h-3 w-3 text-primary-foreground" />
                  </div>
                  <span>Ajustes automáticos conforme seu progresso</span>
                </li>
              </ul>
              <Button size="lg" asChild>
                <Link href="/usuarios">Comece sua Rota Inteligente</Link>
              </Button>
            </div>
            <div className="rounded-lg bg-gradient-to-br from-primary/20 to-chart-1/20 p-8">
              <Card>
                <CardHeader>
                  <CardTitle>Como Funciona</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold">Cadastro e Perfil</h4>
                      <p className="text-sm text-muted-foreground">Crie sua conta e complete seu perfil profissional</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold">Análise de IA</h4>
                      <p className="text-sm text-muted-foreground">
                        Nossa IA analisa seu perfil e identifica oportunidades
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold">Trilha Personalizada</h4>
                      <p className="text-sm text-muted-foreground">Receba sua rota de aprendizagem customizada</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                      4
                    </div>
                    <div>
                      <h4 className="font-semibold">Aprenda e Evolua</h4>
                      <p className="text-sm text-muted-foreground">
                        Complete os cursos e garanta seu futuro profissional
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Pronto para transformar sua carreira?</h2>
          <p className="mb-8 text-pretty text-lg text-muted-foreground">
            Junte-se a milhares de profissionais que já estão se preparando para o futuro do trabalho
          </p>
          <Button size="lg" asChild>
            <Link href="/usuarios">
              Criar Conta Gratuita
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
