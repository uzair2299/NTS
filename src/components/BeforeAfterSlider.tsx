import React, { useState } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeImage,
  afterImage,
  beforeLabel = "Before",
  afterLabel = "After",
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value));
  };

  return (
    <div className="relative w-full h-[320px] md:h-[480px] rounded-2xl overflow-hidden select-none shadow-xl border border-slate-200">
      {/* After Image (Background) */}
      <img
        src={afterImage}
        alt="After project"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute bottom-4 right-4 bg-brand-blue text-white px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-md z-10">
        {afterLabel}
      </div>

      {/* Before Image (Overlay clipped by clip-path) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{
          clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)`,
        }}
      >
        <img
          src={beforeImage}
          alt="Before project"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-4 left-4 bg-brand-orange text-white px-3 py-1.5 rounded-lg text-xs font-bold uppercase tracking-wider shadow-md z-10">
          {beforeLabel}
        </div>
      </div>

      {/* Divider Line */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Slider Handle (Circle with Arrows) */}
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 bg-white rounded-full shadow-2xl border-2 border-brand-blue flex items-center justify-between px-2 cursor-ew-resize">
          <svg className="w-3.5 h-3.5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <svg className="w-3.5 h-3.5 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>

      {/* Transparent Input Range Overlay for dragging */}
      <input
        type="range"
        min="0"
        max="100"
        value={sliderPosition}
        onChange={handleSliderChange}
        className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30"
        aria-label="Before and after comparison slider"
      />
    </div>
  );
};
export default BeforeAfterSlider;
