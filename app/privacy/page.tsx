"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function PrivacyPolicy() {
  const [language, setLanguage] = useState<"en" | "es">("en")

  const content = {
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: November 2025",
      nav: {
        home: "Back to Home",
      },
      sections: [
        {
          heading: "Introduction",
          content:
            "Welcome to dataMEFF. We are committed to protecting your privacy and ensuring you have a positive experience on our website. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.",
        },
        {
          heading: "Information We Collect",
          content:
            "We may collect information about you in a variety of ways. The information we may collect on the site includes:\n\n• Personal Data: Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and similar information.\n\n• Financial Information: Financial information, such as data related to your payment method (e.g., valid credit card number, card brand, expiration date) that we may collect when you purchase, order, return, exchange, or request information about our services from the site.\n\n• Data from Forms: Information you provide when you fill out forms on the website, such as contact forms or subscription forms.",
        },
        {
          heading: "Use of Your Information",
          content:
            "Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the site to:\n\n• Email you regarding your account or order.\n\n• Fulfill and manage purchases, orders, payments, and other transactions related to the site.\n\n• Generate a personal profile about you so that future visits to the site will be personalized as possible.\n\n• Improve the site to optimize the user experience.\n\n• Respond to your inquiries, comments, questions, and requests.",
        },
        {
          heading: "Disclosure of Your Information",
          content:
            "We may share or disclose your information in the following situations:\n\n• By Law or to Protect Rights: If we believe the release of information about you is necessary to comply with the law, enforce our site policies, or protect ours or others' rights, property, or safety.\n\n• Third-Party Service Providers: We may share your information with parties who perform services for us, including payment processing, data analysis, email delivery, hosting services, and customer service.",
        },
        {
          heading: "Security of Your Information",
          content:
            "We use administrative, technical, and physical security measures to protect your personal information. However, no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.",
        },
        {
          heading: "Contact Us",
          content:
            "If you have questions or comments about this Privacy Policy, please contact us at: info@datameff.com or through our contact form on the website.",
        },
      ],
    },
    es: {
      title: "Política de Privacidad",
      lastUpdated: "Última Actualización: Noviembre 2025",
      nav: {
        home: "Volver al Inicio",
      },
      sections: [
        {
          heading: "Introducción",
          content:
            "Bienvenido a dataMEFF. Nos comprometemos a proteger tu privacidad y garantizar que tengas una experiencia positiva en nuestro sitio web. Esta Política de Privacidad explica cómo recopilamos, utilizamos, divulgamos y protegemos tu información cuando visitas nuestro sitio web.",
        },
        {
          heading: "Información que Recopilamos",
          content:
            "Podemos recopilar información sobre ti de diversas formas. La información que podemos recopilar incluye:\n\n• Datos Personales: Información de identificación personal, como tu nombre, dirección, correo electrónico y número de teléfono, así como información demográfica.\n\n• Información Financiera: Información financiera, como datos relacionados con tu método de pago (número de tarjeta válido, marca, fecha de vencimiento) que podemos recopilar cuando realizas compras o solicitas información sobre nuestros servicios.\n\n• Datos de Formularios: Información que proporcionas al completar formularios en el sitio web, como formularios de contacto o suscripción.",
        },
        {
          heading: "Uso de Tu Información",
          content:
            "Tener información precisa sobre ti nos permite proporcionarte una experiencia suave, eficiente y personalizada. Específicamente, podemos usar la información recopilada sobre ti para:\n\n• Enviarte correos electrónicos sobre tu cuenta u orden.\n\n• Cumplir y gestionar compras, pedidos, pagos y otras transacciones.\n\n• Crear un perfil personal para que futuras visitas sean personalizadas.\n\n• Mejorar el sitio para optimizar la experiencia del usuario.\n\n• Responder a tus consultas, comentarios y solicitudes.",
        },
        {
          heading: "Divulgación de Tu Información",
          content:
            "Podemos compartir o divulgar tu información en las siguientes situaciones:\n\n• Por Ley o para Proteger Derechos: Si creemos que la divulgación de información sobre ti es necesaria para cumplir con la ley, hacer cumplir nuestras políticas o proteger derechos, propiedad o seguridad.\n\n• Proveedores de Servicios Terceros: Podemos compartir tu información con terceros que realizan servicios para nosotros, incluyendo procesamiento de pagos y servicio al cliente.",
        },
        {
          heading: "Seguridad de Tu Información",
          content:
            "Utilizamos medidas de seguridad administrativas, técnicas y físicas para proteger tu información personal. Sin embargo, ningún método de transmisión por Internet es 100% seguro. Aunque nos esforzamos por utilizar medios comercialmente aceptables, no podemos garantizar la seguridad absoluta.",
        },
        {
          heading: "Contacto",
          content:
            "Si tienes preguntas o comentarios sobre esta Política de Privacidad, contáctanos en: info@datameff.com o a través de nuestro formulario de contacto en el sitio web.",
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
