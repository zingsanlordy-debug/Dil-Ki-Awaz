import React, { useMemo } from 'react';

export const ConfettiSparkles: React.FC = () => {
  // Generate soft pastel floating elements (hearts, rose petals, soft sparkles)
  const particles = useMemo(() => {
    return Array.from({ length: 32 }).map((_, i) => ({
      id: i,
      left: `${(i * 3.1) % 100}%`,
      top: `${(i * 4.2) % 100}%`,
      size: 6 + (i % 6) * 2,
      delay: `${(i % 7) * 0.8}s`,
      duration: `${5 + (i % 5) * 1.8}s`,
      type: i % 3 === 0 ? 'heart' : i % 3 === 1 ? 'petal' : 'sparkle',
      color: i % 2 === 0 ? '#FFB5C5' : '#D94F70',
      opacity: 0.25 + (i % 4) * 0.1
    }));
  }, []);

  return (
    <div aria-hidden="true" className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Clean Pure White Background with Soft Light Pink Ambient Highlights */}
      <div className="absolute inset-0 bg-[#ffffff]" />

      {/* Soft light pink ambient blurred orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#fff0f3] rounded-full blur-3xl pointer-events-none opacity-80" />
      <div className="absolute top-1/3 -right-28 w-[450px] h-[450px] bg-[#ffe4e8] rounded-full blur-3xl pointer-events-none opacity-60" />
      <div className="absolute -bottom-28 left-1/4 w-[500px] h-[500px] bg-[#fff5f7] rounded-full blur-3xl pointer-events-none opacity-90" />

      {/* Floating Soft Pastel Elements */}
      {particles.map((p) => {
        if (p.type === 'heart') {
          return (
            <div
              key={p.id}
              className="absolute animate-float-pastel"
              style={{
                left: p.left,
                top: p.top,
                animationDelay: p.delay,
                animationDuration: p.duration,
                opacity: p.opacity
              }}
            >
              <svg width={p.size * 1.5} height={p.size * 1.5} viewBox="0 0 24 24" fill={p.color}>
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
              </svg>
            </div>
          );
        }

        if (p.type === 'petal') {
          return (
            <div
              key={p.id}
              className="absolute animate-float-pastel"
              style={{
                left: p.left,
                top: p.top,
                width: `${p.size}px`,
                height: `${p.size * 1.4}px`,
                backgroundColor: p.color,
                borderRadius: '50% 0 50% 50%',
                transform: 'rotate(45deg)',
                animationDelay: p.delay,
                animationDuration: p.duration,
                opacity: p.opacity * 0.8
              }}
            />
          );
        }

        return (
          <div
            key={p.id}
            className="absolute animate-pulse"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
              opacity: p.opacity
            }}
          >
            <svg width={p.size * 1.2} height={p.size * 1.2} viewBox="0 0 24 24" fill="#D94F70">
              <path d="M12 0L14 9L23 11L14 13L12 22L10 13L1 11L10 9Z" />
            </svg>
          </div>
        );
      })}
    </div>
  );
};
