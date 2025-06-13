"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Calendar, MapPin, Briefcase } from "lucide-react"

export default function Experience() {
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
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-8">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          <motion.div
            className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border border-gray-700/50 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center mb-6">
              <div className="p-3 rounded-full bg-blue-500/20 mr-4">
                <Briefcase className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Frontend Developer</h3>
                <p className="text-xl text-blue-400 font-semibold">AltissAdvance Technologies Pvt. Ltd.</p>
              </div>
            </div>

            <div className="flex items-center text-gray-400 mb-6 space-x-4">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span>Aug 2023 – Present</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Remote</span>
              </div>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">Key Projects:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                <div className="p-4 rounded-lg bg-blue-500/10 border border-blue-500/20">
                  <h5 className="font-semibold text-blue-400">SuperLeadz</h5>
                  <p className="text-sm text-gray-300">Lead generation platform</p>
                </div>
                <div className="p-4 rounded-lg bg-purple-500/10 border border-purple-500/20">
                  <h5 className="font-semibold text-purple-400">CRM System</h5>
                  <p className="text-sm text-gray-300">Customer relationship management</p>
                </div>
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                  <h5 className="font-semibold text-green-400">WhatsApp Live Chat</h5>
                  <p className="text-sm text-gray-300">Real-time messaging app</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Key Achievements:</h4>
              <ul className="space-y-3 text-gray-300">
                <motion.li
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Developed responsive React.js applications with modern UI/UX principles
                </motion.li>
                <motion.li
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Optimized application performance resulting in 40% faster load times
                </motion.li>
                <motion.li
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <span className="w-2 h-2 bg-green-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Integrated RESTful APIs and implemented real-time features using WebSocket
                </motion.li>
                <motion.li
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <span className="w-2 h-2 bg-pink-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Collaborated with cross-functional teams to deliver high-quality solutions
                </motion.li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
