import Hero from '../components/Hero/Hero'
import CallFlow from '../components/CallFlow/CallFlow'
import Comparison from '../components/Comparison/Comparison'
import IndustryPath from '../components/Industries/IndustryPath'
import ROICalculator from '../components/ROICalculator/ROICalculator'
import Integrations from '../components/Integrations/Integrations'
import Testimonials from '../components/Testimonials/Testimonials'
import CTA from '../components/CTA/CTA'

function Home({ onNavigate }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <CallFlow />
      <Comparison />
      <IndustryPath />
      <ROICalculator />
      <Integrations />
      <Testimonials />
      <CTA onNavigate={onNavigate} variant="features" />
    </>
  )
}

export default Home