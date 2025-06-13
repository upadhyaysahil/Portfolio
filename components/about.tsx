"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-8">
          About Me
        </h2>

        <div className="max-w-4xl mx-auto">
          <motion.p
            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I'm a passionate Frontend Developer with 1.5+ years of hands-on experience in building dynamic, user-centric
            web applications. My journey in web development has been driven by a love for creating seamless user
            experiences and clean, intuitive interfaces.
          </motion.p>

          <motion.p
            className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Specializing in React.js and modern web technologies, I've developed real-time applications that prioritize
            performance optimization and exceptional user experience. My focus lies in transforming complex ideas into
            elegant, functional solutions that users love to interact with.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20">
              <h3 className="text-2xl font-bold text-blue-400 mb-2">1.5+</h3>
              <p className="text-gray-300">Years Experience</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
              <h3 className="text-2xl font-bold text-purple-400 mb-2">10+</h3>
              <p className="text-gray-300">Projects Completed</p>
            </div>
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-pink-500/10 to-blue-500/10 border border-pink-500/20">
              <h3 className="text-2xl font-bold text-pink-400 mb-2">100%</h3>
              <p className="text-gray-300">Client Satisfaction</p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
