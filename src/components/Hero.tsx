import React, { useState } from 'react';
import { Play, Code, ArrowRight, CheckCircle, Sparkles, Zap, Target } from 'lucide-react';
import CodeEditor from './CodeEditor';
import ProblemsModal from './ProblemsModal';
import { useTheme } from './ThemeProvider';
import { SparklesCore } from './ui/sparkles';

const Hero = () => {
  const [isCodeEditorOpen, setIsCodeEditorOpen] = useState(false);
  const [isProblemsModalOpen, setIsProblemsModalOpen] = useState(false);
  const { isDarkMode } = useTheme();

  return (
    <>
      <section className={`pt-20 pb-16 relative overflow-hidden ${isDarkMode ? 'bg-black' : 'bg-white'}`}>

        {/* Background decorative elements */}
        <div className={`absolute inset-0 ${isDarkMode 
          ? 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent'
          : 'bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent'
        }`}></div>
        <div className={`absolute top-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? 'bg-purple-500/20' : 'bg-purple-500/10'}`}></div>
        <div className={`absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? 'bg-blue-500/20' : 'bg-blue-500/10'}`}></div>
        
        {/* Sparkles Background */}
        <div className="absolute inset-0 w-full h-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={isDarkMode ? 100 : 60}
            className="w-full h-full"
            particleColor={isDarkMode ? "#FFFFFF" : "#6366f1"}
            speed={1}
          />
        </div>

        {/* Reduced max-width and padding for more compact layout */}
        <div className="max-w-6xl mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
          {/* Main Glass Container */}
          <div 
            className="hero-glass-container relative overflow-hidden rounded-3xl group transition-all duration-500 ease-out"
            style={{
              background: isDarkMode 
                ? `
                  radial-gradient(600px circle at 50% 50%, 
                    rgba(59, 130, 246, 0.15), 
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
                    rgba(59, 130, 246, 0.08), 
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
                  0 0 0 1px rgba(59, 130, 246, 0.1)
                `
                : `
                  0 8px 32px 0 rgba(0, 0, 0, 0.1),
                  inset 0 1px 0 rgba(255, 255, 255, 0.8),
                  0 0 0 1px rgba(59, 130, 246, 0.1)
                `,
            }}
          >
            {/* Subtle shimmer effect overlay */}
            <div 
              className="absolute inset-0 opacity-30 pointer-events-none transition-opacity duration-500"
              style={{
                background: 'linear-gradient(45deg, transparent 30%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)',
                backgroundSize: '200% 200%',
                animation: 'blue-shimmer 3s ease-in-out infinite',
              }}
            />

            {/* Inner content container */}
            <div className="relative px-6 sm:p-24 w-full z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <div className="space-y-6">
                    <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium border ${
                      isDarkMode 
                        ? 'bg-blue-500/20 border-blue-400/30 text-blue-300'
                        : 'bg-blue-500/10 border-blue-400/20 text-blue-600'
                    }`}>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Trusted by 50,000+ developers
                    </div>
                    
                    <div className="relative">
                      <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                        Master Java
                        <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent relative">
                          Interview Coding
                          {/* Sparkle decorations */}
                          <div className="absolute -top-2 -right-2">
                            <Sparkles className="w-6 h-6 text-blue-400 animate-pulse" />
                          </div>
                          <div className="absolute -bottom-2 left-1/4">
                            <Zap className="w-4 h-4 text-purple-400 animate-bounce" />
                          </div>
                        </span>
                      </h1>
                      
                      {/* Floating gradient lines */}
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-3/4">
                        <div className={`h-[2px] w-full blur-sm ${
                          isDarkMode 
                            ? 'bg-gradient-to-r from-transparent via-indigo-500 to-transparent'
                            : 'bg-gradient-to-r from-transparent via-indigo-400 to-transparent'
                        }`} />
                        <div className={`h-px w-full ${
                          isDarkMode 
                            ? 'bg-gradient-to-r from-transparent via-indigo-500 to-transparent'
                            : 'bg-gradient-to-r from-transparent via-indigo-400 to-transparent'
                        }`} />
                      </div>
                      
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-1/2">
                        <div className={`h-[3px] w-full blur-sm ${
                          isDarkMode 
                            ? 'bg-gradient-to-r from-transparent via-sky-500 to-transparent'
                            : 'bg-gradient-to-r from-transparent via-sky-400 to-transparent'
                        }`} />
                        <div className={`h-px w-full ${
                          isDarkMode 
                            ? 'bg-gradient-to-r from-transparent via-sky-500 to-transparent'
                            : 'bg-gradient-to-r from-transparent via-sky-400 to-transparent'
                        }`} />
                      </div>
                    </div>
                    
                    <p className={`text-xl leading-relaxed max-w-2xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      Practice with real Java interview problems from top tech companies. 
                      Build confidence, improve your skills, and land your dream job with our 
                      interactive coding platform.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <button 
                      onClick={() => setIsCodeEditorOpen(true)}
                      className="hero-button bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 text-lg font-semibold shadow-lg hover:shadow-xl"
                    >
                      <Play className="w-5 h-5" />
                      <span>Start Coding Now</span>
                      <Sparkles className="w-4 h-4" />
                    </button>
                    <button 
                      onClick={() => setIsProblemsModalOpen(true)}
                      className={`hero-button-secondary border-2 px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center space-x-3 text-lg font-semibold ${
                        isDarkMode 
                          ? 'border-gray-400 text-gray-300 hover:border-blue-400 hover:text-blue-300 hover:bg-blue-500/10'
                          : 'border-gray-600 text-gray-700 hover:border-blue-500 hover:text-blue-600 hover:bg-blue-500/5'
                      }`}
                    >
                      <span>View Problems</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>

                  <div className={`flex items-center space-x-8 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span>500+ Java Problems</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                      <span>Real Interview Experience</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                      <span>AI-Powered Feedback</span>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  {/* Enhanced Code Container with Sparkles */}
                  <div className="relative">
                    {/* Sparkles around the code container */}
                    <div className="absolute -top-8 -left-8 w-full h-full pointer-events-none">
                      <SparklesCore
                        background="transparent"
                        minSize={0.4}
                        maxSize={1}
                        particleDensity={50}
                        className="w-full h-full"
                        particleColor={isDarkMode ? "#60a5fa" : "#3b82f6"}
                        speed={0.5}
                      />
                    </div>
                    
                    <div className={`hero-code-container backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border transition-all duration-300 relative z-10 ${
                      isDarkMode 
                        ? 'bg-gray-800/80 border-gray-600/50'
                        : 'bg-white/80 border-gray-300/50'
                    }`}>
                      <div className={`px-6 py-4 flex items-center space-x-3 border-b ${
                        isDarkMode 
                          ? 'bg-gray-700/80 border-gray-600/50'
                          : 'bg-gray-100/80 border-gray-300/50'
                      }`}>
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        <div className={`ml-4 text-sm font-medium flex items-center space-x-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          <Code className="w-4 h-4" />
                          <span>#1 Developer.dev - Two Sum Problem</span>
                          <Target className="w-4 h-4 text-green-500" />
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="space-y-3 text-sm font-mono">
                          <div className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>// Find two numbers that add up to target</div>
                          <div className={isDarkMode ? 'text-blue-400' : 'text-blue-600'}>public class <span className={isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}>Solution</span> {'{'}</div>
                          <div className={`ml-4 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>public <span className={isDarkMode ? 'text-purple-400' : 'text-purple-600'}>int[]</span> <span className={isDarkMode ? 'text-green-400' : 'text-green-600'}>twoSum</span>(<span className={isDarkMode ? 'text-purple-400' : 'text-purple-600'}>int[]</span> nums, <span className={isDarkMode ? 'text-purple-400' : 'text-purple-600'}>int</span> target) {'{'}</div>
                          <div className={`ml-8 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>Map&lt;<span className={isDarkMode ? 'text-purple-400' : 'text-purple-600'}>Integer</span>, <span className={isDarkMode ? 'text-purple-400' : 'text-purple-600'}>Integer</span>&gt; map = <span className={isDarkMode ? 'text-blue-400' : 'text-blue-600'}>new</span> HashMap&lt;&gt;();</div>
                          <div className={`ml-8 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>for (<span className={isDarkMode ? 'text-purple-400' : 'text-purple-600'}>int</span> i = <span className={isDarkMode ? 'text-orange-400' : 'text-orange-600'}>0</span>; i &lt; nums.length; i++) {'{'}</div>
                          <div className={`ml-12 ${isDarkMode ? 'text-purple-400' : 'text-purple-600'}`}>int <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>complement</span> = target - nums[i];</div>
                          <div className={`ml-12 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>if (map.containsKey(complement)) {'{'}</div>
                          <div className={`ml-16 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>return <span className={isDarkMode ? 'text-blue-400' : 'text-blue-600'}>new</span> <span className={isDarkMode ? 'text-purple-400' : 'text-purple-600'}>int[]</span>{'{'}<span className={isDarkMode ? 'text-blue-400' : 'text-blue-600'}>map.get(complement)</span>, <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>i</span>{'}'};
                          </div>
                          <div className={`ml-12 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{'}'}</div>
                          <div className={`ml-12 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>map.put(nums[i], i);</div>
                          <div className={`ml-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{'}'}</div>
                          <div className={`ml-8 ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>return <span className={isDarkMode ? 'text-blue-400' : 'text-blue-600'}>new</span> <span className={isDarkMode ? 'text-purple-400' : 'text-purple-600'}>int[]</span>{'{'}{'}'};</div>
                          <div className={`ml-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>{'}'}</div>
                          <div className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>{'}'}</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Enhanced Success Badge */}
                    <div className="absolute -bottom-12 -right-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-xl shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                      <div className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5" />
                        <span className="font-semibold">Tests Passed</span>
                        <Sparkles className="w-4 h-4" />
                      </div>
                    </div>
                    
                    {/* Floating Achievement Badges */}
                    <div className="absolute -top-6 -right-6 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-lg animate-bounce">
                      <div className="flex items-center space-x-1">
                        <Zap className="w-4 h-4" />
                        <span className="text-sm font-medium">Fast</span>
                      </div>
                    </div>
                    
                    <div className="absolute -left-6 top-1/2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full shadow-lg animate-pulse">
                      <div className="flex items-center space-x-1">
                        <Target className="w-4 h-4" />
                        <span className="text-sm font-medium">Optimal</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Editor Modal */}
      <CodeEditor
        isOpen={isCodeEditorOpen}
        onClose={() => setIsCodeEditorOpen(false)}
      />

      {/* Problems Modal */}
      <ProblemsModal
        isOpen={isProblemsModalOpen}
        onClose={() => setIsProblemsModalOpen(false)}
      />
    </>
  );
};

export default Hero;