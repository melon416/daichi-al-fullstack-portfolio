'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Code, 
  Brain, 
  Database, 
  Cloud, 
  Smartphone, 
  Zap,
  FileCode,
  Globe,
  Server,
  Container,
  GitBranch,
  Database as DbIcon
} from 'lucide-react'

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const skillCategories = [
    {
      title: "Languages & Frameworks",
      icon: <Code className="w-8 h-8" />,
      skills: [
        { name: "Python", level: 95, icon: <FileCode className="w-6 h-6" /> },
        { name: "JavaScript/TypeScript", level: 90, icon: <Code className="w-6 h-6" /> },
        { name: "React", level: 90, icon: <Globe className="w-6 h-6" /> },
        { name: "Next.js", level: 85, icon: <Globe className="w-6 h-6" /> },
        { name: "Node.js/Express", level: 88, icon: <Server className="w-6 h-6" /> },
        { name: "Django", level: 85, icon: <Code className="w-6 h-6" /> },
        { name: "Flask/FastAPI", level: 90, icon: <Code className="w-6 h-6" /> },
        { name: "Kotlin", level: 80, icon: <Smartphone className="w-6 h-6" /> },
        { name: "Java", level: 75, icon: <Code className="w-6 h-6" /> }
      ]
    },
    {
      title: "AI & Automation",
      icon: <Brain className="w-8 h-8" />,
      skills: [
        { name: "TensorFlow", level: 90, icon: <Brain className="w-6 h-6" /> },
        { name: "PyTorch", level: 85, icon: <Brain className="w-6 h-6" /> },
        { name: "scikit-learn", level: 88, icon: <Brain className="w-6 h-6" /> },
        { name: "OpenCV", level: 85, icon: <Brain className="w-6 h-6" /> },
        { name: "Selenium", level: 90, icon: <Zap className="w-6 h-6" /> },
        { name: "Playwright", level: 88, icon: <Zap className="w-6 h-6" /> },
        { name: "BeautifulSoup", level: 85, icon: <Zap className="w-6 h-6" /> },
        { name: "N8N", level: 80, icon: <Zap className="w-6 h-6" /> },
        { name: "RPA Tools", level: 75, icon: <Zap className="w-6 h-6" /> }
      ]
    },
    {
      title: "Databases & APIs",
      icon: <Database className="w-8 h-8" />,
      skills: [
        { name: "PostgreSQL", level: 90, icon: <DbIcon className="w-6 h-6" /> },
        { name: "MongoDB", level: 88, icon: <DbIcon className="w-6 h-6" /> },
        { name: "MySQL", level: 85, icon: <DbIcon className="w-6 h-6" /> },
        { name: "Firebase", level: 80, icon: <DbIcon className="w-6 h-6" /> },
        { name: "Supabase", level: 85, icon: <DbIcon className="w-6 h-6" /> },
        { name: "REST APIs", level: 95, icon: <Code className="w-6 h-6" /> },
        { name: "GraphQL", level: 80, icon: <Code className="w-6 h-6" /> },
        { name: "WebSockets", level: 85, icon: <Code className="w-6 h-6" /> },
        { name: "Kafka/RabbitMQ", level: 75, icon: <Code className="w-6 h-6" /> }
      ]
    },
    {
      title: "DevOps & Cloud",
      icon: <Cloud className="w-8 h-8" />,
      skills: [
        { name: "Docker", level: 90, icon: <Container className="w-6 h-6" /> },
        { name: "Kubernetes", level: 85, icon: <Cloud className="w-6 h-6" /> },
        { name: "AWS", level: 88, icon: <Cloud className="w-6 h-6" /> },
        { name: "Google Cloud", level: 85, icon: <Cloud className="w-6 h-6" /> },
        { name: "Azure", level: 80, icon: <Cloud className="w-6 h-6" /> },
        { name: "GitHub Actions", level: 90, icon: <GitBranch className="w-6 h-6" /> },
        { name: "GitLab CI", level: 85, icon: <GitBranch className="w-6 h-6" /> },
        { name: "Jenkins", level: 80, icon: <GitBranch className="w-6 h-6" /> },
        { name: "Terraform", level: 75, icon: <Cloud className="w-6 h-6" /> }
      ]
    },
    {
      title: "Mobile Development",
      icon: <Smartphone className="w-8 h-8" />,
      skills: [
        { name: "React Native", level: 85, icon: <Smartphone className="w-6 h-6" /> },
        { name: "Flutter", level: 80, icon: <Smartphone className="w-6 h-6" /> },
        { name: "Android (Kotlin)", level: 75, icon: <Smartphone className="w-6 h-6" /> },
        { name: "iOS (Swift)", level: 70, icon: <Smartphone className="w-6 h-6" /> },
        { name: "ARKit", level: 65, icon: <Smartphone className="w-6 h-6" /> },
        { name: "ARCore", level: 65, icon: <Smartphone className="w-6 h-6" /> }
      ]
    },
    {
      title: "Testing & QA",
      icon: <Zap className="w-8 h-8" />,
      skills: [
        { name: "Unit Testing", level: 90, icon: <Zap className="w-6 h-6" /> },
        { name: "Integration Testing", level: 85, icon: <Zap className="w-6 h-6" /> },
        { name: "UI Testing", level: 80, icon: <Zap className="w-6 h-6" /> },
        { name: "Mocha", level: 85, icon: <Zap className="w-6 h-6" /> },
        { name: "Cypress", level: 80, icon: <Zap className="w-6 h-6" /> },
        { name: "Jest", level: 88, icon: <Zap className="w-6 h-6" /> }
      ]
    }
  ]

  return (
    <section id="skills" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            Comprehensive expertise across modern development stack
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-white border border-gray-200 rounded-xl p-5 hover:border-primary-200 transition-all duration-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="text-primary-600">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div className="text-gray-600 group-hover:text-primary-600 transition-colors duration-300">
                          {skill.icon}
                        </div>
                        <span className="font-medium text-gray-700">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-primary-600">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.3 }}
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">
              Third-Party Integrations & Tools
            </h4>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Twilio", "SendGrid", "Stripe", "Google Places API",
                "Slack Bot Integration", "Telegram Bot", "Discord Bot",
                "Appium", "Zapier", "Make/Integromat", "Prometheus",
                "Grafana", "Terraform", "AWS SDK", "GCP SDK"
              ].map((tool, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, delay: 0.8 + (index * 0.05) }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 rounded-full text-sm font-medium hover:shadow-md transition-all duration-300"
                >
                  {tool}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
