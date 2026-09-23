'use client'

import { useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  GitBranch,
  Network,
  Mail,
  Menu,
  Sparkles,
  X,
} from 'lucide-react'

const projects = [
  {
    number: '01',
    title: 'Dani Studio',
    description: 'Landing page responsive, con una experiencia de usuario fluida y una arquitectura optimizada para rendimiento y SEO.',
    tags: ['Next.js', 'Tailwind', 'Vercel','TypeScript'],
    color: 'coral',
  },
  {
    number: '02',
    title: 'Flores Eternas LP',
    description: 'Eccomerce para el negocio de flores eternas, diseñado con base en las necesidades de la cliente. Incluye Panel administrativo, gestion de pedidos y pasarela de pago.',
    tags: ['Vuejs', 'Vercel', 'Springboot', 'Postgres', 'Render'],
    color: 'lime',
  },
  {
    number: '03',
    title: 'Raiz Viva',
    description: 'Una plataforma SaaS de orquestación territorial que integra turismo, economía  y comunidad en una sola infraestructura digital. Incluye una API de mapas interativos que visualiza los actores territoriales y su información.',
    tags: ['Nuxt.js', 'Django', 'Vercel', 'Neon'],
    color: 'violet',
  },
]

const skills = ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Git & GitHub', 'Figma', 'CSS']

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="min-h-screen  overflow-hidden bg-[#101010] text-[#f2efe8] selection:bg-[#d8ff3e] selection:text-[#101010]">
      <video autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover opacity-70">
          <source src="/loopPortafolioTech.mp4" type="video/mp4" />
          <source src="/loop.webm" type="video/webm" />
          </video>
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.055] grain" />
      <div className="relative z-10 mx-auto w-full px-5 sm:px-8 lg:px-14">
        <header className="flex items-center justify-between border-b border-white/10 py-6">
          <a href="#inicio" className="font-mono text-sm font-bold tracking-[-0.04em]" onClick={closeMenu}>
            <span className="text-[#d8ff3e]">/</span> sofía.dev
          </a>
          <nav className="hidden items-center gap-9 font-mono text-[11px] uppercase tracking-[0.16em] text-white/55 md:flex">
            <a className="transition-colors hover:text-[#d8ff3e]" href="#proyectos">Proyectos</a>
            <a className="transition-colors hover:text-[#d8ff3e]" href="#sobre-mi">Sobre mí</a>
            <a className="transition-colors hover:text-[#d8ff3e]" href="#contacto">Contacto</a>
          </nav>
          <button className="md:hidden" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
          {menuOpen && (
            <nav className="absolute left-5 right-5 top-[76px] z-20 flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#191919] p-6 font-mono text-xs uppercase tracking-[0.16em] shadow-2xl md:hidden">
              <a href="#proyectos" onClick={closeMenu}>Proyectos</a>
              <a href="#sobre-mi" onClick={closeMenu}>Sobre mí</a>
              <a href="#contacto" onClick={closeMenu}>Contacto</a>
            </nav>
          )}
        </header>

        <section id="inicio" className="relative flex min-h-screen w-full flex-col justify-center py-24 min-w-screen">
          
          
          <div className="mb-10 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[#d8ff3e]">
            <span className="size-2 animate-pulse rounded-full bg-[#d8ff3e]" /> Disponible para mi primera oportunidad
          </div>
          <h1 className="max-w-5xl text-[clamp(4rem,11vw,10.5rem)] font-black leading-[0.83] tracking-[-0.085em]">
            Código con
            <span className="block pl-[10vw] text-[#d8ff3e]">intención.</span>
          </h1>
          <div className="mt-14 flex flex-col gap-8 lg:ml-[27%] lg:max-w-xl lg:flex-row lg:items-end lg:gap-16">
            <p className="max-w-sm text-lg leading-relaxed text-white/60">Soy Lady, desarrolladora fullstack junior. Especializada en la creación de aplicaciones web escalables, transformando requerimientos complejos en interfaces intuitivas, de alto rendimiento y centradas en la experiencia de usuario.</p>
            <a href="#proyectos" className="group flex w-fit items-center gap-3 font-mono text-xs uppercase tracking-[0.15em] text-[#f2efe8]">
              Explorar trabajo <span className="flex size-10 items-center justify-center rounded-full border border-white/30 transition-all group-hover:border-[#d8ff3e] group-hover:bg-[#d8ff3e] group-hover:text-[#101010]"><ArrowDown size={15} /></span>
            </a>
          </div>
          <div className="absolute bottom-8 left-0 right-0 flex justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-white/30">
            <span>remoto-presencial</span><span>Colombia, Palmira</span>
          </div>
        </section>

        <section id="proyectos" className="border-t border-white/10 py-24 lg:py-32">
          <div className="mb-14 flex items-end justify-between">
            <div><p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#d8ff3e]">01 / Cosas que he construido</p><h2 className="text-5xl font-bold tracking-[-0.06em] sm:text-7xl">Proyectos<span className="text-[#d8ff3e]">.</span></h2></div>
            <span className="hidden font-mono text-xs text-white/30 sm:block">(03 seleccionados)</span>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <article key={project.number} className={`group relative flex min-h-[450px] flex-col justify-between overflow-hidden rounded-[2rem] p-7 transition-transform duration-500 hover:-translate-y-2 ${project.color === 'coral' ? 'bg-[#ff765d] text-[#18100d]' : project.color === 'lime' ? 'bg-[#d8ff3e] text-[#18200a]' : 'bg-[#8d77ff] text-[#151020]'}`}>
                <div className="flex justify-between font-mono text-[11px] uppercase tracking-widest"><span>{project.number}</span><ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
                <div><div className="mb-8 flex size-20 items-center justify-center rounded-full border border-current/30"><Code2 size={30} strokeWidth={1.3} /></div><h3 className="text-4xl font-bold tracking-[-0.06em]">{project.title}</h3><p className="mt-4 max-w-xs text-sm leading-relaxed opacity-70">{project.description}</p></div>
                <div className="mt-8 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full border border-current/25 px-3 py-1 font-mono text-[10px] uppercase tracking-wider">{tag}</span>)}</div>
              </article>
            ))}
          </div>
        </section>
      

        <section id="sobre-mi" className="grid gap-12 border-t border-white/10 py-24 lg:grid-cols-[0.8fr_1.2fr] lg:py-32">
          <div><p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#d8ff3e]">02 / Un poco sobre mí</p><h2 className="text-5xl font-bold tracking-[-0.06em] sm:text-7xl">Aprendo<br />haciendo<span className="text-[#d8ff3e]">.</span></h2></div>
          <div className="lg:pt-16"><p className="max-w-2xl text-2xl leading-tight tracking-[-0.03em] text-white/85 sm:text-3xl">No tengo años de experiencia. Tengo curiosidad, criterio y la disciplina para convertir cada reto en algo mejor que ayer.</p><div className="mt-12 flex flex-wrap gap-2">{skills.map(skill => <span key={skill} className="rounded-full border border-white/15 px-4 py-2 font-mono text-xs text-white/60 transition-colors hover:border-[#d8ff3e] hover:text-[#d8ff3e]">{skill}</span>)}</div></div>
        </section>

        <section id="contacto" className="relative border-t border-white/10 py-24 lg:py-40">
          <Sparkles className="absolute right-[8%] top-24 text-[#d8ff3e]" size={24} />
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#d8ff3e]">03 / ¿Hablamos?</p>
          <h2 className="max-w-5xl text-[clamp(3.5rem,9vw,9rem)] font-black leading-[0.86] tracking-[-0.08em]">Hagamos algo<br /><span className="text-[#d8ff3e]">inolvidable.</span></h2>
          <a href="https://wa.me/573223840487?text=Hola%20vi%20tu%20portafolio>" className="group mt-12 inline-flex items-center gap-4 border-b border-[#d8ff3e] pb-3 font-mono text-sm uppercase tracking-[0.12em] text-[#d8ff3e]">Contactar por WhatsApp <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
          
        </section>

        <footer className="flex flex-col gap-5 border-t border-white/10 py-8 font-mono text-[10px] uppercase tracking-[0.15em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Lady Vidal</span><div className="flex gap-5"><a href="#" aria-label="GitHub" className="transition-colors hover:text-[#d8ff3e]"><GitBranch size={16} /></a><a href="#" aria-label="LinkedIn" className="transition-colors hover:text-[#d8ff3e]"><Network size={16} /></a><a href="mailto:hola@sofiadev.dev" aria-label="Email" className="transition-colors hover:text-[#d8ff3e]"><Mail size={16} /></a></div><span>Hecho con curiosidad + código</span>
        </footer>
      </div>
    </main>
  )
}
