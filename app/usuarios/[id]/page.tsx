import { notFound } from "next/navigation"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Mail, User, Calendar } from "lucide-react"

interface UsuarioPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function UsuarioDetalhePage({ params }: UsuarioPageProps) {
  const { id } = await params

  // Em produção, buscar dados da API
  const usuario = {
    id: Number(id),
    nome: "Usuário Exemplo",
    email: "usuario@exemplo.com",
    status: "ativo" as const,
    dataCadastro: "2024-01-15",
  }

  if (!usuario) {
    notFound()
  }

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="container mx-auto max-w-4xl">
        <Button asChild variant="ghost" className="mb-6">
          <Link href="/usuarios">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Voltar
          </Link>
        </Button>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-2xl md:text-3xl">Perfil do Usuário</CardTitle>
              <Badge variant={usuario.status === "ativo" ? "default" : "secondary"}>{usuario.status}</Badge>
            </div>
            <CardDescription>Informações detalhadas do usuário</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Nome</p>
                  <p className="font-semibold">{usuario.nome}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">E-mail</p>
                  <p className="font-semibold">{usuario.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-muted-foreground" />
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Cadastro</p>
                  <p className="font-semibold">{new Date(usuario.dataCadastro).toLocaleDateString("pt-BR")}</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
