import Link from "next/link"
import { Button } from "@/components/ui/button"
import { FileQuestion } from "lucide-react"

export default function CursoNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <FileQuestion className="mx-auto h-24 w-24 text-muted-foreground mb-6" />
        <h1 className="text-4xl font-bold mb-4">Curso não encontrado</h1>
        <p className="text-lg text-muted-foreground mb-8">
          O curso que você está procurando não existe ou foi removido.
        </p>
        <Button asChild size="lg">
          <Link href="/cursos">Ver todos os cursos</Link>
        </Button>
      </div>
    </div>
  )
}
