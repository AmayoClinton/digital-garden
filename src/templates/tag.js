import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PostCard from '../components/PostCard'

export default function TagTemplate({ data, pageContext }) {
  const { tag } = pageContext
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <SEO title={`Tagged: ${tag}`} description={`Posts tagged with "${tag}"`} />

      <div className="page-header">
        <h1>
          <span style={{ color: 'var(--color-text-subtle)', fontWeight: 400 }}>Tagged: </span>
          {tag}
        </h1>
        <p>{posts.length} post{posts.length !== 1 ? 's' : ''}</p>
      </div>

      {posts.map(post => (
        <PostCard key={post.fields.slug} post={post} />
      ))}

      <div style={{ marginTop: 'var(--space-2xl)', paddingTop: 'var(--space-lg)', borderTop: '1px solid var(--color-border)' }}>
        <Link to="/blog/" style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-muted)' }}>
          ← All posts
        </Link>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query TagQuery($tag: String!) {
    allMarkdownRemark(
      filter: { frontmatter: { tags: { in: [$tag] } } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        fields { slug }
        frontmatter { title date tags }
      }
    }
  }
`
