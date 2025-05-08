import { Skeleton } from "@/components/ui/skeleton"
import { InstructorSidebar } from "@/components/instructor-sidebar"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

export default function Loading() {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="flex flex-1">
        <InstructorSidebar />
        <main className="flex-1 p-6 lg:p-8">
          <div className="flex items-center justify-between mb-6">
            <Skeleton className="h-9 w-48" />
            <Skeleton className="h-9 w-32" />
          </div>

          <Skeleton className="h-10 w-60 mb-4" />

          <div className="space-y-4">
            {Array(3)
              .fill(null)
              .map((_, i) => (
                <Card key={i}>
                  <CardHeader className="pb-3">
                    <Skeleton className="h-6 w-3/4 mb-2" />
                    <Skeleton className="h-4 w-1/2" />
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between text-sm mb-2">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-4 w-28" />
                    </div>
                    <Skeleton className="h-2 w-full" />
                  </CardContent>
                  <CardFooter className="flex justify-between pt-3">
                    <Skeleton className="h-9 w-28" />
                    <Skeleton className="h-9 w-20" />
                  </CardFooter>
                </Card>
              ))}
          </div>
        </main>
      </div>
    </div>
  )
}
