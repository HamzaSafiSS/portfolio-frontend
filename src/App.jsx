import Navbar from './components/Navbar'
import Hero from './components/Hero'
import EngineeringHighlights from './components/EngineeringHighlights'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import ResumeCTA from './components/ResumeCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-slate-300 overflow-x-hidden">
      <Navbar />
      <Hero />
      <EngineeringHighlights />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <ResumeCTA />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
