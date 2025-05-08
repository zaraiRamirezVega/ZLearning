import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GraduationCap, BookOpen } from "lucide-react"

export function CallToAction() {
  return (
    <section className="container">
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary/20 via-primary/10 to-secondary/20 p-8 md:p-12">
        <div className="absolute -left-32 -top-32 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-3xl" />

        <div className="relative z-10 grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Comienza tu viaje de aprendizaje hoy
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Únete a nuestra comunidad de estudiantes y transforma tu vida con nuevas habilidades y conocimientos.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="/auth/register">
                  <GraduationCap className="mr-2 h-5 w-5" /> Registrarse gratis
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/cursos">
                  <BookOpen className="mr-2 h-5 w-5" /> Explorar cursos
                </Link>
              </Button>
            </div>
          </div>

          <div className="space-y-4 rounded-xl bg-background/80 p-6 backdrop-blur-sm">
            <h3 className="text-xl font-bold">¿Por qué elegir EduPastel?</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  ✓
                </div>
                <span>Acceso ilimitado a miles de cursos de calidad</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  ✓
                </div>
                <span>Instructores expertos y contenido actualizado</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  ✓
                </div>
                <span>Aprende a tu ritmo, desde cualquier lugar</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  ✓
                </div>
                <span>Certificados reconocidos por la industria</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  ✓
                </div>
                <span>Comunidad activa y soporte personalizado</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
