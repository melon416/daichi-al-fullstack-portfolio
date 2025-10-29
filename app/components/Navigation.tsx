'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              scrollToSection('#home')
            }}
          >
            <motion.div
              animate={scrolled ? {} : {
                rotate: [0, 10, -10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className={`p-1.5 rounded-lg ${
                scrolled 
                  ? 'bg-gradient-to-br from-primary-500 to-secondary-500' 
                  : 'bg-white/20 backdrop-blur-sm'
              }`}
            >
              <Sparkles className={`w-5 h-5 ${
                scrolled ? 'text-white' : 'text-white'
              }`} />
            </motion.div>
            <motion.h1 
              className={`text-2xl font-bold transition-all duration-300 ${
                scrolled 
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent drop-shadow-sm' 
                  : 'text-white drop-shadow-lg'
              }`}
              animate={scrolled ? {} : {
                textShadow: [
                  '0 0 10px rgba(255, 255, 255, 0.5)',
                  '0 0 20px rgba(255, 255, 255, 0.7)',
                  '0 0 10px rgba(255, 255, 255, 0.5)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Daichi Yamamoto
            </motion.h1>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection(item.href)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 relative group ${
                    scrolled
                      ? 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                  <span className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 rounded-full transition-all duration-300 group-hover:w-3/4 ${
                    scrolled 
                      ? 'bg-gradient-to-r from-primary-600 to-secondary-600' 
                      : 'bg-white'
                  }`}></span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{
            height: isOpen ? 'auto' : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-lg mt-2 shadow-lg">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2.5 text-base font-medium text-gray-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-all duration-200"
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  )
}
