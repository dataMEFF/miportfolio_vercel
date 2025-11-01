import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono, Expletus_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })
const _expletusSans = Expletus_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  title: "dataMEFF | Data Analyst & Virtual Assistant",
  description:
    "Creative solutions, connected data. I help small businesses uncover the hidden stories in their data and processes.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/favicon-cup.png",
        type: "image/png",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased ${_expletusSans.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
