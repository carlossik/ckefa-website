import { useEffect, useRef, useState } from 'react'
import ikeaLogo from './assets/logos/ikea.png'
import inshurLogo from './assets/logos/inshur-dark.png'
import qinetiqLogo from './assets/logos/qinetiq-dark.png'
import modLogo from './assets/logos/mod.png'
import dfeLogo from './assets/logos/dfe.png'
import hmrcLogo from './assets/logos/hmrc.png'
import nasdaqLogo from './assets/logos/nasdaq-dark.png'
import grosvenorLogo from './assets/logos/grosvenor-dark.png'
import tournamentHqWordmark from './assets/products/tournamenthq-wordmark.webp'
import tournamentHqEmblem from './assets/products/tournamenthq-emblem.webp'
import fcfsLogo from './assets/products/fcfs.webp'
import deFrancoLogo from './assets/products/de-franco-foundation.webp'
import ckefaMediaLogo from './assets/products/ckefa-media.webp'
import './App.css'

const nav = [
  { label: 'Services', href: '#services' },
  { label: 'Cyber & AI', href: '#cyber-ai' },
  { label: 'Our work', href: '#work' },
  { label: 'About', href: '#about' },
]

const services = [
  {  title: 'Cybersecurity & resilience', description: 'Security assessments, application and API risk reviews, secure development practices, vulnerability management and actionable resilience improvements.', tag: 'Risk-led security' },
  {  title: 'AI security & readiness', description: 'Assess the people, policies, infrastructure, data controls and security foundations needed to introduce AI safely and responsibly.', tag: 'Secure AI adoption' },
  {  title: 'Software engineering', description: 'Design, build and modernise tailored web applications, platforms, integrations and business workflows with maintainability at the core.', tag: 'Built to scale' },
  { title: 'Quality engineering & automation', description: 'Practical QA leadership, Playwright and API automation, functional and regression testing, performance assurance and release readiness.', tag: 'Confidence to release' },
  {  title: 'AI governance & advisory', description: 'Translate responsible AI principles into pragmatic policies, oversight, risk management, delivery roadmaps and measurable business outcomes.', tag: 'Responsible innovation' },
  {  title: 'Training & technical consultancy', description: 'Hands-on technical support and capability-building across quality assurance, secure engineering, modern delivery and AI implementation.', tag: 'Knowledge transfer' },
  { title: 'DevSecOps & cloud security', description: 'Integrate security throughout CI/CD pipelines, infrastructure as code, cloud configuration and software supply chains. Oracle-focused capabilities are available through a specialist delivery partner.', tag: 'Secure delivery, by design' },
]

const projects = [
  {
    id: 'THQ', logo: tournamentHqWordmark, emblem: tournamentHqEmblem, type: 'CKEFA platform', status: 'Live product', title: 'TournamentHQ',
    description: 'Competition management software bringing registrations, fixtures, results, officials and public tournament experiences together in one platform.',
    result: 'Featured implementation: Black History Month Football Tournament 2026',
    href: 'https://tournamenthq.co.uk', label: 'Explore TournamentHQ',
    theme: 'green',
  },
  {
    id: 'FCFS', logo: fcfsLogo, type: 'CKEFA platform', status: 'Live product', title: 'FCFS.app',
    description: 'A practical platform for organising events and managing invitations, attendance and coordination more effectively.',
    result: 'Event planning and participation workflows',
    href: 'https://fcfs.app/home', label: 'Explore FCFS',
    theme: 'purple',
  },
  {
    id: 'DF', logo: deFrancoLogo, type: 'Client website', status: 'Live website', title: 'De Franco Foundation',
    description: 'A digital presence supporting grassroots football, community development and access to opportunities through sport.',
    result: 'Charity storytelling, community engagement and visibility',
    href: 'https://defrancofoundation.co.uk', label: 'View website',
    theme: 'gold',
  },
  {
    id: 'ST1', type: 'Product development', status: 'In development', title: 'CKEFA Studio1',
    description: 'A creative technology initiative focused on streamlining video production, branding and media workflows for sports content.',
    result: 'Sports media production and workflow innovation',
    theme: 'blue',
  },
  {
    id: 'AL', type: 'Client solution', status: 'Ongoing development', title: 'AssureLink Compliance',
    description: 'A compliance operations solution in development, combining case workflows, internal guidance and team learning in a coherent workspace.',
    result: 'Selected non-confidential work in progress',
    theme: 'teal',
  },
  {
    id: 'CM', logo: ckefaMediaLogo, type: 'Digital media', status: 'Active', title: 'CKEFA Media',
    description: 'Grassroots sports production and distribution, combining live coverage with the technology and workflow tools behind engaging content.',
    result: 'Live sports, community content and digital storytelling',
    href: 'https://ckefamedia.com', label: 'Visit website & book',
    secondaryHref: 'https://www.youtube.com/@CKEFAMedia', secondaryLabel: 'Watch on YouTube',
    theme: 'coral',
  },
]

