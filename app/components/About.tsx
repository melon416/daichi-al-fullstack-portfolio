'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Users, Clock, Target } from 'lucide-react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const achievements = [
    {
      icon: <Award className="w-8 h-8" />,
      number: "7+",
      label: "Years Experience",
      description: "Building AI-driven solutions"
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "500+",
      label: "Users Served",
      description: "Across enterprise platforms"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      number: "60-70%",
      label: "Efficiency Gain",
      description: "Through automation"
    },
    {
      icon: <Target className="w-8 h-8" />,
      number: "99.9%",
      label: "Uptime Achieved",
      description: "In production systems"
    }
  ]

  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">
            Passionate about creating innovative digital experiences through AI and automation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              AI & Full-Stack Engineer (CEO)
            </h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed text-base">
              <p>
                I&apos;m an AI & Automation Engineer and Full Stack Developer with over 7 years of experience 
                designing, deploying, and scaling intelligent automation and software systems. My expertise spans 
                machine learning, deep learning, and data-driven web solutions using frameworks like TensorFlow, 
                PyTorch, scikit-learn, and OpenCV.
              </p>
              
              <p>
                I have a strong track record delivering enterprise-grade automation by integrating AI models, RPA tools, 
                and low-code orchestration platforms (N8N, Zapier, Make/Integromat) to improve operational efficiency. 
                I&apos;m experienced in building AI-powered chatbots, voice assistants, and intelligent bots for Slack, 
                Discord, and enterprise CRMs.
              </p>
              
              <p>
                My focus is on bridging AI research and business automation to deliver measurable results in productivity, 
                customer experience, and system efficiency across fintech, healthcare, and e-commerce sectors.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-8"
            >
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-primary-50 text-primary-700 rounded-lg text-sm font-medium border border-primary-100">
                  AI & Machine Learning
                </span>
                <span className="px-3 py-1.5 bg-secondary-50 text-secondary-700 rounded-lg text-sm font-medium border border-secondary-100">
                  Full Stack Development
                </span>
                <span className="px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg text-sm font-medium border border-emerald-100">
                  Automation & RPA
                </span>
                <span className="px-3 py-1.5 bg-sky-50 text-sky-700 rounded-lg text-sm font-medium border border-sky-100">
                  Cloud Architecture
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="bg-white border border-gray-200 rounded-xl p-5 text-center group hover:border-primary-200 transition-all duration-200"
              >
                <div className="text-primary-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {achievement.number}
                </div>
                <div className="text-lg font-semibold text-gray-700 mb-2">
                  {achievement.label}
                </div>
                <div className="text-sm text-gray-500">
                  {achievement.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="bg-white border border-gray-200 rounded-xl p-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">
              Location & Contact
            </h4>
            <p className="text-lg text-gray-600 mb-2">
              📍 Dalla, Texas
            </p>
            <p className="text-lg text-gray-600">
              📧 Kiwi530@proton.me
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
