import './App.css'

function App() {
  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="logo">Smooth Support</div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
          <button className="login-btn">Login</button>
        </div>
      </nav>

      <main className="hero-section">
        <h1>Customer Support, <span className="gradient-text">Simplified</span></h1>
        <p className="hero-subtitle">
          Streamline your customer service with an intelligent, unified platform
        </p>
        <div className="cta-buttons">
          <button className="primary-btn">Get Started Free</button>
          <button className="secondary-btn">Book a Demo</button>
        </div>
      </main>

      <section className="features-grid">
        <div className="feature-card">
          <div className="feature-icon">💬</div>
          <h3>Unified Inbox</h3>
          <p>Manage all customer conversations in one place</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">🤖</div>
          <h3>AI Powered</h3>
          <p>Smart automation and instant responses</p>
        </div>
        <div className="feature-card">
          <div className="feature-icon">📊</div>
          <h3>Analytics</h3>
          <p>Deep insights into customer satisfaction</p>
        </div>
      </section>
    </div>
  )
}

export default App
