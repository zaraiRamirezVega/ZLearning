import Link from "next/link"
import { BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <BookOpen className="h-6 w-6 text-primary" />
              <span className="font-bold">ZLearning</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Plataforma de aprendizaje en línea con miles de cursos para ayudarte a desarrollar nuevas habilidades y
              alcanzar tus metas.
            </p>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
                <span className="sr-only">Facebook</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                <span className="sr-only">Instagram</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect width="4" height="12" x="2" y="9" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-medium">Categorías</h3>
            <Link href="/categorias/desarrollo-web" className="text-sm text-muted-foreground hover:text-foreground">
              Desarrollo Web
            </Link>
            <Link href="/categorias/diseno-grafico" className="text-sm text-muted-foreground hover:text-foreground">
              Diseño Gráfico
            </Link>
            <Link href="/categorias/marketing-digital" className="text-sm text-muted-foreground hover:text-foreground">
              Marketing Digital
            </Link>
            <Link href="/categorias/negocios" className="text-sm text-muted-foreground hover:text-foreground">
              Negocios
            </Link>
            <Link href="/categorias/idiomas" className="text-sm text-muted-foreground hover:text-foreground">
              Idiomas
            </Link>
            <Link href="/categorias/musica" className="text-sm text-muted-foreground hover:text-foreground">
              Música
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-medium">Enlaces</h3>
            <Link href="/sobre-nosotros" className="text-sm text-muted-foreground hover:text-foreground">
              Sobre nosotros
            </Link>
            <Link href="/contacto" className="text-sm text-muted-foreground hover:text-foreground">
              Contacto
            </Link>
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">
              Blog
            </Link>
            <Link href="/faq" className="text-sm text-muted-foreground hover:text-foreground">
              FAQ
            </Link>
            <Link href="/conviertete-en-instructor" className="text-sm text-muted-foreground hover:text-foreground">
              Conviértete en instructor
            </Link>
            <Link href="/afiliados" className="text-sm text-muted-foreground hover:text-foreground">
              Afiliados
            </Link>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-medium">Suscríbete a nuestro boletín</h3>
            <p className="text-sm text-muted-foreground">
              Recibe las últimas noticias, cursos y ofertas especiales directamente en tu bandeja de entrada.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <Input type="email" placeholder="Tu correo electrónico" />
              <Button>Suscribirse</Button>
            </div>
          </div>
        </div>
      </div>

      <Separator />

      <div className="container py-6">
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-muted-foreground md:flex-row md:text-left">
          <p>© 2024 ZLearning . Todos los derechos reservados.</p>
          <div className="flex gap-4">
            <Link href="/terminos" className="hover:text-foreground">
              Términos de servicio
            </Link>
            <Link href="/privacidad" className="hover:text-foreground">
              Política de privacidad
            </Link>
            <Link href="/cookies" className="hover:text-foreground">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
