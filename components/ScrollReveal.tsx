'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  animation?: 'fade-in-up' | 'slide-in-left' | 'slide-in-right' | 'zoom-in' | 'rotate-in' | 'bounce-in';
  delay?: number;
  className?: string;
}

export default function ScrollReveal({ 
  children, 
  animation = 'fade-in-up',
  delay = 0,
  className = ''
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal animate-${animation} ${className}`}
      style={{ 
        animationDelay: `${delay}ms`,
        opacity: 0,
      }}
    >
      {children}
    </div>
  );
}
