"use client"

import { useRef } from "react"
import { useScroll, useTransform } from "framer-motion"
import Hero from "../components/hero"
import About from "../components/about"
import Experience from "../components/experience"
import Projects from "../components/projects"
import Skills from "../components/skills"
import Education from "../components/education"
import Languages from "../components/languages"
import Contact from "../components/contact"
import StarField from "../components/star-field"
import ConstellationLines from "../components/constellation-lines"

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3])

  return (
    <div ref={containerRef} className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Starfield Background */}
      <div className="fixed inset-0 z-0">
        <StarField />
      </div>

      {/* Constellation Lines */}
      <ConstellationLines />

      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Languages />
        <Contact />
      </div>
    </div>
  )
}
