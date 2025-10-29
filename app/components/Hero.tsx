'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Code, Brain } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToProjects = () => {
    const element = document.querySelector('#projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen gradient-bg relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-white/10 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-20 right-10 w-12 h-12 bg-white/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <span className="text-lg font-medium text-white/90">Hello, I&apos;m</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
            >
              Daichi
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
                Yamamoto
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
                <Code className="w-4 h-4" />
                <span className="text-base font-medium">Full Stack Developer</span>
              </div>
              <div className="flex items-center gap-2 bg-white/15 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20">
                <Brain className="w-4 h-4" />
                <span className="text-base font-medium">AI Engineer</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-lg text-white/90 mb-8 leading-relaxed max-w-2xl"
            >
              AI & Automation Engineer with over 7 years of experience designing, deploying, and scaling intelligent automation and software systems. Bridging AI research and business automation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-3 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToProjects}
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-medium text-base hover:bg-white/95 transition-all duration-200 shadow-md hover:shadow-lg"
              >
                View My Work
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={scrollToAbout}
                className="border border-white/50 text-white px-6 py-3 rounded-lg font-medium text-base hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
              >
                Learn More
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="grid grid-cols-3 gap-8"
            >
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">7+</div>
                <div className="text-sm text-white/70">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">50+</div>
                <div className="text-sm text-white/70">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">100%</div>
                <div className="text-sm text-white/70">Client Satisfaction</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Elements */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative">
              {/* Glowing Background Orbs */}
              <motion.div
                className="absolute inset-0 blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-96 h-96 bg-gradient-to-r from-white/20 to-white/10 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </motion.div>

              {/* Static Gradient Border with Animated Colors */}
              <div className="relative w-80 h-80">
                {/* Outer Glow Ring */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{
                    boxShadow: [
                      "0 0 40px rgba(8, 145, 178, 0.4), 0 0 80px rgba(8, 145, 178, 0.2)",
                      "0 0 60px rgba(16, 185, 129, 0.4), 0 0 100px rgba(16, 185, 129, 0.2)",
                      "0 0 40px rgba(34, 211, 238, 0.4), 0 0 80px rgba(34, 211, 238, 0.2)",
                      "0 0 60px rgba(8, 145, 178, 0.4), 0 0 100px rgba(8, 145, 178, 0.2)",
                    ],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Gradient Border (no rotation) */}
                <div className="w-full h-full rounded-full p-[4px] bg-gradient-to-r from-cyan-500 via-emerald-500 via-teal-500 to-cyan-500 bg-[length:200%_200%] animate-gradient">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-600 via-secondary-600 to-primary-800 flex items-center justify-center p-2">
                    {/* Inner Glow Effect */}
                    <motion.div
                      animate={{
                        boxShadow: [
                          "0 0 30px rgba(255, 255, 255, 0.4), inset 0 0 30px rgba(255, 255, 255, 0.1)",
                          "0 0 50px rgba(255, 255, 255, 0.6), inset 0 0 40px rgba(255, 255, 255, 0.15)",
                          "0 0 30px rgba(255, 255, 255, 0.4), inset 0 0 30px rgba(255, 255, 255, 0.1)",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      className="w-full h-full rounded-full bg-black/20 backdrop-blur-xl flex items-center justify-center relative overflow-hidden"
                    >
                      {/* Profile Image */}
                      <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="w-full h-full rounded-full overflow-hidden border-4 border-white/30 shadow-2xl relative"
                      >
                        <Image 
                          src="/profile.png" 
                          alt="Daichi Yamamoto" 
                          fill
                          className="object-cover"
                          priority
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Labeled Badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1,
                  scale: 1,
                  y: [-8, 8, -8]
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 0.6 },
                  scale: { duration: 0.6, delay: 0.6 },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
                className="absolute -top-5 -right-1 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 shadow-lg"
              >
                <span className="text-white font-semibold text-sm">AI</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1,
                  scale: 1,
                  y: [8, -8, 8]
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 0.8 },
                  scale: { duration: 0.6, delay: 0.8 },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                }}
                className="absolute -bottom-6 -left-6 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 shadow-lg"
              >
                <span className="text-white font-semibold text-sm">Automation</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1,
                  scale: 1,
                  x: [-5, 5, -5]
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 1 },
                  scale: { duration: 0.6, delay: 1 },
                  x: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }
                }}
                className="absolute top-1/4 -left-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 shadow-lg"
              >
                <span className="text-white font-semibold text-sm whitespace-nowrap">Backend</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1,
                  scale: 1,
                  y: [-6, 6, -6],
                  x: [0, 3, 0]
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 1.2 },
                  scale: { duration: 0.6, delay: 1.2 },
                  y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.2 },
                  x: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }
                }}
                className="absolute top-1/2 -right-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 shadow-lg"
              >
                <span className="text-white font-semibold text-sm whitespace-nowrap">Frontend</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ 
                  opacity: 1,
                  scale: 1,
                  y: [6, -6, 6]
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 1.4 },
                  scale: { duration: 0.6, delay: 1.4 },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.4 }
                }}
                className="absolute bottom-5 -right-12 px-4 py-2 bg-white/20 backdrop-blur-md rounded-lg border border-white/30 shadow-lg"
              >
                <span className="text-white font-semibold text-sm whitespace-nowrap">Database</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          onClick={scrollToAbout}
          className="text-white hover:text-white/80 transition-colors duration-300"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.button>
      </motion.div>
    </section>
  )
}
