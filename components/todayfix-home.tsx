import {
  ArrowDownToLine,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Bug,
  CheckCircle2,
  Hammer,
  House,
  MapPin,
  Package,
  Search,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
  Zap,
} from 'lucide-react'
import { TodayfixPhonePreview } from '@/components/todayfix-phone-preview'

const services = [
  { icon: House, title: 'Home services', description: 'Everyday help, close to home', tone: 'tfx-service-icon-purple' },
  { icon: Truck, title: 'Moving & shifting', description: 'Make moving feel lighter', tone: 'tfx-service-icon-green' },
  { icon: Bug, title: 'Pest control', description: 'Take back your space', tone: 'tfx-service-icon-green' },
  { icon: Hammer, title: 'Construction', description: 'Bring your plans to life', tone: 'tfx-service-icon-purple' },
  { icon: Wrench, title: 'Appliance repair', description: 'Get things working again', tone: 'tfx-service-icon-green' },
  { icon: Package, title: 'Material supply', description: 'Find what your project needs', tone: 'tfx-service-icon-purple' },
  { icon: MapPin, title: 'Today Travels', description: 'Plan your next journey', tone: 'tfx-service-icon-green' },
  { icon: Sparkles, title: 'Explore all services', description: 'There is more to discover', tone: 'tfx-service-icon-purple' },
]

const stats = [
  { value: '100+', label: 'verified professionals' },
  { value: '50+', label: 'service areas' },
  { value: '100+', label: 'service categories' },
]

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Find what you need',
    description: 'Search by service and area to discover the right kind of help.',
  },
  {
    number: '02',
    icon: BadgeCheck,
    title: 'Explore local pros',
    description: 'Compare nearby providers and choose the one that fits your needs.',
  },
  {
    number: '03',
    icon: CheckCircle2,
    title: 'Get on with your day',
    description: 'Connect with a professional and leave the task in capable hands.',
  },
]

const benefits = [
  {
    icon: ShieldCheck,
    title: 'A more confident choice',
    description: 'Discover vetted professionals and local businesses in one place.',
  },
  {
    icon: MapPin,
    title: 'Help that feels close',
    description: 'Browse services available in your neighborhood and service area.',
  },
  {
    icon: Zap,
    title: 'Simple from the start',
    description: 'Find a service, explore your options, and take the next step with ease.',
  },
]

function Brand() {
  return (
    <a className="tfx-brand" href="#top" aria-label="Todayfix home">
      <span className="tfx-brand-mark"><Zap fill="currentColor" /></span>
      <span>Todayfix</span>
    </a>
  )
}

function Header() {
  return (
    <header className="tfx-header">
      <div className="tfx-container tfx-header-inner">
        <Brand />
        <nav className="tfx-main-nav" aria-label="Main navigation">
          <a href="#services">Services</a>
          <a href="#why-todayfix">Why Todayfix</a>
          <a href="#how-it-works">How it works</a>
        </nav>
        <a className="tfx-button tfx-button-primary tfx-header-cta" href="#download">
          <span>Download APK</span>
          <ArrowDownToLine aria-hidden="true" />
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="tfx-hero" id="top">
      <div className="tfx-hero-grid" aria-hidden="true" />
      <div className="tfx-container tfx-hero-inner">
        <div className="tfx-hero-copy">
          <p className="tfx-eyebrow"><span className="tfx-eyebrow-dot" />LOCAL SERVICES, MADE SIMPLE</p>
          <h1>Your home,<br /><span>in good hands.</span></h1>
          <p className="tfx-hero-description">
            From quick repairs to big moves, find trusted local professionals and book help in a few taps.
          </p>
          <div className="tfx-hero-actions">
            <a className="tfx-button tfx-button-primary tfx-button-large" href="#download">
              <ArrowDownToLine aria-hidden="true" />
              Download APK
            </a>
            <a className="tfx-text-link" href="#services">
              Explore services <ArrowRight aria-hidden="true" />
            </a>
          </div>
          <div className="tfx-hero-proof" aria-label="Todayfix benefits">
            <span><ShieldCheck aria-hidden="true" />Trusted local pros</span>
            <span><CheckCircle2 aria-hidden="true" />Simple booking</span>
          </div>
        </div>
        <TodayfixPhonePreview />
      </div>
    </section>
  )
}

