import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sahil Upadhyay - Frontend Developer",
  description:
    "Space-themed portfolio of Sahil Upadhyay, a passionate Frontend Developer with 1.5+ years of experience in React.js and modern web technologies.",
  keywords: "frontend developer, react developer, web developer, javascript, portfolio",
  authors: [{ name: "Sahil Upadhyay" }],
  openGraph: {
    title: "Sahil Upadhyay - Frontend Developer",
    description: "Crafting stellar digital experiences with modern web technologies",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
