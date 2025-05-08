import type { Metadata } from "next"
import { InstructorSidebar } from "@/components/instructor-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Upload, File, FilePlus, Download, Trash2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Recursos | Instructor Dashboard",
  description: "Gestiona los recursos para tus cursos",
}

export default function ResourcesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <InstructorSidebar />
        <main className="flex-1 p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-3xl font-bold tracking-tight">Recursos</h1>
            <Button className="gap-2">
              <FilePlus className="h-4 w-4" />
              Subir recurso
            </Button>
          </div>

          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">Todos</TabsTrigger>
              <TabsTrigger value="documents">Documentos</TabsTrigger>
              <TabsTrigger value="images">Imágenes</TabsTrigger>
              <TabsTrigger value="videos">Videos</TabsTrigger>
              <TabsTrigger value="code">Código</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <UploadCard />
                {resources.map((resource) => (
                  <ResourceCard key={resource.id} resource={resource} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="documents">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <UploadCard />
                {resources
                  .filter((r) => r.type === "document")
                  .map((resource) => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="images">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <UploadCard />
                {resources
                  .filter((r) => r.type === "image")
                  .map((resource) => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="videos">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <UploadCard />
                {resources
                  .filter((r) => r.type === "video")
                  .map((resource) => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="code">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <UploadCard />
                {resources
                  .filter((r) => r.type === "code")
                  .map((resource) => (
                    <ResourceCard key={resource.id} resource={resource} />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

function UploadCard() {
  return (
    <Card className="border-dashed">
      <CardContent className="flex flex-col items-center justify-center p-6 h-[220px]">
        <Upload className="h-10 w-10 text-muted-foreground mb-2" />
        <p className="text-sm text-muted-foreground mb-1 text-center">
          Arrastra y suelta archivos o haz clic para subir
        </p>
        <p className="text-xs text-muted-foreground mb-4 text-center">
          Soporta documentos, imágenes, videos y archivos de código
        </p>
        <Button size="sm" variant="outline">
          Seleccionar archivos
        </Button>
      </CardContent>
    </Card>
  )
}

function ResourceCard({ resource }) {
  const iconMap = {
    document: File,
    image: File,
    video: File,
    code: File,
  }

  const Icon = iconMap[resource.type] || File

  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <div className="flex gap-2 items-center">
            <div className="p-2 rounded-md bg-primary/10">
              <Icon className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-base truncate">{resource.name}</CardTitle>
          </div>
        </div>
        <CardDescription className="truncate">{resource.size}</CardDescription>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="flex justify-between items-center text-sm mb-2">
          <span>Curso:</span>
          <span className="font-medium truncate">{resource.course}</span>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span>Subido:</span>
          <span className="text-muted-foreground">{resource.uploadDate}</span>
        </div>
      </CardContent>
      <CardFooter className="border-t flex justify-between py-3">
        <Button variant="ghost" size="sm" className="w-10 px-0">
          <Trash2 className="h-4 w-4 text-destructive" />
        </Button>
        <Button variant="outline" size="sm" className="gap-1">
          <Download className="h-4 w-4" />
          Descargar
        </Button>
      </CardFooter>
    </Card>
  )
}

const resources = [
  {
    id: 1,
    name: "guia-javascript-es6.pdf",
    type: "document",
    size: "2.4 MB",
    course: "JavaScript Moderno",
    uploadDate: "12/04/2023",
  },
  {
    id: 2,
    name: "flexbox-cheatsheet.pdf",
    type: "document",
    size: "1.8 MB",
    course: "Desarrollo Web Completo",
    uploadDate: "23/03/2023",
  },
  {
    id: 3,
    name: "react-hooks-examples.zip",
    type: "code",
    size: "856 KB",
    course: "React y Redux",
    uploadDate: "05/05/2023",
  },
  {
    id: 4,
    name: "proyecto-final-ejemplo.zip",
    type: "code",
    size: "4.2 MB",
    course: "Desarrollo Web Completo",
    uploadDate: "17/02/2023",
  },
  {
    id: 5,
    name: "logo-curso.png",
    type: "image",
    size: "450 KB",
    course: "JavaScript Moderno",
    uploadDate: "30/01/2023",
  },
]
