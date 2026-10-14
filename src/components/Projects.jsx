import { ArrowUpRight } from 'lucide-react'
import SectionHeading from './SectionHeading'
import ProjectCard from './ProjectCard'
import { projects } from '../data/portfolioData'
export default function Projects() { return <section className="section section-border" id="projects"><div className="container"><SectionHeading eyebrow="SELECTED WORK" title="Projects built to solve problems" description="A closer look at the applications I’ve been building and the engineering concepts behind them."/><div className="projects-grid">{projects.map((project) => <ProjectCard key={project.name} project={project}/>)}</div><p className="more-projects">More code and experiments on <a href="https://github.com/Saikiran-Srichurnam" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14}/></a></p></div></section> }
