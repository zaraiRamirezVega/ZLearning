"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { StudentSidebar } from "@/components/student-sidebar"
import { Plus, Search, Edit2, Trash2, Tag, MoreVertical } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"

export default function StudentNotes() {
  const [activeNote, setActiveNote] = useState(notes[0])

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <StudentSidebar />
      <main className="flex-1 p-6 md:p-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Notas</h1>
              <p className="text-muted-foreground">Organiza tus apuntes y notas de estudio.</p>
            </div>
            <Button>
              <Plus className="mr-2 h-4 w-4" /> Nueva nota
            </Button>
          </div>

          <div className="grid h-[calc(100vh-220px)] grid-cols-1 gap-6 md:grid-cols-[300px_1fr]">
            <Card className="flex flex-col">
              <CardHeader className="p-4">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Buscar notas..." className="pl-8" />
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-0">
                <ScrollArea className="h-[calc(100vh-300px)]">
                  <div className="space-y-1 p-2">
                    {notes.map((note) => (
                      <button
                        key={note.id}
                        className={`flex w-full flex-col items-start gap-1 rounded-lg p-3 text-left transition-colors hover:bg-accent ${
                          activeNote.id === note.id ? "bg-accent" : ""
                        }`}
                        onClick={() => setActiveNote(note)}
                      >
                        <div className="flex w-full items-center justify-between">
                          <h3 className="font-medium">{note.title}</h3>
                          <span className="text-xs text-muted-foreground">{note.date}</span>
                        </div>
                        <p className="line-clamp-2 text-sm text-muted-foreground">{note.content}</p>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {note.tags.map((tag, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </button>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardHeader className="border-b p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Input
                      value={activeNote.title}
                      className="border-none p-0 text-xl font-semibold shadow-none focus-visible:ring-0"
                    />
                    <CardDescription>
                      Última edición: {activeNote.date} · Curso: {activeNote.course}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Tag className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Edit2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-4">
                <Textarea
                  value={activeNote.content}
                  className="min-h-[calc(100vh-380px)] resize-none border-none p-0 shadow-none focus-visible:ring-0"
                />
              </CardContent>
              <CardFooter className="border-t p-4">
                <div className="flex items-center justify-between w-full">
                  <div className="flex flex-wrap gap-1">
                    {activeNote.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button>Guardar cambios</Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

const notes = [
  {
    id: 1,
    title: "React Hooks - useEffect y useState",
    content:
      "Los hooks de React son funciones que permiten usar características de React en componentes funcionales. Los más comunes son:\n\n- useState: Para manejar estado local en componentes funcionales\n- useEffect: Para manejar efectos secundarios (similar a lifecycle methods)\n- useContext: Para acceder al contexto\n- useReducer: Para manejar estados complejos\n- useRef: Para mantener referencias mutables\n\nEjemplo de useEffect con dependencias:\n\nuseEffect(() => {\n  // Este código se ejecuta cuando cambia la dependencia\n  console.log('El valor cambió:', valor);\n}, [valor]);",
    date: "Hoy, 10:30",
    tags: ["React", "Hooks", "JavaScript"],
    course: "Desarrollo Web Completo",
  },
  {
    id: 2,
    title: "Principios de diseño UX/UI",
    content:
      "Principios fundamentales de diseño UX/UI:\n\n1. Jerarquía visual: Organizar elementos por importancia\n2. Consistencia: Mantener patrones coherentes\n3. Feedback: Proporcionar respuesta a las acciones del usuario\n4. Simplicidad: Eliminar elementos innecesarios\n5. Accesibilidad: Diseñar para todos los usuarios\n\nHeurísticas de Nielsen:\n- Visibilidad del estado del sistema\n- Coincidencia entre el sistema y el mundo real\n- Control y libertad del usuario\n- Consistencia y estándares\n- Prevención de errores",
    date: "Ayer",
    tags: ["UX", "UI", "Diseño"],
    course: "Diseño UX/UI",
  },
  {
    id: 3,
    title: "Estrategias de SEO para 2024",
    content:
      "Estrategias SEO efectivas:\n\n- Optimización para búsqueda por voz\n- Contenido E-A-T (Expertise, Authoritativeness, Trustworthiness)\n- Core Web Vitals y experiencia de usuario\n- Contenido optimizado para featured snippets\n- SEO local para negocios físicos\n- Optimización para móviles\n- Estrategia de backlinks de calidad\n\nHerramientas recomendadas:\n- Google Search Console\n- Google Analytics 4\n- SEMrush\n- Ahrefs\n- Screaming Frog",
    date: "15/05/2024",
    tags: ["SEO", "Marketing", "Digital"],
    course: "Marketing Digital",
  },
  {
    id: 4,
    title: "Patrones de diseño en JavaScript",
    content:
      "Patrones de diseño comunes en JavaScript:\n\n1. Singleton: Garantiza una única instancia de una clase\n2. Factory: Crea objetos sin especificar la clase exacta\n3. Observer: Define una dependencia uno a muchos entre objetos\n4. Module: Encapsula código relacionado\n5. Prototype: Crea objetos basados en un prototipo\n\nEjemplo de patrón Module:\n\nconst module = (function() {\n  const private = 'No puedo ser accedido desde fuera';\n  \n  return {\n    public: 'Puedo ser accedido',\n    getPrivate: function() {\n      return private;\n    }\n  };\n})();",
    date: "10/05/2024",
    tags: ["JavaScript", "Patrones", "Diseño"],
    course: "JavaScript Moderno",
  },
]
