'use client'

import { useState } from 'react'
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  GitBranch,
  Menu,
  X,
} from 'lucide-react'
import BoxCycle from '@/components/BoxCycle'

interface Project {
  number:String
  title:String
  description:String
  tags:String[]
  color: 'coral' | 'lime' | 'violet'
  liveUrl?:String
  codeUrl:String
}

const projects = [
  {
    number: '01',
    title: 'Dani Studio',
    description: 'Landing page responsive para negocio de servicios estéticos, con una experiencia de usuario fluida y una arquitectura optimizada para rendimiento y SEO.',
    tags: ['Next.js', 'Tailwind', 'Vercel','TypeScript'],
    color: 'coral',
    liveUrl: 'https://dani-studio-pearl.vercel.app/',
    codeUrl: 'https://github.com/ladyjvs2054/Dani-Studio.git'
  },
  {
    number: '02',
    title: 'Flores Eternas LP',
    description: 'Eccomerce para el negocio de flores eternas, diseñado con base en las necesidades de la cliente. Incluye Panel administrativo, gestion  de pedidos y pasarela de pago.',
    tags: ['Vuejs', 'Vercel', 'Springboot', 'Postgres', 'Railway'],
    color: 'lime',
    liveUrl: 'https://flores-eternas-lp.vercel.app/',
    codeUrl: 'https://github.com/Flores-Eternas-org/Flores-Eternas-org.git'
  },
  {
    number: '03',
    title: 'Raiz Viva',
    description: 'Una plataforma SaaS de orquestación territorial que integra turismo, economía  y comunidad en una sola infraestructura digital. Incluye una API de mapas interativos que visualiza los actores territoriales y su información.',
    tags: ['Nuxt.js', 'Django', 'Vercel', 'Neon'],
    color: 'violet',
    codeUrl: 'https://github.com/Raiz-Viva/raiz-viva.git'



    
  },
]

const stack = [
  { category: 'Frontend', items: ['Next.js', 
  'React', 
  'Vue.js', 
  'Nuxt.js', 
  'Tailwind CSS', 
  'JavaScript', 
  'HTML5 / CSS3', 
  'Diseño UX/UI']},
  { category: 'Backend', items: ['Java', 'Spring Boot', 'APIs RESTful','Python'] },
  { category: 'Bases de Datos', items: ['PostgreSQL', 'MySQL', 'Oracle-PL/SQL'] },
  { category: 'Cloud & DevOps', items: ['Git/GitHub', 'CI/CD', 'Vercel', 'Render', 'Railway'] },
  { category: 'Herramientas y Metodologias', items: ['Figma', 'Trello', 'Jira', 'Metodologia Scrum'] },
  { category: 'Idiomas', items: ['Ingles B2 certificado'] },
  
]



