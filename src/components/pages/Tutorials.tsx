import React from 'react';
import { GraduationCap, Play, Clock, Users, Star, CheckCircle, Code, Target } from 'lucide-react';
import { useTheme } from '../ThemeProvider';

const Tutorials = () => {
  const { isDarkMode } = useTheme();

  const tutorials = [
    {
      id: 1,
      title: "Java Basics: Your First Program",
      description: "Learn how to write your first Java program step by step with detailed explanations.",
      duration: "25 min",
      difficulty: "Beginner",
      students: 15420,
      rating: 4.9,
      lessons: 8,
      thumbnail: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      topics: ["Variables", "Data Types", "Methods", "Classes"],
      completed: false
    },
    {
      id: 2,
      title: "Object-Oriented Programming in Java",
      description: "Master the four pillars of OOP: Encapsulation, Inheritance, Polymorphism, and Abstraction.",
      duration: "45 min",
      difficulty: "Intermediate",
      students: 12350,
      rating: 4.8,
      lessons: 12,
      thumbnail: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      topics: ["Classes", "Objects", "Inheritance", "Polymorphism"],
      completed: true
    },
    {
      id: 3,
      title: "Java Collections Framework Deep Dive",
      description: "Comprehensive guide to Java Collections including List, Set, Map, and their implementations.",
      duration: "60 min",
      difficulty: "Intermediate",
      students: 9876,
      rating: 4.9,
      lessons: 15,
      thumbnail: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      topics: ["ArrayList", "HashMap", "TreeSet", "LinkedList"],
      completed: false
    },
    {
      id: 4,
      title: "Exception Handling Best Practices",
      description: "Learn how to handle exceptions gracefully and write robust Java applications.",
      duration: "35 min",
      difficulty: "Intermediate",
      students: 8543,
      rating: 4.7,
      lessons: 10,
      thumbnail: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      topics: ["Try-Catch", "Custom Exceptions", "Finally Block", "Best Practices"],
      completed: false
    },
    {
      id: 5,
      title: "Java 8 Features: Streams and Lambda",
      description: "Explore modern Java features including Lambda expressions, Streams API, and functional programming.",
      duration: "50 min",
      difficulty: "Advanced",
      students: 11234,
      rating: 4.9,
      lessons: 14,
      thumbnail: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      topics: ["Lambda", "Streams", "Optional", "Method References"],
      completed: false
    },
    {
      id: 6,
      title: "Building REST APIs with Spring Boot",
      description: "Create production-ready REST APIs using Spring Boot with proper error handling and validation.",
      duration: "75 min",
      difficulty: "Advanced",
      students: 7890,
      rating: 4.8,
      lessons: 18,
      thumbnail: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      topics: ["REST Controllers", "JPA", "Validation", "Error Handling"],
      completed: false
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return isDarkMode ? 'text-green-400 bg-green-500/20 border-green-400/30' : 'text-green-600 bg-green-500/10 border-green-400/20';
      case 'Intermediate': return isDarkMode ? 'text-yellow-400 bg-yellow-500/20 border-yellow-400/30' : 'text-yellow-600 bg-yellow-500/10 border-yellow-400/20';
      case 'Advanced': return isDarkMode ? 'text-red-400 bg-red-500/20 border-red-400/30' : 'text-red-600 bg-red-500/10 border-red-400/20';
      default: return isDarkMode ? 'text-gray-400 bg-gray-500/20 border-gray-400/30' : 'text-gray-600 bg-gray-500/10 border-gray-400/20';
    }
  };

  const learningPaths = [
    {
      title: "Java Fundamentals Path",
      description: "Complete beginner to intermediate Java programming",
      tutorials: 6,
      duration: "8 hours",
      students: 25000
    },
    {
      title: "Advanced Java Path",
      description: "Master advanced Java concepts and frameworks",
      tutorials: 8,
      duration: "12 hours",
      students: 15000
    },
    {
      title: "Spring Boot Mastery",
      description: "Build enterprise applications with Spring Boot",
      tutorials: 10,
      duration: "15 hours",
      students: 18000
    }
  ];

  return (
    <section id="tutorials" className={`min-h-screen pt-24 pb-16 relative overflow-hidden ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      {/* Background decorative elements */}
      <div className={`absolute inset-0 ${isDarkMode 
        ? 'bg-[radial-gradient(ellipse_at_top_center,_var(--tw-gradient-stops))] from-pink-500/20 via-transparent to-transparent'
        : 'bg-[radial-gradient(ellipse_at_top_center,_var(--tw-gradient-stops))] from-pink-500/10 via-transparent to-transparent'
      }`}></div>
      <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? 'bg-pink-500/20' : 'bg-pink-500/10'}`}></div>
      <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? 'bg-purple-500/20' : 'bg-purple-500/10'}`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 border ${
            isDarkMode 
              ? 'bg-pink-500/20 border-pink-400/30 text-pink-300'
              : 'bg-pink-500/10 border-pink-400/20 text-pink-600'
          }`}>
            <GraduationCap className="w-4 h-4 mr-2" />
            Interactive Tutorials
          </div>
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Learn Java with
            <span className="block bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              Hands-On Tutorials
            </span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Step-by-step interactive tutorials designed to help you master Java programming through practical examples and exercises.
          </p>
        </div>

        {/* Learning Paths */}
        <div className="mb-16">
          <h2 className={`text-2xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Learning Paths
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {learningPaths.map((path, index) => (
              <div key={index} className={`p-6 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                isDarkMode 
                  ? 'bg-gray-800/50 border-gray-700/50 hover:border-pink-400/50' 
                  : 'bg-white border-gray-300/50 hover:border-pink-400/50'
              }`}>
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-lg font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                  {path.title}
                </h3>
                <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {path.description}
                </p>
                <div className={`flex items-center justify-between text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <span>{path.tutorials} tutorials</span>
                  <span>{path.duration}</span>
                </div>
                <div className={`flex items-center mt-2 text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  <Users className="w-4 h-4 mr-1" />
                  <span>{path.students.toLocaleString()} students</span>
                </div>
                <button className="w-full mt-4 bg-gradient-to-r from-pink-600 to-purple-600 text-white py-2 rounded-lg hover:from-pink-700 hover:to-purple-700 transition-all duration-300 font-medium">
                  Start Path
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Tutorials Grid */}
        <div>
          <h2 className={`text-2xl font-bold mb-8 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            All Tutorials
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial) => (
              <div 
                key={tutorial.id}
                className={`rounded-2xl overflow-hidden border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  isDarkMode 
                    ? 'bg-gray-800/50 border-gray-700/50 hover:border-pink-400/50' 
                    : 'bg-white border-gray-300/50 hover:border-pink-400/50'
                }`}
              >
                {/* Tutorial Thumbnail */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={tutorial.thumbnail} 
                    alt={tutorial.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Play className="w-8 h-8 text-white ml-1" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(tutorial.difficulty)}`}>
                      {tutorial.difficulty}
                    </span>
                  </div>
                  {tutorial.completed && (
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Tutorial Content */}
                <div className="p-6">
                  <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                    {tutorial.title}
                  </h3>
                  <p className={`text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    {tutorial.description}
                  </p>

                  {/* Tutorial Stats */}
                  <div className={`flex items-center justify-between text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{tutorial.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Code className="w-4 h-4" />
                      <span>{tutorial.lessons} lessons</span>
                    </div>
                  </div>

                  <div className={`flex items-center justify-between text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{tutorial.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span>{tutorial.rating}</span>
                    </div>
                  </div>

                  {/* Topics */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-1">
                      {tutorial.topics.slice(0, 3).map((topic, idx) => (
                        <span key={idx} className={`px-2 py-1 rounded text-xs border ${
                          isDarkMode 
                            ? 'bg-gray-700/50 text-gray-300 border-gray-600/30'
                            : 'bg-gray-100/50 text-gray-700 border-gray-300/30'
                        }`}>
                          {topic}
                        </span>
                      ))}
                      {tutorial.topics.length > 3 && (
                        <span className={`px-2 py-1 rounded text-xs border ${
                          isDarkMode 
                            ? 'bg-gray-700/50 text-gray-300 border-gray-600/30'
                            : 'bg-gray-100/50 text-gray-700 border-gray-300/30'
                        }`}>
                          +{tutorial.topics.length - 3}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Button */}
                  <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    tutorial.completed
                      ? isDarkMode
                        ? 'bg-green-500/20 text-green-400 border border-green-400/30'
                        : 'bg-green-500/10 text-green-600 border border-green-400/20'
                      : 'bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:from-pink-700 hover:to-purple-700'
                  }`}>
                    {tutorial.completed ? (
                      <>
                        <CheckCircle className="w-4 h-4" />
                        <span>Completed</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4" />
                        <span>Start Tutorial</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-pink-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg shadow-lg">
              Load More Tutorials
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tutorials;