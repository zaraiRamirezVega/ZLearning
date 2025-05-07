import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CategoriasPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Categorías</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Explora todas nuestras categorías y encuentra el curso perfecto para ti
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <Link key={category.title} href={`/categorias/${category.slug}`}>
            <Card className="h-full overflow-hidden transition-all hover:shadow-md">
              <CardHeader className="p-0">
                <div className="aspect-video overflow-hidden">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    width={400}
                    height={225}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-4">
                <CardTitle className="line-clamp-1 text-lg">{category.title}</CardTitle>
                <CardDescription className="line-clamp-2 mt-2">{category.description}</CardDescription>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <div className="flex w-full items-center justify-between text-sm">
                  <span className="text-muted-foreground">{category.courses} cursos</span>
                  <span className="flex items-center gap-1 font-medium text-primary">
                    Ver cursos <ChevronRight className="h-3 w-3" />
                  </span>
                </div>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}

const categories = [
  {
    title: "Desarrollo Web",
    slug: "desarrollo-web",
    description: "Aprende a crear sitios web modernos con HTML, CSS, JavaScript y frameworks populares.",
    image: "/placeholder.svg?height=225&width=400",
    courses: 320,
  },
  {
    title: "Diseño Gráfico",
    slug: "diseno-grafico",
    description: "Domina herramientas de diseño y crea impresionantes gráficos, ilustraciones y más.",
    image: "/placeholder.svg?height=225&width=400",
    courses: 215,
  },
  {
    title: "Marketing Digital",
    slug: "marketing-digital",
    description: "Estrategias efectivas para promocionar productos y servicios en el mundo digital.",
    image: "/placeholder.svg?height=225&width=400",
    courses: 180,
  },
  {
    title: "Negocios",
    slug: "negocios",
    description: "Desarrolla habilidades empresariales y aprende a gestionar proyectos exitosos.",
    image: "/placeholder.svg?height=225&width=400",
    courses: 250,
  },
  {
    title: "Idiomas",
    slug: "idiomas",
    description: "Aprende nuevos idiomas con métodos efectivos y prácticos para todos los niveles.",
    image: "/placeholder.svg?height=225&width=400",
    courses: 120,
  },
  {
    title: "Música",
    slug: "musica",
    description: "Desde teoría musical hasta producción, aprende a tocar instrumentos y más.",
    image: "/placeholder.svg?height=225&width=400",
    courses: 95,
  },
  {
    title: "Fotografía",
    slug: "fotografia",
    description: "Técnicas profesionales para capturar momentos perfectos y editar tus fotos.",
    image: "/placeholder.svg?height=225&width=400",
    courses: 85,
  },
  {
    title: "Salud y Bienestar",
    slug: "salud-bienestar",
    description: "Mejora tu calidad de vida con cursos de nutrición, fitness y bienestar mental.",
    image: "/placeholder.svg?height=225&width=400",
    courses: 110,
  },
  {
    title: "Inteligencia Artificial",
    slug: "inteligencia-artificial",
    description: "Aprende sobre IA, machine learning y cómo aplicar estas tecnologías en proyectos reales.",
    image: "/placeholder.svg?height=225&width=400",
    courses: 75,
  },
  {
    title: "Diseño UX/UI",
    slug: "diseno-ux-ui",
    description: "Crea interfaces intuitivas y atractivas con principios de diseño centrado en el usuario.",
    image: "/placeholder.svg?height=225&width=400",
    courses: 90,
  },
  {
    title: "Programación",
    slug: "programacion",
    description: "Domina lenguajes de programación como Python, Java, C++ y más.",
    image: "/placeholder.svg?height=225&width=400",
    courses: 280,
  },
  {
    title: "Ciencia de Datos",
    slug: "ciencia-datos",
    description: "Análisis de datos, visualización, estadística y machine learning para extraer insights valiosos.",
    image: "/placeholder.svg?height=225&width=400",
    courses: 130,
  },
]
