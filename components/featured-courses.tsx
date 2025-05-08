import Link from "next/link"
import Image from "next/image"
import { Star, Clock, Users, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function FeaturedCourses() {
  return (
    <section className="container space-y-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Cursos destacados</h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Descubre nuestros cursos más populares y mejor valorados
        </p>
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

      <div className="flex justify-center">
        <Button size="lg" asChild>
          <Link href="/cursos">Ver todos los cursos</Link>
        </Button>
      </div>
    </section>
  )
}

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
