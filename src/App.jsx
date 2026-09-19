import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import FlagshipProjects from './components/FlagshipProjects'
import Skills from './components/Skills'
import AdditionalWork from './components/AdditionalWork'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useParticles } from './hooks/useParticles'

export default function App() {
  useParticles('particles-canvas')

  return (
    <div className="relative min-h-screen bg-bg text-primary font-sans overflow-x-hidden">
      {/* Background particle network canvas */}
      <canvas id="particles-canvas" />

      {/* Ambient background blur lighting */}
      <div className="fixed top-0 left-1/4 w-[500px] h-[500px] bg-brand/[0.03] rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed top-1/3 right-1/4 w-96 h-96 bg-brand-3/[0.03] rounded-full blur-3xl pointer-events-none z-0" />
      <div className="fixed bottom-1/4 left-1/3 w-80 h-80 bg-brand-2/[0.03] rounded-full blur-3xl pointer-events-none z-0" />

      {/* Main Content Layout in exact required sequence:
          Hero → About/Experience → Flagship Projects → Skills → Additional Work → Education → Contact */}
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <FlagshipProjects />
        <Skills />
        <AdditionalWork />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}
