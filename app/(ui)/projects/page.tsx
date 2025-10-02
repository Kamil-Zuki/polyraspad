"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution built with Next.js, featuring user authentication, payment processing, and admin dashboard.",
      image: "/api/placeholder/400/300",
      technologies: ["Next.js", "TypeScript", "Stripe", "Prisma"],
      category: "web",
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/api/placeholder/400/300",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      category: "web",
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A beautiful weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "/api/placeholder/400/300",
      technologies: ["Vue.js", "Chart.js", "OpenWeather API"],
      category: "web",
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description:
        "A secure mobile banking application with biometric authentication, transaction history, and money transfer capabilities.",
      image: "/api/placeholder/400/300",
      technologies: ["React Native", "Firebase", "Biometric Auth"],
      category: "mobile",
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
    },
    {
      id: 5,
      title: "AI Chat Assistant",
      description:
        "An intelligent chat assistant powered by machine learning, capable of natural language processing and context understanding.",
      image: "/api/placeholder/400/300",
      technologies: ["Python", "TensorFlow", "OpenAI API", "FastAPI"],
      category: "ai",
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
    },
    {
      id: 6,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website showcasing projects, skills, and professional experience with smooth animations.",
      image: "/api/placeholder/400/300",
      technologies: ["Next.js", "Tailwind CSS", "Framer Motion"],
      category: "web",
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Development" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "ai", label: "AI/ML" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              My Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              A collection of projects that showcase my skills, creativity, and
              passion for building amazing digital experiences.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-purple-500/25"
                    : "bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20"
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
              className="mb-16"
            >
              <h2 className="text-2xl font-bold text-white mb-8 text-center">
                Featured Projects
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter((project) => project.featured)
                  .map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 * index, duration: 0.6 }}
                      whileHover={{ y: -10 }}
                      className="group relative bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
                    >
                      <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-20"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-4xl font-bold text-white/50">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4">
                          <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-semibold rounded-full">
                            Featured
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-white/10 text-gray-300 text-xs rounded-full border border-white/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <div className="flex gap-3">
                          <a
                            href={project.github}
                            className="flex-1 py-2 px-4 bg-white/10 hover:bg-white/20 text-white text-sm font-semibold rounded-lg transition-all duration-300 text-center"
                          >
                            GitHub
                          </a>
                          <a
                            href={project.live}
                            className="flex-1 py-2 px-4 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-sm font-semibold rounded-lg transition-all duration-300 text-center"
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
              <h2 className="text-2xl font-bold text-white mb-8 text-center">
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
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.6 }}
                    whileHover={{ y: -5 }}
                    className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="aspect-video bg-gradient-to-br from-blue-500/20 to-purple-500/20 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-500 opacity-20"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-bold text-white/50">
                          {project.title.charAt(0)}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <a
                          href={project.github}
                          className="flex-1 py-2 px-3 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-lg transition-all duration-300 text-center"
                        >
                          Code
                        </a>
                        <a
                          href={project.live}
                          className="flex-1 py-2 px-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white text-xs font-semibold rounded-lg transition-all duration-300 text-center"
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
            className="text-center mt-20"
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Interested in Working Together?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always excited to take on new challenges and create amazing
              digital experiences. Let's discuss your next project!
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
            >
              Start a Project
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
