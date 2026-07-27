export default function AnimatedHubGraphic({ className = "" }) {
  return (
    <div className={`w-full max-w-[620px] mx-auto ${className}`}>
      <svg viewBox="0 0 620 570" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
        <defs>
          <pattern id="dotgrid" width="14" height="14" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="2" fill="#bfe3ea" />
          </pattern>
          <linearGradient id="blobGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#d6f0f3" />
            <stop offset="100%" stopColor="#eefaf9" />
          </linearGradient>
        </defs>

        {/* Background */}
        <rect width="620" height="570" fill="#ffffff" />

        {/* Blobs */}
        <path
          d="M440,15 C520,5 580,55 575,135 C570,205 500,185 480,145 C460,105 380,135 380,85 C380,45 400,20 440,15 Z"
          fill="url(#blobGrad)" opacity="0.85"
        />
        <path
          d="M480,420 C530,440 540,510 490,550 C450,580 400,570 390,535 C380,500 430,485 440,460 C450,435 450,410 480,420 Z"
          fill="url(#blobGrad)" opacity="0.6"
        />

        {/* Dot grids */}
        <rect x="400" y="20" width="70" height="70" fill="url(#dotgrid)" opacity="0.9" />
        <rect x="30" y="450" width="70" height="70" fill="url(#dotgrid)" opacity="0.9" />

        {/* Orbit rings */}
        <circle cx="310" cy="285" r="185" fill="none" stroke="#5fd0dc" strokeWidth="2" strokeDasharray="1.5 8" opacity="0.9" />
        <circle cx="310" cy="285" r="105" fill="none" stroke="#0e3a52" strokeWidth="1" opacity="0.35" />

        {/* Rotating orbit group */}
        <g>
          <animateTransform attributeName="transform" type="rotate"
            from="0 310 285" to="360 310 285" dur="28s" repeatCount="indefinite" />

          {/* Spoke lines */}
          <line x1="310" y1="100" x2="310" y2="180" stroke="#c9c9c9" strokeWidth="1.5" />
          <line x1="476" y1="119" x2="381" y2="214" stroke="#c9c9c9" strokeWidth="1.5" />
          <line x1="495" y1="285" x2="415" y2="285" stroke="#c9c9c9" strokeWidth="1.5" />
          <line x1="476" y1="451" x2="381" y2="356" stroke="#c9c9c9" strokeWidth="1.5" />
          <line x1="310" y1="470" x2="310" y2="390" stroke="#c9c9c9" strokeWidth="1.5" />
          <line x1="144" y1="451" x2="239" y2="356" stroke="#c9c9c9" strokeWidth="1.5" />
          <line x1="125" y1="285" x2="205" y2="285" stroke="#c9c9c9" strokeWidth="1.5" />
          <line x1="144" y1="119" x2="239" y2="214" stroke="#c9c9c9" strokeWidth="1.5" />

          {/* --- Card: Chat (top) --- */}
          <g transform="translate(265,65)">
            <g>
              <animateTransform attributeName="transform" type="rotate"
                from="0 45 35" to="-360 45 35" dur="28s" repeatCount="indefinite" />
              <rect width="90" height="70" rx="16" fill="#ffffff"
                style={{ filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.12))" }} />
              <path d="M25,20 h42 a8,8 0 0 1 8,8 v14 a8,8 0 0 1 -8,8 h-24 l-10,10 v-10 h-8 a8,8 0 0 1 -8,-8 v-14 a8,8 0 0 1 8,-8 z"
                fill="#1e88a8" />
              <circle cx="38" cy="35" r="2.2" fill="#ffffff" />
              <circle cx="47" cy="35" r="2.2" fill="#ffffff" />
              <circle cx="56" cy="35" r="2.2" fill="#ffffff" />
              <circle cx="80" cy="10" r="11" fill="#06283a" />
              <path d="M75,10 l3.5,3.5 l6,-6.5" stroke="#ffffff" strokeWidth="2"
                fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>

          {/* --- Card: Wallet/Card (top-right) --- */}
          <g transform="translate(431,84)">
            <g>
              <animateTransform attributeName="transform" type="rotate"
                from="0 45 35" to="-360 45 35" dur="28s" repeatCount="indefinite" />
              <rect width="90" height="70" rx="16" fill="#ffffff"
                style={{ filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.12))" }} />
              <rect x="25" y="24" width="42" height="30" rx="4" fill="#1e88a8" />
              <rect x="25" y="32" width="42" height="6" fill="#ffffff" opacity="0.5" />
              <circle cx="80" cy="10" r="11" fill="#06283a" />
              <path d="M75,10 l3.5,3.5 l6,-6.5" stroke="#ffffff" strokeWidth="2"
                fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>

          {/* --- Card: Globe/Network (right) --- */}
          <g transform="translate(450,250)">
            <g>
              <animateTransform attributeName="transform" type="rotate"
                from="0 45 35" to="-360 45 35" dur="28s" repeatCount="indefinite" />
              <rect width="90" height="70" rx="16" fill="#ffffff"
                style={{ filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.12))" }} />
              <g transform="translate(45,35)" stroke="#1e88a8" strokeWidth="2.6" fill="none">
                <circle r="17" />
                <ellipse rx="7" ry="17" />
                <line x1="-17" y1="0" x2="17" y2="0" />
                <line x1="-14" y1="-9" x2="14" y2="-9" />
                <line x1="-14" y1="9" x2="14" y2="9" />
              </g>
              <circle cx="80" cy="10" r="11" fill="#06283a" />
              <path d="M75,10 l3.5,3.5 l6,-6.5" stroke="#ffffff" strokeWidth="2"
                fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>

          {/* --- Card: Shield/Security (bottom-right) --- */}
          <g transform="translate(431,416)">
            <g>
              <animateTransform attributeName="transform" type="rotate"
                from="0 45 35" to="-360 45 35" dur="28s" repeatCount="indefinite" />
              <rect width="90" height="70" rx="16" fill="#ffffff"
                style={{ filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.12))" }} />
              <path d="M45,14 L67,22 V39 C67,53 57,62 45,67 C33,62 23,53 23,39 V22 Z"
                fill="#1e88a8" />
              <path d="M37,39 l6,6 12,-14" stroke="#ffffff" strokeWidth="2.4"
                fill="none" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="80" cy="10" r="11" fill="#06283a" />
              <path d="M75,10 l3.5,3.5 l6,-6.5" stroke="#ffffff" strokeWidth="2"
                fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>

          {/* --- Card: Bell/Notification (bottom) --- */}
          <g transform="translate(265,435)">
            <g>
              <animateTransform attributeName="transform" type="rotate"
                from="0 45 35" to="-360 45 35" dur="28s" repeatCount="indefinite" />
              <rect width="90" height="70" rx="16" fill="#ffffff"
                style={{ filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.12))" }} />
              <path d="M45,18 C35,18 28,26 28,36 L28,46 L22,52 H68 L62,46 L62,36 C62,26 55,18 45,18 Z"
                fill="#1e88a8" />
              <line x1="45" y1="52" x2="45" y2="56" stroke="#1e88a8" strokeWidth="3"
                strokeLinecap="round" />
              <circle cx="45" cy="59" r="3" fill="#1e88a8" />
              <circle cx="80" cy="10" r="11" fill="#06283a" />
              <path d="M75,10 l3.5,3.5 l6,-6.5" stroke="#ffffff" strokeWidth="2"
                fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>

          {/* --- Card: Lightning/Speed (bottom-left) --- */}
          <g transform="translate(99,416)">
            <g>
              <animateTransform attributeName="transform" type="rotate"
                from="0 45 35" to="-360 45 35" dur="28s" repeatCount="indefinite" />
              <rect width="90" height="70" rx="16" fill="#ffffff"
                style={{ filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.12))" }} />
              <polygon points="50,14 32,38 46,38 40,60 62,33 48,33" fill="#1e88a8" />
              <circle cx="80" cy="10" r="11" fill="#06283a" />
              <path d="M75,10 l3.5,3.5 l6,-6.5" stroke="#ffffff" strokeWidth="2"
                fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>

          {/* --- Card: Phone (left) --- */}
          <g transform="translate(80,250)">
            <g>
              <animateTransform attributeName="transform" type="rotate"
                from="0 45 35" to="-360 45 35" dur="28s" repeatCount="indefinite" />
              <rect width="90" height="70" rx="16" fill="#ffffff"
                style={{ filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.12))" }} />
              <path d="M30,20 Q28,20 28,22 L28,52 Q28,54 30,54 L60,54 Q62,54 62,52 L62,22 Q62,20 60,20 Z"
                fill="#1e88a8" />
              <rect x="33" y="24" width="24" height="22" rx="2" fill="#ffffff" opacity="0.9" />
              <circle cx="45" cy="50" r="2" fill="#ffffff" />
              <circle cx="80" cy="10" r="11" fill="#06283a" />
              <path d="M75,10 l3.5,3.5 l6,-6.5" stroke="#ffffff" strokeWidth="2"
                fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>

          {/* --- Card: Analytics (top-left) --- */}
          <g transform="translate(99,84)">
            <g>
              <animateTransform attributeName="transform" type="rotate"
                from="0 45 35" to="-360 45 35" dur="28s" repeatCount="indefinite" />
              <rect width="90" height="70" rx="16" fill="#ffffff"
                style={{ filter: "drop-shadow(0 4px 10px rgba(0,0,0,0.12))" }} />
              <rect x="26" y="42" width="8" height="16" rx="2" fill="#1e88a8" opacity="0.5" />
              <rect x="38" y="32" width="8" height="26" rx="2" fill="#1e88a8" opacity="0.75" />
              <rect x="50" y="22" width="8" height="36" rx="2" fill="#1e88a8" />
              <circle cx="80" cy="10" r="11" fill="#06283a" />
              <path d="M75,10 l3.5,3.5 l6,-6.5" stroke="#ffffff" strokeWidth="2"
                fill="none" strokeLinecap="round" strokeLinejoin="round" />
            </g>
          </g>
        </g>

        {/* Central hub — static */}
        <circle cx="310" cy="285" r="54" fill="#21897e"
          style={{ filter: "drop-shadow(0 0 24px rgba(33,137,126,0.5))" }} />
        {/* Waveform bars in hub */}
        <g transform="translate(285,268)">
          {[0,10,20,30,40].map((x, i) => {
            const heights = [18,28,36,24,16]
            const h = heights[i]
            return (
              <rect
                key={i}
                x={x} y={(36 - h) / 2}
                width="6" height={h}
                rx="3" fill="#ffffff" opacity="0.9"
              >
                <animate attributeName="height"
                  values={`${h};${h * 1.5};${h}`}
                  dur={`${0.8 + i * 0.15}s`}
                  repeatCount="indefinite" />
                <animate attributeName="y"
                  values={`${(36-h)/2};${(36-h*1.5)/2};${(36-h)/2}`}
                  dur={`${0.8 + i * 0.15}s`}
                  repeatCount="indefinite" />
              </rect>
            )
          })}
        </g>
      </svg>
    </div>
  )
}
