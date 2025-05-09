import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Users, Award, Globe, Target, Heart } from "lucide-react"

export default function SobreNosotrosPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Sobre Nosotros</h1>
        <p className="max-w-[700px] text-muted-foreground md:text-xl">
          Conoce nuestra historia, misión y el equipo detrás de ZLearning 
        </p>
      </div>

      <div className="mt-12 grid gap-12">
        {/* Historia y Misión */}
        <section className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Nuestra Historia</h2>
            <div className="mt-4 space-y-4">
              <p>
                ZLearning  nació en 2018 con una visión clara: democratizar la educación de calidad y hacerla accesible
                para todos, independientemente de su ubicación o situación económica.
              </p>
              <p>
                Lo que comenzó como una pequeña plataforma con unos pocos cursos de programación, ha crecido hasta
                convertirse en un ecosistema educativo completo con miles de cursos en diversas categorías, una
                comunidad vibrante de estudiantes e instructores, y herramientas innovadoras para el aprendizaje en
                línea.
              </p>
              <p>
                A lo largo de estos años, hemos ayudado a más de 5 millones de estudiantes a adquirir nuevas
                habilidades, cambiar de carrera o mejorar en sus trabajos actuales, y seguimos comprometidos con nuestra
                misión de transformar vidas a través de la educación.
              </p>
            </div>
          </div>
          <div className="relative aspect-video overflow-hidden rounded-lg">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Nuestra historia"
              width={600}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
        </section>

        {/* Valores */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Nuestros Valores</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Excelencia</h3>
                <p className="text-muted-foreground">
                  Nos esforzamos por ofrecer la más alta calidad en todos nuestros cursos y servicios, superando las
                  expectativas de nuestros estudiantes e instructores.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Accesibilidad</h3>
                <p className="text-muted-foreground">
                  Creemos que la educación de calidad debe estar al alcance de todos, independientemente de su
                  ubicación, situación económica o antecedentes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center gap-4 p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Comunidad</h3>
                <p className="text-muted-foreground">
                  Fomentamos un entorno colaborativo donde estudiantes e instructores pueden conectar, compartir
                  conocimientos y crecer juntos.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Estadísticas */}
        <section className="rounded-lg bg-muted/50 p-8">
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl">ZLearning en Números</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold">5M+</div>
              <div className="text-sm text-muted-foreground">Estudiantes activos</div>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-sm text-muted-foreground">Cursos disponibles</div>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Award className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold">1K+</div>
              <div className="text-sm text-muted-foreground">Instructores expertos</div>
            </div>
            <div className="flex flex-col items-center gap-2 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Globe className="h-8 w-8 text-primary" />
              </div>
              <div className="text-3xl font-bold">150+</div>
              <div className="text-sm text-muted-foreground">Países alcanzados</div>
            </div>
          </div>
        </section>

        {/* Equipo */}
        <section>
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Nuestro Equipo</h2>
          <p className="mt-4 text-muted-foreground">
            Conoce a las personas apasionadas que trabajan día a día para hacer de EduPastel la mejor plataforma de
            aprendizaje en línea.
          </p>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <div key={member.name} className="flex flex-col items-center text-center">
                <div className="relative h-40 w-40 overflow-hidden rounded-full">
                  <Image
                    src={member.avatar || "/placeholder.svg"}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Únete a nosotros */}
        <section className="rounded-lg bg-gradient-to-r from-primary/20 via-primary/10 to-secondary/20 p-8">
          <div className="grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Únete a Nuestro Equipo</h2>
              <p className="mt-4 text-muted-foreground">
                Estamos en constante crecimiento y buscamos personas talentosas y apasionadas que quieran contribuir a
                nuestra misión de transformar la educación en línea.
              </p>
              <div className="mt-6 space-y-2">
                <div className="flex items-start gap-2">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    ✓
                  </div>
                  <span>Ambiente de trabajo dinámico y colaborativo</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    ✓
                  </div>
                  <span>Oportunidades de crecimiento profesional</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    ✓
                  </div>
                  <span>Beneficios competitivos y horario flexible</span>
                </div>
              </div>
              <div className="mt-6">
                <Button size="lg" asChild>
                  <Link href="/carreras">Ver ofertas de empleo</Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Únete a nuestro equipo"
                width={600}
                height={400}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section className="text-center">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">¿Tienes alguna pregunta?</h2>
          <p className="mt-4 text-muted-foreground">
            Estamos aquí para ayudarte. No dudes en ponerte en contacto con nosotros.
          </p>
          <div className="mt-6">
            <Button size="lg" asChild>
              <Link href="/contacto">Contactar</Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

const teamMembers = [
  {
    name: "María González",
    role: "CEO & Fundadora",
    avatar: "/placeholder.svg?height=160&width=160",
  },
  {
    name: "Carlos Rodríguez",
    role: "CTO",
    avatar: "/placeholder.svg?height=160&width=160",
  },
  {
    name: "Laura Martínez",
    role: "Directora de Contenido",
    avatar: "/placeholder.svg?height=160&width=160",
  },
  {
    name: "Miguel Sánchez",
    role: "Director de Marketing",
    avatar: "/placeholder.svg?height=160&width=160",
  },
  {
    name: "Ana García",
    role: "Directora de Operaciones",
    avatar: "/placeholder.svg?height=160&width=160",
  },
  {
    name: "Roberto Pérez",
    role: "Director de Producto",
    avatar: "/placeholder.svg?height=160&width=160",
  },
  {
    name: "Elena Torres",
    role: "Directora de Experiencia de Usuario",
    avatar: "/placeholder.svg?height=160&width=160",
  },
  {
    name: "Javier Méndez",
    role: "Director Financiero",
    avatar: "/placeholder.svg?height=160&width=160",
  },
]
