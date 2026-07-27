import React from 'react'
import { Link } from 'gatsby'

export default function Tags({ tags }) {
  if (!tags || tags.length === 0) return null

  return (
    <div className="post-card__tags">
      {tags.map(tag => (
        <Link key={tag} to={`/tags/${tag}/`} className="tag">
          {tag}
        </Link>
      ))}
    </div>
  )
}
