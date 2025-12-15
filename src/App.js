import { useRef, useState, useEffect } from 'react';
import './App.css';
import MaintenancePage from './MaintenancePage';

// Set to true to show maintenance page, false to show normal site
const MAINTENANCE_MODE = true;

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_rtncsgq';
const EMAILJS_TEMPLATE_ID = 'template_zzoq2ji';
const EMAILJS_PUBLIC_KEY = 'FkQY2Ii4rpYWSwujD';

function App() {
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ text: '', type: '' });
  const [isFormOpen, setIsFormOpen] = useState(false);

  // Initialize EmailJS
  useEffect(() => {
    if (MAINTENANCE_MODE) return; // Skip EmailJS init in maintenance mode
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    script.onload = () => {
      window.emailjs.init(EMAILJS_PUBLIC_KEY);
    };
    document.body.appendChild(script);
    return () => document.body.removeChild(script);
  }, []);

  // Show maintenance page if enabled
  if (MAINTENANCE_MODE) {
    return <MaintenancePage />;
  }

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage({ text: '', type: '' });

    const formData = {
      from_name: formRef.current.name.value,
      from_email: formRef.current.email.value,
      message: formRef.current.message.value,
      to_email: 'paustudylaptop@gmail.com'
    };

    window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formData)
      .then(() => {
        setStatusMessage({ text: 'Message sent successfully!', type: 'success' });
        formRef.current.reset();
        setTimeout(() => setIsFormOpen(false), 2000);
      })
      .catch(() => {
        setStatusMessage({ text: 'Failed to send message. Please try again.', type: 'error' });
      })
      .finally(() => {
        setIsSubmitting(false);
        setTimeout(() => setStatusMessage({ text: '', type: '' }), 5000);
      });
  };
  return (
    <div className="App">
      
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-header">
            <a href="https://tohu.netlify.app/" target="_blank" rel="noopener noreferrer" className="nav-try-me nav-try-me-mobile">Launch App</a>
            <div className="nav-logo">
              <img src="/signApp.png" alt="Tohu Korero Logo" className="nav-logo-img" />
              <h1 className="nav-logo-text">Tohu Korero</h1>
            </div>
          </div>
          <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#features">Features</a></li>
            <li><a href="#accessibility">Accessibility</a></li>
            <li><a href="#contact">Contact</a></li>
            <li className="nav-try-me-desktop"><a href="https://tohu.netlify.app/" target="_blank" rel="noopener noreferrer" className="nav-try-me">Launch App</a></li>
          </ul>
        </div>
      </nav>

      
      <section id="home" className="hero">
        <div className="hero-container">
          <h1 className="hero-title">Tohu Korero</h1>
          <p className="hero-subtitle">NZSL Dictionary - Speech to Sign Language Translator</p>
          <p className="hero-description">
            A web-based application that translates spoken or typed English into 
            New Zealand Sign Language (NZSL) video demonstrations. Using speech recognition 
            and natural language processing to convert everyday speech into properly structured 
            NZSL grammar, then display video demonstrations of each sign.
          </p>
        </div>
      </section>

      
      <section id="prototype" className="prototype-section">
        <div className="container">
          <h2>🚀 Try Our Prototype!</h2>
          <p className="prototype-description">
            We're excited to share our app prototype with you! Give it a try and experience 
            speech-to-sign language translation in action. Your feedback helps us improve — 
            whether it's positive encouragement or constructive suggestions, we'd love to hear from you!
          </p>
          <a href="https://tohu.netlify.app/" target="_blank" rel="noopener noreferrer" className="prototype-button">
            Try the App Prototype
          </a>
          <p className="prototype-note">
            ✨ Help us make Tohu Korero better by sharing your thoughts in the Contact section below!
          </p>
        </div>
      </section>

      
      <section id="about" className="about">
        <div className="container">
          <h2>About Tohu Korero</h2>
          <p>
            Tohu Korero is an innovative accessibility app that transforms spoken words into 
            sign language in real-time. Using advanced speech recognition and translation technology, 
            our app provides visual sign language communication through video demonstrations. 
            Whether you're a student needing academic support or someone seeking better everyday 
            communication, Tohu Korero bridges the gap between hearing and deaf communities, 
            making conversations more inclusive and accessible for everyone.
          </p>
          <p className="about-secondary">
            Our NZSL Dictionary features 4,800+ signs with high-quality video demonstrations 
            sourced from the official NZSL Online Dictionary maintained by the Deaf Studies 
            Research Unit at Victoria University of Wellington.
          </p>
        </div>
      </section>

      
      <section id="features" className="services">
        <div className="container">
          <h2>App Features</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>🎤 Speech Recognition</h3>
              <p>Speak naturally into your device's microphone with automatic conversion of speech to text. Also supports manual text input for accessibility.</p>
            </div>
            <div className="service-card">
              <h3>🔄 Smart NZSL Grammar</h3>
              <p>Automatically restructures English into authentic NZSL grammar: Time First, Adjectives After Nouns, Negatives Last.</p>
            </div>
            <div className="service-card">
              <h3>🎬 Video Dictionary</h3>
              <p>4,800+ NZSL signs with high-quality video demonstrations from the official NZSL Online Dictionary.</p>
            </div>
            <div className="service-card">
              <h3>▶️ Sign Slideshow</h3>
              <p>Play all translated signs in sequence with continuous loop for practice, pause/resume functionality, and visual progress tracking.</p>
            </div>
            <div className="service-card">
              <h3>🔍 Search Function</h3>
              <p>Search the entire NZSL dictionary, find specific signs quickly, and browse by English or Māori translations.</p>
            </div>
            <div className="service-card">
              <h3>🔒 Privacy First</h3>
              <p>Speech recognition runs in your browser with no data sent to servers. No user data stored - all processing happens locally.</p>
            </div>
            <div className="service-card">
              <h3>🎓 Academic Support</h3>
              <p>Specialized features for educational settings, helping deaf and hard of hearing students access classroom content.</p>
            </div>
          </div>
        </div>
      </section>

      
      <section id="accessibility" className="about">
        <div className="container">
          <h2>Accessibility First</h2>
          <p>
            Built with the deaf and hard of hearing community at its core, Tohu Korero follows 
            universal design principles to ensure our app is usable by everyone. Our commitment 
            to accessibility means clear visual interfaces, seamless integration with assistive 
            technologies, and the ability to download the app to your mobile or desktop device.
          </p>
          
          <h3 className="audience-title">Who Is This For?</h3>
          <div className="audience-grid">
            <div className="audience-item">
              <h3>👥 Deaf Community</h3>
              <p>Quick reference for English-to-NZSL translation and practice tool for NZSL learners.</p>
            </div>
            <div className="audience-item">
              <h3>🎓 NZSL Learners</h3>
              <p>Learn proper NZSL grammar structure with visual demonstrations for each sign at your own pace.</p>
            </div>
            <div className="audience-item">
              <h3>👨‍👩‍👧‍👦 Families & Friends</h3>
              <p>Communicate with Deaf family members, learn basic NZSL signs, and understand NZSL grammar.</p>
            </div>
            <div className="audience-item">
              <h3>🏫 Educators & Students</h3>
              <p>Teaching aid for NZSL classes, accessible communication tool, and cultural awareness resource.</p>
            </div>
            <div className="audience-item">
              <h3>💼 Workplaces</h3>
              <p>Improve workplace accessibility, support Deaf employees and customers, foster inclusive communication.</p>
            </div>
          </div>
          
          <h3 className="grammar-title">How NZSL Grammar Works</h3>
          <div className="grammar-examples">
            <div className="grammar-example">
              <strong>Time First:</strong>
              <span className="english">"I will go home tomorrow"</span>
              <span className="arrow">→</span>
              <span className="nzsl">TOMORROW → ME → GO → HOME</span>
            </div>
            <div className="grammar-example">
              <strong>Adjectives After Nouns:</strong>
              <span className="english">"I want the red apple"</span>
              <span className="arrow">→</span>
              <span className="nzsl">ME → APPLE → RED → WANT</span>
            </div>
            <div className="grammar-example">
              <strong>Negatives Last:</strong>
              <span className="english">"I don't like coffee"</span>
              <span className="arrow">→</span>
              <span className="nzsl">ME → LIKE → COFFEE → NOT</span>
            </div>
          </div>
        </div>
      </section>

      
      <section id="contact" className="contact">
        <div className="container">
          <h2>Contact & Support</h2>
          <p>Need help with the app or have accessibility questions? We're here to support you.</p>
          
          {!isFormOpen ? (
            <button className="feedback-button" onClick={() => setIsFormOpen(true)}>
              We'd love to hear your feedback & idea's
            </button>
          ) : (
            <div className="contact-form-wrapper">
              <button className="close-form-button" onClick={() => setIsFormOpen(false)}>
                ✕
              </button>
              <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required placeholder="Your email" />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" required placeholder="Your message" rows="5"></textarea>
                </div>
                <button type="submit" className="submit-button" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                {statusMessage.text && (
                  <div className={`status-message ${statusMessage.type}`}>
                    {statusMessage.text}
                  </div>
                )}
              </form>
            </div>
          )}

          <div className="contact-info">
            <p>Paul Johnson Founder & Director</p>
            <p>Email: paul@tohukorero.com</p>
          </div>
        </div>
      </section>

      
      <footer className="footer">
        <div className="container">
          <div className="footer-credits">
            <p><strong>Sign Data:</strong> NZSL Online Dictionary (Victoria University of Wellington) • <strong>License:</strong> CC BY-NC-SA 4.0</p>
          </div>
          <p className="footer-tagline">Making NZSL accessible to everyone, one sign at a time. 🤟</p>
          <p>&copy; 2025 Tohu Korero. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
