'use client'
import { motion } from 'framer-motion';

  export default function Projects() {
    const projects = [
      { id: 1, title: 'Project 1', description: 'A cool project using Next.js' },
      { id: 2, title: 'Project 2', description: 'Another awesome project' },
    ];

    return (
      <div className="min-h-screen bg-gradient-hero py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-bold text-[var(--foreground)] text-center mb-8">My Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileInView={{ opacity: 1, scale: 1 }}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5 }}
                className="p-6 bg-[var(--background)]/20 rounded-lg text-[var(--foreground)]"
              >
                <h2 className="text-2xl font-semibold">{project.title}</h2>
                <p>{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    );
  }