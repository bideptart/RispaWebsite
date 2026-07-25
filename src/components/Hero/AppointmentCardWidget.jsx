import { useEffect, useRef, useState } from "react";

const Bot = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
);
const Calendar = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
);
const ChevronLeft = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
);
const ChevronRight = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);
const Check = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
);
const PhoneIncoming = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 2 16 8 22 8"/><line x1="22" x2="16" y1="2" y2="8"/><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

const LINES = [
  { who: "agent", text: "Hi, this is Rispa calling from the clinic. Would you like to book an appointment?" },
  { who: "user", text: "Yes please, tomorrow at 10 if possible." },
  { who: "agent", text: "Sure, confirming 28 Jan at 10:00 AM for you now." },
];

const WAVE_HEIGHTS = [6, 10, 14, 10, 14];

export default function AppointmentCardWidget() {
  const [seconds, setSeconds] = useState(0);
  const [callState, setCallState] = useState("Connecting…");
  const [isLive, setIsLive] = useState(false);
  const [visibleLines, setVisible] = useState([]);
  const [typing, setTyping] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    let i = 0;

    const t1 = setTimeout(() => {
      setCallState("Live");
      setIsLive(true);
      playNext();
    }, 800);

    function playNext() {
      if (i < LINES.length) {
        setTyping(true);
        setTimeout(() => {
          setTyping(false);
          setVisible((prev) => [...prev, LINES[i]]);
          i++;
          setTimeout(playNext, 1000);
        }, 900);
      } else {
        setCallState("Booking confirmed");
        setIsLive(false);
        setConfirmed(true);
      }
    }

    return () => clearTimeout(t1);
  }, []);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <div className="appointment-widget">
      <div className="appointment-widget__header">
        <div className="appointment-widget__agent">
          <div className="appointment-widget__avatar">
            <Bot size={18} />
            {isLive && <span className="appointment-widget__avatar-ring" />}
          </div>
          <div>
            <p className="appointment-widget__name">Rispa agent</p>
            <p className="appointment-widget__status">{callState}</p>
          </div>
        </div>

        <div className="appointment-widget__live">
          <div className="appointment-widget__waveform">
            {WAVE_HEIGHTS.map((h, idx) => (
              <span
                key={idx}
                className="appointment-widget__wave-bar"
                style={{ height: h, animationDelay: `${idx * 0.15}s` }}
              />
            ))}
          </div>
          <div className="appointment-widget__timer">
            <span className="appointment-widget__timer-dot" />
            {mm}:{ss}
          </div>
        </div>
      </div>

      <div className="appointment-widget__langs">
        <span className="appointment-widget__lang appointment-widget__lang--active">English</span>
        <span className="appointment-widget__lang">Cantonese</span>
        <span className="appointment-widget__lang">Mandarin</span>
      </div>

      <div className="appointment-widget__chat">
        {visibleLines.map((line, idx) => (
          <div
            key={idx}
            className={`appointment-widget__bubble ${
              line.who === "agent"
                ? "appointment-widget__bubble--agent"
                : "appointment-widget__bubble--user"
            }`}
          >
            {line.text}
          </div>
        ))}

        {typing && (
          <div className="appointment-widget__typing">
            {[0, 0.15, 0.3].map((d) => (
              <span
                key={d}
                className="appointment-widget__typing-dot"
                style={{ animationDelay: `${d}s` }}
              />
            ))}
          </div>
        )}
      </div>

      {confirmed && (
        <div className="appointment-widget__confirm">
          <p className="appointment-widget__confirm-text">
            All set — your appointment is confirmed.
          </p>

          <div className="appointment-widget__details">
            <div className="appointment-widget__details-label">
              <Calendar size={13} />
              <span>Appointment details</span>
            </div>

            <div className="appointment-widget__date-nav">
              <button className="appointment-widget__nav-btn" aria-label="Previous day">
                <ChevronLeft size={14} />
              </button>
              <span className="appointment-widget__date">28 Jan</span>
              <button className="appointment-widget__nav-btn" aria-label="Next day">
                <ChevronRight size={14} />
              </button>
            </div>

            <div className="appointment-widget__slots">
              <button className="appointment-widget__slot">09:00</button>
              <button className="appointment-widget__slot appointment-widget__slot--active">
                10:00 <Check size={13} />
              </button>
              <button className="appointment-widget__slot">11:00</button>
            </div>
          </div>
        </div>
      )}

      <div className="appointment-widget__footer">
        <PhoneIncoming size={13} />
        <span>Inbound call · Hong Kong</span>
      </div>
    </div>
  );
}
