import './App.css';

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src="/signApp.png" alt="Tohu Korero Logo" className="nav-logo-img" />
            <h1 className="nav-logo-text">Tohu Korero</h1>
          </div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#accessibility">Accessibility</a></li>
            <li><a href="#contact">Support</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-container">
          <h1 className="hero-title">Tohu Korero</h1>
          <p className="hero-subtitle">Speech to Sign Language App</p>
          <p className="hero-description">
            Breaking down communication barriers by converting spoken words into sign language 
            through video and fingerspelling. Empowering the deaf and hard of hearing community 
            with accessible communication for academics and everyday conversations.
          </p>
          <a href="https://speechto.netlify.app/" target="_blank" rel="noopener noreferrer" className="cta-button">Try the App Prototype</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Tohu Korero</h2>
          <p>
            Tohu Korero is an innovative accessibility app that transforms spoken words into 
            sign language in real-time. Using advanced speech recognition and translation technology, 
            our app provides visual sign language communication through video demonstrations and 
            fingerspelling displays. Whether you're a student needing academic support or someone 
            seeking better everyday communication, Tohu Korero bridges the gap between hearing and 
            deaf communities, making conversations more inclusive and accessible for everyone.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="services">
        <div className="container">
          <h2>App Features</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Video Sign Language</h3>
              <p>Real-time conversion of speech to visual sign language demonstrations with clear, easy-to-follow video guides</p>
            </div>
            <div className="service-card">
              <h3>Fingerspelling Display</h3>
              <p>Instant fingerspelling translations for words and phrases, perfect for learning and quick communication</p>
            </div>
            <div className="service-card">
              <h3>Academic Support</h3>
              <p>Specialized features for educational settings, helping deaf and hard of hearing students access classroom content</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accessibility Section */}
      <section id="accessibility" className="about">
        <div className="container">
          <h2>Accessibility First</h2>
          <p>
            Built with the deaf and hard of hearing community at its core, Tohu Korero follows 
            universal design principles to ensure our app is usable by everyone. Our commitment 
            to accessibility means clear visual interfaces, offline 
            functionality, and seamless integration with assistive technologies.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact & Support</h2>
          <p>Need help with the app or have accessibility questions? We're here to support you.</p>
          <div className="contact-info">
            <p>App Support: support@tohukorero.com</p>
            <p>Accessibility Team: accessibility@tohukorero.com</p>
            {/* <p>Phone: +64 (0) 123 456 789</p> */}
            {/* <p>TTY Available for Deaf/Hard of Hearing Users</p> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 Tohu Korero. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
