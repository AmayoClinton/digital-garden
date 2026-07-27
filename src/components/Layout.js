import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import '../style/global.css'
import '../style/layout.css'
import '../style/components.css'
import '../style/post.css'
import '../style/code.css'

export default function Layout({ children, wide = false }) {
  return (
    <>
      <Nav />
      <main className="main">
        <div className={wide ? 'container--wide' : 'container'}>
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}
