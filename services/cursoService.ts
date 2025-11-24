import type { Curso, NivelCurso } from "@/types"

// Dados mockados de cursos (em produção viria de uma API)
const cursosData: Curso[] = [
  {
    id: 1,
    titulo: "Fundamentos de Inteligência Artificial",
    descricao:
      "Aprenda os conceitos básicos de IA e como ela está transformando o mercado de trabalho. Este curso abrangente cobre machine learning, deep learning, processamento de linguagem natural e visão computacional.",
    nivel: "Iniciante",
    duracao: "8 semanas",
    categoria: "IA & Machine Learning",
    instrutor: "Dra. Ana Silva",
    thumbnail: "/ai-neural-network.png",
  },
  {
    id: 2,
    titulo: "Análise de Dados com Python",
    descricao:
      "Desenvolva habilidades em análise de dados, visualização e tomada de decisões baseadas em dados. Aprenda pandas, numpy, matplotlib e técnicas avançadas de análise estatística.",
    nivel: "Intermediário",
    duracao: "10 semanas",
    categoria: "Data Science",
    instrutor: "Prof. Carlos Santos",
    thumbnail: "/data-analysis-python-charts-graphs.jpg",
  },
  {
    id: 3,
    titulo: "Automação de Processos com RPA",
    descricao:
      "Domine ferramentas de automação robótica de processos e otimize fluxos de trabalho. Aprenda UiPath, Blue Prism e Python para criar bots inteligentes.",
    nivel: "Intermediário",
    duracao: "6 semanas",
    categoria: "Automação",
    instrutor: "Eng. Roberto Lima",
    thumbnail: "/robotic-process-automation-robot-working.jpg",
  },
  {
    id: 4,
    titulo: "Design Thinking para Inovação",
    descricao:
      "Aprenda metodologias ágeis e design thinking para resolver problemas complexos. Desenvolva mindset criativo e habilidades de prototipagem rápida.",
    nivel: "Iniciante",
    duracao: "4 semanas",
    categoria: "Inovação",
    instrutor: "Design. Marina Costa",
    thumbnail: "/design-thinking-brainstorming-innovation.jpg",
  },
  {
    id: 5,
    titulo: "Marketing Digital e Analytics",
    descricao:
      "Estratégias modernas de marketing digital com foco em métricas e resultados. Aprenda SEO, Google Analytics, Facebook Ads e growth hacking.",
    nivel: "Iniciante",
    duracao: "8 semanas",
    categoria: "Marketing",
    instrutor: "Esp. Juliana Ferreira",
    thumbnail: "/digital-marketing-dashboard.png",
  },
  {
    id: 6,
    titulo: "Desenvolvimento Web Full Stack",
    descricao:
      "Construa aplicações web completas com as tecnologias mais demandadas do mercado. Domine React, Node.js, TypeScript e bancos de dados modernos.",
    nivel: "Avançado",
    duracao: "16 semanas",
    categoria: "Desenvolvimento",
    instrutor: "Dev. Pedro Almeida",
    thumbnail: "/web-development-coding-fullstack.jpg",
  },
]

export function getCursos(): Curso[] {
  return cursosData
}

export function getCurso(id: number): Curso | undefined {
  return cursosData.find((curso) => curso.id === id)
}

export function getCursosPorNivel(nivel: NivelCurso): Curso[] {
  return cursosData.filter((curso) => curso.nivel === nivel)
}

export function getCursosPorCategoria(categoria: string): Curso[] {
  return cursosData.filter((curso) => curso.categoria === categoria)
}
