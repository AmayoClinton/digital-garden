import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Tags from '../components/Tags'
import { formatDate } from '../utils/helpers'

export default function NoteTemplate({ data }) {
  const { frontmatter, html, fields } = data.markdownRemark

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        path={fields.slug}
      />

      <article>
        <header className="post-header">
          <h1>{frontmatter.title}</h1>
          <div className="post-meta">
            <time dateTime={frontmatter.date}>{formatDate(frontmatter.date)}</time>
            {frontmatter.tags && <Tags tags={frontmatter.tags} />}
          </div>
        </header>

        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>

      <div style={{ marginTop: 'var(--space-2xl)', paddingTop: 'var(--space-lg)', borderTop: '1px solid var(--color-border)' }}>
        <Link to="/notes/" style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
          ← All notes
        </Link>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query NoteQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields { slug }
      frontmatter { title date tags description }
    }
  }
`
