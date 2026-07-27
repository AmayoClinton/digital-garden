import React from 'react'

export default function ProjectCard({ project }) {
  const { title, description, year, tags, article, demo, source } = project

  return (
    <div className="project-card">
      <div className="project-card__header">
        {year && <span className="project-card__year">{year}</span>}
        <h3 className="project-card__title">{title}</h3>
      </div>

      {tags && tags.length > 0 && (
        <div className="project-card__tags">
          {tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
      )}

      <p className="project-card__description">{description}</p>

      <div className="project-card__links">
        {article && (
          <a
            href={article}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Read article about ${title}, opens in new tab`}
          >
            Article ↗
          </a>
        )}
        {demo && (
          <a
            href={demo}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View demo of ${title}, opens in new tab`}
          >
            Demo ↗
          </a>
        )}
        {source && (
          <a
            href={source}
            className="btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View source code of ${title}, opens in new tab`}
          >
            Source ↗
          </a>
        )}
      </div>
    </div>
  )
}
