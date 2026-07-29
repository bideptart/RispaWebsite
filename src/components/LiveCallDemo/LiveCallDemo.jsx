import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Container from '../Container'
import SectionTitle from '../SectionTitle'

const script = [
  { from: 'caller', time: '0:02', text: 'Hi, I wanted to book an appointment for a cleaning.' },
  { from: 'rispa', time: '0:05', text: 'Of course. Are you an existing patient with us?' },
  { from: 'caller', time: '0:09', text: 'Yes, I came in last year. Under Chan.' },
  { from: 'rispa', time: '0:13', text: 'Got it - I can see your record. What day works best for you?' },
  { from: 'caller', time: '0:18', text: 'Maybe next Tuesday afternoon?' },
  { from: 'rispa', time: '0:21', text: 'Tuesday, 3:30 PM is open. Shall I book that for you?' },
  { from: 'caller', time: '0:24', text: 'Yes please, that works.' },
  { from: 'rispa', time: '0:27', text: 'All set - you are confirmed for Tuesday at 3:30 PM.' },
]

function LiveCallDemo() {
  const [visibleCount, setVisibleCount] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [callEnded, setCallEnded] = useState(false)

  useEffect(() => {
    if (!isPlaying || visibleCount >= script.length) {
      if (visibleCount >= script.length) setCallEnded(true)
      return
    }
    const timeout = setTimeout(() => setVisibleCount((prev) => prev + 1), 1700)
    return () => clearTimeout(timeout)
  }, [visibleCount, isPlaying])

  useEffect(() => {
    if (!isPlaying || callEnded) return
    const interval = setInterval(() => setSeconds((prev) => prev + 1), 1000)
    return () => clearInterval(interval)
  }, [isPlaying, callEnded])

  const formatTime = (s) => `${Math.floor(s / 60)}:${(s % 60).toString().padStart(2, '0')}`

  const handleReplay = () => {
    setVisibleCount(0)
    setSeconds(0)
    setCallEnded(false)
    setIsPlaying(true)
  }

  const currentSpeaker = visibleCount > 0 && visibleCount <= script.length
    ? script[visibleCount - 1].from
    : null

  return (
    <section className="section" id="live-call-demo">
      <Container>
        <div className="call-demo-layout">
          <div className="call-demo">
            <div className="call-demo__header">
              <div className="call-demo__caller">
                <div className={`call-demo__avatar ${currentSpeaker === 'caller' && !callEnded ? 'call-demo__avatar--active' : ''}`}>
                  <i className="call-demo__icon">Call</i>
                </div>
                <div>
                  <div className="call-demo__number">+91 98 4471</div>
                  <div className="call-demo__badge">INBOUND</div>
                </div>
              </div>
              <div className="call-demo__meta">
                <div className="call-demo__waveform">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <motion.span
                      key={i}
                      animate={
                        !callEnded && isPlaying
                          ? { height: ['30%', '90%', '30%'] }
                          : { height: '20%' }
                      }
                      transition={{
                        duration: 0.8 + (i % 3) * 0.2,
                        repeat: !callEnded && isPlaying ? Infinity : 0,
                        ease: 'easeInOut',
                        delay: i * 0.05,
                      }}
                    />
                  ))}
                </div>
                <span className="call-demo__timer">{formatTime(seconds)}</span>
              </div>
            </div>

            <div className="call-demo__body">
              <AnimatePresence>
                {script.slice(0, visibleCount).map((msg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className={`call-bubble-row ${msg.from === 'rispa' ? 'call-bubble-row--rispa' : ''}`}
                  >
                    <span className="call-bubble-label">
                      {msg.from === 'rispa' ? 'RISPA' : 'CALLER'} <span>{msg.time}</span>
                    </span>
                    <div className={`call-bubble call-bubble--${msg.from}`}>
                      {msg.text}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {!callEnded && visibleCount < script.length && (
                <div className="call-bubble-row">
                  <div className="call-bubble call-bubble--typing">
                    <span></span><span></span><span></span>
                  </div>
                </div>
              )}
            </div>

            <div className="call-demo__footer">
              <div className="call-demo__status">
                <span className={`call-demo__status-dot ${callEnded ? 'call-demo__status-dot--ended' : ''}`} />
                {callEnded ? 'Call ended - booking confirmed' : 'Call in progress'}
              </div>
              <button className="call-demo__replay" onClick={handleReplay}>
                {callEnded ? 'Replay call' : 'Restart'}
              </button>
            </div>
          </div>

          <div className="call-demo-layout__copy">
            <SectionTitle
              eyebrow="See it live"
              title="Watch a real call unfold."
              description="This is what a caller experiences - natural, responsive, and fully automated."
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default LiveCallDemo