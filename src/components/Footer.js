import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import '../style/footer.css'

export default function Footer() {
  const { site } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
          social { github email }
        }
      }
    }
  `)

  const { author, social } = site.siteMetadata

  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__credit">
          Made by {author}
        </span>

        <div className="footer__links">
          {social.github && (
            <a
              href={`https://github.com/${social.github}`}
              className="footer__link"
              aria-label="GitHub profile, opens in new tab"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          )}
          {social.devto && (
            <a
              href={`https://dev.to/${social.devto}`}
              className="footer__link"
              aria-label="DEV Community profile, opens in new tab"
              target="_blank"
              rel="noopener noreferrer"
            >
              DEV.to
            </a>
          )}
          {social.linkedin && (
            <a
              href={`https://linkedin.com/in/${social.linkedin}`}
              className="footer__link"
              aria-label="LinkedIn profile, opens in new tab"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          )}
          <a
            href="/rss.xml"
            className="footer__link"
            aria-label="RSS feed"
          >
            RSS
          </a>
        </div>
      </div>
    </footer>
  )
}
