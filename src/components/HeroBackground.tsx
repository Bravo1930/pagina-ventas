'use client';

import { Particles } from '@tsparticles/react';
import { useState, useEffect, useRef } from 'react';

export default function HeroBackground({ includeReds = false }: { includeReds?: boolean } = {}) {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const containerRef = useRef<HTMLDivElement>(null);

  // Update mouse position normalized (0-1)
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
     const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
      setMousePos({
        x: clientX / innerWidth,
        y: clientY / innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const particlesOptions = {
    particles: {
      number: {
        value: 180,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#3b82f6' // blue-500
      },
      opacity: {
        value: 0.35,
        random: true,
        anim: {
          enable: true,
          speed: 0.2,
          opacity_min: 0.07,
          opacity_max: 0.5,
          sync: false
        }
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: true,
          speed: 1.5,
          size_min: 0.8,
          size_max: 9,
          sync: false
        }
      },
      // Links between particles to create neural network feel
      links: {
        enable: true,
        distance: 220,
        color: '#3b82f6',
        opacity: 0.2,
        width: 1.2,
        // Optional: make links fade with distance
        shadow: {
          enable: true,
          color: '#60a5fa',
          blur: 6
        }
      },
      move: {
        enable: true,
        speed: 1.8,
        direction: 'none' as const,
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 600
        }
      },
      // Optional: add slight shape variance
      shape: {
        type: 'circle'
      }
    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: 'repulse'
        },
        onclick: {
          enable: true,
          mode: 'push'
        },
        resize: true
      },
      modes: {
        repulse: {
          distance: 150,
          duration: 0.4
        },
        push: {
          particles_nb: 5
        }
      }
    },
    retina_detect: true
  };

  // Calculate transform based on mouse position for subtle parallax
  const getTransform = () => {
    const { x, y } = mousePos;
    // Convert 0-1 range to -10 to 10 degrees for subtle tilt
    const rotateX = (y - 0.5) * 20; // -10 to 10
    const rotateY = (x - 0.5) * 20; // -10 to 10
    return `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-effects-none"
      style={{
        width: '100%',
        height: '100%',
        zIndex: 5,
        background: 'radial-gradient(circle at center, rgba(59,130,246,0.08) 0%, transparent 70%)',
        transform: getTransform(),
        transformStyle: 'preserve-3d'
      }}
    >
      <Particles
        id="tsparticles"
        options={particlesOptions}
      />
    </div>
  );
}
