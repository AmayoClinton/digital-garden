import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PostCard from '../components/PostCard'
import ProjectCard from '../components/ProjectCard'

const PROJECTS = [
  {
    title: 'MojaAgent',
    description: 'Bitcoin Lightning liquidity tool for M-Pesa agents in Kenya. Routes Lightning Network payments against M-Pesa float in real time, built for the last-mile agent network in East Africa.',
    year: '2025',
    tags: ['go', 'lightning', 'postgresql', 'mpesa'],
    source: 'https://github.com/AmayoClinton',
  },
  {
    title: 'Sparkyard',
    description: 'A platform for discovering and connecting with developers and projects across East Africa. Built to surface the work happening in the region to a wider audience.',
    year: '2025',
    tags: ['go', 'javascript', 'docker'],
    source: 'https://github.com/AmayoClinton',
  },
]

export default function Home({ data }) {
  const posts = data.posts.nodes
  const notes = data.notes.nodes

  return (
    <Layout>
      <SEO />

      {/* Intro */}
      <section className="intro">
        <h1>Hey, I'm Amayo Clinton.</h1>
        <p>
          Software engineer apprentice at Zone01 Kisumu, Kenya. I build backend systems
          in Go, write about Linux and open source, and am deeply interested in the
          decentralized web — Bitcoin, Lightning, and Nostr.
        </p>
        <p>
          <Link to="/about/">More about me →</Link>
        </p>
      </section>

      {/* Blog */}
      <section className="section">
        <div className="section-header">
          <h2>Blog</h2>
          <Link to="/blog/">All articles →</Link>
        </div>
        {posts.length > 0 ? (
          posts.map(post => <PostCard key={post.fields.slug} post={post} />)
        ) : (
          <p style={{ color: 'var(--color-text-muted)' }}>No posts yet.</p>
        )}
      </section>

      {/* Notes */}
      <section className="section">
        <div className="section-header">
          <h2>Notes</h2>
          <Link to="/notes/">All notes →</Link>
        </div>
        {notes.length > 0 ? (
          notes.map(note => <PostCard key={note.fields.slug} post={note} />)
        ) : (
          <p style={{ color: 'var(--color-text-muted)' }}>No notes yet.</p>
        )}
      </section>

      {/* Projects */}
      <section className="section">
        <div className="section-header">
          <h2>Projects</h2>
          <Link to="/projects/">All projects →</Link>
        </div>
        <div className="projects-grid">
          {PROJECTS.map(project => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query HomeQuery {
    posts: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/posts/" } }
      sort: { frontmatter: { date: DESC } }
      limit: 5
    ) {
      nodes {
        fields { slug }
        frontmatter { title date tags }
      }
    }
    notes: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/notes/" } }
      sort: { frontmatter: { date: DESC } }
      limit: 5
    ) {
      nodes {
        fields { slug }
        frontmatter { title date tags }
      }
    }
  }
`
