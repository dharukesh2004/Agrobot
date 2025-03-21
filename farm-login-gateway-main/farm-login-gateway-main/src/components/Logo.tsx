
import React from 'react';

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-8 h-8 rounded-lg bg-farm-500 overflow-hidden flex items-center justify-center">
        <div className="absolute w-4 h-4 rounded-full bg-white/80 top-1 left-1"></div>
        <div className="absolute w-6 h-1 bg-farm-700 bottom-1.5 left-1"></div>
      </div>
      <span className="font-semibold text-xl text-farm-900">Farm Matrix</span>
    </div>
  );
};

export default Logo;
