"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Loader2, UserPlus, Pencil, Trash2, Users } from "lucide-react"
import { getUsuarios, createUsuario, updateUsuario, deleteUsuario, type Usuario } from "@/services/userService"

export default function UsuariosPage() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [editingId, setEditingId] = useState<number | null>(null)
  const { toast } = useToast()

  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
  })

  useEffect(() => {
    loadUsuarios()
  }, [])

  async function loadUsuarios() {
    try {
      setLoading(true)
      const data = await getUsuarios()
      setUsuarios(data)
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível carregar os usuários",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)

    try {
      if (editingId) {
        await updateUsuario(editingId, formData)
        toast({
          title: "Sucesso!",
          description: "Usuário atualizado com sucesso",
        })
      } else {
        await createUsuario(formData)
        toast({
          title: "Sucesso!",
          description: "Usuário cadastrado com sucesso",
        })
      }

      setFormData({ nome: "", email: "", senha: "" })
      setEditingId(null)
      loadUsuarios()
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível salvar o usuário",
        variant: "destructive",
      })
    } finally {
      setSubmitting(false)
    }
  }

  function handleEdit(usuario: Usuario) {
    setFormData({
      nome: usuario.nome,
      email: usuario.email,
      senha: "",
    })
    setEditingId(usuario.id)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  async function handleDelete(id: number) {
    if (!confirm("Tem certeza que deseja excluir este usuário?")) return

    try {
      await deleteUsuario(id)
      toast({
        title: "Sucesso!",
        description: "Usuário excluído com sucesso",
      })
      loadUsuarios()
    } catch (error) {
      toast({
        title: "Erro",
        description: "Não foi possível excluir o usuário",
        variant: "destructive",
      })
    }
  }

  function cancelEdit() {
    setFormData({ nome: "", email: "", senha: "" })
    setEditingId(null)
  }

  return (
    <div className="min-h-screen px-4 py-12">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Gerenciar Usuários</h1>
          <p className="text-balance text-lg text-muted-foreground">
            Cadastre-se e comece sua jornada com a Rota Inteligente
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          {/* Formulário */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <UserPlus className="h-5 w-5" />
                  {editingId ? "Editar Usuário" : "Novo Usuário"}
                </CardTitle>
                <CardDescription>
                  {editingId ? "Atualize as informações do usuário" : "Preencha os dados para criar sua conta"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome Completo</Label>
                    <Input
                      id="nome"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      placeholder="Digite seu nome"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="seu@email.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="senha">Senha</Label>
                    <Input
                      id="senha"
                      type="password"
                      value={formData.senha}
                      onChange={(e) => setFormData({ ...formData, senha: e.target.value })}
                      placeholder="Digite sua senha"
                      required={!editingId}
                    />
                    {editingId && (
                      <p className="text-xs text-muted-foreground">Deixe em branco para manter a senha atual</p>
                    )}
                  </div>

                  <div className="flex gap-2">
                    <Button type="submit" className="flex-1" disabled={submitting}>
                      {submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                      {editingId ? "Atualizar" : "Cadastrar"}
                    </Button>
                    {editingId && (
                      <Button type="button" variant="outline" onClick={cancelEdit}>
                        Cancelar
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Lista de Usuários */}
          <div className="lg:col-span-3">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Usuários Cadastrados
                </CardTitle>
                <CardDescription>
                  {usuarios.length} {usuarios.length === 1 ? "usuário" : "usuários"} na plataforma
                </CardDescription>
              </CardHeader>
              <CardContent>
                {loading ? (
                  <div className="flex items-center justify-center py-8">
                    <Loader2 className="h-8 w-8 animate-spin text-primary" />
                  </div>
                ) : usuarios.length === 0 ? (
                  <div className="py-8 text-center text-muted-foreground">Nenhum usuário cadastrado ainda</div>
                ) : (
                  <div className="space-y-3">
                    {usuarios.map((usuario) => (
                      <Card key={usuario.id} className="transition-all hover:shadow-md">
                        <CardContent className="flex items-center justify-between p-4">
                          <div>
                            <h3 className="font-semibold">{usuario.nome}</h3>
                            <p className="text-sm text-muted-foreground">{usuario.email}</p>
                          </div>
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" onClick={() => handleEdit(usuario)}>
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="destructive" onClick={() => handleDelete(usuario.id)}>
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
