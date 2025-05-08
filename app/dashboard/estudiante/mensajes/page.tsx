"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { StudentSidebar } from "@/components/student-sidebar"
import { Search, Send, Paperclip, MoreVertical, Phone, Video } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"

export default function StudentMessages() {
  const [activeChat, setActiveChat] = useState(conversations[0])

  return (
    <div className="flex min-h-screen flex-col md:flex-row">
      <StudentSidebar />
      <main className="flex-1 p-6 md:p-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8 flex flex-col gap-4">
            <h1 className="text-3xl font-bold tracking-tight">Mensajes</h1>
            <p className="text-muted-foreground">Comunícate con instructores y compañeros de curso.</p>
          </div>

          <div className="grid h-[calc(100vh-220px)] grid-cols-1 gap-6 md:grid-cols-[300px_1fr]">
            <Card className="flex flex-col">
              <CardHeader className="p-4">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input type="search" placeholder="Buscar conversaciones..." className="pl-8" />
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-0">
                <ScrollArea className="h-[calc(100vh-300px)]">
                  <div className="space-y-1 p-2">
                    {conversations.map((conversation) => (
                      <button
                        key={conversation.id}
                        className={`flex w-full items-start gap-3 rounded-lg p-3 text-left transition-colors hover:bg-accent ${
                          activeChat.id === conversation.id ? "bg-accent" : ""
                        }`}
                        onClick={() => setActiveChat(conversation)}
                      >
                        <div className="relative">
                          <Image
                            src={conversation.avatar || "/placeholder.svg"}
                            alt={conversation.name}
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                          {conversation.online && (
                            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-background"></span>
                          )}
                        </div>
                        <div className="flex-1 overflow-hidden">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium">{conversation.name}</h3>
                            <span className="text-xs text-muted-foreground">{conversation.time}</span>
                          </div>
                          <p className="truncate text-sm text-muted-foreground">{conversation.lastMessage}</p>
                        </div>
                        {conversation.unread > 0 && <Badge className="ml-auto shrink-0">{conversation.unread}</Badge>}
                      </button>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            <Card className="flex flex-col">
              <CardHeader className="border-b p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image
                      src={activeChat.avatar || "/placeholder.svg"}
                      alt={activeChat.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <div>
                      <CardTitle className="text-base">{activeChat.name}</CardTitle>
                      <p className="text-xs text-muted-foreground">
                        {activeChat.online ? "En línea" : "Último acceso hace 2h"}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon">
                      <Phone className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Video className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-1 p-0">
                <ScrollArea className="h-[calc(100vh-380px)] p-4">
                  <div className="space-y-4">
                    {messages.map((message, index) => (
                      <div key={index} className={`flex ${message.sent ? "justify-end" : "justify-start"}`}>
                        <div
                          className={`max-w-[80%] rounded-lg p-3 ${
                            message.sent ? "bg-primary text-primary-foreground" : "bg-muted"
                          }`}
                        >
                          <p>{message.text}</p>
                          <div
                            className={`mt-1 text-right text-xs ${
                              message.sent ? "text-primary-foreground/70" : "text-muted-foreground"
                            }`}
                          >
                            {message.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
              <div className="border-t p-4">
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon">
                    <Paperclip className="h-4 w-4" />
                  </Button>
                  <Input placeholder="Escribe un mensaje..." className="flex-1" />
                  <Button size="icon">
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

const conversations = [
  {
    id: 1,
    name: "Carlos Rodríguez",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Claro, puedo ayudarte con esa duda sobre React Hooks",
    time: "12:30",
    unread: 2,
    online: true,
  },
  {
    id: 2,
    name: "Ana García",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "¿Cuándo es la próxima entrega del proyecto?",
    time: "Ayer",
    unread: 0,
    online: false,
  },
  {
    id: 3,
    name: "Grupo: JavaScript Avanzado",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "Miguel: Gracias por compartir ese recurso",
    time: "Lun",
    unread: 5,
    online: false,
  },
  {
    id: 4,
    name: "Laura Martínez",
    avatar: "/placeholder.svg?height=40&width=40",
    lastMessage: "¿Viste el último video del curso?",
    time: "Dom",
    unread: 0,
    online: true,
  },
]

const messages = [
  {
    text: "Hola, tengo una duda sobre el último ejercicio de React Hooks",
    time: "12:05",
    sent: false,
  },
  {
    text: "Claro, dime en qué puedo ayudarte",
    time: "12:07",
    sent: true,
  },
  {
    text: "No entiendo bien cómo funciona useEffect con dependencias vacías",
    time: "12:10",
    sent: false,
  },
  {
    text: "Cuando usas useEffect con un array de dependencias vacío, el efecto solo se ejecuta una vez después del primer renderizado, similar a componentDidMount en componentes de clase.",
    time: "12:15",
    sent: true,
  },
  {
    text: "Por ejemplo: useEffect(() => { // código que se ejecuta una sola vez }, [])",
    time: "12:16",
    sent: true,
  },
  {
    text: "¡Ahora lo entiendo! Muchas gracias por la explicación",
    time: "12:20",
    sent: false,
  },
  {
    text: "¿Tienes alguna otra duda sobre React Hooks?",
    time: "12:25",
    sent: true,
  },
  {
    text: "No por ahora, pero te escribiré si surge algo más",
    time: "12:28",
    sent: false,
  },
  {
    text: "Perfecto, estoy aquí para ayudarte cuando lo necesites",
    time: "12:30",
    sent: true,
  },
]
