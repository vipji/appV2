import React from 'react';
import { User, Code, TestTube, Heart, Star, Award, Github, Linkedin, Mail, MapPin } from 'lucide-react';
import { useTheme } from '../ThemeProvider';

const About = () => {
  const { isDarkMode } = useTheme();

  const teamMembers = [
    {
      id: 1,
      name: 'Vishesh',
      role: 'Developer',
      description: 'Passionate Java developer with expertise in building scalable applications and teaching programming concepts.',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      skills: ['Java', 'Spring Boot', 'React', 'System Design'],
      social: {
        github: '#',
        linkedin: '#',
        email: 'visheshpandey.er@gmail.com'
      },
      stats: {
        projects: '50+',
        experience: '3+ Years',
        students: '1000+'
      }
    },
    {
      id: 2,
      name: 'Shikha',
      role: 'Tester',
      description: 'Quality assurance expert ensuring our platform delivers the best learning experience through comprehensive testing.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      skills: ['Manual Testing', 'Automation', 'Quality Assurance', 'Bug Analysis'],
      social: {
        github: '#',
        linkedin: '#',
        email: 'shikha@connoisseurcode.dev'
      },
      stats: {
        testCases: '500+',
        experience: '2+ Years',
        bugsFound: '200+'
      }
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Teaching',
      description: 'We believe in making Java programming accessible and enjoyable for everyone.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Star,
      title: 'Quality First',
      description: 'Every feature is thoroughly tested to ensure the best learning experience.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code to content.',
      color: 'from-purple-500 to-indigo-500'
    },
    {
      icon: Code,
      title: 'Innovation',
      description: 'Constantly improving our platform with the latest technologies and methodologies.',
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  return (
    <section id="about" className={`min-h-screen pt-24 pb-16 relative overflow-hidden ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      {/* Background decorative elements */}
      <div className={`absolute inset-0 ${isDarkMode 
        ? 'bg-[radial-gradient(ellipse_at_top_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent'
        : 'bg-[radial-gradient(ellipse_at_top_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent'
      }`}></div>
      <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? 'bg-blue-500/20' : 'bg-blue-500/10'}`}></div>
      <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? 'bg-purple-500/20' : 'bg-purple-500/10'}`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 border ${
            isDarkMode 
              ? 'bg-blue-500/20 border-blue-400/30 text-blue-300'
              : 'bg-blue-500/10 border-blue-400/20 text-blue-600'
          }`}>
            <User className="w-4 h-4 mr-2" />
            About Us
          </div>
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Meet the Team Behind
            <span className="block bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              ConnoisseurCode
            </span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            We're passionate about making Java programming accessible and enjoyable for developers worldwide. 
            Our mission is to provide the best learning experience through quality content and innovative tools.
          </p>
        </div>

        {/* Team Members */}
        <div className="mb-20">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Our Team
          </h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {teamMembers.map((member) => (
              <div 
                key={member.id}
                className={`rounded-3xl overflow-hidden border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  isDarkMode 
                    ? 'bg-gray-800/50 border-gray-700/50 hover:border-blue-400/50' 
                    : 'bg-white border-gray-300/50 hover:border-blue-400/50'
                }`}
              >
                {/* Member Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${
                      member.role === 'Developer' 
                        ? 'bg-blue-500/20 text-blue-300 border-blue-400/30'
                        : 'bg-green-500/20 text-green-300 border-green-400/30'
                    }`}>
                      {member.role}
                    </span>
                  </div>
                </div>

                {/* Member Content */}
                <div className="p-6">
                  <p className={`text-sm mb-6 leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {member.description}
                  </p>

                  {/* Skills */}
                  <div className="mb-6">
                    <h4 className={`text-sm font-semibold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      Skills & Expertise
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, idx) => (
                        <span key={idx} className={`px-3 py-1 rounded-full text-xs border ${
                          isDarkMode 
                            ? 'bg-gray-700/50 text-gray-300 border-gray-600/30'
                            : 'bg-gray-100/50 text-gray-700 border-gray-300/30'
                        }`}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(member.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className={`text-lg font-bold ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                          {value}
                        </div>
                        <div className={`text-xs capitalize ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div className="flex items-center justify-center space-x-4">
                    <a 
                      href={member.social.github}
                      className={`p-2 rounded-lg transition-colors ${
                        isDarkMode 
                          ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a 
                      href={member.social.linkedin}
                      className={`p-2 rounded-lg transition-colors ${
                        isDarkMode 
                          ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a 
                      href={`mailto:${member.social.email}`}
                      className={`p-2 rounded-lg transition-colors ${
                        isDarkMode 
                          ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="mb-20">
          <h2 className={`text-3xl font-bold text-center mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Our Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className={`text-center p-6 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? 'bg-gray-800/50 border-gray-700/50' 
                    : 'bg-white border-gray-300/50'
                }`}
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-4 shadow-lg`}>
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-lg font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {value.title}
                </h3>
                <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className={`text-center p-8 rounded-3xl border ${
          isDarkMode 
            ? 'bg-gray-800/50 border-gray-700/50' 
            : 'bg-white border-gray-300/50'
        }`}>
          <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Get in Touch
          </h2>
          <p className={`text-lg mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Have questions or want to collaborate? We'd love to hear from you!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-2">
              <Mail className="w-5 h-5 text-blue-500" />
              <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                visheshpandey.er@gmail.com
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-5 h-5 text-blue-500" />
              <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                Faridabad, Haryana, India
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;