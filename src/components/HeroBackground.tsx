'use client';

import { TsParticles } from '@tsparticles/react';
import { loadFull } from 'tsparticles';

export default function HeroBackground({ includeReds = false }: { includeReds?: boolean } = {}) {
  const particlesOptions = {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800
        }
      },
      color: {
        value: '#3b82f6' // blue-500
      },
      opacity: {
        value: 0.25,
        random: true,
        anim: {
          enable: true,
          speed: 0.5,
          opacity_min: 0.1,
          sync: false
        }
      },
      size: {
        value: 3,
        random: true,
        anim: {
          enable: true,
          speed: 2,
          size_min: 0.1,
          sync: false
        }
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: '#3b82f6',
        opacity: 0.15,
        width: 1
      },
      move: {
        enable: true,
        speed: 2,
        direction: 'none',
        random: true,
        straight: false,
        out_mode: 'out',
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 600
        }
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
          distance: 100,
          duration: 0.4
        },
        push: {
          particles_nb: 4
        }
      }
    },
    retina_detect: true
  };

  return (
    <div
      className="absolute inset-0 z-0 pointer-effects-none"
      style={{ width: '100%', height: '100%', backgroundColor: 'rgba(59,130,246,0.05)' }}
    >
      <TsParticles
        id="tsparticles"
        options={particlesOptions}
      />
    </div>
  );
}