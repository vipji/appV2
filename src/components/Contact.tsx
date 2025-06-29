"use client";

import React, { useRef } from "react";
import { cn } from "../lib/utils";
import { useAnimate } from "framer-motion";
import { Button, buttonVariants } from "./ui/button";
import { HighlighterItem, HighlightGroup, Particles } from "./ui/highlighter";
import { Mail, Phone, MapPin, Send, MessageSquare, Calendar, Tag } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export function Contact() {
  const [scope, animate] = useAnimate();
  const { isDarkMode } = useTheme();

  React.useEffect(() => {
    animate(
      [
        ["#pointer", { left: 200, top: 60 }, { duration: 0 }],
        ["#java", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 50, top: 102 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#java", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#spring", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 224, top: 170 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#spring", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#algorithms", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 88, top: 198 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#algorithms", { opacity: 0.4 }, { at: "-0.3", duration: 0.1 }],
        ["#interview", { opacity: 1 }, { duration: 0.3 }],
        [
          "#pointer",
          { left: 200, top: 60 },
          { at: "+0.5", duration: 0.5, ease: "easeInOut" },
        ],
        ["#interview", { opacity: 0.5 }, { at: "-0.3", duration: 0.1 }],
      ],
      {
        repeat: Number.POSITIVE_INFINITY,
      },
    );
  }, [animate]);

  return (
    <section id="contact" className={`py-24 relative overflow-hidden ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
      {/* Background decorative elements */}
      <div className={`absolute inset-0 ${isDarkMode 
        ? 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-500/20 via-transparent to-transparent'
        : 'bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-500/10 via-transparent to-transparent'
      }`}></div>
      <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? 'bg-teal-500/20' : 'bg-teal-500/10'}`}></div>
      <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full blur-3xl ${isDarkMode ? 'bg-cyan-500/20' : 'bg-cyan-500/10'}`}></div>

      <div className="relative mx-auto mb-20 mt-6 max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6 border ${
            isDarkMode 
              ? 'bg-teal-500/20 border-teal-400/30 text-teal-300'
              : 'bg-teal-500/10 border-teal-400/20 text-teal-600'
          }`}>
            <MessageSquare className="w-4 h-4 mr-2" />
            Get In Touch
          </div>
          <h2 className={`text-4xl sm:text-5xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Have Questions About
            <span className="block bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Java Development?
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Whether you need help with coding challenges, career guidance, or technical support, we're here to help you succeed.
          </p>
        </div>

        <HighlightGroup className="group h-full">
          <div
            className="group/item h-full"
            data-aos="fade-down"
          >
            <HighlighterItem className="rounded-3xl p-6">
              <div className={`relative z-20 h-full overflow-hidden rounded-3xl border ${
                isDarkMode 
                  ? 'border-slate-800 bg-black' 
                  : 'border-slate-200 bg-white'
              }`}>
                <Particles
                  className="absolute inset-0 -z-10 opacity-10 transition-opacity duration-1000 ease-in-out group-hover/item:opacity-100"
                  quantity={200}
                  color={isDarkMode ? "#14b8a6" : "#0d9488"}
                  vy={-0.2}
                />
                <div className="flex justify-center">
                  <div className="flex h-full flex-col justify-center gap-10 p-4 md:h-[400px] md:flex-row">
                    <div
                      className="relative mx-auto h-[270px] w-[300px] md:h-[270px] md:w-[300px]"
                      ref={scope}
                    >
                      {/* Center Logo/Icon */}
                      <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-lg flex items-center justify-center">
                        <MessageSquare className="w-5 h-5 text-white" />
                      </div>

                      {/* Floating Topics */}
                      <div
                        id="interview"
                        className={`absolute bottom-12 left-14 rounded-3xl border px-2 py-1.5 text-xs opacity-50 ${
                          isDarkMode 
                            ? 'border-slate-600 bg-slate-800' 
                            : 'border-slate-400 bg-slate-200'
                        }`}
                      >
                        Interview Prep
                      </div>
                      <div
                        id="spring"
                        className={`absolute left-2 top-20 rounded-3xl border px-2 py-1.5 text-xs opacity-50 ${
                          isDarkMode 
                            ? 'border-slate-600 bg-slate-800' 
                            : 'border-slate-400 bg-slate-200'
                        }`}
                      >
                        Spring Boot
                      </div>
                      <div
                        id="algorithms"
                        className={`absolute bottom-20 right-1 rounded-3xl border px-2 py-1.5 text-xs opacity-50 ${
                          isDarkMode 
                            ? 'border-slate-600 bg-slate-800' 
                            : 'border-slate-400 bg-slate-200'
                        }`}
                      >
                        Algorithms
                      </div>
                      <div
                        id="java"
                        className={`absolute right-12 top-10 rounded-3xl border px-2 py-1.5 text-xs opacity-50 ${
                          isDarkMode 
                            ? 'border-slate-600 bg-slate-800' 
                            : 'border-slate-400 bg-slate-200'
                        }`}
                      >
                        Java Basics
                      </div>

                      {/* Animated Pointer */}
                      <div id="pointer" className="absolute">
                        <svg
                          width="16.8"
                          height="18.2"
                          viewBox="0 0 12 13"
                          className="fill-teal-500"
                          stroke="white"
                          strokeWidth="1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 5.50676L0 0L2.83818 13L6.30623 7.86537L12 5.50676V5.50676Z"
                          />
                        </svg>
                        <span className="bg-teal-500 relative -top-1 left-3 rounded-3xl px-2 py-1 text-xs text-white">
                          Help
                        </span>
                      </div>
                    </div>

                    <div className="-mt-20 flex h-full flex-col justify-center p-2 md:-mt-4 md:ml-10 md:w-[400px]">
                      <div className="flex flex-col items-center">
                        <h3 className="mt-6 pb-1 font-bold">
                          <span className="text-2xl md:text-4xl">
                            Any questions about Java?
                          </span>
                        </h3>
                      </div>
                      <p className={`mb-4 ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        Feel free to reach out to me! I'm here to help with your Java learning journey.
                      </p>
                      
                      {/* Contact Methods */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        <a
                          href="mailto:visheshpandey.er@gmail.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Button className="bg-teal-600 hover:bg-teal-700">
                            <Mail className="w-4 h-4 mr-2" />
                            Email Me
                          </Button>
                        </a>
                        <a
                          href="tel:+917982787998"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            buttonVariants({
                              variant: "outline",
                              size: "default",
                            }),
                          )}
                        >
                          <Calendar className="w-4 h-4 mr-2" />
                          Call Me
                        </a>
                        <a
                          href="https://wa.me/917982787998"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={cn(
                            buttonVariants({
                              variant: "outline",
                              size: "icon",
                            }),
                          )}
                        >
                          <Phone className="w-4 h-4" />
                        </a>
                      </div>

                      {/* Quick Contact Info */}
                      <div className={`space-y-2 text-sm ${isDarkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        <div className="flex items-center space-x-2">
                          <Mail className="w-4 h-4 text-teal-500" />
                          <span>visheshpandey.er@gmail.com</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Phone className="w-4 h-4 text-teal-500" />
                          <span>+91 7982787998</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4 text-teal-500" />
                          <span>Faridabad, Haryana, India</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </HighlighterItem>
          </div>
        </HighlightGroup>

        {/* Contact Form */}
        <div className="mt-16">
          <div className={`rounded-3xl p-8 border ${
            isDarkMode 
              ? 'bg-gray-800/50 border-gray-700/50' 
              : 'bg-white border-gray-300/50'
          }`}>
            <h3 className={`text-2xl font-bold mb-6 text-center ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Send me a Message
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Name
                  </label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 rounded-xl border transition-colors ${
                      isDarkMode
                        ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-teal-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-teal-500'
                    } focus:outline-none focus:ring-2 focus:ring-teal-500/20`}
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Email
                  </label>
                  <input
                    type="email"
                    className={`w-full px-4 py-3 rounded-xl border transition-colors ${
                      isDarkMode
                        ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-teal-400'
                        : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-teal-500'
                    } focus:outline-none focus:ring-2 focus:ring-teal-500/20`}
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Subject
                </label>
                <input
                  type="text"
                  className={`w-full px-4 py-3 rounded-xl border transition-colors ${
                    isDarkMode
                      ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-teal-400'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-teal-500'
                  } focus:outline-none focus:ring-2 focus:ring-teal-500/20`}
                  placeholder="What can I help you with?"
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Message
                </label>
                <textarea
                  rows={6}
                  className={`w-full px-4 py-3 rounded-xl border transition-colors resize-none ${
                    isDarkMode
                      ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400 focus:border-teal-400'
                      : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-teal-500'
                  } focus:outline-none focus:ring-2 focus:ring-teal-500/20`}
                  placeholder="Tell me about your Java learning goals, challenges, or any questions you have..."
                />
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-xl hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 font-semibold text-lg shadow-lg flex items-center space-x-2 mx-auto"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;