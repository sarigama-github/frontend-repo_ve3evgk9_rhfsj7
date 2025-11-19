import { useState } from 'react'
import { Menu, Leaf, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Mission & Vision', href: '#mission' },
  { label: 'Projects', href: '#projects' },
  { label: 'Volunteer', href: '#volunteer' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Donate', href: '#donate' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-5 rounded-2xl border border-emerald-500/20 bg-slate-900/60 backdrop-blur-md shadow-[0_0_40px_rgba(16,185,129,0.15)]">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 rounded-xl blur-md bg-emerald-500/30" />
                <div className="relative rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-400/20 p-2 border border-emerald-400/30">
                  <Leaf className="text-emerald-300" size={22} />
                </div>
              </div>
              <span className="font-semibold tracking-wide text-emerald-200">Green Future Initiative</span>
            </a>
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="px-3 py-2 text-sm text-slate-200/90 rounded-lg hover:text-white hover:bg-emerald-500/10 border border-transparent hover:border-emerald-400/30 transition">
                  {item.label}
                </a>
              ))}
            </nav>
            <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg border border-emerald-400/30 text-emerald-200">
              {open ? <X /> : <Menu />}
            </button>
          </div>
          {open && (
            <div className="md:hidden border-t border-emerald-400/20 px-4 pb-4">
              <nav className="grid gap-2 pt-2">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="px-3 py-2 text-sm text-slate-200 rounded-lg hover:text-white hover:bg-emerald-500/10 border border-transparent hover:border-emerald-400/30 transition">
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
