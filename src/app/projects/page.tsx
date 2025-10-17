'use client'

import { motion } from 'framer-motion'
import { Code2, Github } from 'lucide-react'

export default function ProjectsPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }

  const projects = [
    {
      name: 'Finance Management',
      time: 'Nov 2024 – Feb 2025',
      role: 'Backend Developer',
      description: `
        Designed and developed a loan management platform enabling users to register, track, and repay loans.
        Built using <span class="text-blue-400">Spring Boot</span> and <span class="text-blue-400">MySQL</span> in a microservice architecture.
        Integrated <span class="text-blue-400">Docker</span> and CI/CD pipelines for seamless deployment.
        Focused on secure data processing, scalability, and clear API documentation.
      `,
      github: 'https://github.com/chaowei216/FinanceManagement_BE',
    },
    {
      name: 'Trendify',
      time: 'Oct 2024 – Nov 2024',
      role: 'Backend Developer',
      description: `
        Created a complete <span class="text-blue-400">e-commerce</span> platform for T-shirt sales using 
        <span class="text-blue-400">Spring Boot</span>, <span class="text-blue-400">ReactJS</span>, and <span class="text-blue-400">MySQL</span>.
        Implemented authentication, product and order management APIs, and integrated a secure payment gateway.
        Ensured fast response times and stable data flow between backend and frontend.
      `,
      github: 'https://github.com/chaowei216/Trendify',
    },
  ]

  return (
    <div className="pt-24 pb-16 mx-auto max-w-5xl px-6">
      {/* Header */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-white flex justify-center items-center gap-3">
          <Code2 className="text-blue-400 w-9 h-9" />
          Featured <span className="text-blue-400">Projects</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Selected projects that highlight my backend development experience, design thinking, and
          problem-solving mindset.
        </p>
        <div className="mx-auto mt-3 w-24 h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
      </motion.section>

      {/* Projects Timeline */}
      <div className="relative mt-20">
        {/* Center line */}
        <div className="absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-blue-500/40 to-transparent" />

        <div className="space-y-24">
          {projects.map((proj, index) => {
            const isLeft = index % 2 === 0
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                } items-center gap-8 md:gap-12`}
              >
                {/* Connector dot */}
                <div className="absolute left-1/2 top-6 -translate-x-1/2 z-10 w-5 h-5 bg-blue-500 rounded-full shadow-md shadow-blue-500/50" />

                {/* Project card */}
                <div
                  className={`md:w-1/2 bg-[#161b22]/80 border border-white/10 p-6 rounded-2xl shadow-md hover:shadow-blue-500/30 transition text-left ${
                    isLeft ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'
                  }`}
                >
                  <h3 className="text-2xl font-semibold text-white mb-2">{proj.name}</h3>
                  <p className="text-sm text-gray-400 mb-1">{proj.time}</p>
                  <p className="text-blue-400 font-medium mb-4">{proj.role}</p>
                  <p
                    className="text-gray-300 text-sm leading-relaxed mb-4"
                    dangerouslySetInnerHTML={{ __html: proj.description }}
                  ></p>

                  {/* GitHub link */}
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 border border-blue-500/40 rounded-full px-4 py-2 hover:bg-blue-500/10 transition"
                  >
                    <Github className="w-4 h-4" />
                    <span>View on GitHub</span>
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
