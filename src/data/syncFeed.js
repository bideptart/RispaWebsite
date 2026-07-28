export const targets = [
  { name: 'Salesforce', kind: 'CRM', icon: 'cloud', color: '#0b8ecf' },
  { name: 'HubSpot', kind: 'CRM', icon: 'users', color: '#e8623a' },
  { name: 'Google Calendar', kind: 'Calendar', icon: 'calendar', color: '#3f7ce0' },
  { name: 'Zapier', kind: 'Automation', icon: 'zap', color: '#e2542a' },
]

export const events = [
  { label: 'Call ended · 3m 47s', tag: 'Transcript', color: '#21897e', to: 'Rispa' },
  { label: 'Contact created → Lead', tag: 'CRM sync', color: '#0b8ecf', to: 'Salesforce' },
  { label: 'Follow-up SMS dispatched', tag: 'Automation', color: '#7c5cd6', to: 'Zapier' },
  { label: 'Appointment booked · 10:00', tag: 'Calendar', color: '#c98a12', to: 'Google Cal' },
  { label: 'Deal stage moved to Qualified', tag: 'CRM sync', color: '#e8623a', to: 'HubSpot' },
  { label: 'Call recording archived', tag: 'Storage', color: '#21897e', to: 'Rispa' },
  { label: 'Reminder queued for tomorrow', tag: 'Automation', color: '#7c5cd6', to: 'Zapier' },
  { label: 'Note attached to contact', tag: 'CRM sync', color: '#0b8ecf', to: 'Salesforce' },
]

export const syncStats = [
  { value: '100%', label: 'Calls logged' },
  { value: '<1s', label: 'Sync latency' },
  { value: '0', label: 'Setup fee' },
]