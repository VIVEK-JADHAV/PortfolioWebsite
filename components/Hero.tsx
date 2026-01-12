import React, { useState } from 'react';
import { ArrowDown, Linkedin, Mail, MapPin, User } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  
  // Changed to local relative path. 
  // Please ensure 'vivek.jpg' exists in your 'public/images/' directory.
  const profileImg = "https://raw.githubusercontent.com/VIVEK-JADHAV/PortfolioWebsite/master/public/images/vivekProfile.jpeg";

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    e.preventDefault();
    if (hash === '#experience') {
        window.location.hash = 'experience';
        window.scrollTo(0, 0);
    } else {
        const element = document.querySelector(hash);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            window.history.pushState(null, '', hash);
        }
    }
  };

  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl flex-1"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-400 uppercase bg-blue-500/10 rounded-full border border-blue-500/20"
            >
                Portfolio
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-100 tracking-tight mb-6">
              Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">{PERSONAL_INFO.name}</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-300 font-medium mb-6">
              {PERSONAL_INFO.role}
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed mb-8 max-w-2xl">
              {PERSONAL_INFO.summary}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
               <div className="flex items-center text-slate-400 text-sm">
                  <MapPin className="w-4 h-4 mr-2 text-blue-500" />
                  {PERSONAL_INFO.location}
               </div>
               <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  <Mail className="w-4 h-4 mr-2 text-blue-500" />
                  {PERSONAL_INFO.email}
               </a>
               <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-slate-400 hover:text-blue-400 transition-colors text-sm">
                  <Linkedin className="w-4 h-4 mr-2 text-blue-500" />
                  LinkedIn
               </a>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a 
                href="#experience"
                onClick={(e) => handleNavigation(e, '#experience')}
                className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/20 transition-all hover:scale-105 cursor-pointer"
              >
                View Work
              </a>
              <a 
                href="#contact"
                onClick={(e) => handleNavigation(e, '#contact')}
                className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold rounded-lg transition-all hover:scale-105 cursor-pointer"
              >
                Contact Me
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, rotate: 12 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 bg-blue-500 rounded-2xl rotate-6 opacity-20 blur-lg animate-pulse"></div>
              <div className="absolute inset-0 border-2 border-blue-500/30 rounded-2xl rotate-6"></div>
              
              {!imgError ? (
                <img 
                  src={profileImg} 
                  alt={PERSONAL_INFO.name} 
                  className="relative w-full h-full object-cover rounded-2xl shadow-2xl border border-slate-700"
                  onError={() => {
                    // Simple string logging to avoid circular JSON structure errors
                    console.error("Failed to load profile image from path:", profileImg);
                    setImgError(true);
                  }}
                />
              ) : (
                <div className="relative w-full h-full flex flex-col items-center justify-center bg-slate-800 rounded-2xl border border-slate-700">
                  <User className="w-20 h-20 text-slate-600 mb-2" />
                  <span className="text-slate-500 text-sm font-medium">Image not found</span>
                </div>
              )}
            </div>
          </motion.div>

        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-500 hidden md:block"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
};

export default Hero;