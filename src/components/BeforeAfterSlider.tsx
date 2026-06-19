import React, { useState, useRef, useCallback } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const getPosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  }, []);

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (isDragging) getPosition(e.clientX);
  }, [isDragging, getPosition]);
  const handleMouseUp = () => setIsDragging(false);
  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    getPosition(e.touches[0].clientX);
  }, [getPosition]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[360px] md:h-[460px] rounded-2xl overflow-hidden select-none cursor-ew-resize group"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    >
      {/* AFTER image — base layer */}
      <img
        src={afterImage}
        alt={afterLabel}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
        draggable={false}
      />

      {/* AFTER label */}
      <div className="absolute bottom-4 right-4 z-10 bg-brand-blue text-white text-[11px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg backdrop-blur-sm">
        {afterLabel}
      </div>

      {/* BEFORE clipped overlay */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          draggable={false}
        />
        {/* BEFORE label */}
        <div className="absolute bottom-4 left-4 z-10 bg-brand-dark/80 backdrop-blur-sm text-white text-[11px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-lg shadow-lg border border-white/10">
          {beforeLabel}
        </div>
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* White line */}
        <div className="absolute inset-y-0 left-0 w-[2px] bg-white shadow-[0_0_12px_rgba(255,255,255,0.6)]" />

        {/* Handle */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full shadow-2xl border-2 border-white flex items-center justify-center gap-1 transition-transform duration-150 pointer-events-auto cursor-ew-resize ${
            isDragging ? 'scale-110 bg-brand-blue' : 'bg-white group-hover:scale-105'
          }`}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleMouseUp}
        >
          {/* Left arrow */}
          <svg className={`w-3 h-3 ${isDragging ? 'text-white' : 'text-brand-blue'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          {/* Right arrow */}
          <svg className={`w-3 h-3 ${isDragging ? 'text-white' : 'text-brand-blue'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>

        {/* Top + bottom decorative dots */}
        <div className="absolute top-3 left-0 -translate-x-1/2 w-2 h-2 rounded-full bg-white opacity-60" />
        <div className="absolute bottom-3 left-0 -translate-x-1/2 w-2 h-2 rounded-full bg-white opacity-60" />
      </div>

      {/* Drag percentage indicator */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="bg-black/50 backdrop-blur-sm text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/20">
          Drag to compare
        </div>
      </div>

      {/* Invisible full-area range input for mouse drag fallback */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={e => setSliderPosition(Number(e.target.value))}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-10"
        aria-label="Before and after comparison slider"
      />
    </div>
  );
};
export default BeforeAfterSlider;
