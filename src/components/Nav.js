import React, { useState } from 'react'
import { Link } from 'gatsby'
import ThemeToggle from './ThemeToggle'
import '../style/nav.css'

const NAV_LINKS = [
  { label: 'Blog',     to: '/blog/' },
  { label: 'Notes',    to: '/notes/' },
  { label: 'Projects', to: '/projects/' },
  { label: 'About',    to: '/about/' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <div className="nav__inner">
        <Link to="/" className="nav__logo">
          Amayo Clinton
        </Link>

        <div className="nav__right">
          <ul className={`nav__links${open ? ' nav__links--open' : ''}`}>
            {NAV_LINKS.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  className="nav__link"
                  activeClassName="nav__link--active"
                  partiallyActive={to !== '/'}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="nav__controls">
            <ThemeToggle />
          </div>

          <button
            className="nav__menu-btn"
            onClick={() => setOpen(o => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </nav>
  )
}
