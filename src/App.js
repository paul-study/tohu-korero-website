import { useEffect, useRef, useState } from 'react';
import './App.css';

const EMAILJS_SERVICE_ID = 'service_rtncsgq';
const EMAILJS_TEMPLATE_ID = 'template_zzoq2ji';
const EMAILJS_PUBLIC_KEY = 'FkQY2Ii4rpYWSwujD';

function App() {
  const formRef = useRef(null);
  const [emailReady, setEmailReady] = useState(false);
  const [emailUnavailable, setEmailUnavailable] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ text: '', type: '' });

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    script.onload = () => {
      try {
        if (!window.emailjs) throw new Error('EmailJS did not load');
        window.emailjs.init(EMAILJS_PUBLIC_KEY);
        setEmailReady(true);
      } catch (error) {
        console.error('Unable to initialize the contact form:', error);
        setEmailUnavailable(true);
      }
    };
    script.onerror = () => {
      console.error('Unable to load the contact form service.');
      setEmailUnavailable(true);
    };
    document.body.appendChild(script);
    return () => {
      script.onload = null;
      script.onerror = null;
      script.remove();
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!emailReady || isSubmitting) return;

    const form = formRef.current;
    const fields = new FormData(form);
    setIsSubmitting(true);
    setStatusMessage({ text: '', type: '' });

    try {
      await window.emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: fields.get('name'),
        from_email: fields.get('email'),
        message: fields.get('message'),
        to_email: 'paustudylaptop@gmail.com'
      });
      form.reset();
      setStatusMessage({ text: 'Thanks for getting in touch. Your message has been sent.', type: 'success' });
    } catch (error) {
      console.error('Unable to send contact message:', error);
      setStatusMessage({
        text: 'Your message could not be sent. Please try again or email us directly.',
        type: 'error'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="app">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="nav-container">
          <a className="brand" href="#home" aria-label="Tohu Korero home">
            <img src="/signApp.png" alt="" />
            <span>TOHU <strong>KORERO</strong><small>IDEAS INTO ACTION</small></span>
          </a>
          <nav aria-label="Main navigation">
            <a href="#projects">Projects</a>
            <a href="#about">About</a>
            <a className="nav-contact" href="#contact">Get in touch <span aria-hidden="true">↗</span></a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero" id="home">
          <div className="hero-grid" aria-hidden="true"></div>
          <div className="container hero-content">
            <div className="hero-copy">
              <p className="eyebrow"><span className="status-dot"></span> INDEPENDENT IDEAS. REAL-WORLD IMPACT.</p>
              <h1>Ideas made <span>to matter.</span></h1>
              <p className="hero-description">
                Kia ora, welcome to Tohu Korero. We're bringing together projects that connect people,
                spark creativity, and turn ideas into something real.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">Explore our projects <span aria-hidden="true">↘</span></a>
                <a className="text-link" href="#about">Get to know us <span aria-hidden="true">→</span></a>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="orbit orbit-one"></div>
              <div className="orbit orbit-two"></div>
              <div className="orbit-core"><span>TK</span><small>CREATE / CONNECT</small></div>
              <span className="orbit-label orbit-label-top">CREATIVITY <b>✳</b></span>
              <span className="orbit-label orbit-label-bottom"><b>✳</b> CONNECTION</span>
              <span className="orbit-cross">+</span>
            </div>
          </div>
          <div className="container hero-footer"><span>BASED IN AOTEAROA NEW ZEALAND</span><span>SCROLL TO EXPLORE ↓</span></div>
        </section>

        <section className="projects section" id="projects">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow"><span className="section-number">01 /</span> WHAT WE'RE BUILDING</p>
                <h2>Different ideas.<br /><span>Shared purpose.</span></h2>
              </div>
              <p>From creative 3D printing to more accessible communication, each project starts with an idea worth bringing to life.</p>
            </div>

            <div className="project-grid">
              <article className="project-card zaxis-card">
                <div className="project-image">
                  <img src="https://zaxiscustoms.netlify.app/images/holden.jpg" alt="A custom 3D-printed vehicle model from Z Axis Customs" loading="lazy" />
                  <span className="image-label">CREATIVE STUDIO / 01</span>
                  <img className="zaxis-logo" src="https://zaxiscustoms.netlify.app/icons/logo2.png" alt="Z Axis Customs logo" loading="lazy" />
                </div>
                <div className="project-body">
                  <div className="project-meta"><span>3D PRINTING &amp; CUSTOM CREATIONS</span><span className="project-status"><i></i> OPEN FOR ENQUIRIES</span></div>
                  <h3>Z Axis Customs <span aria-hidden="true">↗</span></h3>
                  <p>Turn photos and ideas into something you can hold. Explore custom figurines, pet portraits, vehicle models and more.</p>
                  <a className="card-link" href="https://zaxiscustoms.netlify.app/" target="_blank" rel="noopener noreferrer">Visit Z Axis Customs <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>
                </div>
              </article>

              <article className="project-card nzsl-card">
                <div className="project-image nzsl-art">
                  <div className="nzsl-rings" aria-hidden="true"></div>
                  <img src="/signApp.png" alt="" loading="lazy" />
                  <span className="image-label">ACCESSIBILITY / 02</span>
                  <span className="nzsl-art-caption" aria-hidden="true">CONNECTION<br />THROUGH<br />COMMUNICATION.</span>
                </div>
                <div className="project-body">
                  <div className="project-meta"><span>ACCESSIBILITY &amp; COMMUNICATION</span><span className="project-status status-progress"><i></i> IN DEVELOPMENT</span></div>
                  <h3>Tohu Korero NZSL <span aria-hidden="true">↗</span></h3>
                  <p>An accessibility project exploring speech and text to New Zealand Sign Language. The prototype is currently offline while updates are underway.</p>
                  <a className="card-link" href="#nzsl">About the project <span aria-hidden="true">→</span></a>
                </div>
              </article>
            </div>
            <div className="projects-note"><span>MORE IDEAS IN THE MAKING</span><span>There's always room for what's next. <b>✳</b></span></div>
          </div>
        </section>

        <section className="development section" id="web-development">
          <div className="container development-layout">
            <div>
              <p className="eyebrow"><span className="section-number">02 /</span> FULL-STACK WEB DEVELOPMENT</p>
              <h2>Websites &amp; apps,<br /><span>built for your ideas.</span></h2>
            </div>
            <div className="development-copy">
              <p className="about-lead">I build websites and web apps, from the interface you see to the functionality behind it.</p>
              <p>Whether you have an idea for a website or an app, let's talk about how to bring it to life.</p>
              <div className="development-tags"><span>WEBSITES</span><span>WEB APPS</span><span>FRONT END + BACK END</span></div>
              <a className="button button-primary" href="#contact">Discuss your project <span aria-hidden="true">↗</span></a>
            </div>
          </div>
        </section>

        <section className="about section" id="about">
          <div className="container about-layout">
            <div>
              <p className="eyebrow"><span className="section-number">03 /</span> THE BIGGER PICTURE</p>
              <h2>Curiosity is<br />where it <span>begins.</span></h2>
            </div>
            <div className="about-copy">
              <p className="about-lead">Different projects, one common thread: making ideas useful, meaningful and real.</p>
              <p>Founded by Paul Johnson, Tohu Korero is a home for projects that bring together creativity, technology and a desire to make a positive difference.</p>
              <a className="text-link" href="#contact">Start a conversation <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>

        <section className="nzsl-section section" id="nzsl">
          <div className="container nzsl-layout">
            <div>
              <p className="eyebrow"><span className="section-number">04 /</span> A PROJECT WITH PURPOSE</p>
              <h2>Communication<br />for <span>everyone.</span></h2>
            </div>
            <div className="nzsl-copy">
              <span className="notice-label"><span className="status-dot"></span> PROTOTYPE CURRENTLY OFFLINE</span>
              <p>The Tohu Korero NZSL project began to help students facing barriers to accessing NZSL interpreters. We're working on licensing compliance and data handling to better respect NZSL grammar and the Deaf community.</p>
              <p className="attribution">The project uses data from the NZSL Online Dictionary, maintained by the Deaf Studies Research Unit at Victoria University of Wellington.</p>
              <a className="text-link" href="#contact">Ask about this project <span aria-hidden="true">→</span></a>
            </div>
          </div>
        </section>

        <section className="contact section" id="contact">
          <div className="container contact-layout">
            <div className="contact-intro">
              <p className="eyebrow"><span className="section-number">05 /</span> SAY HELLO</p>
              <h2>Have an idea?<br /><span>Let's talk.</span></h2>
              <p>Have a question, feedback or something you'd like to create? We'd love to hear from you.</p>
              <a className="contact-email" href="mailto:paul@tohukorero.com">paul@tohukorero.com <span aria-hidden="true">↗</span></a>
              <p className="contact-location">PAUL JOHNSON / FOUNDER &amp; DIRECTOR<br />AOTEAROA NEW ZEALAND</p>
            </div>
            <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
              <h3>Send a message <span aria-hidden="true">↗</span></h3>
              <div className="field-row">
                <div className="form-group">
                  <label htmlFor="name">Your name</label>
                  <input id="name" name="name" type="text" autoComplete="name" placeholder="Name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <input id="email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="message">Your message</label>
                <textarea id="message" name="message" placeholder="Tell us what's on your mind..." rows="5" required></textarea>
              </div>
              <button className="button button-primary submit-button" type="submit" disabled={!emailReady || isSubmitting}>
                {isSubmitting ? 'Sending...' : 'Send message'} <span aria-hidden="true">↗</span>
              </button>
              {emailUnavailable && <p className="form-status error" role="alert">The contact form is unavailable. Please email us directly at <a href="mailto:paul@tohukorero.com">paul@tohukorero.com</a>.</p>}
              {statusMessage.text && <p className={`form-status ${statusMessage.type}`} role={statusMessage.type === 'error' ? 'alert' : 'status'}>{statusMessage.text}</p>}
              {!emailReady && !emailUnavailable && <p className="form-status" role="status">Loading contact form...</p>}
            </form>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <a className="footer-brand" href="#home">TOHU <strong>KORERO</strong><span>✳</span></a>
          <p>Ideas that connect, create and make a difference.</p>
          <div className="footer-links"><a href="#projects">Projects</a><a href="#web-development">Web development</a><a href="#contact">Contact</a><a href="https://zaxiscustoms.netlify.app/" target="_blank" rel="noopener noreferrer">Z Axis Customs <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a></div>
        </div>
        <div className="container footer-bottom"><span>© {new Date().getFullYear()} TOHU KORERO</span><span>MADE WITH PURPOSE IN AOTEAROA</span><a href="#home">BACK TO TOP ↑</a></div>
      </footer>
    </div>
  );
}

export default App;
