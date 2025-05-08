"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background pt-16">
      <div className="container relative z-10 flex flex-col items-center gap-8 pb-16 pt-8 text-center md:pb-24 md:pt-12 lg:gap-12">
        <div className="absolute -left-64 -top-64 z-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 z-0 h-[300px] w-[300px] rounded-full bg-secondary/10 blur-3xl" />

        <div className="flex max-w-[800px] flex-col gap-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Aprende a tu ritmo, <span className="text-primary">crece sin límites</span>
          </h1>
          <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
            Miles de cursos de calidad impartidos por expertos. Desarrolla nuevas habilidades y alcanza tus metas
            personales y profesionales.
          </p>
        </div>

        <div className="flex w-full max-w-md flex-col gap-2 sm:flex-row sm:gap-0">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="¿Qué quieres aprender hoy?"
              className="pl-9 sm:rounded-r-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button className="sm:rounded-l-none">Buscar</Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
          <span>Búsquedas populares:</span>
          <Button variant="link" className="h-auto p-0 text-sm" asChild>
            <Link href="/categorias/desarrollo-web">Desarrollo Web</Link>
          </Button>
          <Button variant="link" className="h-auto p-0 text-sm" asChild>
            <Link href="/categorias/inteligencia-artificial">Inteligencia Artificial</Link>
          </Button>
          <Button variant="link" className="h-auto p-0 text-sm" asChild>
            <Link href="/categorias/diseno-ux-ui">Diseño UX/UI</Link>
          </Button>
          <Button variant="link" className="h-auto p-0 text-sm" asChild>
            <Link href="/categorias/marketing-digital">Marketing Digital</Link>
          </Button>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Image
                src="/placeholder.svg?height=48&width=48"
                alt="Cursos"
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </div>
            <span className="text-sm font-medium">+10,000 Cursos</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
              <Image
                src="/placeholder.svg?height=48&width=48"
                alt="Instructores"
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </div>
            <span className="text-sm font-medium">+1,000 Instructores</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Image
                src="/placeholder.svg?height=48&width=48"
                alt="Estudiantes"
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </div>
            <span className="text-sm font-medium">+5M Estudiantes</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
              <Image
                src="/placeholder.svg?height=48&width=48"
                alt="Certificados"
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </div>
            <span className="text-sm font-medium">Certificados</span>
          </div>
          <div className="flex flex-col items-center gap-2 sm:col-span-3 sm:col-start-1 md:col-span-1 md:col-start-auto">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Image
                src="/placeholder.svg?height=48&width=48"
                alt="Soporte"
                width={24}
                height={24}
                className="h-6 w-6"
              />
            </div>
            <span className="text-sm font-medium">Soporte 24/7</span>
          </div>
        </div>
      </div>
    </section>
  )
}
