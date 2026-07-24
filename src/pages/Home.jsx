import Hero from '../components/Hero/Hero'
import Features from '../components/Features/Features'
import Industries from '../components/Industries/Industries'
import Pricing from '../components/Pricing/Pricing'
import FAQ from '../components/FAQ/FAQ'
import CTA from '../components/CTA/CTA'

function Home({ onNavigate }) {
  return (
    <>
      <Hero onNavigate={onNavigate} />
      <Features />
      <Industries />
      <Pricing />
      <FAQ />
      <CTA onNavigate={onNavigate} />
    </>
  )
}

export default Home
