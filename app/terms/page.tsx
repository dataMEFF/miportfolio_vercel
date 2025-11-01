"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function TermsOfService() {
  const [language, setLanguage] = useState<"en" | "es">("en")

  const content = {
    en: {
      title: "Terms of Service",
      lastUpdated: "Last Updated: November 2025",
      nav: {
        home: "Back to Home",
      },
      sections: [
        {
          heading: "Agreement to Terms",
          content:
            "By accessing and using this website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.",
        },
        {
          heading: "Use License",
          content:
            "Permission is granted to temporarily download one copy of the materials (information or software) on dataMEFF's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:\n\n• Modify or copy the materials\n• Use the materials for any commercial purpose or for any public display\n• Attempt to decompile or reverse engineer any software contained on the website\n• Remove any copyright or other proprietary notations from the materials\n• Transfer the materials to another person or 'mirror' the materials on any other server",
        },
        {
          heading: "Disclaimer",
          content:
            "The materials on dataMEFF's website are provided on an 'as is' basis. dataMEFF makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.",
        },
        {
          heading: "Limitations",
          content:
            "In no event shall dataMEFF or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on dataMEFF's website, even if dataMEFF or an authorized representative has been notified orally or in writing of the possibility of such damage.",
        },
        {
          heading: "Accuracy of Materials",
          content:
            "The materials appearing on dataMEFF's website could include technical, typographical, or photographic errors. dataMEFF does not warrant that any of the materials on its website are accurate, complete, or current. dataMEFF may make changes to the materials contained on its website at any time without notice.",
        },
        {
          heading: "Links",
          content:
            "dataMEFF has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by dataMEFF of the site. Use of any such linked website is at the user's own risk.",
        },
        {
          heading: "Modifications",
          content:
            "dataMEFF may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.",
        },
        {
          heading: "Governing Law",
          content:
            "These terms and conditions are governed by and construed in accordance with the laws of [Your Country/Region], and you irrevocably submit to the exclusive jurisdiction of the courts in that location.",
        },
      ],
    },
    es: {
      title: "Términos de Servicio",
      lastUpdated: "Última Actualización: Noviembre 2025",
      nav: {
        home: "Volver al Inicio",
      },
      sections: [
        {
          heading: "Aceptación de Términos",
          content:
            "Al acceder y utilizar este sitio web, aceptas y te comprometes a estar vinculado por los términos y disposiciones de este acuerdo. Si no estás de acuerdo, por favor no utilices este servicio.",
        },
        {
          heading: "Licencia de Uso",
          content:
            "Se te otorga permiso para descargar temporalmente una copia de los materiales en el sitio web de dataMEFF solo para visualización personal y no comercial. Esta es la concesión de una licencia, no una transferencia de título, y bajo esta licencia no puedes:\n\n• Modificar o copiar los materiales\n• Usar los materiales con propósito comercial o para exhibición pública\n• Intentar descompilar o hacer ingeniería inversa\n• Remover avisos de derechos de autor\n• Transferir los materiales a otra persona",
        },
        {
          heading: "Descargo de Responsabilidad",
          content:
            "Los materiales en el sitio web de dataMEFF se proporcionan 'tal como están'. dataMEFF no hace garantías, expresas o implícitas, y por este medio renuncia a todas las demás garantías incluyendo, sin limitación, garantías implícitas o condiciones de comercialidad o idoneidad para un propósito particular.",
        },
        {
          heading: "Limitaciones",
          content:
            "En ningún caso dataMEFF o sus proveedores serán responsables por daños (incluyendo, sin limitación, daños por pérdida de datos o ganancias) derivados del uso o imposibilidad de usar los materiales en el sitio web de dataMEFF.",
        },
        {
          heading: "Precisión de los Materiales",
          content:
            "Los materiales en el sitio web de dataMEFF podrían incluir errores técnicos, tipográficos o fotográficos. dataMEFF no garantiza que los materiales sean precisos, completos o actuales. dataMEFF puede realizar cambios a los materiales en su sitio web en cualquier momento sin previo aviso.",
        },
        {
          heading: "Enlaces",
          content:
            "dataMEFF no ha revisado todos los sitios vinculados a su sitio web y no es responsable del contenido de ningún sitio vinculado. La inclusión de un enlace no implica respaldo por parte de dataMEFF. El uso de cualquier sitio vinculado es bajo tu propio riesgo.",
        },
        {
          heading: "Modificaciones",
          content:
            "dataMEFF puede revisar estos términos de servicio en cualquier momento sin aviso. Al usar este sitio web, aceptas estar vinculado por la versión actual de estos términos de servicio.",
        },
        {
          heading: "Ley Aplicable",
          content:
            "Estos términos y condiciones se rigen por las leyes aplicables y aceptas la jurisdicción exclusiva de los tribunales competentes.",
        },
      ],
    },
  }

  const t = content[language]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/40 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(31,38,135,0.37)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <a href="/" className="flex items-center gap-2">
              <Image src="/logo-header.png" alt="dataMEFF" width={240} height={80} className="h-16 w-auto" />
            </a>

            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <button
                  onClick={() => setLanguage("en")}
                  className={`text-sm px-2 py-1 rounded ${language === "en" ? "bg-accent-pink text-white" : "hover:bg-muted"}`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("es")}
                  className={`text-sm px-2 py-1 rounded ${language === "es" ? "bg-accent-pink text-white" : "hover:bg-muted"}`}
                >
                  ES
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto bg-card rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-border/50 p-8 md:p-12">
          <h1 className="font-display text-5xl sm:text-6xl font-bold mb-4 text-accent-blue">{t.title}</h1>
          <p className="text-muted-foreground mb-12">{t.lastUpdated}</p>

          <div className="space-y-12">
            {t.sections.map((section, index) => (
              <div key={index}>
                <h2 className="font-display text-2xl font-semibold mb-4 text-accent-blue">{section.heading}</h2>
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{section.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-border/30">
            <a href="/">
              <Button className="bg-accent-pink hover:bg-accent-pink/90 text-white">{t.nav.home}</Button>
            </a>
          </div>
        </div>
      </main>

      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-accent-blue text-white">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/90 text-sm">
            © 2025 dataMEFF. {language === "es" ? "Todos los derechos reservados." : "All rights reserved."}
          </p>
        </div>
      </footer>
    </div>
  )
}
