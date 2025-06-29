import React from 'react';
import { Users, Code, Trophy, Clock } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Users,
      value: '50,000+',
      label: 'Active Developers',
      description: 'Practicing daily'
    },
    {
      icon: Code,
      value: '500+',
      label: 'Java Problems',
      description: 'From real interviews'
    },
    {
      icon: Trophy,
      value: '95%',
      label: 'Success Rate',
      description: 'Land their dream job'
    },
    {
      icon: Clock,
      value: '2M+',
      label: 'Hours Practiced',
      description: 'Total coding time'
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl"></div>

      {/* Reduced max-width and padding for more compact layout */}
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Main Glass Container */}
        <div 
          className="stats-glass-container relative overflow-hidden rounded-3xl group transition-all duration-500 ease-out"
          style={{
            background: `
              linear-gradient(135deg, 
                rgba(255, 255, 255, 0.1) 0%, 
                rgba(255, 255, 255, 0.05) 50%, 
                rgba(255, 255, 255, 0.02) 100%
              )
            `,
            backdropFilter: 'blur(20px)',
            border: '2px solid rgba(255, 255, 255, 0.2)',
            boxShadow: `
              0 8px 32px 0 rgba(31, 38, 135, 0.37),
              inset 0 1px 0 rgba(255, 255, 255, 0.2),
              0 0 0 1px rgba(147, 51, 234, 0.1)
            `,
          }}
        >
          {/* Subtle shimmer effect overlay */}
          <div 
            className="absolute inset-0 opacity-30 pointer-events-none transition-opacity duration-500"
            style={{
              background: 'linear-gradient(45deg, transparent 30%, rgba(147, 51, 234, 0.1) 50%, transparent 70%)',
              backgroundSize: '200% 200%',
              animation: 'purple-shimmer 3s ease-in-out infinite',
            }}
          />

          {/* Inner content container */}
          <div className="relative px-6 sm:p-24 w-full z-10">
            <div className="text-center space-y-4 mb-16">
              <div className="inline-flex items-center px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-purple-300 text-sm font-medium mb-4">
                Our Impact
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white">
                Trusted by Developers
                <span className="block bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                  Worldwide
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of developers who have successfully landed their dream jobs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="stats-card text-center rounded-2xl p-8">
                  <div className="bg-gradient-to-br from-purple-500 to-indigo-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-xl font-semibold text-purple-300 mb-1">{stat.label}</div>
                  <div className="text-gray-400 text-sm">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;