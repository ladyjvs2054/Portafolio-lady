export default function BoxCycle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 240" className={`box-cycle h-auto ${className ?? ''}`} fill="none" aria-hidden="true">
      <circle className="box-ring" cx="120" cy="138" r="94" stroke="#d8ff3e" strokeOpacity="0.2" strokeWidth="1" strokeDasharray="3 12" />

      <g className="box-send">
        <g className="box-lid">
          <path d="M120 70 L182 108 L120 146 L58 108 Z" fill="#2a2a2a" stroke="#f2efe8" strokeOpacity="0.85" strokeWidth="2" strokeLinejoin="round" />
          <path d="M58 108 L120 146 L120 154 L58 116 Z" fill="#1c1c1c" stroke="#f2efe8" strokeOpacity="0.85" strokeWidth="2" strokeLinejoin="round" />
          <path d="M120 146 L182 108 L182 116 L120 154 Z" fill="#242424" stroke="#f2efe8" strokeOpacity="0.85" strokeWidth="2" strokeLinejoin="round" />
          <path d="M120 100 L132 108 L120 116 L108 108 Z" fill="#d8ff3e" opacity="0.9" />
        </g>

        <g className="box-interior">
          <path d="M62 108 L120 74 L120 100 L82 122 Z" fill="#0d0d0d" stroke="#f2efe8" strokeOpacity="0.1" strokeWidth="1" />
          <path d="M120 74 L178 108 L158 122 L120 100 Z" fill="#111111" stroke="#f2efe8" strokeOpacity="0.1" strokeWidth="1" />
          <path d="M120 100 L158 122 L120 144 L82 122 Z" fill="#151515" stroke="#f2efe8" strokeOpacity="0.12" strokeWidth="1" />
        </g>

        <g className="box-block-a"><rect x="92" y="118" width="28" height="24" rx="6" fill="#d8ff3e" /></g>
        <g className="box-block-b"><rect x="118" y="112" width="26" height="22" rx="6" fill="#8d77ff" /></g>
        <g className="box-block-c"><rect x="106" y="92" width="24" height="22" rx="6" fill="#ff765d" /></g>

        <path d="M62 108 L120 142 L120 204 L62 170 Z" fill="#161616" stroke="#f2efe8" strokeOpacity="0.85" strokeWidth="2" strokeLinejoin="round" />
        <path d="M120 142 L178 108 L178 170 L120 204 Z" fill="#1f1f1f" stroke="#f2efe8" strokeOpacity="0.85" strokeWidth="2" strokeLinejoin="round" />
        <path d="M120 142 V204" stroke="#f2efe8" strokeOpacity="0.3" strokeWidth="1.5" />

        <g className="box-label">
          <g transform="translate(149 152) rotate(-30)">
            <rect x="-17" y="-13" width="34" height="26" rx="3" fill="#f2efe8" />
            <rect x="-11" y="-7" width="22" height="3" rx="1.5" fill="#101010" />
            <rect x="-11" y="0" width="15" height="3" rx="1.5" fill="#101010" />
            <rect x="-11" y="5" width="7" height="5" rx="1" fill="#d8ff3e" />
          </g>
        </g>
      </g>

      <g className="box-lines" stroke="#d8ff3e" strokeWidth="3" strokeLinecap="round">
        <path d="M198 118 H236" />
        <path d="M204 134 H232" />
        <path d="M196 150 H224" />
      </g>

      <path className="box-spark" d="M206 72 L210 82 L220 86 L210 90 L206 100 L202 90 L192 86 L202 82 Z" fill="#d8ff3e" />
    </svg>
  )
}
