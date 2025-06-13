"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

export default function ConstellationLines() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <div ref={containerRef} className="fixed inset-0 pointer-events-none z-5">
      <svg className="w-full h-full" viewBox="0 0 1920 1080">
        <motion.path
          d="M100,100 L300,200 L500,150 L700,300 L900,250 L1100,400 L1300,350 L1500,500"
          stroke="rgba(59, 130, 246, 0.3)"
          strokeWidth="1"
          fill="none"
          style={{ pathLength }}
          initial={{ pathLength: 0 }}
        />
        <motion.path
          d="M200,800 L400,700 L600,750 L800,600 L1000,650 L1200,500 L1400,550 L1600,400"
          stroke="rgba(147, 51, 234, 0.3)"
          strokeWidth="1"
          fill="none"
          style={{ pathLength }}
          initial={{ pathLength: 0 }}
        />
      </svg>
    </div>
  )
}
