'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface Project {
  name: string
  url: string
  icon?: string
  tag?: string
}

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.3 }}
      className="group block bg-[#111111] border border-[#1f1f1f] rounded-lg overflow-hidden hover:border-[#4ade80]/25 transition-colors duration-200"
    >
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-[#1f1f1f]">
        <span className="w-2.5 h-2.5 rounded-full bg-[#2a2a2a]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#2a2a2a]" />
        <span className="w-2.5 h-2.5 rounded-full bg-[#2a2a2a]" />
        <span className="ml-2 text-xs text-[#3d3d3d]">
          {project.name.toLowerCase().replace(/ /g, '-')}
        </span>
      </div>
      <div className="flex items-center gap-3 px-4 py-4">
        {project.icon ? (
          <Image
            src={project.icon}
            alt={project.name}
            width={36}
            height={36}
            className="rounded-md flex-shrink-0"
          />
        ) : (
          <div className="w-9 h-9 rounded-md flex-shrink-0 bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center text-xs text-[#4ade80] font-bold select-none">
            {project.name.slice(0, 2).toUpperCase()}
          </div>
        )}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold text-[#e8e8e8] truncate">{project.name}</p>
            {project.tag && (
              <span className="flex-shrink-0 text-[10px] px-1.5 py-0.5 rounded bg-purple-950/60 text-purple-400 border border-purple-900/50">
                {project.tag}
              </span>
            )}
          </div>
          <p className="text-xs text-[#6b7280] mt-0.5 group-hover:text-[#4ade80] transition-colors duration-200">
            view project →
          </p>
        </div>
      </div>
    </motion.a>
  )
}
