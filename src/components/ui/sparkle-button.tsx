import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

interface SparkleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const SparkleButton: React.FC<SparkleButtonProps> = ({ 
  children, 
  className = '', 
  ...props 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`
        relative overflow-hidden font-medium text-sm
        bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600
        hover:from-violet-700 hover:via-purple-700 hover:to-indigo-700
        text-white shadow-md hover:shadow-lg
        transition-all duration-300 transform hover:scale-105 active:scale-95
        border border-violet-500/20
        flex items-center justify-center
        ${className}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      {/* Sparkle Background Effect */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated sparkles */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className={`
              absolute w-1 h-1 bg-white rounded-full opacity-0
              ${isHovered ? 'animate-sparkle' : ''}
            `}
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + (i % 2) * 40}%`,
              animationDelay: `${i * 0.2}s`,
              animationDuration: '1.5s',
            }}
          />
        ))}
        
        {/* Gradient overlay */}
        <div 
          className={`
            absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
            transform -skew-x-12 transition-transform duration-700
            ${isHovered ? 'translate-x-full' : '-translate-x-full'}
          `}
        />
      </div>

      {/* Button Content */}
      <div className="relative z-10 flex items-center space-x-2">
        <Sparkles className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'rotate-12 scale-110' : ''}`} />
        <span>{children}</span>
      </div>

      {/* Glow effect */}
      <div 
        className={`
          absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600
          blur-lg opacity-0 transition-opacity duration-300 -z-10
          ${isHovered ? 'opacity-30' : ''}
        `}
        style={{ borderRadius: 'inherit' }}
      />
    </button>
  );
};

export default SparkleButton;