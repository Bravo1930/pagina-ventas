'use client';

import { useEffect, useRef } from 'react';
import { animate } from 'animejs';

export default function HeroBackground({ includeReds = false }: { includeReds?: boolean } = {}) {
  console.log("HeroBackground renderizado");
  const containerRef = useRef<HTMLDivElement>(null);
  const orbCount = 30; // number of animated orbs

  useEffect(() => {
    if (!containerRef.current) return;

    // Create orb elements (divs) and append to the container
    const orbs: HTMLDivElement[] = [];
    for (let i = 0; i < orbCount; i++) {
      const orb = document.createElement('div');
      orb.className = 'hero-orb';

      // ---- Size (now much larger so we can see them) ----
      const size = 100 + Math.random() * 150; // 100‑250 px
      orb.style.width = `${size}px`;
      orb.style.height = `${size}px`;

      // ---- Position ----
      const left = `${Math.random() * 100}%`;
      const top = `${Math.random() * 100}%`;
      orb.style.left = left;
      orb.style.top = top;

      // ---- Colour ----
      // Base palette: primary orange/coral, white, deep purple (all with subtle opacity)
      const baseColors: string[] = [
        `hsla(var(--primary-h) var(--primary-s) var(--primary-l), 0.15)`, // primary orange/coral
        'rgba(255,255,255,0.1)', // white (slightly more subtle)
        'hsla(270, 60%, 15%, 0.15)', // deep purple
      ];
      // Optional extra colors (e.g., red) when includeReds is true
      const extraColors: string[] = includeReds
        ? ['rgba(220, 38, 38, 0.1)'] // #dc2626 with 0.1 opacity (more subtle)
        : [];
      const colors = [...baseColors, ...extraColors];
      const colorIndex = i % colors.length;
      const bg = colors[colorIndex];
      orb.style.backgroundColor = bg;

      // ---- Debug border (temporary) ----
      orb.style.border = '2px solid red';

      // ---- Shape ----
      orb.style.borderRadius = '50%';

      // Append to container
      containerRef.current.appendChild(orb);
      orbs.push(orb);
    }

    // Anime.js animation – each orb gets its own random motion
    orbs.forEach((orb, idx) => {
      animate(orb, {
        translateX: (Math.random() - 0.5) * 300,
        translateY: (Math.random() - 0.5) * 300,
        scale: [1, 1.3, 1],
        opacity: [0.15, 0.4, 0.15],
        duration: 8000 + Math.random() * 4000,
        delay: idx * 200,
        loop: true,
        direction: 'alternate',
        easing: 'easeInOutSine',
      });
    });

    // Cleanup on unmount
    return () => {
      orbs.forEach((o) => o.remove());
    };
  }, []); // run once

  // The container is absolute inside its parent (which should be relative)
  // - pointer-events:none lets clicks/touches pass through to the content above
  // - z-index: 0 places it above the parent's background but below its content
  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ width: '100%', height: '100%' }}
    />
  );
}