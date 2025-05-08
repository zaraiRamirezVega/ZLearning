import type { Metadata } from "next"
import { InstructorSidebar } from "@/components/instructor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UploadCloud } from "lucide-react"

export const metadata: Metadata = {
  title: "Crear Curso | Instructor Dashboard",
  description: "Crea un nuevo curso en la plataforma",
}

export default function CreateCoursePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <InstructorSidebar />
        <main className="flex-1 p-6 lg:p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold tracking-tight">Crear Nuevo Curso</h1>
            <p className="text-muted-foreground mt-2">Completa la información básica para comenzar a crear tu curso</p>
          </div>

          <Tabs defaultValue="info">
            <TabsList className="mb-4">
              <TabsTrigger value="info">Información básica</TabsTrigger>
              <TabsTrigger value="curriculum" disabled>
                Curriculum
              </TabsTrigger>
              <TabsTrigger value="pricing" disabled>
                Precios
              </TabsTrigger>
              <TabsTrigger value="settings" disabled>
                Configuración
              </TabsTrigger>
            </TabsList>

            <TabsContent value="info">
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Detalles del curso</CardTitle>
                    <CardDescription>Proporciona la información básica de tu curso</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="title">Título del curso</Label>
                      <Input id="title" placeholder="Ej: Desarrollo Web Completo" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subtitle">Subtítulo</Label>
                      <Input id="subtitle" placeholder="Breve descripción de una línea" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="description">Descripción</Label>
                      <Textarea id="description" placeholder="Describe detalladamente tu curso..." rows={5} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="category">Categoría</Label>
                      <Select>
                        <SelectTrigger id="category">
                          <SelectValue placeholder="Selecciona una categoría" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="web">Desarrollo Web</SelectItem>
                          <SelectItem value="mobile">Desarrollo Móvil</SelectItem>
                          <SelectItem value="programming">Programación</SelectItem>
                          <SelectItem value="design">Diseño</SelectItem>
                          <SelectItem value="marketing">Marketing Digital</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="level">Nivel</Label>
                      <Select>
                        <SelectTrigger id="level">
                          <SelectValue placeholder="Selecciona un nivel" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Principiante</SelectItem>
                          <SelectItem value="intermediate">Intermedio</SelectItem>
                          <SelectItem value="advanced">Avanzado</SelectItem>
                          <SelectItem value="all">Todos los niveles</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Imagen del curso</CardTitle>
                      <CardDescription>Sube una imagen atractiva para tu curso</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-col items-center justify-center border-2 border-dashed rounded-lg p-12">
                        <UploadCloud className="h-10 w-10 text-muted-foreground mb-2" />
                        <p className="text-sm text-muted-foreground mb-1">Arrastra y suelta una imagen</p>
                        <p className="text-xs text-muted-foreground mb-4">SVG, PNG, JPG o GIF (Máx. 2MB)</p>
                        <Button size="sm" variant="outline">
                          Seleccionar archivo
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Video promocional</CardTitle>
                      <CardDescription>Añade un video de introducción para tu curso</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <Label htmlFor="video">URL del video (YouTube o Vimeo)</Label>
                        <Input id="video" placeholder="https://..." />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mt-6 flex justify-end gap-2">
                <Button variant="outline">Guardar como borrador</Button>
                <Button>Continuar</Button>
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
