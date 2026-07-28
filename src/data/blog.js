// Inline SVG data-URIs as cover illustrations — no external images needed
const covers = {
  ivr: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="180" viewBox="0 0 400 180"><rect width="400" height="180" fill="#e6f5f3"/><rect x="60" y="60" width="80" height="60" rx="12" fill="#21897e" opacity=".18"/><rect x="160" y="45" width="80" height="75" rx="12" fill="#21897e" opacity=".28"/><rect x="260" y="55" width="80" height="65" rx="12" fill="#21897e" opacity=".22"/><circle cx="100" cy="90" r="18" fill="#21897e" opacity=".35"/><circle cx="200" cy="82" r="22" fill="#21897e" opacity=".45"/><circle cx="300" cy="87" r="20" fill="#21897e" opacity=".4"/><line x1="100" y1="90" x2="200" y2="82" stroke="#21897e" strokeWidth="2" opacity=".4"/><line x1="200" y1="82" x2="300" y2="87" stroke="#21897e" strokeWidth="2" opacity=".4"/><text x="200" y="155" textAnchor="middle" fontFamily="sans-serif" fontSize="13" fill="#1a7268" opacity=".7">AI Voice vs IVR</text></svg>`)}`,

  latency: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="180" viewBox="0 0 400 180"><rect width="400" height="180" fill="#e6f5f3"/><polyline points="40,140 100,100 160,115 220,75 280,85 340,50 380,60" fill="none" stroke="#21897e" strokeWidth="3" opacity=".6"/><circle cx="340" cy="50" r="6" fill="#21897e"/><text x="200" y="160" textAnchor="middle" fontFamily="sans-serif" fontSize="13" fill="#1a7268" opacity=".7">Sub-300ms Latency</text><rect x="30" y="40" width="60" height="24" rx="6" fill="#21897e" opacity=".12"/><text x="60" y="56" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fill="#21897e">&lt;300ms</text></svg>`)}`,

  multilingual: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="180" viewBox="0 0 400 180"><rect width="400" height="180" fill="#e6f5f3"/><circle cx="200" cy="90" r="50" fill="none" stroke="#21897e" strokeWidth="2" opacity=".35" strokeDasharray="4 4"/><circle cx="200" cy="90" r="28" fill="#21897e" opacity=".15"/><rect x="60" y="55" width="80" height="32" rx="16" fill="#fff" stroke="#21897e" strokeWidth="1.5" opacity=".8"/><rect x="260" y="55" width="80" height="32" rx="16" fill="#fff" stroke="#21897e" strokeWidth="1.5" opacity=".8"/><rect x="130" y="110" width="90" height="32" rx="16" fill="#fff" stroke="#21897e" strokeWidth="1.5" opacity=".8"/><text x="100" y="76" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill="#1a7268">粵語</text><text x="300" y="76" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill="#1a7268">English</text><text x="175" y="131" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill="#1a7268">普通話</text></svg>`)}`,

  booking: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="180" viewBox="0 0 400 180"><rect width="400" height="180" fill="#e6f5f3"/><rect x="100" y="30" width="200" height="140" rx="14" fill="#fff" stroke="#21897e" strokeWidth="1.5" opacity=".8"/><rect x="100" y="30" width="200" height="36" rx="14" fill="#21897e" opacity=".15"/><rect x="120" y="80" width="60" height="24" rx="6" fill="#21897e" opacity=".2"/><rect x="190" y="80" width="60" height="24" rx="6" fill="#21897e" opacity=".35"/><rect x="260" y="80" width="30" height="24" rx="6" fill="#21897e" opacity=".12"/><text x="200" y="50" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill="#1a7268">28 Jan</text><text x="220" y="96" textAnchor="middle" fontFamily="sans-serif" fontSize="11" fill="#fff">10:00 ✓</text></svg>`)}`,

  number: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="180" viewBox="0 0 400 180"><rect width="400" height="180" fill="#e6f5f3"/><rect x="80" y="65" width="100" height="60" rx="12" fill="#21897e" opacity=".18"/><rect x="220" y="65" width="100" height="60" rx="12" fill="#21897e" opacity=".28"/><line x1="180" y1="95" x2="220" y2="95" stroke="#21897e" strokeWidth="2.5" opacity=".5" strokeDasharray="5 3"/><circle cx="130" cy="95" r="20" fill="#21897e" opacity=".3"/><circle cx="270" cy="95" r="20" fill="#21897e" opacity=".4"/><text x="130" y="100" textAnchor="middle" fontFamily="sans-serif" fontSize="18" fill="#1a7268">📞</text><text x="270" y="100" textAnchor="middle" fontFamily="sans-serif" fontSize="18" fill="#1a7268">🔗</text><text x="200" y="155" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill="#1a7268" opacity=".7">Bring Your Own Number</text></svg>`)}`,

  analytics: `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" width="400" height="180" viewBox="0 0 400 180"><rect width="400" height="180" fill="#e6f5f3"/><rect x="60" y="110" width="36" height="40" rx="4" fill="#21897e" opacity=".3"/><rect x="110" y="85" width="36" height="65" rx="4" fill="#21897e" opacity=".45"/><rect x="160" y="65" width="36" height="85" rx="4" fill="#21897e" opacity=".6"/><rect x="210" y="75" width="36" height="75" rx="4" fill="#21897e" opacity=".5"/><rect x="260" y="50" width="36" height="100" rx="4" fill="#21897e" opacity=".75"/><rect x="310" y="70" width="36" height="80" rx="4" fill="#21897e" opacity=".55"/><text x="200" y="165" textAnchor="middle" fontFamily="sans-serif" fontSize="12" fill="#1a7268" opacity=".7">Voice Agent Analytics</text></svg>`)}`,
}

export const blogPosts = [
  {
    slug: 'why-ai-voice-agents-beat-ivr',
    category: 'Product',
    readTime: '5 min read',
    date: 'Jul 10, 2025',
    title: 'Why AI Voice Agents Beat IVR Every Time',
    excerpt: 'Traditional IVR systems frustrate callers with rigid menus and dead ends. Here is why businesses switching to AI voice agents are seeing higher resolution rates from day one.',
    author: 'Rispa Team',
    cover: covers.ivr,
  },
  {
    slug: 'sub-300ms-latency-explainer',
    category: 'Engineering',
    readTime: '7 min read',
    date: 'Jun 28, 2025',
    title: 'How We Achieve Sub-300ms Voice Latency',
    excerpt: 'Perceived naturalness in a phone call collapses the moment a pause stretches past 300ms. We walk through the audio-native stack that keeps Rispa agents feeling human.',
    author: 'Rispa Engineering',
    cover: covers.latency,
  },
  {
    slug: 'multilingual-agents-hong-kong',
    category: 'Case Study',
    readTime: '4 min read',
    date: 'Jun 14, 2025',
    title: 'Running Trilingual Agents in Hong Kong',
    excerpt: 'Cantonese, Mandarin, and English — often inside the same call. Here is how a clinic in Hong Kong deployed a single Rispa agent handling all three languages seamlessly.',
    author: 'Rispa Team',
    cover: covers.multilingual,
  },
  {
    slug: 'appointment-booking-playbook',
    category: 'Playbook',
    readTime: '6 min read',
    date: 'May 30, 2025',
    title: 'The Appointment Booking Playbook',
    excerpt: 'A practical guide to designing a voice agent flow for outbound appointment reminders and inbound rescheduling — with real prompts, fallback logic, and CRM integration tips.',
    author: 'Rispa Team',
    cover: covers.booking,
  },
  {
    slug: 'bring-your-own-number',
    category: 'Guide',
    readTime: '3 min read',
    date: 'May 15, 2025',
    title: 'Bring Your Own Phone Number — No Porting Required',
    excerpt: 'Your existing carrier relationship is an asset. We show you how to connect your current numbers to Rispa in under 10 minutes without porting or downtime.',
    author: 'Rispa Team',
    cover: covers.number,
  },
  {
    slug: 'voice-agent-analytics-guide',
    category: 'Guide',
    readTime: '5 min read',
    date: 'Apr 28, 2025',
    title: 'Making Sense of Your Voice Agent Analytics',
    excerpt: 'Transcripts, sentiment scores, intent detection, and latency graphs — learn which metrics actually matter and how to use them to improve agent performance week over week.',
    author: 'Rispa Team',
    cover: covers.analytics,
  },
]

export const blogCategories = ['All', 'Product', 'Engineering', 'Case Study', 'Playbook', 'Guide']
