import Image from "next/image"
import Link from "next/link"
import { Star, Users, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function InstructoresPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Nuestros Instructores</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Aprende de los mejores expertos en sus campos, con experiencia real y pasión por enseñar
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {instructors.map((instructor) => (
          <Card key={instructor.name} className="h-full overflow-hidden transition-all hover:shadow-md">
            <CardHeader className="p-0">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={instructor.avatar || "/placeholder.svg"}
                  alt={instructor.name}
                  width={400}
                  height={400}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                />
                {instructor.featured && (
                  <Badge
                    className="absolute left-3 top-3 bg-primary text-primary-foreground hover:bg-primary/90"
                    variant="secondary"
                  >
                    Destacado
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="p-4">
              <div className="mb-2 text-center">
                <h3 className="text-xl font-bold">{instructor.name}</h3>
                <p className="text-sm text-muted-foreground">{instructor.title}</p>
              </div>
              <div className="mt-4 flex items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{instructor.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4 text-muted-foreground" />
                  <span>{instructor.students}</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4 text-muted-foreground" />
                  <span>{instructor.courses} cursos</span>
                </div>
              </div>
              <div className="mt-4 line-clamp-3 text-sm text-muted-foreground">{instructor.bio}</div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full" asChild>
                <Link href={`/instructores/${instructor.slug}`}>Ver perfil</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <div className="mt-12 rounded-lg bg-muted/50 p-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">¿Quieres convertirte en instructor?</h2>
            <p className="text-muted-foreground">
              Comparte tus conocimientos y experiencia con estudiantes de todo el mundo. Crea cursos en tu área de
              especialización y genera ingresos mientras ayudas a otros a aprender.
            </p>
            <div className="mt-2 space-y-2">
              <div className="flex items-start gap-2">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  ✓
                </div>
                <span>Alcanza a millones de estudiantes en todo el mundo</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  ✓
                </div>
                <span>Herramientas fáciles de usar para crear tu curso</span>
              </div>
              <div className="flex items-start gap-2">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  ✓
                </div>
                <span>Soporte y recursos para ayudarte a tener éxito</span>
              </div>
            </div>
            <div className="mt-4">
              <Button size="lg" asChild>
                <Link href="/conviertete-en-instructor">Comenzar a enseñar</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=300&width=400"
              alt="Conviértete en instructor"
              width={400}
              height={300}
              className="rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

const instructors = [
  {
    name: "Carlos Rodríguez",
    slug: "carlos-rodriguez",
    title: "Desarrollador Web Senior & Instructor",
    avatar: "/placeholder.svg?height=400&width=400",
    rating: 4.9,
    students: "45.2k",
    courses: 8,
    bio: "Desarrollador web con más de 10 años de experiencia. Ha trabajado en empresas como Google, Facebook y Amazon. Apasionado por enseñar y compartir conocimientos.",
    featured: true,
  },
  {
    name: "Laura Martínez",
    slug: "laura-martinez",
    title: "Diseñadora UX/UI & Consultora",
    avatar: "/placeholder.svg?height=400&width=400",
    rating: 4.8,
    students: "32.7k",
    courses: 5,
    bio: "Diseñadora con experiencia en grandes empresas tecnológicas. Especialista en diseño centrado en el usuario y creación de experiencias digitales intuitivas y atractivas.",
    featured: true,
  },
  {
    name: "Miguel Ángel López",
    slug: "miguel-angel-lopez",
    title: "Experto en Marketing Digital",
    avatar: "/placeholder.svg?height=400&width=400",
    rating: 4.9,
    students: "38.5k",
    courses: 6,
    bio: "Consultor de marketing digital con más de 15 años de experiencia. Ha ayudado a cientos de empresas a mejorar su presencia online y aumentar sus ventas.",
    featured: false,
  },
  {
    name: "Ana García",
    slug: "ana-garcia",
    title: "Científica de Datos & IA",
    avatar: "/placeholder.svg?height=400&width=400",
    rating: 4.7,
    students: "25.3k",
    courses: 4,
    bio: "PhD en Inteligencia Artificial con experiencia en investigación y aplicaciones prácticas. Especialista en machine learning y análisis de datos.",
    featured: false,
  },
  {
    name: "Roberto Sánchez",
    slug: "roberto-sanchez",
    title: "Fotógrafo Profesional",
    avatar: "/placeholder.svg?height=400&width=400",
    rating: 4.8,
    students: "29.8k",
    courses: 7,
    bio: "Fotógrafo con más de 20 años de experiencia en fotografía de paisajes, retratos y eventos. Ha publicado su trabajo en revistas de renombre internacional.",
    featured: false,
  },
  {
    name: "Elena Torres",
    slug: "elena-torres",
    title: "Profesora de Idiomas",
    avatar: "/placeholder.svg?height=400&width=400",
    rating: 4.9,
    students: "41.2k",
    courses: 9,
    bio: "Políglota con dominio de 5 idiomas. Especialista en métodos de enseñanza efectivos para aprender idiomas rápidamente y de forma natural.",
    featured: true,
  },
  {
    name: "Javier Méndez",
    slug: "javier-mendez",
    title: "Científico de Datos & Python",
    avatar: "/placeholder.svg?height=400&width=400",
    rating: 4.8,
    students: "33.7k",
    courses: 5,
    bio: "Experto en Python y análisis de datos con experiencia en grandes empresas tecnológicas. Apasionado por hacer que la ciencia de datos sea accesible para todos.",
    featured: false,
  },
  {
    name: "Patricia Vega",
    slug: "patricia-vega",
    title: "Asesora Financiera",
    avatar: "/placeholder.svg?height=400&width=400",
    rating: 4.7,
    students: "22.5k",
    courses: 4,
    bio: "Asesora financiera certificada con experiencia en planificación financiera personal y empresarial. Especialista en inversiones y libertad financiera.",
    featured: false,
  },
]
