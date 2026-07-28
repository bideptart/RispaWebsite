import Hero from '../components/Hero/Hero'
import CallFlow from '../components/CallFlow/CallFlow'
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
      <Comparison />
      <ROICalculator />
      <Integrations />
      <Testimonials />
      <FAQ />
      <CTA onNavigate={onNavigate} variant="features" />
    </>
  )
}

export default Home
