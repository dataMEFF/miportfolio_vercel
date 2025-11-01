"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import AetherFlowHero from "@/components/ui/aether-flow-hero"
import {
  Menu,
  X,
  ChevronRight,
  Database,
  BarChart3,
  Zap,
  BookOpen,
  Download,
  Linkedin,
  Instagram,
  Youtube,
  Github,
} from "lucide-react"
import Image from "next/image"
import { projectsData } from "@/data/projects"
import { blogPostsData } from "@/data/blog"

export default function DataMEFFWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [language, setLanguage] = useState<"en" | "es">("en")
  const [displayedProjects, setDisplayedProjects] = useState(3)
  const [currentBlogPage, setCurrentBlogPage] = useState(1)
  const itemsPerBlogPage = 3

  const content = {
    en: {
      nav: {
        home: "Home",
        about: "About",
        services: "Services",
        portfolio: "Portfolio",
        blog: "Blog",
        resources: "Resources",
        contact: "Contact",
      },
      hero: {
        title: "Creative solutions, connected data.",
        highlightWord: "connected",
        subtitle: "I help small businesses uncover the hidden stories in their data and processes.",
        cta1: "Explore Projects",
        cta2: "Book a Call",
      },
      about: {
        title: "My mission is to bring clarity.",
        tagline:
          "Where data meets coffee ☕ — Because the best insights are brewed with patience, precision, and passion.",
        description:
          "I'm María Elsa Fariñas Farrera, an economist turned data analyst and virtual assistant. After years working in administrative areas, I discovered a constant pattern: too much data, little analysis, and decisions made in the dark. In 2020, I decided to change that. I specialized in data analysis with Power BI, and since then I've been helping small businesses and entrepreneurs transform confusion into clarity. I design simple, visual and actionable dashboards that show what really matters: what works, what doesn't and where the bottleneck is. I don't believe in reports that impress, but in tools that drive smart decisions. At dataMEFF, I combine data analysis, automation and executive support so you can focus on growing, not on organizing files. I'm passionate about turning chaotic data into clear strategies, integrating AI and organization to free up time and reveal opportunities. And when I'm not between graphs and metrics, I'm probably with a coffee in hand, exploring the latest trends in artificial intelligence and business analytics. If you have data but no clarity, maybe I can help you connect the dots.",
        techStack: "Tech Stack",
        technicalSkills: "Technical Skills",
        skills: [
          "Data Analysis",
          "Data Visualization",
          "Business Intelligence",
          "Administrative Management",
          "Report Automation",
          "KPI Development",
        ],
      },
      services: {
        title: "Services",
        subtitle: "Tailored solutions for your business needs",
        items: [
          {
            name: "Ctrl+Alt+Auto ⚙️",
            description: "Automate repetitive tasks and streamline your workflows with custom automation solutions.",
            icon: Zap,
          },
          {
            name: "Operational X-Ray 📦",
            description:
              "Deep dive into your business processes to identify bottlenecks and optimization opportunities.",
            icon: BarChart3,
          },
          {
            name: "Dashboard Design 📊",
            description: "Interactive dashboards that transform complex data into clear, actionable insights.",
            icon: Database,
          },
          {
            name: "Data Consulting 💡",
            description: "Strategic guidance on data strategy, BI implementation, and analytics best practices.",
            icon: BookOpen,
          },
        ],
      },
      portfolio: {
        title: "Portfolio",
        subtitle: "Recent projects and success stories",
        viewProject: "View Project",
      },
      blog: {
        title: "Blog",
        subtitle: "Insights, tips, and data stories",
        readMore: "Read more",
      },
      resources: {
        title: "Free Resources",
        subtitle: "Templates, guides, and tools to help you get started",
        download: "Download",
      },
      contact: {
        title: "Let's Connect",
        subtitle: "Ready to transform your data into insights?",
        name: "Name",
        email: "Email",
        message: "Message",
        send: "Send Message",
      },
      footer: {
        copyright: "© 2025 dataMEFF. Crafted with data, passion ❤️ and coffee ☕.",
        privacy: "Privacy Policy",
        terms: "Terms of Service",
      },
      values: ["Integrity", "Transparency", "Curiosity", "Continuous Learning"],
    },
    es: {
      nav: {
        home: "Inicio",
        about: "Sobre mí",
        services: "Servicios",
        portfolio: "Portafolio",
        blog: "Blog",
        resources: "Recursos",
        contact: "Contacto",
      },
      hero: {
        title: "Soluciones creativas, datos conectados.",
        highlightWord: "conectados",
        subtitle: "Ayudo a pequeñas empresas a descubrir las historias ocultas en sus datos y procesos.",
        cta1: "Explorar Proyectos",
        cta2: "Agendar Llamada",
      },
      about: {
        title: "Mi misión es aportar claridad.",
        tagline:
          "Donde los datos se encuentran con el café ☕ — Porque los mejores insights se preparan con paciencia, precisión y pasión.",
        description:
          "Soy María Elsa Fariñas Farrera, economista convertida en analista de datos y asistente virtual. Después de años trabajando en áreas administrativas, descubrí un patrón constante: demasiados datos, poco análisis y decisiones tomadas a ciegas. En 2020 decidí cambiar eso. Me especialicé en análisis de datos con Power BI, y desde entonces ayudo a pequeñas empresas y emprendedores a transformar la confusión en claridad. Diseño dashboards simples, visuales y accionables que muestran lo que realmente importa: qué funciona, qué no y dónde está el cuello de botella. No creo en los informes que impresionan, sino en las herramientas que impulsan decisiones inteligentes. En DataMEFF, combino análisis de datos, automatización y soporte ejecutivo para que puedas enfocarte en crecer, no en ordenar archivos. Me apasiona convertir datos caóticos en estrategias claras, integrando IA y organización para liberar tiempo y revelar oportunidades. Y cuando no estoy entre gráficos y métricas, probablemente esté con un café en mano, explorando las últimas tendencias en inteligencia artificial y analítica de negocios. Si tienes datos pero no claridad, tal vez yo pueda ayudarte a conectar los puntos.",
        techStack: "Stack Tecnológico",
        technicalSkills: "Habilidades Técnicas",
        skills: [
          "Análisis de datos",
          "Visualización de datos",
          "Business Intelligence",
          "Gestión administrativa",
          "Automatización de reportes",
          "Desarrollo de KPIs",
        ],
      },
      services: {
        title: "Servicios",
        subtitle: "Soluciones personalizadas para tu negocio",
        items: [
          {
            name: "Ctrl+Alt+Auto ⚙️",
            description:
              "Automatiza tareas repetitivas y optimiza tus flujos de trabajo con soluciones personalizadas.",
            icon: Zap,
          },
          {
            name: "Rayos X Operacional 📦",
            description: "Análisis profundo de tus procesos para identificar cuellos de botella y oportunidades.",
            icon: BarChart3,
          },
          {
            name: "Diseño de Dashboards 📊",
            description: "Dashboards interactivos que transforman datos complejos en insights claros y accionables.",
            icon: Database,
          },
          {
            name: "Consultoría de Datos 💡",
            description: "Orientación estratégica en estrategia de datos, implementación de BI y mejores prácticas.",
            icon: BookOpen,
          },
        ],
      },
      portfolio: {
        title: "Portafolio",
        subtitle: "Proyectos recientes e historias de éxito",
        viewProject: "Ver Proyecto",
      },
      blog: {
        title: "Blog",
        subtitle: "Insights, consejos e historias de datos",
        readMore: "Leer más",
      },
      resources: {
        title: "Recursos Gratuitos",
        subtitle: "Plantillas, guías y herramientas para comenzar",
        download: "Descargar",
      },
      contact: {
        title: "Conectemos",
        subtitle: "¿Listo para transformar tus datos en insights?",
        name: "Nombre",
        email: "Correo",
        message: "Mensaje",
        send: "Enviar Mensaje",
      },
      footer: {
        copyright: "© 2025 dataMEFF. Creado con datos, pasión ❤️ y café ☕.",
        privacy: "Política de Privacidad",
        terms: "Términos de Servicio",
      },
      values: ["Integridad", "Transparencia", "Curiosidad", "Aprendizaje continuo"],
    },
  }

  const t = content[language]

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  const ValuesMarquee = ({ opacity = "opacity-30" }: { opacity?: string }) => (
    <div className={`relative overflow-hidden py-3 ${opacity}`}>
      <div className="flex gap-8 animate-[scroll_25s_linear_infinite] whitespace-nowrap">
        {/* First set */}
        <div className="flex gap-8 items-center shrink-0">
          {t.values.map((value, index) => (
            <span key={index} className="text-sm font-medium text-muted-foreground">
              {value}
            </span>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="flex gap-8 items-center shrink-0">
          {t.values.map((value, index) => (
            <span key={`dup-${index}`} className="text-sm font-medium text-muted-foreground">
              {value}
            </span>
          ))}
        </div>
        {/* Triple for extra smoothness */}
        <div className="flex gap-8 items-center shrink-0">
          {t.values.map((value, index) => (
            <span key={`trip-${index}`} className="text-sm font-medium text-muted-foreground">
              {value}
            </span>
          ))}
        </div>
      </div>
    </div>
  )

  const renderHighlightedTitle = (title: string, highlightWord: string) => {
    const parts = title.split(highlightWord)
    if (parts.length === 1) return title

    return (
      <>
        {parts[0]}
        <span className="relative inline-block">
          <span className="relative z-10">{highlightWord}</span>
          <svg
            className="absolute -inset-1 w-full h-full"
            viewBox="0 0 200 60"
            preserveAspectRatio="none"
            style={{ left: "-4px", top: "-2px" }}
          >
            <path
              d="M5,30 Q50,10 100,25 T195,30 Q190,35 185,32 T100,35 Q50,40 10,32 Z"
              fill="none"
              stroke="#E6FB6B"
              strokeWidth="3"
              strokeLinecap="round"
              className="animate-[draw_1.5s_ease-in-out_forwards]"
            />
          </svg>
        </span>
        {parts[1]}
      </>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Custom Cursor */}
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        
        @keyframes draw {
          0% { stroke-dasharray: 0 1000; }
          100% { stroke-dasharray: 1000 0; }
        }
        
        @keyframes floatSlow {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(10px, -10px) rotate(5deg); }
          66% { transform: translate(-10px, 10px) rotate(-5deg); }
        }
        
        body {
          cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%23FF1991' strokeWidth='2'%3E%3Cpath d='M18 8h1a4 4 0 0 1 0 8h-1'/%3E%3Cpath d='M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z'/%3E%3Cline x1='6' y1='1' x2='6' y2='4'/%3E%3Cline x1='10' y1='1' x2='10' y2='4'/%3E%3Cline x1='14' y1='1' x2='14' y2='4'/%3E%3C/svg%3E") 12 12, auto;
        }
        
        a:hover, button:hover {
          cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='%23E6FB6B' stroke='%23FF1991' strokeWidth='2'%3E%3Cpath d='M18 8h1a4 4 0 0 1 0 8h-1'/%3E%3Cpath d='M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z'/%3E%3Cline x1='6' y1='1' x2='6' y2='4'/%3E%3Cline x1='10' y1='1' x2='10' y2='4'/%3E%3Cline x1='14' y1='1' x2='14' y2='4'/%3E%3C/svg%3E") 12 12, pointer;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/40 backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(31,38,135,0.37)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-2">
              <Image
                src="/logo-header.png"
                alt="dataMEFF"
                width={240}
                height={80}
                className="h-16 w-auto dark:hidden"
              />
              <Image
                src="/logo-header.png"
                alt="dataMEFF"
                width={240}
                height={80}
                className="h-16 w-auto hidden dark:block"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("home")}
                className="text-sm hover:text-accent-pink transition-colors"
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm hover:text-accent-pink transition-colors"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm hover:text-accent-pink transition-colors"
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-sm hover:text-accent-pink transition-colors"
              >
                {t.nav.portfolio}
              </button>
              <button
                onClick={() => scrollToSection("blog")}
                className="text-sm hover:text-accent-pink transition-colors"
              >
                {t.nav.blog}
              </button>
              <button
                onClick={() => scrollToSection("resources")}
                className="text-sm hover:text-accent-pink transition-colors"
              >
                {t.nav.resources}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm hover:text-accent-pink transition-colors"
              >
                {t.nav.contact}
              </button>

              <div className="flex items-center gap-2 ml-4">
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

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left py-2 hover:text-accent-pink transition-colors"
              >
                {t.nav.home}
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left py-2 hover:text-accent-pink transition-colors"
              >
                {t.nav.about}
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="block w-full text-left py-2 hover:text-accent-pink transition-colors"
              >
                {t.nav.services}
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block w-full text-left py-2 hover:text-accent-pink transition-colors"
              >
                {t.nav.portfolio}
              </button>
              <button
                onClick={() => scrollToSection("blog")}
                className="block w-full text-left py-2 hover:text-accent-pink transition-colors"
              >
                {t.nav.blog}
              </button>
              <button
                onClick={() => scrollToSection("resources")}
                className="block w-full text-left py-2 hover:text-accent-pink transition-colors"
              >
                {t.nav.resources}
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block w-full text-left py-2 hover:text-accent-pink transition-colors"
              >
                {t.nav.contact}
              </button>
              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => setLanguage("en")}
                  className={`text-sm px-3 py-1 rounded ${language === "en" ? "bg-accent-pink text-white" : "bg-muted"}`}
                >
                  EN
                </button>
                <button
                  onClick={() => setLanguage("es")}
                  className={`text-sm px-3 py-1 rounded ${language === "es" ? "bg-accent-pink text-white" : "bg-muted"}`}
                >
                  ES
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      <AetherFlowHero
        onExplore={() => scrollToSection("portfolio")}
        onBook={() => scrollToSection("contact")}
        language={language}
      />

      <ValuesMarquee opacity="opacity-50" />

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto bg-card rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-border/50 p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative flex items-center justify-center py-12">
              {/* Main photo with irregular rounded shape */}
              <div className="relative w-[400px] h-[400px]">
                <div
                  className="absolute inset-0 overflow-hidden"
                  style={{
                    borderRadius: "63% 37% 54% 46% / 55% 48% 52% 45%",
                  }}
                >
                  <Image src="/about-photo.png" alt="Data Analyst at work" fill className="object-cover" priority />
                </div>

                {/* Floating stat bubbles */}
                <div
                  className="absolute -top-4 -right-4 bg-accent-pink text-white px-6 py-3 rounded-full shadow-lg font-semibold text-sm whitespace-nowrap"
                  style={{ animation: "float 3s ease-in-out infinite" }}
                >
                  +5 {language === "es" ? "años experiencia" : "years experience"}
                </div>

                <div
                  className="absolute top-1/4 -left-8 bg-accent-yellow text-accent-blue px-6 py-3 rounded-full shadow-lg font-semibold text-sm whitespace-nowrap"
                  style={{ animation: "float 3s ease-in-out infinite 0.5s" }}
                >
                  +50 {language === "es" ? "proyectos" : "projects"}
                </div>

                <div
                  className="absolute bottom-12 -right-8 bg-accent-orange text-white px-6 py-3 rounded-full shadow-lg font-semibold text-sm whitespace-nowrap"
                  style={{ animation: "float 3s ease-in-out infinite 1s" }}
                >
                  +30 {language === "es" ? "clientes" : "clients"}
                </div>

                <div
                  className="absolute -bottom-4 left-1/4 bg-accent-blue text-white px-6 py-3 rounded-full shadow-lg font-semibold text-sm whitespace-nowrap"
                  style={{ animation: "float 3s ease-in-out infinite 1.5s" }}
                >
                  100% {language === "es" ? "dedicación" : "dedication"}
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-display text-5xl sm:text-6xl font-bold mb-8 text-balance text-accent-blue leading-tight">
                {t.about.title}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-light">{t.about.description}</p>
            </div>
          </div>

          {/* Updated section to use the colorful logo before the tagline */}
          <div className="flex flex-col items-center justify-center gap-6 mb-16 py-8 border-y border-border/30">
            <Image src="/logo-about.png" alt="dataMEFF" width={280} height={100} className="h-24 w-auto" />
            <p className="text-center text-muted-foreground italic max-w-2xl text-xl font-medium leading-relaxed">
              {t.about.tagline}
            </p>
          </div>

          <div className="space-y-8 mb-12">
            <h3 className="font-display text-2xl font-semibold text-center text-accent-blue">{t.about.techStack}</h3>
            <div className="relative overflow-hidden py-8">
              <div className="flex gap-12 animate-[scroll_30s_linear_infinite]">
                {/* First set of logos */}
                <div className="flex gap-12 items-center shrink-0">
                  <Image
                    src="/tech/gsuite.png"
                    alt="Google Suite"
                    width={80}
                    height={80}
                    className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                  <Image
                    src="/tech/notion.png"
                    alt="Notion"
                    width={80}
                    height={80}
                    className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                  <Image
                    src="/tech/bitrix24.jpeg"
                    alt="Bitrix24"
                    width={80}
                    height={80}
                    className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                  <Image
                    src="/tech/python.png"
                    alt="Python"
                    width={80}
                    height={80}
                    className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                  <Image
                    src="/tech/figma.webp"
                    alt="Figma"
                    width={80}
                    height={80}
                    className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                  <Image
                    src="/tech/canva.webp"
                    alt="Canva"
                    width={80}
                    height={80}
                    className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                  <Image
                    src="/tech/microsoft.webp"
                    alt="Microsoft"
                    width={80}
                    height={80}
                    className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                  <Image
                    src="/tech/powerbi.webp"
                    alt="Power BI"
                    width={80}
                    height={80}
                    className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                  <Image
                    src="/tech/sql.png"
                    alt="SQL"
                    width={80}
                    height={80}
                    className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                  <Image
                    src="/tech/terraform.png"
                    alt="Terraform"
                    width={80}
                    height={80}
                    className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex gap-12 items-center shrink-0">
                  <Image
                    src="/tech/gsuite.png"
                    alt="Google Suite"
                    width={80}
                    height={80}
                    className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                  <Image
                    src="/tech/notion.png"
                    alt="Notion"
                    width={80}
                    height={80}
                    className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                  <Image
                    src="/tech/bitrix24.jpeg"
                    alt="Bitrix24"
                    width={80}
                    height={80}
                    className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                  <Image
                    src="/tech/python.png"
                    alt="Python"
                    width={80}
                    height={80}
                    className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                  <Image
                    src="/tech/figma.webp"
                    alt="Figma"
                    width={80}
                    height={80}
                    className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                  <Image
                    src="/tech/canva.webp"
                    alt="Canva"
                    width={80}
                    height={80}
                    className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                  <Image
                    src="/tech/microsoft.webp"
                    alt="Microsoft"
                    width={80}
                    height={80}
                    className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                  <Image
                    src="/tech/powerbi.webp"
                    alt="Power BI"
                    width={80}
                    height={80}
                    className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                  <Image
                    src="/tech/sql.png"
                    alt="SQL"
                    width={80}
                    height={80}
                    className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                  <Image
                    src="/tech/terraform.png"
                    alt="Terraform"
                    width={80}
                    height={80}
                    className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 space-y-8">
            <h3 className="font-display text-2xl font-semibold text-center text-accent-blue">
              {t.about.technicalSkills}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {t.about.skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-accent-pink/10 text-accent-pink rounded-full text-sm font-medium border border-accent-pink/20 hover:bg-accent-pink/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
              <span className="px-4 py-2 bg-accent-pink/10 text-accent-pink rounded-full text-sm font-medium border border-accent-pink/20 hover:bg-accent-pink/20 transition-colors">
                {language === "es" ? "Asistencia Virtual" : "Virtual Assistant"}
              </span>
            </div>
          </div>
        </div>
      </section>

      <ValuesMarquee />

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto bg-card rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-border/50 p-8 md:p-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl sm:text-6xl font-bold mb-6 text-accent-blue leading-tight">
              {t.services.title}
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">{t.services.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {t.services.items.map((service, index) => {
              const Icon = service.icon
              return (
                <Card key={index} className="p-6 hover:border-accent-pink transition-all hover:shadow-lg">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent-yellow/20 rounded-lg">
                      <Icon className="w-6 h-6 text-accent-blue" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl font-semibold mb-2">{service.name}</h3>
                      <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      <ValuesMarquee />

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto bg-card rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-border/50 p-8 md:p-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl sm:text-6xl font-bold mb-6 text-accent-blue leading-tight">
              {t.portfolio.title}
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">{t.portfolio.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.slice(0, displayedProjects).map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all group cursor-pointer"
                onClick={() => (window.location.href = `/projects/${project.id}`)}
              >
                <div className="h-32 relative overflow-hidden flex items-center justify-center bg-gradient-to-br from-accent-blue to-accent-pink">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={language === "es" ? project.title : project.titleEn}
                    width={400}
                    height={128}
                    className="object-cover group-hover:scale-105 transition-transform w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {language === "es" ? project.title : project.titleEn}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {language === "es" ? project.description : project.descriptionEn}
                  </p>
                  <Button variant="ghost" className="group-hover:text-accent-pink p-0 h-auto">
                    {t.portfolio.viewProject}
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More Button for Projects */}
          {displayedProjects < projectsData.length && (
            <div className="flex justify-center mt-12">
              <Button
                onClick={() => setDisplayedProjects((prev) => Math.min(prev + 3, projectsData.length))}
                size="lg"
                className="bg-accent-pink hover:bg-accent-pink/90 text-white"
              >
                {language === "es" ? "Cargar más proyectos" : "Load More Projects"}
              </Button>
            </div>
          )}

          {/* Show all projects loaded message */}
          {displayedProjects >= projectsData.length && projectsData.length > 3 && (
            <div className="flex justify-center mt-12">
              <p className="text-muted-foreground text-sm">
                {language === "es"
                  ? `Mostrando todos los ${projectsData.length} proyectos`
                  : `Showing all ${projectsData.length} projects`}
              </p>
            </div>
          )}
        </div>
      </section>

      <ValuesMarquee />

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-7xl mx-auto bg-card rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-border/50 p-8 md:p-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl sm:text-6xl font-bold mb-6 text-accent-blue leading-tight">
              {t.blog.title}
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">{t.blog.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {blogPostsData
              .slice((currentBlogPage - 1) * itemsPerBlogPage, currentBlogPage * itemsPerBlogPage)
              .map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-xl transition-all">
                  <div className="aspect-video bg-gradient-to-br from-accent-yellow to-accent-orange relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <BookOpen className="w-16 h-16 text-white/80" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-sm text-muted-foreground mb-2">
                      {language === "es" ? post.dateEs : post.dateEn}
                    </div>
                    <h3 className="font-display text-xl font-semibold mb-2">
                      {language === "es" ? post.titleEs : post.titleEn}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {language === "es" ? post.descriptionEs : post.descriptionEn}
                    </p>
                    <Button variant="link" className="p-0 h-auto text-accent-pink">
                      {t.blog.readMore}
                      <ChevronRight className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
          </div>

          {/* Pagination for Blog */}
          {blogPostsData.length > itemsPerBlogPage && (
            <div className="flex justify-center items-center gap-4 mt-12">
              <Button
                variant="outline"
                onClick={() => setCurrentBlogPage((prev) => Math.max(1, prev - 1))}
                disabled={currentBlogPage === 1}
              >
                {language === "es" ? "Anterior" : "Previous"}
              </Button>

              <div className="flex gap-2">
                {Array.from({ length: Math.ceil(blogPostsData.length / itemsPerBlogPage) }).map((_, index) => (
                  <Button
                    key={index}
                    variant={currentBlogPage === index + 1 ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentBlogPage(index + 1)}
                    className={currentBlogPage === index + 1 ? "bg-accent-pink hover:bg-accent-pink/90 text-white" : ""}
                  >
                    {index + 1}
                  </Button>
                ))}
              </div>

              <Button
                variant="outline"
                onClick={() =>
                  setCurrentBlogPage((prev) => Math.min(Math.ceil(blogPostsData.length / itemsPerBlogPage), prev + 1))
                }
                disabled={currentBlogPage === Math.ceil(blogPostsData.length / itemsPerBlogPage)}
              >
                {language === "es" ? "Siguiente" : "Next"}
              </Button>
            </div>
          )}
        </div>
      </section>

      <ValuesMarquee />

      {/* Resources Section */}
      <section id="resources" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto bg-card rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-border/50 p-8 md:p-12">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl sm:text-6xl font-bold mb-6 text-accent-blue leading-tight">
              {t.resources.title}
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">{t.resources.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Dashboard Template", "Data Analysis Guide", "Automation Checklist"].map((resource, index) => (
              <Card key={index} className="p-6 hover:border-accent-yellow transition-all">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-blue/20 rounded-lg">
                    <Download className="w-6 h-6 text-accent-pink" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-semibold mb-2">{resource}</h3>
                    <Button variant="link" className="p-0 h-auto text-accent-pink">
                      {t.resources.download}
                      <ChevronRight className="ml-1 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ValuesMarquee />

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-muted/20">
        <div className="max-w-3xl mx-auto bg-card rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-border/50 p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="font-display text-5xl sm:text-6xl font-bold mb-6 text-accent-blue leading-tight">
              {t.contact.title}
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto">{t.contact.subtitle}</p>
          </div>

          <Card className="p-8">
            <form className="space-y-6" action="https://formspree.io/f/xldookwl" method="POST">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  {t.contact.name}
                </label>
                <Input id="name" name="name" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  {t.contact.email}
                </label>
                <Input id="email" name="email" type="email" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  {t.contact.message}
                </label>
                <Textarea id="message" name="message" rows={5} required />
              </div>
              <Button type="submit" size="lg" className="w-full bg-accent-pink hover:bg-accent-pink/90 text-white">
                {t.contact.send}
              </Button>
            </form>
          </Card>

          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://instagram.com/datameff"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:bg-muted rounded-full transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/meff"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:bg-muted rounded-full transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://youtube.com/@DATAMEFF"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:bg-muted rounded-full transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a
              href="https://github.com/dataMEFF"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:bg-muted rounded-full transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      <ValuesMarquee />

      <footer className="py-12 px-4 sm:px-6 lg:px-8 bg-accent-blue text-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center md:text-left">
              <p className="text-white/90 text-sm">© 2025 datameff</p>
              <Image src="/logo-about.png" alt="dataMEFF Logo" width={280} height={100} className="h-12 w-auto" />
              <p className="text-white/90 text-sm">{t.footer.copyright}</p>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-white/80 hover:text-white transition-colors">
                {t.footer.privacy}
              </a>
              <a href="/terms" className="text-white/80 hover:text-white transition-colors">
                {t.footer.terms}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
