'use client'

import Image from 'next/image'
import { useRef, useState } from 'react'
import {
  ArrowRight,
  Bell,
  Bug,
  CalendarDays,
  ChevronRight,
  Hammer,
  House,
  MapPin,
  Package,
  Search,
  ShieldCheck,
  Sparkles,
  Truck,
  Wrench,
  X,
  Zap,
} from 'lucide-react'

type AppTab = 'home' | 'explore' | 'bookings'

type Category = {
  label: string
  value: string | null
  icon: typeof House
  tone: 'violet' | 'green' | 'amber' | 'blue'
}

type Service = {
  title: string
  category: string
  description: string
  icon: typeof House
}

const categories: Category[] = [
  { label: 'Home services', value: 'Home services', icon: House, tone: 'violet' },
  { label: 'Moving & shifting', value: 'Moving & shifting', icon: Truck, tone: 'green' },
  { label: 'Pest control', value: 'Pest control', icon: Bug, tone: 'amber' },
  { label: 'Appliance repair', value: 'Appliance repair', icon: Wrench, tone: 'blue' },
  { label: 'Construction', value: 'Construction', icon: Hammer, tone: 'amber' },
  { label: 'Material supply', value: 'Material supply', icon: Package, tone: 'green' },
  { label: 'Today Travels', value: 'Today Travels', icon: MapPin, tone: 'violet' },
  { label: 'All services', value: null, icon: Sparkles, tone: 'blue' },
]

const services: Service[] = [
  {
    title: 'Plumbing & electrical',
    category: 'Home services',
    description: 'Trusted help for everyday home fixes',
    icon: Wrench,
  },
  {
    title: 'Moving & shifting',
    category: 'Moving & shifting',
    description: 'Local help for a smoother move',
    icon: Truck,
  },
  {
    title: 'Pest control',
    category: 'Pest control',
    description: 'Help keep your space comfortable',
    icon: Bug,
  },
  {
    title: 'Appliance repair',
    category: 'Appliance repair',
    description: 'Get essential appliances working again',
    icon: Wrench,
  },
  {
    title: 'Construction services',
    category: 'Construction',
    description: 'Support for your next project',
    icon: Hammer,
  },
  {
    title: 'Material supply',
    category: 'Material supply',
    description: 'Find materials for your project',
    icon: Package,
  },
  {
    title: 'Today Travels',
    category: 'Today Travels',
    description: 'Explore travel services in one place',
    icon: MapPin,
  },
]

function StatusBar() {
  return (
    <div className="tfa-status-bar" aria-hidden="true">
      <span>9:41</span>
      <span className="tfa-status-indicators">
        <span className="tfa-signal"><i /><i /><i /><i /></span>
        <span className="tfa-wifi" />
        <span className="tfa-battery"><i /></span>
      </span>
    </div>
  )
}

function AppHeader({
  notificationsOpen,
  onToggleNotifications,
  onGoHome,
}: {
  notificationsOpen: boolean
  onToggleNotifications: () => void
  onGoHome: () => void
}) {
  return (
    <header className="tfa-app-header">
      <button className="tfa-brand-button" type="button" onClick={onGoHome} aria-label="Todayfix home">
        <span className="tfa-brand-mark"><Zap fill="currentColor" aria-hidden="true" /></span>
        <span className="tfa-brand-name">Todayfix</span>
      </button>
      <button
        className="tfa-notification-button"
        type="button"
        onClick={onToggleNotifications}
        aria-label={notificationsOpen ? 'Close notifications' : 'Notifications'}
        aria-expanded={notificationsOpen}
      >
        {notificationsOpen ? <X aria-hidden="true" /> : <Bell aria-hidden="true" />}
        {!notificationsOpen && <span className="tfa-notification-dot" />}
      </button>
    </header>
  )
}

function LocationRow() {
  return (
    <div className="tfa-location-row">
      <span className="tfa-location-icon"><MapPin aria-hidden="true" /></span>
      <span className="tfa-location-copy">
        <span>Service area</span>
        <strong>Bengaluru, India</strong>
      </span>
    </div>
  )
}

function SearchField({
  value,
  onChange,
}: {
  value: string
  onChange: (value: string) => void
}) {
  return (
    <form className="tfa-search" role="search" onSubmit={(event) => event.preventDefault()}>
      <Search aria-hidden="true" />
      <label className="sr-only" htmlFor="todayfix-search">Search services</label>
      <input
        id="todayfix-search"
        type="search"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search services or professionals"
        autoComplete="off"
      />
      {value && (
        <button type="button" className="tfa-clear-search" onClick={() => onChange('')} aria-label="Clear search">
          <X aria-hidden="true" />
        </button>
      )}
    </form>
  )
}

