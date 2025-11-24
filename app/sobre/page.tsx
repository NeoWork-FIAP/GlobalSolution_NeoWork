import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Target, TrendingUp, Shield } from "lucide-react"

export default function SobrePage() {
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Sobre a NeoWork</h1>
          <p className="text-balance text-lg text-muted-foreground">Educação para o futuro do trabalho</p>
        </div>

        <div className="mb-12 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Nossa Missão</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                A NeoWork nasceu com o propósito de ajudar profissionais que podem perder seus empregos para a automação
                e inteligência artificial. Nossa missão é oferecer cursos focados em upskilling e reskilling, com
                trilhas de aprendizagem guiadas por IA, garantindo que ninguém fique para trás na transformação digital.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Nossa Visão</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Acreditamos em um futuro onde a tecnologia potencializa o ser humano, não o substitui. Queremos ser a
                ponte entre o presente e o futuro do trabalho, capacitando profissionais a prosperarem na era da
                inteligência artificial através de educação acessível e personalizada.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mb-12">
          <h2 className="mb-6 text-center text-3xl font-bold">Nossos Valores</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <Brain className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Inovação</CardTitle>
                <CardDescription>
                  Utilizamos as mais recentes tecnologias de IA para personalizar a experiência de aprendizado
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Target className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Foco no Aluno</CardTitle>
                <CardDescription>
                  Cada decisão que tomamos prioriza o sucesso e a empregabilidade dos nossos alunos
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <TrendingUp className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Crescimento Contínuo</CardTitle>
                <CardDescription>
                  Incentivamos o aprendizado constante e a adaptação às mudanças do mercado
                </CardDescription>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="mb-2 h-8 w-8 text-primary" />
                <CardTitle>Acessibilidade</CardTitle>
                <CardDescription>
                  Educação de qualidade deve ser acessível para todos que desejam evoluir profissionalmente
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>

        <Card className="bg-secondary/50">
          <CardHeader>
            <CardTitle className="text-2xl">O Diferencial: Rota Inteligente</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mb-4 text-pretty leading-relaxed text-muted-foreground">
              Nossa plataforma possui um sistema exclusivo chamado{" "}
              <strong className="text-foreground">Rota Inteligente</strong>, onde a IA analisa o perfil do usuário e
              recomenda trilhas de estudo personalizadas para garantir empregabilidade no futuro.
            </p>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Através de algoritmos avançados de machine learning, analisamos seu histórico profissional, habilidades
              atuais, objetivos de carreira e tendências do mercado para criar um caminho de aprendizado único que
              maximiza suas chances de sucesso na era da IA.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
