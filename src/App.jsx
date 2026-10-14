import { useEffect, useState } from 'react'
import { ArrowUpRight, ArrowUp, Mail, Github, Linkedin, Sun, Moon } from 'lucide-react'
import { profile, experiences, education } from './data/portfolioData'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import SectionHeading from './components/SectionHeading'

function Experience() {
  return <section className="section section-border" id="experience"><div className="container">
    <SectionHeading eyebrow="EXPERIENCE" title="Learning by building with teams" description="Internship experience across frontend development, responsive interfaces and web application workflows." />
    <div className="timeline">{experiences.map((item, index) => <article className="timeline-item" key={item.company}>
      <div className="timeline-marker">0{index + 1}</div><div className="timeline-content">
        <div className="timeline-top"><div><h3>{item.company}</h3><p className="timeline-role">{item.role} <span>·</span> {item.location}</p></div><span className="timeline-date">{item.dates}</span></div>
        <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
      </div>
    </article>)}</div>
  </div></section>
}

function Education() {
  return <section className="section section-border" id="education"><div className="container education-layout">
    <SectionHeading eyebrow="EDUCATION" title="A foundation in computer science" description="" />
    <article className="education-card"><div className="education-year">{education.year}</div><div><h3>{education.degree}</h3><p>{education.institution}</p><span>{education.location}</span></div><div className="cgpa"><small>CGPA</small><strong>{education.cgpa}</strong></div></article>
  </div></section>
}

function Contact() {
  return <section className="section contact-section" id="contact"><div className="container contact-inner">
    <p className="eyebrow">HAVE A ROLE OR PROJECT IN MIND?</p><h2>Let’s build something<br/><em>useful together.</em></h2>
    <p className="contact-copy">I’m open to entry-level frontend, React and full-stack opportunities. Reach out by email or connect with me on GitHub and LinkedIn.</p>
    <div className="contact-actions"><a className="button button-primary" href={`mailto:${profile.email}`}><Mail size={17}/> Email me <ArrowUpRight size={16}/></a><a className="button button-secondary" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ArrowUpRight size={15}/></a></div>
    <p className="contact-email">{profile.email}</p>
  </div></section>
}

function Footer() {
  return <footer className="site-footer"><div className="container footer-inner"><a className="brand footer-brand" href="#home"><span className="brand-mark">S<span>.</span></span><span>saikiran<span className="muted">.dev</span></span></a><span className="footer-note">Designed and built with React.</span><a className="back-top" href="#home">Back to top <ArrowUp size={14}/></a><span className="copyright">© {new Date().getFullYear()} Saikiran Srichurnam</span></div></footer>
}

function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark'
  return <button className="theme-toggle" type="button" onClick={onToggle} aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`} title={`Switch to ${isDark ? 'light' : 'dark'} theme`}>
    {isDark ? <Sun size={17}/> : <Moon size={17}/>}<span>{isDark ? 'Light' : 'Dark'}</span>
  </button>
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem('saikiran-theme') || 'light' } catch { return 'light' }
  })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#21191B' : '#F1E8D9')
    try { localStorage.setItem('saikiran-theme', theme) } catch { /* storage can be unavailable */ }
  }, [theme])
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal')
    if (!('IntersectionObserver' in window)) { nodes.forEach((node) => node.classList.add('is-visible')); return undefined }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target) }
    }), { threshold: 0.12 })
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])
  return <>
    <Navbar themeToggle={<ThemeToggle theme={theme} onToggle={() => setTheme((current) => current === 'dark' ? 'light' : 'dark')}/>}/>
    <main><Hero/><About/><Skills/><Projects/><Experience/><Education/><Contact/></main>
    <Footer/>
  </>
}
