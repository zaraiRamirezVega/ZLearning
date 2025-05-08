import type { Metadata } from "next"
import Link from "next/link"
import { InstructorSidebar } from "@/components/instructor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ChevronLeft, Edit2, Eye, Settings, Users, Star, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "Detalles del Curso | Instructor Dashboard",
  description: "Gestiona los detalles de tu curso",
}

export default function CourseDetailsPage({ params }) {
  // En un caso real, obtendríamos los datos del curso de una API o base de datos
  const course = courses.find((c) => c.slug === params.slug) || {
    title: "Curso no encontrado",
    slug: params.slug,
    status: "draft",
    students: 0,
    lessons: 0,
    rating: 0,
    reviews: 0,
    questions: 0,
    description: "",
    lastUpdated: "",
  }

  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <InstructorSidebar />
        <main className="flex-1 p-6 lg:p-8">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <Button variant="ghost" size="sm" asChild>
                <Link href="/dashboard/instructor/cursos">
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Volver a cursos
                </Link>
              </Button>
              <Badge variant={course.status === "published" ? "default" : "secondary"} className="ml-auto">
                {course.status === "published" ? "Publicado" : "Borrador"}
              </Badge>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">{course.title}</h1>
                <p className="text-muted-foreground mt-1">Última actualización: {course.lastUpdated}</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="gap-1">
                  <Eye className="h-4 w-4" />
                  Previsualizar
                </Button>
                <Button size="sm" className="gap-1">
                  <Edit2 className="h-4 w-4" />
                  Editar curso
                </Button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 mb-6">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Estudiantes</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{course.students}</div>
                <p className="text-xs text-muted-foreground mt-1">
                  {course.students > 0
                    ? `${course.studentsActive} activos recientemente`
                    : "Aún no hay estudiantes inscritos"}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Valoración</CardTitle>
                <Star className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{course.rating > 0 ? course.rating.toFixed(1) : "-"}</div>
                <p className="text-xs text-muted-foreground mt-1">{course.reviews} reseñas en total</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Preguntas</CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{course.questions}</div>
                <p className="text-xs text-muted-foreground mt-1">{course.questionsPending} pendientes de respuesta</p>
              </CardContent>
            </Card>
          </div>

          <Tabs defaultValue="content">
            <TabsList className="mb-4">
              <TabsTrigger value="content">Contenido</TabsTrigger>
              <TabsTrigger value="students">Estudiantes</TabsTrigger>
              <TabsTrigger value="questions">Preguntas</TabsTrigger>
              <TabsTrigger value="reviews">Reseñas</TabsTrigger>
              <TabsTrigger value="settings">Configuración</TabsTrigger>
            </TabsList>

            <TabsContent value="content">
              <Card>
                <CardHeader>
                  <CardTitle>Estructura del curso</CardTitle>
                  <CardDescription>Organiza las secciones y lecciones de tu curso</CardDescription>
                </CardHeader>
                <CardContent>
                  {course.sections && course.sections.length > 0 ? (
                    <div className="space-y-4">
                      {course.sections.map((section, index) => (
                        <div key={index} className="border rounded-lg overflow-hidden">
                          <div className="bg-muted px-4 py-3 font-medium flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span>Sección {index + 1}:</span>
                              <span>{section.title}</span>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Settings className="h-4 w-4" />
                            </Button>
                          </div>
                          <div className="divide-y">
                            {section.lessons.map((lesson, lessonIndex) => (
                              <div key={lessonIndex} className="px-4 py-3 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                  <span className="text-sm text-muted-foreground">{lessonIndex + 1}.</span>
                                  <span className="text-sm">{lesson.title}</span>
                                </div>
                                <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <p className="text-muted-foreground mb-4">Aún no has añadido contenido a este curso</p>
                      <Button>Añadir primera sección</Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="students">
              <Card>
                <CardHeader>
                  <CardTitle>Estudiantes inscritos</CardTitle>
                  <CardDescription>Lista de estudiantes matriculados en tu curso</CardDescription>
                </CardHeader>
                <CardContent>
                  {course.students > 0 ? (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">
                        Información detallada de estudiantes disponible en esta sección
                      </p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <p className="text-muted-foreground mb-2">Aún no hay estudiantes inscritos en este curso</p>
                      <p className="text-sm text-muted-foreground mb-4">
                        Una vez que publiques tu curso y los estudiantes se inscriban, podrás ver sus detalles aquí.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="questions">
              <Card>
                <CardHeader>
                  <CardTitle>Preguntas de estudiantes</CardTitle>
                  <CardDescription>Gestiona las preguntas de tus estudiantes</CardDescription>
                </CardHeader>
                <CardContent>
                  {course.questions > 0 ? (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">Preguntas de estudiantes disponibles en esta sección</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <p className="text-muted-foreground">Aún no hay preguntas de estudiantes</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews">
              <Card>
                <CardHeader>
                  <CardTitle>Reseñas y valoraciones</CardTitle>
                  <CardDescription>Reseñas que los estudiantes han dejado en tu curso</CardDescription>
                </CardHeader>
                <CardContent>
                  {course.reviews > 0 ? (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">Reseñas de estudiantes disponibles en esta sección</p>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <p className="text-muted-foreground">Aún no hay reseñas para este curso</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card>
                <CardHeader>
                  <CardTitle>Configuración del curso</CardTitle>
                  <CardDescription>Administra la configuración y visibilidad de tu curso</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">
                      Opciones de configuración del curso disponibles en esta sección
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

const courses = [
  {
    title: "Desarrollo Web Completo",
    slug: "desarrollo-web-completo",
    status: "published",
    students: 1254,
    studentsActive: 432,
    lessons: 65,
    rating: 4.8,
    reviews: 347,
    questions: 89,
    questionsPending: 12,
    description: "Aprende desarrollo web desde cero con este curso completo",
    lastUpdated: "15/04/2023",
    sections: [
      {
        title: "Introducción al Desarrollo Web",
        lessons: [
          { title: "Bienvenida al curso", duration: "5:12" },
          { title: "¿Qué es el desarrollo web?", duration: "10:45" },
          { title: "Herramientas necesarias", duration: "15:20" },
        ],
      },
      {
        title: "HTML Básico",
        lessons: [
          { title: "Estructura básica HTML", duration: "12:34" },
          { title: "Etiquetas principales", duration: "18:25" },
          { title: "Formularios", duration: "20:10" },
          { title: "Tablas", duration: "15:45" },
        ],
      },
      {
        title: "CSS Fundamentos",
        lessons: [
          { title: "Sintaxis CSS", duration: "8:30" },
          { title: "Selectores", duration: "14:20" },
          { title: "Modelo de caja", duration: "16:55" },
          { title: "Flexbox", duration: "22:40" },
          { title: "Grid", duration: "25:12" },
        ],
      },
    ],
  },
  {
    title: "JavaScript Moderno",
    slug: "javascript-moderno",
    status: "published",
    students: 863,
    studentsActive: 215,
    lessons: 48,
    rating: 4.5,
    reviews: 192,
    questions: 43,
    questionsPending: 5,
    description: "Domina JavaScript moderno y sus nuevas características",
    lastUpdated: "22/05/2023",
    sections: [
      {
        title: "Fundamentos de JavaScript",
        lessons: [
          { title: "Variables y tipos de datos", duration: "14:30" },
          { title: "Operadores", duration: "12:15" },
          { title: "Estructuras de control", duration: "18:40" },
        ],
      },
      {
        title: "Funciones en JavaScript",
        lessons: [
          { title: "Declaración de funciones", duration: "10:22" },
          { title: "Funciones flecha", duration: "15:18" },
          { title: "Callbacks", duration: "20:05" },
        ],
      },
    ],
  },
  {
    title: "React y Redux",
    slug: "react-redux",
    status: "published",
    students: 721,
    studentsActive: 310,
    lessons: 36,
    rating: 4.7,
    reviews: 158,
    questions: 67,
    questionsPending: 8,
    description: "Crea aplicaciones web modernas con React y Redux",
    lastUpdated: "10/03/2023",
    sections: [
      {
        title: "Introducción a React",
        lessons: [
          { title: "¿Qué es React?", duration: "8:45" },
          { title: "Configuración del entorno", duration: "12:30" },
          { title: "JSX", duration: "15:10" },
        ],
      },
      {
        title: "Componentes en React",
        lessons: [
          { title: "Componentes funcionales", duration: "14:20" },
          { title: "Componentes de clase", duration: "16:35" },
          { title: "Props y estado", duration: "22:15" },
        ],
      },
    ],
  },
]
