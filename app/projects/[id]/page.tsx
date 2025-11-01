"use client"

import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Download, Share2 } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

// Project data - Aquí agregas los detalles de cada proyecto
const projectsData = {
  "it-support": {
    title: "Soporte Técnico de TI",
    titleEn: "IT Technical Support",
    description: "Dashboard interactivo para monitoreo de tickets, tiempos de respuesta y métricas de soporte técnico.",
    descriptionEn: "Interactive dashboard for ticket monitoring, response times and technical support metrics.",
    longDescription:
      "Este proyecto desarrolla un dashboard Power BI completo que proporciona visibilidad en tiempo real de todas las operaciones de soporte técnico. Incluye métricas clave como tiempo de respuesta promedio, tasa de resolución, y análisis de tendencias de tickets.",
    longDescriptionEn:
      "This project develops a comprehensive Power BI dashboard providing real-time visibility into all technical support operations. It includes key metrics such as average response time, resolution rate, and ticket trend analysis.",
    tools: ["Microsoft Power BI", "Power Query", "Figma"],
    date: "2024",
    imageUrl: "/it-support-dashboard.jpg",
    features: [
      { name: "Real-time ticket monitoring", descEs: "Monitoreo de tickets en tiempo real" },
      { name: "KPI tracking", descEs: "Seguimiento de KPIs" },
      { name: "Team performance analytics", descEs: "Análisis de desempeño del equipo" },
      { name: "Trend forecasting", descEs: "Pronóstico de tendencias" },
    ],
    results: ["50% reduction in response time", "85% ticket resolution rate"],
    resultsEs: ["50% reducción en tiempo de respuesta", "85% tasa de resolución de tickets "],
    powerBiEmbedUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiOTcwMmQ5ZTItYTUwNC00MmUxLTk1NjAtNmZjNTg2NTA1ZmQ1IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9",
  },
  "sales-performance": {
    title: "Rendimiento de Ventas",
    titleEn: "Sales Performance",
    description: "Análisis detallado de ventas, rendimiento por equipo, tendencias y pronósticos de ingresos.",
    descriptionEn: "Detailed sales analysis, team performance, trends and revenue forecasts.",
    longDescription:
      "Dashboard ejecutivo que proporciona análisis profundo de ventas por región, producto y vendedor. Incluye proyecciones de ingresos, análisis de tendencias y benchmarking de desempeño.",
    longDescriptionEn:
      "Executive dashboard providing deep sales analysis by region, product and salesperson. Includes revenue projections, trend analysis and performance benchmarking.",
    tools: ["Microsoft Power BI", "Power Query", "Figma"],
    date: "2024",
    imageUrl: "/sales-performance-dashboard.jpg",
    features: [
      { name: "Revenue tracking", descEs: "Seguimiento de ingresos" },
      { name: "Regional analysis", descEs: "Análisis regional" },
      { name: "Sales forecasting", descEs: "Pronóstico de ventas" },
      { name: "Team rankings", descEs: "Ranking de equipos" },
    ],
    results: ["15% increase in sales", "Improved sales forecasting accuracy to 92%"],
    resultsEs: ["15% aumento en ventas", "Precisión de pronóstico mejorada al 92%"],
    powerBiEmbedUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiMDE4MzMwMjUtNTg2Yy00OTk5LWI5MTItZmIyODdiMWEyY2Q3IiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9",
  },
  "sports-products": {
    title: "Informe de Ventas de Productos Deportivos",
    titleEn: "Sports Products Sales Report",
    description: "Informe completo de ventas de productos deportivos con segmentación por categoría y región.",
    descriptionEn: "Comprehensive sports product sales report with category and regional segmentation.",
    longDescription:
      "Análisis especializado en el sector deportivo con desglose por categoría de producto, temporada y región geográfica. Incluye análisis de inventario, rotación de productos y tendencias de consumo.",
    longDescriptionEn:
      "Specialized analysis in the sports sector with breakdown by product category, season and geographic region. Includes inventory analysis, product rotation and consumption trends.",
    tools: ["Microsoft Power BI", "Power Query", "Figma"],
    date: "2023",
    imageUrl: "/sports-products-sales.jpg",
    features: [
      { name: "Product categorization", descEs: "Categorización de productos" },
      { name: "Seasonal trends", descEs: "Tendencias estacionales" },
      { name: "Inventory optimization", descEs: "Optimización de inventario" },
      { name: "Regional comparison", descEs: "Comparación regional" },
    ],
    results: ["Optimized inventory levels by 20%", "Identified best-selling categories"],
    resultsEs: ["Niveles de inventario optimizados en 20%", "Identificadas categorías más vendidas"],
    powerBiEmbedUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiMmE2ZGEyODQtOTlhYi00ZDI0LWIwZTUtZTY0NTJmMmUzODkwIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9",
  },
  "space-missions": {
    title: "Misiones Espaciales",
    titleEn: "Space Missions",
    description: "Visualización de datos sobre misiones espaciales, análisis de costos y timeline de proyectos.",
    descriptionEn: "Space missions data visualization, cost analysis and project timeline insights.",
    longDescription:
      "Proyecto de análisis de datos públicos de la NASA sobre misiones espaciales históricas. Incluye análisis de costos, líneas de tiempo de proyectos, métricas de éxito y comparativas entre agencias espaciales.",
    longDescriptionEn:
      "Project analyzing public NASA data on historical space missions. Includes cost analysis, project timelines, success metrics and comparisons between space agencies.",
    tools: ["Microsoft Power BI", "Power Query", "Figma"],
    date: "2023",
    imageUrl: "/space-missions-data.jpg",
    features: [
      { name: "Mission timeline", descEs: "Cronograma de misiones" },
      { name: "Cost analysis", descEs: "Análisis de costos" },
      { name: "Success rate metrics", descEs: "Métricas de tasa de éxito" },
      { name: "Agency comparison", descEs: "Comparación de agencias" },
    ],
    results: ["Visualized 60+ years of space mission data", "Identified cost optimization patterns"],
    resultsEs: [
      "Visualizados 60+ años de datos de misiones espaciales",
      "Identificados patrones de optimización de costos",
    ],
    powerBiEmbedUrl:
      "https://app.powerbi.com/view?r=eyJrIjoiNDcwM2FlZTktMTc4ZC00MWY0LWE3OGYtOTg2YjEyNTBjNGQyIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05OWFjLWM4M2VkN2ZmOTVhMCJ9",
  },
  "Finance-Dashboard": {
title: "Finance-Dashboard",
titleEn: "Dashboard Financiero",
description: "Estados Financieros Generales.",
descriptionEn: "General financial statements.",
longDescription:
  "Proyecto de análisis de datos públicos de la NASA sobre misiones espaciales históricas. Incluye análisis de costos, líneas 
longDescriptionEn:
  "Project analyzing public NASA data on historical space missions. Includes cost analysis, project timelines, success metrics
tools: ["Microsoft Power BI", "Power Query", "Figma"],
date: "2023",
imageUrl: "/space-missions-data.jpg",
features: [
  { name: "Mission timeline", descEs: "Cronograma de misiones" },
  { name: "Cost analysis", descEs: "Análisis de costos" },
  { name: "Success rate metrics", descEs: "Métricas de tasa de éxito" },
  { name: "Agency comparison", descEs: "Comparación de agencias" },
],
results: ["Visualized 60+ years of space mission data", "Identified cost optimization patterns"],
resultsEs: [
  "Visualizados 60+ años de datos de misiones espaciales",
  "Identificados patrones de optimización de costos",
],
powerBiEmbedUrl:
  "https://app.powerbi.com/view?r=eyJrIjoiNDcwM2FlZTktMTc4ZC00MWY0LWE3OGYtOTg2YjEyNTBjNGQyIiwidCI6ImRmODY3OWNkLWE4MGUtNDVkOC05
  },
}

