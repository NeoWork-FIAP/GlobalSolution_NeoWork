// Tipos básicos
export type NivelCurso = "Iniciante" | "Intermediário" | "Avançado" // Union Type
export type StatusUsuario = "ativo" | "inativo" | "suspenso" // Union Type
export type TemaApp = "light" | "dark" | "system" // Union Type

// Interfaces
export interface Usuario {
  id: number
  nome: string
  email: string
  senha?: string
  status?: StatusUsuario
  dataCadastro?: string
}

export interface Curso {
  id: number
  titulo: string
  descricao: string
  nivel: NivelCurso
  duracao: string
  categoria: string
  instrutor?: string
  thumbnail?: string
}

export interface PerguntaFAQ {
  pergunta: string
  resposta: string
  categoria: string
}

export interface Integrante {
  nome: string
  rm: string
  turma: string
  foto: string
  github: string
  linkedin: string
}

// Intersection Types - combinando tipos
export interface Timestamps {
  createdAt: string
  updatedAt: string
}

export type CursoCompleto = Curso & Timestamps // Intersection Type
export type UsuarioCompleto = Usuario & Timestamps & { ultimoAcesso: string } // Intersection Type

// Union Types complexos
export type DadosFormulario =
  | {
      tipo: "usuario"
      dados: Usuario
    }
  | {
      tipo: "curso"
      dados: Curso
    }

// Tipos de resposta da API
export interface ApiResponse<T> {
  data: T
  success: boolean
  message?: string
}

export interface ApiError {
  error: string
  code: number
  details?: string[]
}

// Tipos para Context API
export interface ThemeContextType {
  theme: TemaApp
  setTheme: (theme: TemaApp) => void
  toggleTheme: () => void
}
