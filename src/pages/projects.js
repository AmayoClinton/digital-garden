import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import ProjectCard from '../components/ProjectCard'

const PROJECTS = [
  {
    title: 'MojaAgent',
    description: 'Bitcoin Lightning liquidity tool for M-Pesa agents in Kenya. Bridges the Lightning Network and M-Pesa float management so agents can receive and settle Bitcoin payments in real time without leaving their existing workflow.',
    year: '2025',
    tags: ['go', 'lightning', 'postgresql', 'mpesa'],
    source: 'https://github.com/AmayoClinton',
  },
  {
    title: 'Sparkyard',
    description: 'A platform for discovering and connecting with developers and projects across East Africa. Built to surface the work happening in the region — side projects, open source, and teams looking for collaborators.',
    year: '2025',
    tags: ['go', 'javascript', 'docker'],
    source: 'https://github.com/AmayoClinton',
  },
]

export default function Projects() {
  return (
    <Layout wide>
      <SEO title="Projects" description="Open-source projects." path="/projects/" />

      <div className="page-header">
        <h1>Projects</h1>
        <p>Things I've built. More coming as they deploy.</p>
      </div>

      <div className="projects-grid">
        {PROJECTS.map(project => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Layout>
  )
}
