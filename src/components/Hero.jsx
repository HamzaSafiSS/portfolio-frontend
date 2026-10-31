import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { HiArrowRight, HiOutlineMail } from 'react-icons/hi'
import heroWebp from '../assets/images/herosectionv1.webp'
import heroPng from '../assets/images/herosectionv1.png'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-[#0c0a09] text-white flex items-center justify-center pt-24 pb-12 lg:py-0 overflow-hidden"
    >
      {/* Ambient background lighting & warm atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle warm base gradient */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            background:
              'radial-gradient(ellipse at 30% 50%, rgba(200, 70, 15, 0.12) 0%, transparent 65%)',
          }}
        />

        {/* Seamless bottom transition gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0c0a09] via-[#0c0a09]/70 to-transparent z-10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center min-h-[calc(100vh-6rem)]">

          {/* Left Column: Seated Subject with Warm Amber Spotlight */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center items-end relative pt-6 lg:pt-0"
          >
            {/* The signature warm orange/amber radial spotlight */}
            <div className="absolute top-[48%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[440px] md:w-[520px] lg:w-[580px] xl:w-[620px] aspect-square rounded-full pointer-events-none -z-10">
              <div
                className="w-full h-full rounded-full"
                style={{
                  background:
                    'radial-gradient(circle at center, rgba(242, 101, 34, 0.65) 0%, rgba(215, 78, 20, 0.44) 30%, rgba(135, 42, 10, 0.22) 54%, rgba(45, 14, 4, 0.08) 72%, transparent 85%)',
                  filter: 'blur(45px)',
                }}
              />
            </div>

            {/* Subject Image Container */}
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] md:max-w-[450px] lg:max-w-[490px] xl:max-w-[530px] flex justify-center items-end">
              {/* Subtle floor contact shadow */}
              <div
                className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[72%] h-7 rounded-full pointer-events-none"
                style={{
                  background:
                    'radial-gradient(ellipse at center, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.35) 50%, transparent 75%)',
                  filter: 'blur(8px)',
                }}
              />

              <picture>
                <source srcSet={heroWebp} type="image/webp" />
                <img
                  src={heroPng}
                  alt="Hamza - Software Engineer"
                  className="relative z-10 w-full h-auto object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.5)] select-none pointer-events-none"
                  draggable={false}
                />
              </picture>
            </div>
          </motion.div>

          {/* Right Column: Exact Typography & CTA Hierarchy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col justify-center text-left lg:pl-4 xl:pl-8"
          >
            {/* Main Heading: Hi, I am Hamza. */}
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-[4.75rem] xl:text-[5.25rem] font-medium tracking-tight text-[#f7f5f2] leading-[1.08] mb-3">
              Hi, I am{' '}
              <span className="text-[#f26522] italic font-serif">Hamza.</span>
            </h1>

            {/* Professional Title: All caps, wide tracking */}
            <p className="text-xs sm:text-[13px] md:text-sm tracking-[0.22em] text-[#a19a93] uppercase font-semibold mb-6">
              SOFTWARE ENGINEER, FULL-STACK &amp; BACKEND
            </p>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#b8b0a7] font-normal leading-relaxed max-w-lg mb-8">
              I build web applications with Java, Spring Boot, React, and modern
              database technologies.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="projects"
                smooth
                duration={800}
                className="group px-7 py-3.5 bg-[#f26522] hover:bg-[#d85215] text-white font-medium text-sm sm:text-base rounded-full cursor-pointer shadow-lg shadow-[#f26522]/25 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2"
              >
                View Portfolio
                <HiArrowRight className="text-white text-lg group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <Link
                to="contact"
                smooth
                duration={800}
                className="px-7 py-3.5 bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-[#ede8e3] font-medium text-sm sm:text-base rounded-full cursor-pointer backdrop-blur-md transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center gap-2.5"
              >
                <HiOutlineMail className="text-[#ede8e3] text-lg" />
                Contact Me
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
