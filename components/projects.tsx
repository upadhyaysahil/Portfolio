"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Code, ExternalLink, Github } from "lucide-react"

interface Project {
  title: string
  subtitle?: string
  description: string
  technologies: string[]
  features: string[]
  links: { label: string; url: string; icon: React.ReactNode }[]
  iconColor: string
  borderColor: string
  delay: number
}

function ProjectCard({ project, isInView }: { project: Project; isInView: boolean }) {
  return (
    <motion.div
      className="relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/50 border backdrop-blur-sm mt-12"
      style={{ borderColor: project.borderColor }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.8, delay: project.delay }}
    >
      <div className="flex items-center mb-6">
        <div className="p-3 rounded-full mr-4" style={{ backgroundColor: `${project.iconColor}33` }}>
          <Code className="w-6 h-6" style={{ color: project.iconColor }} />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          {project.subtitle && <p className="text-lg font-semibold" style={{ color: project.iconColor }}>{project.subtitle}</p>}
        </div>
      </div>

      <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>

      <div className="mb-6">
        <h4 className="text-lg font-semibold text-white mb-4">Technologies Used:</h4>
        <div className="flex flex-wrap gap-3">
          {project.technologies.map((tech, index) => (
            <motion.span
              key={tech}
              className="px-3 py-1 rounded-full border text-sm"
              style={{
                borderColor: `${project.iconColor}66`,
                background: `${project.iconColor}22`,
                color: project.iconColor
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>

      <div className="mb-6">
        <h4 className="text-lg font-semibold text-white mb-4">Key Features:</h4>
        <ul className="space-y-2 text-gray-300">
          {project.features.map((feature, i) => (
            <li key={i} className="flex items-start">
              <span
                className="w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0"
                style={{ backgroundColor: project.iconColor }}
              ></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-wrap gap-4">
        {project.links.map((link) => (
          <a
          key={`${link.url}-${link.label}`}
            href={link.url}
            target="_blank"
            className="flex items-center px-4 py-2 rounded-lg border transition-all duration-300"
            style={{
              backgroundColor: `${project.iconColor}22`,
              borderColor: `${project.iconColor}66`,
              color: project.iconColor
            }}
          >
            {link.icon}
            <span className="ml-2">{link.label}</span>
          </a>
        ))}
      </div>
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const projects: Project[] = [
    {
      title: "Budget Management System (BMS)",
      subtitle: "Anubhuti NGO",
      description:
        "A comprehensive budget management system designed for NGO operations with real-time insights into expenses and financial health.",
      technologies: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL"],
      features: [
        "Real-time budget tracking and expense monitoring",
        "Interactive dashboard with financial analytics",
        "Secure user authentication and role-based access",
        "Automated report generation and export functionality"
      ],
      links: [
        { label: "View Code", url: "#", icon: <Github className="w-4 h-4" /> },
      ],
      iconColor: "#A855F7",
      borderColor: "#9333EA",
      delay: 0.2
    },
    {
      title: "Spotify UI Clone",
      subtitle: "Frontend Project",
      description:
        "Spotify-inspired UI with context-based music player, public music API integration, and responsive design using React and Tailwind.",
      technologies: ["React", "Tailwind CSS", "TypeScript"],
      features: [
        "Fully responsive Spotify-style interface",
        "Context-based audio playback with global state",
        "Integration with public music APIs for track previews"
      ],
      links: [
        {
          label: "View Code",
          url: "https://github.com/upadhyaysahil/Spotify-React-Clone",
          icon: <Github className="w-4 h-4" />
        },
        {
          label: "Live Demo",
          url: "https://sahilspotify.netlify.app",
          icon: <ExternalLink className="w-4 h-4" />
        }
      ],
      iconColor: "#22C55E",
      borderColor: "#16A34A",
      delay: 0.4
    },
    {
      title: "Real-Time Chat Platform",
      subtitle: "Full-Stack Application",
      description:
        "A chat app built with Next.js, Node.js, and Socket.io supporting real-time messaging, reactions, typing indicators, and replies.",
      technologies: ["Next.js", "Node.js", "MongoDB", "Socket.io"],
      features: [
        "Real-time messaging with WebSocket and Socket.io",
        "Emoji reactions, typing indicators, and message replies",
        "Separate deployment for frontend (Netlify) and backend (Render)"
      ],
      links: [
        {
          label: "Frontend Code",
          url: "https://github.com/upadhyaysahil/Chat-App",
          icon: <Github className="w-4 h-4" />
        },
        {
          label: "Backend Code",
          url: "https://github.com/upadhyaysahil/chat-app-backend",
          icon: <Github className="w-4 h-4" />
        },
        {
          label: "Live Demo",
          url: "https://globalchatapp.netlify.app",
          icon: <ExternalLink className="w-4 h-4" />
        }
      ],
      iconColor: "#FBBF24",
      borderColor: "#F59E0B",
      delay: 0.6
    }
  ]

  return (
    <section ref={ref} className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-8">
          Featured Projects
        </h2>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} isInView={isInView} />
        ))}
      </div>
    </section>
  )
}