const organisations = [
  { name: 'IKEA', logo: ikeaLogo },
  { name: 'INSHUR', logo: inshurLogo },
  { name: 'QinetiQ', logo: qinetiqLogo },
  { name: 'Ministry of Defence', logo: modLogo },
  { name: 'Department for Education', logo: dfeLogo },
  { name: 'HMRC', logo: hmrcLogo },
  { name: 'Nasdaq', logo: nasdaqLogo },
  { name: 'Grosvenor Technology', logo: grosvenorLogo },
]

function Arrow({ diagonal = false }) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon">{diagonal ? <><path d="M7 17 17 7"/><path d="M7 7h10v10"/></> : <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>}</svg>
}

function ServiceIcon({ title }) {
  const shapes = {
    'Cybersecurity & resilience': <><path d="M12 2 20 6v6c0 5-3.2 8-8 10-4.8-2-8-5-8-10V6l8-4Z"/><path d="m8 12 3 3 5-6"/></>,
    'AI security & readiness': <><path d="M12 5c-3-3-7-.8-7 2.6-3 1.3-3.1 5-.7 6.4-.4 3.8 3.6 6.3 7.7 5V5Z"/><path d="M12 5c3-3 7-.8 7 2.6 3 1.3 3.1 5 .7 6.4.4 3.8-3.6 6.3-7.7 5V5Z"/><path d="M9 9v8m6-8v8"/></>,
    'Software engineering': <><path d="m8 7-5 5 5 5M16 7l5 5-5 5m-7 3 4-10"/></>,
    'Quality engineering & automation': <><rect x="4" y="3" width="16" height="18" rx="2"/><path d="m8 12 2.5 2.5L16 9M8 7h5"/></>,
    'AI governance & advisory': <><path d="M4 6h16M7 6v14h10V6M10 11h4m-4 4h4"/></>,
    'Training & technical consultancy': <><path d="m2 9 10-5 10 5-10 5-10-5Zm4 3v5c3 2.5 9 2.5 12 0v-5M22 9v7"/></>,
    'DevSecOps & cloud security': <><rect x="2" y="4" width="7" height="7" rx="1.5"/><rect x="15" y="13" width="7" height="7" rx="1.5"/><path d="M9 7h5c2 0 3 1 3 3v3M12 4l3 3-3 3"/></>,
  }
  return <svg className="service-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{shapes[title] ?? null}</svg>
}

function ShieldIcon() {
  return <svg aria-hidden="true" viewBox="0 0 64 64" fill="none" className="shield-graphic"><path d="M32 5 54 14v15c0 16-9 25-22 31C19 54 10 45 10 29V14L32 5Z" stroke="currentColor" strokeWidth="2"/><path d="m23 32 6 6 13-15" stroke="#C4F25A" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><circle cx="32" cy="32" r="26" stroke="currentColor" strokeDasharray="2 5" opacity=".15"/></svg>
}

