'use client'

import { motion } from 'framer-motion'
import { Heart, Code, Coffee } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Left - Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold mb-2">
              Daichi Yamamoto
            </h3>
            <p className="text-gray-400">
              Full Stack Developer & AI Engineer
            </p>
          </motion.div>

          {/* Center - Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <blockquote className="text-lg italic text-gray-300 mb-2">
              &ldquo;Building the future with AI and software development&rdquo;
            </blockquote>
            <p className="text-sm text-gray-500">
              Dallas, Texas
            </p>
          </motion.div>

          {/* Right - Built with */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <p className="text-sm text-gray-400 mb-2">Built with</p>
            <div className="flex items-center justify-center md:justify-end gap-2">
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-red-500"
              >
                <Heart className="w-4 h-4" />
              </motion.div>
              <span className="text-sm text-gray-300">and</span>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="text-blue-400"
              >
                <Code className="w-4 h-4" />
              </motion.div>
              <span className="text-sm text-gray-300">and</span>
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                className="text-yellow-500"
              >
                <Coffee className="w-4 h-4" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {currentYear} Daichi Yamamoto. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>Kiwi530@proton.me</span>
              <span>•</span>
              <span>Available for work</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
