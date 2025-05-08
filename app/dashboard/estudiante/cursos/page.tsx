import Link from "next/link"
import Image from "next/image"
import { Star, Clock, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StudentSidebar } from "@/components/student-sidebar"

export default function StudentCourses() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <StudentSidebar />
      <main className="flex-1 p-6 md:p-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col gap-4">
            <h1 className="text-3xl font-bold tracking-tight">Mis Cursos</h1>
            <p className="text-muted-foreground">Gestiona todos tus cursos y continúa tu aprendizaje.</p>
          </div>

          <Tabs defaultValue="in-progress" className="mb-8">
            <div className="mb-4 flex items-center justify-between">
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
                          Ver certificado
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
                        <h3 className="line-clamp-2 text-lg font-medium">{course.title}</h3>
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
