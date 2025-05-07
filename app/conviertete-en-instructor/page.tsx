import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, DollarSign, Users, Award, BarChart3, Clock } from "lucide-react"

export default function ConvierteteEnInstructorPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col gap-4 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Conviértete en Instructor</h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Comparte tus conocimientos y experiencia con estudiantes de todo el mundo
        </p>
      </div>

      <div className="mt-12 grid gap-12">
        {/* Hero Section */}
        <section className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Enseña lo que amas</h2>
            <div className="mt-4 space-y-4">
              <p>
                EduPastel te brinda la oportunidad de compartir tus conocimientos y experiencia con millones de
                estudiantes en todo el mundo. Ya sea que seas un experto en programación, diseño, marketing, música o
                cualquier otra área, nuestra plataforma te proporciona las herramientas necesarias para crear cursos de
                alta calidad y llegar a una audiencia global.
              </p>
              <p>
                Únete a nuestra comunidad de más de 1,000 instructores que están transformando vidas a través de la
                educación en línea y generando ingresos haciendo lo que aman.
              </p>
            </div>
            <div className="mt-6">
              <Button size="lg" asChild>
                <Link href="/auth/register?type=instructor">Comenzar ahora</Link>
              </Button>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Instructor enseñando"
              width={600}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        {/* Benefits */}
        <section>
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">¿Por qué enseñar en EduPastel?</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Alcance global</h3>
                <p className="text-muted-foreground">
                  Llega a millones de estudiantes en todo el mundo y comparte tus conocimientos sin limitaciones
                  geográficas.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <DollarSign className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Ingresos recurrentes</h3>
                <p className="text-muted-foreground">
                  Genera ingresos pasivos a través de las ventas de tus cursos. Nuestros instructores más exitosos ganan
                  más de $10,000 al mes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Herramientas intuitivas</h3>
                <p className="text-muted-foreground">
                  Utiliza nuestro editor visual para crear cursos de alta calidad sin necesidad de conocimientos
                  técnicos.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Análisis detallados</h3>
                <p className="text-muted-foreground">
                  Accede a estadísticas detalladas sobre el rendimiento de tus cursos y el comportamiento de tus
                  estudiantes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Reconocimiento profesional</h3>
                <p className="text-muted-foreground">
                  Establécete como una autoridad en tu campo y construye tu marca personal a través de la enseñanza.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Flexibilidad total</h3>
                <p className="text-muted-foreground">
                  Crea cursos a tu propio ritmo y gestiona tu tiempo como prefieras. Tú decides cuándo y cómo enseñar.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* How It Works */}
        <section>
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">¿Cómo funciona?</h2>
          <div className="mt-8">
            <Tabs defaultValue="create" className="w-full">
              <TabsList className="grid w-full grid-cols-4">
                <TabsTrigger value="create">Crear</TabsTrigger>
                <TabsTrigger value="publish">Publicar</TabsTrigger>
                <TabsTrigger value="teach">Enseñar</TabsTrigger>
                <TabsTrigger value="earn">Ganar</TabsTrigger>
              </TabsList>
              <TabsContent value="create" className="mt-6">
                <div className="grid gap-8 md:grid-cols-2 md:items-center">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Creación de cursos"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Crea tu curso</h3>
                    <div className="mt-4 space-y-4">
                      <p>
                        Utiliza nuestro editor visual para crear tu curso. Puedes subir videos, añadir textos,
                        cuestionarios, tareas y recursos descargables. Nuestras herramientas te permiten organizar tu
                        contenido en módulos y lecciones de manera intuitiva.
                      </p>
                      <p>
                        No necesitas ser un experto en tecnología. Nuestro equipo de soporte está disponible para
                        ayudarte en cada paso del proceso de creación.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="publish" className="mt-6">
                <div className="grid gap-8 md:grid-cols-2 md:items-center">
                  <div className="relative aspect-video overflow-hidden rounded-lg md:order-last">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Publicación de cursos"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Publica tu curso</h3>
                    <div className="mt-4 space-y-4">
                      <p>
                        Una vez que hayas creado tu curso, envíalo para revisión. Nuestro equipo de calidad verificará
                        que cumple con nuestros estándares y te proporcionará retroalimentación si es necesario.
                      </p>
                      <p>
                        Después de la aprobación, tu curso estará disponible en nuestra plataforma para estudiantes de
                        todo el mundo. Puedes establecer el precio de tu curso o optar por ofrecerlo de forma gratuita.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="teach" className="mt-6">
                <div className="grid gap-8 md:grid-cols-2 md:items-center">
                  <div className="relative aspect-video overflow-hidden rounded-lg">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Enseñanza en línea"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Enseña a tus estudiantes</h3>
                    <div className="mt-4 space-y-4">
                      <p>
                        Interactúa con tus estudiantes a través de foros de discusión, mensajes directos y sesiones en
                        vivo. Responde a sus preguntas, proporciona retroalimentación sobre sus tareas y crea una
                        comunidad en torno a tu curso.
                      </p>
                      <p>
                        Puedes actualizar tu curso en cualquier momento para mantenerlo relevante y añadir nuevo
                        contenido basado en los comentarios de tus estudiantes.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="earn" className="mt-6">
                <div className="grid gap-8 md:grid-cols-2 md:items-center">
                  <div className="relative aspect-video overflow-hidden rounded-lg md:order-last">
                    <Image
                      src="/placeholder.svg?height=400&width=600"
                      alt="Ganancias de instructores"
                      width={600}
                      height={400}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Gana dinero enseñando</h3>
                    <div className="mt-4 space-y-4">
                      <p>
                        Recibe pagos mensuales por las ventas de tus cursos. Nuestro modelo de ingresos te permite
                        quedarte con el 70% del precio de venta de cada curso.
                      </p>
                      <p>
                        Además, puedes aumentar tus ingresos a través de nuestro programa de afiliados, cursos premium y
                        ofertas especiales. Nuestros instructores más exitosos ganan más de $10,000 al mes.
                      </p>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Testimonials */}
        <section>
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">
            Lo que dicen nuestros instructores
          </h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="text-muted-foreground">"{testimonial.testimonial}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">Preguntas frecuentes</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="font-semibold">{faq.question}</h3>
                  <p className="mt-2 text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-lg bg-gradient-to-r from-primary/20 via-primary/10 to-secondary/20 p-8 text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">¿Listo para compartir tus conocimientos?</h2>
          <p className="mx-auto mt-4 max-w-[600px] text-muted-foreground">
            Únete a nuestra comunidad de instructores y comienza a transformar vidas a través de la educación en línea.
          </p>
          <div className="mt-6">
            <Button size="lg" asChild>
              <Link href="/auth/register?type=instructor">Comenzar a enseñar</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

