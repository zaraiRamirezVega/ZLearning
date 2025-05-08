"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  BookOpen,
  Calendar,
  BadgeIcon as Certificate,
  Clock,
  FileText,
  Home,
  MessageSquare,
  Settings,
  User,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export function StudentSidebar() {
  const pathname = usePathname()

  return (
    <div className="hidden border-r bg-muted/40 md:block md:w-64 md:flex-shrink-0">
      <div className="flex h-full flex-col">
        <div className="border-b p-4">
          <div className="flex items-center gap-3">
            <Image
              src="/placeholder.svg?height=40&width=40"
              alt="Avatar"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <div className="font-medium">María González</div>
              <div className="text-xs text-muted-foreground">Estudiante</div>
            </div>
          </div>
        </div>
        <ScrollArea className="flex-1 px-3 py-4">
          <nav className="flex flex-col gap-1">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground",
                  pathname === item.href ? "bg-accent text-accent-foreground" : "transparent",
                )}
              >
                <item.icon className="h-4 w-4" />
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="mt-6">
            <h3 className="mb-2 px-4 text-xs font-semibold uppercase text-muted-foreground">Mis cursos</h3>
            <nav className="flex flex-col gap-1">
              {courses.map((course, index) => (
                <Link
                  key={index}
                  href={`/cursos/${course.slug}`}
                  className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                >
                  <div className="relative flex h-6 w-6 shrink-0 items-center justify-center rounded bg-primary/10">
                    <BookOpen className="h-3 w-3 text-primary" />
                    {course.hasUpdate && (
                      <span className="absolute -right-1 -top-1 flex h-3 w-3 rounded-full bg-primary">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      </span>
                    )}
                  </div>
                  <span className="line-clamp-1">{course.title}</span>
                </Link>
              ))}
            </nav>
          </div>
        </ScrollArea>
        <div className="border-t p-4">
          <Button variant="outline" className="w-full justify-start gap-2" asChild>
            <Link href="/dashboard/estudiante/configuracion">
              <Settings className="h-4 w-4" />
              Configuración
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

const items = [
  {
    title: "Dashboard",
    href: "/dashboard/estudiante",
    icon: Home,
  },
  {
    title: "Mis cursos",
    href: "/dashboard/estudiante/cursos",
    icon: BookOpen,
  },
  {
    title: "Calendario",
    href: "/dashboard/estudiante/calendario",
    icon: Calendar,
  },
  {
    title: "Certificados",
    href: "/dashboard/estudiante/certificados",
    icon: Certificate,
  },
  {
    title: "Historial",
    href: "/dashboard/estudiante/historial",
    icon: Clock,
  },
  {
    title: "Mensajes",
    href: "/dashboard/estudiante/mensajes",
    icon: MessageSquare,
  },
  {
    title: "Notas",
    href: "/dashboard/estudiante/notas",
    icon: FileText,
  },
  {
    title: "Perfil",
    href: "/dashboard/estudiante/perfil",
    icon: User,
  },
]

const courses = [
  {
    title: "Desarrollo Web Completo",
    slug: "desarrollo-web-completo",
    hasUpdate: true,
  },
  {
    title: "Diseño UX/UI",
    slug: "diseno-ux-ui",
    hasUpdate: false,
  },
  {
    title: "Marketing Digital",
    slug: "marketing-digital-2024",
    hasUpdate: true,
  },
]