function CategoryGrid({
  items,
  selected,
  onSelect,
}: {
  items: Category[]
  selected: string | null
  onSelect: (category: string | null) => void
}) {
  return (
    <div className="tfa-category-grid">
      {items.map(({ label, value, icon: Icon, tone }) => (
        <button
          className="tfa-category"
          data-active={selected === value}
          key={label}
          type="button"
          onClick={() => onSelect(value)}
          aria-pressed={selected === value}
        >
          <span className={`tfa-category-icon tfa-category-icon-${tone}`}>
            <Icon aria-hidden="true" />
          </span>
          <span>{label}</span>
        </button>
      ))}
    </div>
  )
}

function ServiceRail({
  items,
  onSelect,
}: {
  items: Service[]
  onSelect: (category: string) => void
}) {
  if (items.length === 0) {
    return (
      <div className="tfa-no-results" role="status">
        <Search aria-hidden="true" />
        <p>No services match that search. Try a different word.</p>
      </div>
    )
  }

  return (
    <div className="tfa-service-rail">
      {items.map(({ title, category, description, icon: Icon }) => (
        <button className="tfa-service-card" key={title} type="button" onClick={() => onSelect(category)}>
          <span className="tfa-service-card-icon"><Icon aria-hidden="true" /></span>
          <span className="tfa-service-card-copy">
            <strong>{title}</strong>
            <small>{description}</small>
          </span>
          <ChevronRight className="tfa-service-chevron" aria-hidden="true" />
        </button>
      ))}
    </div>
  )
}

function SectionHeading({
  id,
  title,
  action,
  onAction,
}: {
  id?: string
  title: string
  action?: string
  onAction?: () => void
}) {
  return (
    <div className="tfa-section-heading">
      <h2 id={id}>{title}</h2>
      {action && onAction && (
        <button className="tfa-section-action" type="button" onClick={onAction}>
          {action}<ArrowRight aria-hidden="true" />
        </button>
      )}
    </div>
  )
}

function FeaturedCard({ onExplore }: { onExplore: () => void }) {
  return (
    <article className="tfa-featured-card">
      <Image
        src="/todayfix-home-service.png"
        alt="A home-service professional checking an air conditioner in a bright apartment"
        fill
        priority
        sizes="(max-width: 520px) 100vw, 400px"
        className="tfa-featured-image"
      />
      <div className="tfa-featured-overlay" />
      <div className="tfa-featured-copy">
        <span><ShieldCheck aria-hidden="true" /> Local services, all in one place</span>
        <h2>Good help is right around the corner.</h2>
        <button type="button" onClick={onExplore}>
          Explore services<ArrowRight aria-hidden="true" />
        </button>
      </div>
    </article>
  )
}

function HomeScreen({
  searchTerm,
  onSearch,
  visibleCategories,
  selectedCategory,
  onSelectCategory,
  visibleServices,
  onExplore,
  onClearFilters,
}: {
  searchTerm: string
  onSearch: (value: string) => void
  visibleCategories: Category[]
  selectedCategory: string | null
  onSelectCategory: (category: string | null) => void
  visibleServices: Service[]
  onExplore: () => void
  onClearFilters: () => void
}) {
  return (
    <div className="tfa-screen-content">
      <LocationRow />
      <div className="tfa-home-intro">
        <p className="tfa-eyebrow">LOCAL HELP, MADE SIMPLE</p>
        <h1>What do you need today?</h1>
        <p>Find trusted services for your home and everyday life.</p>
      </div>
      <SearchField value={searchTerm} onChange={onSearch} />

      <section className="tfa-section" aria-labelledby="tfa-categories-title">
        <SectionHeading id="tfa-categories-title" title="Explore categories" action="View all" onAction={onExplore} />
        <CategoryGrid items={visibleCategories} selected={selectedCategory} onSelect={onSelectCategory} />
      </section>

      <FeaturedCard onExplore={onExplore} />

      <section className="tfa-section tfa-popular-section" aria-labelledby="tfa-popular-title">
        <SectionHeading id="tfa-popular-title" title="Popular services" action={searchTerm || selectedCategory ? 'Clear' : undefined} onAction={onClearFilters} />
        <ServiceRail items={visibleServices.slice(0, 4)} onSelect={onSelectCategory} />
      </section>
    </div>
  )
}

