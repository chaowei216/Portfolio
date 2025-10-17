'use client'

import { motion } from 'framer-motion'
import { Award, Languages, BookOpen } from 'lucide-react'

export default function CertificatesPage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }

  const languageCertificates = [
    {
      type: 'Language',
      title: 'TOEIC English Proficiency Test',
      organization: 'Educational Testing Service (ETS)',
      score: '855 / 990',
      year: '2024',
      color: 'from-blue-400 to-blue-700',
      icon: <Languages className="text-blue-400 w-6 h-6" />,
    },
  ]

  const otherCertificates = [
    {
      type: 'Other',
      title: 'Software Development Lifecycle',
      organization: 'Coursera',
      year: '2023',
      color: 'from-green-400 to-green-700',
      icon: <BookOpen className="text-green-400 w-6 h-6" />,
    },
    {
      type: 'Other',
      title: 'Project Management Principles and Practices',
      organization: 'Coursera',
      year: '2024',
      color: 'from-green-400 to-green-700',
      icon: <BookOpen className="text-green-400 w-6 h-6" />,
    },
  ]

  return (
    <div className="relative pt-24 pb-16 mx-auto max-w-5xl px-6">
      {/* 🔹 Header */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.6 }}
        className="text-center space-y-4"
      >
        <h1 className="text-4xl sm:text-5xl font-bold text-white flex justify-center items-center gap-3">
          <Award className="text-blue-400 w-9 h-9" />
          My <span className="text-blue-400">Certificates</span>
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Recognitions and certifications that showcase my dedication to continuous learning and
          skill growth.
        </p>
        <div className="mx-auto mt-3 w-24 h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
      </motion.section>

      {/* 🌍 Language Certificates */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-16 space-y-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <Languages className="text-blue-400 w-7 h-7" />
          <h2 className="text-2xl font-semibold text-blue-400">Language Certificates</h2>
        </div>

        {languageCertificates.map((cert, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.01 }}
            className="relative flex flex-col sm:flex-row sm:items-center gap-4 bg-[#161b22]/80 border border-white/10 rounded-xl p-6 shadow-md hover:shadow-blue-500/20 transition"
          >
            {/* Accent Ribbon */}
            <div
              className={`absolute left-0 top-0 h-full w-[5px] bg-gradient-to-b ${cert.color} rounded-l-xl`}
            />
            {/* Icon + Type */}
            <div className="flex items-center gap-2 sm:w-1/4">
              {cert.icon}
              <p className="text-sm font-semibold uppercase text-blue-400">{cert.type}</p>
            </div>

            {/* Details */}
            <div className="flex-1 text-left space-y-1">
              <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
              <p className="text-sm text-gray-400">{cert.organization}</p>
              {cert.score && (
                <p className="text-blue-400 font-medium text-sm">Score: {cert.score}</p>
              )}
            </div>

            {/* Year */}
            <div className="sm:w-1/6 text-right">
              <p className="text-xs text-gray-500">Issued: {cert.year}</p>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* 📜 Other Certificates */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20 space-y-8"
      >
        <div className="flex items-center gap-3 mb-2">
          <BookOpen className="text-green-400 w-7 h-7" />
          <h2 className="text-2xl font-semibold text-green-400">Other Certificates</h2>
        </div>

        {otherCertificates.map((cert, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{ scale: 1.01 }}
            className="relative flex flex-col sm:flex-row sm:items-center gap-4 bg-[#161b22]/80 border border-white/10 rounded-xl p-6 shadow-md hover:shadow-green-500/20 transition"
          >
            {/* Accent Ribbon */}
            <div
              className={`absolute left-0 top-0 h-full w-[5px] bg-gradient-to-b ${cert.color} rounded-l-xl`}
            />
            {/* Icon + Type */}
            <div className="flex items-center gap-2 sm:w-1/4">
              {cert.icon}
              <p className="text-sm font-semibold uppercase text-green-400">{cert.type}</p>
            </div>

            {/* Details */}
            <div className="flex-1 text-left space-y-1">
              <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
              <p className="text-sm text-gray-400">{cert.organization}</p>
            </div>

            {/* Year */}
            <div className="sm:w-1/6 text-right">
              <p className="text-xs text-gray-500">Issued: {cert.year}</p>
            </div>
          </motion.div>
        ))}
      </motion.section>
    </div>
  )
}
