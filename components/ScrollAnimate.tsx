'use client';

import { useEffect, useRef, useState } from 'react';

interface ScrollAnimateProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-in' | 'slide-in' | 'scale-in' | 'flip';
  delay?: number;
}

export default function ScrollAnimate({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0,
}: ScrollAnimateProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.disconnect();
        }
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
  }, [delay]);

  const animationClasses = {
    'fade-up': isVisible ? 'animate-fade-in-up' : 'opacity-0 translate-y-10',
    'fade-in': isVisible ? 'animate-fade-in' : 'opacity-0',
    'slide-in': isVisible ? 'animate-slide-in' : 'opacity-0 -translate-x-10',
    'scale-in': isVisible ? 'animate-scale-in' : 'opacity-0 scale-75',
    'flip': isVisible ? 'animate-flip' : 'opacity-0',
  };

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${animationClasses[animation]} ${className}`}
    >
      {children}
    </div>
  );
}
