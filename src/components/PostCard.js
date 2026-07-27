import React from 'react'
import { Link } from 'gatsby'
import { formatDateShort } from '../utils/helpers'

export default function PostCard({ post }) {
  const { frontmatter, fields } = post
  const { title, date, tags } = frontmatter

  return (
    <article className="post-card">
      <time className="post-card__date" dateTime={date}>
        {formatDateShort(date)}
      </time>
      <Link to={fields.slug} className="post-card__title">
        {title}
      </Link>
      {tags && tags.length > 0 && (
        <div className="post-card__tags">
          {tags.map(tag => (
            <Link key={tag} to={`/tags/${tag}/`} className="tag">
              {tag}
            </Link>
          ))}
        </div>
      )}
    </article>
  )
}
