import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, MissionVision, Projects, Gallery, VolunteerForm, DonateForm, ContactForm, Footer } from './components/Sections'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="fixed inset-0 -z-0 pointer-events-none bg-[radial-gradient(1000px_400px_at_top,rgba(16,185,129,0.08),transparent)]" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <MissionVision />
        <Projects />
        <Gallery />
        <VolunteerForm />
        <DonateForm />
        <ContactForm />
      </main>
      <Footer />
    </div>
  )
}

export default App
