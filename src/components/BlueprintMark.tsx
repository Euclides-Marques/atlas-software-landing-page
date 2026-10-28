/**
 * "Fig. 01": o símbolo da Atlas desenhado como projeto técnico.
 * As formas foram redesenhadas em vetor a partir da geometria medida na logo original
 * (retas a ~60°); as linhas de construção prolongam essas retas até o vértice comum.
 * Puramente ilustrativo: o significado está na legenda (figcaption) da seção Hero.
 */
export function BlueprintMark() {
  return (
    <svg
      viewBox="-70 -110 740 650"
      className="blueprint-mark h-auto w-full"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="bp-silver" x1="0" y1="0" x2="0.35" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#b6bfd1" />
        </linearGradient>
        <linearGradient id="bp-blue" x1="0.2" y1="0" x2="0.6" y2="1">
          <stop offset="0" stopColor="#2fb6ff" />
          <stop offset="0.35" stopColor="#1670ec" />
          <stop offset="1" stopColor="#0a47c9" />
        </linearGradient>
        <linearGradient id="bp-blade" x1="1" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#2a9bff" />
          <stop offset="1" stopColor="#0b3fc2" />
        </linearGradient>
        <linearGradient id="bp-block" x1="0" y1="0" x2="0.3" y2="1">
          <stop offset="0" stopColor="#f3f5f9" />
          <stop offset="1" stopColor="#a7b0c3" />
        </linearGradient>
      </defs>

      {/* Linhas de construção */}
      <g className="bp-construction" fill="none" stroke="#7cc4ff" strokeWidth="1.25">
        <line x1="-60" y1="444" x2="660" y2="444" pathLength={1} />
        <line x1="-60" y1="8" x2="660" y2="8" pathLength={1} strokeOpacity="0.45" />
        {/* Prolongamentos das arestas externas até o vértice */}
        <line x1="2" y1="468" x2="318" y2="-62" pathLength={1} />
        <line x1="313" y1="-62" x2="607" y2="490" pathLength={1} />
        {/* Eixo de simetria */}
        <line x1="315" y1="-96" x2="315" y2="510" pathLength={1} strokeDasharray="6 8" strokeOpacity="0.5" />
        {/* Prolongamento da curva da lâmina */}
        <path d="M-40 520 C 40 400 170 290 330 262 C 420 246 520 250 640 270" pathLength={1} strokeDasharray="3 7" strokeOpacity="0.55" />
      </g>

      {/* Cotas e anotações */}
      <g className="bp-annotations" fill="#7cc4ff" stroke="none">
        <circle cx="315" cy="-58" r="4" fill="none" stroke="#7cc4ff" strokeWidth="1.25" />
        <text x="329" y="-64" className="bp-text">VÉRTICE</text>

        <path d="M 74 444 A 58 58 0 0 0 46 395" fill="none" stroke="#7cc4ff" strokeWidth="1.25" />
        <text x="84" y="420" className="bp-text">≈60°</text>

        <g stroke="#7cc4ff" strokeWidth="1.25">
          <line x1="18" y1="496" x2="576" y2="496" />
          <line x1="18" y1="486" x2="18" y2="506" />
          <line x1="576" y1="486" x2="576" y2="506" />
          <line x1="636" y1="8" x2="636" y2="444" />
          <line x1="626" y1="8" x2="646" y2="8" />
          <line x1="626" y1="444" x2="646" y2="444" />
        </g>
        <text x="270" y="526" className="bp-text">BASE</text>
        <text x="646" y="232" className="bp-text" transform="rotate(90 646 232)">ALTURA</text>
        <text x="-60" y="-80" className="bp-text">A-01 / SÍMBOLO</text>
      </g>

      {/* Símbolo */}
      <g className="bp-shapes">
        <path
          className="bp-shape"
          fill="url(#bp-silver)"
          d="M73 348 L271 16 Q275 8 285 8 L338 8 Q347 8 351 16 L402 118 L330 118 Z"
        />
        <path
          className="bp-shape"
          fill="url(#bp-blue)"
          d="M288 162 C305 128 335 104 372 100 C392 98 404 108 412 124 L576 432 Q582 444 568 444 L466 444 Q456 444 451 434 Z"
        />
        <path
          className="bp-shape"
          fill="url(#bp-blade)"
          d="M18 444 C88 350 160 286 330 262 C262 282 196 350 152 434 Q147 444 136 444 Z"
        />
        <path
          className="bp-shape"
          fill="url(#bp-block)"
          d="M276 344 Q272 336 282 336 L362 336 Q371 336 375 344 L426 444 L330 444 Z"
        />
      </g>
    </svg>
  )
}
