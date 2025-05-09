"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/components/mode-toggle"
import { Search, Menu, X, BookOpen } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MainNav() {
  const pathname = usePathname()
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-8 lg:gap-10">
          <Link href="/" className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">ZLearning</span>
          </Link>

          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Categorías</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {categories.map((category) => (
                      <li key={category.title}>
                        <NavigationMenuLink asChild>
                          <Link
                            href={`/categorias/${category.value}`}
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">{category.title}</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              {category.description}
                            </p>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/cursos" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Cursos</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/instructores" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Instructores</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/foro" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>Foro</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
          {isSearchOpen ? (
            <div className="relative flex items-center md:w-64 lg:w-80">
              <Input
                type="search"
                placeholder="Buscar cursos..."
                className="pr-8"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
              <X
                className="absolute right-2 h-4 w-4 cursor-pointer text-muted-foreground"
                onClick={() => setIsSearchOpen(false)}
              />
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)} className="hidden sm:flex">
              <Search className="h-5 w-5" />
              <span className="sr-only">Buscar</span>
            </Button>
          )}

          <div className="hidden md:flex md:items-center md:gap-2">
            <ModeToggle />
            <Link href="/auth/login">
              <Button variant="ghost" size="sm">
                Iniciar sesión
              </Button>
            </Link>
            <Link href="/auth/register">
              <Button size="sm">Registrarse</Button>
            </Link>
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 py-6">
                <Link href="/" className="flex items-center space-x-2">
                  <BookOpen className="h-6 w-6 text-primary" />
                  <span className="font-bold">EduPastel</span>
                </Link>
                <div className="flex w-full items-center gap-2">
                  <Input type="search" placeholder="Buscar cursos..." className="flex-1" />
                  <Button size="icon" variant="ghost">
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
                <nav className="flex flex-col gap-4">
                  <Link href="/cursos" className="text-lg font-medium transition-colors hover:text-primary">
                    Cursos
                  </Link>
                  <Link href="/categorias" className="text-lg font-medium transition-colors hover:text-primary">
                    Categorías
                  </Link>
                  <Link href="/instructores" className="text-lg font-medium transition-colors hover:text-primary">
                    Instructores
                  </Link>
                  <Link href="/foro" className="text-lg font-medium transition-colors hover:text-primary">
                    Foro
                  </Link>
                </nav>
                <div className="flex flex-col gap-2">
                  <ModeToggle />
                  <Link href="/auth/login">
                    <Button variant="outline" className="w-full">
                      Iniciar sesión
                    </Button>
                  </Link>
                  <Link href="/auth/register">
                    <Button className="w-full">Registrarse</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

const categories = [
  {
    title: "Desarrollo Web",
    description: "HTML, CSS, JavaScript, React, Angular, Vue y más.",
    href: "/categorias/desarrollo-web",
    value: "desarrollo-web",
  },
  {
    title: "Diseño Gráfico",
    description: "Photoshop, Illustrator, Figma, UI/UX y más.",
    href: "/categorias/diseno-grafico",
    value: "diseno-grafico",
  },
  {
    title: "Marketing Digital",
    description: "SEO, SEM, Redes Sociales, Email Marketing y más.",
    href: "/categorias/marketing-digital",
    value: "marketing-digital",
  },
  {
    title: "Negocios",
    description: "Emprendimiento, Finanzas, Gestión de Proyectos y más.",
    href: "/categorias/negocios",
    value: "negocios",
  },
  {
    title: "Idiomas",
    description: "Inglés, Español, Francés, Alemán, Chino y más.",
    href: "/categorias/idiomas",
    value: "idiomas",
  },
  {
    title: "Música",
    description: "Piano, Guitarra, Producción Musical, Teoría y más.",
    href: "/categorias/musica",
    value: "musica",
  },
]
