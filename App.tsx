
import React, { useState, useEffect } from 'react';
import StarField from './components/StarField';
import DownloadCard from './components/DownloadCard';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate a slight delay for aesthetic loading transition
    const timer = setTimeout(() => setIsLoaded(true), 500);
    
    // In a real scenario, this is where you'd fire your tracking pixels or API calls
    console.log('[Tracking] Traffic detected and logged at:', new Date().toISOString());
    console.log('[Tracking] Referrer:', document.referrer || 'Direct');
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center bg-[#0d1117] text-[#c9d1d9] overflow-hidden">
      {/* Dynamic Starfield Background */}
      <StarField />

      {/* Content Container */}
      <main className={`relative z-10 transition-all duration-1000 transform ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <DownloadCard />
        
        {/* Footer info for tracking trust */}
        <div className="mt-8 text-center text-xs text-[#8b949e] font-mono">
           <p className="opacity-50">Session ID: {Math.random().toString(36).substring(7).toUpperCase()}</p>
           <p className="mt-1 opacity-30">Verifying secure connection...</p>
        </div>
      </main>

      {/* GitHub Inspired Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 blur-[120px] pointer-events-none rounded-full" />
    </div>
  );
};

export default App;
