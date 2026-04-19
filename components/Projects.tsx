'use client'

import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'
import { projects } from '@/lib/projects'

export default function Projects() {
  return (
    <section className="mb-24">
      <motion.p
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.25 }}
        className="text-[#6b7280] text-sm mb-8"
      >
        <span className="text-[#4ade80]">&gt;</span> ls projects/
      </motion.p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}
