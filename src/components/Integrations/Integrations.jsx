import Container from '../Container'
import SectionTitle from '../SectionTitle'

const integrations = [
  'Twilio',
  'WhatsApp',
  'Slack',
  'Google Calendar',
  'Zapier',
  'Salesforce',
  'HubSpot',
  'Zendesk',
]

function Integrations() {
  return (
    <section className="section integrations-section" id="integrations">
      <SectionTitle
        eyebrow="Plays well with others"
        title="Works with the tools you already use."
        description="Connect Rispa to your calendar, CRM, and communication tools in a few clicks."
      />
      <Container>
        <div className="integrations-grid">
          {integrations.map((name) => (
            <div className="integration-chip" key={name}>
              {name}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Integrations