import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ShoppingCart, Moon, Sun, Home, BookOpen, Compass, Phone, FileText, GraduationCap, ArrowLeft, User } from 'lucide-react';
import Logo from './Logo';
import LoginModal from './LoginModal';
import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import { Button } from './ui/moving-border';
import SparkleButton from './ui/sparkle-button';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');
  const [currentPage, setCurrentPage] = useState('home');
  const { isDarkMode, toggleTheme } = useTheme();
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Check current page based on URL hash
  useEffect(() => {
    const updateCurrentPage = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentPage(hash);
      setActiveTab(hash.charAt(0).toUpperCase() + hash.slice(1));
    };

    updateCurrentPage();
    window.addEventListener('hashchange', updateCurrentPage);
    return () => window.removeEventListener('hashchange', updateCurrentPage);
  }, []);

  // Check if we're on home page (no hash or #home)
  const isHomePage = currentPage === 'home';

  const sidebarMenuItems = [
    { icon: BookOpen, label: 'All Courses', href: '#courses', color: 'green' },
    { icon: Compass, label: 'Playground', href: '#problems', color: 'purple' },
    { icon: FileText, label: 'Articles', href: '#articles', color: 'orange' },
    { icon: GraduationCap, label: 'Tutorials', href: '#tutorials', color: 'pink' },
    { icon: Phone, label: 'Contact', href: '#contact', color: 'teal' },
    { icon: User, label: 'About', href: '#about', color: 'blue' },
  ];

  const getHoverColors = (color: string) => {
    const colorMap = {
      blue: 'hover:bg-blue-500/20 hover:border-blue-400/30 hover:text-blue-300',
      green: 'hover:bg-green-500/20 hover:border-green-400/30 hover:text-green-300',
      purple: 'hover:bg-purple-500/20 hover:border-purple-400/30 hover:text-purple-300',
      orange: 'hover:bg-orange-500/20 hover:border-orange-400/30 hover:text-orange-300',
      pink: 'hover:bg-pink-500/20 hover:border-pink-400/30 hover:text-pink-300',
      teal: 'hover:bg-teal-500/20 hover:border-teal-400/30 hover:text-teal-300',
    };
    return colorMap[color as keyof typeof colorMap] || 'hover:bg-gray-500/20 hover:border-gray-400/30 hover:text-gray-300';
  };

  const getIconHoverColor = (color: string) => {
    const iconColorMap = {
      blue: 'group-hover:text-blue-400',
      green: 'group-hover:text-green-400',
      purple: 'group-hover:text-purple-400',
      orange: 'group-hover:text-orange-400',
      pink: 'group-hover:text-pink-400',
      teal: 'group-hover:text-teal-400',
    };
    return iconColorMap[color as keyof typeof iconColorMap] || 'group-hover:text-gray-400';
  };

  // Navigation items for the tubelight navbar
  const navItems = [
    // Conditionally include Home button only when NOT on home page
    ...(isHomePage ? [] : [{ name: 'Home', url: '#home', icon: Home }]),
    { name: 'Courses', url: '#courses', icon: BookOpen },
    { name: 'Explore', url: '#problems', icon: Compass },
    { name: 'Contact', url: '#contact', icon: Phone },
    { name: 'Articles', url: '#articles', icon: FileText },
    { name: 'Tutorials', url: '#tutorials', icon: GraduationCap },
    { name: 'About', url: '#about', icon: User }
  ];

  const handleNavClick = (item: any) => {
    setActiveTab(item.name);
    
    // Handle navigation
    if (item.url.startsWith('#')) {
      window.location.hash = item.url;
      const element = document.querySelector(item.url);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = item.url;
    }
  };

  const handleBackToHome = () => {
    setActiveTab('Home');
    window.location.hash = '#home';
    const element = document.querySelector('#home');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Handle sidebar menu item click
  const handleSidebarItemClick = (href: string) => {
    // Navigate to the section
    if (href.startsWith('#')) {
      window.location.hash = href;
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // Close sidebar after navigation
    setIsSidebarOpen(false);
  };

  return (
    <>
      {/* Unified Tubelight Header */}
      <header className="fixed top-0 left-1/2 -translate-x-1/2 z-50 pt-6">
        <div 
          className="flex items-center gap-3 backdrop-blur-lg py-2 px-2 rounded-full shadow-lg border"
          style={{
            background: isDarkMode 
              ? 'rgba(0, 0, 0, 0.3)' 
              : 'rgba(255, 255, 255, 0.3)',
            borderColor: isDarkMode 
              ? 'rgba(255, 255, 255, 0.2)' 
              : 'rgba(0, 0, 0, 0.2)',
          }}
        >
          {/* Left Section - Hamburger + Logo (Only show hamburger if NOT on home page) */}
          <div className="flex items-center space-x-2 px-3">
            {!isHomePage && (
              <button
                className={`p-2 transition-all duration-200 rounded-lg ${
                  isDarkMode 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-700/30' 
                    : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200/50'
                }`}
                onClick={() => setIsSidebarOpen(true)}
                aria-label="Open sidebar menu"
              >
                <Menu className="w-4 h-4" />
              </button>
            )}
            <Logo size="sm" isDarkMode={isDarkMode} />
          </div>

          {/* Center Section - Navigation Items */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.name;

              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item)}
                  className={cn(
                    "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300",
                    isDarkMode 
                      ? "text-white/80 hover:text-white" 
                      : "text-gray-700/80 hover:text-gray-900",
                    isActive && (isDarkMode ? "bg-white/10 text-white" : "bg-black/10 text-gray-900"),
                  )}
                >
                  <span className="hidden lg:inline">{item.name}</span>
                  <span className="lg:hidden">
                    <Icon size={16} strokeWidth={2.5} />
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="lamp"
                      className={cn(
                        "absolute inset-0 w-full rounded-full -z-10",
                        isDarkMode ? "bg-white/5" : "bg-black/5"
                      )}
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    >
                      <div 
                        className={cn(
                          "absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-1 rounded-t-full",
                          isDarkMode ? "bg-white" : "bg-black"
                        )}
                      >
                        <div 
                          className={cn(
                            "absolute w-10 h-4 rounded-full blur-md -top-1 -left-2",
                            isDarkMode ? "bg-white/20" : "bg-black/20"
                          )} 
                        />
                        <div 
                          className={cn(
                            "absolute w-6 h-4 rounded-full blur-md -top-0.5",
                            isDarkMode ? "bg-white/20" : "bg-black/20"
                          )} 
                        />
                        <div 
                          className={cn(
                            "absolute w-3 h-3 rounded-full blur-sm top-0 left-1.5",
                            isDarkMode ? "bg-white/20" : "bg-black/20"
                          )} 
                        />
                      </div>
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Section - Controls */}
          <div className="flex items-center space-x-2 px-3">
            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleTheme}
              className={`relative p-2 transition-all duration-200 rounded-lg ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700/30' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200/50'
              }`}
              title="Toggle theme"
            >
              {isDarkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            {/* Cart Icon with Badge */}
            <button 
              className={`relative p-2 transition-all duration-200 rounded-lg ${
                isDarkMode 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-700/30' 
                  : 'text-gray-700 hover:text-gray-900 hover:bg-gray-200/50'
              }`}
              title="Shopping cart"
            >
              <ShoppingCart className="w-4 h-4" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs rounded-full w-3 h-3 flex items-center justify-center font-medium text-[8px] shadow-lg">
                0
              </span>
            </button>

            {/* Get Started Button with Sparkle Effect - Resized to match Login */}
            <SparkleButton
              onClick={() => setIsLoginModalOpen(true)}
              className="px-4 py-2 text-sm h-10 rounded-full"
            >
              Get Started
            </SparkleButton>

            {/* Login Button */}
            <button 
              onClick={() => setIsLoginModalOpen(true)}
              className={`
                px-4 py-2 h-10 rounded-full font-medium text-sm 
                transition-all duration-200 shadow-md hover:shadow-lg
                transform hover:scale-105 active:scale-95
                ${isDarkMode
                  ? 'bg-white text-gray-900 hover:bg-gray-100'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
                }
              `}
            >
              Login
            </button>
          </div>
        </div>
      </header>

      {/* Enhanced Moving Border Back Button - Only show when NOT on home page */}
      {!isHomePage && (
        <div className="fixed top-24 left-6 z-40">
          <Button
            onClick={handleBackToHome}
            borderRadius="1rem"
            containerClassName="h-12 w-20"
            className={`
              ${isDarkMode
                ? 'bg-black/80 border-white/20 text-white hover:bg-black/90'
                : 'bg-white/80 border-black/20 text-gray-900 hover:bg-white/90'
              }
              backdrop-blur-lg transition-all duration-300
            `}
            borderClassName={`
              ${isDarkMode
                ? 'bg-[radial-gradient(var(--blue-500)_40%,transparent_60%)]'
                : 'bg-[radial-gradient(var(--indigo-500)_40%,transparent_60%)]'
              }
            `}
            duration={2000}
            title="Back to Home"
          >
            <div className="flex items-center justify-center space-x-1">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Home</span>
            </div>
          </Button>
        </div>
      )}

      {/* Enhanced Hidden Sidebar Navigation - Only show when NOT on home page */}
      {!isHomePage && (
        <div
          ref={sidebarRef}
          className={`
            fixed top-20 left-6 w-80 z-40
            transform transition-all duration-500 ease-out rounded-3xl
            ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
          `}
          style={{
            height: 'calc(100vh - 8rem)', // Account for navbar and spacing
            marginTop: '1rem', // Space below the navbar
            background: isDarkMode
              ? `
                radial-gradient(ellipse at top left, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
                radial-gradient(ellipse at bottom right, rgba(147, 51, 234, 0.15) 0%, transparent 50%),
                linear-gradient(135deg, 
                  rgba(17, 24, 39, 0.98) 0%, 
                  rgba(31, 41, 55, 0.98) 30%,
                  rgba(17, 24, 39, 0.98) 70%,
                  rgba(31, 41, 55, 0.98) 100%
                )
              `
              : `
                radial-gradient(ellipse at top left, rgba(99, 102, 241, 0.1) 0%, transparent 50%),
                radial-gradient(ellipse at bottom right, rgba(147, 51, 234, 0.1) 0%, transparent 50%),
                linear-gradient(135deg, 
                  rgba(255, 255, 255, 0.98) 0%, 
                  rgba(248, 250, 252, 0.98) 30%,
                  rgba(255, 255, 255, 0.98) 70%,
                  rgba(248, 250, 252, 0.98) 100%
                )
              `,
            backdropFilter: 'blur(25px) saturate(200%)',
            WebkitBackdropFilter: 'blur(25px) saturate(200%)',
            border: `2px solid ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'}`,
            boxShadow: isDarkMode
              ? `
                0 25px 50px -12px rgba(0, 0, 0, 0.4),
                0 0 0 1px rgba(99, 102, 241, 0.1),
                inset 1px 0 0 rgba(255, 255, 255, 0.1)
              `
              : `
                0 25px 50px -12px rgba(0, 0, 0, 0.25),
                0 0 0 1px rgba(99, 102, 241, 0.1),
                inset 1px 0 0 rgba(255, 255, 255, 0.8)
              `,
          }}
        >
          {/* Enhanced Sidebar Header */}
          <div 
            className={`p-6 border-b relative overflow-hidden rounded-t-3xl ${
              isDarkMode ? 'border-gray-700/50' : 'border-gray-300/50'
            }`}
            style={{
              background: isDarkMode
                ? `linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)`
                : `linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%)`,
            }}
          >
            <div className="flex items-center justify-between relative z-10">
              <Logo size="md" isDarkMode={isDarkMode} />
              <button
                onClick={() => setIsSidebarOpen(false)}
                className={`p-2 transition-all duration-300 rounded-lg hover:scale-110 ${
                  isDarkMode 
                    ? 'text-gray-400 hover:text-white hover:bg-gray-700/30' 
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-200/50'
                }`}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Enhanced Sidebar Menu Items */}
          <div className="flex-1 overflow-y-auto py-6">
            <nav className="space-y-2 px-4">
              {sidebarMenuItems.map((item, index) => (
                <button
                  key={item.label}
                  onClick={() => handleSidebarItemClick(item.href)}
                  className={`
                    w-full flex items-center space-x-4 px-4 py-3.5 rounded-xl
                    transition-all duration-300 group
                    transform hover:translate-x-2 hover:scale-105
                    border border-transparent
                    ${isDarkMode ? getHoverColors(item.color) : getHoverColors(item.color).replace('text-', 'text-gray-700 hover:text-')}
                    relative overflow-hidden
                  `}
                  style={{ 
                    animationDelay: `${index * 40}ms`,
                    background: isDarkMode
                      ? `linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)`
                      : `linear-gradient(135deg, rgba(0, 0, 0, 0.02) 0%, rgba(0, 0, 0, 0.01) 100%)`,
                    backdropFilter: 'blur(10px)',
                  }}
                >
                  <item.icon className={`w-5 h-5 transition-all duration-300 group-hover:scale-110 ${
                    isDarkMode 
                      ? `text-gray-400 ${getIconHoverColor(item.color)}` 
                      : `text-gray-600 ${getIconHoverColor(item.color)}`
                  }`} />
                  <span className={`font-medium text-sm group-hover:font-semibold transition-all duration-300 relative z-10 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {item.label}
                  </span>
                </button>
              ))}
            </nav>
          </div>

          {/* Enhanced Sidebar Footer */}
          <div 
            className={`p-6 border-t space-y-4 relative overflow-hidden rounded-b-3xl ${
              isDarkMode ? 'border-gray-700/50' : 'border-gray-300/50'
            }`}
            style={{
              background: isDarkMode
                ? `linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(147, 51, 234, 0.1) 100%)`
                : `linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%)`,
            }}
          >
            <div className="relative z-10">
              {/* Enhanced Dark Mode Toggle */}
              <div className={`flex items-center justify-between p-3 rounded-xl backdrop-blur-sm border ${
                isDarkMode 
                  ? 'bg-gray-800/50 border-gray-700/30' 
                  : 'bg-white/50 border-gray-300/30'
              }`}>
                <span className={`font-medium text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>Dark Mode</span>
                <button 
                  onClick={toggleTheme}
                  className={`
                    relative inline-flex h-6 w-11 items-center rounded-full transition-all duration-300
                    ${isDarkMode ? 'bg-gradient-to-r from-purple-600 to-blue-600' : 'bg-gray-300'}
                    hover:scale-110 hover:shadow-lg
                  `}
                >
                  <span
                    className={`
                      inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-300
                      ${isDarkMode ? 'translate-x-6' : 'translate-x-1'}
                      shadow-lg
                    `}
                  />
                </button>
              </div>

              {/* Enhanced Login Button */}
              <button 
                onClick={() => setIsLoginModalOpen(true)}
                className="
                  w-full bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-white 
                  px-6 py-3.5 rounded-xl font-semibold text-sm
                  hover:from-purple-700 hover:via-blue-700 hover:to-purple-700
                  transition-all duration-300 shadow-lg hover:shadow-xl
                  transform hover:scale-105 active:scale-95
                  relative overflow-hidden group
                "
                style={{
                  backgroundSize: '200% 200%',
                  animation: 'gradient-shift 3s ease-in-out infinite',
                }}
              >
                <span className="relative z-10">Login</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Sidebar Overlay - Only show when sidebar is open */}
      {isSidebarOpen && !isHomePage && (
        <div
          className="fixed inset-0 backdrop-blur-sm z-30 transition-all duration-500"
          style={{
            background: isDarkMode
              ? `radial-gradient(ellipse at center, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.8) 100%)`
              : `radial-gradient(ellipse at center, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.5) 100%)`,
          }}
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  );
};

export default Header;