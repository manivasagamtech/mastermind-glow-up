import React, { useEffect, useState } from 'react';
import logo from '@/assets/logo.jpg';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-animated-gradient flex items-center justify-center z-50">
      <div className="text-center text-white">
        <div className="mb-8">
          <img 
            src={logo} 
            alt="MasterMind Body Global" 
            className="w-24 h-24 rounded-full mx-auto mb-6 animate-pulse"
          />
          <h1 className="text-4xl font-bold mb-2">MasterMind Body Global</h1>
          <p className="text-xl text-white/80">Transform Your Mind • Body • Life</p>
        </div>
        
        <div className="w-64 mx-auto">
          <div className="bg-white/20 rounded-full h-2 overflow-hidden">
            <div 
              className="bg-white h-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-4 text-white/80">Loading your transformation journey...</p>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;