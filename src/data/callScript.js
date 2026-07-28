export const callScript = [
  { at: 2, who: 'caller', text: 'Hi, I wanted to book an appointment for a cleaning.' },
  { at: 5, who: 'agent', text: 'Of course. Are you an existing patient with us?' },
  { at: 9, who: 'caller', text: 'Yes, I came in last year. Under Chan.' },
  { at: 13, who: 'agent', text: 'Found you. Last visit was March. Would a morning or afternoon slot suit you better?', action: 'Matched caller to record' },
  { at: 19, who: 'caller', text: 'Morning, if you have something this week.' },
  { at: 23, who: 'agent', text: 'Thursday at 10:15 or Friday at 9:30 are both open.', action: 'Checked live availability' },
  { at: 28, who: 'caller', text: 'Thursday works. Actually — how much is a cleaning now?' },
  { at: 33, who: 'agent', text: "It's HK$680 for a standard scale and polish. Thursday 10:15 is held for you.", action: 'Answered from your price list' },
  { at: 39, who: 'caller', text: 'Perfect, thank you.' },
  { at: 42, who: 'agent', text: "Booked. I've sent a confirmation to your number, and I'll remind you the day before.", action: 'Sent WhatsApp confirmation' },
]

export const callMeta = {
  duration: 47,
  number: '+852 ••• 4471',
  label: 'Inbound',
  outcome: 'Appointment booked, confirmation sent, no staff involved',
}