import Link from "next/link"
import Image from "next/image"
import { Star, Clock, BookOpen, Award, Calendar, BarChart3, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { StudentSidebar } from "@/components/student-sidebar"

export default function StudentDashboard() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <StudentSidebar />
      <main className="flex-1 p-6 md:p-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col gap-4">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard del Estudiante</h1>
            <p className="text-muted-foreground">
              Bienvenido de nuevo, <span className="font-medium">María</span>. Continúa aprendiendo donde lo dejaste.
            </p>
          </div>

          <div className="mb-8 grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Cursos activos</CardDescription>
                <CardTitle className="text-2xl">5</CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={42} className="h-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Cursos completados</CardDescription>
                <CardTitle className="text-2xl">8</CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={100} className="h-2" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Certificados obtenidos</CardDescription>
                <CardTitle className="text-2xl">6</CardTitle>
              </CardHeader>
              <CardContent>
                <Progress value={75} className="h-2" />
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="in-progress" className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Mis cursos</h2>
              <TabsList>
                <TabsTrigger value="in-progress">En progreso</TabsTrigger>
                <TabsTrigger value="completed">Completados</TabsTrigger>
                <TabsTrigger value="saved">Guardados</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="in-progress" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {inProgressCourses.map((course) => (
                  <Link key={course.title} href={`/cursos/${course.slug}`}>
                    <Card className="h-full overflow-hidden transition-all hover:shadow-md">
                      <CardHeader className="p-0">
                        <div className="relative aspect-video overflow-hidden">
                          <Image
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            width={500}
                            height={300}
                            className="h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40 p-4 text-white">
                            <div className="flex h-full flex-col justify-between">
                              <div className="flex justify-end">
                                <Badge variant="secondary" className="bg-primary text-white">
                                  {course.progress}% Completado
                                </Badge>
                              </div>
                              <div>
                                <h3 className="line-clamp-2 text-lg font-bold">{course.title}</h3>
                                <div className="mt-1 flex items-center gap-2 text-sm">
                                  <Clock className="h-4 w-4" />
                                  <span>Última actividad: {course.lastActivity}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4">
                        <Progress value={course.progress} className="h-2 w-full" />
                        <div className="mt-4 flex items-center justify-between text-sm">
                          <span>
                            Módulo {course.currentModule} de {course.totalModules}
                          </span>
                          <span className="font-medium text-primary">{course.progress}%</span>
                        </div>
                        <div className="mt-2 text-sm text-muted-foreground">Próxima lección: {course.nextLesson}</div>
                      </CardContent>
                      <CardFooter className="p-4 pt-0">
                        <Button className="w-full">Continuar aprendiendo</Button>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="completed" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {completedCourses.map((course) => (
                  <Link key={course.title} href={`/cursos/${course.slug}`}>
                    <Card className="h-full overflow-hidden transition-all hover:shadow-md">
                      <CardHeader className="p-0">
                        <div className="relative aspect-video overflow-hidden">
                          <Image
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            width={500}
                            height={300}
                            className="h-full w-full object-cover"
                          />
                          <div className="absolute inset-0 bg-black/40 p-4 text-white">
                            <div className="flex h-full flex-col justify-between">
                              <div className="flex justify-end">
                                <Badge variant="secondary" className="bg-green-500 text-white">
                                  Completado
                                </Badge>
                              </div>
                              <h3 className="line-clamp-2 text-lg font-bold">{course.title}</h3>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm font-medium">{course.rating}</span>
                            <span className="text-xs text-muted-foreground">(Tu calificación)</span>
                          </div>
                          <div className="text-sm text-muted-foreground">Completado: {course.completionDate}</div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2 p-4 pt-0">
                        <Button variant="outline" className="flex-1">
                          <Award className="mr-2 h-4 w-4" /> Ver certificado
                        </Button>
                        <Button variant="outline" className="flex-1">
                          Revisar curso
                        </Button>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="saved" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {savedCourses.map((course) => (
                  <Link key={course.title} href={`/cursos/${course.slug}`}>
                    <Card className="h-full overflow-hidden transition-all hover:shadow-md">
                      <CardHeader className="p-0">
                        <div className="relative aspect-video overflow-hidden">
                          <Image
                            src={course.image || "/placeholder.svg"}
                            alt={course.title}
                            width={500}
                            height={300}
                            className="h-full w-full object-cover transition-transform hover:scale-105"
                          />
                        </div>
                      </CardHeader>
                      <CardContent className="p-4">
                        <CardTitle className="line-clamp-2 text-lg">{course.title}</CardTitle>
                        <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{course.duration}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <BookOpen className="h-4 w-4" />
                            <span>{course.lessons} lecciones</span>
                          </div>
                        </div>
                        <div className="mt-3 flex items-center gap-2">
                          <Image
                            src={course.instructor.avatar || "/placeholder.svg"}
                            alt={course.instructor.name}
                            width={24}
                            height={24}
                            className="rounded-full"
                          />
                          <span className="text-sm">{course.instructor.name}</span>
                        </div>
                      </CardContent>
                      <CardFooter className="flex items-center justify-between border-t p-4">
                        <div className="flex items-baseline gap-2">
                          <span className="text-lg font-bold">{course.price}</span>
                          {course.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">{course.originalPrice}</span>
                          )}
                        </div>
                        <Button>Inscribirse</Button>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Próximos eventos</CardTitle>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <Calendar className="h-4 w-4" /> Ver calendario
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {events.map((event, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 rounded-lg border p-3 transition-colors hover:bg-muted/50"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        {event.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium">{event.title}</h4>
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                        <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          <span>{event.date}</span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        Unirse
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Estadísticas de aprendizaje</CardTitle>
                  <Button variant="ghost" size="sm" className="gap-1">
                    <BarChart3 className="h-4 w-4" /> Ver detalles
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span>Horas de estudio esta semana</span>
                      <span className="font-medium">12.5 / 20 horas</span>
                    </div>
                    <Progress value={62.5} className="h-2" />
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span>Tareas completadas</span>
                      <span className="font-medium">8 / 12 tareas</span>
                    </div>
                    <Progress value={66.7} className="h-2" />
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span>Exámenes aprobados</span>
                      <span className="font-medium">5 / 6 exámenes</span>
                    </div>
                    <Progress value={83.3} className="h-2" />
                  </div>
                  <div>
                    <div className="mb-1 flex items-center justify-between text-sm">
                      <span>Participación en foros</span>
                      <span className="font-medium">12 comentarios</span>
                    </div>
                    <Progress value={60} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8">
            <Card>
              <CardHeader>
                <CardTitle>Certificados obtenidos</CardTitle>
                <CardDescription>Tus logros académicos y certificaciones profesionales</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {certificates.map((certificate, index) => (
                    <div key={index} className="flex flex-col rounded-lg border bg-card text-card-foreground shadow-sm">
                      <div className="relative aspect-[4/3] overflow-hidden rounded-t-lg">
                        <Image
                          src={certificate.image || "/placeholder.svg"}
                          alt={certificate.title}
                          width={400}
                          height={300}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                          <Award className="h-16 w-16 text-primary" />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col p-4">
                        <h4 className="line-clamp-2 font-medium">{certificate.title}</h4>
                        <p className="mt-1 text-sm text-muted-foreground">Expedido: {certificate.issueDate}</p>
                        <div className="mt-4 flex items-center gap-2">
                          <Button variant="outline" size="sm" className="flex-1">
                            Ver
                          </Button>
                          <Button size="sm" className="flex-1">
                            Descargar
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

const inProgressCourses = [
  {
    title: "Desarrollo Web Completo: HTML, CSS, JavaScript, React y Node.js",
    slug: "desarrollo-web-completo",
    image: "/placeholder.svg?height=300&width=500",
    progress: 65,
    currentModule: 8,
    totalModules: 12,
    nextLesson: "Introducción a React Hooks",
    lastActivity: "Ayer",
  },
  {
    title: "Diseño UX/UI: Crea interfaces intuitivas y atractivas",
    slug: "diseno-ux-ui",
    image: "/placeholder.svg?height=300&width=500",
    progress: 42,
    currentModule: 5,
    totalModules: 10,
    nextLesson: "Principios de usabilidad",
    lastActivity: "Hace 3 días",
  },
  {
    title: "Marketing Digital: Estrategias efectivas para el 2024",
    slug: "marketing-digital-2024",
    image: "/placeholder.svg?height=300&width=500",
    progress: 28,
    currentModule: 3,
    totalModules: 8,
    nextLesson: "SEO avanzado",
    lastActivity: "Hace 1 semana",
  },
]

const completedCourses = [
  {
    title: "Fotografía Profesional: De principiante a experto",
    slug: "fotografia-profesional",
    image: "/placeholder.svg?height=300&width=500",
    rating: 4.8,
    completionDate: "15/04/2024",
  },
  {
    title: "Inglés para Negocios: Comunicación efectiva internacional",
    slug: "ingles-negocios",
    image: "/placeholder.svg?height=300&width=500",
    rating: 5.0,
    completionDate: "02/03/2024",
  },
  {
    title: "Python para Ciencia de Datos y Análisis Estadístico",
    slug: "python-ciencia-datos",
    image: "/placeholder.svg?height=300&width=500",
    rating: 4.5,
    completionDate: "10/01/2024",
  },
]

const savedCourses = [
  {
    title: "Inteligencia Artificial y Machine Learning: Fundamentos prácticos",
    slug: "inteligencia-artificial-machine-learning",
    image: "/placeholder.svg?height=300&width=500",
    duration: "48h",
    lessons: 110,
    price: "$29.99",
    originalPrice: "$149.99",
    instructor: {
      name: "Ana García",
      avatar: "/placeholder.svg?height=24&width=24",
    },
  },
  {
    title: "Guitarra desde Cero: Aprende a tocar tus canciones favoritas",
    slug: "guitarra-desde-cero",
    image: "/placeholder.svg?height=300&width=500",
    duration: "36h",
    lessons: 82,
    price: "$15.99",
    originalPrice: "$84.99",
    instructor: {
      name: "Alejandro Gómez",
      avatar: "/placeholder.svg?height=24&width=24",
    },
  },
]

const events = [
  {
    title: "Webinar: Tendencias de Diseño Web 2024",
    description: "Aprende las últimas tendencias en diseño web con expertos de la industria.",
    date: "Mañana, 18:00 - 19:30",
    icon: <Calendar className="h-5 w-5" />,
  },
  {
    title: "Sesión de preguntas: JavaScript Avanzado",
    description: "Resuelve tus dudas sobre JavaScript con el instructor Carlos Rodríguez.",
    date: "Jueves, 17:00 - 18:00",
    icon: <BookOpen className="h-5 w-5" />,
  },
  {
    title: "Taller práctico: Diseño Responsive",
    description: "Taller práctico para implementar diseños responsive en tus proyectos web.",
    date: "Sábado, 10:00 - 12:00",
    icon: <CheckCircle2 className="h-5 w-5" />,
  },
]

const certificates = [
  {
    title: "Desarrollo Web Fullstack",
    issueDate: "15/12/2023",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Diseño UX/UI Profesional",
    issueDate: "20/10/2023",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Marketing Digital Avanzado",
    issueDate: "05/08/2023",
    image: "/placeholder.svg?height=300&width=400",
  },
]
