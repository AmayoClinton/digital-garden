import React, { useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import PostCard from '../components/PostCard'
import Search from '../components/Search'

export default function Blog({ data }) {
  const allPosts = data.allMarkdownRemark.nodes
  const [filtered, setFiltered] = useState(allPosts)

  return (
    <Layout>
      <SEO title="Blog" description="Articles, tutorials, and guides." path="/blog/" />

      <div className="page-header">
        <h1>Blog</h1>
        <p>Articles, tutorials, and guides.</p>
      </div>

      <Search posts={allPosts} onResults={setFiltered} />

      {filtered.length > 0 ? (
        filtered.map(post => <PostCard key={post.fields.slug} post={post} />)
      ) : (
        <p style={{ color: 'var(--color-text-muted)' }}>No posts found.</p>
      )}
    </Layout>
  )
}

export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/posts/" } }
      sort: { frontmatter: { date: DESC } }
    ) {
      nodes {
        fields { slug }
        frontmatter { title date tags description }
      }
    }
  }
`
