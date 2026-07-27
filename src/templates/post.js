import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Tags from '../components/Tags'
import { formatDate } from '../utils/helpers'

export default function PostTemplate({ data, pageContext }) {
  const post = data.markdownRemark
  const { frontmatter, html, fields } = post
  const { previous, next } = pageContext

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
            {frontmatter.tags && frontmatter.tags.length > 0 && (
              <Tags tags={frontmatter.tags} />
            )}
          </div>
        </header>

        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>

      <nav className="post-nav" aria-label="Post navigation">
        <div>
          {previous && (
            <Link to={previous.fields.slug}>
              <span className="post-nav__label">← Previous</span>
              {previous.frontmatter.title}
            </Link>
          )}
        </div>
        <div style={{ textAlign: 'right' }}>
          {next && (
            <Link to={next.fields.slug}>
              <span className="post-nav__label">Next →</span>
              {next.frontmatter.title}
            </Link>
          )}
        </div>
      </nav>
    </Layout>
  )
}

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fields { slug }
      frontmatter { title date tags description }
    }
  }
`
