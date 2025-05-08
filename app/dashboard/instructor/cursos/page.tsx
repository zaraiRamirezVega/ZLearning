import type { Metadata } from "next"
import { InstructorSidebar } from "@/components/instructor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Plus, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Mis Cursos | Instructor Dashboard",
  description: "Gestiona tus cursos como instructor",
}

export default function InstructorCoursesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <InstructorSidebar />
        <main className="flex-1 p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold tracking-tight">Mis Cursos</h1>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              Nuevo Curso
            </Button>
          </div>

          <Tabs defaultValue="activos">
            <TabsList className="mb-4">
              <TabsTrigger value="activos">Activos</TabsTrigger>
              <TabsTrigger value="borradores">Borradores</TabsTrigger>
              <TabsTrigger value="archivados">Archivados</TabsTrigger>
            </TabsList>

            <TabsContent value="activos" className="space-y-4">
              {activeCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </TabsContent>

            <TabsContent value="borradores" className="space-y-4">
              {draftCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </TabsContent>

            <TabsContent value="archivados" className="space-y-4">
              <p className="text-muted-foreground text-center py-12">No tienes cursos archivados.</p>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

function CourseCard({ course }) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>{course.title}</CardTitle>
        <CardDescription>{course.category}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between text-sm mb-2">
          <div className="flex items-center gap-1">
            <BookOpen className="h-4 w-4 text-muted-foreground" />
            <span>{course.lessons} lecciones</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4 text-muted-foreground" />
            <span>{course.students} estudiantes</span>
          </div>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full" style={{ width: `${course.completion}%` }} />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between pt-3">
        <Button variant="outline" size="sm">
          Previsualizar
        </Button>
        <Button size="sm">Editar</Button>
      </CardFooter>
    </Card>
  )
}

const activeCourses = [
  {
    id: 1,
    title: "Desarrollo Web Completo",
    category: "Desarrollo Web",
    lessons: 65,
    students: 1254,
    completion: 100,
  },
  {
    id: 2,
    title: "JavaScript Moderno",
    category: "Programación",
    lessons: 48,
    students: 863,
    completion: 100,
  },
  {
    id: 3,
    title: "React y Redux",
    category: "Desarrollo Frontend",
    lessons: 36,
    students: 721,
    completion: 100,
  },
]

const draftCourses = [
  {
    id: 4,
    title: "Introducción a Next.js 14",
    category: "Desarrollo Frontend",
    lessons: 10,
    students: 0,
    completion: 60,
  },
  {
    id: 5,
    title: "Tailwind CSS Masterclass",
    category: "CSS",
    lessons: 8,
    students: 0,
    completion: 35,
  },
]
