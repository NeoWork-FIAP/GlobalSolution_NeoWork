import Link from "next/link"
import { Brain, Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-secondary/30 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="mb-4 flex items-center gap-2 font-bold text-xl">
              <Brain className="h-6 w-6 text-primary" />
              NeoWork
            </Link>
            <p className="mb-4 text-pretty text-sm text-muted-foreground">
              Plataforma de educação focada em preparar profissionais para o futuro do trabalho na era da inteligência
              artificial.
            </p>
            <p className="text-xs text-muted-foreground">© 2025 NeoWork. Desenvolvido para Global Solution - FIAP</p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Links Rápidos</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/sobre" className="hover:text-foreground transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/cursos" className="hover:text-foreground transition-colors">
                  Cursos
                </Link>
              </li>
              <li>
                <Link href="/usuarios" className="hover:text-foreground transition-colors">
                  Cadastro
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Contato</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>contato@neowork.com</li>
              <li>
                <Link href="/integrantes" className="hover:text-foreground transition-colors">
                  Nosso Time
                </Link>
              </li>
            </ul>
            <div className="mt-4 flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
