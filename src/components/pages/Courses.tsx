import React from 'react';
import { BookOpen, Clock, Users, Star, Play, Award, Target, Zap } from 'lucide-react';
import { useTheme } from '../ThemeProvider';

const Courses = () => {
  const { isDarkMode } = useTheme();

  const courses = [
    {
      id: 1,
      title: "Java Fundamentals Mastery",
      description: "Master the core concepts of Java programming from basics to advanced topics.",
      instructor: "Dr. Sarah Johnson",
      duration: "12 weeks",
      students: 2847,
      rating: 4.9,
      price: "$99",
      level: "Beginner",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      topics: ["Variables & Data Types", "OOP Concepts", "Collections", "Exception Handling"]
    },
    {
      id: 2,
      title: "Advanced Java & Spring Boot",
      description: "Build enterprise-level applications with Spring Boot and advanced Java concepts.",
      instructor: "Michael Chen",
      duration: "16 weeks",
      students: 1923,
      rating: 4.8,
      price: "$149",
      level: "Advanced",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      topics: ["Spring Framework", "REST APIs", "Microservices", "Database Integration"]
    },
    {
      id: 3,
      title: "Data Structures & Algorithms",
      description: "Master DSA concepts essential for technical interviews and competitive programming.",
      instructor: "Prof. Alex Rodriguez",
      duration: "10 weeks",
      students: 3156,
      rating: 4.9,
      price: "$129",
      level: "Intermediate",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      topics: ["Arrays & Strings", "Trees & Graphs", "Dynamic Programming", "Sorting Algorithms"]
    },
    {
      id: 4,
      title: "Java Interview Preparation",
      description: "Comprehensive preparation for Java developer interviews at top tech companies.",
      instructor: "Emma Thompson",
      duration: "8 weeks",
      students: 4521,
      rating: 4.9,
      price: "$179",
      level: "All Levels",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      topics: ["Coding Challenges", "System Design", "Behavioral Questions", "Mock Interviews"]
    },
    {
      id: 5,
      title: "Java Web Development",
      description: "Build modern web applications using Java, JSP, Servlets, and modern frameworks.",
      instructor: "David Kim",
      duration: "14 weeks",
      students: 2134,
      rating: 4.7,
      price: "$139",
      level: "Intermediate",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      topics: ["JSP & Servlets", "MVC Architecture", "Database Connectivity", "Security"]
    },
    {
      id: 6,
      title: "Java Performance Optimization",
      description: "Learn advanced techniques to optimize Java applications for maximum performance.",
      instructor: "Lisa Wang",
      duration: "6 weeks",
      students: 1567,
      rating: 4.8,
      price: "$199",
      level: "Advanced",
      image: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      topics: ["JVM Tuning", "Memory Management", "Profiling Tools", "Concurrency"]
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Beginner': return isDarkMode ? 'text-green-400 bg-green-500/20 border-green-400/30' : 'text-green-600 bg-green-500/10 border-green-400/20';
      case 'Intermediate': return isDarkMode ? 'text-yellow-400 bg-yellow-500/20 border-yellow-400/30' : 'text-yellow-600 bg-yellow-500/10 border-yellow-400/20';
      case 'Advanced': return isDarkMode ? 'text-red-400 bg-red-500/20 border-red-400/30' : 'text-red-600 bg-red-500/10 border-red-400/20';
      case 'All Levels': return isDarkMode ? 'text-blue-400 bg-blue-500/20 border-blue-400/30' : 'text-blue-600 bg-blue-500/10 border-blue-400/20';
      default: return isDarkMode ? 'text-gray-400 bg-gray-500/20 border-gray-400/30' : 'text-gray-600 bg-gray-500/10 border-gray-400/20';
    }
  };

  return (
    <section id="courses" className={`min-h-screen pt-24 pb-16 relative overflow-hidden ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      {/* Background decorative elements */}
      <div className={`absolute inset-0 ${isDarkMode 
        ? 'bg-[radial-gradient(ellipse_at_top_center,_var(--tw-gradient-stops))] from-green-500/20 via-transparent to-transparent'
        : 'bg-[radial-gradient(ellipse_at_top_center,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent'
      }`}></div>
      <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? 'bg-green-500/20' : 'bg-green-500/10'}`}></div>
      <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? 'bg-emerald-500/20' : 'bg-emerald-500/10'}`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 border ${
            isDarkMode 
              ? 'bg-green-500/20 border-green-400/30 text-green-300'
              : 'bg-green-500/10 border-green-400/20 text-green-600'
          }`}>
            <BookOpen className="w-4 h-4 mr-2" />
            All Courses
          </div>
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Master Java with
            <span className="block bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Expert-Led Courses
            </span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            From fundamentals to advanced concepts, our comprehensive courses are designed to take you from beginner to Java expert.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: BookOpen, value: '50+', label: 'Courses Available' },
            { icon: Users, value: '25,000+', label: 'Students Enrolled' },
            { icon: Award, value: '95%', label: 'Completion Rate' },
            { icon: Target, value: '4.8/5', label: 'Average Rating' }
          ].map((stat, index) => (
            <div key={index} className={`text-center p-6 rounded-2xl border ${
              isDarkMode 
                ? 'bg-gray-800/50 border-gray-700/50' 
                : 'bg-white/50 border-gray-300/50'
            }`}>
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className={`text-2xl font-bold mb-1 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                {stat.value}
              </div>
              <div className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div 
              key={course.id}
              className={`rounded-2xl overflow-hidden border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                isDarkMode 
                  ? 'bg-gray-800/50 border-gray-700/50 hover:border-green-400/50' 
                  : 'bg-white border-gray-300/50 hover:border-green-400/50'
              }`}
            >
              {/* Course Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getLevelColor(course.level)}`}>
                    {course.level}
                  </span>
                </div>
                <div className="absolute top-4 right-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                    isDarkMode ? 'bg-black/70 text-white' : 'bg-white/90 text-gray-900'
                  }`}>
                    {course.price}
                  </div>
                </div>
              </div>

              {/* Course Content */}
              <div className="p-6">
                <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {course.title}
                </h3>
                <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {course.description}
                </p>

                {/* Instructor & Stats */}
                <div className={`flex items-center justify-between text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <span>By {course.instructor}</span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                {/* Course Details */}
                <div className={`flex items-center justify-between text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                </div>

                {/* Topics */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-1">
                    {course.topics.slice(0, 3).map((topic, idx) => (
                      <span key={idx} className={`px-2 py-1 rounded text-xs border ${
                        isDarkMode 
                          ? 'bg-gray-700/50 text-gray-300 border-gray-600/30'
                          : 'bg-gray-100/50 text-gray-700 border-gray-300/30'
                      }`}>
                        {topic}
                      </span>
                    ))}
                    {course.topics.length > 3 && (
                      <span className={`px-2 py-1 rounded text-xs border ${
                        isDarkMode 
                          ? 'bg-gray-700/50 text-gray-300 border-gray-600/30'
                          : 'bg-gray-100/50 text-gray-700 border-gray-300/30'
                      }`}>
                        +{course.topics.length - 3} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-3 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center space-x-2 font-semibold">
                    <Play className="w-4 h-4" />
                    <span>Enroll Now</span>
                  </button>
                  <button className={`px-4 py-3 rounded-xl border transition-all duration-300 ${
                    isDarkMode 
                      ? 'border-gray-600 text-gray-300 hover:border-green-400 hover:text-green-300'
                      : 'border-gray-400 text-gray-700 hover:border-green-500 hover:text-green-600'
                  }`}>
                    <Zap className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 font-semibold text-lg shadow-lg">
            Load More Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;