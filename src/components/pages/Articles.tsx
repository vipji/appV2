import React from 'react';
import { FileText, Clock, User, Eye, Heart, Share2, Calendar, Tag } from 'lucide-react';
import { useTheme } from '../ThemeProvider';

const Articles = () => {
  const { isDarkMode } = useTheme();

  const articles = [
    {
      id: 1,
      title: "10 Essential Java Design Patterns Every Developer Should Know",
      excerpt: "Explore the most important design patterns in Java that will make your code more maintainable and scalable.",
      author: "Sarah Johnson",
      publishDate: "2024-01-15",
      readTime: "8 min read",
      views: 12543,
      likes: 234,
      category: "Design Patterns",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      tags: ["Java", "Design Patterns", "Best Practices"]
    },
    {
      id: 2,
      title: "Mastering Java Streams: Advanced Techniques and Performance Tips",
      excerpt: "Deep dive into Java Streams API with advanced techniques, performance optimizations, and real-world examples.",
      author: "Michael Chen",
      publishDate: "2024-01-12",
      readTime: "12 min read",
      views: 8967,
      likes: 189,
      category: "Java 8+",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      tags: ["Java", "Streams", "Performance"]
    },
    {
      id: 3,
      title: "Building Microservices with Spring Boot: A Complete Guide",
      excerpt: "Learn how to design, build, and deploy microservices using Spring Boot with practical examples and best practices.",
      author: "Alex Rodriguez",
      publishDate: "2024-01-10",
      readTime: "15 min read",
      views: 15234,
      likes: 312,
      category: "Spring Boot",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      tags: ["Spring Boot", "Microservices", "Architecture"]
    },
    {
      id: 4,
      title: "Java Memory Management: Understanding Heap, Stack, and Garbage Collection",
      excerpt: "Comprehensive guide to Java memory management, including heap vs stack, garbage collection algorithms, and optimization techniques.",
      author: "Emma Thompson",
      publishDate: "2024-01-08",
      readTime: "10 min read",
      views: 9876,
      likes: 156,
      category: "JVM",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      tags: ["JVM", "Memory Management", "Performance"]
    },
    {
      id: 5,
      title: "Securing Java Applications: Best Practices and Common Vulnerabilities",
      excerpt: "Essential security practices for Java applications, including authentication, authorization, and protection against common attacks.",
      author: "David Kim",
      publishDate: "2024-01-05",
      readTime: "11 min read",
      views: 7654,
      likes: 198,
      category: "Security",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      tags: ["Security", "Authentication", "Best Practices"]
    },
    {
      id: 6,
      title: "Testing in Java: Unit Tests, Integration Tests, and TDD",
      excerpt: "Complete guide to testing Java applications with JUnit, Mockito, and Test-Driven Development practices.",
      author: "Lisa Wang",
      publishDate: "2024-01-03",
      readTime: "9 min read",
      views: 6543,
      likes: 145,
      category: "Testing",
      image: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
      tags: ["Testing", "JUnit", "TDD"]
    }
  ];

  const categories = [
    { name: "All", count: 156 },
    { name: "Java Fundamentals", count: 45 },
    { name: "Spring Boot", count: 32 },
    { name: "Design Patterns", count: 28 },
    { name: "Performance", count: 23 },
    { name: "Security", count: 18 },
    { name: "Testing", count: 10 }
  ];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Design Patterns": isDarkMode ? 'text-purple-400 bg-purple-500/20 border-purple-400/30' : 'text-purple-600 bg-purple-500/10 border-purple-400/20',
      "Java 8+": isDarkMode ? 'text-blue-400 bg-blue-500/20 border-blue-400/30' : 'text-blue-600 bg-blue-500/10 border-blue-400/20',
      "Spring Boot": isDarkMode ? 'text-green-400 bg-green-500/20 border-green-400/30' : 'text-green-600 bg-green-500/10 border-green-400/20',
      "JVM": isDarkMode ? 'text-red-400 bg-red-500/20 border-red-400/30' : 'text-red-600 bg-red-500/10 border-red-400/20',
      "Security": isDarkMode ? 'text-yellow-400 bg-yellow-500/20 border-yellow-400/30' : 'text-yellow-600 bg-yellow-500/10 border-yellow-400/20',
      "Testing": isDarkMode ? 'text-teal-400 bg-teal-500/20 border-teal-400/30' : 'text-teal-600 bg-teal-500/10 border-teal-400/20',
    };
    return colors[category as keyof typeof colors] || (isDarkMode ? 'text-gray-400 bg-gray-500/20 border-gray-400/30' : 'text-gray-600 bg-gray-500/10 border-gray-400/20');
  };

  return (
    <section id="articles" className={`min-h-screen pt-24 pb-16 relative overflow-hidden ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      {/* Background decorative elements */}
      <div className={`absolute inset-0 ${isDarkMode 
        ? 'bg-[radial-gradient(ellipse_at_top_center,_var(--tw-gradient-stops))] from-orange-500/20 via-transparent to-transparent'
        : 'bg-[radial-gradient(ellipse_at_top_center,_var(--tw-gradient-stops))] from-orange-500/10 via-transparent to-transparent'
      }`}></div>
      <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? 'bg-orange-500/20' : 'bg-orange-500/10'}`}></div>
      <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? 'bg-red-500/20' : 'bg-red-500/10'}`}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 border ${
            isDarkMode 
              ? 'bg-orange-500/20 border-orange-400/30 text-orange-300'
              : 'bg-orange-500/10 border-orange-400/20 text-orange-600'
          }`}>
            <FileText className="w-4 h-4 mr-2" />
            Latest Articles
          </div>
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Java Knowledge
            <span className="block bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
              Hub & Insights
            </span>
          </h1>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Stay updated with the latest Java trends, best practices, and in-depth tutorials from industry experts.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className={`rounded-2xl p-6 border ${
              isDarkMode 
                ? 'bg-gray-800/50 border-gray-700/50' 
                : 'bg-white border-gray-300/50'
            }`}>
              <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                      index === 0 
                        ? isDarkMode 
                          ? 'bg-orange-500/20 text-orange-300 border border-orange-400/30'
                          : 'bg-orange-500/10 text-orange-600 border border-orange-400/20'
                        : isDarkMode
                          ? 'text-gray-300 hover:bg-gray-700/50'
                          : 'text-gray-700 hover:bg-gray-100/50'
                    }`}
                  >
                    <span>{category.name}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      isDarkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Popular Tags */}
            <div className={`rounded-2xl p-6 border mt-6 ${
              isDarkMode 
                ? 'bg-gray-800/50 border-gray-700/50' 
                : 'bg-white border-gray-300/50'
            }`}>
              <h3 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                Popular Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Java', 'Spring Boot', 'JVM', 'Performance', 'Security', 'Testing', 'Microservices', 'Design Patterns'].map((tag, index) => (
                  <span key={index} className={`px-3 py-1 rounded-full text-xs border cursor-pointer transition-colors ${
                    isDarkMode 
                      ? 'bg-gray-700/50 text-gray-300 border-gray-600/30 hover:border-orange-400/50'
                      : 'bg-gray-100/50 text-gray-700 border-gray-300/30 hover:border-orange-400/50'
                  }`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Articles Grid */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-8">
              {articles.map((article) => (
                <article 
                  key={article.id}
                  className={`rounded-2xl overflow-hidden border transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${
                    isDarkMode 
                      ? 'bg-gray-800/50 border-gray-700/50 hover:border-orange-400/50' 
                      : 'bg-white border-gray-300/50 hover:border-orange-400/50'
                  }`}
                >
                  {/* Article Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getCategoryColor(article.category)}`}>
                        {article.category}
                      </span>
                    </div>
                  </div>

                  {/* Article Content */}
                  <div className="p-6">
                    <h2 className={`text-xl font-bold mb-3 line-clamp-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
                      {article.title}
                    </h2>
                    <p className={`text-sm mb-4 line-clamp-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {article.excerpt}
                    </p>

                    {/* Author & Date */}
                    <div className={`flex items-center space-x-4 text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className={`flex items-center justify-between text-sm mb-4 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{article.views.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{article.likes}</span>
                        </div>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {article.tags.map((tag, idx) => (
                        <span key={idx} className={`px-2 py-1 rounded text-xs border ${
                          isDarkMode 
                            ? 'bg-gray-700/50 text-gray-300 border-gray-600/30'
                            : 'bg-gray-100/50 text-gray-700 border-gray-300/30'
                        }`}>
                          <Tag className="w-3 h-3 inline mr-1" />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between">
                      <button className="text-orange-500 hover:text-orange-400 font-medium transition-colors">
                        Read More →
                      </button>
                      <button className={`p-2 rounded-lg transition-colors ${
                        isDarkMode 
                          ? 'text-gray-400 hover:text-white hover:bg-gray-700'
                          : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                      }`}>
                        <Share2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            <div className="text-center mt-12">
              <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-xl hover:from-orange-700 hover:to-red-700 transition-all duration-300 font-semibold text-lg shadow-lg">
                Load More Articles
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Articles;