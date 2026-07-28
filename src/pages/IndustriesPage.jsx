import Container from '../components/Container'
import Badge from '../components/Badge'
import Button from '../components/Button'
import AnimatedHubGraphic from '../components/Industries/AnimatedHubGraphic'
import IndustryGallery from '../components/Industries/IndustryGallery'
import Industries from '../components/Industries/Industries'
import UseCases from '../components/UseCases/UseCases'
import CTA from '../components/CTA/CTA'
import {
  Wrench, Building2, HeartPulse, UtensilsCrossed,
  GraduationCap, Car, ShoppingBag, Briefcase,
} from 'lucide-react'

const industryItems = [
  {
    id: 'healthcare',
    icon: HeartPulse,
    title: 'Healthcare & Clinics',
    description: 'Book appointments, send reminders, and answer patient FAQs — without your front desk juggling calls all day.',
  },
  {
    id: 'home-services',
    icon: Wrench,
    title: 'Home Services',
    description: 'Capture service requests, dispatch details, and quote inquiries for plumbers, electricians, and contractors.',
  },
  {
    id: 'real-estate',
    icon: Building2,
    title: 'Real Estate',
    description: 'Qualify buyer and renter leads, schedule property tours, and follow up with prospects around the clock.',
  },
  {
    id: 'restaurants',
    icon: UtensilsCrossed,
    title: 'Restaurants',
    description: 'Take reservations, answer menu questions, and manage delivery or catering inquiries 24 hours a day.',
  },
  {
    id: 'education',
    icon: GraduationCap,
    title: 'Education',
    description: 'Assist prospective students with enrolment questions, class schedules, and fee details instantly.',
  },
  {
    id: 'automotive',
    icon: Car,
    title: 'Automotive',
    description: 'Book service appointments, provide quotes, and follow up on leads for dealerships and repair shops.',
  },
  {
    id: 'retail',
    icon: ShoppingBag,
    title: 'Retail & E-commerce',
    description: 'Handle order status, returns, and product enquiries so your team focuses on higher-value work.',
  },
  {
    id: 'professional',
    icon: Briefcase,
    title: 'Professional Services',
    description: 'Screen inbound enquiries, book consultations, and qualify leads for law firms, agencies, and advisors.',
  },
]

function IndustriesPage({ onNavigate }) {
  return (
    <div className="page-view industries-page">

      {/* Hero */}
      <section className="industries-hero-section">
        <Container className="industries-hero-container">
          <div className="industries-hero__copy">
            <Badge>• PRE-TUNED FOR THE CALLS YOU ACTUALLY TAKE</Badge>
            <h1 className="industries-hero__title">
              Built for every<br />
              kind of phone call.
            </h1>
            <p className="industries-hero__subtitle">
              One AI voice agent that answers calls, qualifies leads, and books appointments across every industry — fluent in 10+ languages, live in under 5 minutes.
            </p>
            <div className="industries-hero__actions">
              <Button
                as="a" href="#cta" className="button--primary"
                onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('cta') }}
              >
                Build your first agent &rarr;
              </Button>
              <Button
                as="a" href="#pricing" variant="secondary"
                onClick={(e) => { e.preventDefault(); onNavigate && onNavigate('pricing') }}
              >
                View pricing &rarr;
              </Button>
            </div>
          </div>
          <div className="industries-hero__visual">
            <AnimatedHubGraphic />
          </div>
        </Container>
      </section>

      {/* Industry gallery — title left, stacked carousel right */}
      <section className="section section--muted" id="industries-gallery">
        <Container>
          <div className="ind-gallery-layout">

            {/* Left: sticky title + description */}
            <div className="ind-gallery-layout__copy">
              <Badge>INDUSTRIES</Badge>
              <h2 className="ind-gallery-layout__heading">
                Every kind<br />of business.
              </h2>
              <p className="ind-gallery-layout__desc">
                From a one-person clinic to a national call centre — Rispa fits any inbound or outbound call flow, live in under five minutes.
              </p>
              <ul className="ind-gallery-layout__list">
                <li>✓ Healthcare &amp; Clinics</li>
                <li>✓ Real Estate &amp; Property</li>
                <li>✓ Home Services</li>
                <li>✓ Restaurants &amp; Hospitality</li>
                <li>✓ Education &amp; Coaching</li>
                <li>✓ Automotive &amp; Repair</li>
                <li>✓ Retail &amp; E-commerce</li>
                <li>✓ Professional Services</li>
              </ul>
            </div>

            {/* Right: stacked card carousel */}
            <div className="ind-gallery-layout__carousel">
              <IndustryGallery items={industryItems} />
            </div>

          </div>
        </Container>
      </section>

      <UseCases />

      <Industries />

      <CTA onNavigate={onNavigate} variant="features" />
    </div>
  )
}

export default IndustriesPage
