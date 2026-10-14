import { ArrowUpRight, Target, Layers3, BookOpen } from 'lucide-react'
import SectionHeading from './SectionHeading'
const items = [
  { icon: Target, title: 'Build with purpose', text: 'I focus on practical features, clear user flows and interfaces that solve real workflow problems.' },
  { icon: Layers3, title: 'Think end to end', text: 'I work across React interfaces, API integration, authentication flows and database-backed applications.' },
  { icon: BookOpen, title: 'Learn by building', text: 'I strengthen my fundamentals by building projects, debugging issues and improving implementations step by step.' },
]
export default function About() {
  return <section className="section section-border" id="about">
    <div className="container">
      <SectionHeading eyebrow="A LITTLE ABOUT ME" title="Developer mindset. Product thinking." description="I’m an entry-level developer building a foundation across frontend engineering and full-stack application development." />
      <div className="about-layout">
        <div className="about-main">
          <p className="about-lead">I turn ideas and workflows into clean, usable web experiences.</p>
          <p className="body-copy">After completing my B.Tech in 2025, I’ve been building projects that help me practice the full development workflow — designing responsive interfaces, managing application state, integrating APIs and working with databases.
          </p>
          <p className="body-copy">I’m looking for an entry-level React, frontend or MERN opportunity where I can contribute, learn from experienced engineers and keep improving through real product work.
          </p>
          <a className="text-link" href="#projects">See what I’ve built <ArrowUpRight size={16} />
          </a>
        </div>
        <div className="principles">{items.map(({ icon: Icon, title, text }, i) => <article className="principle" key={title}>
          <div className="principle-icon">
            <Icon size={19} />
          </div>
          <div>
            <h3>{title}</h3>
            <p>{text}</p>
          </div>
          <span className="principle-number">0{i + 1}</span>
        </article>)}
        </div>
      </div>
    </div>
  </section>
}