export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)

  const closeMenu = () => setMenuOpen(false)

  return (
    <main className="min-h-screen  overflow-hidden bg-[#101010] text-[#f2efe8] selection:bg-[#d8ff3e] selection:text-[#101010]">
      <div className="pointer-events-none fixed inset-0 z-[1] opacity-[0.055] grain" />
      <div className="relative z-10 mx-auto w-full px-5 sm:px-8 lg:px-14">
        <header className="flex items-center justify-between border-b border-white/10 py-6">
          <a href="#inicio" className="font-mono text-sm font-bold tracking-[-0.04em]" onClick={closeMenu}>
            <span className="text-[#d8ff3e]">/</span> Lady.dev
          </a>
          <nav className="hidden items-center gap-9 font-mono text-[11px] uppercase tracking-[0.16em] text-white/55 md:flex">
            <a className="transition-colors hover:text-[#d8ff3e]" href="#proyectos">Proyectos</a>
            <a className="transition-colors hover:text-[#d8ff3e]" href="#sobre-mi">Sobre mí</a>
            <a className="transition-colors hover:text-[#d8ff3e]" href="#stack">Mi stack</a>
            <a className="transition-colors hover:text-[#d8ff3e]" href="#contacto">Contacto</a>
          </nav>
          <button className="md:hidden" aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X /> : <Menu />}
          </button>
          {menuOpen && (
            <nav className="absolute left-5 right-5 top-[76px] z-20 flex flex-col gap-5 rounded-2xl border border-white/10 bg-[#191919] p-6 font-mono text-xs uppercase tracking-[0.16em] shadow-2xl md:hidden">
              <a href="#proyectos" onClick={closeMenu}>Proyectos</a>
              <a href="#sobre-mi" onClick={closeMenu}>Sobre mí</a>
              <a href="#stack" onClick={closeMenu}>Mi stack</a>
              <a href="#contacto" onClick={closeMenu}>Contacto</a>
            </nav>
          )}
        </header>

        <section id="inicio" className="relative -mx-5 flex h-dvh w-[calc(100%+2.5rem)] flex-col justify-center overflow-hidden px-5 py-12 sm:-mx-8 sm:w-[calc(100%+4rem)] sm:px-8 lg:-mx-14 lg:w-[calc(100%+7rem)] lg:px-14">
          <video autoPlay loop muted playsInline className="pointer-events-none absolute inset-0 z-0 h-full w-full object-cover opacity-70">
            <source src="/loopPortafolioTech.mp4" type="video/mp4" />
            <source src="/loop.webm" type="video/webm" />
          </video>
          <div className="relative z-10">
            <div className="mb-6 flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.18em] text-[#d8ff3e]">
              
            </div>
            <h1 className="max-w-5xl text-[clamp(4rem,11vw,10.5rem)] font-black leading-[0.83] tracking-[-0.085em]">
              Código con
              <span className="block pl-[10vw] text-[#d8ff3e]">intención.</span>
            </h1>
            <div className="mt-10 flex flex-col gap-8 lg:ml-[27%] lg:max-w-xl lg:flex-row lg:items-end lg:gap-16">
              <p className="max-w-sm text-lg leading-relaxed text-white/60">Soy Lady, desarrolladora fullstack junior. Especializada en la creación de aplicaciones web escalables, transformando requerimientos complejos en interfaces intuitivas, de alto rendimiento y centradas en la experiencia de usuario.</p>
              <a href="#proyectos" className="group flex w-fit items-center gap-3 font-mono text-xs uppercase tracking-[0.15em] text-[#f2efe8]">
                Explorar trabajo <span className="flex size-10 items-center justify-center rounded-full border border-white/30 transition-all group-hover:border-[#d8ff3e] group-hover:bg-[#d8ff3e] group-hover:text-[#101010]"><ArrowDown size={15} /></span>
              </a>
            </div>
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
                <div className="mt-8 flex flex-wrap gap-2">{project.tags.map(tag => <span key={tag} className="rounded-full bg-[#101010]/10 px-3 py-1.5 font-mono text-[10px] font-medium uppercase tracking-wider text-[#101010] ring-1 ring-[#101010]/40">{tag}</span>)}</div>
                <div className="mt-8 flex flex-wrap items-center gap-3">
                  {project.liveUrl && (
                    <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#101010] px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-wider text-[#d8ff3e] shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d8ff3e] hover:text-[#101010]">
                      Ver sitio web <ArrowUpRight size={14} />
                    </a>
                  )}
                  {project.codeUrl && (
                    <a href={project.codeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-[#101010] px-5 py-2.5 font-mono text-[11px] font-bold uppercase tracking-wider text-[#101010] transition-all duration-300 hover:bg-[#101010] hover:text-[#f2efe8]">
                      Código <GitBranch size={14} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      

        <section id="sobre-mi" className="border-t border-white/10 py-24 lg:py-32">
          <div><p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#d8ff3e]">02 / Un poco sobre mí</p><h2 className="text-5xl font-bold tracking-[-0.06em] sm:text-7xl">Sobre mí<span className="text-[#d8ff3e]">.</span></h2></div>
          <div className="mt-10 grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_auto]">
            <div className="max-w-3xl">
              <p className="text-2xl font-medium leading-snug tracking-[-0.02em] text-[#f2efe8] sm:text-3xl">Desarrolladora Full Stack | Estudiante de último semestre en Tecnología en Desarrollo de Software (Universidad del Valle) especializada en la construcción de aplicaciones web seguras, escalables y funcionales.</p>
              <p className="mt-6 text-lg leading-relaxed text-white/70">Cubro todo el ciclo de vida del software: requerimientos, diseño de arquitectura, desarrollo, pruebas y despliegue en la nube.</p>
            </div>
            <BoxCycle className="mx-auto w-56 sm:w-64 lg:w-80" />
          </div>
        </section>

        <section id="stack" className="border-t border-white/10 py-24 lg:py-32">
          <div className="mb-14 flex items-end justify-between">
            <div><p className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#d8ff3e]">03 / Tecnologías y herramientas</p><h2 className="text-5xl font-bold tracking-[-0.06em] sm:text-7xl">Mi stack<span className="text-[#d8ff3e]">.</span></h2></div>
          
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {stack.map((group) => (
              <div key={group.category} className="flex flex-col rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-colors hover:border-[#d8ff3e]/50">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#d8ff3e]">{group.category}</h3>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {group.items.map((item) => <li key={item} className="rounded-full border border-white/15 px-4 py-2 font-mono text-xs text-white/70">{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
          
          
        
        </section>

        <section id="contacto" className="relative overflow-hidden border-t border-white/10 py-24 lg:py-40">
          <div className="pointer-events-none absolute -top-40 right-[-80px] size-[420px] rounded-full bg-[#d8ff3e]/10 blur-[130px]" />
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-[#d8ff3e]">04 / ¿Hablamos?</p>
          <h2 className="max-w-5xl text-[clamp(3.5rem,9vw,9rem)] font-black leading-[0.86] tracking-[-0.08em]">¿Tienes <span className="text-[#d8ff3e]">algo en mente?</span></h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">Cuéntame sobre tu proyecto, una oportunidad laboral o simplemente saluda. Suelo responder en menos de 24 horas.</p>
          <a href="https://wa.me/573223840487?text=Hola%20vi%20tu%20portafolio" target="_blank" rel="noreferrer" className="group mt-10 inline-flex items-center gap-4 border-b border-[#d8ff3e] pb-3 font-mono text-sm uppercase tracking-[0.12em] text-[#d8ff3e]">Contáctame <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
          <div className="mt-16 grid max-w-5xl gap-5 sm:grid-cols-3">
            <a href="https://wa.me/573223840487?text=Hola%20vi%20tu%20portafolio" target="_blank" rel="noreferrer" className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-colors hover:border-[#d8ff3e]/50">
              <div className="flex size-16 items-center justify-center rounded-2xl border border-white/10 bg-[#191919] text-[#d8ff3e] transition-colors duration-300 group-hover:bg-[#d8ff3e] group-hover:text-[#101010]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-8" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              </div>
              <h3 className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-[#d8ff3e]">WhatsApp</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">La vía más rápida. Escríbeme y te respondo el mismo día.</p>
              <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-[#f2efe8]">+57 322 384 0487 <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
            </a>
            <a href="mailto:ladyjohanavidalsevillano@gmail.com" className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-colors hover:border-[#d8ff3e]/50">
              <div className="flex size-16 items-center justify-center rounded-2xl border border-white/10 bg-[#191919] text-[#d8ff3e] transition-colors duration-300 group-hover:bg-[#d8ff3e] group-hover:text-[#101010]">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="size-8" aria-hidden="true"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              </div>
              <h3 className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-[#d8ff3e]">Email</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">Ideal para propuestas formales o colaboraciones.</p>
              <span className="mt-6 inline-flex items-center gap-2 break-all font-mono text-xs uppercase tracking-[0.12em] text-[#f2efe8]">ladyjohanavidalsevillano@gmail.com <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
            </a>
            <a href="https://github.com/ladyjvs2054" target="_blank" rel="noreferrer" className="group rounded-3xl border border-white/10 bg-white/[0.02] p-7 transition-colors hover:border-[#d8ff3e]/50">
              <div className="flex size-16 items-center justify-center rounded-2xl border border-white/10 bg-[#191919] text-[#d8ff3e] transition-colors duration-300 group-hover:bg-[#d8ff3e] group-hover:text-[#101010]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="size-8" aria-hidden="true"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>
              </div>
              <h3 className="mt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-[#d8ff3e]">GitHub</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">Todo el código detrás de mis proyectos, abierto para que lo revises.</p>
              <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-[#f2efe8]">@ladyjvs2054 <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span>
            </a>
          </div>
        </section>

        <footer className="flex flex-col gap-5 border-t border-white/10 py-8 font-mono text-[10px] uppercase tracking-[0.15em] text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Lady Vidal</span><span>Hecho con curiosidad + código</span>
        </footer>
      </div>
    </main>
  )
}
