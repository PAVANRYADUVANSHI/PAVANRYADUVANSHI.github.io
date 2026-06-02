export default function PRYLogo({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="navyBg" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0a0f1e"/>
          <stop offset="100%" stopColor="#0d1530"/>
        </linearGradient>
        {/* Gold metallic gradient — matches the shiny gold in the reference */}
        <linearGradient id="goldMetal" x1="20" y1="10" x2="80" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#ffe082"/>
          <stop offset="25%"  stopColor="#ffd54f"/>
          <stop offset="50%"  stopColor="#ffb300"/>
          <stop offset="75%"  stopColor="#ffd54f"/>
          <stop offset="100%" stopColor="#ff8f00"/>
        </linearGradient>
        <filter id="goldGlow">
          <feGaussianBlur stdDeviation="1.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      {/* Dark navy background */}
      <rect width="100" height="100" rx="0" fill="url(#navyBg)"/>

      <g filter="url(#goldGlow)" fill="url(#goldMetal)">
        {/*
          PRY FUSED MONOGRAM — matching the reference:
          - P: tall left spine + bowl at top
          - R: shares P's spine, bowl overlaps P's bowl, diagonal leg sweeps right-down
          - Y: forks from top-right, stem merges with R's leg at bottom center
          All letters interlock as one single glyph
        */}

        {/* ── SHARED SPINE (P + R left vertical) ── */}
        {/* Tall left stroke — the backbone of the whole mark */}
        <path d="M28 12 C26 12 24 13 24 15 L24 88 C24 90 26 91 28 91 L32 91 C34 91 36 90 36 88 L36 15 C36 13 34 12 32 12 Z"/>

        {/* ── P BOWL (top, smaller — nested inside R bowl) ── */}
        <path d="M36 18 C36 18 58 18 60 28 C62 38 50 42 36 42 L36 38 C36 38 52 36 52 28 C52 20 36 22 36 22 Z"/>

        {/* ── R BOWL (larger, wraps around P bowl) ── */}
        <path d="M36 14 C36 14 68 14 70 30 C72 46 54 52 36 52 L36 48 C36 48 62 44 62 30 C62 16 36 18 36 18 Z"/>

        {/* ── R LEG — diagonal sweep from bowl bottom-right down ── */}
        {/* Curves elegantly like in the reference image */}
        <path d="M54 50 C56 50 58 51 60 54 L76 84 C77 86 76 88 74 88 L70 88 C68 88 67 87 66 85 L52 57 C50 54 51 50 54 50 Z"/>

        {/* ── Y LEFT ARM — from top right, angling down to center ── */}
        <path d="M72 14 C74 14 76 15 77 17 L64 52 C63 54 61 55 59 54 L57 52 C56 50 57 48 58 46 L70 17 C71 15 72 14 72 14 Z"/>

        {/* ── Y RIGHT ARM — short, top far right ── */}
        <path d="M84 14 C86 14 88 15 88 17 L88 19 C88 21 87 22 85 23 L72 42 C70 44 68 43 67 41 L66 39 C65 37 66 35 68 34 L82 16 C83 15 84 14 84 14 Z"/>

        {/* ── Y STEM — straight down from fork point ── */}
        <path d="M62 54 C64 54 66 55 66 57 L66 88 C66 90 64 91 62 91 L58 91 C56 91 54 90 54 88 L54 57 C54 55 56 54 58 54 Z"/>
      </g>
    </svg>
  );
}
