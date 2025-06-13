"use client"

import { Mail, Phone, Github, Linkedin } from "lucide-react"
import Earth from "./earth"

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden">
      {/* Earth background as a fixed layer */}
      <div className="absolute inset-0 -z-10">
        <Earth />
      </div>


      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
          {/* Image */}
          <img
            src="/Sahil-.png"
            alt="Sahil Upadhyay"
            className="w-48 h-auto md:w-[255px] md:h-[500px] shadow-lg object-cover mb-6 md:mb-0"
          />

          {/* Text Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Sahil Upadhyay
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light">
              Frontend Developer
            </h2>

            <p className="text-base sm:text-lg text-gray-400 max-w-md">
              Crafting stellar digital experiences with modern web technologies
            </p>

            {/* Social Icons */}
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a
                href="mailto:sahilupadhyay.me@gmail.com"
                className="p-3 rounded-full bg-blue-500/20 hover:bg-blue-500/40 transition-all duration-300 group"
              >
                <Mail className="w-6 h-6 text-blue-400 group-hover:text-blue-300" />
              </a>
              <a
                href="tel:+91 9987399379"
                className="p-3 rounded-full bg-green-500/20 hover:bg-green-500/40 transition-all duration-300 group"
              >
                <Phone className="w-6 h-6 text-green-400 group-hover:text-green-300" />
              </a>
              <a
                href="https://github.com/upadhyaysahil"
                className="p-3 rounded-full bg-purple-500/20 hover:bg-purple-500/40 transition-all duration-300 group"
              >
                <Github className="w-6 h-6 text-purple-400 group-hover:text-purple-300" />
              </a>
              <a
                href="https://in.linkedin.com/in/sahil-upadhyay-578278198"
                className="p-3 rounded-full bg-blue-600/20 hover:bg-blue-600/40 transition-all duration-300 group"
              >
                <Linkedin className="w-6 h-6 text-blue-500 group-hover:text-blue-400" />
              </a>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <button className="relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                <span className="relative z-10">Explore My Work</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
