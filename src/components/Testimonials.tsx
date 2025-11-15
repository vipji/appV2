import React, { useState, useRef } from 'react';
import { Star, Quote, Building2, Users, Trophy, Target } from 'lucide-react';
import { useTheme } from './ThemeProvider';

const Testimonials = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const { isDarkMode } = useTheme();

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      setMousePosition({ x, y });
    }
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  // Calculate subtle tilt based on mouse position
  const getTiltTransform = () => {
    if (!containerRef.current) return 'none';
    
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    // Calculate rotation values (limited to prevent excessive tilting)
    const rotateX = ((mousePosition.y - centerY) / centerY) * -2; // Max 2 degrees
    const rotateY = ((mousePosition.x - centerX) / centerX) * 2;   // Max 2 degrees
    
    // Only apply transform when mouse is actually over the element
    if (mousePosition.x === 0 && mousePosition.y === 0) {
      return 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
    }
    
    return `perspective(1000px) rotateX(${Math.max(-2, Math.min(2, rotateX))}deg) rotateY(${Math.max(-2, Math.min(2, rotateY))}deg)`;
  };

  const achievements = [
    {
      icon: Users,
      value: '50,000+',
      label: 'Active Developers',
      description: 'Practicing daily'
    },
    {
      icon: Building2,
      value: '500+',
      label: 'Companies',
      description: 'Hiring graduates'
    },
    {
      icon: Trophy,
      value: '95%',
      label: 'Success Rate',
      description: 'Land dream job'
    },
    {
      icon: Target,
      value: '2M+',
      label: 'Problems Solved',
      description: 'Challenges completed'
    }
  ];

  const graduates = [
    {
      name: 'Dipanshi Rawat',
      company: 'Netrin',
      role: 'Software Engineer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Yash Bankar',
      company: 'PTC',
      role: 'Research and Development',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Aman Kushwaha',
      company: 'UBS - Union Bank Of Switzerland',
      role: 'SDE',
      image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Ashish Dubey',
      company: 'Microsoft',
      role: 'Software Developer Intern',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Shritik Raj',
      company: 'Human Holdings',
      role: 'Data Scientist',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Avishkar Chavle',
      company: 'Kotak Life Insurance',
      role: 'SW Engineer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Nitesh Patel',
      company: 'Oracle',
      role: 'Software Engineer',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const graduatesColumn2 = [
    {
      name: 'Priyansh Upadhyay',
      company: 'BlackRock',
      role: 'SDE',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Sahil Saini',
      company: 'Sciforn Solutions',
      role: 'Software Developer',
      image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Aryan Gupta',
      company: 'Jio',
      role: 'Graduate Engineer Trainee',
      image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Rohan Kumar Sah',
      company: 'Bosch Global',
      role: 'Software Engineer',
      image: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Kousik Snai',
      company: 'Nagarro',
      role: 'Associate Software Developer',
      image: 'https://images.pexels.com/photos/1040882/pexels-photo-1040882.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Kanishk Raj',
      company: 'Principal Global Services',
      role: 'Trainee Engineer',
      image: 'https://images.pexels.com/photos/1040886/pexels-photo-1040886.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Mit Thakkar',
      company: 'Bitscape',
      role: 'PowerBI Developer',
      image: 'https://images.pexels.com/photos/1239293/pexels-photo-1239293.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  const graduatesColumn3 = [
    {
      name: 'Anuj Thakur',
      company: 'Scaler by InterviewBit',
      role: 'Data Analyst',
      image: 'https://images.pexels.com/photos/1239287/pexels-photo-1239287.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Ganesh Mishra',
      company: 'Niyogin Fintech',
      role: 'Intern',
      image: 'https://images.pexels.com/photos/1239289/pexels-photo-1239289.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Rishabh Sachdeva',
      company: 'Accenture',
      role: 'Software Developer',
      image: 'https://images.pexels.com/photos/1040884/pexels-photo-1040884.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Kumkum Singh',
      company: 'Paytm',
      role: 'Software Engineer',
      image: 'https://images.pexels.com/photos/1239290/pexels-photo-1239290.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Chavda Mihir',
      company: 'Tatvasoft',
      role: 'Intern',
      image: 'https://images.pexels.com/photos/1040885/pexels-photo-1040885.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    },
    {
      name: 'Avishi Sharma',
      company: 'Standard Chartered GBS',
      role: 'Development Engineer',
      image: 'https://images.pexels.com/photos/1239292/pexels-photo-1239292.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
    }
  ];

  return (
    <section className={`py-20 relative overflow-hidden ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Glass Container with Controlled Tilt */}
        <div 
          ref={containerRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="relative overflow-hidden rounded-3xl group transition-transform duration-300 ease-out"
          style={{
            background: isDarkMode 
              ? `
                radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
                  rgba(255, 215, 0, 0.15), 
                  transparent 40%
                ),
                linear-gradient(135deg, 
                  rgba(255, 255, 255, 0.1) 0%, 
                  rgba(255, 255, 255, 0.05) 50%, 
                  rgba(255, 255, 255, 0.02) 100%
                )
              `
              : `
                radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, 
                  rgba(255, 215, 0, 0.08), 
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
                0 0 0 1px rgba(255, 215, 0, 0.1)
              `
              : `
                0 8px 32px 0 rgba(0, 0, 0, 0.1),
                inset 0 1px 0 rgba(255, 255, 255, 0.8),
                0 0 0 1px rgba(255, 215, 0, 0.1)
              `,
            // Apply controlled 3D transform with limited rotation
            transformStyle: 'preserve-3d',
            transform: getTiltTransform()
          }}
        >
          {/* Golden glow effect that follows mouse */}
          <div 
            className="absolute pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
            style={{
              left: mousePosition.x - 300,
              top: mousePosition.y - 300,
              width: '600px',
              height: '600px',
              background: 'radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, rgba(255, 215, 0, 0.1) 30%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(40px)',
              transform: 'translate(0, 0)',
            }}
          />

          {/* Subtle shimmer effect overlay */}
          <div 
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background: 'linear-gradient(45deg, transparent 30%, rgba(255, 215, 0, 0.1) 50%, transparent 70%)',
              backgroundSize: '200% 200%',
              animation: 'golden-shimmer 3s ease-in-out infinite',
            }}
          />

          {/* Inner content container with preserve-3d */}
          <div className="relative px-6 sm:px-12 lg:px-16 py-16 w-full z-10" style={{ transformStyle: 'preserve-3d' }}>
            <div className="w-full flex gap-16 lg:gap-20 lg:flex-row flex-col-reverse justify-center items-start flex-shrink-0 rounded-xl" style={{ transformStyle: 'preserve-3d' }}>
              
              {/* Left Side - Scrolling Columns (Cleaner Layout) */}
              <div className="w-full max-w-fit flex justify-start items-center gap-4 lg:gap-6 relative">
                
                {/* Column 1 - Scrolling Up */}
                <div className="hidden sm:block max-h-[400px] py-8 rounded-xl overflow-hidden relative">
                  <div className="animate-scroll-up space-y-4">
                    {[...graduates, ...graduates].map((graduate, index) => (
                      <div key={`col1-${index}`} className="graduate-card w-full max-w-[140px] flex flex-col items-center gap-y-4 py-3 px-2 rounded-xl transition-all duration-300 hover:bg-slate-500/10 shadow-lg">
                        <img 
                          alt={graduate.name} 
                          className="rounded-full object-cover shadow-md w-[45px] h-[45px]" 
                          src={graduate.image}
                        />
                        <div className="flex flex-col gap-y-1 justify-center items-center text-center">
                          <p className={`text-xs font-medium leading-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{graduate.name}</p>
                          <p className={`text-xs font-semibold leading-tight ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>{graduate.company}</p>
                          <p className={`text-xs font-normal leading-tight ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{graduate.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Gradient overlays */}
                  <div className={`absolute top-0 w-full h-[120px] rounded-xl z-10 ${
                    isDarkMode 
                      ? 'bg-gradient-to-b from-black via-black/70 to-transparent'
                      : 'bg-gradient-to-b from-white via-white/70 to-transparent'
                  }`}></div>
                  <div className={`absolute bottom-0 w-full h-[120px] rounded-xl z-10 ${
                    isDarkMode 
                      ? 'bg-gradient-to-t from-black via-black/70 to-transparent'
                      : 'bg-gradient-to-t from-white via-white/70 to-transparent'
                  }`}></div>
                </div>

                {/* Column 2 - Scrolling Down */}
                <div className="hidden sm:block max-h-[400px] py-8 rounded-xl overflow-hidden relative">
                  <div className="animate-scroll-down space-y-4">
                    {[...graduatesColumn2, ...graduatesColumn2].map((graduate, index) => (
                      <div key={`col2-${index}`} className="graduate-card w-full max-w-[140px] flex flex-col items-center gap-y-4 py-3 px-2 rounded-xl transition-all duration-300 hover:bg-slate-500/10 shadow-lg">
                        <img 
                          alt={graduate.name} 
                          className="rounded-full object-cover shadow-md w-[45px] h-[45px]" 
                          src={graduate.image}
                        />
                        <div className="flex flex-col gap-y-1 justify-center items-center text-center">
                          <p className={`text-xs font-medium leading-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{graduate.name}</p>
                          <p className={`text-xs font-semibold leading-tight ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>{graduate.company}</p>
                          <p className={`text-xs font-normal leading-tight ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{graduate.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Gradient overlays */}
                  <div className={`absolute top-0 w-full h-[120px] rounded-xl z-10 ${
                    isDarkMode 
                      ? 'bg-gradient-to-b from-black via-black/70 to-transparent'
                      : 'bg-gradient-to-b from-white via-white/70 to-transparent'
                  }`}></div>
                  <div className={`absolute bottom-0 w-full h-[120px] rounded-xl z-10 ${
                    isDarkMode 
                      ? 'bg-gradient-to-t from-black via-black/70 to-transparent'
                      : 'bg-gradient-to-t from-white via-white/70 to-transparent'
                  }`}></div>
                </div>

                {/* Column 3 - Scrolling Up */}
                <div className="hidden sm:block max-h-[400px] py-8 rounded-xl overflow-hidden relative">
                  <div className="animate-scroll-up space-y-4">
                    {[...graduatesColumn3, ...graduatesColumn3].map((graduate, index) => (
                      <div key={`col3-${index}`} className="graduate-card w-full max-w-[140px] flex flex-col items-center gap-y-4 py-3 px-2 rounded-xl transition-all duration-300 hover:bg-slate-500/10 shadow-lg">
                        <img 
                          alt={graduate.name} 
                          className="rounded-full object-cover shadow-md w-[45px] h-[45px]" 
                          src={graduate.image}
                        />
                        <div className="flex flex-col gap-y-1 justify-center items-center text-center">
                          <p className={`text-xs font-medium leading-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{graduate.name}</p>
                          <p className={`text-xs font-semibold leading-tight ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>{graduate.company}</p>
                          <p className={`text-xs font-normal leading-tight ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{graduate.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Gradient overlays */}
                  <div className={`absolute top-0 w-full h-[120px] rounded-xl z-10 ${
                    isDarkMode 
                      ? 'bg-gradient-to-b from-black via-black/70 to-transparent'
                      : 'bg-gradient-to-b from-white via-white/70 to-transparent'
                  }`}></div>
                  <div className={`absolute bottom-0 w-full h-[120px] rounded-xl z-10 ${
                    isDarkMode 
                      ? 'bg-gradient-to-t from-black via-black/70 to-transparent'
                      : 'bg-gradient-to-t from-white via-white/70 to-transparent'
                  }`}></div>
                </div>

                {/* Mobile Column */}
                <div className="sm:hidden max-h-[360px] overflow-hidden relative">
                  <div className="animate-scroll-up space-y-4">
                    {[...graduates.slice(0, 6), ...graduates.slice(0, 6)].map((graduate, index) => (
                      <div key={`mobile-${index}`} className="graduate-card w-full max-w-[140px] flex flex-col items-center gap-y-4 py-3 px-2 rounded-xl transition-all duration-300 hover:bg-slate-500/10 shadow-lg">
                        <img 
                          alt={graduate.name} 
                          className="rounded-full object-cover shadow-md w-[45px] h-[45px]" 
                          src={graduate.image}
                        />
                        <div className="flex flex-col gap-y-1 justify-center items-center text-center">
                          <p className={`text-xs font-medium leading-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{graduate.name}</p>
                          <p className={`text-xs font-semibold leading-tight ${isDarkMode ? 'text-yellow-400' : 'text-yellow-600'}`}>{graduate.company}</p>
                          <p className={`text-xs font-normal leading-tight ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>{graduate.role}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Gradient overlays */}
                  <div className={`absolute top-0 w-full h-[120px] rounded-xl z-10 ${
                    isDarkMode 
                      ? 'bg-gradient-to-b from-black via-black/70 to-transparent'
                      : 'bg-gradient-to-b from-white via-white/70 to-transparent'
                  }`}></div>
                  <div className={`absolute bottom-0 w-full h-[120px] rounded-xl z-10 ${
                    isDarkMode 
                      ? 'bg-gradient-to-t from-black via-black/70 to-transparent'
                      : 'bg-gradient-to-t from-white via-white/70 to-transparent'
                  }`}></div>
                </div>
              </div>

              {/* Right Side - Main Content (Cleaner Layout) */}
              <div className="w-full flex flex-col items-start gap-10 flex-1">
                <div className="flex flex-col gap-y-4 self-stretch items-start">
                  <div className="flex flex-col items-start self-stretch gap-y-3">
                    <p className={`font-semibold text-lg ${isDarkMode ? 'text-yellow-500' : 'text-yellow-600'}`}>Success Stories</p>
                    <h2 className={`font-bold text-3xl lg:text-4xl leading-tight ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      dev1x Graduates: Powering Top Tech Giants
                    </h2>
                  </div>
                  <p className={`text-base font-medium leading-relaxed max-w-2xl ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                    Meet our proud alumni shaping the future at major tech companies. Discover the impact dev1x has had on their careers and the tech landscape.
                  </p>
                </div>

                {/* Achievement Stats Grid - Cleaner Layout */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-4xl">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="achievement-card text-center rounded-xl p-5 transition-all duration-300 hover:scale-105">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3 shadow-lg ${
                        isDarkMode 
                          ? 'bg-gradient-to-br from-yellow-400 to-yellow-600'
                          : 'bg-gradient-to-br from-yellow-500 to-yellow-700'
                      }`}>
                        <achievement.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className={`text-xl lg:text-2xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{achievement.value}</div>
                      <div className={`text-sm font-semibold mb-1 ${isDarkMode ? 'text-yellow-300' : 'text-yellow-600'}`}>{achievement.label}</div>
                      <div className={`text-xs leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>{achievement.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;