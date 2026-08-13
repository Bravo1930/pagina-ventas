'use client';

import { useEffect, useState } from 'react';

export default function AnimatedBackground() {
  const [orbs, setOrbs] = useState<Array<JSX.Element>>([]);

  useEffect(() => {
    const count = 20;
    const generated = Array.from({ length: count }, (_, i) => {
      // Size increased: 200‑400 px
      const size = 200 + Math.random() * 200; // 200‑400
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;
      const duration = 12 + Math.random() * 18; // 12‑30 s
      const delay = `${Math.random() * 5}s`; // 0‑5 s
      const isPrimary = i % 2 === 0; // alternate primary‑test / white
      // Use a fixed hex color for testing (green‑500)
      const bgColor = isPrimary ? '#22c55e' : 'rgba(255,255,255,0.2)';

      return (
        <div
          key={i}
          className="orb"
          style={{
            left,
            top,
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: bgColor,
            animationDelay: delay,
            animationDuration: `${duration}s`,
          }}
        />
      );
    });
    setOrbs(generated);
  }, []);

  return (
    <div
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ width: '100%', height: '100%' }}
    >
      {/* Keyframes – injected once */}
      <style>
        {`
          @keyframes float {
            0% {
              transform: translateY(0) translateX(0);
              opacity: 0;
            }
            50% {
              opacity: 0.4; /* max opacity increased */
            }
            100% {
              transform: translateY(-40px) translateX(40px);
              opacity: 0;
            }
          }
          .orb {
            position: absolute;
            border-radius: 50%;
            filter: blur(80px); /* stronger blur for premium look */
            animation: float ease-in-out infinite;
          }
        `}
      </style>

      {orbs}
    </div>
  );
}