import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

export default function About() {
  return (
    <Layout>
      <SEO title="About" description="About me." path="/about/" />

      <div className="page-header">
        <h1>About</h1>
      </div>

      <div className="about-content">

        <div className="about-section">
          <p>
            I'm a software engineer apprentice at Zone01 Kisumu, training through a
            peer-to-peer, project-based curriculum — no lectures, only code that runs
            or code that doesn't. I'm based in Kisumu, Kenya.
          </p>
          <p>
            I build backend systems in Go, work daily on Linux, and write about open
            source, DevOps, and the decentralized web. My current areas of deep interest
            are Bitcoin, the Lightning Network, and the Nostr protocol.
          </p>
        </div>

        <div className="about-section">
          <h2>Contact</h2>
          <div className="contact-links">
            <a href="https://github.com/AmayoClinton" className="contact-link" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://dev.to/amayo_clinton" className="contact-link" target="_blank" rel="noopener noreferrer">DEV.to</a>
            <a href="https://linkedin.com/in/amayo-clinton" className="contact-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="/rss.xml" className="contact-link">RSS</a>
          </div>
        </div>

        <div className="about-section">
          <h2>Now</h2>
          <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-subtle)', fontFamily: 'var(--font-mono)', marginBottom: 'var(--space-sm)' }}>
            Updated July 2026
          </p>
          <ul>
            <li>Building MojaAgent — Bitcoin Lightning liquidity tooling for M-Pesa agents</li>
            <li>Working through the Zone01 Kisumu curriculum in Go</li>
            <li>Writing on DEV Community about Go, Linux, security, and open source</li>
            <li>Learning more about the Nostr protocol and how to build on it</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Stack</h2>
          <ul>
            <li><strong>Languages:</strong> Go, JavaScript, Ruby, HTML</li>
            <li><strong>Tools:</strong> Git, GitHub, Docker, Linux</li>
            <li><strong>OS:</strong> Linux (daily driver)</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Writing</h2>
          <ul>
            <li>
              <a href="https://dev.to/amayo_clinton/nostr-explained-for-developers-a-deep-dive-204n" target="_blank" rel="noopener noreferrer">
                Nostr, Explained for Developers — A Deep Dive
              </a> — DEV Community, 2026
            </li>
            <li>
              <a href="https://dev.to/amayo_clinton/12-github-actions-workflows-that-will-quietly-save-your-devops-team-hours-every-week-2j6d" target="_blank" rel="noopener noreferrer">
                12 GitHub Actions Workflows That Will Quietly Save Your DevOps Team Hours Every Week
              </a> — DEV Community, 2026
            </li>
            <li>
              <a href="https://dev.to/amayo_clinton/linux-permissions-actually-explained-not-just-memorized-33eb" target="_blank" rel="noopener noreferrer">
                Linux Permissions, Actually Explained — Not Just Memorized
              </a> — DEV Community, 2026
            </li>
            <li>
              <a href="https://dev.to/amayo_clinton/when-ai-gets-it-wrong-the-hidden-security-risk-of-hallucinations-in-cybersecurity-2gel" target="_blank" rel="noopener noreferrer">
                When AI Gets It Wrong: The Hidden Security Risk of Hallucinations in Cybersecurity
              </a> — DEV Community, 2026
            </li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Projects</h2>
          <p>
            <Link to="/projects/">View all projects →</Link>
          </p>
        </div>

      </div>
    </Layout>
  )
}
