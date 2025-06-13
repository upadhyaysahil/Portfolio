"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Globe } from "lucide-react"

export default function Languages() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const languages = [
    { name: "English", level: "Fluent", proficiency: 95 },
    { name: "Hindi", level: "Native", proficiency: 100 },
    { name: "Marathi", level: "Native", proficiency: 100 },
    { name: "Spanish", level: "Beginner", proficiency: 30 },
  ]

  return (
    <section ref={ref} className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent mb-8">
          Languages
        </h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center justify-center mb-8">
              <div className="p-3 rounded-full bg-emerald-500/20 mr-4">
                <Globe className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Multilingual Communication</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {languages.map((language, index) => (
                <motion.div
                  key={language.name}
                  className="p-6 rounded-lg bg-gray-800/50 border border-gray-600/30"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <h4 className="text-lg font-semibold text-white">{language.name}</h4>
                    <span className="text-sm text-emerald-400 font-medium">{language.level}</span>
                  </div>

                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-emerald-400 to-teal-500 h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${language.proficiency}%` } : { width: 0 }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  </div>

                  <div className="mt-2 text-right">
                    <span className="text-xs text-gray-400">{language.proficiency}%</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
