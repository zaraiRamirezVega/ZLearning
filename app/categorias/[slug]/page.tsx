import Link from "next/link"
import Image from "next/image"
import { Star, Clock, Users, BookOpen, Filter, ChevronLeft, ChevronRight, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Checkbox } from "@/components/ui/checkbox"

export default function CategoriaPage({ params }: { params: { slug: string } }) {
  // En una aplicación real, obtendríamos los datos de la categoría y cursos desde una API o base de datos
  const categorySlug = params.slug

  // Encontrar la categoría actual
  const currentCategory = categories.find((cat) => cat.slug === categorySlug) || {
    title: "Categoría",
    description: "Descripción de la categoría",
    courses: 0,
  }

  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/categorias">
              <ChevronLeft className="h-4 w-4" /> Categorías
            </Link>
          </Button>
        </div>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{currentCategory.title}</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">{currentCategory.description}</p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="sticky top-20 rounded-lg border p-4">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-medium">Filtros</h2>
              <Button variant="ghost" size="sm" className="h-auto p-0 text-primary">
                Limpiar todo
              </Button>
            </div>

            <div className="space-y-4">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input type="search" placeholder="Buscar cursos..." className="w-full pl-8" />
              </div>

              <Accordion type="multiple" defaultValue={["level", "price", "rating"]}>
                <AccordionItem value="level">
                  <AccordionTrigger>Nivel</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {levels.map((level) => (
                        <div key={level.value} className="flex items-center space-x-2">
                          <Checkbox id={`level-${level.value}`} />
                          <label
                            htmlFor={`level-${level.value}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {level.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="price">
                  <AccordionTrigger>Precio</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {prices.map((price) => (
                        <div key={price.value} className="flex items-center space-x-2">
                          <Checkbox id={`price-${price.value}`} />
                          <label
                            htmlFor={`price-${price.value}`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {price.label}
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="rating">
                  <AccordionTrigger>Calificación</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-2">
                      {ratings.map((rating) => (
                        <div key={rating.value} className="flex items-center space-x-2">
                          <Checkbox id={`rating-${rating.value}`} />
                          <label
                            htmlFor={`rating-${rating.value}`}
                            className="flex items-center text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            <div className="flex items-center">
                              {Array.from({ length: rating.value }).map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              ))}
                              {Array.from({ length: 5 - rating.value }).map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-muted text-muted" />
                              ))}
                              <span className="ml-1">& más</span>
                            </div>
                          </label>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span className="text-sm font-medium">{currentCategory.courses} resultados</span>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Select defaultValue="relevance">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Ordenar por" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="relevance">Relevancia</SelectItem>
                  <SelectItem value="popular">Más populares</SelectItem>
                  <SelectItem value="newest">Más recientes</SelectItem>
                  <SelectItem value="price-low">Precio: Bajo a alto</SelectItem>
                  <SelectItem value="price-high">Precio: Alto a bajo</SelectItem>
                  <SelectItem value="rating">Mejor calificados</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="12">
                <SelectTrigger className="w-full sm:w-[180px]">
                  <SelectValue placeholder="Mostrar" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="12">12 por página</SelectItem>
                  <SelectItem value="24">24 por página</SelectItem>
                  <SelectItem value="36">36 por página</SelectItem>
                  <SelectItem value="48">48 por página</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((course) => (
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
                      {course.isBestseller && (
                        <Badge
                          className="absolute left-3 top-3 bg-yellow-500 text-primary-foreground hover:bg-yellow-500/90"
                          variant="secondary"
                        >
                          Más vendido
                        </Badge>
                      )}
                      {course.isNew && (
                        <Badge className="absolute left-3 top-3" variant="secondary">
                          Nuevo
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="mb-2 flex items-center gap-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{course.rating}</span>
                      <span className="text-xs text-muted-foreground">({course.reviews})</span>
                    </div>
                    <CardTitle className="line-clamp-2 text-lg">{course.title}</CardTitle>
                    <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <BookOpen className="h-4 w-4" />
                        <span>{course.lessons} lecciones</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        <span>{course.students}</span>
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
                    <Badge variant="outline" className="font-normal">
                      {course.level}
                    </Badge>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex justify-center">
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" disabled>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8">
                1
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8">
                2
              </Button>
              <Button variant="outline" size="sm" className="h-8 w-8">
                3
              </Button>
              <span className="mx-1">...</span>
              <Button variant="outline" size="sm" className="h-8 w-8">
                12
              </Button>
              <Button variant="outline" size="icon">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const categories = [
  {
    title: "Desarrollo Web",
    slug: "desarrollo-web",
    description: "Aprende a crear sitios web modernos con HTML, CSS, JavaScript y frameworks populares.",
    courses: 320,
  },
  {
    title: "Diseño Gráfico",
    slug: "diseno-grafico",
    description: "Domina herramientas de diseño y crea impresionantes gráficos, ilustraciones y más.",
    courses: 215,
  },
  {
    title: "Marketing Digital",
    slug: "marketing-digital",
    description: "Estrategias efectivas para promocionar productos y servicios en el mundo digital.",
    courses: 180,
  },
  {
    title: "Negocios",
    slug: "negocios",
    description: "Desarrolla habilidades empresariales y aprende a gestionar proyectos exitosos.",
    courses: 250,
  },
  {
    title: "Idiomas",
    slug: "idiomas",
    description: "Aprende nuevos idiomas con métodos efectivos y prácticos para todos los niveles.",
    courses: 120,
  },
  {
    title: "Música",
    slug: "musica",
    description: "Desde teoría musical hasta producción, aprende a tocar instrumentos y más.",
    courses: 95,
  },
  {
    title: "Fotografía",
    slug: "fotografia",
    description: "Técnicas profesionales para capturar momentos perfectos y editar tus fotos.",
    courses: 85,
  },
  {
    title: "Salud y Bienestar",
    slug: "salud-bienestar",
    description: "Mejora tu calidad de vida con cursos de nutrición, fitness y bienestar mental.",
    courses: 110,
  },
  {
    title: "Inteligencia Artificial",
    slug: "inteligencia-artificial",
    description: "Aprende sobre IA, machine learning y cómo aplicar estas tecnologías en proyectos reales.",
    courses: 75,
  },
  {
    title: "Diseño UX/UI",
    slug: "diseno-ux-ui",
    description: "Crea interfaces intuitivas y atractivas con principios de diseño centrado en el usuario.",
    courses: 90,
  },
]

const levels = [
  { label: "Principiante", value: "principiante" },
  { label: "Intermedio", value: "intermedio" },
  { label: "Avanzado", value: "avanzado" },
  { label: "Todos los niveles", value: "todos" },
]

const prices = [
  { label: "Gratis", value: "gratis" },
  { label: "De pago", value: "pago" },
  { label: "Menos de $20", value: "under-20" },
  { label: "$20 - $50", value: "20-50" },
  { label: "$50 - $100", value: "50-100" },
  { label: "Más de $100", value: "over-100" },
]

const ratings = [
  { label: "4.5 & más", value: 4.5 },
  { label: "4.0 & más", value: 4 },
  { label: "3.5 & más", value: 3.5 },
  { label: "3.0 & más", value: 3 },
]

const courses = [
  {
    title: "Desarrollo Web Completo: HTML, CSS, JavaScript, React y Node.js",
    slug: "desarrollo-web-completo",
    description: "Aprende a crear sitios web modernos desde cero hasta nivel avanzado.",
    image: "/placeholder.svg?height=300&width=500",
    rating: 4.8,
    reviews: 2345,
    duration: "42h",
    lessons: 120,
    students: "15.4k",
    level: "Todos los niveles",
    price: "$19.99",
    originalPrice: "$99.99",
    isBestseller: true,
    isNew: false,
    instructor: {
      name: "Carlos Rodríguez",
      avatar: "/placeholder.svg?height=24&width=24",
    },
  },
  {
    title: "Diseño UX/UI: Crea interfaces intuitivas y atractivas",
    slug: "diseno-ux-ui",
    description: "Domina el diseño de experiencia de usuario y crea interfaces modernas.",
    image: "/placeholder.svg?height=300&width=500",
    rating: 4.7,
    reviews: 1876,
    duration: "38h",
    lessons: 95,
    students: "12.8k",
    level: "Intermedio",
    price: "$24.99",
    originalPrice: "$129.99",
    isBestseller: false,
    isNew: true,
    instructor: {
      name: "Laura Martínez",
      avatar: "/placeholder.svg?height=24&width=24",
    },
  },
  {
    title: "Marketing Digital: Estrategias efectivas para el 2024",
    slug: "marketing-digital-2024",
    description: "Aprende las últimas técnicas de marketing digital para hacer crecer tu negocio.",
    image: "/placeholder.svg?height=300&width=500",
    rating: 4.9,
    reviews: 2103,
    duration: "35h",
    lessons: 85,
    students: "18.2k",
    level: "Principiante",
    price: "$18.99",
    originalPrice: "$89.99",
    isBestseller: true,
    isNew: false,
    instructor: {
      name: "Miguel Ángel López",
      avatar: "/placeholder.svg?height=24&width=24",
    },
  },
  {
    title: "Inteligencia Artificial y Machine Learning: Fundamentos prácticos",
    slug: "inteligencia-artificial-machine-learning",
    description: "Domina los conceptos básicos de IA y crea tus primeros modelos de aprendizaje automático.",
    image: "/placeholder.svg?height=300&width=500",
    rating: 4.6,
    reviews: 1542,
    duration: "48h",
    lessons: 110,
    students: "9.7k",
    level: "Avanzado",
    price: "$29.99",
    originalPrice: "$149.99",
    isBestseller: false,
    isNew: true,
    instructor: {
      name: "Ana García",
      avatar: "/placeholder.svg?height=24&width=24",
    },
  },
  {
    title: "Fotografía Profesional: De principiante a experto",
    slug: "fotografia-profesional",
    description: "Aprende a capturar imágenes impresionantes y domina la edición fotográfica.",
    image: "/placeholder.svg?height=300&width=500",
    rating: 4.7,
    reviews: 1876,
    duration: "32h",
    lessons: 75,
    students: "11.3k",
    level: "Todos los niveles",
    price: "$16.99",
    originalPrice: "$79.99",
    isBestseller: true,
    isNew: false,
    instructor: {
      name: "Roberto Sánchez",
      avatar: "/placeholder.svg?height=24&width=24",
    },
  },
  {
    title: "Inglés para Negocios: Comunicación efectiva internacional",
    slug: "ingles-negocios",
    description: "Mejora tus habilidades de inglés para el entorno profesional y de negocios.",
    image: "/placeholder.svg?height=300&width=500",
    rating: 4.8,
    reviews: 2210,
    duration: "28h",
    lessons: 65,
    students: "14.5k",
    level: "Intermedio",
    price: "$14.99",
    originalPrice: "$69.99",
    isBestseller: false,
    isNew: false,
    instructor: {
      name: "Elena Torres",
      avatar: "/placeholder.svg?height=24&width=24",
    },
  },
]
