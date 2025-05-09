import Image from "next/image"
import {
  BookOpen,
  Calendar,
  CheckCircle2,
  Clock,
  FileText,
  Globe,
  GraduationCap,
  Languages,
  Play,
  Star,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function CoursePage({ params }: { params: { slug: string } }) {
  // En una aplicación real, obtendríamos los datos del curso desde una API o base de datos
  const course = {
    title: "Desarrollo Web Completo: HTML, CSS, JavaScript, React y Node.js",
    slug: "desarrollo-web-completo",
    description:
      "Aprende desarrollo web desde cero hasta un nivel avanzado. Este curso completo cubre todas las tecnologías necesarias para convertirte en un desarrollador web fullstack, incluyendo HTML, CSS, JavaScript, React, Node.js, Express y MongoDB.",
    image: "/placeholder.svg?height=500&width=800",
    rating: 4.8,
    reviews: 2345,
    students: "15.4k",
    lastUpdated: "Abril 2024",
    duration: "42 horas",
    lessons: 120,
    level: "Todos los niveles",
    price: "$19.99",
    originalPrice: "$99.99",
    language: "Español",
    certificate: true,
    instructor: {
      name: "Carlos Rodríguez",
      avatar: "/placeholder.svg?height=100&width=100",
      title: "Desarrollador Web Senior & Instructor",
      bio: "Desarrollador web con más de 10 años de experiencia. Ha trabajado en empresas como Google, Facebook y Amazon. Apasionado por enseñar y compartir conocimientos.",
      courses: 8,
      students: "45.2k",
      rating: 4.9,
    },
    whatYouWillLearn: [
      "Crear sitios web responsivos con HTML5 y CSS3",
      "Programar con JavaScript moderno (ES6+)",
      "Desarrollar aplicaciones web interactivas con React",
      "Construir APIs RESTful con Node.js y Express",
      "Trabajar con bases de datos MongoDB",
      "Implementar autenticación de usuarios con JWT",
      "Desplegar aplicaciones web en la nube",
      "Utilizar Git para control de versiones",
    ],
    requirements: [
      "No se requiere experiencia previa en programación",
      "Computadora con conexión a internet",
      "Ganas de aprender y practicar",
    ],
    modules: [
      {
        title: "Introducción al Desarrollo Web",
        lessons: [
          {
            title: "Bienvenida al curso",
            duration: "5:23",
            isFree: true,
          },
          {
            title: "¿Qué es el desarrollo web?",
            duration: "10:15",
            isFree: true,
          },
          {
            title: "Frontend vs Backend",
            duration: "8:42",
            isFree: false,
          },
          {
            title: "Configuración del entorno de desarrollo",
            duration: "15:30",
            isFree: false,
          },
        ],
      },
      {
        title: "HTML5 - Estructura de Sitios Web",
        lessons: [
          {
            title: "Introducción a HTML",
            duration: "12:18",
            isFree: false,
          },
          {
            title: "Etiquetas básicas",
            duration: "18:45",
            isFree: false,
          },
          {
            title: "Formularios y validación",
            duration: "22:10",
            isFree: false,
          },
          {
            title: "HTML semántico",
            duration: "15:33",
            isFree: false,
          },
          {
            title: "Proyecto: Estructura de un sitio web",
            duration: "35:20",
            isFree: false,
          },
        ],
      },
      {
        title: "CSS3 - Estilizando Sitios Web",
        lessons: [
          {
            title: "Introducción a CSS",
            duration: "14:22",
            isFree: false,
          },
          {
            title: "Selectores y propiedades",
            duration: "20:15",
            isFree: false,
          },
          {
            title: "Modelo de caja",
            duration: "16:40",
            isFree: false,
          },
          {
            title: "Flexbox y Grid",
            duration: "28:55",
            isFree: false,
          },
          {
            title: "Responsive Design",
            duration: "25:18",
            isFree: false,
          },
          {
            title: "Proyecto: Estilizando nuestro sitio web",
            duration: "40:12",
            isFree: false,
          },
        ],
      },
      {
        title: "JavaScript - Programación Web",
        lessons: [
          {
            title: "Introducción a JavaScript",
            duration: "15:30",
            isFree: false,
          },
          {
            title: "Variables, tipos de datos y operadores",
            duration: "22:45",
            isFree: false,
          },
          {
            title: "Estructuras de control",
            duration: "18:20",
            isFree: false,
          },
          {
            title: "Funciones y scope",
            duration: "25:10",
            isFree: false,
          },
          {
            title: "Arrays y objetos",
            duration: "28:35",
            isFree: false,
          },
          {
            title: "DOM y eventos",
            duration: "32:15",
            isFree: false,
          },
          {
            title: "Asincronía: Callbacks, Promesas y Async/Await",
            duration: "35:40",
            isFree: false,
          },
          {
            title: "Proyecto: Aplicación web interactiva",
            duration: "45:22",
            isFree: false,
          },
        ],
      },
      {
        title: "React - Desarrollo de Interfaces Modernas",
        lessons: [
          {
            title: "Introducción a React",
            duration: "18:45",
            isFree: false,
          },
          {
            title: "Componentes y props",
            duration: "25:30",
            isFree: false,
          },
          {
            title: "Estado y ciclo de vida",
            duration: "28:15",
            isFree: false,
          },
          {
            title: "Hooks",
            duration: "32:40",
            isFree: false,
          },
          {
            title: "Manejo de formularios",
            duration: "24:18",
            isFree: false,
          },
          {
            title: "Enrutamiento con React Router",
            duration: "30:22",
            isFree: false,
          },
          {
            title: "Gestión de estado con Context API y Redux",
            duration: "38:15",
            isFree: false,
          },
          {
            title: "Proyecto: Aplicación React completa",
            duration: "55:30",
            isFree: false,
          },
        ],
      },
      {
        title: "Node.js y Express - Desarrollo Backend",
        lessons: [
          {
            title: "Introducción a Node.js",
            duration: "20:15",
            isFree: false,
          },
          {
            title: "Módulos y npm",
            duration: "22:30",
            isFree: false,
          },
          {
            title: "Creación de un servidor con Express",
            duration: "28:45",
            isFree: false,
          },
          {
            title: "Rutas y middleware",
            duration: "25:18",
            isFree: false,
          },
          {
            title: "Conexión a MongoDB",
            duration: "30:22",
            isFree: false,
          },
          {
            title: "Creación de una API RESTful",
            duration: "35:40",
            isFree: false,
          },
          {
            title: "Autenticación con JWT",
            duration: "32:15",
            isFree: false,
          },
          {
            title: "Proyecto: API completa para nuestra aplicación",
            duration: "50:30",
            isFree: false,
          },
        ],
      },
      {
        title: "Proyecto Final - Aplicación Fullstack",
        lessons: [
          {
            title: "Planificación del proyecto",
            duration: "25:18",
            isFree: false,
          },
          {
            title: "Configuración del entorno",
            duration: "20:30",
            isFree: false,
          },
          {
            title: "Desarrollo del backend",
            duration: "45:15",
            isFree: false,
          },
          {
            title: "Desarrollo del frontend",
            duration: "50:22",
            isFree: false,
          },
          {
            title: "Integración frontend-backend",
            duration: "35:40",
            isFree: false,
          },
          {
            title: "Testing y depuración",
            duration: "28:15",
            isFree: false,
          },
          {
            title: "Despliegue en la nube",
            duration: "32:30",
            isFree: false,
          },
          {
            title: "Conclusiones y próximos pasos",
            duration: "15:45",
            isFree: false,
          },
        ],
      },
    ],
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <div className="bg-muted/40">
        <div className="container py-8 md:py-12">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Desarrollo Web</Badge>
                <Badge variant="outline">JavaScript</Badge>
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">Node.js</Badge>
              </div>
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                {course.title}
              </h1>
              <p className="text-muted-foreground">{course.description}</p>
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{course.rating}</span>
                  <span className="text-muted-foreground">({course.reviews} reseñas)</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{course.students} estudiantes</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>Actualizado {course.lastUpdated}</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={course.instructor.avatar || "/placeholder.svg"} alt={course.instructor.name} />
                  <AvatarFallback>CR</AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-medium">{course.instructor.name}</div>
                  <div className="text-xs text-muted-foreground">{course.instructor.title}</div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <div className="relative aspect-video overflow-hidden rounded-lg border shadow-sm">
                <Image
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  width={800}
                  height={500}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                  <Button size="lg" className="gap-2 rounded-full">
                    <Play className="h-5 w-5 fill-white" /> Ver introducción
                  </Button>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex items-baseline gap-2">
                  <span className="text-3xl font-bold">{course.price}</span>
                  <span className="text-lg text-muted-foreground line-through">{course.originalPrice}</span>
                  <Badge className="ml-2 bg-green-500 text-white">80% descuento</Badge>
                </div>
                <div className="mb-4 text-sm text-muted-foreground">
                  <span className="font-medium">¡Oferta por tiempo limitado!</span> Termina en 2 días
                </div>
                <div className="space-y-4">
                  <Button size="lg" className="w-full">Comprar ahora</Button>
                  <Button variant="outline" size="lg" className="w-full">Añadir al carrito</Button>
                </div>
                <div className="mt-6 text-center text-xs text-muted-foreground">
                  Garantía de devolución de 30 días
                </div>
                <div className="mt-6 space-y-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{course.duration} de contenido en video</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BookOpen className="h-4 w-4 text-muted-foreground" />
                    <span>{course.lessons} lecciones</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <GraduationCap className="h-4 w-4 text-muted-foreground" />
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Languages className="h-4 w-4 text-muted-foreground" />
                    <span>{course.language}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Globe className="h-4 w-4 text-muted-foreground" />
                    <span>Acceso de por vida</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span>Certificado de finalización</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      {/* Course Content */}
      <div className="container py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <Tabs defaultValue="content">
              <TabsList className="mb-6 grid w-full grid-cols-4">
                <TabsTrigger value="content">Contenido</TabsTrigger>
                <TabsTrigger value="overview">Descripción</TabsTrigger>
                <TabsTrigger value="instructor">Instructor</TabsTrigger>
                <TabsTrigger value="reviews">Reseñas</TabsTrigger>
              </TabsList>
  
              {/* Content Tab */}
              <TabsContent value="content" className="mt-0">
                <div className="rounded-lg border">
                  <div className="flex items-center justify-between border-b bg-muted/50 p-4">
                    <h2 className="text-lg font-medium">Contenido del curso</h2>
                    <div className="text-sm text-muted-foreground">
                      {course.modules.length} módulos • {course.lessons} lecciones • {course.duration}
                    </div>
                  </div>
                  <Accordion type="multiple" className="w-full">
                    {course.modules.map((module, moduleIndex) => (
                      <AccordionItem key={moduleIndex} value={`module-${moduleIndex}`}>
                        <AccordionTrigger className="px-4 py-3 hover:no-underline">
                          <div className="flex flex-1 items-center justify-between pr-4 text-left">
                            <div>
                              <span className="font-medium">{module.title}</span>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {module.lessons.length} lecciones
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-0 pb-0 pt-0">
                          <div className="divide-y border-t">
                            {module.lessons.map((lesson, lessonIndex) => (
                              <div key={lessonIndex} className="flex items-center justify-between p-4 hover:bg-muted/50">
                                <div className="flex items-center gap-3">
                                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <Play className="h-4 w-4" />
                                  </div>
                                  <div>
                                    <div className="font-medium">{lesson.title}</div>
                                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                      <Clock className="h-3 w-3" />
                                      <span>{lesson.duration}</span>
                                    </div>
                                  </div>
                                </div>
                                {lesson.isFree && (
                                  <Badge variant="outline" className="ml-auto">
                                    Gratis
                                  </Badge>
                                )}
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </TabsContent>
  
              {/* Overview Tab */}
              <TabsContent value="overview" className="mt-0 space-y-6">
                <div>
                  <h2 className="mb-4 text-xl font-semibold">Lo que aprenderás</h2>
                  <div className="grid gap-2 sm:grid-cols-2">
                    {course.whatYouWillLearn.map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-green-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
  
                <div>
                  <h2 className="mb-4 text-xl font-semibold">Requisitos</h2>
                  <ul className="list-inside list-disc space-y-2">
                    {course.requirements.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
  
                <div>
                  <h2 className="mb-4 text-xl font-semibold">Descripción</h2>
                  <div className="space-y-4">
                    <p>
                      Este curso completo de desarrollo web te llevará desde los conceptos básicos hasta las técnicas avanzadas utilizadas por los desarrolladores profesionales...
                    </p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
    ) 
  }

