import React from 'react';
import { ChevronRight, Clock, Users, Star } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Problems = () => {
  const { isDarkMode } = useTheme();

  const problemCategories = [
    {
      title: 'Arrays & Strings',
      problems: 124,
      difficulty: 'Easy to Hard',
      popular: true,
      description: 'Master fundamental data structures and string manipulation'
    },
    {
      title: 'Linked Lists',
      problems: 67,
      difficulty: 'Medium to Hard',
      popular: false,
      description: 'Practice pointer manipulation and list operations'
    },
    {
      title: 'Trees & Graphs',
      problems: 89,
      difficulty: 'Medium to Hard',
      popular: true,
      description: 'Explore tree traversals and graph algorithms'
    },
    {
      title: 'Dynamic Programming',
      problems: 78,
      difficulty: 'Hard',
      popular: false,
      description: 'Solve complex optimization problems step by step'
    },
    {
      title: 'System Design',
      problems: 45,
      difficulty: 'Hard',
      popular: true,
      description: 'Design scalable systems and architectures'
    },
    {
      title: 'Concurrency',
      problems: 34,
      difficulty: 'Medium to Hard',
      popular: false,
      description: 'Master Java threading and concurrent programming'
    }
  ];

  const recentProblems = [
    {
      title: 'Two Sum',
      difficulty: 'Easy',
      acceptance: '49.2%',
      companies: ['Google', 'Amazon', 'Microsoft']
    },
    {
      title: 'Binary Tree Inorder Traversal',
      difficulty: 'Medium',
      acceptance: '74.3%',
      companies: ['Facebook', 'Apple', 'Netflix']
    },
    {
      title: 'LRU Cache',
      difficulty: 'Hard',
      acceptance: '41.8%',
      companies: ['Google', 'Uber', 'LinkedIn']
    }
  ];

  return (
    <section id="problems" className={`py-24 relative overflow-hidden ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      {/* Background decorative elements */}
      <div className={`absolute inset-0 ${isDarkMode 
        ? 'bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent'
        : 'bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent'
      }`}></div>
      <div className={`absolute top-1/4 right-1/3 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? 'bg-orange-500/20' : 'bg-orange-500/10'}`}></div>
      <div className={`absolute bottom-1/4 left-1/3 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? 'bg-red-500/20' : 'bg-red-500/10'}`}></div>

      {/* Reduced max-width and padding for more compact layout */}
      <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Main Glass Container */}
        <div 
          className="problems-glass-container relative overflow-hidden rounded-3xl group transition-all duration-500 ease-out"
          style={{
            background: isDarkMode 
              ? `
                radial-gradient(600px circle at 50% 50%, 
                  rgba(249, 115, 22, 0.15), 
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
                  rgba(249, 115, 22, 0.08), 
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
                0 0 0 1px rgba(249, 115, 22, 0.1)
              `
              : `
                0 8px 32px 0 rgba(0, 0, 0, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.8),
                0 0 0 1px rgba(249, 115, 22, 0.1)
              `,
          }}
        >
          {/* Subtle shimmer effect overlay */}
          <div 
            className="absolute inset-0 opacity-30 pointer-events-none transition-opacity duration-500"
            style={{
              background: 'linear-gradient(45deg, transparent 30%, rgba(249, 115, 22, 0.1) 50%, transparent 70%)',
              backgroundSize: '200% 200%',
              animation: 'orange-shimmer 3s ease-in-out infinite',
            }}
          />

          {/* Inner content container */}
          <div className="relative px-6 sm:p-24 w-full z-10">
            <div className="text-center space-y-4 mb-16">
              <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-4 border ${
                isDarkMode 
                  ? 'bg-orange-500/20 border-orange-400/30 text-orange-300'
                  : 'bg-orange-500/10 border-orange-400/20 text-orange-600'
              }`}>
                Practice Problems
              </div>
              <h2 className={`text-4xl sm:text-5xl font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Practice with Real
                <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Interview Problems
                </span>
              </h2>
              <p className={`text-xl max-w-3xl mx-auto ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                Over 500+ carefully curated Java problems from actual technical interviews
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              <div className="lg:col-span-2">
                <h3 className={`text-2xl font-semibold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Problem Categories</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {problemCategories.map((category, index) => (
                    <div 
                      key={index}
                      className="problems-card p-6 rounded-xl transition-all duration-300 cursor-pointer group"
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
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <h4 className={`text-lg font-semibold transition-colors ${
                            isDarkMode 
                              ? 'text-white group-hover:text-orange-400' 
                              : 'text-gray-900 group-hover:text-orange-600'
                          }`}>
                            {category.title}
                          </h4>
                          {category.popular && (
                            <div className={`px-2 py-1 rounded text-xs font-medium border ${
                              isDarkMode 
                                ? 'bg-orange-500/20 text-orange-400 border-orange-400/30'
                                : 'bg-orange-500/10 text-orange-600 border-orange-400/20'
                            }`}>
                              Popular
                            </div>
                          )}
                        </div>
                        <ChevronRight className={`w-5 h-5 transition-colors ${
                          isDarkMode 
                            ? 'text-gray-400 group-hover:text-orange-400'
                            : 'text-gray-600 group-hover:text-orange-600'
                        }`} />
                      </div>
                      <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{category.description}</p>
                      <div className="flex items-center justify-between text-sm">
                        <span className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>{category.problems} problems</span>
                        <span className={`font-medium ${isDarkMode ? 'text-orange-400' : 'text-orange-600'}`}>{category.difficulty}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className={`text-2xl font-semibold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Trending Problems</h3>
                <div className="space-y-4">
                  {recentProblems.map((problem, index) => (
                    <div 
                      key={index}
                      className="problems-card p-6 rounded-xl transition-all duration-300 cursor-pointer"
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
                      <div className="flex items-start justify-between mb-3">
                        <h4 className={`font-semibold transition-colors ${
                          isDarkMode 
                            ? 'text-white hover:text-orange-400' 
                            : 'text-gray-900 hover:text-orange-600'
                        }`}>
                          {problem.title}
                        </h4>
                        <span className={`px-2 py-1 rounded text-xs font-medium border ${
                          problem.difficulty === 'Easy' 
                            ? isDarkMode 
                              ? 'bg-green-500/20 text-green-400 border-green-400/30'
                              : 'bg-green-500/10 text-green-600 border-green-400/20'
                            : problem.difficulty === 'Medium'
                            ? isDarkMode
                              ? 'bg-yellow-500/20 text-yellow-400 border-yellow-400/30'
                              : 'bg-yellow-500/10 text-yellow-600 border-yellow-400/20'
                            : isDarkMode
                              ? 'bg-red-500/20 text-red-400 border-red-400/30'
                              : 'bg-red-500/10 text-red-600 border-red-400/20'
                        }`}>
                          {problem.difficulty}
                        </span>
                      </div>
                      <div className={`flex items-center space-x-4 text-sm mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4" />
                          <span>{problem.acceptance}</span>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {problem.companies.slice(0, 2).map((company, idx) => (
                          <span key={idx} className={`px-2 py-1 rounded text-xs border ${
                            isDarkMode 
                              ? 'bg-gray-700/50 text-gray-300 border-gray-600/30'
                              : 'bg-gray-100/50 text-gray-700 border-gray-300/30'
                          }`}>
                            {company}
                          </span>
                        ))}
                        {problem.companies.length > 2 && (
                          <span className={`px-2 py-1 rounded text-xs border ${
                            isDarkMode 
                              ? 'bg-gray-700/50 text-gray-300 border-gray-600/30'
                              : 'bg-gray-100/50 text-gray-700 border-gray-300/30'
                          }`}>
                            +{problem.companies.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-orange-600 text-white px-8 py-4 rounded-xl hover:bg-orange-700 transition-colors text-lg font-medium shadow-lg">
                Browse All Problems
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problems;