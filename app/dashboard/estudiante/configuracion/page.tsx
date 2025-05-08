import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { StudentSidebar } from "@/components/student-sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Bell, Moon, Sun, Globe, Lock, CreditCard, Trash2 } from "lucide-react"

export default function StudentSettings() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <StudentSidebar />
      <main className="flex-1 p-6 md:p-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex flex-col gap-4">
            <h1 className="text-3xl font-bold tracking-tight">Configuración</h1>
            <p className="text-muted-foreground">Gestiona tus preferencias y configuración de la cuenta.</p>
          </div>

          <Tabs defaultValue="general" className="mb-8">
            <TabsList className="mb-4">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="notifications">Notificaciones</TabsTrigger>
              <TabsTrigger value="privacy">Privacidad</TabsTrigger>
              <TabsTrigger value="billing">Facturación</TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Configuración General</CardTitle>
                  <CardDescription>Configura las opciones generales de tu cuenta.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="theme">Tema</Label>
                        <div className="text-sm text-muted-foreground">Selecciona el tema de la plataforma.</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Sun className="h-4 w-4" />
                        <Switch id="theme" />
                        <Moon className="h-4 w-4" />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="language">Idioma</Label>
                        <div className="text-sm text-muted-foreground">Selecciona el idioma de la plataforma.</div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Globe className="h-4 w-4" />
                        <select
                          id="language"
                          className="rounded-md border border-input bg-background px-3 py-1 text-sm"
                          defaultValue="es"
                        >
                          <option value="es">Español</option>
                          <option value="en">English</option>
                          <option value="fr">Français</option>
                          <option value="de">Deutsch</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="autoplay">Reproducción automática</Label>
                        <div className="text-sm text-muted-foreground">
                          Reproducir automáticamente los videos de los cursos.
                        </div>
                      </div>
                      <Switch id="autoplay" defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label htmlFor="subtitles">Subtítulos automáticos</Label>
                        <div className="text-sm text-muted-foreground">
                          Mostrar subtítulos automáticamente en los videos.
                        </div>
                      </div>
                      <Switch id="subtitles" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Guardar cambios</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="notifications" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Notificaciones</CardTitle>
                  <CardDescription>Configura cómo y cuándo quieres recibir notificaciones.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Notificaciones por email</Label>
                        <div className="text-sm text-muted-foreground">Recibir notificaciones por email.</div>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="space-y-4 rounded-lg border p-4">
                      <h3 className="flex items-center gap-2 font-medium">
                        <Bell className="h-4 w-4" /> Tipos de notificaciones
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="course-updates" className="flex-1">
                            Actualizaciones de cursos
                          </Label>
                          <Switch id="course-updates" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="new-courses" className="flex-1">
                            Nuevos cursos recomendados
                          </Label>
                          <Switch id="new-courses" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="forum-activity" className="flex-1">
                            Actividad en foros
                          </Label>
                          <Switch id="forum-activity" />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="instructor-messages" className="flex-1">
                            Mensajes de instructores
                          </Label>
                          <Switch id="instructor-messages" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="promotions" className="flex-1">
                            Promociones y descuentos
                          </Label>
                          <Switch id="promotions" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Guardar preferencias</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="privacy" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Privacidad y Seguridad</CardTitle>
                  <CardDescription>Gestiona la privacidad y seguridad de tu cuenta.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Perfil público</Label>
                        <div className="text-sm text-muted-foreground">
                          Hacer visible tu perfil para otros estudiantes.
                        </div>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <Label>Mostrar progreso de cursos</Label>
                        <div className="text-sm text-muted-foreground">
                          Mostrar tu progreso en cursos a otros estudiantes.
                        </div>
                      </div>
                      <Switch />
                    </div>

                    <div className="space-y-4 rounded-lg border p-4">
                      <h3 className="flex items-center gap-2 font-medium">
                        <Lock className="h-4 w-4" /> Seguridad de la cuenta
                      </h3>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <Label htmlFor="two-factor" className="flex-1">
                            Autenticación de dos factores
                          </Label>
                          <Switch id="two-factor" />
                        </div>
                        <div className="flex items-center justify-between">
                          <Label htmlFor="login-alerts" className="flex-1">
                            Alertas de inicio de sesión
                          </Label>
                          <Switch id="login-alerts" defaultChecked />
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border border-destructive/10 p-4">
                      <h3 className="flex items-center gap-2 font-medium text-destructive">
                        <Trash2 className="h-4 w-4" /> Eliminar cuenta
                      </h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Al eliminar tu cuenta, todos tus datos serán eliminados permanentemente. Esta acción no se puede
                        deshacer.
                      </p>
                      <Button variant="destructive" size="sm" className="mt-4">
                        Eliminar mi cuenta
                      </Button>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Guardar configuración</Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="billing" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Facturación y Pagos</CardTitle>
                  <CardDescription>Gestiona tus métodos de pago y facturación.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h3 className="flex items-center gap-2 font-medium">
                      <CreditCard className="h-4 w-4" /> Métodos de pago
                    </h3>
                    <div className="rounded-lg border p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-16 items-center justify-center rounded-md bg-primary/10">
                            <CreditCard className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <p className="font-medium">Visa terminada en 4242</p>
                            <p className="text-sm text-muted-foreground">Expira: 12/2025</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Editar
                          </Button>
                          <Button variant="outline" size="sm">
                            Eliminar
                          </Button>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="mt-2">
                      <CreditCard className="mr-2 h-4 w-4" /> Añadir método de pago
                    </Button>

                    <div className="mt-6 space-y-4">
                      <h3 className="font-medium">Historial de facturación</h3>
                      <div className="rounded-lg border">
                        <div className="grid grid-cols-4 border-b bg-muted/50 p-3 text-sm font-medium">
                          <div>Fecha</div>
                          <div>Descripción</div>
                          <div>Método</div>
                          <div>Importe</div>
                        </div>
                        {billingHistory.map((item, index) => (
                          <div key={index} className="grid grid-cols-4 border-b p-3 text-sm last:border-0">
                            <div>{item.date}</div>
                            <div>{item.description}</div>
                            <div>{item.method}</div>
                            <div>{item.amount}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-end">
                  <Button>Descargar facturas</Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

const billingHistory = [
  {
    date: "15/05/2024",
    description: "Curso de Desarrollo Web Completo",
    method: "Visa ****4242",
    amount: "$29.99",
  },
  {
    date: "10/04/2024",
    description: "Curso de Diseño UX/\
