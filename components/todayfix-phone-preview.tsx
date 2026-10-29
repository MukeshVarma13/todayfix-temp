import {
  BadgeCheck,
  Bug,
  ChevronDown,
  ChevronRight,
  House,
  MapPin,
  Package,
  Search,
  ShieldCheck,
  Truck,
  Wrench,
  Clock3,
} from 'lucide-react'

const appServices = [
  { icon: House, label: 'Home services', tone: 'tfx-phone-icon-purple' },
  { icon: Truck, label: 'Moving', tone: 'tfx-phone-icon-green' },
  { icon: Bug, label: 'Pest control', tone: 'tfx-phone-icon-green' },
  { icon: Package, label: 'Materials', tone: 'tfx-phone-icon-purple' },
]

export function TodayfixPhonePreview() {
  return (
    <div className="tfx-phone-scene" aria-hidden="true">
      <div className="tfx-phone-orb" />
      <div className="tfx-phone-ring tfx-phone-ring-one" />
      <div className="tfx-phone-ring tfx-phone-ring-two" />

      <div className="tfx-float-card tfx-float-card-top">
        <span className="tfx-float-icon tfx-float-icon-purple">
          <ShieldCheck />
        </span>
        <span className="tfx-float-copy">
          <strong>Trusted local pros</strong>
          <small>Help you can count on</small>
        </span>
      </div>

      <div className="tfx-float-card tfx-float-card-bottom">
        <span className="tfx-float-icon tfx-float-icon-green">
          <Clock3 />
        </span>
        <span className="tfx-float-copy">
          <strong>Less running around</strong>
          <small>More time for your day</small>
        </span>
      </div>

      <div className="tfx-phone">
        <div className="tfx-phone-notch" />
        <div className="tfx-phone-screen">
          <div className="tfx-phone-status">
            <span>9:41</span>
            <span className="tfx-phone-status-icons">
              <i />
              <i />
              <i />
            </span>
          </div>

          <div className="tfx-phone-brand-row">
            <span className="tfx-phone-brand-mark">T</span>
            <span className="tfx-phone-brand-name">Todayfix</span>
            <span className="tfx-phone-avatar">A</span>
          </div>

          <div className="tfx-phone-location">
            <MapPin />
            <span>
              <small>YOUR LOCATION</small>
              <strong>Bengaluru, India</strong>
            </span>
            <ChevronDown />
          </div>

          <h2>What do you need today?</h2>

          <div className="tfx-phone-search">
            <Search />
            <span>Search for a service</span>
          </div>

          <div className="tfx-phone-section-heading">
            <strong>Popular categories</strong>
            <span>View all <ChevronRight /></span>
          </div>

          <div className="tfx-phone-services">
            {appServices.map(({ icon: Icon, label, tone }) => (
              <div className="tfx-phone-service" key={label}>
                <span className={`tfx-phone-service-icon ${tone}`}>
                  <Icon />
                </span>
                <span>{label}</span>
              </div>
            ))}
          </div>

          <div className="tfx-phone-promo">
            <div className="tfx-phone-promo-head">
              <span><BadgeCheck /> VERIFIED PROFESSIONALS</span>
              <ChevronRight />
            </div>
            <strong>Good help is closer than you think.</strong>
            <p>Find local services for the little things and the big ones.</p>
            <div className="tfx-phone-promo-link">
              Explore services <ChevronRight />
            </div>
          </div>

          <div className="tfx-phone-bottom-nav">
            <span className="tfx-phone-nav-active"><House /><small>Home</small></span>
            <span><Search /><small>Explore</small></span>
            <span><Wrench /><small>Bookings</small></span>
            <span><Package /><small>More</small></span>
          </div>
        </div>
      </div>
    </div>
  )
}
