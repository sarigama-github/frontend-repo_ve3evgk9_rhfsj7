import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/M2rj0DQ6tP7dSzSz/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/20 via-slate-950/50 to-slate-950/90 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="pt-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-slate-900/60 backdrop-blur px-3 py-1 text-emerald-300/90">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Sustainable Waste Management
          </div>
          <h1 className="mt-5 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Building a Cleaner Tomorrow with Smart, Circular Solutions
          </h1>
          <p className="mt-4 text-slate-300/90 text-lg max-w-xl">
            We transform waste into resources through innovation, community action, and green technology.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <a href="#donate" className="px-5 py-3 rounded-xl bg-emerald-500/90 hover:bg-emerald-400 text-slate-900 font-semibold shadow-[0_0_30px_rgba(16,185,129,0.35)] transition">Donate Now</a>
            <a href="#volunteer" className="px-5 py-3 rounded-xl border border-emerald-400/40 text-emerald-200 hover:bg-emerald-500/10 transition">Become a Volunteer</a>
          </div>
        </motion.div>
        <div className="hidden lg:block" />
      </div>
    </section>
  )
}
