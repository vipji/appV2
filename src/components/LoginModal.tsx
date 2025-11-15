import React, { useState } from 'react';
import { X, Mail, Github, Chrome, Eye, EyeOff, ArrowRight, CheckCircle } from 'lucide-react';
import Logo from './Logo';
import { useTheme } from './ThemeProvider';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { isDarkMode } = useTheme();

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    onClose();
  };

  const handleSocialLogin = async (provider: string) => {
    setIsLoading(true);
    
    // Simulate social login
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Enhanced Backdrop */}
      <div 
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: `
            radial-gradient(ellipse at center, 
              ${isDarkMode ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.6)'} 0%, 
              ${isDarkMode ? 'rgba(0, 0, 0, 0.9)' : 'rgba(0, 0, 0, 0.8)'} 100%
            )
          `,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
        onClick={onClose}
      />

      {/* Modal Container */}
      <div 
        className={`
          relative w-full max-w-md mx-auto rounded-3xl overflow-hidden
          transform transition-all duration-500 ease-out
          ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
        `}
        style={{
          background: isDarkMode 
            ? `
              linear-gradient(135deg, 
                rgba(17, 24, 39, 0.95) 0%, 
                rgba(31, 41, 55, 0.95) 50%, 
                rgba(17, 24, 39, 0.95) 100%
              )
            `
            : `
              linear-gradient(135deg, 
                rgba(255, 255, 255, 0.95) 0%, 
                rgba(248, 250, 252, 0.95) 50%, 
                rgba(255, 255, 255, 0.95) 100%
              )
            `,
          backdropFilter: 'blur(25px)',
          WebkitBackdropFilter: 'blur(25px)',
          border: `2px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
          boxShadow: isDarkMode
            ? `
              0 25px 50px -12px rgba(0, 0, 0, 0.5),
              0 0 0 1px rgba(99, 102, 241, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.1)
            `
            : `
              0 25px 50px -12px rgba(0, 0, 0, 0.25),
              0 0 0 1px rgba(99, 102, 241, 0.1),
              inset 0 1px 0 rgba(255, 255, 255, 0.8)
            `,
        }}
      >
        {/* Animated Background Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-1/4 left-1/4 w-32 h-32 ${isDarkMode ? 'bg-purple-500/10' : 'bg-purple-500/5'} rounded-full blur-3xl`} />
          <div className={`absolute bottom-1/4 right-1/4 w-32 h-32 ${isDarkMode ? 'bg-blue-500/10' : 'bg-blue-500/5'} rounded-full blur-3xl`} />
        </div>

        {/* Header */}
        <div className="relative p-6 pb-4">
          <div className="flex items-center justify-between mb-6">
            <Logo size="md" isDarkMode={isDarkMode} />
            <button
              onClick={onClose}
              className={`
                p-2 rounded-xl transition-all duration-300
                ${isDarkMode 
                  ? 'text-gray-400 hover:text-white hover:bg-gray-700/30' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
                }
                hover:scale-110
              `}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="text-center mb-6">
            <h2 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              {isLogin ? 'Welcome Back!' : 'Join dev1x'}
            </h2>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {isLogin 
                ? 'Login seamlessly via Google, GitHub, or email to access 100+ courses'
                : 'Create your account to start your coding journey with us'
              }
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          {/* Social Login Buttons */}
          <div className="space-y-3 mb-6">
            <button
              onClick={() => handleSocialLogin('google')}
              disabled={isLoading}
              className={`
                w-full flex items-center justify-center space-x-3 py-3 px-4 rounded-xl
                transition-all duration-300 font-medium text-sm
                ${isDarkMode
                  ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30'
                  : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 hover:border-gray-300'
                }
                transform hover:scale-105 active:scale-95
                disabled:opacity-50 disabled:cursor-not-allowed
                shadow-lg hover:shadow-xl
              `}
            >
              <Chrome className="w-5 h-5 text-red-500" />
              <span>Continue with Google</span>
            </button>

            <button
              onClick={() => handleSocialLogin('github')}
              disabled={isLoading}
              className={`
                w-full flex items-center justify-center space-x-3 py-3 px-4 rounded-xl
                transition-all duration-300 font-medium text-sm
                ${isDarkMode
                  ? 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30'
                  : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-200 hover:border-gray-300'
                }
                transform hover:scale-105 active:scale-95
                disabled:opacity-50 disabled:cursor-not-allowed
                shadow-lg hover:shadow-xl
              `}
            >
              <Github className="w-5 h-5" />
              <span>Continue with GitHub</span>
            </button>
          </div>

          {/* Divider */}
          <div className="relative mb-6">
            <div className={`absolute inset-0 flex items-center`}>
              <div className={`w-full border-t ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`} />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className={`px-4 ${isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-600'}`}>
                Or continue with email
              </span>
            </div>
          </div>

          {/* Email Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {!isLogin && (
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`
                    w-full px-4 py-3 rounded-xl transition-all duration-300
                    ${isDarkMode
                      ? 'bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-purple-400 focus:bg-white/20'
                      : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:bg-gray-50'
                    }
                    focus:outline-none focus:ring-2 focus:ring-purple-500/20
                  `}
                  placeholder="Enter your full name"
                  required={!isLogin}
                />
              </div>
            )}

            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Email Address
              </label>
              <div className="relative">
                <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`
                    w-full pl-12 pr-4 py-3 rounded-xl transition-all duration-300
                    ${isDarkMode
                      ? 'bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-purple-400 focus:bg-white/20'
                      : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:bg-gray-50'
                    }
                    focus:outline-none focus:ring-2 focus:ring-purple-500/20
                  `}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            <div>
              <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={`
                    w-full px-4 pr-12 py-3 rounded-xl transition-all duration-300
                    ${isDarkMode
                      ? 'bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:border-purple-400 focus:bg-white/20'
                      : 'bg-white border border-gray-300 text-gray-900 placeholder-gray-500 focus:border-purple-500 focus:bg-gray-50'
                    }
                    focus:outline-none focus:ring-2 focus:ring-purple-500/20
                  `}
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute right-3 top-1/2 transform -translate-y-1/2 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-500 hover:text-gray-700'} transition-colors`}
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-purple-600 focus:ring-purple-500"
                  />
                  <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>Remember me</span>
                </label>
                <a href="#" className="text-purple-500 hover:text-purple-400 transition-colors">
                  Forgot password?
                </a>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className={`
                w-full bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-white
                py-3 px-4 rounded-xl font-semibold text-sm
                hover:from-purple-700 hover:via-blue-700 hover:to-purple-700
                transition-all duration-300 shadow-lg hover:shadow-xl
                transform hover:scale-105 active:scale-95
                disabled:opacity-50 disabled:cursor-not-allowed
                relative overflow-hidden group
                flex items-center justify-center space-x-2
              `}
              style={{
                backgroundSize: '200% 200%',
                animation: isLoading ? 'none' : 'gradient-shift 3s ease-in-out infinite',
              }}
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <span>{isLogin ? 'Sign In' : 'Create Account'}</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          {/* Features List for Signup */}
          {!isLogin && (
            <div className="mt-6 space-y-2">
              <p className={`text-sm font-medium ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                What you'll get:
              </p>
              <div className="space-y-1">
                {[
                  'Access to 100+ coding courses',
                  'Apply skills through real projects',
                  'Elevate your coding career',
                  'Sleek, user-friendly interface'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Toggle Login/Signup */}
          <div className="mt-6 text-center">
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="ml-1 text-purple-500 hover:text-purple-400 transition-colors font-medium"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;