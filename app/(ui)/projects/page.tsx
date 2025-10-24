"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Voice AI Platform",
      description:
        "Complete voice generation platform including SteosVoice microservice for LLM interaction and SteosVoice.API for external requests. Features S3 storage, WebSocket communication, comprehensive API documentation, and performance optimization.",
      image: "/api/placeholder/400/300",
      technologies: [
        "C#",
        "ASP.NET Core",
        "S3 Storage",
        "WebSocket",
        "REST API",
        "PostgreSQL",
        "Redis",
        "Swagger",
      ],
      category: "microservices",
      github: "https://github.com",
      live: "https://cybervoice.io/ru/",
      featured: true,
    },
    {
      id: 2,
      title: "Enterprise Microservices Platform",
      description:
        "STEOSPLATFORM - comprehensive microservices orchestration with routing, AES/SHA-256 encryption, database security, rate limiting, authentication protection, and exception handling systems.",
      image: "/api/placeholder/400/300",
      technologies: [
        "C#",
        "Microservices",
        "AES Encryption",
        "SHA-256",
        "RabbitMQ",
        "Redis",
        "gRPC",
        "Docker",
      ],
      category: "microservices",
      github: "https://github.com",
      live: "https://mind-simulation.com/en/",
      featured: true,
    },
    {
      id: 3,
      title: "Partner Account System",
      description:
        "Full-stack web application for legal entities with real-time notifications via SignalR, payment registry generation using Stimulsoft, email processing, and admin/client separation. Successfully deployed and serving multiple districts.",
      image: "/api/placeholder/400/300",
      technologies: [
        "ASP.NET Core",
        "SignalR",
        "Entity Framework Core",
        "MS SQL Server",
        "Stimulsoft",
        "HTML/XML Processing",
        "OAuth 2.0",
        "Unit Testing",
      ],
      category: "web",
      github: "https://github.com/Kamil-Zuki/partner-account",
      live: "https://partner.rrcsk.ru/",
      featured: true,
    },
    {
      id: 4,
      title: "Language Learning API",
      description:
        "Personal REST API with microservices architecture designed to solve advanced foreign language word memorization problems for English and Korean learners.",
      image: "/api/placeholder/400/300",
      technologies: [
        "C#",
        "ASP.NET Core",
        "Microservices",
        "Entity Framework",
        "PostgreSQL",
        "Docker",
      ],
      category: "personal",
      github: "https://github.com",
      live: "In Development",
      featured: false,
    },
    {
      id: 5,
      title: "Portfolio Website",
      description:
        "Modern, responsive portfolio website showcasing professional experience and projects. Built with latest technologies including Next.js 15, TypeScript, and advanced animations.",
      image: "/api/placeholder/400/300",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Docker",
      ],
      category: "web",
      github: "https://github.com",
      live: "Current Site",
      featured: false,
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "microservices", label: "Microservices" },
    { id: "web", label: "Web Development" },
    { id: "personal", label: "Personal Projects" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects.filter((project) => !project.featured)
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-[calc(100vh-7rem)] bg-gradient-to-br from-slate-50 via-gray-50 to-slate-50 dark:from-slate-900 dark:via-gray-900 dark:to-slate-900">
      <div className="py-8">
        <div className="container max-w-7xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 lg:mb-6 bg-gradient-to-r from-gray-900 via-blue-700 to-slate-700 dark:from-white dark:via-blue-100 dark:to-gray-100 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A collection of projects that showcase my skills, creativity, and
              passion for building amazing digital experiences.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 lg:mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                  activeFilter === category.id
                    ? "bg-gradient-to-r from-blue-500 to-gray-600 text-white shadow-lg shadow-blue-500/25"
                    : "bg-white/70 dark:bg-white/10 text-gray-900 dark:text-gray-300 hover:bg-white/90 dark:hover:bg-white/20 border border-gray-200 dark:border-white/20"
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Featured Projects */}
          {activeFilter === "all" && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-12 lg:mb-16"
            >
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-6 lg:mb-8 text-center">
                Featured Projects
              </h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8">
                {projects
                  .filter((project) => project.featured)
                  .map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.6 }}
                      whileHover={{ y: -10 }}
                      className="group relative bg-white/70 dark:bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-white/20 transition-all duration-300"
                    >
                      <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-gray-500/20 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-gray-500 opacity-20"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-3xl sm:text-4xl font-bold text-white/50">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                        <div className="absolute top-2 sm:top-4 right-2 sm:right-4">
                          <span className="px-2 sm:px-3 py-1 bg-gradient-to-r from-blue-500 to-gray-600 text-white text-xs font-semibold rounded-full">
                            Featured
                          </span>
                        </div>
                      </div>
                      <div className="p-4 lg:p-6">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 sm:px-3 py-1 bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-gray-300 text-xs rounded-full border border-gray-200 dark:border-white/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-2 sm:gap-3">
                          <a
                            href={project.github}
                            className="flex-1 py-2 px-3 sm:px-4 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-gray-900 dark:text-white text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 text-center"
                          >
                            GitHub
                          </a>
                          <a
                            href={project.live}
                            className="flex-1 py-2 px-3 sm:px-4 bg-gradient-to-r from-blue-500 to-gray-600 hover:from-blue-600 hover:to-gray-700 text-white text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 text-center"
                          >
                            Live Demo
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>
            </motion.div>
          )}

          {/* All Projects Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            {activeFilter !== "all" && (
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-6 lg:mb-8 text-center">
                {categories.find((cat) => cat.id === activeFilter)?.label}
              </h2>
            )}

            <AnimatePresence mode="wait">
              <motion.div
                key={activeFilter}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.6 }}
                    whileHover={{ y: -5 }}
                    className="group bg-white/70 dark:bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 hover:border-blue-400 dark:hover:border-white/20 transition-all duration-300"
                  >
                    <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-gray-500/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-gray-500 opacity-20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-2xl sm:text-3xl font-bold text-white/50">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="p-4 lg:p-6">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 dark:text-gray-300 text-xs sm:text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-gray-300 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-gray-100 dark:bg-white/10 text-gray-800 dark:text-gray-300 text-xs rounded-full">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      <div className="flex gap-1 sm:gap-2">
                        <a
                          href={project.github}
                          className="flex-1 py-2 px-2 sm:px-3 bg-gray-100 dark:bg-white/10 hover:bg-gray-200 dark:hover:bg-white/20 text-gray-900 dark:text-white text-xs font-semibold rounded-lg transition-all duration-300 text-center"
                        >
                          Code
                        </a>
                        <a
                          href={project.live}
                          className="flex-1 py-2 px-2 sm:px-3 bg-gradient-to-r from-blue-500 to-gray-600 hover:from-blue-600 hover:to-gray-700 text-white text-xs font-semibold rounded-lg transition-all duration-300 text-center"
                        >
                          Demo
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-center mt-12 lg:mt-20"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 lg:mb-6">
              Interested in Working Together?
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6 lg:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              I&#39;m always excited to take on new challenges and create
              amazing digital experiences. Let&#39;s discuss your next project!
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-gray-600 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300"
            >
              Start a Project
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
