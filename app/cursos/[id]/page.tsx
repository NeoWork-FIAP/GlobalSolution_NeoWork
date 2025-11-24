import { notFound } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, BookOpen, Clock, GraduationCap, Star, Users } from "lucide-react"
import { getCurso } from "@/services/cursoService"

interface CursoPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function CursoDetalhePage({ params }: CursoPageProps) {
  const { id } = await params
  const curso = getCurso(Number(id))

  if (!curso) {
    notFound()
  }

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="container mx-auto max-w-5xl">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/cursos">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar para Cursos
          </Link>
        </Button>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Coluna principal */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Badge className="mb-3">{curso.categoria}</Badge>
              <h1 className="mb-4 text-3xl font-bold md:text-4xl xl:text-5xl">{curso.titulo}</h1>
              <p className="text-pretty text-lg text-muted-foreground">{curso.descricao}</p>
            </div>

            <Card className="mb-6">
              <CardHeader>
                <CardTitle>O que você vai aprender</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <span>Conceitos fundamentais e aplicações práticas</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <span>Projetos reais para construir portfólio</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <span>Certificado reconhecido pelo mercado</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <div className="h-2 w-2 rounded-full bg-primary" />
                    </div>
                    <span>Suporte de mentores especializados</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sobre o instrutor</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{curso.instrutor}</h3>
                    <p className="text-sm text-muted-foreground">
                      Especialista com mais de 10 anos de experiência na área
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-20">
              <CardContent className="p-6">
                <div className="mb-6 aspect-video overflow-hidden rounded-lg bg-muted">
                  <img
                    src={curso.thumbnail || "/placeholder.svg"}
                    alt={curso.titulo}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="mb-6 space-y-4">
                  <div className="flex items-center gap-3 text-sm">
                    <BookOpen className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Nível</p>
                      <p className="text-muted-foreground">{curso.nivel}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Duração</p>
                      <p className="text-muted-foreground">{curso.duracao}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Alunos</p>
                      <p className="text-muted-foreground">1.234 inscritos</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 text-sm">
                    <Star className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">Avaliação</p>
                      <p className="text-muted-foreground">4.8 / 5.0</p>
                    </div>
                  </div>
                </div>

                <Button asChild className="w-full" size="lg">
                  <Link href="/usuarios">Inscrever-se Agora</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
