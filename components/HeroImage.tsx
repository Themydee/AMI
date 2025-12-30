const HeroImage = () => {
  return (
    <div className="relative w-full h-[420px] flex items-center justify-center overflow-hidden">
      
      {/* Soft background glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-transparent" />

      {/* Main image */}
      <img
        src="/images/heroImg.png"
        alt="Market pricing data"
        className="relative z-10 w-full h-full object-contain scale-105"
      />

      {/* Floating price card */}
      <div className="absolute top-20 left-10 z-20 animate-float-slow">
        <div className="backdrop-blur-md bg-white/80 px-4 py-2 rounded-xl shadow-lg text-sm font-semibold">
          🌽 Maize <span className="ml-2 text-blue-600">₦820/kg</span>
        </div>
      </div>

      {/* Secondary floating tag */}
      <div className="absolute bottom-28 right-14 z-20 animate-float">
        <div className="backdrop-blur-md bg-white/80 px-4 py-2 rounded-xl shadow-lg text-sm font-semibold">
          🫘 Beans <span className="ml-2 text-green-600">₦1,200/kg</span>
        </div>
      </div>

      {/* Animated trend line */}
      <svg
        className="absolute bottom-16 right-8 w-40 h-24 opacity-60 z-10"
        viewBox="0 0 160 80"
        fill="none"
      >
        <path
          d="M5 65 L40 40 L75 50 L110 25 L150 30"
          stroke="#2563EB"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="300"
          strokeDashoffset="300"
          className="animate-draw"
        />
      </svg>
    </div>
  );
};

export default HeroImage;
