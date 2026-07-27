import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PostCard from '../components/PostCard'

export default function Notes({ data }) {
  const notes = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <SEO title="Notes" description="Shorter thoughts, life updates, and links." path="/notes/" />

      <div className="page-header">
        <h1>Notes</h1>
        <p>Shorter thoughts, life updates, and links.</p>
      </div>

      {notes.length > 0 ? (
        notes.map(note => <PostCard key={note.fields.slug} post={note} />)
      ) : (
        <p style={{ color: 'var(--color-text-muted)' }}>No notes yet.</p>
      )}
    </Layout>
  )
}

export const query = graphql`
  query NotesQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/notes/" } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        fields { slug }
        frontmatter { title date tags }
      }
    }
  }
`
