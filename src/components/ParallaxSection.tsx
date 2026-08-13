'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ParallaxImage {
  src: string;
  alt: string;
  speed?: number; // optional scroll speed factor
}

const ParallaxSection: React.FC<{ images: ParallaxImage[] }> = ({ images }) => {
  useEffect(() => {
    // Create ScrollTrigger animations for each image
    images.forEach((img, index) => {
      const imgEl = document.getElementById(`parallax-img-${index}`);
      if (!imgEl) return;

      gsap.fromTo(
        imgEl,
        { scale: 1, opacity: 0.8 },
        {
          scale: 1.3,
          opacity: 1,
          scrollTrigger: {
            trigger: imgEl,
            start: 'top bottom+=100',
            end: 'bottom top',
            scrub: true,
            // optionally customize speed based on img.speed
          },
        }
      );
    });
  }, [images]);

  return (
    <section className="relative bg-[black] overflow-hidden py-20">
      <div className="container mx-auto px-4">
        {images.map((img, idx) => (
          <div
            key={idx}
            className="relative w-full mb-16"
            style={{ height: '400px' }}
          >
            <img
              id={`parallax-img-${idx}`}
              src={img.src}
              alt={img.alt}
              className="object-cover w-full h-full rounded-lg shadow-2xl transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ParallaxSection;