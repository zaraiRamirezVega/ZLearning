import Image from "next/image"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { StudentSidebar } from "@/components/student-sidebar"
import { Award, Download, Share2 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function StudentCertificates() {
  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <StudentSidebar />
      <main className="flex-1 p-6 md:p-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col gap-4">
            <h1 className="text-3xl font-bold tracking-tight">Certificados</h1>
            <p className="text-muted-foreground">Tus logros académicos y certificaciones profesionales.</p>
          </div>

          <Tabs defaultValue="completed" className="mb-8">
            <TabsList className="mb-4">
              <TabsTrigger value="completed">Completados</TabsTrigger>
              <TabsTrigger value="in-progress">En progreso</TabsTrigger>
            </TabsList>

            <TabsContent value="completed" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {certificates.map((certificate, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader className="p-0">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={certificate.image || "/placeholder.svg"}
                          alt={certificate.title}
                          width={400}
                          height={300}
                          className="h-full w-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                          <Award className="h-16 w-16 text-primary" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <h3 className="mb-2 font-medium">{certificate.title}</h3>
                      <p className="mb-4 text-sm text-muted-foreground">Expedido: {certificate.issueDate}</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          <Download className="mr-2 h-4 w-4" /> Descargar
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          <Share2 className="mr-2 h-4 w-4" /> Compartir
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="in-progress" className="mt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {inProgressCertificates.map((certificate, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardHeader className="p-0">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <Image
                          src={certificate.image || "/placeholder.svg"}
                          alt={certificate.title}
                          width={400}
                          height={300}
                          className="h-full w-full object-cover opacity-70"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                          <Award className="h-16 w-16 text-muted-foreground" />
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4">
                      <h3 className="mb-2 font-medium">{certificate.title}</h3>
                      <p className="mb-2 text-sm text-muted-foreground">Progreso: {certificate.progress}%</p>
                      <div className="mb-4 h-2 w-full rounded-full bg-muted">
                        <div
                          className="h-2 rounded-full bg-primary"
                          style={{ width: `${certificate.progress}%` }}
                        ></div>
                      </div>
                      <Button variant="outline" size="sm" className="w-full">
                        Continuar curso
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}

const certificates = [
  {
    title: "Desarrollo Web Fullstack",
    issueDate: "15/12/2023",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Diseño UX/UI Profesional",
    issueDate: "20/10/2023",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Marketing Digital Avanzado",
    issueDate: "05/08/2023",
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Python para Ciencia de Datos",
    issueDate: "12/06/2023",
    image: "/placeholder.svg?height=300&width=400",
  },
]

const inProgressCertificates = [
  {
    title: "JavaScript Moderno: Guía completa con ES6+",
    progress: 75,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "React y Redux: Aplicaciones en tiempo real",
    progress: 45,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Node.js: Autenticación con JWT y OAuth",
    progress: 30,
    image: "/placeholder.svg?height=300&width=400",
  },
]
