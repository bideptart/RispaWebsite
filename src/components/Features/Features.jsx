import { features } from '../../data/features'
import SectionTitle from '../SectionTitle'
import Container from '../Container'
import FeatureGrid from './FeatureGrid'

function Features() {
  return (
    <section className="section" id="features">
      <SectionTitle
        eyebrow="Features"
        title="Conversations indistinguishable from your best agent."
        description="Rispa.ai skips the brittle speech-to-text and text-to-speech relay and runs on a single audio-native engine — so your callers hear pauses, emotion, and timing that feel right."
      />
      <Container>
        <FeatureGrid items={features} />
      </Container>
    </section>
  )
}

export default Features
