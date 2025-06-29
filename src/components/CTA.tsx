import React from 'react';
import { ArrowRight, Play, CheckCircle } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const CTA = () => {
  const { isDarkMode } = useTheme();

  return (
    <section className={`py-24 relative overflow-hidden ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      {/* Background decorative elements */}
      <div className={`absolute inset-0 ${isDarkMode 
        ? 'bg-[radial-gradient(ellipse_at_top_center,_var(--tw-gradient-stops))] from-pink-500/20 via-transparent to-transparent'
        : 'bg-[radial-gradient(ellipse_at_top_center,_var(--tw-gradient-stops))] from-pink-500/10 via-transparent to-transparent'
      }`}></div>
      <div className={`absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? 'bg-pink-500/20' : 'bg-pink-500/10'}`}></div>
      <div className={`absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? 'bg-rose-500/20' : 'bg-rose-500/10'}`}></div>

      {/* Reduced max-width and padding for more compact layout */}
      <div className="max-w-4xl mx-auto px-3 sm:px-4 lg:px-6 text-center">
        {/* Main Glass Container */}
        <div 
          className="cta-glass-container relative overflow-hidden rounded-3xl group transition-all duration-500 ease-out"
          style={{
            background: isDarkMode 
              ? `
                radial-gradient(600px circle at 50% 50%, 
                  rgba(236, 72, 153, 0.15), 
                  transparent 40%
                ),
                linear-gradient(135deg, 
                  rgba(255, 255, 255, 0.1) 0%, 
                  rgba(255, 255, 255, 0.05) 50%, 
                  rgba(255, 255, 255, 0.02) 100%
                )
              `
              : `
                radial-gradient(600px circle at 50% 50%, 
                  rgba(236, 72, 153, 0.08), 
                  transparent 40%
                ),
                linear-gradient(135deg, 
                  rgba(0, 0, 0, 0.05) 0%, 
                  rgba(0, 0, 0, 0.02) 50%, 
                  rgba(0, 0, 0, 0.01) 100%
                )
              `,
            backdropFilter: 'blur(20px)',
            border: isDarkMode 
              ? '2px solid rgba(255, 255, 255, 0.2)' 
              : '2px solid rgba(0, 0, 0, 0.1)',
            boxShadow: isDarkMode
              ? `
                0 8px 32px 0 rgba(31, 38, 135, 0.37),
                inset 0 1px 0 rgba(255, 255, 255, 0.2),
                0 0 0 1px rgba(236, 72, 153, 0.1)
              `
              : `
                0 8px 32px 0 rgba(0, 0, 0, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.8),
                0 0 0 1px rgba(236, 72, 153, 0.1)
              `,
          }}
        >
          {/* Subtle shimmer effect overlay */}
          <div 
            className="absolute inset-0 opacity-30 pointer-events-none transition-opacity duration-500"
            style={{
              background: 'linear-gradient(45deg, transparent 30%, rgba(236, 72, 153, 0.1) 50%, transparent 70%)',
              backgroundSize: '200% 200%',
              animation: 'pink-shimmer 3s ease-in-out infinite',
            }}
          />

          {/* Inner content container */}
          <div className="relative px-6 sm:p-24 w-full z-10">
            <div className="space-y-8">
              <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 border ${
                isDarkMode 
                  ? 'bg-pink-500/20 border-pink-400/30 text-pink-300'
                  : 'bg-pink-500/10 border-pink-400/20 text-pink-600'
              }`}>
                <CheckCircle className="w-4 h-4 mr-2" />
                Join 50,000+ developers
              </div>
              
              <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Ready to Ace Your
                <span className="block bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                  Java Interview?
                </span>
              </h2>
              
              <p className={`text-xl max-w-2xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Start practicing today and take your Java skills to the next level. 
                Join thousands who have landed their dream jobs.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="cta-button bg-pink-600 text-white px-8 py-4 rounded-xl hover:bg-pink-700 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 text-lg font-semibold shadow-lg">
                  <Play className="w-5 h-5" />
                  <span>Start Free Trial</span>
                </button>
                <button className={`cta-button-secondary border-2 px-8 py-4 rounded-xl transition-all duration-300 flex items-center space-x-2 text-lg font-semibold ${
                  isDarkMode 
                    ? 'border-gray-400 text-gray-300 hover:border-pink-400 hover:text-pink-300'
                    : 'border-gray-600 text-gray-700 hover:border-pink-500 hover:text-pink-600'
                }`}>
                  <span>View Pricing</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
              
              <div className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                No credit card required • 14-day free trial • Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;