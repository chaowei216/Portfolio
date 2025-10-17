'use client'

import { motion } from 'framer-motion'
import { Briefcase, Layers } from 'lucide-react'

export default function ExperiencePage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }

  const domains = [
    { name: 'Transportation', desc: 'Building tracking and logistics solutions.' },
    { name: 'ERP', desc: 'Developing internal management systems for enterprises.' },
    { name: 'Construction', desc: 'Automating project and site coordination tools.' },
    { name: 'Management', desc: 'Supporting workflow and operations management.' },
    { name: 'Education', desc: 'Designing e-learning and student management systems.' },
    { name: 'Ecommerce', desc: 'Integrating product, order, and payment systems.' },
  ]

  const experiences = [
    {
      company: 'WALA-ICT',
      time: 'Aug 2025 – Sep 2025',
      position: 'Backend Developer (Freelancer)',
      responsibilities: [
        'Built backend services for education and e-commerce domains.',
        'Worked with AWS (EC2, S3, RDS, IAM) and maintained CI/CD pipelines.',
      ],
    },
    {
      company: 'TGL Solution',
      time: 'Mar 2025 – Aug 2025',
      position: 'Software Developer',
      responsibilities: [
        'Contributed to large-scale ERP systems (TMS, HRM, Finance, Project Management, etc.) built with microservice architecture.',
        'Acted as PIC for several backend services and collaborated on construction-related projects for Japanese and Vietnamese clients.',
      ],
    },
    {
      company: 'FPT Software',
      time: 'Jan 2024 – Sep 2024',
      position: 'Backend Developer',
      responsibilities: [
        'Developed REST APIs for a train system management platform for Japanese clients.',
        'Improved system reliability with real-time monitoring and robust error handling.',
      ],
    },
  ]

  return (
    <div className="pt-24 pb-16 mx-auto max-w-5xl px-6 text-center space-y-24">
      {/* 🧭 Page Header */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
        className="space-y-4"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-white flex justify-center items-center gap-3">
          <Briefcase className="text-blue-400 w-9 h-9" />
          My <span className="text-blue-400">Experience</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          A journey of growth across multiple domains — learning how software brings real-world
          processes to life.
        </p>
        <div className="mx-auto mt-3 w-24 h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
      </motion.section>

      {/* 🧩 Domain Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-10"
      >
        <h2 className="text-3xl font-semibold text-blue-400 flex justify-center items-center gap-2">
          <Layers className="w-7 h-7 text-blue-400" /> Domains I’ve Worked In
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Each domain has helped me understand different business problems and system architectures.
        </p>

        {/* Domain Card Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
          {domains.map((d, i) => (
            <motion.div
              key={d.name}
              variants={fadeUp}
              whileHover={{ scale: 1.04, y: -4 }}
              transition={{ delay: i * 0.05 }}
              className="rounded-2xl bg-[#161b22]/80 border border-white/10 p-6 shadow-md hover:shadow-blue-500/20 transition group text-left"
            >
              <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition">
                {d.name}
              </h3>
              <p className="text-sm text-gray-400 mt-2">{d.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* 💼 Work Experience Section */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="space-y-12"
      >
        <h2 className="text-3xl font-semibold text-blue-400 flex justify-center items-center gap-2">
          <Briefcase className="w-7 h-7 text-blue-400" /> Work Experience
        </h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Roles I’ve taken along the way — focusing on backend development, system scalability, and
          collaboration.
        </p>

        <div className="relative border-l border-blue-500/30 pl-6 space-y-10 text-left max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline dot */}
              <span className="absolute -left-[9px] top-2 w-4 h-4 bg-blue-500 rounded-full shadow-md shadow-blue-500/50" />

              <div className="bg-[#161b22] rounded-xl p-6 border border-white/10 hover:border-blue-400/40 transition">
                <h3 className="text-xl font-semibold text-white">{exp.company}</h3>
                <p className="text-sm text-gray-400 mb-2">{exp.time}</p>
                <p className="text-blue-400 font-medium mb-3">{exp.position}</p>
                <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
                  {exp.responsibilities.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}
