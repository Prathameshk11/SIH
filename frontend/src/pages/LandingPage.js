import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/LandingPage.css'

export default function LandingPage() {
  return (
    <div className="landing-page">
      <div className="container">
        <section className="hero">
          <h1>Welcome to the Inter-Departmental Cooperation Platform</h1>
          <p>Your central hub for project coordination and resource sharing.</p>
          <Link to="/login" className="btn btn-primary">Get Started</Link>
        </section>

        <section className="features">
          <h2>Key Features</h2>
          <div className="feature-grid">
            <FeatureCard
              title="Data & Resource Sharing"
              description="Seamlessly exchange information and resources between departments."
            />
            <FeatureCard
              title="Unified Project Planning"
              description="Coordinate and phase projects to reduce costs and minimize disruptions."
            />
            <FeatureCard
              title="Collaborative Forums"
              description="Engage in discussions to improve urban governance and project outcomes."
            />
          </div>
        </section>

        <section className="how-it-works">
          <h2>How It Works</h2>
          <ol>
            <li>Register your department and team members on the platform.</li>
            <li>Create and manage projects, sharing relevant data with other departments.</li>
            <li>Collaborate on inter-departmental initiatives using our planning tools.</li>
            <li>Utilize the resource sharing feature to optimize city-wide assets.</li>
          </ol>
        </section>

        <section className="testimonials">
          <h2>What Our Users Say</h2>
          <blockquote>
            "This platform has transformed our project management and inter-departmental collaboration!"
            <cite>- Urban Planning Department</cite>
          </blockquote>
        </section>

        <footer className="footer">
          <p>© 2024 Inter-Departmental Cooperation Platform. All rights reserved.</p>
          <nav className="footer-nav">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
          </nav>
        </footer>
      </div>
    </div>
  )
}

function FeatureCard({ title, description }) {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-content">
        <p>{description}</p>
      </div>
    </div>
  )
}
