import { useEffect, useState } from "react";
import { Bot, Calendar, ChevronLeft, ChevronRight, Check, PhoneIncoming } from "lucide-react";

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

  useEffect(() => {
    const t = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const timeoutIds = [];
    const schedule = (fn, ms) => {
      const id = setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
      timeoutIds.push(id);
      return id;
    };

    let i = 0;
    schedule(() => {
      setCallState("Live");
      setIsLive(true);
      playNext();
    }, 800);

    function playNext() {
      if (i < LINES.length) {
        setTyping(true);
        schedule(() => {
          setTyping(false);
          setVisible((prev) => [...prev, LINES[i]]);
          i += 1;
          schedule(playNext, 900);
        }, 700);
      } else {
        setCallState("Booking confirmed");
        setIsLive(false);
        setConfirmed(true);
      }
    }

    return () => {
      cancelled = true;
      timeoutIds.forEach(clearTimeout);
      setVisible([]);
      setTyping(false);
      setConfirmed(false);
      setCallState("Connecting…");
    };
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

      {/* Chat area */}
      <div className="appointment-widget__chat">
        {visibleLines.filter(Boolean).map((line, idx) => (
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