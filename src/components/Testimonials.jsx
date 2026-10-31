import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'CEO, TechVault Inc.',
    text: 'Alex transformed our vision into a stunning reality. The attention to detail and technical expertise delivered a product that exceeded our highest expectations. A truly exceptional developer.',
    rating: 5,
    initials: 'SC',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Marcus Rivera',
    role: 'CTO, Digital Horizon Labs',
    text: 'Working with Alex was a game-changer for our startup. The scalable architecture and clean code delivered ahead of schedule set a new standard for our engineering team.',
    rating: 5,
    initials: 'MR',
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    name: 'Emily Watson',
    role: 'Product Lead, Skyline Creative',
    text: 'Incredible talent combined with outstanding communication. Alex understood our complex requirements instantly and delivered pixel-perfect results every single time.',
    rating: 5,
    initials: 'EW',
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    name: 'David Kim',
    role: 'Founder, AppForge',
    text: "From concept to deployment, Alex's full-stack expertise and creative problem-solving made our project a resounding success. I couldn't recommend them more highly.",
    rating: 5,
    initials: 'DK',
    gradient: 'from-orange-500 to-red-500',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  const variants = {
    enter: (dir) => ({ x: dir > 0 ? 200 : -200, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({ x: dir > 0 ? -200 : 200, opacity: 0 }),
  }

  const t = testimonials[current]

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[128px]" />

      <div className="relative max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-indigo-400 tracking-widest uppercase mb-3 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What People{' '}
            <span className="gradient-text">Say</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        {/* Testimonial card */}
        <div className="relative">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="glass rounded-2xl p-8 md:p-12 text-center"
            >
              <FaQuoteLeft className="text-indigo-500/30 mx-auto mb-6" size={40} />

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <FaStar key={i} className="text-yellow-400" size={18} />
                ))}
              </div>

              <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-8 max-w-2xl mx-auto italic">
                "{t.text}"
              </p>

              {/* Avatar & info */}
              <div className="flex flex-col items-center">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-lg mb-3`}>
                  {t.initials}
                </div>
                <h4 className="text-white font-semibold">{t.name}</h4>
                <p className="text-sm text-slate-400">{t.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            onClick={prev}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-14 p-3 glass rounded-xl text-white hover:bg-white/10 transition-all cursor-pointer"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft size={16} />
          </button>
          <button
            onClick={next}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-14 p-3 glass rounded-xl text-white hover:bg-white/10 transition-all cursor-pointer"
            aria-label="Next testimonial"
          >
            <FaChevronRight size={16} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > current ? 1 : -1)
                setCurrent(i)
              }}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                i === current
                  ? 'bg-indigo-500 w-8'
                  : 'bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

