import React, { Suspense, useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Background from './components/Background';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Credentials from './components/Credentials';
import Contact from './components/Contact';

function App() {
  const [view, setView] = useState<'home' | 'experience'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      // Check for #experience, handling potential trailing slashes or queries
      if (hash === '#experience' || hash.startsWith('#experience')) {
        setView('experience');
        window.scrollTo(0, 0);
      } else {
        setView('home');
        // Optional: specific scroll handling for home sections is done by browser or Navbar
      }
    };

    // Initial check
    handleHashChange();

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="relative text-slate-200 selection:bg-blue-500/30 selection:text-blue-200">
      
      {/* 3D Background - Wrapped in Suspense to prevent blocking */}
      <Suspense fallback={<div className="fixed inset-0 bg-slate-950 z-0" />}>
        <Background />
      </Suspense>

      <Navbar currentPage={view} />
      
      <main className="relative min-h-screen">
        {view === 'home' ? (
          <>
            <Hero />
            <Skills />
            <Credentials />
          </>
        ) : (
          <Experience />
        )}
      </main>

      <Contact />
    </div>
  );
}

export default App;