export default function ProjectDetail() {
  const params = useParams()
  const router = useRouter()
  const [language, setLanguage] = useState<"en" | "es">("en")

  const project = projectsData[params.id as keyof typeof projectsData]

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            {language === "es" ? "Proyecto no encontrado" : "Project not found"}
          </h1>
          <Button onClick={() => router.back()}>{language === "es" ? "Volver" : "Go Back"}</Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Button variant="ghost" onClick={() => router.back()} className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            {language === "es" ? "Volver" : "Go Back"}
          </Button>
          <div className="flex gap-2 items-center">
            <div className="flex items-center gap-2">
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
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              {language === "es" ? "Compartir" : "Share"}
            </Button>
            <Button size="sm" className="bg-accent-pink hover:bg-accent-pink/90 text-white">
              <Download className="w-4 h-4 mr-2" />
              {language === "es" ? "Descargar" : "Download"}
            </Button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="space-y-12">
          {/* Header */}
          <div className="space-y-4">
            <h1 className="font-display text-5xl font-bold">{language === "es" ? project.title : project.titleEn}</h1>
            <p className="text-xl text-muted-foreground">
              {language === "es" ? project.description : project.descriptionEn}
            </p>
            <div className="flex gap-2 flex-wrap">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-accent-pink/10 text-accent-pink rounded-full text-sm border border-accent-pink/20"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Main Image */}
          <div className="relative aspect-video rounded-xl overflow-hidden shadow-xl">
            <Image
              src={project.imageUrl || "/placeholder.svg"}
              alt={language === "es" ? project.title : project.titleEn}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              {/* Long Description */}
              <div>
                <h2 className="font-display text-2xl font-bold mb-4">
                  {language === "es" ? "Sobre este proyecto" : "About this project"}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {language === "es" ? project.longDescription : project.longDescriptionEn}
                </p>
              </div>

              {/* Features */}
              <div>
                <h2 className="font-display text-2xl font-bold mb-6">
                  {language === "es" ? "Características Principales" : "Key Features"}
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="p-4 bg-muted/50 rounded-lg border border-border">
                      <h3 className="font-semibold mb-2">{language === "es" ? feature.descEs : feature.name}</h3>
                    </div>
                  ))}
                </div>
              </div>

              {/* Results */}
              <div>
                <h2 className="font-display text-2xl font-bold mb-6">{language === "es" ? "Resultados" : "Results"}</h2>
                <div className="space-y-3">
                  {(language === "es" ? project.resultsEs : project.results).map((result, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent-pink rounded-full mt-2 flex-shrink-0" />
                      <p className="text-lg text-muted-foreground">{result}</p>
                    </div>
                  ))}
                </div>
              </div>

              {project.powerBiEmbedUrl && (
                <div>
                  <h2 className="font-display text-2xl font-bold mb-6">
                    {language === "es" ? "Dashboard en vivo" : "Live Dashboard"}
                  </h2>
                  <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-xl border border-border">
                    <iframe
                      title={language === "es" ? project.title : project.titleEn}
                      src={project.powerBiEmbedUrl}
                      className="w-full h-full border-0"
                      allowFullScreen={true}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Info Card */}
              <div className="bg-accent-pink/10 rounded-lg p-6 border border-accent-pink/20">
                <h3 className="font-display text-lg font-bold mb-4">{language === "es" ? "Detalles" : "Details"}</h3>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{language === "es" ? "Fecha" : "Date"}</p>
                    <p className="font-semibold">{project.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">{language === "es" ? "Herramientas" : "Tools"}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <span key={tool} className="text-xs px-2 py-1 bg-accent-pink/20 text-accent-pink rounded">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <Button className="w-full bg-accent-pink hover:bg-accent-pink/90 text-white py-6">
                {language === "es" ? "Ver demostración en vivo" : "View live demo"}
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
