"use client";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    { name: "React/Next.js", level: 90, color: "from-blue-400 to-blue-600" },
    { name: "TypeScript", level: 85, color: "from-blue-500 to-indigo-600" },
    { name: "Tailwind CSS", level: 88, color: "from-cyan-400 to-blue-500" },
    { name: "Node.js", level: 80, color: "from-green-400 to-green-600" },
    { name: "Python", level: 75, color: "from-yellow-400 to-orange-500" },
    { name: "Figma", level: 70, color: "from-purple-400 to-pink-500" },
  ];

  const timeline = [
    {
      year: "2024",
      title: "Full-Stack Developer",
      company: "Current Role",
      description:
        "Building modern web applications with React, Next.js, and cutting-edge technologies.",
    },
    {
      year: "2023",
      title: "Frontend Developer",
      company: "Previous Company",
      description:
        "Specialized in creating responsive and interactive user interfaces.",
    },
    {
      year: "2022",
      title: "Web Developer",
      company: "Startup",
      description:
        "Started my journey in web development, learning the fundamentals.",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <div className="py-8">
        <div className="container max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              About Me
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              I'm a passionate developer who loves creating digital experiences
              that make a difference. With a focus on modern web technologies
              and user-centered design.
            </p>
          </motion.div>

          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center mb-16 lg:mb-20"
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 mx-auto relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-3xl opacity-30"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <div className="w-56 h-56 sm:w-72 sm:h-72 bg-gradient-to-br from-slate-800 to-slate-900 rounded-full flex items-center justify-center">
                    <span className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      K
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4 lg:space-y-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                My Story
              </h2>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                I started my journey in web development with a curiosity about
                how things work on the internet. What began as a hobby quickly
                became a passion for creating beautiful, functional, and
                user-friendly applications.
              </p>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                Today, I specialize in building modern web applications using
                React, Next.js, and TypeScript. I believe in writing clean,
                maintainable code and creating experiences that users love.
              </p>
              <div className="flex flex-wrap gap-2 sm:gap-4 pt-4">
                <div className="px-4 py-2 bg-blue-500/20 rounded-full border border-blue-500/30">
                  <span className="text-blue-300">Problem Solver</span>
                </div>
                <div className="px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30">
                  <span className="text-purple-300">Creative Thinker</span>
                </div>
                <div className="px-4 py-2 bg-green-500/20 rounded-full border border-green-500/30">
                  <span className="text-green-300">Team Player</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mb-16 lg:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 lg:mb-12">
              Skills & Technologies
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/10"
                >
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-white font-semibold text-sm lg:text-base">
                      {skill.name}
                    </h3>
                    <span className="text-gray-400 text-xs lg:text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ delay: 0.5 + 0.1 * index, duration: 1 }}
                      className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mb-16 lg:mb-20"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-8 lg:mb-12">
              My Journey
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500"></div>
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + 0.2 * index, duration: 0.6 }}
                  className={`relative flex items-center mb-6 lg:mb-8 ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`w-full sm:w-5/12 ${
                      index % 2 === 0 ? "pr-4 sm:pr-8" : "pl-4 sm:pl-8"
                    }`}
                  >
                    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 lg:p-6 border border-white/10">
                      <div className="flex items-center mb-2">
                        <span className="text-blue-400 font-bold text-lg">
                          {item.year}
                        </span>
                        <div className="ml-4 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                      </div>
                      <h3 className="text-white font-semibold text-base lg:text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-purple-300 text-xs lg:text-sm mb-2">
                        {item.company}
                      </p>
                      <p className="text-gray-300 text-xs lg:text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 lg:mb-6">
              Let's Work Together
            </h2>
            <p className="text-gray-300 mb-6 lg:mb-8 max-w-2xl mx-auto text-sm sm:text-base">
              I'm always excited to work on new projects and collaborate with
              amazing people. Let's create something incredible together!
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-semibold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
