import { useEffect, useRef, useState } from "react";
import { Bot, Calendar, ChevronLeft, ChevronRight, Check, PhoneIncoming } from "lucide-react";

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
            <Bot size={20} className="text-[#1a7268]" />
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
              <Calendar size={14} />
              <span>Appointment details</span>
            </div>

            <div className="flex items-center justify-between mb-3">
              <button aria-label="Previous day" className="p-1 rounded-md border border-[#d7e7e3] hover:bg-white text-[#59716d]">
                <ChevronLeft size={14} />
              </button>
              <span className="text-sm font-semibold text-[#0d2422]">28 Jan</span>
              <button aria-label="Next day" className="p-1 rounded-md border border-[#d7e7e3] hover:bg-white text-[#59716d]">
                <ChevronRight size={14} />
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <button className="text-sm py-2.5 rounded-lg border border-[#d7e7e3] bg-white text-[#59716d] font-medium hover:border-[#21897e] transition-colors">09:00</button>
              <button className="text-sm py-2.5 rounded-lg bg-[#21897e] text-white font-medium flex items-center justify-center gap-1 shadow-[0_4px_12px_-4px_rgba(33,137,126,0.4)]">
                10:00 <Check size={14} />
              </button>
              <button className="text-sm py-2.5 rounded-lg border border-[#d7e7e3] bg-white text-[#59716d] font-medium hover:border-[#21897e] transition-colors">11:00</button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="flex items-center gap-1.5 mt-4 pt-3.5 border-t border-[rgba(33,137,126,0.08)] text-xs text-[#59716d]">
        <PhoneIncoming size={14} />
        <span>Inbound call · Hong Kong</span>
      </div>
    </div>
  );
}
