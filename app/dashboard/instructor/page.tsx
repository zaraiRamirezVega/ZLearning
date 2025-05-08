import Image from "next/image"
import { BarChart3, BookOpen, DollarSign, Download, FileEdit, MessageSquare, Plus, Star, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { InstructorSidebar } from "@/components/instructor-sidebar"

export default function InstructorDashboard() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <InstructorSidebar />
      <main className="flex-1 p-6 md:p-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col gap-4">
            <h1 className="text-3xl font-bold tracking-tight">Dashboard del Instructor</h1>
            <p className="text-muted-foreground">
              Bienvenido de nuevo, <span className="font-medium">Carlos</span>. Gestiona tus cursos y revisa tus
              estadísticas.
            </p>
          </div>

          <div className="mb-8 grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Estudiantes totales</CardDescription>
                <CardTitle className="text-2xl">12,543</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">
                  <span className="text-green-500">↑ 12%</span> desde el mes pasado
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Ingresos totales</CardDescription>
                <CardTitle className="text-2xl">$24,853</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">
                  <span className="text-green-500">↑ 8%</span> desde el mes pasado
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Calificación promedio</CardDescription>
                <CardTitle className="flex items-center gap-1 text-2xl">
                  4.8
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">Basado en 3,245 reseñas</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardDescription>Cursos publicados</CardDescription>
                <CardTitle className="text-2xl">8</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-xs text-muted-foreground">
                  <span className="text-primary">+2</span> en desarrollo
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-8 grid gap-8 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Rendimiento de cursos</CardTitle>
                <CardDescription>Estudiantes inscritos en los últimos 30 días</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] w-full bg-muted/50 flex items-center justify-center">
                  <BarChart3 className="h-16 w-16 text-muted-foreground/50" />
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Ingresos mensuales</CardTitle>
                <CardDescription>Ingresos generados en los últimos 6 meses</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] w-full bg-muted/50 flex items-center justify-center">
                  <BarChart3 className="h-16 w-16 text-muted-foreground/50" />
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Mis cursos</h2>
              <Button>
                <Plus className="mr-2 h-4 w-4" /> Crear nuevo curso
              </Button>
            </div>

            <Tabs defaultValue="published">
              <TabsList className="mb-4">
                <TabsTrigger value="published">Publicados</TabsTrigger>
                <TabsTrigger value="draft">Borradores</TabsTrigger>
                <TabsTrigger value="review">En revisión</TabsTrigger>
              </TabsList>

              <TabsContent value="published" className="mt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {publishedCourses.map((course) => (
                    <Card key={course.title} className="h-full overflow-hidden">
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
                                  Publicado
                                </Badge>
                              </div>
                              <h3 className="line-clamp-2 text-lg font-bold">{course.title}</h3>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex flex-col">
                            <span className="text-xs text-muted-foreground">Estudiantes</span>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4 text-primary" />
                              <span className="font-medium">{course.students}</span>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs text-muted-foreground">Calificación</span>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span className="font-medium">{course.rating}</span>
                              <span className="text-xs text-muted-foreground">({course.reviews})</span>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs text-muted-foreground">Ingresos</span>
                            <div className="flex items-center gap-1">
                              <DollarSign className="h-4 w-4 text-green-500" />
                              <span className="font-medium">{course.revenue}</span>
                            </div>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-xs text-muted-foreground">Preguntas</span>
                            <div className="flex items-center gap-1">
                              <MessageSquare className="h-4 w-4 text-primary" />
                              <span className="font-medium">{course.questions}</span>
                              {course.newQuestions > 0 && (
                                <Badge variant="secondary" className="ml-1 bg-primary text-white">
                                  +{course.newQuestions}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2 p-4 pt-0">
                        <Button variant="outline" className="flex-1">
                          <FileEdit className="mr-2 h-4 w-4" /> Editar
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <BarChart3 className="mr-2 h-4 w-4" /> Estadísticas
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="draft" className="mt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {draftCourses.map((course) => (
                    <Card key={course.title} className="h-full overflow-hidden">
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
                                <Badge variant="secondary" className="bg-muted text-foreground">
                                  Borrador
                                </Badge>
                              </div>
                              <h3 className="line-clamp-2 text-lg font-bold">{course.title}</h3>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="mb-4">
                          <div className="mb-1 flex items-center justify-between text-sm">
                            <span>Progreso del curso</span>
                            <span className="font-medium">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-muted-foreground" />
                            <span>
                              {course.completedLessons} de {course.totalLessons} lecciones completadas
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FileEdit className="h-4 w-4 text-muted-foreground" />
                            <span>Última edición: {course.lastEdited}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2 p-4 pt-0">
                        <Button className="flex-1">
                          <FileEdit className="mr-2 h-4 w-4" /> Continuar editando
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="review" className="mt-0">
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {reviewCourses.map((course) => (
                    <Card key={course.title} className="h-full overflow-hidden">
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
                                <Badge variant="secondary" className="bg-yellow-500 text-white">
                                  En revisión
                                </Badge>
                              </div>
                              <h3 className="line-clamp-2 text-lg font-bold">{course.title}</h3>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4">
                        <div className="mb-4">
                          <div className="mb-1 flex items-center justify-between text-sm">
                            <span>Estado de revisión</span>
                            <span className="font-medium">{course.reviewStatus}</span>
                          </div>
                          <Progress value={course.reviewProgress} className="h-2" />
                        </div>
                        <div className="space-y-1 text-sm">
                          <div className="flex items-center gap-2">
                            <BookOpen className="h-4 w-4 text-muted-foreground" />
                            <span>
                              {course.totalLessons} lecciones | {course.totalHours} horas
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <FileEdit className="h-4 w-4 text-muted-foreground" />
                            <span>Enviado para revisión: {course.submittedDate}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex gap-2 p-4 pt-0">
                        <Button variant="outline" className="flex-1">
                          <FileEdit className="mr-2 h-4 w-4" /> Ver detalles
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <MessageSquare className="mr-2 h-4 w-4" /> Contactar revisor
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          <div className="mb-8">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Informes financieros</CardTitle>
                    <CardDescription>Resumen de tus ingresos y transacciones recientes</CardDescription>
                  </div>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" /> Descargar informes
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="rounded-lg border">
                  <div className="grid grid-cols-4 border-b bg-muted/50 p-3 text-sm font-medium">
                    <div>Mes</div>
                    <div>Ingresos</div>
                    <div>Estudiantes</div>
                    <div>Comisión</div>
                  </div>
                  {financialReports.map((report, index) => (
                    <div key={index} className="grid grid-cols-4 border-b p-3 text-sm last:border-0">
                      <div>{report.month}</div>
                      <div>${report.revenue.toLocaleString()}</div>
                      <div>{report.students}</div>
                      <div>${report.commission.toLocaleString()}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle>Preguntas recientes</CardTitle>
                <CardDescription>Preguntas de estudiantes que requieren tu atención</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {questions.map((question, index) => (
                    <div key={index} className="rounded-lg border p-4 transition-colors hover:bg-muted/50">
                      <div className="mb-2 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Image
                            src={question.student.avatar || "/placeholder.svg"}
                            alt={question.student.name}
                            width={32}
                            height={32}
                            className="rounded-full"
                          />
                          <span className="font-medium">{question.student.name}</span>
                        </div>
                        <div className="text-xs text-muted-foreground">{question.time}</div>
                      </div>
                      <p className="mb-2 text-sm">{question.text}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-xs text-muted-foreground">Curso: {question.course}</div>
                        <Button size="sm">Responder</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  Ver todas las preguntas
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

const publishedCourses = [
  {
    title: "Desarrollo Web Completo: HTML, CSS, JavaScript, React y Node.js",
    image: "/placeholder.svg?height=300&width=500",
    students: "5,432",
    rating: 4.8,
    reviews: 1245,
    revenue: "$12,543",
    questions: 87,
    newQuestions: 12,
  },
  {
    title: "JavaScript Moderno: Guía completa con ES6+",
    image: "/placeholder.svg?height=300&width=500",
    students: "3,876",
    rating: 4.9,
    reviews: 987,
    revenue: "$8,765",
    questions: 54,
    newQuestions: 5,
  },
  {
    title: "React y Redux: Aplicaciones en tiempo real",
    image: "/placeholder.svg?height=300&width=500",
    students: "2,543",
    rating: 4.7,
    reviews: 654,
    revenue: "$5,432",
    questions: 42,
    newQuestions: 0,
  },
]

const draftCourses = [
  {
    title: "Node.js: Autenticación con JWT y OAuth",
    image: "/placeholder.svg?height=300&width=500",
    progress: 75,
    completedLessons: 18,
    totalLessons: 24,
    lastEdited: "Ayer",
  },
  {
    title: "TypeScript para desarrolladores de JavaScript",
    image: "/placeholder.svg?height=300&width=500",
    progress: 45,
    completedLessons: 9,
    totalLessons: 20,
    lastEdited: "Hace 3 días",
  },
]

const reviewCourses = [
  {
    title: "GraphQL: API modernas con Apollo Server",
    image: "/placeholder.svg?height=300&width=500",
    reviewStatus: "En proceso",
    reviewProgress: 60,
    totalLessons: 32,
    totalHours: 18,
    submittedDate: "15/04/2024",
  },
]

const financialReports = [
  {
    month: "Abril 2024",
    revenue: 4532,
    students: 245,
    commission: 1133,
  },
  {
    month: "Marzo 2024",
    revenue: 5876,
    students: 312,
    commission: 1469,
  },
  {
    month: "Febrero 2024",
    revenue: 4123,
    students: 198,
    commission: 1031,
  },
  {
    month: "Enero 2024",
    revenue: 6543,
    students: 354,
    commission: 1636,
  },
]

const questions = [
  {
    student: {
      name: "Laura Pérez",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    time: "Hace 2 horas",
    text: "Hola profesor, estoy teniendo problemas con la implementación de Redux en mi proyecto. ¿Podría explicar nuevamente cómo conectar las acciones con los reducers?",
    course: "React y Redux: Aplicaciones en tiempo real",
  },
  {
    student: {
      name: "Miguel Sánchez",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    time: "Hace 5 horas",
    text: "No entiendo bien cómo funcionan las promesas en JavaScript. ¿Podría dar un ejemplo más detallado de cómo manejar errores con async/await?",
    course: "JavaScript Moderno: Guía completa con ES6+",
  },
  {
    student: {
      name: "Ana Rodríguez",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    time: "Ayer",
    text: "¿Cuál es la mejor manera de implementar autenticación en una aplicación de React? ¿Recomienda usar JWT o OAuth?",
    course: "Desarrollo Web Completo: HTML, CSS, JavaScript, React y Node.js",
  },
]
