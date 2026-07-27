import Hero from '../components/Hero/Hero'
import CallFlow from '../components/CallFlow/CallFlow'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import Comparison from '../components/Comparison/Comparison'
import ROICalculator from '../components/ROICalculator/ROICalculator'
import Integrations from '../components/Integrations/Integrations'
import Testimonials from '../components/Testimonials/Testimonials'
import FAQ from '../components/FAQ/FAQ'
import CTA from '../components/CTA/CTA'

function Home({ onNavigate }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <CallFlow />
      <HowItWorks />
      <Comparison />
      <ROICalculator />
      <Integrations />
      <Testimonials />
      <FAQ />
      {/* Snapshot 4 — teal full-width CTA at the very bottom */}
      <CTA onNavigate={onNavigate} variant="features" />
    </>
  )
}

export default Home
