'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github, Eye, Code, Zap, Database, Cloud, Brain } from 'lucide-react'

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const projects = [
    {
      title: "Rakuten AI Automation Platform",
      description: "Enterprise-grade AI automation platform for internal operations processing over 1 million records per month. Features FastAPI, React, and Supabase with role-based access control and real-time dashboards.",
      image: "/api/placeholder/600/400",
      technologies: ["FastAPI", "React", "Supabase", "PostgreSQL", "GCP", "Docker", "Kubernetes"],
      features: [
        "1M+ records processed monthly",
        "Role-based access control (OAuth2)",
        "Automated 100+ workflows",
        "99.9% uptime achieved"
      ],
      stats: {
        records: "1M+/month",
        workflows: "100+",
        uptime: "99.9%",
        time_saved: "400hrs/month"
      },
      category: "AI & Automation",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "SoftBank Robotics AI Integration",
      description: "AI-driven web and mobile apps integrating robotics APIs, image recognition, and natural language models. Built automation pipelines and analytics dashboards for device monitoring.",
      image: "/api/placeholder/600/400",
      technologies: ["Node.js", "Django", "React", "GraphQL", "PostgreSQL", "N8N", "Zapier", "TensorFlow", "OpenCV"],
      features: [
        "Robotics API integration",
        "Image recognition & NLP",
        "Real-time analytics dashboards",
        "Automation pipeline orchestration"
      ],
      stats: {
        apps: "Multiple",
        integration: "Robotics APIs",
        features: "AI-powered",
        team: "5 mentored"
      },
      category: "AI Integration",
      icon: <Brain className="w-6 h-6" />
    },
    {
      title: "LINE Messaging Platform",
      description: "High-traffic mobile web applications with REST APIs supporting messaging, payments, and push notifications. Served millions of daily users with optimized React and Node.js architecture.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "TypeScript", "REST APIs", "PostgreSQL", "Jest", "Cypress", "Google Cloud Dialogflow"],
      features: [
        "Millions of daily users",
        "Messaging & payment APIs",
        "Chatbot integration",
        "25% performance improvement"
      ],
      stats: {
        users: "Millions/day",
        apis: "REST",
        performance: "25% faster",
        coverage: "90%+ tests"
      },
      category: "Full Stack",
      icon: <Code className="w-6 h-6" />
    },
    {
      title: "Workflow Automation System",
      description: "Automated 100+ recurring engineering workflows using Selenium, Playwright, and Slack bots. Integrated with N8N and Zapier for seamless system orchestration.",
      image: "/api/placeholder/600/400",
      technologies: ["Selenium", "Playwright", "Python", "Slack API", "N8N", "Zapier", "FastAPI"],
      features: [
        "100+ automated workflows",
        "Slack bot integration",
        "Multi-platform automation",
        "400+ hours saved monthly"
      ],
      stats: {
        workflows: "100+",
        hours_saved: "400+/month",
        platforms: "Multiple",
        automation: "Seamless"
      },
      category: "Automation",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "GCP Microservices Migration",
      description: "Complete cloud migration to GCP microservices architecture with Docker and Kubernetes. Achieved 99.9% uptime, 40% faster deployments, and 35% response time improvement.",
      image: "/api/placeholder/600/400",
      technologies: ["Docker", "Kubernetes", "GCP", "FastAPI", "PostgreSQL", "GitHub Actions", "OAuth2"],
      features: [
        "Containerized microservices",
        "CI/CD automation",
        "Query optimization & caching",
        "35% faster response times"
      ],
      stats: {
        uptime: "99.9%",
        deployment: "40% faster",
        response: "35% faster",
        security: "OAuth2"
      },
      category: "DevOps",
      icon: <Cloud className="w-6 h-6" />
    },
    {
      title: "Analytics Dashboard Platform",
      description: "Real-time data analytics dashboards with React, GraphQL, and PostgreSQL for device monitoring and performance tracking. Features speech-to-text, object detection, and sentiment analysis.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "GraphQL", "PostgreSQL", "Node.js", "Django", "TensorFlow", "OpenCV"],
      features: [
        "Real-time analytics",
        "AI feature integration",
        "Device monitoring",
        "Performance tracking"
      ],
      stats: {
        analytics: "Real-time",
        features: "AI-powered",
        devices: "Monitored",
        insights: "Performance"
      },
      category: "Data Analytics",
      icon: <Database className="w-6 h-6" />
    }
  ]

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Innovative solutions delivering measurable business impact
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-white border border-gray-200 rounded-xl p-6 hover:border-primary-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Header with Icon and Category */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-secondary-500 flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <div className="text-xl">
                      {project.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="inline-block mt-1 px-2 py-0.5 bg-primary-50 text-primary-700 text-xs font-medium rounded-md">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 flex items-center justify-center transition-colors duration-200"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-primary-100 text-gray-600 hover:text-primary-600 flex items-center justify-center transition-colors duration-200"
                  >
                    <Github className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4 leading-relaxed line-clamp-2">
                {project.description}
              </p>

              {/* Features - Compact Grid */}
              <div className="mb-4 grid grid-cols-2 gap-2">
                {project.features.slice(0, 4).map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mt-1.5 flex-shrink-0"></div>
                    <span className="text-xs text-gray-600 leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Stats - Horizontal Compact */}
              <div className="flex flex-wrap gap-3 mb-4 pb-4 border-b border-gray-100">
                {Object.entries(project.stats).slice(0, 4).map(([key, value], statIndex) => (
                  <div key={statIndex} className="flex items-baseline gap-1.5">
                    <span className="text-sm font-bold text-primary-600">{value}</span>
                    <span className="text-xs text-gray-500 capitalize">{key.replace('_', ' ')}</span>
                  </div>
                ))}
              </div>

              {/* Technologies - Compact Pills */}
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.slice(0, 6).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-0.5 bg-gray-50 hover:bg-primary-50 text-gray-700 hover:text-primary-700 text-xs font-medium rounded-md transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 6 && (
                  <span className="px-2 py-0.5 text-gray-500 text-xs font-medium">
                    +{project.technologies.length - 6}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
