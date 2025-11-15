import React, { useEffect, useState } from 'react';
import { ThemeProvider } from './components/ThemeProvider';
import Header from './components/Header';
// import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Features from './components/Features';
import Problems from './components/Problems';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Courses from './components/pages/Courses';
import Articles from './components/pages/Articles';
import Tutorials from './components/pages/Tutorials';
import About from './components/pages/About';
import Contact from './components/Contact';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const updateCurrentPage = () => {
      const hash = window.location.hash.replace('#', '') || 'home';
      setCurrentPage(hash);
    };

    updateCurrentPage();
    window.addEventListener('hashchange', updateCurrentPage);
    return () => window.removeEventListener('hashchange', updateCurrentPage);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case 'courses':
        return <Courses />;
      case 'articles':
        return <Articles />;
      case 'tutorials':
        return <Tutorials />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'problems':
        return (
          <main className="space-y-0 pt-24">
            <section id="problems">
              <Problems />
            </section>
          </main>
        );
      case 'home':
      default:
        return (
          <main className="space-y-0 pt-24">
            <section id="home">
              <Hero />
            </section>
            <section id="features">
              <Features />
            </section>
            <section id="problems">
              <Problems />
            </section>
            <section id="testimonials">
              <Testimonials />
            </section>
            <section id="contact">
              <CTA />
            </section>
          </main>
        );
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 dark:bg-black bg-white">
        <Header />
        {renderPage()}
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;