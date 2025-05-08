import Image from "next/image"
import { Star, Quote } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

export function Testimonials() {
  return (
    <section className="container space-y-8">
      <div className="flex flex-col items-center gap-4 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Lo que dicen nuestros estudiantes
        </h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Miles de estudiantes han transformado sus vidas con nuestros cursos
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="h-full overflow-hidden">
            <CardContent className="p-6">
              <div className="mb-4 flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"
                    }`}
                  />
                ))}
              </div>
              <div className="relative">
                <Quote className="absolute -left-1 -top-1 h-8 w-8 text-primary/10" />
                <p className="relative z-10 text-muted-foreground">{testimonial.text}</p>
              </div>
            </CardContent>
            <CardFooter className="flex items-center gap-4 border-t p-6">
              <Image
                src={testimonial.avatar || "/placeholder.svg"}
                alt={testimonial.name}
                width={48}
                height={48}
                className="rounded-full"
              />
              <div>
                <h4 className="font-medium">{testimonial.name}</h4>
                <p className="text-sm text-muted-foreground">{testimonial.course}</p>
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

const testimonials = [
  {
    name: "María González",
    avatar: "/placeholder.svg?height=48&width=48",
    rating: 5,
    text: "Este curso superó todas mis expectativas. El instructor explica los conceptos de manera clara y concisa. Ahora tengo la confianza para aplicar lo aprendido en mi trabajo diario.",
    course: "Desarrollo Web Completo",
  },
  {
    name: "Juan Pérez",
    avatar: "/placeholder.svg?height=48&width=48",
    rating: 5,
    text: "Increíble experiencia de aprendizaje. Los materiales son de alta calidad y el soporte del instructor es excelente. Recomiendo este curso a cualquiera que quiera mejorar sus habilidades.",
    course: "Marketing Digital",
  },
  {
    name: "Sofía Ramírez",
    avatar: "/placeholder.svg?height=48&width=48",
    rating: 4,
    text: "Gracias a este curso pude cambiar de carrera y conseguir un mejor trabajo. La plataforma es muy intuitiva y los contenidos están muy bien estructurados.",
    course: "Diseño UX/UI",
  },
  {
    name: "Carlos Mendoza",
    avatar: "/placeholder.svg?height=48&width=48",
    rating: 5,
    text: "He tomado varios cursos en esta plataforma y todos han sido excelentes. Los instructores son expertos en sus campos y siempre están dispuestos a ayudar.",
    course: "Inteligencia Artificial",
  },
  {
    name: "Laura Torres",
    avatar: "/placeholder.svg?height=48&width=48",
    rating: 5,
    text: "La relación calidad-precio es inmejorable. He aprendido más en este curso que en mi carrera universitaria. Totalmente recomendado para cualquier nivel.",
    course: "Fotografía Profesional",
  },
  {
    name: "Pedro Sánchez",
    avatar: "/placeholder.svg?height=48&width=48",
    rating: 4,
    text: "La flexibilidad de poder aprender a mi propio ritmo ha sido fundamental para poder compaginar el curso con mi trabajo. Los ejercicios prácticos son muy útiles.",
    course: "Inglés para Negocios",
  },
]
