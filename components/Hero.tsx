'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const FULL_NAME = 'Sushaan Patel'
const FULL_DESC = '3rd year computer science student at the university of toronto.'
const NAME_CHAR_DELAY = 95
const DESC_CHAR_DELAY = 38
const NAME_START_DELAY = 400

const socialLinks = [
  { href: 'https://www.linkedin.com/in/sushaan-patel/', icon: FiLinkedin, label: 'LinkedIn' },
  { href: 'https://github.com/sushaanpatel', icon: FiGithub, label: 'GitHub' },
  { href: 'mailto:sushaanpatel@gmail.com', icon: FiMail, label: 'Email' },
]

function typewriter(
  text: string,
  delay: number,
  onChar: (s: string) => void,
  onDone: () => void,
): () => void {
  let i = 0
  const id = setInterval(() => {
    i++
    onChar(text.slice(0, i))
    if (i === text.length) {
      clearInterval(id)
      onDone()
    }
  }, delay)
  return () => clearInterval(id)
}

export default function Hero() {
  const [displayedName, setDisplayedName] = useState('')
  const [showLine3, setShowLine3] = useState(false)
  const [displayedDesc, setDisplayedDesc] = useState('')
  const [showCursor, setShowCursor] = useState(false)

  useEffect(() => {
    const cleanups: (() => void)[] = []

    const t0 = setTimeout(() => {
      const stop = typewriter(FULL_NAME, NAME_CHAR_DELAY, setDisplayedName, () => {
        const t1 = setTimeout(() => {
          setShowLine3(true)
          const t2 = setTimeout(() => {
            const stop2 = typewriter(FULL_DESC, DESC_CHAR_DELAY, setDisplayedDesc, () => {
              setShowCursor(true)
            })
            cleanups.push(stop2)
          }, 350)
          cleanups.push(() => clearTimeout(t2))
        }, 320)
        cleanups.push(() => clearTimeout(t1))
      })
      cleanups.push(stop)
    }, NAME_START_DELAY)

    cleanups.push(() => clearTimeout(t0))
    return () => cleanups.forEach(fn => fn())
  }, [])

  const typingName = displayedName.length > 0 && displayedName.length < FULL_NAME.length
  const typingDesc = displayedDesc.length > 0 && displayedDesc.length < FULL_DESC.length

  return (
    <section className="mb-14">
      <div className="text-sm leading-relaxed space-y-1">
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.1 }}
          className="text-[#6b7280]"
        >
          <span className="text-[#4ade80]">&gt;</span> echo $name
        </motion.p>

        <p className="text-[#e8e8e8] text-2xl font-bold pb-2 min-h-[2.5rem]">
          {displayedName}
          {typingName && <span className="cursor-blink">▋</span>}
        </p>

        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={showLine3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 6 }}
          transition={{ duration: 0.25 }}
          className="text-[#6b7280]"
        >
          <span className="text-[#4ade80]">&gt;</span> cat about.txt
        </motion.p>

        <p className="text-[#e8e8e8] min-h-[1.25rem]">
          {displayedDesc}
          {typingDesc && <span className="cursor-blink">▋</span>}
          {showCursor && <span className="cursor-blink"> ▋</span>}
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 6 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3 }}
        className="flex gap-5 mt-10"
      >
        {socialLinks.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-[#6b7280] hover:text-[#4ade80] transition-colors duration-200"
          >
            <Icon size={20} />
          </a>
        ))}
      </motion.div>
    </section>
  )
}
