'use client'

import { motion } from 'framer-motion'
import { Code2, Braces, Database, Cloud, Server } from 'lucide-react'

export default function SkillsPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }

  const skills = [
    {
      icon: <Braces className="text-blue-400 w-8 h-8" />,
      title: 'Programming Languages',
      items: ['C', 'C#', 'Java', 'JavaScript'],
      color: 'from-blue-500/20 to-blue-900/10',
    },
    {
      icon: <Server className="text-purple-400 w-8 h-8" />,
      title: 'Frameworks',
      items: ['Spring Boot', 'Spring Cloud', 'ASP.NET API', 'Razor', 'NodeJS', 'NestJS', 'ReactJS'],
      color: 'from-purple-500/20 to-purple-900/10',
    },
    {
      icon: <Database className="text-green-400 w-8 h-8" />,
      title: 'Databases',
      items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB'],
      color: 'from-green-500/20 to-green-900/10',
    },
    {
      icon: <Cloud className="text-orange-400 w-8 h-8" />,
      title: 'Cloud',
      items: ['AWS'],
      color: 'from-orange-500/20 to-orange-900/10',
    },
  ]

  return (
    <div className="pt-24 pb-16 mx-auto max-w-6xl px-6">
      {/* 🔹 Header */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-white flex justify-center items-center gap-3">
          <Code2 className="text-blue-400 w-9 h-9" />
          My <span className="text-blue-400">Skills</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          A collection of the tools, frameworks, and technologies I’ve mastered — powering
          everything I build.
        </p>
        <div className="mx-auto mt-3 w-24 h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
      </motion.section>

      {/* 🧩 Skill Cards */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 grid sm:grid-cols-1 md:grid-cols-2 gap-10"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ duration: 0.3 }}
            className={`rounded-2xl bg-gradient-to-br ${skill.color} border border-white/10 p-8 text-center shadow-md hover:shadow-blue-500/20 transition`}
          >
            <div className="flex justify-center mb-4">{skill.icon}</div>
            <h2 className="text-2xl font-semibold text-white mb-6">{skill.title}</h2>

            <div className="flex flex-wrap justify-center gap-3">
              {skill.items.map((item, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium cursor-default hover:shadow-blue-500/30 transition"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.section>
    </div>
  )
}