function ExploreScreen({
  searchTerm,
  onSearch,
  visibleCategories,
  selectedCategory,
  onSelectCategory,
  visibleServices,
  onClearFilters,
}: {
  searchTerm: string
  onSearch: (value: string) => void
  visibleCategories: Category[]
  selectedCategory: string | null
  onSelectCategory: (category: string | null) => void
  visibleServices: Service[]
  onClearFilters: () => void
}) {
  return (
    <div className="tfa-screen-content tfa-explore-screen">
      <LocationRow />
      <div className="tfa-home-intro">
        <p className="tfa-eyebrow">FIND WHAT YOU NEED</p>
        <h1>Explore services</h1>
        <p>Browse local help by category or search below.</p>
      </div>
      <SearchField value={searchTerm} onChange={onSearch} />
      <section className="tfa-section" aria-labelledby="tfa-all-categories-title">
        <SectionHeading id="tfa-all-categories-title" title="All categories" />
        <CategoryGrid items={visibleCategories} selected={selectedCategory} onSelect={onSelectCategory} />
      </section>
      <section className="tfa-section tfa-explore-results" aria-labelledby="tfa-results-title">
        <SectionHeading id="tfa-results-title" title="Services for you" action={searchTerm || selectedCategory ? 'Clear' : undefined} onAction={onClearFilters} />
        <div className="tfa-explore-service-list">
          <ServiceRail items={visibleServices} onSelect={onSelectCategory} />
        </div>
      </section>
    </div>
  )
}

function BookingsScreen({ onExplore }: { onExplore: () => void }) {
  return (
    <div className="tfa-screen-content tfa-bookings-screen">
      <LocationRow />
      <div className="tfa-home-intro">
        <p className="tfa-eyebrow">YOUR ACTIVITY</p>
        <h1>Your bookings</h1>
        <p>Keep track of the services you book with Todayfix.</p>
      </div>
      <div className="tfa-bookings-empty">
        <span className="tfa-empty-icon"><CalendarDays aria-hidden="true" /></span>
        <h2>No bookings yet</h2>
        <p>When you book a service, your details will appear here.</p>
        <button className="tfa-primary-action" type="button" onClick={onExplore}>
          Find a service<ArrowRight aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

function BottomNavigation({
  activeTab,
  onChange,
}: {
  activeTab: AppTab
  onChange: (tab: AppTab) => void
}) {
  const tabs = [
    { id: 'home' as const, label: 'Home', icon: House },
    { id: 'explore' as const, label: 'Explore', icon: Search },
    { id: 'bookings' as const, label: 'Bookings', icon: CalendarDays },
  ]

  return (
    <nav className="tfa-bottom-nav" aria-label="App navigation">
      {tabs.map(({ id, label, icon: Icon }) => (
        <button
          className="tfa-nav-item"
          data-active={activeTab === id}
          key={id}
          type="button"
          onClick={() => onChange(id)}
          aria-current={activeTab === id ? 'page' : undefined}
        >
          <Icon aria-hidden="true" />
          <span>{label}</span>
        </button>
      ))}
    </nav>
  )
}

export function TodayfixHome() {
  const [activeTab, setActiveTab] = useState<AppTab>('home')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [notificationsOpen, setNotificationsOpen] = useState(false)
  const scrollAreaRef = useRef<HTMLElement | null>(null)
  const normalizedSearch = searchTerm.trim().toLowerCase()

  const visibleCategories = categories
  const visibleServices = services.filter((service) => {
    const matchesCategory = !selectedCategory || service.category === selectedCategory
    const matchesSearch =
      !normalizedSearch ||
      `${service.title} ${service.category} ${service.description}`.toLowerCase().includes(normalizedSearch)

    return matchesCategory && matchesSearch
  })

  function handleSearch(value: string) {
    setSearchTerm(value)
    setSelectedCategory(null)
  }

  function handleCategorySelect(category: string | null) {
    setSelectedCategory(category)
    setSearchTerm('')
  }

  function handleTabChange(tab: AppTab) {
    setActiveTab(tab)
    setNotificationsOpen(false)
    scrollAreaRef.current?.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function clearFilters() {
    setSearchTerm('')
    setSelectedCategory(null)
  }

  const screenProps = {
    searchTerm,
    onSearch: handleSearch,
    visibleCategories,
    selectedCategory,
    onSelectCategory: handleCategorySelect,
    visibleServices,
    onClearFilters: clearFilters,
  }

  return (
    <div className="tfa-preview-stage">
      <div className="tfa-device">
        <div className="tfa-device-notch" aria-hidden="true" />
        <StatusBar />
        <AppHeader
          notificationsOpen={notificationsOpen}
          onToggleNotifications={() => setNotificationsOpen((open) => !open)}
          onGoHome={() => handleTabChange('home')}
        />
        {notificationsOpen && (
          <div className="tfa-notification-popover" role="status">
            <strong>You&apos;re all caught up</strong>
            <span>New updates will show up here.</span>
          </div>
        )}
        <main className="tfa-scroll-content" ref={scrollAreaRef}>
          {activeTab === 'home' && (
            <HomeScreen {...screenProps} onExplore={() => handleTabChange('explore')} />
          )}
          {activeTab === 'explore' && <ExploreScreen {...screenProps} />}
          {activeTab === 'bookings' && (
            <BookingsScreen onExplore={() => handleTabChange('explore')} />
          )}
        </main>
        <BottomNavigation activeTab={activeTab} onChange={handleTabChange} />
      </div>
    </div>
  )
}
