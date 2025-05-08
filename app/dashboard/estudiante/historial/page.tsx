import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { StudentSidebar } from "@/components/student-sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Clock, BookOpen, Award, CheckCircle2, Video } from "lucide-react"

export default function StudentHistory() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <StudentSidebar />
      <main className="flex-1 p-6 md:p-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col gap-4">
            <h1 className="text-3xl font-bold tracking-tight">Historial de Aprendizaje</h1>
            <p className="text-muted-foreground">Revisa tu actividad reciente y progreso en la plataforma.</p>
          </div>

          <Tabs defaultValue="activity" className="mb-8">
            <TabsList className="mb-4">
              <TabsTrigger value="activity">Actividad reciente</TabsTrigger>
              <TabsTrigger value="completed">Lecciones completadas</TabsTrigger>
              <TabsTrigger value="achievements">Logros</TabsTrigger>
            </TabsList>

            <TabsContent value="activity" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Actividad reciente</CardTitle>
                  <CardDescription>Tu actividad en los últimos 30 días</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {activityHistory.map((day, dayIndex) => (
                      <div key={dayIndex}>
                        <h3 className="mb-3 font-medium">{day.date}</h3>
                        <div className="space-y-3">
                          {day.activities.map((activity, actIndex) => (
                            <div key={actIndex} className="flex items-start gap-3 rounded-lg border p-3">
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                {activity.icon}
                              </div>
                              <div>
                                <p className="font-medium">{activity.title}</p>
                                <p className="text-sm text-muted-foreground">{activity.description}</p>
                                <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                                  <Clock className="h-3 w-3" />
                                  <span>{activity.time}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="completed" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Lecciones completadas</CardTitle>
                  <CardDescription>Todas las lecciones que has completado</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {completedLessons.map((course, courseIndex) => (
                      <div key={courseIndex}>
                        <h3 className="mb-3 font-medium">{course.title}</h3>
                        <div className="space-y-2">
                          {course.lessons.map((lesson, lessonIndex) => (
                            <div key={lessonIndex} className="flex items-center gap-3 rounded-lg border p-3">
                              <CheckCircle2 className="h-5 w-5 text-green-500" />
                              <div className="flex-1">
                                <p>{lesson.title}</p>
                                <p className="text-sm text-muted-foreground">Módulo {lesson.module}</p>
                              </div>
                              <div className="text-sm text-muted-foreground">{lesson.completedDate}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="achievements" className="mt-0">
              <Card>
                <CardHeader>
                  <CardTitle>Logros</CardTitle>
                  <CardDescription>Tus logros y reconocimientos en la plataforma</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex flex-col items-center rounded-lg border p-4 text-center">
                        <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                          {achievement.icon}
                        </div>
                        <h3 className="mb-1 font-medium">{achievement.title}</h3>
                        <p className="mb-2 text-sm text-muted-foreground">{achievement.description}</p>
                        <p className="text-xs text-muted-foreground">Obtenido: {achievement.date}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

const activityHistory = [
  {
    date: "Hoy",
    activities: [
      {
        icon: <Video className="h-5 w-5" />,
        title: "Viste una lección",
        description: "JavaScript Moderno: Promesas y Async/Await",
        time: "Hace 2 horas",
      },
      {
        icon: <CheckCircle2 className="h-5 w-5" />,
        title: "Completaste un quiz",
        description: "JavaScript Moderno: Quiz de Promesas",
        time: "Hace 1 hora",
      },
    ],
  },
  {
    date: "Ayer",
    activities: [
      {
        icon: <BookOpen className="h-5 w-5" />,
        title: "Comenzaste un nuevo curso",
        description: "React y Redux: Aplicaciones en tiempo real",
        time: "10:30 AM",
      },
      {
        icon: <Video className="h-5 w-5" />,
        title: "Viste una lección",
        description: "React y Redux: Introducción a React",
        time: "11:45 AM",
      },
    ],
  },
  {
    date: "Lunes, 15 de Mayo",
    activities: [
      {
        icon: <Award className="h-5 w-5" />,
        title: "Obtuviste un certificado",
        description: "Diseño UX/UI Profesional",
        time: "3:15 PM",
      },
    ],
  },
]

const completedLessons = [
  {
    title: "JavaScript Moderno: Guía completa con ES6+",
    lessons: [
      {
        title: "Introducción a ES6",
        module: 1,
        completedDate: "12/05/2024",
      },
      {
        title: "Let y Const",
        module: 1,
        completedDate: "12/05/2024",
      },
      {
        title: "Arrow Functions",
        module: 1,
        completedDate: "13/05/2024",
      },
      {
        title: "Template Strings",
        module: 1,
        completedDate: "13/05/2024",
      },
      {
        title: "Destructuring",
        module: 2,
        completedDate: "14/05/2024",
      },
    ],
  },
  {
    title: "Diseño UX/UI Profesional",
    lessons: [
      {
        title: "Principios de diseño UX",
        module: 1,
        completedDate: "05/05/2024",
      },
      {
        title: "Investigación de usuarios",
        module: 1,
        completedDate: "06/05/2024",
      },
      {
        title: "Wireframing",
        module: 2,
        completedDate: "07/05/2024",
      },
    ],
  },
]

const achievements = [
  {
    icon: <Award className="h-8 w-8" />,
    title: "Primer certificado",
    description: "Completaste tu primer curso y obtuviste un certificado",
    date: "10/01/2024",
  },
  {
    icon: <CheckCircle2 className="h-8 w-8" />,
    title: "Estudiante dedicado",
    description: "Completaste 5 cursos en la plataforma",
    date: "15/03/2024",
  },
  {
    icon: <Clock className="h-8 w-8" />,
    title: "Maratón de aprendizaje",
    description: "Estudiaste más de 10 horas en una semana",
    date: "02/04/2024",
  },
  {
    icon: <BookOpen className="h-8 w-8" />,
    title: "Explorador",
    description: "Te inscribiste en cursos de 3 categorías diferentes",
    date: "20/04/2024",
  },
  {
    icon: <Video className="h-8 w-8" />,
    title: "Espectador ávido",
    description: "Viste más de 50 lecciones en video",
    date: "05/05/2024",
  },
]
