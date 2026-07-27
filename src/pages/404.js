import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <Layout>
      <SEO title="404 — Page not found" />
      <div className="not-found">
        <h1>404</h1>
        <p>That page doesn't exist.</p>
        <Link to="/" className="btn">Go home →</Link>
      </div>
    </Layout>
  )
}
