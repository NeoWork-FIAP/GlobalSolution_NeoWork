import { apiRequest } from "./api"

export interface Usuario {
  id: number
  nome: string
  email: string
  senha?: string
}

export interface CreateUsuarioData {
  nome: string
  email: string
  senha: string
}

export interface UpdateUsuarioData {
  nome: string
  email: string
  senha?: string
}

export async function getUsuarios(): Promise<Usuario[]> {
  return apiRequest<Usuario[]>("/usuario")
}

export async function getUsuario(id: number): Promise<Usuario> {
  return apiRequest<Usuario>(`/usuario/${id}`)
}

export async function createUsuario(data: CreateUsuarioData): Promise<Usuario> {
  return apiRequest<Usuario>("/usuario", {
    method: "POST",
    body: JSON.stringify(data),
  })
}

export async function updateUsuario(id: number, data: UpdateUsuarioData): Promise<Usuario> {
  return apiRequest<Usuario>(`/usuario/${id}`, {
    method: "PUT",
    body: JSON.stringify(data),
  })
}

export async function deleteUsuario(id: number): Promise<void> {
  return apiRequest<void>(`/usuario/${id}`, {
    method: "DELETE",
  })
}
