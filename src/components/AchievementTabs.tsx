import React from 'react';
import { Trophy, Target, Star, Award, Medal, Crown } from 'lucide-react';

const AchievementTabs = () => {
  // Graduate profiles for scrolling columns
  const graduates = [
    {
      name: 'Dipanshi Rawat',
      company: 'Netrin',
      role: 'Software Engineer',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      achievement: 'Problem Solver'
    },
    {
      name: 'Yash Bankar',
      company: 'PTC',
      role: 'Research and Development',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      achievement: 'Algorithm Expert'
    },
    {
      name: 'Aman Kushwaha',
      company: 'UBS - Union Bank Of Switzerland',
      role: 'SDE',
      image: 'https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      achievement: 'Speed Demon'
    },
    {
      name: 'Ashish Dubey',
      company: 'Microsoft',
      role: 'Software Developer Intern',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      achievement: 'Java Master'
    },
    {
      name: 'Shritik Raj',
      company: 'Human Holdings',
      role: 'Data Scientist',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      achievement: 'Interview Ready'
    },
    {
      name: 'Avishkar Chavle',
      company: 'Kotak Life Insurance',
      role: 'SW Engineer',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      achievement: 'Accuracy Master'
    }
  ];

  const graduatesColumn2 = [
    {
      name: 'Nitesh Patel',
      company: 'Oracle',
      role: 'Software Engineer',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      achievement: 'Problem Solver'
    },
    {
      name: 'Priyansh Upadhyay',
      company: 'BlackRock',
      role: 'SDE',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      achievement: 'Algorithm Expert'
    },
    {
      name: 'Sahil Saini',
      company: 'Sciforn Solutions',
      role: 'Software Developer',
      image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      achievement: 'Speed Demon'
    },
    {
      name: 'Aryan Gupta',
      company: 'Jio',
      role: 'Graduate Engineer Trainee',
      image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      achievement: 'Java Master'
    },
    {
      name: 'Rohan Kumar Sah',
      company: 'Bosch Global',
      role: 'Software Engineer',
      image: 'https://images.pexels.com/photos/1239288/pexels-photo-1239288.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      achievement: 'Interview Ready'
    },
    {
      name: 'Kousik Snai',
      company: 'Nagarro',
      role: 'Associate Software Developer',
      image: 'https://images.pexels.com/photos/1040882/pexels-photo-1040882.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      achievement: 'Accuracy Master'
    }
  ];

  const graduatesColumn3 = [
    {
      name: 'Kanishk Raj',
      company: 'Principal Global Services',
      role: 'Trainee Engineer',
      image: 'https://images.pexels.com/photos/1040886/pexels-photo-1040886.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      achievement: 'Problem Solver'
    },
    {
      name: 'Mit Thakkar',
      company: 'Bitscape',
      role: 'PowerBI Developer',
      image: 'https://images.pexels.com/photos/1239293/pexels-photo-1239293.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      achievement: 'Algorithm Expert'
    },
    {
      name: 'Anuj Thakur',
      company: 'Scaler by InterviewBit',
      role: 'Data Analyst',
      image: 'https://images.pexels.com/photos/1239287/pexels-photo-1239287.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      achievement: 'Speed Demon'
    },
    {
      name: 'Ganesh Mishra',
      company: 'Niyogin Fintech',
      role: 'Intern',
      image: 'https://images.pexels.com/photos/1239289/pexels-photo-1239289.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      achievement: 'Java Master'
    },
    {
      name: 'Rishabh Sachdeva',
      company: 'Accenture',
      role: 'Software Developer',
      image: 'https://images.pexels.com/photos/1040884/pexels-photo-1040884.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      achievement: 'Interview Ready'
    },
    {
      name: 'Kumkum Singh',
      company: 'Paytm',
      role: 'Software Engineer',
      image: 'https://images.pexels.com/photos/1239290/pexels-photo-1239290.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      achievement: 'Accuracy Master'
    }
  ];

  const achievements = [
    {
      icon: Trophy,
      title: 'Problem Solver',
      description: 'Solved 100+ coding challenges',
      progress: 85,
      color: 'from-yellow-500 to-orange-500',
      bgColor: 'bg-yellow-500/20',
      borderColor: 'border-yellow-400/30',
      textColor: 'text-yellow-300'
    },
    {
      icon: Target,
      title: 'Accuracy Master',
      description: 'Maintained 95% success rate',
      progress: 95,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500/20',
      borderColor: 'border-green-400/30',
      textColor: 'text-green-300'
    },
    {
      icon: Star,
      title: 'Speed Demon',
      description: 'Completed challenges under time limit',
      progress: 78,
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500/20',
      borderColor: 'border-blue-400/30',
      textColor: 'text-blue-300'
    },
    {
      icon: Award,
      title: 'Algorithm Expert',
      description: 'Mastered advanced algorithms',
      progress: 92,
      color: 'from-purple-500 to-indigo-500',
      bgColor: 'bg-purple-500/20',
      borderColor: 'border-purple-400/30',
      textColor: 'text-purple-300'
    },
    {
      icon: Medal,
      title: 'Interview Ready',
      description: 'Passed 50+ mock interviews',
      progress: 88,
      color: 'from-pink-500 to-rose-500',
      bgColor: 'bg-pink-500/20',
      borderColor: 'border-pink-400/30',
      textColor: 'text-pink-300'
    },
    {
      icon: Crown,
      title: 'Java Master',
      description: 'Achieved expert level in Java',
      progress: 100,
      color: 'from-amber-500 to-yellow-500',
      bgColor: 'bg-amber-500/20',
      borderColor: 'border-amber-400/30',
      textColor: 'text-amber-300'
    }
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-500/20 via-transparent to-transparent"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Glass Container */}
        <div 
          className="relative overflow-hidden rounded-3xl group transition-all duration-500 ease-out"
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
              0 0 0 1px rgba(99, 102, 241, 0.1)
            `,
          }}
        >
          {/* Subtle shimmer effect overlay */}
          <div 
            className="absolute inset-0 opacity-30 pointer-events-none transition-opacity duration-500"
            style={{
              background: 'linear-gradient(45deg, transparent 30%, rgba(99, 102, 241, 0.1) 50%, transparent 70%)',
              backgroundSize: '200% 200%',
              animation: 'blue-shimmer 3s ease-in-out infinite',
            }}
          />

          {/* Inner content container */}
          <div className="relative px-6 sm:p-24 w-full z-10">
            <div className="w-full flex gap-24 lg:flex-row flex-col justify-center items-center flex-shrink-0 rounded-xl">
              
              {/* Left Side - Scrolling Columns (CodeHelp Style) */}
              <div className="w-full max-w-fit sm:flex sm:justify-start sm:items-center gap-2 relative">
                
                {/* Column 1 - Scrolling Up */}
                <div className="hidden sm:block max-h-[400px] py-10 rounded-xl overflow-hidden relative">
                  <div className="animate-scroll-up space-y-2">
                    {[...graduates, ...graduates].map((graduate, index) => (
                      <div key={`col1-${index}`} className="graduate-card w-full max-w-[160px] flex flex-col items-center gap-y-6 py-4 px-1 rounded-xl transition-all duration-300 hover:bg-indigo-500/10 shadow-xl">
                        <img 
                          alt={graduate.name} 
                          className="rounded-full object-cover shadow-lg w-[50px] h-[50px]" 
                          src={graduate.image}
                        />
                        <div className="flex flex-col gap-y-1 justify-center items-center text-center">
                          <p className="text-sm font-normal text-white">{graduate.name}</p>
                          <p className="text-sm font-semibold text-indigo-400">{graduate.company}</p>
                          <p className="text-sm font-medium text-gray-300">{graduate.role}</p>
                          <div className="inline-flex items-center px-2 py-1 bg-indigo-500/20 border border-indigo-400/30 rounded-full text-indigo-300 text-xs font-medium mt-2">
                            {graduate.achievement}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Gradient overlays */}
                  <div className="absolute top-0 w-full h-[150px] rounded-xl z-10 bg-gradient-to-b from-black via-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 w-full h-[150px] rounded-xl z-10 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                </div>

                {/* Column 2 - Scrolling Down */}
                <div className="hidden sm:block max-h-[400px] py-10 rounded-xl overflow-hidden relative">
                  <div className="animate-scroll-down space-y-2">
                    {[...graduatesColumn2, ...graduatesColumn2].map((graduate, index) => (
                      <div key={`col2-${index}`} className="graduate-card w-full max-w-[160px] flex flex-col items-center gap-y-6 py-4 px-1 rounded-xl transition-all duration-300 hover:bg-indigo-500/10 shadow-xl">
                        <img 
                          alt={graduate.name} 
                          className="rounded-full object-cover shadow-lg w-[50px] h-[50px]" 
                          src={graduate.image}
                        />
                        <div className="flex flex-col gap-y-1 justify-center items-center text-center">
                          <p className="text-sm font-normal text-white">{graduate.name}</p>
                          <p className="text-sm font-semibold text-indigo-400">{graduate.company}</p>
                          <p className="text-sm font-medium text-gray-300">{graduate.role}</p>
                          <div className="inline-flex items-center px-2 py-1 bg-indigo-500/20 border border-indigo-400/30 rounded-full text-indigo-300 text-xs font-medium mt-2">
                            {graduate.achievement}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Gradient overlays */}
                  <div className="absolute top-0 w-full h-[150px] rounded-xl z-10 bg-gradient-to-b from-black via-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 w-full h-[150px] rounded-xl z-10 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                </div>

                {/* Column 3 - Scrolling Up */}
                <div className="hidden sm:block max-h-[400px] py-10 rounded-xl overflow-hidden relative">
                  <div className="animate-scroll-up space-y-2">
                    {[...graduatesColumn3, ...graduatesColumn3].map((graduate, index) => (
                      <div key={`col3-${index}`} className="graduate-card w-full max-w-[160px] flex flex-col items-center gap-y-6 py-4 px-1 rounded-xl transition-all duration-300 hover:bg-indigo-500/10 shadow-xl">
                        <img 
                          alt={graduate.name} 
                          className="rounded-full object-cover shadow-lg w-[50px] h-[50px]" 
                          src={graduate.image}
                        />
                        <div className="flex flex-col gap-y-1 justify-center items-center text-center">
                          <p className="text-sm font-normal text-white">{graduate.name}</p>
                          <p className="text-sm font-semibold text-indigo-400">{graduate.company}</p>
                          <p className="text-sm font-medium text-gray-300">{graduate.role}</p>
                          <div className="inline-flex items-center px-2 py-1 bg-indigo-500/20 border border-indigo-400/30 rounded-full text-indigo-300 text-xs font-medium mt-2">
                            {graduate.achievement}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Gradient overlays */}
                  <div className="absolute top-0 w-full h-[150px] rounded-xl z-10 bg-gradient-to-b from-black via-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 w-full h-[150px] rounded-xl z-10 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                </div>

                {/* Mobile Column */}
                <div className="sm:hidden max-h-[360px] overflow-hidden relative">
                  <div className="animate-scroll-up space-y-2">
                    {[...graduates.slice(0, 6), ...graduates.slice(0, 6)].map((graduate, index) => (
                      <div key={`mobile-${index}`} className="graduate-card w-full max-w-[160px] flex flex-col items-center gap-y-6 py-4 px-1 rounded-xl transition-all duration-300 hover:bg-indigo-500/10 shadow-xl">
                        <img 
                          alt={graduate.name} 
                          className="rounded-full object-cover shadow-lg w-[50px] h-[50px]" 
                          src={graduate.image}
                        />
                        <div className="flex flex-col gap-y-1 justify-center items-center text-center">
                          <p className="text-sm font-normal text-white">{graduate.name}</p>
                          <p className="text-sm font-semibold text-indigo-400">{graduate.company}</p>
                          <p className="text-sm font-medium text-gray-300">{graduate.role}</p>
                          <div className="inline-flex items-center px-2 py-1 bg-indigo-500/20 border border-indigo-400/30 rounded-full text-indigo-300 text-xs font-medium mt-2">
                            {graduate.achievement}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Gradient overlays */}
                  <div className="absolute top-0 w-full h-[150px] rounded-xl z-10 bg-gradient-to-b from-black via-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 w-full h-[150px] rounded-xl z-10 bg-gradient-to-t from-black via-black/60 to-transparent"></div>
                </div>
              </div>

              {/* Right Side - Achievement Content */}
              <div className="w-full flex flex-col items-start gap-14 flex-1">
                <div className="flex flex-col gap-y-3 self-stretch items-start">
                  <div className="flex flex-col items-start self-stretch gap-y-2">
                    <p className="text-indigo-400 font-semibold text-lg">Achievement System</p>
                    <p className="text-white font-semibold text-4xl">dev1x Achievers: Unlocking Success</p>
                  </div>
                  <p className="text-base text-gray-300 font-medium">
                    Meet our accomplished graduates who have unlocked various achievements on their coding journey. 
                    Discover how our achievement system has motivated them to excel in their careers.
                  </p>
                </div>

                {/* Achievement Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="achievement-card text-center rounded-2xl p-6 transition-all duration-300">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${achievement.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                        <achievement.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-lg font-bold text-white mb-2">{achievement.title}</div>
                      <div className="text-gray-400 text-xs leading-relaxed mb-3">{achievement.description}</div>
                      
                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-xs font-medium text-gray-400">Progress</span>
                          <span className={`text-xs font-bold ${achievement.textColor}`}>
                            {achievement.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-700/50 rounded-full h-1.5 overflow-hidden">
                          <div 
                            className={`h-full bg-gradient-to-r ${achievement.color} rounded-full transition-all duration-500 ease-out`}
                            style={{ width: `${achievement.progress}%` }}
                          />
                        </div>
                      </div>
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

export default AchievementTabs;