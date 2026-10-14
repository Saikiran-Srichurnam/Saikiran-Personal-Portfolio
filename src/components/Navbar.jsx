import { useState } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import { profile } from '../data/portfolioData'

const links = [['About', '#about'], ['Skills', '#skills'], ['Projects', '#projects'], ['Experience', '#experience'], ['Contact', '#contact']]
export default function Navbar({ themeToggle }) {
  const [open, setOpen] = useState(false)
  return <header className="site-header"><nav className="nav-wrap container" aria-label="Main navigation">
    <a className="brand" href="#home" aria-label="Saikiran home"><span className="brand-mark">S<span>.</span></span><span>saikiran<span className="muted">.dev</span></span></a>
    <div className="desktop-links">{links.map(([label, href]) => <a key={href} href={href}>{label}</a>)}</div>
    <div className="nav-actions">{themeToggle}<a className="nav-resume" href={profile.resume} target="_blank" rel="noreferrer">Resume <ArrowUpRight size={15}/></a></div>
    <button className="menu-toggle" type="button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>{open ? <X/> : <Menu/>}</button>
    {open && <div className="mobile-menu" id="mobile-navigation">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a href={profile.github} target="_blank" rel="noreferrer">GitHub ↗</a><a href={profile.resume} target="_blank" rel="noreferrer">Resume ↗</a>{themeToggle}</div>}
  </nav></header>
}