const testimonials = [
  {
    name: "Carlos Rodríguez",
    role: "Instructor de Desarrollo Web",
    avatar: "/placeholder.svg?height=60&width=60",
    testimonial:
      "Enseñar en EduPastel ha cambiado mi vida. He podido compartir mis conocimientos con estudiantes de todo el mundo y generar ingresos significativos. La plataforma es intuitiva y el equipo de soporte es excepcional.",
  },
  {
    name: "Laura Martínez",
    role: "Instructora de Diseño UX/UI",
    avatar: "/placeholder.svg?height=60&width=60",
    testimonial:
      "Lo que más me gusta de EduPastel es la libertad que tengo para crear mis cursos. Las herramientas son fáciles de usar y me permiten expresar mi creatividad. Además, la comunidad de estudiantes es increíblemente comprometida.",
  },
  {
    name: "Miguel Ángel López",
    role: "Instructor de Marketing Digital",
    avatar: "/placeholder.svg?height=60&width=60",
    testimonial:
      "Comencé a enseñar en EduPastel hace dos años y ha sido una experiencia transformadora. No solo he podido generar ingresos adicionales, sino que también he establecido mi marca personal como experto en marketing digital.",
  },
]

const faqs = [
  {
    question: "¿Cuánto puedo ganar como instructor?",
    answer:
      "Los ingresos varían según la popularidad de tus cursos, el precio que establezcas y tu nivel de participación. Nuestros instructores más exitosos ganan más de $10,000 al mes, pero los ingresos promedio oscilan entre $1,000 y $5,000 mensuales.",
  },
  {
    question: "¿Qué tipo de cursos puedo crear?",
    answer:
      "Puedes crear cursos sobre prácticamente cualquier tema, siempre que cumpla con nuestras políticas de contenido. Las categorías más populares incluyen desarrollo web, diseño, marketing, negocios, fotografía, música y desarrollo personal.",
  },
  {
    question: "¿Necesito experiencia previa como profesor?",
    answer:
      "No es necesario tener experiencia previa como profesor. Lo importante es que seas experto en tu área y tengas pasión por compartir tus conocimientos. Ofrecemos recursos y guías para ayudarte a crear cursos efectivos.",
  },
  {
    question: "¿Cuánto tiempo lleva crear un curso?",
    answer:
      "El tiempo varía según la complejidad y extensión del curso. En promedio, nuestros instructores dedican entre 30 y 60 horas a la creación de un curso completo, incluyendo la planificación, grabación y edición.",
  },
  {
    question: "¿Cómo recibo mis pagos?",
    answer:
      "Realizamos pagos mensuales a través de PayPal, transferencia bancaria o Payoneer. Los pagos se procesan automáticamente cuando tu saldo alcanza el mínimo de $50.",
  },
  {
    question: "¿Puedo ofrecer cursos gratuitos?",
    answer:
      "Sí, puedes ofrecer cursos gratuitos. Muchos instructores utilizan cursos gratuitos como estrategia para atraer estudiantes a sus cursos de pago o para construir su audiencia.",
  },
]
