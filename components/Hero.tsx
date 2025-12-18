'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = 600;

    // Subtle molecule particle system
    const particles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
    }> = [];

    for (let i = 0; i < 20; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections and particles
      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(102, 153, 51, ${0.15 - distance / 800})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });

        // Update position
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > canvas.width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > canvas.height) p1.vy *= -1;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(102, 153, 51, 0.4)';
        ctx.fill();
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 600;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative w-full min-h-[600px] overflow-hidden bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600 dark:from-gray-900 dark:via-primary-900 dark:to-gray-800 transition-colors duration-300">
      {/* Animated Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-40"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-transparent to-accent-500/10" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8 animate-slide-up">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-accent-500" />
              <div className="w-2 h-2 rounded-full bg-accent-400" />
              <div className="w-2 h-2 rounded-full bg-accent-300" />
            </div>
            <span className="text-white font-medium text-sm">102+ Chemistry Tools</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-6 leading-tight animate-zoom-in">
            <span className="block text-white drop-shadow-lg">Chemical Calculators</span>
            <span className="block text-accent-500 drop-shadow-lg mt-2 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
              Precision Tools
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed animate-slide-up drop-shadow-md">
            Advanced chemistry tools for <span className="text-accent-400 font-semibold">stoichiometry</span>, 
            <span className="text-accent-400 font-semibold"> solutions</span>, 
            <span className="text-accent-400 font-semibold"> thermodynamics</span>, and molecular calculations
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <a
              href="#calculators"
              className="group relative inline-flex items-center gap-3 bg-accent-500 hover:bg-accent-400 text-primary-900 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-2xl shadow-accent-500/30 hover:shadow-accent-400/50 hover:scale-105 transform"
            >
              <span>Explore Calculators</span>
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all border-2 border-white/30 hover:border-white/50"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>How It Works</span>
            </a>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-accent-400/50 transition-all">
              <div className="text-4xl sm:text-5xl font-bold text-accent-400 mb-2">102+</div>
              <div className="text-sm sm:text-base text-white/90 font-medium">Chemistry Tools</div>
            </div>
            <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-accent-400/50 transition-all">
              <div className="text-4xl sm:text-5xl font-bold text-accent-400 mb-2">10</div>
              <div className="text-sm sm:text-base text-white/90 font-medium">Topic Categories</div>
            </div>
            <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-accent-400/50 transition-all">
              <div className="text-4xl sm:text-5xl font-bold text-accent-400 mb-2">100%</div>
              <div className="text-sm sm:text-base text-white/90 font-medium">Free & Accurate</div>
            </div>
            <div className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 hover:bg-white/15 hover:border-accent-400/50 transition-all">
              <div className="text-4xl sm:text-5xl font-bold text-accent-400 mb-2">24/7</div>
              <div className="text-sm sm:text-base text-white/90 font-medium">Instant Access</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white dark:fill-gray-900 transition-colors"></path>
        </svg>
      </div>
    </section>
  );
}
