import { useEffect, useRef, useState } from "react";

const BotIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
);
const CalendarIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
);
const ChevronLeftIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
);
const ChevronRightIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
);
const CheckIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
);
const PhoneIncomingIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 2 16 8 22 8"/><line x1="22" x2="16" y1="2" y2="8"/><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
);

const LINES = [
  { who: "agent", text: "Hi, this is Rispa calling from the clinic. Would you like to book an appointment?" },
  { who: "user", text: "Yes please, tomorrow at 10 if possible." },
  { who: "agent", text: "Sure, confirming 28 Jan at 10:00 AM for you now." },
];

export default function AppointmentCardWidget() {
  const [seconds, setSeconds] = useState(0);
  const [callState, setCallState] = useState("Connecting…");
  const [visibleLines, setVisibleLines] = useState([]);
  const [typing, setTyping] = useState(false);
  const [confirmed, setConfirmed] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    const timer = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (started.current) return;
    started.current = true;

    let i = 0;
    const kickoff = setTimeout(() => {
      setCallState("Live");
      playNext();
    }, 600);

    function playNext() {
      if (i < LINES.length) {
        setTyping(true);
        setTimeout(() => {
          setTyping(false);
          setVisibleLines((prev) => [...prev, LINES[i]]);
          i += 1;
          setTimeout(playNext, 900);
        }, 700);
      } else {
        setCallState("Booking confirmed");
        setConfirmed(true);
      }
    }

    return () => clearTimeout(kickoff);
  }, []);

  const mm = String(Math.floor(seconds / 60)).padStart(2, "0");
  const ss = String(seconds % 60).padStart(2, "0");

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="relative w-11 h-11 rounded-xl bg-[rgba(33,137,126,0.1)] flex items-center justify-center">
            <BotIcon size={20} className="text-[#1a7268]" />
            <span className="absolute -inset-[2px] rounded-xl border-2 border-[#21897e] animate-ping opacity-60" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#0d2422] m-0" style={{ fontFamily: 'Outfit, system-ui, sans-serif' }}>Rispa agent</p>
            <p className="text-xs text-[#59716d] m-0">{callState}</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-end gap-[2px] h-4">
            {[6, 12, 16, 8, 14].map((h, idx) => (
              <span
                key={idx}
                className="w-[3px] bg-[#21897e] rounded-sm animate-[wave_1s_ease-in-out_infinite]"
                style={{ height: h, animationDelay: `${idx * 0.15}s` }}
              />
            ))}
          </div>
          <div className="flex items-center gap-1.5 bg-[#f0f7f5] px-3 py-1 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
            <span className="text-[11px] font-semibold text-[#1a7268]">{mm}:{ss}</span>
          </div>
        </div>
      </div>

      {/* Language tags */}
      <div className="flex gap-1.5 mb-4">
        <span className="text-xs px-3 py-1 rounded-full bg-[#21897e] text-white font-medium">English</span>
        <span className="text-xs px-3 py-1 rounded-full bg-[#f7fbfa] text-[#59716d] font-medium">Cantonese</span>
        <span className="text-xs px-3 py-1 rounded-full bg-[#f7fbfa] text-[#59716d] font-medium">Mandarin</span>
      </div>

      {/* Chat area */}
      <div className="flex flex-col gap-2.5 text-sm min-h-[110px] mb-2">
        {visibleLines.map((line, idx) => (
          <div
            key={idx}
            className={`max-w-[85%] px-3.5 py-2.5 rounded-xl animate-[fadein_0.35s_ease] leading-relaxed ${
              line.who === "agent"
                ? "bg-[#f7fbfa] self-start rounded-bl-sm text-[#0d2422]"
                : "bg-[rgba(33,137,126,0.08)] text-[#1a7268] self-end ml-auto rounded-br-sm"
            }`}
          >
            {line.text}
          </div>
        ))}
        {typing && (
          <div className="bg-[#f7fbfa] self-start rounded-xl rounded-bl-sm px-4 py-3 w-fit flex gap-1">
            {[0, 0.15, 0.3].map((d) => (
              <span
                key={d}
                className="inline-block w-2 h-2 rounded-full bg-[#59716d] animate-bounce"
                style={{ animationDelay: `${d}s` }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Confirmation */}
      {confirmed && (
        <div className="animate-[fadein_0.4s_ease]">
          <p className="text-sm font-semibold text-[#21897e] text-center leading-relaxed my-4">
            All set — your appointment is confirmed.
          </p>

          <div className="bg-[#f7fbfa] rounded-xl p-4">
            <div className="flex items-center gap-1.5 mb-3 text-[#59716d] text-xs font-medium">
              <CalendarIcon size={14} />
              <span>Appointment details</span>
            </div>

            <div className="flex items-center justify-between mb-3">
              <button aria-label="Previous day" className="p-1 rounded-md border border-[#d7e7e3] hover:bg-white text-[#59716d]">
                <ChevronLeftIcon size={14} />
              </button>
              <span className="text-sm font-semibold text-[#0d2422]">28 Jan</span>
              <button aria-label="Next day" className="p-1 rounded-md border border-[#d7e7e3] hover:bg-white text-[#59716d]">
                <ChevronRightIcon size={14} />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <button className="text-sm py-2.5 rounded-lg border border-[#d7e7e3] bg-white text-[#59716d] font-medium hover:border-[#21897e] transition-colors">09:00</button>
              <button className="text-sm py-2.5 rounded-lg bg-[#21897e] text-white font-medium flex items-center justify-center gap-1 shadow-[0_4px_12px_-4px_rgba(33,137,126,0.4)]">
                10:00 <CheckIcon size={14} />
              </button>
              <button className="text-sm py-2.5 rounded-lg border border-[#d7e7e3] bg-white text-[#59716d] font-medium hover:border-[#21897e] transition-colors">11:00</button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center gap-1.5 mt-4 pt-3.5 border-t border-[rgba(33,137,126,0.08)] text-xs text-[#59716d]">
        <PhoneIncomingIcon size={14} />
        <span>Inbound call · Hong Kong</span>
      </div>
    </div>
  );
}
