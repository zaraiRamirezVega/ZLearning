import type { Metadata } from "next"
import { InstructorSidebar } from "@/components/instructor-sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata: Metadata = {
  title: "Estadísticas | Instructor Dashboard",
  description: "Analiza el rendimiento de tus cursos",
}

export default function StatsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <InstructorSidebar />
        <main className="flex-1 p-6 lg:p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
            <h1 className="text-3xl font-bold tracking-tight">Estadísticas</h1>
            <div className="flex items-center gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Seleccionar curso" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todos los cursos</SelectItem>
                  <SelectItem value="web">Desarrollo Web Completo</SelectItem>
                  <SelectItem value="js">JavaScript Moderno</SelectItem>
                  <SelectItem value="react">React y Redux</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="6m">
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="Periodo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7d">Últimos 7 días</SelectItem>
                  <SelectItem value="1m">Último mes</SelectItem>
                  <SelectItem value="3m">Últimos 3 meses</SelectItem>
                  <SelectItem value="6m">Últimos 6 meses</SelectItem>
                  <SelectItem value="1y">Último año</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <StatsCard title="Matriculaciones" value="2,845" change="+12.5%" />
            <StatsCard title="Tasa de compleción" value="68%" change="+3.2%" />
            <StatsCard title="Valoración promedio" value="4.8/5" change="+0.2" />
            <StatsCard title="Tiempo promedio" value="24.5h" change="-2.1h" isNegative />
          </div>

          <Tabs defaultValue="engagement">
            <TabsList className="mb-4">
              <TabsTrigger value="engagement">Participación</TabsTrigger>
              <TabsTrigger value="performance">Rendimiento</TabsTrigger>
              <TabsTrigger value="revenue">Ingresos</TabsTrigger>
              <TabsTrigger value="reviews">Reseñas</TabsTrigger>
            </TabsList>

            <TabsContent value="engagement">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="md:col-span-2">
                  <CardHeader>
                    <CardTitle>Actividad de los estudiantes</CardTitle>
                    <CardDescription>
                      Número de estudiantes activos por día durante el período seleccionado
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[300px] flex items-center justify-center text-muted-foreground">
                      Gráfico de actividad de estudiantes
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Lecciones más vistas</CardTitle>
                    <CardDescription>Las lecciones con mayor número de visualizaciones</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[250px] flex items-center justify-center text-muted-foreground">
                      Gráfico de barras horizontales
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Progreso de los estudiantes</CardTitle>
                    <CardDescription>Distribución de estudiantes por progreso en el curso</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-[250px] flex items-center justify-center text-muted-foreground">
                      Gráfico circular de progreso
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="performance">
              <Card>
                <CardHeader>
                  <CardTitle>Rendimiento del curso</CardTitle>
                  <CardDescription>Métricas de rendimiento y participación</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                    Métricas de rendimiento del curso
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="revenue">
              <Card>
                <CardHeader>
                  <CardTitle>Análisis de ingresos</CardTitle>
                  <CardDescription>Tendencias de ingresos y ventas</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                    Gráficos de tendencias de ingresos
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="reviews">
              <Card>
                <CardHeader>
                  <CardTitle>Reseñas y valoraciones</CardTitle>
                  <CardDescription>Análisis de las reseñas de los estudiantes</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                    Distribución de reseñas y comentarios
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

function StatsCard({ title, value, change, isNegative = false }) {
  return (
    <Card>
      <CardHeader className="pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className={`text-xs flex items-center gap-1 mt-1 ${isNegative ? "text-red-500" : "text-green-500"}`}>
          {change}
          <span className="text-muted-foreground">vs periodo anterior</span>
        </p>
      </CardContent>
    </Card>
  )
}
