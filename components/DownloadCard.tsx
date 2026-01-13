
import React, { useState, useEffect } from 'react';

const DownloadCard: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        // Natural feeling incremental progress
        const increment = Math.random() * 15;
        return Math.min(prev + increment, 98);
      });
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-md px-4">
      <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8 shadow-2xl backdrop-blur-sm">
        <div className="flex flex-col items-center space-y-6">
          {/* GitHub-like Loading Spinner */}
          <div className="relative w-16 h-16">
            <svg 
              className="animate-spin text-[#1f6feb]" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              ></circle>
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          </div>

          <div className="text-center space-y-2">
            <h1 className="text-xl font-semibold text-[#f0f6fc]">
              Preparing your download...
            </h1>
            <p className="text-[#8b949e] text-sm">
              Securing connection and validating package hash.
            </p>
          </div>

          {/* Progress Bar Container */}
          <div className="w-full space-y-2">
            <div className="w-full bg-[#0d1117] border border-[#30363d] rounded-full h-2 overflow-hidden">
              <div 
                className="bg-[#238636] h-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="flex justify-between text-[10px] font-mono text-[#8b949e] uppercase tracking-wider">
              <span>Initializing</span>
              <span>{Math.floor(progress)}%</span>
            </div>
          </div>

          <div className="w-full pt-4">
            <div className="bg-[#0d1117] border border-[#30363d] rounded-md p-3 font-mono text-xs text-[#7d8590]">
              <div className="flex space-x-2">
                <span className="text-[#3fb950]">$</span>
                <span className="text-[#c9d1d9]">fetching binary...</span>
              </div>
              <div className="mt-1 opacity-60">Status: Tracking active</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadCard;
