import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search } from "lucide-react"
import Link from "next/link"

export default function FAQPage() {
  return (
    <div className="container py-8 md:py-12">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Preguntas Frecuentes</h1>
          <p className="text-muted-foreground md:text-xl">
            Encuentra respuestas a las preguntas más comunes sobre nuestra plataforma
          </p>
        </div>

        <div className="mt-8 flex items-center gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input type="search" placeholder="Buscar en las preguntas frecuentes..." className="pl-9" />
          </div>
          <Button>Buscar</Button>
        </div>

        <Tabs defaultValue="general" className="mt-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="general">General</TabsTrigger>
            <TabsTrigger value="cursos">Cursos</TabsTrigger>
            <TabsTrigger value="pagos">Pagos</TabsTrigger>
            <TabsTrigger value="certificados">Certificados</TabsTrigger>
          </TabsList>

          <TabsContent value="general" className="mt-6">
            <Accordion type="single" collapsible className="w-full">
              {generalFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>

          <TabsContent value="cursos" className="mt-6">
            <Accordion type="single" collapsible className="w-full">
              {cursosFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>

          <TabsContent value="pagos" className="mt-6">
            <Accordion type="single" collapsible className="w-full">
              {pagosFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>

          <TabsContent value="certificados" className="mt-6">
            <Accordion type="single" collapsible className="w-full">
              {certificadosFAQs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        </Tabs>

        <div className="mt-12 rounded-lg border bg-muted/30 p-6 text-center">
          <h2 className="text-xl font-semibold">¿No encuentras lo que buscas?</h2>
          <p className="mt-2 text-muted-foreground">
            Si tienes alguna pregunta que no está respondida aquí, no dudes en contactarnos.
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <Button asChild>
              <Link href="/contacto">Contactar soporte</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/foro">Visitar el foro</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

const generalFAQs = [
  {
    question: "¿Qué es EduPastel?",
    answer:
      "EduPastel es una plataforma de aprendizaje en línea que ofrece miles de cursos en diversas categorías. Nuestra misión es proporcionar educación de calidad accesible para todos, permitiendo a los estudiantes aprender a su propio ritmo y a los instructores compartir sus conocimientos con el mundo.",
  },
  {
    question: "¿Cómo puedo crear una cuenta?",
    answer:
      "Crear una cuenta es muy sencillo. Haz clic en el botón 'Registrarse' en la esquina superior derecha de la página. Puedes registrarte con tu correo electrónico o usar tus cuentas de Google o GitHub para un registro más rápido. Una vez registrado, podrás acceder a todos los cursos y funcionalidades de la plataforma.",
  },
  {
    question: "¿Puedo acceder a EduPastel desde dispositivos móviles?",
    answer:
      "Sí, EduPastel es completamente responsivo y se adapta a cualquier dispositivo. Puedes acceder a la plataforma desde tu computadora, tablet o smartphone. También contamos con aplicaciones móviles para iOS y Android que te permiten descargar cursos y verlos sin conexión.",
  },
  {
    question: "¿Cómo puedo contactar con el soporte técnico?",
    answer:
      "Puedes contactar con nuestro equipo de soporte técnico a través del formulario de contacto en nuestra página de Contacto, enviando un correo a soporte@edupastel.com, o utilizando el chat en vivo disponible en la esquina inferior derecha de la plataforma. Nuestro equipo está disponible 24/7 para ayudarte con cualquier problema o duda.",
  },
  {
    question: "¿EduPastel ofrece descuentos para estudiantes o instituciones educativas?",
    answer:
      "Sí, ofrecemos descuentos especiales para estudiantes verificados, profesores e instituciones educativas. Los estudiantes y profesores pueden obtener hasta un 50% de descuento en todos los cursos. Para instituciones educativas, ofrecemos planes personalizados según sus necesidades. Contacta con nuestro equipo de ventas para más información.",
  },
]

const cursosFAQs = [
  {
    question: "¿Cuánto tiempo tengo para completar un curso?",
    answer:
      "Una vez que te inscribes en un curso, tienes acceso de por vida al contenido. No hay límite de tiempo para completarlo, por lo que puedes aprender a tu propio ritmo. Incluso si el instructor actualiza el contenido del curso, seguirás teniendo acceso a las actualizaciones sin costo adicional.",
  },
  {
    question: "¿Los cursos incluyen ejercicios prácticos y proyectos?",
    answer:
      "Sí, la mayoría de nuestros cursos incluyen ejercicios prácticos, proyectos y tareas para reforzar el aprendizaje. Creemos firmemente en el aprendizaje práctico, por lo que incentivamos a nuestros instructores a incluir actividades que permitan aplicar los conocimientos adquiridos en situaciones reales.",
  },
  {
    question: "¿Puedo descargar los videos de los cursos para verlos sin conexión?",
    answer:
      "Sí, puedes descargar los videos de los cursos para verlos sin conexión a través de nuestras aplicaciones móviles para iOS y Android. Esta función es especialmente útil si tienes una conexión a internet limitada o si viajas con frecuencia. Ten en cuenta que los videos descargados solo están disponibles dentro de la aplicación por razones de derechos de autor.",
  },
  {
    question: "¿Qué sucede si no me gusta un curso que compré?",
    answer:
      "Ofrecemos una garantía de devolución de dinero de 30 días. Si no estás satisfecho con un curso por cualquier motivo, puedes solicitar un reembolso completo dentro de los 30 días posteriores a la compra, siempre que no hayas completado más del 30% del contenido del curso.",
  },
  {
    question: "¿Puedo cambiar de instructor durante un curso?",
    answer:
      "Cada curso tiene un instructor específico que ha creado el contenido. No es posible cambiar de instructor dentro del mismo curso. Sin embargo, si no estás satisfecho con el estilo de enseñanza de un instructor, puedes explorar cursos similares impartidos por otros instructores o solicitar un reembolso dentro del período de garantía.",
  },
]

const pagosFAQs = [
  {
    question: "¿Qué métodos de pago aceptan?",
    answer:
      "Aceptamos diversas formas de pago, incluyendo tarjetas de crédito/débito (Visa, Mastercard, American Express), PayPal, transferencias bancarias y criptomonedas. Los métodos de pago disponibles pueden variar según tu ubicación geográfica.",
  },
  {
    question: "¿Los precios incluyen impuestos?",
    answer:
      "Los precios mostrados en la plataforma no incluyen impuestos. Dependiendo de tu ubicación, es posible que se añadan impuestos al precio final durante el proceso de pago. El monto exacto de los impuestos se mostrará antes de completar la compra.",
  },
  {
    question: "¿Ofrecen planes de suscripción?",
    answer:
      "Sí, además de la compra individual de cursos, ofrecemos planes de suscripción mensual y anual que te dan acceso ilimitado a todos los cursos de la plataforma. Nuestros planes de suscripción incluyen EduPastel Basic, EduPastel Pro y EduPastel Enterprise, cada uno con diferentes beneficios y niveles de acceso.",
  },
  {
    question: "¿Cómo funciona el proceso de reembolso?",
    answer:
      "Para solicitar un reembolso, debes acceder a tu historial de compras en tu perfil y seleccionar la opción 'Solicitar reembolso' junto al curso correspondiente. Luego, deberás completar un breve formulario indicando el motivo de tu solicitud. Los reembolsos se procesan generalmente en un plazo de 5-7 días hábiles, dependiendo de tu método de pago original.",
  },
  {
    question: "¿Puedo pagar un curso en cuotas?",
    answer:
      "Sí, ofrecemos opciones de pago en cuotas para cursos y paquetes de cursos con precios superiores a $50. Dependiendo de tu ubicación y método de pago, puedes dividir el pago en 3, 6 o 12 cuotas. Las opciones de financiamiento disponibles se mostrarán durante el proceso de pago si tu compra califica.",
  },
]

const certificadosFAQs = [
  {
    question: "¿Cómo obtengo un certificado al completar un curso?",
    answer:
      "Al completar todas las lecciones y aprobar todas las evaluaciones de un curso, recibirás automáticamente un certificado de finalización. Podrás acceder a tus certificados desde la sección 'Mis certificados' en tu perfil de usuario. Desde allí, puedes descargarlos en formato PDF o compartirlos directamente en tus redes sociales profesionales.",
  },
  {
    question: "¿Los certificados de EduPastel son reconocidos oficialmente?",
    answer:
      "Nuestros certificados son reconocidos por muchas empresas y organizaciones como prueba de desarrollo profesional continuo. Sin embargo, no son equivalentes a títulos universitarios o certificaciones profesionales oficiales. El valor de nuestros certificados radica en demostrar tu compromiso con el aprendizaje y las habilidades adquiridas.",
  },
  {
    question: "¿Puedo incluir mi certificado en mi currículum o LinkedIn?",
    answer:
      "Absolutamente. Te recomendamos incluir tus certificados en tu currículum y perfil de LinkedIn para destacar tus habilidades y conocimientos. Nuestros certificados incluyen un enlace de verificación que permite a los empleadores confirmar su autenticidad, lo que añade credibilidad a tu perfil profesional.",
  },
  {
    question: "¿Qué información incluye el certificado?",
    answer:
      "Nuestros certificados incluyen tu nombre completo, el título del curso, la fecha de finalización, el nombre del instructor, un código de verificación único y el logotipo de EduPastel. Algunos cursos especiales, especialmente aquellos en colaboración con empresas o instituciones, pueden incluir logotipos adicionales y contenido personalizado.",
  },
  {
    question: "¿Puedo obtener un certificado si solo completo parte de un curso?",
    answer:
      "No, para recibir un certificado debes completar todas las lecciones obligatorias y aprobar todas las evaluaciones requeridas del curso. Sin embargo, algunos cursos ofrecen certificados de módulos individuales, lo que te permite obtener reconocimiento por las secciones que hayas completado, incluso si no has terminado todo el curso.",
  },
]
