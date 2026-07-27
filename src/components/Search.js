import React, { useState } from 'react'

export default function Search({ posts, onResults }) {
  const [query, setQuery] = useState('')

  const handleChange = (e) => {
    const q = e.target.value
    setQuery(q)
    if (!q.trim()) {
      onResults(posts)
      return
    }
    const lower = q.toLowerCase()
    const filtered = posts.filter(post => {
      const { title = '', tags = [], description = '' } = post.frontmatter
      return (
        title.toLowerCase().includes(lower) ||
        description.toLowerCase().includes(lower) ||
        tags.some(t => t.toLowerCase().includes(lower))
      )
    })
    onResults(filtered)
  }

  return (
    <div style={{ marginBottom: 'var(--space-lg)' }}>
      <input
        type="search"
        value={query}
        onChange={handleChange}
        placeholder="Search..."
        aria-label="Search posts"
        style={{
          width: '100%',
          maxWidth: '360px',
          padding: '6px 12px',
          fontSize: 'var(--font-size-sm)',
          fontFamily: 'var(--font-sans)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-md)',
          background: 'var(--color-bg)',
          color: 'var(--color-text)',
          outline: 'none',
        }}
        onFocus={e => (e.target.style.borderColor = 'var(--color-accent)')}
        onBlur={e => (e.target.style.borderColor = 'var(--color-border)')}
      />
    </div>
  )
}
