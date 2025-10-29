'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, MapPin, Building, Award, Users, Zap, Database, Cloud } from 'lucide-react'

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const experiences = [
    {
      company: "Rakuten Group, Inc.",
      position: "Senior Full Stack Developer",
      location: "Tokyo, Japan",
      duration: "2022 – 2024",
      icon: <Building className="w-6 h-6" />,
      achievements: [
        "Architected and launched an AI automation platform for internal operations using FastAPI, React, and Supabase, processing over 1 million records per month",
        "Automated 100+ recurring engineering workflows via Selenium, Playwright, and Slack bots, saving ~400 hours monthly",
        "Led cloud migration to GCP microservices, achieving 99.9% uptime and reducing deployment time by 40%",
        "Improved API performance through query optimization and caching, cutting average response time by 35%",
        "Designed role-based access control APIs with Supabase Auth and OAuth2, strengthening platform security",
        "Introduced TDD practices and mentoring programs for junior developers, cutting production bugs by 30%"
      ],
      technologies: ["FastAPI", "React", "Supabase", "PostgreSQL", "GCP", "Docker", "Kubernetes", "Selenium", "Playwright", "OAuth2", "GitHub Actions"]
    },
    {
      company: "SoftBank Robotics",
      position: "Full Stack Developer (AI Integration)",
      location: "Tokyo, Japan",
      duration: "2019 – Feb 2022",
      icon: <Building className="w-6 h-6" />,
      achievements: [
        "Developed AI-driven web and mobile apps integrating robotics APIs, image recognition, and natural language models",
        "Built automation pipelines using N8N, Zapier, and FastAPI, integrating internal systems and third-party services",
        "Delivered data analytics dashboards with React, GraphQL, and PostgreSQL for device monitoring and performance tracking",
        "Integrated AI features (speech-to-text, object detection, sentiment analysis) to improve product personalization",
        "Created microservices using Node.js and Django, with scalable deployments on AWS ECS and Kubernetes",
        "Mentored 5 junior engineers in backend architecture and automation best practices"
      ],
      technologies: ["Node.js", "Django", "React", "GraphQL", "PostgreSQL", "N8N", "Zapier", "FastAPI", "AWS ECS", "Kubernetes", "TensorFlow", "OpenCV"]
    },
    {
      company: "LINE Corporation",
      position: "Junior Full Stack Developer",
      location: "Tokyo, Japan",
      duration: "2016 – Dec 2018",
      icon: <Building className="w-6 h-6" />,
      achievements: [
        "Built and maintained high-traffic mobile web applications using React, Node.js, and TypeScript",
        "Developed REST APIs supporting messaging, payments, and push notifications, serving millions of daily users",
        "Collaborated with design teams to translate Figma prototypes into performant front-end interfaces",
        "Improved backend query performance by 25% and enhanced testing coverage using Jest and Cypress",
        "Assisted in chatbot and AI assistant integration with LINE APIs and Google Cloud Dialogflow"
      ],
      technologies: ["React", "Node.js", "TypeScript", "REST APIs", "PostgreSQL", "Jest", "Cypress", "Google Cloud Dialogflow", "Firebase"]
    }
  ]

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "500+", label: "Users Served" },
    { icon: <Zap className="w-6 h-6" />, value: "400+", label: "Hours Saved/Month" },
    { icon: <Database className="w-6 h-6" />, value: "1M+", label: "Documents Processed" },
    { icon: <Cloud className="w-6 h-6" />, value: "99.9%", label: "Uptime Achieved" }
  ]

  return (
    <section id="experience" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Work Experience</h2>
          <p className="section-subtitle">
            Building innovative solutions across diverse industries
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-primary-200 transition-all duration-200"
            >
              <div className="text-primary-600 mb-2 flex justify-center">
                {stat.icon}
              </div>
              <div className="text-xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-xs text-gray-600">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-secondary-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                transition={{ duration: 0.8, delay: 0.6 + index * 0.2 }}
                className="relative flex items-start gap-8"
              >
                {/* Timeline Dot */}
                <div className="relative z-10 flex-shrink-0 w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white shadow-lg">
                  {exp.icon}
                </div>

                {/* Content */}
                <div className="flex-1 bg-white border border-gray-200 rounded-xl p-6 hover:border-primary-200 transition-all duration-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-2 text-primary-600 font-semibold mb-2">
                        <Building className="w-5 h-5" />
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex flex-col md:items-end gap-1">
                      <div className="flex items-center gap-1 text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.duration}</span>
                      </div>
                      <div className="flex items-center gap-1 text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mb-5">
                    <h4 className="text-base font-semibold text-gray-800 mb-2">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.slice(0, 5).map((achievement, achIndex) => (
                        <motion.li
                          key={achIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.4, delay: 0.8 + index * 0.2 + achIndex * 0.05 }}
                          className="flex items-start gap-2 text-gray-600"
                        >
                          <Award className="w-4 h-4 text-primary-500 mt-1 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{achievement}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3, delay: 1 + index * 0.2 + techIndex * 0.02 }}
                          whileHover={{ scale: 1.05 }}
                          className="px-3 py-1 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 rounded-full text-xs font-medium hover:shadow-md transition-all duration-300"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-20"
        >
          <div className="bg-white border border-gray-200 rounded-xl p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Education</h3>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900">
                  Bachelor&apos;s Degree in Computer Science and Intelligent Systems
                </h4>
                <p className="text-gray-600">
                  The University of Tokyo | Tokyo, Japan (2012 – 2016)
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
