import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function Categories() {
  return (
    <section className="container space-y-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Explora por categoría</h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Descubre cursos de alta calidad en una amplia variedad de categorías
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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

      <div className="flex justify-center">
        <Button variant="outline" size="lg" asChild>
          <Link href="/categorias">Ver todas las categorías</Link>
        </Button>
      </div>
    </section>
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
]
