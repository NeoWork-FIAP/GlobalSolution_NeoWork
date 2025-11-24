import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin } from "lucide-react"
import Image from "next/image"

const integrantes = [
  {
    nome: "Yanick José dos Santos",
    rm: "558350",
    turma: "1TDSA",
    linkedin: "https://www.linkedin.com/in/yanick-jose-zen-dos-santos",
    github: "https://github.com/yanick3",
    foto: "/team/jonathan.png", // Jonathan's photo for Yanick
  },
  {
    nome: "Jonathan Moreira Gomes",
    rm: "565060",
    turma: "1TDSR",
    linkedin: "https://www.linkedin.com/in/jonathan-moreira-811b03355",
    github: "http://github.com/Jonathanmoreiragomes",
    foto: "/team/ruan.png", // Ruan's photo for Jonathan
  },
  {
    nome: "Ruan Luca Feliciano de Carvalho",
    rm: "562218",
    turma: "1TDSA",
    linkedin: "https://www.linkedin.com/in/ruan-luca-feliciano-de-carvalho-a36905267",
    github: "https://github.com/RuanLuca",
    foto: "/team/yanick.png", // Yanick's photo for Ruan
  },
]

export default function IntegrantesPage() {
  return (
    <div className="min-h-screen px-4 py-12">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Nosso Time</h1>
          <p className="text-balance text-lg text-muted-foreground">
            Conheça os desenvolvedores por trás da plataforma NeoWork
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {integrantes.map((integrante) => (
            <Card key={integrante.rm} className="overflow-hidden transition-all hover:shadow-lg">
              <CardHeader className="p-0">
                <div className="relative aspect-square overflow-hidden bg-secondary">
                  <Image
                    src={integrante.foto || "/placeholder.svg"}
                    alt={integrante.nome}
                    fill
                    className="object-cover"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <h3 className="mb-2 text-xl font-bold">{integrante.nome}</h3>
                <div className="mb-4 space-y-1 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">RM:</strong> {integrante.rm}
                  </p>
                  <p>
                    <strong className="text-foreground">Turma:</strong> {integrante.turma}
                  </p>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline" asChild className="flex-1 bg-transparent">
                    <a href={integrante.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button size="sm" asChild className="flex-1">
                    <a href={integrante.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 bg-secondary/50">
          <CardContent className="p-8 text-center">
            <h2 className="mb-4 text-2xl font-bold">Sobre o Projeto</h2>
            <p className="mx-auto max-w-2xl text-pretty leading-relaxed text-muted-foreground">
              Este projeto foi desenvolvido como parte da Global Solution da FIAP, com o objetivo de criar uma
              plataforma educacional que prepara profissionais para o futuro do trabalho na era da inteligência
              artificial.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
