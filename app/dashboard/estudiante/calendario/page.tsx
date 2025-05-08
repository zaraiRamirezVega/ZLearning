import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { StudentSidebar } from "@/components/student-sidebar"
import { Clock, Video, BookOpen, Users } from "lucide-react"

export default function StudentCalendar() {
  const today = new Date()

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <StudentSidebar />
      <main className="flex-1 p-6 md:p-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col gap-4">
            <h1 className="text-3xl font-bold tracking-tight">Calendario</h1>
            <p className="text-muted-foreground">Organiza tus clases, eventos y fechas importantes.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-[1fr_300px]">
            <Card>
              <CardHeader>
                <CardTitle>Calendario de Eventos</CardTitle>
                <CardDescription>Visualiza tus clases y eventos programados</CardDescription>
              </CardHeader>
              <CardContent>
                <Calendar
                  mode="single"
                  selected={today}
                  className="rounded-md border"
                  classNames={{
                    day_today: "bg-primary text-primary-foreground font-bold",
                    day_selected: "bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground",
                  }}
                />
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Eventos de hoy</CardTitle>
                  <CardDescription>{today.toLocaleDateString()}</CardDescription>
                </CardHeader>
                <CardContent>
                  {todayEvents.length > 0 ? (
                    <div className="space-y-4">
                      {todayEvents.map((event, index) => (
                        <div key={index} className="flex items-start gap-3 rounded-lg border p-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                            {event.icon}
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium">{event.title}</h4>
                            <p className="text-sm text-muted-foreground">{event.description}</p>
                            <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                              <Clock className="h-3 w-3" />
                              <span>{event.time}</span>
                            </div>
                          </div>
                          <Button size="sm">Unirse</Button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-8 text-center">
                      <p className="text-muted-foreground">No tienes eventos programados para hoy</p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Próximos eventos</CardTitle>
                  <CardDescription>Eventos programados para los próximos días</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                      <div key={index} className="flex items-start gap-3 rounded-lg border p-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          {event.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{event.title}</h4>
                          <div className="mt-1 flex items-center gap-2 text-xs">
                            <Badge variant="outline" className="text-xs">
                              {event.date}
                            </Badge>
                            <span className="text-muted-foreground">{event.time}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

const todayEvents = [
  {
    title: "Clase en vivo: JavaScript Avanzado",
    description: "Aprende sobre promesas, async/await y más",
    time: "16:00 - 17:30",
    icon: <Video className="h-5 w-5" />,
  },
  {
    title: "Entrega de proyecto: Diseño UX/UI",
    description: "Fecha límite para entregar el proyecto final",
    time: "23:59",
    icon: <BookOpen className="h-5 w-5" />,
  },
]

const upcomingEvents = [
  {
    title: "Webinar: Tendencias de Diseño Web 2024",
    date: "Mañana",
    time: "18:00 - 19:30",
    icon: <Users className="h-5 w-5" />,
  },
  {
    title: "Sesión de preguntas: JavaScript Avanzado",
    date: "Jueves",
    time: "17:00 - 18:00",
    icon: <Video className="h-5 w-5" />,
  },
  {
    title: "Taller práctico: Diseño Responsive",
    date: "Sábado",
    time: "10:00 - 12:00",
    icon: <BookOpen className="h-5 w-5" />,
  },
]
