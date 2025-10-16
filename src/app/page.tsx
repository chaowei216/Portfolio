'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Mail, Linkedin, Github } from 'lucide-react'
import {
  SiSpringboot,
  SiMysql,
  SiPostgresql,
  SiRabbitmq,
  SiApachekafka,
  SiDotnet,
  SiReact,
  SiMicrodotblog,
} from 'react-icons/si'
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

export default function HomePage() {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="space-y-12 pt-20 text-center">
      <div className="section-animate">
        {/* Introduction Section */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="space-y-6 flex flex-col items-center"
        >
          {/* Profile Image */}
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg">
            <Image src="/profile.jpg" alt="Finn Luu" fill className="object-cover" priority />
          </div>

          <h1 className="text-5xl font-bold mt-6">
            Hi, I’m <span className="text-blue-400">Luu Trieu Vi</span> (Finn Luu)
          </h1>

          <p className="mx-auto max-w-2xl text-lg text-gray-300 leading-relaxed">
            I’m a <span className="font-semibold text-white">software engineer</span> focusing
            mainly on <span className="font-semibold text-white">backend development</span>, and I
            also have some hands-on experience in crafting clean and responsive front-end
            interfaces. With <span className="font-semibold text-white">one year</span> in the IT
            field, I’m constantly learning, growing, and striving to become a senior engineer —
            passionate about building scalable, maintainable systems that deliver real impact.
          </p>

          {/* 🔗 Contact Buttons */}
          <div className="flex justify-center gap-6 mt-8 flex-wrap">
            <a
              href="mailto:you@example.com"
              target="_blank"
              className="group flex items-center gap-2 rounded-full border border-blue-500 px-6 py-3
                       text-blue-400 hover:bg-blue-500/10 hover:text-blue-300 transition-all
                       shadow-md hover:shadow-blue-500/20"
            >
              <Mail className="w-5 h-5 group-hover:scale-110 transition" />
              <span>Email</span>
            </a>

            <a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              className="group flex items-center gap-2 rounded-full border border-blue-500 px-6 py-3
                       text-blue-400 hover:bg-blue-500/10 hover:text-blue-300 transition-all
                       shadow-md hover:shadow-blue-500/20"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/your-github"
              target="_blank"
              className="group flex items-center gap-2 rounded-full border border-blue-500 px-6 py-3
                       text-blue-400 hover:bg-blue-500/10 hover:text-blue-300 transition-all
                       shadow-md hover:shadow-blue-500/20"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition" />
              <span>GitHub</span>
            </a>
          </div>
        </motion.section>
      </div>

      {/* Tech Stack Scrolling Section */}
      <div className="section-animate">
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
              <div
                key={i}
                className="flex flex-col items-center justify-center w-20"
                title={tech.name}
              >
                <div className="hover:text-blue-300 transition-transform hover:scale-110">
                  {tech.icon}
                </div>
                <p className="text-xs text-gray-400 mt-2">{tech.name}</p>
              </div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    </div>
  )
}
