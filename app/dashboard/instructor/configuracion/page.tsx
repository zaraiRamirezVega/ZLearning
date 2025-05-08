import { Separator } from "@/components/ui/separator"
import type { Metadata } from "next"
import { InstructorSidebar } from "@/components/instructor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CameraIcon } from "lucide-react"

export const metadata: Metadata = {
  title: "Configuración | Instructor Dashboard",
  description: "Ajusta la configuración de tu cuenta de instructor",
}

export default function SettingsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <InstructorSidebar />
        <main className="flex-1 p-6 lg:p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold tracking-tight">Configuración</h1>
            <p className="text-muted-foreground mt-2">Administra tu cuenta y preferencias</p>
          </div>

          <Tabs defaultValue="profile">
            <TabsList className="mb-6">
              <TabsTrigger value="profile">Perfil</TabsTrigger>
              <TabsTrigger value="account">Cuenta</TabsTrigger>
              <TabsTrigger value="payments">Pagos</TabsTrigger>
              <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
            </TabsList>

            <TabsContent value="profile">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Card className="col-span-1 md:col-span-2">
                  <CardHeader>
                    <CardTitle>Información Pública</CardTitle>
                    <CardDescription>
                      Esta información se mostrará públicamente en tu perfil de instructor
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
                      <Avatar className="h-24 w-24 border">
                        <AvatarImage src="/placeholder.svg?height=96&width=96" alt="Avatar" />
                        <AvatarFallback>CR</AvatarFallback>
                        <div className="absolute bottom-0 right-0 p-1 rounded-full bg-primary">
                          <CameraIcon className="h-4 w-4 text-white" />
                        </div>
                      </Avatar>
                      <div className="space-y-1 flex-1">
                        <h3 className="font-medium">Foto de perfil</h3>
                        <p className="text-sm text-muted-foreground">
                          Sube una foto profesional para tu perfil de instructor
                        </p>
                        <div className="flex gap-2 mt-2">
                          <Button size="sm" variant="outline">
                            Cambiar
                          </Button>
                          <Button size="sm" variant="ghost">
                            Eliminar
                          </Button>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="name">Nombre completo</Label>
                      <Input id="name" defaultValue="Carlos Rodríguez" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="headline">Titular profesional</Label>
                      <Input
                        id="headline"
                        defaultValue="Desarrollador Web Full Stack & Instructor"
                        placeholder="Ej: Desarrollador Web Senior & Instructor"
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Este titular aparecerá junto a tu nombre en tu perfil público.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bio">Biografía</Label>
                      <Textarea
                        id="bio"
                        rows={5}
                        defaultValue="Desarrollador web con más de 10 años de experiencia en tecnologías frontend y backend. Me especializo en JavaScript, React, Node.js y bases de datos. Me apasiona enseñar y compartir mi conocimiento."
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Escribe una biografía profesional que destaque tu experiencia y especialidades.
                      </p>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="website">Sitio web</Label>
                      <Input
                        id="website"
                        type="url"
                        defaultValue="https://carlosrodriguez.com"
                        placeholder="https://tudominio.com"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2 border-t px-6 py-4">
                    <Button variant="outline">Cancelar</Button>
                    <Button>Guardar cambios</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Redes sociales</CardTitle>
                    <CardDescription>Conecta tus perfiles de redes sociales</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="twitter">Twitter</Label>
                      <Input id="twitter" defaultValue="@carlosrodriguez" placeholder="@usuario" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn</Label>
                      <Input id="linkedin" defaultValue="carlossrodriguezz" placeholder="nombre-usuario" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="github">GitHub</Label>
                      <Input id="github" defaultValue="carlosrdz" placeholder="usuario" />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2 border-t px-6 py-4">
                    <Button variant="outline">Cancelar</Button>
                    <Button>Guardar cambios</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Experiencia profesional</CardTitle>
                    <CardDescription>Añade tu experiencia laboral relevante</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current">Empleo actual</Label>
                      <Input
                        id="current"
                        defaultValue="Desarrollador Senior en TechCorp"
                        placeholder="Título y empresa"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="experience">Años de experiencia</Label>
                      <Input id="experience" type="number" defaultValue="10" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="education">Educación</Label>
                      <Input
                        id="education"
                        defaultValue="Ingeniería en Sistemas Computacionales, Universidad Tecnológica"
                      />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2 border-t px-6 py-4">
                    <Button variant="outline">Cancelar</Button>
                    <Button>Guardar cambios</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="account">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Card className="col-span-1 md:col-span-2">
                  <CardHeader>
                    <CardTitle>Información de la cuenta</CardTitle>
                    <CardDescription>Actualiza la información básica de tu cuenta</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo electrónico</Label>
                      <Input id="email" type="email" defaultValue="carlos.rodriguez@ejemplo.com" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <Input id="phone" type="tel" defaultValue="+34 612 345 678" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="language">Idioma</Label>
                      <select
                        id="language"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="es">Español</option>
                        <option value="en">English</option>
                        <option value="fr">Français</option>
                        <option value="de">Deutsch</option>
                      </select>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2 border-t px-6 py-4">
                    <Button variant="outline">Cancelar</Button>
                    <Button>Guardar cambios</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Cambiar contraseña</CardTitle>
                    <CardDescription>Actualiza tu contraseña para mayor seguridad</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="current-password">Contraseña actual</Label>
                      <Input id="current-password" type="password" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="new-password">Nueva contraseña</Label>
                      <Input id="new-password" type="password" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirmar contraseña</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2 border-t px-6 py-4">
                    <Button variant="outline">Cancelar</Button>
                    <Button>Cambiar contraseña</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Borrar cuenta</CardTitle>
                    <CardDescription>Elimina permanentemente tu cuenta y todos tus datos</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Esta acción eliminará permanentemente tu cuenta de instructor, tus cursos y todos los datos
                      asociados. Los estudiantes perderán acceso a tus cursos.
                    </p>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2 border-t px-6 py-4">
                    <Button variant="destructive">Eliminar cuenta</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="payments">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Card className="col-span-1 md:col-span-2">
                  <CardHeader>
                    <CardTitle>Método de pago</CardTitle>
                    <CardDescription>Añade o actualiza tu método de pago para recibir tus ingresos</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="payment-method">Método preferido</Label>
                      <select
                        id="payment-method"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        <option value="bank">Transferencia bancaria</option>
                        <option value="paypal">PayPal</option>
                        <option value="payoneer">Payoneer</option>
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="bank-name">Nombre del banco</Label>
                      <Input id="bank-name" defaultValue="Banco Nacional" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="account-number">Número de cuenta</Label>
                      <Input id="account-number" defaultValue="ES7921000813610123456789" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="swift">Código SWIFT/BIC</Label>
                      <Input id="swift" defaultValue="BNPAESMMXXX" />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2 border-t px-6 py-4">
                    <Button variant="outline">Cancelar</Button>
                    <Button>Guardar cambios</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Información fiscal</CardTitle>
                    <CardDescription>Información necesaria para aspectos fiscales</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="tax-id">Número de identificación fiscal</Label>
                      <Input id="tax-id" defaultValue="B-12345678" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="company-name">Nombre de empresa/Autónomo</Label>
                      <Input id="company-name" defaultValue="Carlos Rodríguez Desarrollo Web" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Dirección</Label>
                      <Textarea id="address" rows={3} defaultValue="Calle Ejemplo 123, 28001, Madrid, España" />
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2 border-t px-6 py-4">
                    <Button variant="outline">Cancelar</Button>
                    <Button>Guardar cambios</Button>
                  </CardFooter>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="notifications">
              <Card>
                <CardHeader>
                  <CardTitle>Preferencias de notificaciones</CardTitle>
                  <CardDescription>Configura cómo y cuándo quieres recibir notificaciones</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-4">
                    <h3 className="text-sm font-medium">Notificaciones por correo</h3>

                    <div className="flex items-center justify-between space-y-0">
                      <div className="space-y-0.5">
                        <Label className="text-sm">Nuevas inscripciones</Label>
                        <p className="text-xs text-muted-foreground">
                          Recibe un correo cuando un estudiante se inscribe en tu curso
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between space-y-0">
                      <div className="space-y-0.5">
                        <Label className="text-sm">Nuevas preguntas</Label>
                        <p className="text-xs text-muted-foreground">
                          Recibe un correo cuando un estudiante hace una pregunta
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between space-y-0">
                      <div className="space-y-0.5">
                        <Label className="text-sm">Nuevas reseñas</Label>
                        <p className="text-xs text-muted-foreground">
                          Recibe un correo cuando un estudiante deja una reseña
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between space-y-0">
                      <div className="space-y-0.5">
                        <Label className="text-sm">Pagos recibidos</Label>
                        <p className="text-xs text-muted-foreground">
                          Recibe un correo cuando se procesa un pago a tu cuenta
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <Separator className="my-4" />

                    <h3 className="text-sm font-medium">Notificaciones en plataforma</h3>

                    <div className="flex items-center justify-between space-y-0">
                      <div className="space-y-0.5">
                        <Label className="text-sm">Actividad del curso</Label>
                        <p className="text-xs text-muted-foreground">
                          Recibe notificaciones sobre la actividad en tus cursos
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between space-y-0">
                      <div className="space-y-0.5">
                        <Label className="text-sm">Actualizaciones de la plataforma</Label>
                        <p className="text-xs text-muted-foreground">
                          Recibe notificaciones sobre nuevas funciones o cambios
                        </p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end gap-2 border-t px-6 py-4">
                  <Button variant="outline">Cancelar</Button>
                  <Button>Guardar cambios</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}
