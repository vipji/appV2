import React, { useState, useEffect } from 'react';
import { ShoppingCart, Moon, Sun, Home, BookOpen, Compass, Phone, FileText, GraduationCap, User } from 'lucide-react';
import Logo from './Logo';
import LoginModal from './LoginModal';
import { useTheme } from './ThemeProvider';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';
import SparkleButton from './ui/sparkle-button';

const Header = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [activeNavTab, setActiveNavTab] = useState('Home');
  const { isDarkMode, toggleTheme } = useTheme();

  // Update active navigation tab based on URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      const formattedTabName = hash.charAt(0).toUpperCase() + hash.slice(1);
      setActiveNavTab(formattedTabName);
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Navigation menu items for the header
  const navigationItems = [
    { name: 'Home', url: '#home', icon: Home, showOnHome: false },
    { name: 'Courses', url: '#courses', icon: BookOpen },
    { name: 'Explore', url: '#problems', icon: Compass },
    { name: 'Contact', url: '#contact', icon: Phone },
    { name: 'Articles', url: '#articles', icon: FileText },
    { name: 'Tutorials', url: '#tutorials', icon: GraduationCap },
    { name: 'About', url: '#about', icon: User }
  ].filter(item => item.showOnHome !== false);

  // Handle navigation item click
  const handleNavigationClick = (navItem: any) => {
    setActiveNavTab(navItem.name);
    
    if (navItem.url.startsWith('#')) {
      window.location.hash = navItem.url;
      const targetElement = document.querySelector(navItem.url);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = navItem.url;
    }
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
          {/* Left Section - Logo and Home Button */}
          <div className="flex items-center space-x-2 px-3">
            <Logo size="sm" isDarkMode={isDarkMode} />
            <button
              onClick={() => {
                window.location.hash = '#home';
                const targetElement = document.querySelector('#home');
                if (targetElement) {
                  targetElement.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className={cn(
                "p-2 rounded-lg transition-all duration-200",
                isDarkMode 
                  ? "text-gray-300 hover:text-white hover:bg-gray-700/30" 
                  : "text-gray-700 hover:text-gray-900 hover:bg-gray-200/50"
              )}
              title="Go to Home"
            >
              <Home className="w-4 h-4" />
            </button>
          </div>

          {/* Center Section - Navigation Items */}
          <div className="flex items-center gap-1">
            {navigationItems.map((navItem) => {
              const Icon = navItem.icon;
              const isActive = activeNavTab === navItem.name;

              return (
                <button
                  key={navItem.name}
                  onClick={() => handleNavigationClick(navItem)}
                  className={cn(
                    "relative cursor-pointer text-sm font-semibold px-4 py-2 rounded-full transition-all duration-300",
                    isDarkMode 
                      ? "text-white/80 hover:text-white" 
                      : "text-gray-700/80 hover:text-gray-900",
                    isActive && (isDarkMode ? "bg-white/10 text-white" : "bg-black/10 text-gray-900"),
                  )}
                >
                  <span className="hidden lg:inline">{navItem.name}</span>
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
      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </>
  );
};

export default Header;