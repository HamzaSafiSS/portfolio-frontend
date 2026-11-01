import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { name: 'Home', to: 'hero' },
  { name: 'About', to: 'about' },
  { name: 'Skills', to: 'skills' },
  { name: 'Experience', to: 'experience' },
  { name: 'Projects', to: 'projects' },
  { name: 'Contact', to: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0c0a09]/85 backdrop-blur-xl border-b border-white/[0.06] shadow-xl shadow-black/40'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="hero"
            smooth
            duration={800}
            className="cursor-pointer group flex items-center gap-2.5"
          >
            <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#f26522] to-[#c73b06] flex items-center justify-center text-white text-sm font-sans font-bold shadow-md shadow-[#f26522]/30">
              H
            </span>
            <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-[#f5f5f4]">
              Hamza<span className="text-[#f26522]">.</span>
            </span>
          </Link>

          {/* Desktop nav floating pill */}
          <div className="hidden md:flex items-center gap-1 bg-[#141210]/65 backdrop-blur-xl border border-white/[0.08] rounded-full px-2.5 py-1.5 shadow-lg shadow-black/20">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy
                smooth
                offset={-80}
                duration={800}
                activeClass="!text-white !bg-white/10"
                className="px-3.5 py-1.5 text-xs lg:text-sm text-[#a39c94] hover:text-white rounded-full hover:bg-white/5 cursor-pointer transition-all duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button (desktop) */}
          <div className="hidden md:block">
            <Link
              to="contact"
              smooth
              duration={800}
              className="px-5 py-2 bg-[#f26522] hover:bg-[#d85215] text-white text-xs lg:text-sm font-medium rounded-full cursor-pointer shadow-md shadow-[#f26522]/25 transition-all duration-300 hover:scale-105 inline-block"
            >
              Let's Talk
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white p-2"
          >
            {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-950/95 backdrop-blur-xl border-b border-white/5"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  spy
                  smooth
                  offset={-64}
                  duration={800}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg cursor-pointer transition-all"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="contact"
                smooth
                duration={800}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 mt-2 bg-[#f26522] hover:bg-[#d85215] text-white text-center rounded-full cursor-pointer font-medium text-sm transition-all"
              >
                Let's Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