function ContactForm() {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()
    if (status === 'submitting' || !formRef.current) return
    if (!formRef.current.reportValidity()) return
    // Vite's production preview (typically localhost:4173) is not a Netlify server.
    // Guard both dev and local preview so we never falsely try to send an enquiry.
    const localHostnames = ['localhost', '127.0.0.1', '0.0.0.0', '[::1]', '::1']
    if (import.meta.env.DEV || localHostnames.includes(window.location.hostname)) {
      setErrorMessage('')
      setStatus('preview')
      return
    }
    setStatus('submitting')
    setErrorMessage('')
    const formData = new FormData(formRef.current)
    formData.set('form-name', 'ckefa-enquiry')
    const controller = new AbortController()
    const timeout = setTimeout(() => controller.abort(), 15000)
    try {
      const response = await fetch('/__forms.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData).toString(),
        signal: controller.signal,
      })
      if (!response.ok) throw new Error(`Submission failed (HTTP ${response.status})`)
      formRef.current?.reset()
      setStatus('success')
    } catch {
      setStatus('error')
      setErrorMessage('We could not confirm delivery of your enquiry. Please email info@ckefa.co.uk directly.')
    } finally {
      clearTimeout(timeout)
    }
  }

  return (
    <form className="enquiry-form" ref={formRef} name="ckefa-enquiry" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="ckefa-enquiry" />
      <p className="honeypot" aria-hidden="true"><label>Leave this field empty <input type="text" name="bot-field" tabIndex="-1" autoComplete="off" /></label></p>
      <div className="form-two">
        <label>Full name <input name="fullName" type="text" placeholder="Your name" maxLength="120" autoComplete="name" required /></label>
        <label>Work email <input name="email" type="email" placeholder="you@company.com" maxLength="254" autoComplete="email" required /></label>
      </div>
      <div className="form-two">
        <label>Organisation <input name="organisation" type="text" placeholder="Company or organisation" maxLength="150" autoComplete="organization" /></label>
        <label>What can we help with?
          <select name="service" defaultValue="" required>
            <option value="" disabled>Select a service</option>
            <option>Cybersecurity & AI readiness</option>
            <option>Software engineering</option>
            <option>Software testing & automation</option>
            <option>AI governance & advisory</option>
            <option>Project or partnership enquiry</option>
            <option>Other</option>
          </select>
        </label>
      </div>
      <label>Tell us about your enquiry <textarea name="message" placeholder="A few details about your project, challenge or idea..." rows="5" maxLength="5000" required /></label>
      <div className="form-footer">
        <button type="submit" className="button button-primary" disabled={status === 'submitting'}>{status === 'submitting' ? 'Sending…' : 'Send enquiry'} <Arrow /></button>
        <span className="smallprint">We use your details only to respond to your enquiry. <a href="/privacy.html">Privacy notice</a></span>
      </div>
      <div role="status" aria-live="polite">
        {status === 'success' && <p className="form-message success">Thank you — your enquiry has been submitted. We’ll be in touch.</p>}
        {status === 'preview' && <p className="form-message info">This is a local preview, so the enquiry has not been sent. Form delivery is available only on the deployed Netlify site. Email <a href="mailto:info@ckefa.co.uk">info@ckefa.co.uk</a> to contact us now.</p>}
        {status === 'error' && <p className="form-message failure">{errorMessage} <a href="mailto:info@ckefa.co.uk">Open your email application</a>.</p>}
      </div>
    </form>
  )
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => {
    const token = import.meta.env.VITE_CF_WEB_ANALYTICS_TOKEN
    if (!token || import.meta.env.DEV) return undefined
    const script = document.createElement('script')
    script.defer = true
    script.src = 'https://static.cloudflareinsights.com/beacon.min.js'
    script.dataset.cfBeacon = JSON.stringify({ token })
    document.head.appendChild(script)
    return () => script.remove()
  }, [])

  return (
    <div className="site-shell" id="top">
      <a href="#main-content" className="skip-link">Skip to content</a>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="brand-link" aria-label="CKEFA Software Solutions, home" onClick={() => setMenuOpen(false)}>
            <img src="/ckefa-symbol.webp" className="brand-symbol" alt="" />
            <span className="brand-name"><strong>ckefa<span>.</span></strong><small>SOFTWARE SOLUTIONS LTD</small></span>
          </a>
          <nav id="site-menu" className={`main-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            {nav.map(link => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}
            <a className="mobile-contact" href="#contact" onClick={() => setMenuOpen(false)}>Contact us <Arrow /></a>
          </nav>
          <a className="button button-outline header-cta" href="#contact">Let’s talk <Arrow diagonal /></a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} aria-controls="site-menu" onClick={() => setMenuOpen(open => !open)}><span/><span/><span/></button>
        </div>
      </header>

      <main id="main-content">
        <section className="hero-section">
          <div className="hero-noise"/>
          <div className="container hero-layout">
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-line"/> SOFTWARE ENGINEERING · CYBERSECURITY · AI</div>
              <h1>Build what’s next.<br/><span>Secure what matters.</span></h1>
              <p className="hero-intro">A technology consultancy for the modern enterprise — combining cybersecurity, secure AI adoption, DevSecOps and software engineering to help organisations build resilient, intelligent and future-ready solutions.</p>
              <div className="hero-actions">
                <a href="#contact" className="button button-primary">Let’s discuss your project <Arrow /></a>
                <a href="#services" className="button button-subtle">Explore our services <Arrow diagonal /></a>
              </div>
              <div className="hero-proof hero-proof-grid">
                <div className="hero-proof-item"><ServiceIcon title="Cybersecurity & resilience" /><span>Stronger security<br/>and risk resilience</span></div>
                <div className="hero-proof-item"><ServiceIcon title="AI security & readiness" /><span>Practical, high-impact<br/>AI readiness</span></div>
                <div className="hero-proof-item"><ServiceIcon title="Software engineering" /><span>High-quality,<br/>scalable software</span></div>
              </div>
            </div>
            <div className="hero-art hero-art-secure" aria-label="Secure global technology illustration">
              <img className="hero-secure-globe" src="/ckefa-secure-globe.webp" alt="Digital globe with a shield and padlock representing secure connected infrastructure" loading="eager" />
            </div>
          </div>
        </section>

        <section className="expertise-strip" aria-label="Our areas of expertise"><div className="container strip-inner"><span className="strip-label">WHAT WE DO</span><span>Cybersecurity</span><span>AI readiness</span><span>Software engineering</span><span>Quality assurance</span><span>Digital resilience</span><span>DevSecOps</span></div></section>

        <section id="services" className="section services-section">
          <div className="container"><div className="section-topline">OUR SERVICES</div><div className="section-intro"><div><h2>Technology expertise for a more secure,<br/><em>intelligent enterprise.</em></h2></div><p>From secure cloud foundations to AI adoption and tailored software, we help turn complex technology challenges into sustainable business value.</p></div>
            <div className="services-grid">{services.map(s => <article className="service-card" key={s.number}><div className="service-icon-badge"><ServiceIcon title={s.title} /></div><h3>{s.title}</h3><p>{s.description}</p><div className="service-tag">{s.tag}</div></article>)}</div>
          </div>
        </section>

        <section className="cyber-section" id="cyber-ai">
          <div className="container cyber-layout"><div className="cyber-copy"><div className="section-topline light">  SECURITY & AI</div><div className="cyber-icon"><ShieldIcon/></div><h2>AI is moving fast.<br/><span>Is your infrastructure ready?</span></h2><p>Rapid AI adoption expands the threat surface across identities, APIs, data flows and connected systems. We assess infrastructure readiness, application security, cloud controls and secure delivery practices to help organisations prioritise resilience as they innovate.</p><a href="#contact" className="button button-primary">Explore an AI readiness review <Arrow /></a></div>
            <div className="risk-panel"><div className="risk-heading"><span>SECURITY READINESS AREAS</span><span className="risk-status"><span/> ASSESS · PRIORITISE · IMPROVE</span></div>
              {[['01','AI & agent access','Permissions, identity, tools and unintended actions'],['02','Data & information security','Sensitive information, model inputs and third-party flows'],['03','Application & API exposure','Supply chain, interfaces, integrations and secure SDLC'],['04','Governance & resilience','Oversight, incident planning and operational recovery']].map(item => <div className="risk-row" key={item[0]}><span className="risk-num">{item[0]}</span><div><strong>{item[1]}</strong><p>{item[2]}</p></div><span className="risk-arrow">↗</span></div>)}<div className="risk-bottom"><span className="tiny-square"/> Secure by design, not as an afterthought.</div>
            </div>
          </div>
        </section>

        <section id="work" className="section work-section"><div className="container"><div className="section-topline">/ SELECTED WORK</div><div className="section-intro"><h2>Not just ideas.<br/><em>Products and progress.</em></h2><p>From proprietary platforms to client solutions and ongoing innovation — a selection of the work behind CKEFA.</p></div>
          <div className="project-grid">{projects.map(project => <article className={`project-card project-${project.theme}`} key={project.id}><div className={`project-poster${project.logo ? ' has-logo' : ''}`}><div className="poster-texture"/>{project.logo ? <div className="project-logo-shell"><img className={`project-logo project-logo-${project.id.toLowerCase()}`} src={project.logo} alt={`${project.title} official logo`} loading="lazy" />{project.emblem && <img className="project-emblem" src={project.emblem} alt="" loading="lazy" />}</div> : <div className="project-symbol">{project.id}</div>}<div className="poster-caption">CKEFA / {project.type.toUpperCase()}</div></div><div className="project-body"><div className="project-meta"><span>{project.type}</span><span className="project-status"><i/>{project.status}</span></div><h3>{project.title}</h3><p>{project.description}</p><div className="project-result">{project.result}</div>{project.href && <div className="project-actions"><a href={project.href} target="_blank" rel="noopener noreferrer" className="project-link">{project.label} <Arrow diagonal /></a>{project.secondaryHref && <a href={project.secondaryHref} target="_blank" rel="noopener noreferrer" className="project-link project-link-secondary">{project.secondaryLabel} <Arrow diagonal /></a>}</div>}</div></article>)}</div>
          <div className="case-spotlight"><div><div className="spotlight-eyebrow">CASE STUDY / TOURNAMENTHQ</div><h3>Technology powering community sport.</h3><p>Our TournamentHQ work includes the Black History Month Football Tournament, bringing competition administration, live fixtures and results, and a public-facing digital experience together.</p><a className="text-link" href="https://app.tournamenthq.co.uk/bhmff" target="_blank" rel="noopener noreferrer">Visit the BHMFF 2026 website <Arrow diagonal /></a></div><div className="spotlight-seal"><span>BHMFF</span><strong>2026</strong><small>Competition platform</small></div></div>
        </div></section>

        <section className="section about-section" id="about"><div className="container about-layout"><div><div className="section-topline"> / ABOUT CKEFA</div><h2>Built on delivery.<br/><em>Driven by possibility.</em></h2></div><div className="about-content"><p className="about-lead">CKEFA Software Solutions Ltd brings together engineering discipline, quality assurance and a forward-looking approach to security and artificial intelligence.</p><p>Our experience spans complex enterprise environments, from the delivery of reliable software and automation frameworks to practical cybersecurity assurance and responsible AI advisory. We focus on thoughtful architecture, clear communication and measurable results.</p><div className="about-values"><span><i/>Secure foundations</span><span><i/>Pragmatic innovation</span><span><i/>Quality at every stage</span></div></div></div>
          <div className="container experience-block" id="clients"><div className="experience-head"><div><div className="section-topline">SELECTED CLIENTS</div><h3>Trusted experience.<br/><em>Proven delivery.</em></h3></div><p>Selected clients and organisations we have supported across technology, software engineering, quality assurance and digital transformation. These are examples from a wider portfolio of engagements.</p></div><div className="logo-grid">{organisations.map(org => <div className="logo-tile" key={org.name}><img src={org.logo} alt={`${org.name} logo`} loading="lazy"/><span>{org.name}</span></div>)}</div></div>
        </section>

        <section id="contact" className="contact-section"><div className="container contact-layout"><div className="contact-intro"><div className="section-topline light">05 / LET'S CONNECT</div><h2>Have a challenge?<br/><span>Let’s make progress.</span></h2><p>Planning a software project, strengthening security or exploring AI adoption? Tell us what you’re working on and we’ll start a conversation.</p><div className="contact-direct"><span>OR EMAIL US DIRECTLY</span><a href="mailto:info@ckefa.co.uk">info@ckefa.co.uk <Arrow diagonal /></a><small>CKEFA Software Solutions Ltd · United Kingdom</small></div></div><div className="contact-card"><div className="contact-card-top"><h3>Start a conversation</h3><span>01 — ENQUIRY</span></div><ContactForm/></div></div></section>
      </main>
      <footer className="site-footer"><div className="container footer-main"><a href="#top" className="footer-brand"><img src="/ckefa-symbol.webp" alt=""/><span><strong>ckefa<span>.</span></strong><small>SOFTWARE SOLUTIONS LTD</small></span></a><p>Code. Build. Innovate.<br/>Secure software for an AI-powered future.</p><div className="footer-links"><a href="#services">Services</a><a href="#cyber-ai">Cyber & AI</a><a href="#work">Our work</a><a href="#contact">Contact</a><a href="/privacy.html">Privacy</a></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} CKEFA Software Solutions Ltd. All rights reserved.</span><span>United Kingdom <span className="dot-sep">·</span> <a href="mailto:info@ckefa.co.uk">info@ckefa.co.uk</a></span></div></footer>
    </div>
  )
}
