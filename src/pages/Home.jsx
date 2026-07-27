import Hero from '../components/Hero/Hero'
import CallFlow from '../components/CallFlow/CallFlow'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import Comparison from '../components/Comparison/Comparison'
import ROICalculator from '../components/ROICalculator/ROICalculator'
import Integrations from '../components/Integrations/Integrations'
import Testimonials from '../components/Testimonials/Testimonials'
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
      <Testimonials/>
      <CTA onNavigate={onNavigate} />
    </>
  )
}

export default Home