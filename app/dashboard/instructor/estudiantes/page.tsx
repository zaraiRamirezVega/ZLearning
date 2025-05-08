import type { Metadata } from "next"
import { InstructorSidebar } from "@/components/instructor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Download, ArrowUpDown } from "lucide-react"

export const metadata: Metadata = {
  title: "Estudiantes | Instructor Dashboard",
  description: "Gestiona tus estudiantes como instructor",
}

export default function StudentsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <InstructorSidebar />
        <main className="flex-1 p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold tracking-tight">Estudiantes</h1>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Exportar
            </Button>
          </div>

          <Card className="mb-6">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row gap-4 justify-between">
                <div className="relative flex-1">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input placeholder="Buscar estudiantes..." className="pl-8" />
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filtrar por curso" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos los cursos</SelectItem>
                      <SelectItem value="web">Desarrollo Web Completo</SelectItem>
                      <SelectItem value="js">JavaScript Moderno</SelectItem>
                      <SelectItem value="react">React y Redux</SelectItem>
                    </SelectContent>
                  </Select>

                  <Select defaultValue="all">
                    <SelectTrigger className="w-[180px]">
                      <SelectValue placeholder="Filtrar por estado" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Todos los estados</SelectItem>
                      <SelectItem value="active">Activos</SelectItem>
                      <SelectItem value="inactive">Inactivos</SelectItem>
                      <SelectItem value="completed">Curso completado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Estudiante</TableHead>
                <TableHead>
                  <div className="flex items-center gap-1 cursor-pointer">
                    Curso
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead className="hidden md:table-cell">Progreso</TableHead>
                <TableHead>
                  <div className="flex items-center gap-1 cursor-pointer">
                    Ingreso
                    <ArrowUpDown className="h-3 w-3" />
                  </div>
                </TableHead>
                <TableHead className="hidden md:table-cell">Estado</TableHead>
                <TableHead className="text-right">Acciones</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student) => (
                <TableRow key={student.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={student.avatar || "/placeholder.svg"} alt={student.name} />
                        <AvatarFallback>{student.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{student.name}</div>
                        <div className="text-xs text-muted-foreground">{student.email}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>{student.course}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-16 bg-muted rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${student.progress}%` }} />
                      </div>
                      <span className="text-xs">{student.progress}%</span>
                    </div>
                  </TableCell>
                  <TableCell>{student.joinDate}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <StatusBadge status={student.status} />
                  </TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm">
                      Detalles
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </main>
      </div>
    </div>
  )
}

function StatusBadge({ status }) {
  const statusMap = {
    active: { label: "Activo", variant: "default" },
    inactive: { label: "Inactivo", variant: "secondary" },
    completed: { label: "Completado", variant: "success" },
  }

  const { label, variant } = statusMap[status] || { label: status, variant: "outline" }

  return <Badge variant={variant}>{label}</Badge>
}

const students = [
  {
    id: 1,
    name: "Ana Martínez",
    email: "ana.martinez@ejemplo.com",
    avatar: "/placeholder.svg?height=32&width=32",
    course: "Desarrollo Web Completo",
    progress: 75,
    joinDate: "15/03/2023",
    status: "active",
  },
  {
    id: 2,
    name: "Juan Pérez",
    email: "juan.perez@ejemplo.com",
    avatar: "/placeholder.svg?height=32&width=32",
    course: "JavaScript Moderno",
    progress: 45,
    joinDate: "22/04/2023",
    status: "active",
  },
  {
    id: 3,
    name: "María López",
    email: "maria.lopez@ejemplo.com",
    avatar: "/placeholder.svg?height=32&width=32",
    course: "React y Redux",
    progress: 92,
    joinDate: "10/01/2023",
    status: "completed",
  },
  {
    id: 4,
    name: "Carlos Santana",
    email: "carlos.santana@ejemplo.com",
    avatar: "/placeholder.svg?height=32&width=32",
    course: "Desarrollo Web Completo",
    progress: 20,
    joinDate: "05/05/2023",
    status: "inactive",
  },
  {
    id: 5,
    name: "Laura Torres",
    email: "laura.torres@ejemplo.com",
    avatar: "/placeholder.svg?height=32&width=32",
    course: "JavaScript Moderno",
    progress: 60,
    joinDate: "17/02/2023",
    status: "active",
  },
]
