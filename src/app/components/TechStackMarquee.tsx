'use client'

import { motion } from 'framer-motion'
import { SiSpringboot } from 'react-icons/si'
import { SiMysql } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import { SiRabbitmq } from 'react-icons/si'
import { SiApachekafka } from 'react-icons/si'
import { SiDotnet } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { SiMicrodotblog } from 'react-icons/si'

import { FaJava } from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io5'

const techs = [
  { icon: <FaJava />, name: 'Java' },
  { icon: <SiSpringboot />, name: 'Spring Boot' },
  { icon: <SiMysql />, name: 'MySQL' },
  { icon: <SiPostgresql />, name: 'PostgreSQL' },
  { icon: <SiRabbitmq />, name: 'RabbitMQ' },
  { icon: <SiApachekafka />, name: 'Kafka' },
  { icon: <SiMicrodotblog />, name: 'Microservice' },
  { icon: <SiDotnet />, name: 'ASP.NET' },
  { icon: <IoLogoJavascript />, name: 'JavaScript' },
  { icon: <SiReact />, name: 'React' },
]

export default function TechStackMarquee() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="overflow-hidden py-8 relative"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-transparent to-black pointer-events-none" />

      <motion.div
        className="flex gap-10 text-4xl text-blue-400 whitespace-nowrap"
        animate={{
          x: ['0%', '-100%'],
        }}
        transition={{
          repeat: Infinity,
          ease: 'linear',
          duration: 25,
        }}
      >
        {/* duplicate list twice to make infinite effect */}
        {[...techs, ...techs].map((tech, i) => (
          <div key={i} className="flex flex-col items-center justify-center w-20" title={tech.name}>
            <div className="hover:text-blue-300 transition-transform hover:scale-110">
              {tech.icon}
            </div>
            <p className="text-xs text-gray-400 mt-2">{tech.name}</p>
          </div>
        ))}
      </motion.div>
    </motion.section>
  )
}
