"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Mail, Phone, Github, Linkedin, Send } from "lucide-react"

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const { name, email, message } = formData
    const subject = encodeURIComponent(`New message from ${name}`)
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )

    window.location.href = `mailto:sahilupadhyay.me@gmail.com?subject=${subject}&body=${body}`
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section ref={ref} className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-pink-400 to-rose-500 bg-clip-text text-transparent mb-8">
          Get In Touch
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Let's Connect</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm always excited to discuss new opportunities, collaborate on interesting projects, or simply chat
                about the latest in web development. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <motion.a
                href="mailto:sahilupadhyay.me@gmail.com"
                className="flex items-center p-4 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 hover:border-blue-500/40 transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-3 rounded-full bg-blue-500/20 mr-4 group-hover:bg-blue-500/30 transition-all duration-300">
                  <Mail className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <p className="text-gray-400">sahilupadhyay.me@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+919987399379"
                className="flex items-center p-4 rounded-lg bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 hover:border-green-500/40 transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-3 rounded-full bg-green-500/20 mr-4 group-hover:bg-green-500/30 transition-all duration-300">
                  <Phone className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">Phone</p>
                  <p className="text-gray-400">+91 9987399379</p>
                </div>
              </motion.a>

              <motion.a
                href="https://github.com/upadhyaysahil"
                className="flex items-center p-4 rounded-lg bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-3 rounded-full bg-purple-500/20 mr-4 group-hover:bg-purple-500/30 transition-all duration-300">
                  <Github className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">GitHub</p>
                  <p className="text-gray-400">github.com/upadhyaysahil</p>
                </div>
              </motion.a>

              <motion.a
                href="https://in.linkedin.com/in/sahil-upadhyay-578278198"
                className="flex items-center p-4 rounded-lg bg-gradient-to-r from-blue-600/10 to-cyan-500/10 border border-blue-600/20 hover:border-blue-600/40 transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
              >
                <div className="p-3 rounded-full bg-blue-600/20 mr-4 group-hover:bg-blue-600/30 transition-all duration-300">
                  <Linkedin className="w-5 h-5 text-blue-500" />
                </div>
                <div>
                  <p className="text-white font-semibold">LinkedIn</p>
                  <p className="text-gray-400">linkedin.com/in/sahil-upadhyay</p>
                </div>
              </motion.a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-600/30 text-white placeholder-gray-400 focus:border-pink-500/50 focus:outline-none transition-all duration-300"
                  placeholder="Your Name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-600/30 text-white placeholder-gray-400 focus:border-pink-500/50 focus:outline-none transition-all duration-300"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full p-4 rounded-lg bg-gray-800/50 border border-gray-600/30 text-white placeholder-gray-400 focus:border-pink-500/50 focus:outline-none transition-all duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="w-full p-4 rounded-lg bg-gradient-to-r from-pink-500 to-rose-600 text-white font-semibold hover:from-pink-600 hover:to-rose-700 transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
