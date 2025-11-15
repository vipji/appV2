import React, { useState, useEffect } from 'react';
import { Home, BookOpen, Compass, Phone, FileText, GraduationCap, User, Moon, Sun, ShoppingCart } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { cn } from '../lib/utils';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState('home');
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const updateActiveTab = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setActiveTab(hash);
    };

    updateActiveTab();
    window.addEventListener('hashchange', updateActiveTab);
    return () => window.removeEventListener('hashchange', updateActiveTab);
  }, []);

  const navItems = [
    { id: 'home', icon: Home, label: 'Home', color: 'text-blue-400' },
    { id: 'courses', icon: BookOpen, label: 'Courses', color: 'text-green-400' },
    { id: 'problems', icon: Compass, label: 'Explore', color: 'text-purple-400' },
    { id: 'articles', icon: FileText, label: 'Articles', color: 'text-orange-400' },
    { id: 'tutorials', icon: GraduationCap, label: 'Tutorials', color: 'text-pink-400' },
    { id: 'contact', icon: Phone, label: 'Contact', color: 'text-teal-400' },
    { id: 'about', icon: User, label: 'About', color: 'text-indigo-400' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    window.location.hash = `#${id}`;
    const element = document.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 h-screen w-20 z-40',
        'flex flex-col items-center justify-between py-8',
        'border-r transition-colors duration-300',
        isDarkMode
          ? 'bg-gray-900/95 border-gray-800'
          : 'bg-white/95 border-gray-200'
      )}
      style={{
        backdropFilter: 'blur(10px)',
      }}
    >
      {/* Navigation Items */}
      <div className="flex flex-col items-center gap-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={cn(
                'relative w-12 h-12 rounded-lg transition-all duration-300',
                'flex items-center justify-center group',
                isActive
                  ? isDarkMode
                    ? 'bg-gradient-to-r from-blue-600/40 to-purple-600/40 text-white'
                    : 'bg-gradient-to-r from-blue-500/30 to-purple-500/30 text-gray-900'
                  : isDarkMode
                  ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
              )}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              title={item.label}
            >
              <Icon className="w-6 h-6" />
              
              {/* Tooltip */}
              <div className={cn(
                'absolute left-full ml-4 px-3 py-2 rounded-lg whitespace-nowrap text-sm font-medium',
                'opacity-0 group-hover:opacity-100 transition-opacity duration-200',
                'pointer-events-none',
                isDarkMode
                  ? 'bg-gray-800 text-gray-100 border border-gray-700'
                  : 'bg-gray-900 text-gray-100 border border-gray-800'
              )}>
                {item.label}
              </div>

              {/* Active indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -left-1 w-1 h-8 bg-gradient-to-b from-blue-500 to-purple-500 rounded-r-full"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>

      {/* Bottom Controls */}
      <div className="flex flex-col items-center gap-4">
        {/* Cart Icon */}
        <motion.button
          className={cn(
            'relative w-12 h-12 rounded-lg transition-all duration-300',
            'flex items-center justify-center group',
            isDarkMode
              ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
          )}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title="Shopping cart"
        >
          <ShoppingCart className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center font-medium text-[8px] shadow-lg">
            0
          </span>
          
          {/* Tooltip */}
          <div className={cn(
            'absolute left-full ml-4 px-3 py-2 rounded-lg whitespace-nowrap text-sm font-medium',
            'opacity-0 group-hover:opacity-100 transition-opacity duration-200',
            'pointer-events-none',
            isDarkMode
              ? 'bg-gray-800 text-gray-100 border border-gray-700'
              : 'bg-gray-900 text-gray-100 border border-gray-800'
          )}>
            Cart
          </div>
        </motion.button>

        {/* Dark Mode Toggle */}
        <motion.button
          onClick={toggleTheme}
          className={cn(
            'relative w-12 h-12 rounded-lg transition-all duration-300',
            'flex items-center justify-center group',
            isDarkMode
              ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
              : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'
          )}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title="Toggle theme"
        >
          {isDarkMode ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
          
          {/* Tooltip */}
          <div className={cn(
            'absolute left-full ml-4 px-3 py-2 rounded-lg whitespace-nowrap text-sm font-medium',
            'opacity-0 group-hover:opacity-100 transition-opacity duration-200',
            'pointer-events-none',
            isDarkMode
              ? 'bg-gray-800 text-gray-100 border border-gray-700'
              : 'bg-gray-900 text-gray-100 border border-gray-800'
          )}>
            {isDarkMode ? 'Light' : 'Dark'}
          </div>
        </motion.button>
      </div>
    </aside>
  );
};

export default Sidebar;
