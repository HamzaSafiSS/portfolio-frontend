import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaPaperPlane, FaMapMarkerAlt, FaEnvelope, FaBriefcase } from 'react-icons/fa'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'

const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    label: 'Location',
    value: 'Dire Dawa, Ethiopia',
    subvalue: 'Available for Remote Worldwide',
  },
  {
    icon: FaEnvelope,
    label: 'Direct Email',
    value: 'contact@hamza.dev',
    subvalue: 'Direct response within 24 hours',
  },
  {
    icon: FaBriefcase,
    label: 'Availability',
    value: 'Available for Opportunities',
    subvalue: 'Full-Stack & Backend Engineering',
    isAvailable: true,
  },
]

const socials = [
  { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080'

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    try {
      const res = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setStatus(null), 6000)
      } else {
        const errData = await res.json().catch(() => null)
        let msg = 'Submission failed. Please check your inputs.'
        if (errData?.data && typeof errData.data === 'object') {
          // Extract bean validation errors (e.g. { email: "...", message: "..." })
          msg = Object.values(errData.data).join(' · ')
        } else if (errData?.message) {
          msg = errData.message
        }
        setErrorMessage(msg)
        setStatus('error')
        setTimeout(() => setStatus(null), 7000)
      }
    } catch {
      setErrorMessage(
        `Unable to connect to the backend API at ${API_BASE_URL}. Please verify the server is running.`
      )
      setStatus('error')
      setTimeout(() => setStatus(null), 7000)
    }
  }

  return (
    <section
      id="contact"
      className="relative bg-[#0c0a09] text-white py-16 sm:py-20 lg:py-28 overflow-hidden"
    >
      {/* Background warm ambient glow matching previous sections */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[550px] opacity-15"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(242, 101, 34, 0.18) 0%, transparent 70%)',
            filter: 'blur(75px)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          {/* Section Label */}
          <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-[#f26522] uppercase mb-3 block">
            Get In Touch
          </span>

          {/* Main Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Let's Work <span className="text-[#f26522]">Together</span>
          </h2>

          <p className="text-sm sm:text-base text-[#a39c94] max-w-xl mx-auto leading-relaxed">
            Have a project in mind, an engineering role to discuss, or want to
            collaborate? Drop a message below and I'll get back to you promptly.
          </p>

          {/* Warm Amber Accent Divider */}
          <div className="w-20 h-1 bg-gradient-to-r from-[#f26522] to-[#f6d561] mx-auto rounded-full mt-5" />
        </motion.div>

        {/* Contact Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Contact info cards (Left Column) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-4"
          >
            {contactInfo.map(({ icon: Icon, label, value, subvalue, isAvailable }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative bg-[#141211] border border-white/[0.08] hover:border-white/[0.14] rounded-2xl p-5 sm:p-6 transition-all duration-300 shadow-lg shadow-black/20 hover:shadow-black/40 hover:-translate-y-0.5"
              >
                {/* Left Edge Accent Tab */}
                <div className="absolute left-0 top-5 w-1 h-8 rounded-r-full bg-[#f26522] shadow-[0_0_8px_rgba(242,101,34,0.4)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#f26522]/10 border border-[#f26522]/20 flex items-center justify-center text-[#f26522] group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="text-xs font-semibold text-[#f26522] tracking-wider uppercase">
                        {label}
                      </p>
                      {isAvailable && (
                        <span className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[10px] font-medium text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Available
                        </span>
                      )}
                    </div>
                    <p className="text-white font-semibold text-base mt-1 group-hover:text-[#f6d561] transition-colors">
                      {value}
                    </p>
                    {subvalue && (
                      <p className="text-xs text-[#a39c94] mt-0.5">{subvalue}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Social Links Card */}
            <div className="bg-[#141211] border border-white/[0.08] rounded-2xl p-6 shadow-lg shadow-black/20">
              <p className="text-xs font-semibold text-[#f26522] uppercase tracking-wider mb-4">
                Connect Across Platforms
              </p>
              <div className="flex items-center gap-3">
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="flex items-center gap-2 px-4 py-2.5 bg-white/[0.04] hover:bg-[#f26522]/15 border border-white/[0.08] hover:border-[#f26522]/40 rounded-xl text-[#a39c94] hover:text-[#f26522] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer text-xs font-medium"
                  >
                    <Icon size={16} />
                    <span>{label}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form (Right Column) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="relative bg-[#141211] border border-white/[0.08] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl shadow-black/40">
              {/* Left Edge Accent Indicator Tab */}
              <div className="absolute left-0 top-8 w-1 h-12 rounded-r-full bg-[#f26522] shadow-[0_0_10px_rgba(242,101,34,0.45)]" />

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-[#c4b5a5] mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. John Doe"
                      className="w-full px-4 py-3 sm:py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-[#6b655f] text-sm focus:outline-none focus:border-[#f26522] focus:ring-1 focus:ring-[#f26522] focus:bg-white/[0.05] transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-xs sm:text-sm font-medium text-[#c4b5a5] mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. john@example.com"
                      className="w-full px-4 py-3 sm:py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-[#6b655f] text-sm focus:outline-none focus:border-[#f26522] focus:ring-1 focus:ring-[#f26522] focus:bg-white/[0.05] transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-[#c4b5a5] mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry, Job Opportunity, or Consultation"
                    className="w-full px-4 py-3 sm:py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-[#6b655f] text-sm focus:outline-none focus:border-[#f26522] focus:ring-1 focus:ring-[#f26522] focus:bg-white/[0.05] transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-medium text-[#c4b5a5] mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project, timeline, or requirements..."
                    className="w-full px-4 py-3 sm:py-3.5 bg-white/[0.03] border border-white/[0.08] rounded-xl text-white placeholder-[#6b655f] text-sm focus:outline-none focus:border-[#f26522] focus:ring-1 focus:ring-[#f26522] focus:bg-white/[0.05] transition-all duration-200 resize-none"
                  />
                </div>

                {/* Status messages */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-emerald-500/10 border border-emerald-500/25 rounded-xl text-emerald-400 text-sm font-medium flex items-center gap-2.5"
                  >
                    <span>✓</span>
                    <span>Message sent successfully! I will get back to you shortly.</span>
                  </motion.div>
                )}
                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-red-500/10 border border-red-500/25 rounded-xl text-red-400 text-sm font-medium flex items-center gap-2.5"
                  >
                    <span>✗</span>
                    <span>{errorMessage || 'Something went wrong. Please try again or reach out directly.'}</span>
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-[#f26522] hover:bg-[#ff7828] text-white font-semibold rounded-xl cursor-pointer shadow-lg shadow-[#f26522]/25 hover:shadow-[#f26522]/40 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2.5 text-sm sm:text-base"
                >
                  {status === 'loading' ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <FaPaperPlane size={14} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
