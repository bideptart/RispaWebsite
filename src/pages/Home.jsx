import Hero from '../components/Hero/Hero'
import CallFlow from '../components/CallFlow/CallFlow'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import Comparison from '../components/Comparison/Comparison'
import ROICalculator from '../components/ROICalculator/ROICalculator'
import Integrations from '../components/Integrations/Integrations'
import Testimonials from '../components/Testimonials/Testimonials'
import CTA from '../components/CTA/CTA'
import IndustryGallery from '../components/Industries/IndustryGallery'
import Container from '../components/Container'
import Badge from '../components/Badge'
import {
  Wrench, Building2, HeartPulse, UtensilsCrossed,
  GraduationCap, Car, ShoppingBag, Briefcase,
} from 'lucide-react'

const industryItems = [
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
    id: 'healthcare',
    icon: HeartPulse,
    title: 'Healthcare & Clinics',
    description: 'Handle appointment bookings, reminders, and patient triage calls without tying up front-desk staff.',
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

function Home({ onNavigate }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <CallFlow />
      <HowItWorks />

      {/* Industry Gallery — replaces static Industries section */}
      <section className="section section--muted" id="industries">
        <Container>
          <div className="section-title-row">
            <div className="section-title-row__left">
              <Badge>INDUSTRIES</Badge>
              <h2 className="section-title-row__heading">
                Built for every kind of business.
              </h2>
            </div>
            <div className="section-title-row__right">
              <p className="section-title-row__desc">
                From healthcare to home services — Rispa fits any inbound or outbound call flow, live in under five minutes.
              </p>
            </div>
          </div>
          <IndustryGallery items={industryItems} />
        </Container>
      </section>

      <Comparison />
      <ROICalculator />
      <Integrations />
      <Testimonials />
      <CTA onNavigate={onNavigate} />
    </>
  )
}

export default Home
