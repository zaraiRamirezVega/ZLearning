import type { Metadata } from "next"
import { InstructorSidebar } from "@/components/instructor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Preguntas | Instructor Dashboard",
  description: "Gestiona las preguntas de tus estudiantes",
}

export default function QuestionsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <InstructorSidebar />
        <main className="flex-1 p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold tracking-tight">Preguntas</h1>
            <Badge variant="outline" className="gap-1 px-3 py-1 text-sm">
              <MessageCircle className="h-3.5 w-3.5" />
              {questions.length} pendientes
            </Badge>
          </div>

          <Tabs defaultValue="pending">
            <TabsList className="mb-4">
              <TabsTrigger value="pending">Pendientes</TabsTrigger>
              <TabsTrigger value="answered">Respondidas</TabsTrigger>
              <TabsTrigger value="all">Todas</TabsTrigger>
            </TabsList>

            <TabsContent value="pending" className="space-y-4">
              {questions
                .filter((q) => !q.answered)
                .map((question) => (
                  <QuestionCard key={question.id} question={question} />
                ))}
            </TabsContent>

            <TabsContent value="answered" className="space-y-4">
              {questions
                .filter((q) => q.answered)
                .map((question) => (
                  <QuestionCard key={question.id} question={question} />
                ))}
            </TabsContent>

            <TabsContent value="all" className="space-y-4">
              {questions.map((question) => (
                <QuestionCard key={question.id} question={question} />
              ))}
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

function QuestionCard({ question }) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start gap-4">
        <Avatar className="h-10 w-10">
          <AvatarImage src={question.student.avatar || "/placeholder.svg"} alt={question.student.name} />
          <AvatarFallback>{question.student.name.substring(0, 2)}</AvatarFallback>
        </Avatar>
        <div className="flex-1 space-y-1">
          <div className="flex items-center gap-2">
            <CardTitle className="text-base">{question.student.name}</CardTitle>
            {!question.answered && (
              <Badge variant="outline" className="rounded-sm px-1 text-[10px]">
                Nuevo
              </Badge>
            )}
          </div>
          <div className="flex flex-col sm:flex-row sm:items-center text-sm text-muted-foreground gap-2">
            <span>Curso: {question.course}</span>
            <span className="hidden sm:inline">•</span>
            <span>Lección: {question.lesson}</span>
            <span className="hidden sm:inline">•</span>
            <span>{question.date}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm">{question.content}</p>

        {question.answered && (
          <div className="mt-4 border-l-2 border-muted pl-4 py-2">
            <p className="text-xs font-medium mb-1">Tu respuesta:</p>
            <p className="text-sm">{question.answer}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="border-t px-6 py-4">
        {!question.answered ? (
          <div className="flex gap-2 w-full justify-end">
            <Button variant="outline">Marcar como leído</Button>
            <Button>Responder</Button>
          </div>
        ) : (
          <div className="flex gap-2 w-full justify-end">
            <Button variant="outline" size="sm">
              Editar respuesta
            </Button>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}

const questions = [
  {
    id: 1,
    student: {
      name: "Ana Martínez",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    course: "Desarrollo Web Completo",
    lesson: "CSS Grid y Flexbox",
    date: "Hace 2 horas",
    content:
      "Hola profesor, estoy teniendo problemas para entender la diferencia entre Grid y Flexbox. ¿Podría explicarme cuándo debería usar cada uno?",
    answered: false,
    answer: "",
  },
  {
    id: 2,
    student: {
      name: "Carlos Gómez",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    course: "JavaScript Moderno",
    lesson: "Promesas y Async/Await",
    date: "Hace 5 horas",
    content:
      "Estoy confundido sobre cuándo usar promesas y cuándo usar async/await. ¿Hay alguna regla general para decidir?",
    answered: false,
    answer: "",
  },
  {
    id: 3,
    student: {
      name: "Laura Torres",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    course: "React y Redux",
    lesson: "Hooks avanzados",
    date: "Ayer",
    content:
      "¿Podría dar más ejemplos prácticos de cómo usar useCallback y useMemo? Entiendo la teoría pero no estoy segura de cuándo aplicarlos en proyectos reales.",
    answered: true,
    answer:
      "¡Hola Laura! Claro que sí. useCallback y useMemo son hooks de optimización. useCallback memoriza funciones para evitar que se recreen en cada renderizado, útil cuando pasas funciones a componentes hijos optimizados. useMemo memoriza valores calculados, ideal para operaciones costosas. Por ejemplo, usa useCallback para manejadores de eventos pasados a componentes y useMemo para filtrar listas o hacer cálculos complejos. Añadí ejemplos adicionales en la sección de recursos del curso. ¡Revísalos y me comentas si tienes más dudas!",
  },
]
