import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { BookOpen, Clock, TrendingUp } from "lucide-react"
import Link from "next/link"

const cursos = [
  {
    id: 1,
    titulo: "Fundamentos de Inteligência Artificial",
    descricao: "Aprenda os conceitos básicos de IA e como ela está transformando o mercado de trabalho",
    nivel: "Iniciante",
    duracao: "8 semanas",
    categoria: "IA & Machine Learning",
  },
  {
    id: 2,
    titulo: "Análise de Dados com Python",
    descricao: "Desenvolva habilidades em análise de dados, visualização e tomada de decisões baseadas em dados",
    nivel: "Intermediário",
    duracao: "10 semanas",
    categoria: "Data Science",
  },
  {
    id: 3,
    titulo: "Automação de Processos com RPA",
    descricao: "Domine ferramentas de automação robótica de processos e otimize fluxos de trabalho",
    nivel: "Intermediário",
    duracao: "6 semanas",
    categoria: "Automação",
  },
  {
    id: 4,
    titulo: "Design Thinking para Inovação",
    descricao: "Aprenda metodologias ágeis e design thinking para resolver problemas complexos",
    nivel: "Iniciante",
    duracao: "4 semanas",
    categoria: "Inovação",
  },
  {
    id: 5,
    titulo: "Marketing Digital e Analytics",
    descricao: "Estratégias modernas de marketing digital com foco em métricas e resultados",
    nivel: "Iniciante",
    duracao: "8 semanas",
    categoria: "Marketing",
  },
  {
    id: 6,
    titulo: "Desenvolvimento Web Full Stack",
    descricao: "Construa aplicações web completas com as tecnologias mais demandadas do mercado",
    nivel: "Avançado",
    duracao: "16 semanas",
    categoria: "Desenvolvimento",
  },
]

export default function CursosPage() {
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Nossos Cursos</h1>
          <p className="text-balance text-lg text-muted-foreground">
            Explore nossa biblioteca de cursos focados em upskilling e reskilling
          </p>
        </div>

        <Card className="mb-8 bg-primary text-primary-foreground">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <TrendingUp className="mt-1 h-8 w-8" />
              <div>
                <h3 className="mb-2 text-xl font-bold">Use a Rota Inteligente</h3>
                <p className="text-pretty leading-relaxed opacity-90">
                  Nossa IA pode analisar seu perfil e recomendar os cursos mais adequados para seus objetivos
                  profissionais. Cadastre-se para receber recomendações personalizadas!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-6 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {cursos.map((curso) => (
            <Card key={curso.id} className="flex flex-col transition-all hover:shadow-lg">
              <CardHeader>
                <Badge className="mb-2 w-fit">{curso.categoria}</Badge>
                <CardTitle className="text-xl">{curso.titulo}</CardTitle>
                <CardDescription className="text-pretty">{curso.descricao}</CardDescription>
              </CardHeader>
              <CardContent className="mt-auto">
                <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-4 w-4" />
                    <span>{curso.nivel}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{curso.duracao}</span>
                  </div>
                </div>
                <Button asChild className="w-full">
                  <Link href={`/cursos/${curso.id}`}>Ver Detalhes</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
