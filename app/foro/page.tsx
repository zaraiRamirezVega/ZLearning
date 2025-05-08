import Link from "next/link"
import Image from "next/image"
import { MessageSquare, Eye, Clock, Search, PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ForoPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Foro de la Comunidad</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Conecta con otros estudiantes, comparte conocimientos y resuelve dudas
        </p>
      </div>

      <div className="mt-8 flex flex-col gap-6 md:flex-row">
        <div className="w-full md:w-3/4">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input type="search" placeholder="Buscar en el foro..." className="pl-9" />
            </div>
            <div className="flex gap-2">
              <Select defaultValue="recientes">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="recientes">Más recientes</SelectItem>
                  <SelectItem value="populares">Más populares</SelectItem>
                  <SelectItem value="respondidos">Respondidos</SelectItem>
                  <SelectItem value="sin-respuesta">Sin respuesta</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <PlusCircle className="mr-2 h-4 w-4" /> Nuevo tema
              </Button>
            </div>
          </div>

          <Tabs defaultValue="todos">
            <TabsList className="mb-6 grid w-full grid-cols-5">
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="preguntas">Preguntas</TabsTrigger>
              <TabsTrigger value="recursos">Recursos</TabsTrigger>
              <TabsTrigger value="anuncios">Anuncios</TabsTrigger>
            </TabsList>

            <TabsContent value="todos" className="mt-0">
              <div className="space-y-4">
                {forumTopics.map((topic) => (
                  <Link key={topic.id} href={`/foro/${topic.id}`}>
                    <Card className="transition-all hover:shadow-md">
                      <CardHeader className="p-4 pb-2">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-3">
                            <Image
                              src={topic.author.avatar || "/placeholder.svg"}
                              alt={topic.author.name}
                              width={40}
                              height={40}
                              className="rounded-full"
                            />
                            <div>
                              <CardTitle className="text-lg">{topic.title}</CardTitle>
                              <div className="mt-1 flex items-center gap-2 text-xs text-muted-foreground">
                                <span>{topic.author.name}</span>
                                <span>•</span>
                                <span>
                                  <Clock className="mr-1 inline h-3 w-3" />
                                  {topic.postedAt}
                                </span>
                              </div>
                            </div>
                          </div>
                          <Badge variant={getBadgeVariant(topic.category)}>{topic.category}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="p-4 pt-2">
                        <p className="line-clamp-2 text-sm text-muted-foreground">{topic.excerpt}</p>
                      </CardContent>
                      <CardFooter className="border-t p-4">
                        <div className="flex w-full items-center justify-between text-sm">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-1">
                              <MessageSquare className="h-4 w-4 text-muted-foreground" />
                              <span>{topic.replies} respuestas</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="h-4 w-4 text-muted-foreground" />
                              <span>{topic.views} vistas</span>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            {topic.solved && (
                              <Badge variant="success" className="bg-green-500 text-white">
                                Resuelto
                              </Badge>
                            )}
                            {topic.pinned && <Badge variant="outline">Destacado</Badge>}
                          </div>
                        </div>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="general" className="mt-0">
              <div className="flex items-center justify-center p-8 text-muted-foreground">
                Mostrando temas de la categoría General
              </div>
            </TabsContent>

            <TabsContent value="preguntas" className="mt-0">
              <div className="flex items-center justify-center p-8 text-muted-foreground">
                Mostrando temas de la categoría Preguntas
              </div>
            </TabsContent>

            <TabsContent value="recursos" className="mt-0">
              <div className="flex items-center justify-center p-8 text-muted-foreground">
                Mostrando temas de la categoría Recursos
              </div>
            </TabsContent>

            <TabsContent value="anuncios" className="mt-0">
              <div className="flex items-center justify-center p-8 text-muted-foreground">
                Mostrando temas de la categoría Anuncios
              </div>
            </TabsContent>
          </Tabs>

          <div className="mt-8 flex justify-center">
            <Button variant="outline">Cargar más temas</Button>
          </div>
        </div>

        <div className="w-full md:w-1/4">
          <div className="space-y-6">
            <Card>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg">Estadísticas del foro</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-2">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Temas</span>
                    <span className="font-medium">1,245</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Respuestas</span>
                    <span className="font-medium">8,763</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Usuarios</span>
                    <span className="font-medium">15,432</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg">Usuarios más activos</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-2">
                <div className="space-y-3">
                  {activeUsers.map((user) => (
                    <div key={user.name} className="flex items-center gap-3">
                      <Image
                        src={user.avatar || "/placeholder.svg"}
                        alt={user.name}
                        width={32}
                        height={32}
                        className="rounded-full"
                      />
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-xs text-muted-foreground">{user.posts} publicaciones</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/comunidad">Ver comunidad</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="p-4 pb-2">
                <CardTitle className="text-lg">Temas populares</CardTitle>
              </CardHeader>
              <CardContent className="p-4 pt-2">
                <div className="space-y-2">
                  {popularTopics.map((topic) => (
                    <Link key={topic} href={`/foro/buscar?q=${encodeURIComponent(topic)}`} className="block">
                      <Badge variant="outline" className="mr-1">
                        #
                      </Badge>
                      <span className="text-sm hover:underline">{topic}</span>
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

function getBadgeVariant(category: string) {
  switch (category) {
    case "Pregunta":
      return "default"
    case "Recurso":
      return "secondary"
    case "Anuncio":
      return "destructive"
    case "General":
    default:
      return "outline"
  }
}

const forumTopics = [
  {
    id: "1",
    title: "¿Cómo implementar autenticación con JWT en React y Node.js?",
    excerpt:
      "Estoy creando una aplicación web con React y Node.js, y necesito implementar un sistema de autenticación seguro. He investigado sobre JWT (JSON Web Tokens) pero tengo dudas sobre cómo implementarlo correctamente...",
    author: {
      name: "Laura Pérez",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    category: "Pregunta",
    postedAt: "Hace 2 horas",
    replies: 8,
    views: 124,
    solved: true,
    pinned: false,
  },
  {
    id: "2",
    title: "Recursos gratuitos para aprender diseño UX/UI",
    excerpt:
      "He recopilado una lista de recursos gratuitos que me han ayudado mucho a aprender diseño UX/UI. Incluye tutoriales, herramientas, plantillas y más. Espero que les sea útil a los que están comenzando...",
    author: {
      name: "Miguel Sánchez",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    category: "Recurso",
    postedAt: "Hace 1 día",
    replies: 15,
    views: 342,
    solved: false,
    pinned: true,
  },
  {
    id: "3",
    title: "Nuevo curso de Python para Ciencia de Datos disponible",
    excerpt:
      "Nos complace anunciar el lanzamiento de nuestro nuevo curso 'Python para Ciencia de Datos'. Este curso cubre desde los fundamentos de Python hasta técnicas avanzadas de análisis de datos y machine learning...",
    author: {
      name: "Admin",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    category: "Anuncio",
    postedAt: "Hace 3 días",
    replies: 12,
    views: 567,
    solved: false,
    pinned: true,
  },
  {
    id: "4",
    title: "Consejos para mejorar el rendimiento de aplicaciones React",
    excerpt:
      "Después de trabajar en varias aplicaciones React a gran escala, he recopilado algunos consejos que me han ayudado a mejorar significativamente el rendimiento. Comparto mis experiencias y mejores prácticas...",
    author: {
      name: "Carlos Rodríguez",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    category: "General",
    postedAt: "Hace 5 días",
    replies: 23,
    views: 789,
    solved: false,
    pinned: false,
  },
  {
    id: "5",
    title: "¿Cuál es la mejor manera de aprender inglés técnico?",
    excerpt:
      "Como desarrollador no nativo de inglés, a veces encuentro difícil entender la documentación técnica y participar en comunidades en inglés. ¿Alguien tiene consejos o recursos para mejorar el inglés técnico?",
    author: {
      name: "Ana Rodríguez",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    category: "Pregunta",
    postedAt: "Hace 1 semana",
    replies: 19,
    views: 432,
    solved: true,
    pinned: false,
  },
]

const activeUsers = [
  {
    name: "Carlos Rodríguez",
    avatar: "/placeholder.svg?height=32&width=32",
    posts: 245,
  },
  {
    name: "Laura Martínez",
    avatar: "/placeholder.svg?height=32&width=32",
    posts: 187,
  },
  {
    name: "Miguel Sánchez",
    avatar: "/placeholder.svg?height=32&width=32",
    posts: 156,
  },
  {
    name: "Ana García",
    avatar: "/placeholder.svg?height=32&width=32",
    posts: 132,
  },
  {
    name: "Roberto Sánchez",
    avatar: "/placeholder.svg?height=32&width=32",
    posts: 98,
  },
]

const popularTopics = [
  "react",
  "javascript",
  "python",
  "diseño-ux",
  "machine-learning",
  "desarrollo-web",
  "marketing-digital",
  "freelance",
  "carrera-profesional",
  "certificaciones",
]
