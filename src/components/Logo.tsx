import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  isDarkMode?: boolean;
}

const Logo: React.FC<LogoProps> = ({ size = 'md', showText = true, isDarkMode = true }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className="flex items-center space-x-2 select-none">
      {/* CC Logo with .dev */}
      <div className={`
        ${sizeClasses[size]} 
        bg-gradient-to-br from-purple-500 via-blue-500 to-purple-600 
        rounded-lg flex items-center justify-center shadow-lg
        relative overflow-hidden group transition-all duration-300
        hover:scale-110 hover:shadow-xl
      `}>
        {/* Animated background gradient */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-purple-400 via-blue-400 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            animation: 'gradient-shift 3s ease-in-out infinite',
          }}
        />
        
        {/* CC Text */}
        <div className="relative z-10 font-bold text-white text-xs sm:text-sm tracking-tight">
          CC
        </div>
        
        {/* Subtle shine effect */}
        <div 
          className="absolute inset-0 opacity-30 group-hover:opacity-60 transition-opacity duration-300 pointer-events-none"
          style={{
            background: 'linear-gradient(45deg, transparent 30%, rgba(255, 255, 255, 0.3) 50%, transparent 70%)',
            backgroundSize: '200% 200%',
            animation: 'blue-shimmer 2s ease-in-out infinite',
          }}
        />
      </div>
      
      {showText && (
        <div className="flex items-center space-x-1">
          <span className={`
            ${textSizeClasses[size]} font-bold tracking-tight
            ${isDarkMode ? 'text-white' : 'text-gray-900'}
            transition-colors duration-300
          `}>
            #1Developer
          </span>
          <span className={`
            ${size === 'sm' ? 'text-sm' : size === 'md' ? 'text-base' : 'text-lg'} 
            font-medium
            ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}
            transition-colors duration-300
          `}>
            .dev
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;