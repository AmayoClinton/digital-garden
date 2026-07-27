import React, { useState, useEffect } from 'react'
import { getTheme, setTheme } from '../utils/theme'

export default function ThemeToggle() {
  const [theme, setLocal] = useState('light')

  useEffect(() => {
    setLocal(getTheme())
  }, [])

  const toggle = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    setTheme(next)
    setLocal(next)
  }

  return (
    <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
      {theme === 'light' ? 'dark' : 'light'}
    </button>
  )
}
