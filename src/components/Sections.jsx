import { motion } from 'framer-motion'
import { Leaf, Recycle, Factory, HandHeart, Sprout, FlameKindling, Images, HeartHandshake, Mail } from 'lucide-react'

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="relative py-20">
    <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_top_left,rgba(16,185,129,0.1),transparent)]" />
    <div className="relative mx-auto max-w-7xl px-6">
      <motion.h2 initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-3xl md:text-4xl font-bold text-white">
        {title}
      </motion.h2>
      {subtitle && <p className="mt-2 text-slate-300/80 max-w-2xl">{subtitle}</p>}
      <div className="mt-10">{children}</div>
    </div>
  </section>
)

export function About() {
  return (
    <Section id="about" title="About the NGO" subtitle="A non-profit dedicated to advancing sustainable waste management and circular economy initiatives.">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-emerald-400/20 bg-slate-900/60 p-6 backdrop-blur">
          <p className="text-slate-300 leading-relaxed">
            We empower communities to reduce, reuse, and regenerate. Through education, technology, and hands-on projects, we turn everyday waste into valuable resources.
          </p>
        </div>
        <div className="rounded-2xl border border-emerald-400/20 bg-slate-900/60 p-6 backdrop-blur">
          <ul className="grid gap-3 text-slate-300">
            <li className="flex items-center gap-3"><Recycle className="text-emerald-300"/> Zero-waste awareness and training</li>
            <li className="flex items-center gap-3"><Sprout className="text-emerald-300"/> Community composting and eco-farming</li>
            <li className="flex items-center gap-3"><Factory className="text-emerald-300"/> Waste-to-resource innovations</li>
          </ul>
        </div>
      </div>
    </Section>
  )
}

export function MissionVision() {
  return (
    <Section id="mission" title="Mission & Vision" subtitle="Driving a circular future where waste becomes wealth and nature thrives.">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-emerald-400/20 bg-slate-900/60 p-6 backdrop-blur">
          <h3 className="text-white font-semibold mb-2">Mission</h3>
          <p className="text-slate-300">To implement scalable, community-driven waste solutions that create green jobs and restore ecosystems.</p>
        </div>
        <div className="rounded-2xl border border-emerald-400/20 bg-slate-900/60 p-6 backdrop-blur">
          <h3 className="text-white font-semibold mb-2">Vision</h3>
          <p className="text-slate-300">A world where every material circulates endlessly, powered by clean energy and collective action.</p>
        </div>
      </div>
    </Section>
  )
}

const projects = [
  { icon: BrickIcon, title: 'Waste-to-Bricks', desc: 'Upcycling plastic and industrial waste into durable eco-bricks with low carbon footprint.' },
  { icon: Sprout, title: 'Eco-Farming', desc: 'Soil regeneration through composting, mulching, and bioenzymes for productive urban gardens.' },
  { icon: FlameKindling, title: 'Biogas Plant', desc: 'Converting organic waste into clean cooking fuel and nutrient-rich slurry.' },
  { icon: HandHeart, title: 'Community Cleanups', desc: 'Regular cleanups with local volunteers, schools, and resident groups.' },
]