function StatsStrip() {
  return (
    <section className="tfx-stats-section" aria-label="Todayfix network">
      <div className="tfx-container tfx-stats-grid">
        {stats.map((stat) => (
          <div className="tfx-stat" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

function ServicesSection() {
  return (
    <section className="tfx-section tfx-services-section" id="services">
      <div className="tfx-container">
        <div className="tfx-section-heading">
          <p className="tfx-eyebrow">A LITTLE HELP GOES A LONG WAY</p>
          <h2>Whatever the day needs.</h2>
          <p>Find support for the jobs that keep life moving.</p>
        </div>
        <div className="tfx-services-grid">
          {services.map(({ icon: Icon, title, description, tone }, index) => {
            const href = index === services.length - 1
              ? 'https://todayfix.in/services'
              : `https://todayfix.in/services?term=${encodeURIComponent(title)}`

            return (
              <a
                className="tfx-service-card"
                href={href}
                key={title}
                target="_blank"
                rel="noreferrer"
                aria-label={`Explore ${title} on Todayfix`}
              >
                <span className={`tfx-service-icon ${tone}`}><Icon aria-hidden="true" /></span>
                <span className="tfx-service-card-copy">
                  <strong>{title}</strong>
                  <small>{description}</small>
                </span>
                <ArrowUpRight className="tfx-service-arrow" aria-hidden="true" />
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function WhyTodayfixSection() {
  return (
    <section className="tfx-section tfx-why-section" id="why-todayfix">
      <div className="tfx-container">
        <div className="tfx-section-heading tfx-section-heading-centered">
          <p className="tfx-eyebrow">BUILT AROUND YOUR DAY</p>
          <h2>Less searching. More sorted.</h2>
          <p>A simpler way to connect with the people who can help.</p>
        </div>
        <div className="tfx-benefits-grid">
          {benefits.map(({ icon: Icon, title, description }) => (
            <article className="tfx-benefit-card" key={title}>
              <span className="tfx-benefit-icon"><Icon aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorksSection() {
  return (
    <section className="tfx-section tfx-how-section" id="how-it-works">
      <div className="tfx-container">
        <div className="tfx-how-layout">
          <div className="tfx-how-intro">
            <p className="tfx-eyebrow">THREE SIMPLE STEPS</p>
            <h2>Good help, without the runaround.</h2>
            <p>Todayfix brings local services together, so getting started feels easy.</p>
            <a className="tfx-text-link" href="#download">Get the app <ArrowRight aria-hidden="true" /></a>
          </div>
          <div className="tfx-steps-list">
            {steps.map(({ number, icon: Icon, title, description }) => (
              <article className="tfx-step" key={number}>
                <span className="tfx-step-number">{number}</span>
                <span className="tfx-step-icon"><Icon aria-hidden="true" /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function DownloadSection() {
  return (
    <section className="tfx-download-section" id="download">
      <div className="tfx-container">
        <div className="tfx-download-panel">
          <div className="tfx-download-copy">
            <p className="tfx-eyebrow tfx-eyebrow-light"><span className="tfx-eyebrow-dot" />MADE FOR ANDROID</p>
            <h2>Good help is closer than ever.</h2>
            <p>Take the Todayfix experience with you and find local services whenever you need them.</p>
            <div className="tfx-download-actions">
              <button className="tfx-button tfx-button-disabled tfx-button-large" type="button" disabled>
                <ArrowDownToLine aria-hidden="true" />
                APK link coming soon
              </button>
              <a className="tfx-download-web-link" href="https://todayfix.in" target="_blank" rel="noreferrer">
                Explore Todayfix online <ArrowUpRight aria-hidden="true" />
              </a>
            </div>
            <p className="tfx-download-note">The direct download button will be ready when the APK link is added.</p>
          </div>
          <div className="tfx-download-art" aria-hidden="true">
            <div className="tfx-download-glow" />
            <div className="tfx-download-card">
              <span className="tfx-download-card-icon"><Zap fill="currentColor" /></span>
              <span className="tfx-download-card-label">TODAYFIX FOR ANDROID</span>
              <strong>One app.<br />More done.</strong>
              <span className="tfx-download-card-footer"><ShieldCheck /> Local help, all in one place</span>
            </div>
            <span className="tfx-download-spark tfx-download-spark-one"><Sparkles /></span>
            <span className="tfx-download-spark tfx-download-spark-two"><CheckCircle2 /></span>
          </div>
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  return (
    <section className="tfx-section tfx-faq-section" id="faq">
      <div className="tfx-container tfx-faq-layout">
        <div className="tfx-faq-intro">
          <p className="tfx-eyebrow">A FEW QUICK ANSWERS</p>
          <h2>Good to know.</h2>
          <p>Everything you need to get started with Todayfix.</p>
        </div>
        <div className="tfx-faq-list">
          <details>
            <summary>What is Todayfix?</summary>
            <p>Todayfix helps you discover local service providers and businesses for everyday needs, all in one place.</p>
          </details>
          <details>
            <summary>What services can I find?</summary>
            <p>Explore home services, moving, pest control, appliance repair, construction, material supply, travel, and more.</p>
          </details>
          <details>
            <summary>Where can I download the Android APK?</summary>
            <p>The direct APK link will be available here once it is added. In the meantime, you can explore Todayfix online.</p>
          </details>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="tfx-footer">
      <div className="tfx-container tfx-footer-inner">
        <Brand />
        <p>Local help, made simple.</p>
        <div className="tfx-footer-links">
          <a href="#services">Services</a>
          <a href="#how-it-works">How it works</a>
          <a href="https://todayfix.in" target="_blank" rel="noreferrer">Todayfix.in <ArrowUpRight aria-hidden="true" /></a>
        </div>
      </div>
    </footer>
  )
}

export function TodayfixHome() {
  return (
    <div className="tfx-site">
      <a className="tfx-skip-link" href="#main-content">Skip to content</a>
      <Header />
      <main id="main-content">
        <Hero />
        <StatsStrip />
        <ServicesSection />
        <WhyTodayfixSection />
        <HowItWorksSection />
        <DownloadSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}
