import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 py-16">
      <div className="mx-auto max-w-3xl text-center">
        {/* Animated Character */}
        <div className="mx-auto w-[220px] sm:w-[260px] mb-8 float-slow">
          <svg
            viewBox="0 0 220 220"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Friendly doctor character"
            className="w-full h-auto"
          >
            {/* Head */}
            <circle cx="110" cy="70" r="38" fill="#FFE6CC" stroke="#E0C0A0" strokeWidth="2" />
            {/* Eyes */}
            <g className="blink">
              <ellipse cx="95" cy="68" rx="6" ry="6" fill="#222" />
              <ellipse cx="125" cy="68" rx="6" ry="6" fill="#222" />
            </g>
            {/* Smile */}
            <path d="M92 84 Q110 96 128 84" fill="none" stroke="#C026D3" strokeWidth="3" strokeLinecap="round" />
            {/* Hair */}
            <path d="M76 62 Q110 30 144 62" fill="#0EA5E9" fillOpacity="0.15" />

            {/* Body/Coat */}
            <rect x="72" y="108" width="76" height="78" rx="12" fill="#ffffff" stroke="#e5e7eb" />
            {/* Stethoscope */}
            <path d="M86 112 q-10 18 8 28 q18 10 36 0 q18-10 8-28" fill="none" stroke="#374151" strokeWidth="3" />
            <circle cx="110" cy="144" r="8" fill="#0ea5e9" />
            {/* Chest badge */}
            <rect x="128" y="120" width="22" height="16" rx="3" fill="#f3f4f6" stroke="#e5e7eb" />
            <path d="M134 124 h10" stroke="#ef4444" strokeWidth="2" />

            {/* Arms */}
            <path d="M72 128 q-18 12 -20 30" fill="none" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" />
            <path d="M148 128 q18 12 20 30" fill="none" stroke="#94a3b8" strokeWidth="6" strokeLinecap="round" />

            {/* Floating shadow */}
            <ellipse cx="110" cy="196" rx="46" ry="8" fill="#000" opacity="0.06" />

            {/* 404 Text */}
            <text x="110" y="205" textAnchor="middle" fill="#9ca3af" fontSize="14">404</text>
          </svg>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">Page not found</h1>
        <p className="text-base sm:text-lg text-foreground/70 mb-6">
          The page you’re looking for doesn’t exist or has moved.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-4 py-2 text-sm font-semibold hover:opacity-90 transition"
          >
            Go to Home
          </Link>
          <a
            href="tel:6305800108"
            className="inline-flex items-center justify-center rounded-md bg-red-600 text-white px-4 py-2 text-sm font-semibold hover:bg-red-700 transition"
          >
            24x7 Emergency
          </a>
        </div>
      </div>
    </div>
  );
}