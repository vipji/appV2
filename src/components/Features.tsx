import React from 'react';
import { Code, Target, Clock, BarChart3, Users, Shield } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Features = () => {
  const { isDarkMode } = useTheme();

  const features = [
    {
      icon: Code,
      title: 'Real Java Problems',
      description: 'Practice with authentic Java interview questions from top tech companies like Google, Amazon, and Microsoft.',
      color: 'blue'
    },
    {
      icon: Target,
      title: 'Difficulty Levels',
      description: 'From beginner to expert level problems, structured to help you progress systematically.',
      color: 'green'
    },
    {
      icon: Clock,
      title: 'Timed Challenges',
      description: 'Simulate real interview conditions with time limits and pressure to improve your performance.',
      color: 'orange'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Track your progress, identify weak areas, and see detailed statistics on your coding journey.',
      color: 'purple'
    },
    {
      icon: Users,
      title: 'Mock Interviews',
      description: 'Practice with AI-powered mock interviews that simulate real technical interview scenarios.',
      color: 'indigo'
    },
    {
      icon: Shield,
      title: 'Secure Environment',
      description: 'Practice in a safe, sandboxed environment with enterprise-grade security and privacy.',
      color: 'teal'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-600',
      green: 'from-green-500 to-green-600',
      orange: 'from-orange-500 to-orange-600',
      purple: 'from-purple-500 to-purple-600',
      indigo: 'from-indigo-500 to-indigo-600',
      teal: 'from-teal-500 to-teal-600'
    };
    return colorMap[color as keyof typeof colorMap] || 'from-gray-500 to-gray-600';
  };

  return (
    <section id="features" className={`py-24 relative overflow-hidden ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      {/* Background decorative elements */}
      <div className={`absolute inset-0 ${isDarkMode 
        ? 'bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-green-500/20 via-transparent to-transparent'
        : 'bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent'
      }`}></div>
      <div className={`absolute top-1/3 left-1/4 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? 'bg-purple-500/20' : 'bg-purple-500/10'}`}></div>
      <div className={`absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? 'bg-green-500/20' : 'bg-green-500/10'}`}></div>

      {/* Reduced max-width and padding for more compact layout */}
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Main Glass Container */}
        <div 
          className="features-glass-container relative overflow-hidden rounded-3xl group transition-all duration-500 ease-out"
          style={{
            background: isDarkMode 
              ? `
                radial-gradient(600px circle at 50% 50%, 
                  rgba(34, 197, 94, 0.15), 
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
                  rgba(34, 197, 94, 0.08), 
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
                0 0 0 1px rgba(34, 197, 94, 0.1)
              `
              : `
                0 8px 32px 0 rgba(0, 0, 0, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.8),
                0 0 0 1px rgba(34, 197, 94, 0.1)
              `,
          }}
        >
          {/* Subtle shimmer effect overlay */}
          <div 
            className="absolute inset-0 opacity-30 pointer-events-none transition-opacity duration-500"
            style={{
              background: 'linear-gradient(45deg, transparent 30%, rgba(34, 197, 94, 0.1) 50%, transparent 70%)',
              backgroundSize: '200% 200%',
              animation: 'green-shimmer 3s ease-in-out infinite',
            }}
          />

          {/* Inner content container */}
          <div className="relative px-6 sm:p-24 w-full z-10">
            <div className="text-center space-y-4 mb-16">
              <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 border ${
                isDarkMode 
                  ? 'bg-green-500/20 border-green-400/30 text-green-300'
                  : 'bg-green-500/10 border-green-400/20 text-green-600'
              }`}>
                Features
              </div>
              <h2 className={`text-4xl sm:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Everything You Need to
                <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Ace Your Interview
                </span>
              </h2>
              <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Comprehensive tools and resources designed to help you master Java interview coding
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="features-card p-8 rounded-2xl transition-all duration-300 group"
                  style={{
                    background: isDarkMode
                      ? `linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)`
                      : `linear-gradient(135deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.01) 100%)`,
                    backdropFilter: 'blur(10px)',
                    border: isDarkMode 
                      ? '1px solid rgba(255, 255, 255, 0.1)' 
                      : '1px solid rgba(0, 0, 0, 0.1)',
                    boxShadow: isDarkMode
                      ? '0 4px 16px 0 rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                      : '0 4px 16px 0 rgba(0, 0, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
                  }}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${getColorClasses(feature.color)} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {feature.title}
                  </h3>
                  <p className={`leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;