function BrickIcon(props){
  return (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="7" width="18" height="10" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 12h18M7 7v10M17 7v10" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  )
}

export function Projects() {
  return (
    <Section id="projects" title="Projects" subtitle="Practical initiatives creating measurable environmental impact.">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {projects.map(({ icon: Icon, title, desc }) => (
          <motion.div key={title} whileHover={{ y: -6 }} className="relative rounded-2xl border border-emerald-400/20 bg-slate-900/60 p-6 backdrop-blur overflow-hidden">
            <div className="absolute -top-16 right-0 h-40 w-40 rounded-full bg-emerald-500/10 blur-2xl" />
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-400/30 text-emerald-300">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
            </div>
            <p className="mt-3 text-slate-300 text-sm">{desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}

export function Gallery() {
  return (
    <Section id="gallery" title="Media Gallery" subtitle="Moments from ground activity and innovation labs.">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="aspect-video rounded-xl bg-slate-800/50 border border-emerald-400/20 overflow-hidden">
            <div className="h-full w-full bg-gradient-to-br from-emerald-600/20 to-teal-500/10" />
          </div>
        ))}
      </div>
    </Section>
  )
}

export function VolunteerForm() {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/volunteers`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
    })
    if (res.ok) {
      alert('Thanks for volunteering! We will reach out soon.')
      e.currentTarget.reset()
    } else {
      alert('Something went wrong. Please try again later.')
    }
  }

  return (
    <Section id="volunteer" title="Volunteer Signup" subtitle="Join our mission—contribute your time and skills.">
      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
        <input name="full_name" placeholder="Full Name" className="field" required />
        <input name="email" type="email" placeholder="Email" className="field" required />
        <input name="phone" placeholder="Phone" className="field" />
        <input name="city" placeholder="City" className="field" />
        <input name="availability" placeholder="Availability (e.g., weekends)" className="field md:col-span-2" />
        <input name="interests" placeholder="Interests" className="field md:col-span-2" />
        <button className="md:col-span-2 px-5 py-3 rounded-xl bg-emerald-500 text-slate-900 font-semibold hover:bg-emerald-400 transition">Submit</button>
      </form>
    </Section>
  )
}

export function DonateForm() {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    payload.amount = parseFloat(payload.amount)
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/donations`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
    })
    if (res.ok) {
      alert('Thank you for your generous pledge!')
      e.currentTarget.reset()
    } else {
      alert('Something went wrong. Please try again later.')
    }
  }
  return (
    <Section id="donate" title="Donation" subtitle="Support our programs to scale impact.">
      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
        <input name="name" placeholder="Full Name" className="field" required />
        <input name="email" type="email" placeholder="Email" className="field" required />
        <input name="amount" type="number" step="0.01" min="1" placeholder="Amount (USD)" className="field" required />
        <select name="recurring" className="field">
          <option value="false">One-time</option>
          <option value="true">Monthly</option>
        </select>
        <input name="date_intended" type="date" className="field" />
        <input name="message" placeholder="Message (optional)" className="field md:col-span-2" />
        <button className="md:col-span-2 px-5 py-3 rounded-xl bg-emerald-500 text-slate-900 font-semibold hover:bg-emerald-400 transition">Pledge Support</button>
      </form>
    </Section>
  )
}

export function ContactForm() {
  const handleSubmit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())
    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contacts`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload)
    })
    if (res.ok) {
      alert('Message sent! We will reply soon.')
      e.currentTarget.reset()
    } else {
      alert('Something went wrong. Please try again later.')
    }
  }
  return (
    <Section id="contact" title="Contact" subtitle="We would love to hear from you.">
      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
        <input name="name" placeholder="Your Name" className="field" required />
        <input name="email" type="email" placeholder="Email" className="field" required />
        <input name="subject" placeholder="Subject" className="field md:col-span-2" required />
        <textarea name="message" placeholder="Message" rows={5} className="field md:col-span-2" required />
        <button className="md:col-span-2 px-5 py-3 rounded-xl bg-emerald-500 text-slate-900 font-semibold hover:bg-emerald-400 transition">Send Message</button>
      </form>
    </Section>
  )
}

export function Footer() {
  return (
    <footer className="relative border-t border-emerald-400/20 mt-20">
      <div className="mx-auto max-w-7xl px-6 py-10 text-sm text-slate-400 flex flex-col md:flex-row items-center justify-between">
        <p>© {new Date().getFullYear()} Green Future Initiative. All rights reserved.</p>
        <p className="text-slate-500">Built with love for a cleaner planet.</p>
      </div>
    </footer>
  )
}

// shared input style
const style = document.createElement('style')
style.innerHTML = `.field{background-color:rgba(2,6,23,.6);border:1px solid rgba(52,211,153,.25);border-radius:0.75rem;color:#e2e8f0;padding:0.75rem 1rem;outline:none;box-shadow:0 0 24px rgba(16,185,129,.06) inset} .field::placeholder{color:rgba(226,232,240,.5)} .field:focus{border-color:rgba(52,211,153,.6);box-shadow:0 0 0 4px rgba(16,185,129,.15)}`
document.head.appendChild(style)
