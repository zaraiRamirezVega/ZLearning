import Image from "next/image"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { StudentSidebar } from "@/components/student-sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Camera, Mail, Phone, MapPin, Globe, Twitter, Linkedin, Github, Instagram } from "lucide-react"

export default function StudentProfile() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <StudentSidebar />
      <main className="flex-1 p-6 md:p-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex flex-col gap-4">
            <h1 className="text-3xl font-bold tracking-tight">Mi Perfil</h1>
            <p className="text-muted-foreground">Gestiona tu información personal y preferencias.</p>
          </div>

          <Tabs defaultValue="personal" className="mb-8">
            <TabsList className="mb-4">
              <TabsTrigger value="personal">Información Personal</TabsTrigger>
              <TabsTrigger value="account">Cuenta</TabsTrigger>
              <TabsTrigger value="preferences">Preferencias</TabsTrigger>
              <TabsTrigger value="social">Redes Sociales</TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Información Personal</CardTitle>
                  <CardDescription>Actualiza tu información personal y de contacto.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-col items-center space-y-4 sm:flex-row sm:items-start sm:space-x-4 sm:space-y-0">
                    <div className="relative">
                      <Image
                        src="/placeholder.svg?height=100&width=100"
                        alt="Avatar"
                        width={100}
                        height={100}
                        className="rounded-full"
                      />
                      <Button
                        size="icon"
                        variant="secondary"
                        className="absolute bottom-0 right-0 h-8 w-8 rounded-full"
                      >
                        <Camera className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="space-y-1 text-center sm:text-left">
                      <h3 className="font-medium">María González</h3>
                      <p className="text-sm text-muted-foreground">Estudiante</p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Desarrollo Web</Badge>
                        <Badge variant="outline">Diseño UX/UI</Badge>
                        <Badge variant="outline">Marketing Digital</Badge>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">Nombre</Label>
                      <Input id="firstName" defaultValue="María" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Apellido</Label>
                      <Input id="lastName" defaultValue="González" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="bio">Biografía</Label>
                    <Textarea
                      id="bio"
                      defaultValue="Estudiante de desarrollo web y diseño UX/UI. Apasionada por crear experiencias digitales intuitivas y atractivas."
                      rows={4}
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <Input id="email" type="email" defaultValue="maria.gonzalez@ejemplo.com" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Teléfono</Label>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <Input id="phone" type="tel" defaultValue="+34 612 345 678" />
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="location">Ubicación</Label>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-muted-foreground" />
                        <Input id="location" defaultValue="Madrid, España" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Sitio web</Label>
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4 text-muted-foreground" />
                        <Input id="website" type="url" defaultValue="https://mariagonzalez.com" />
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Guardar cambios</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="account" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Configuración de la cuenta</CardTitle>
                  <CardDescription>Gestiona tu contraseña y preferencias de seguridad.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="current-password">Contraseña actual</Label>
                    <Input id="current-password" type="password" />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="new-password">Nueva contraseña</Label>
                      <Input id="new-password" type="password" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-password">Confirmar contraseña</Label>
                      <Input id="confirm-password" type="password" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Actualizar contraseña</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="preferences" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Preferencias</CardTitle>
                  <CardDescription>Personaliza tu experiencia de aprendizaje.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-medium">Notificaciones</h3>
                    <div className="grid gap-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="email-notifications" className="flex-1">
                          Notificaciones por email
                        </Label>
                        <input
                          type="checkbox"
                          id="email-notifications"
                          defaultChecked
                          className="h-4 w-4 rounded border-gray-300"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="course-updates" className="flex-1">
                          Actualizaciones de cursos
                        </Label>
                        <input
                          type="checkbox"
                          id="course-updates"
                          defaultChecked
                          className="h-4 w-4 rounded border-gray-300"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="new-courses" className="flex-1">
                          Nuevos cursos recomendados
                        </Label>
                        <input
                          type="checkbox"
                          id="new-courses"
                          defaultChecked
                          className="h-4 w-4 rounded border-gray-300"
                        />
                      </div>
                      <div className="flex items-center justify-between">
                        <Label htmlFor="forum-activity" className="flex-1">
                          Actividad en foros
                        </Label>
                        <input type="checkbox" id="forum-activity" className="h-4 w-4 rounded border-gray-300" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-medium">Idioma y región</h3>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="language">Idioma</Label>
                        <select
                          id="language"
                          className="w-full rounded-md border border-input bg-background px-3 py-2"
                          defaultValue="es"
                        >
                          <option value="es">Español</option>
                          <option value="en">English</option>
                          <option value="fr">Français</option>
                          <option value="de">Deutsch</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="timezone">Zona horaria</Label>
                        <select
                          id="timezone"
                          className="w-full rounded-md border border-input bg-background px-3 py-2"
                          defaultValue="europe-madrid"
                        >
                          <option value="europe-madrid">Europa/Madrid</option>
                          <option value="america-new_york">América/Nueva York</option>
                          <option value="america-los_angeles">América/Los Ángeles</option>
                          <option value="asia-tokyo">Asia/Tokio</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Guardar preferencias</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="social" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Redes Sociales</CardTitle>
                  <CardDescription>Conecta tus perfiles de redes sociales.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="twitter" className="flex items-center gap-2">
                        <Twitter className="h-4 w-4" /> Twitter
                      </Label>
                      <Input id="twitter" defaultValue="@mariagonzalez" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="linkedin" className="flex items-center gap-2">
                        <Linkedin className="h-4 w-4" /> LinkedIn
                      </Label>
                      <Input id="linkedin" defaultValue="linkedin.com/in/mariagonzalez" />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="github" className="flex items-center gap-2">
                        <Github className="h-4 w-4" /> GitHub
                      </Label>
                      <Input id="github" defaultValue="github.com/mariagonzalez" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="instagram" className="flex items-center gap-2">
                        <Instagram className="h-4 w-4" /> Instagram
                      </Label>
                      <Input id="instagram" defaultValue="@maria.gonzalez" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Guardar perfiles</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
