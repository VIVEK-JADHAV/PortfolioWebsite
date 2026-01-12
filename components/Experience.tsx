import React from 'react';
import { EXPERIENCE } from '../constants';
import { Calendar, MapPin, Briefcase, Building2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Experience: React.FC = () => {
  const handleBackToHome = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.hash = '';
  };

  if (!EXPERIENCE || EXPERIENCE.length === 0) {
    return (
      <section id="experience" className="min-h-screen pt-32 pb-20 relative z-10 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <p className="text-slate-400">Experience details are being updated.</p>
         <div className="mt-8">
            <a 
                href="#"
                onClick={handleBackToHome}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors py-3 px-6 rounded-full border border-slate-800 hover:border-slate-600 hover:bg-slate-900"
            >
                Back to Home
            </a>
        </div>
      </section>
    );
  }

  return (
    <section id="experience" className="min-h-screen pt-32 pb-20 relative z-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        
        {/* Page Header */}
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-100 mb-6 tracking-tight">Professional Experience</h2>
          <div className="h-1.5 w-24 bg-blue-500 rounded mx-auto mb-8"></div>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            A detailed timeline of my journey in Data Engineering, designing scalable architectures and optimizing data pipelines for global enterprises.
          </p>
        </motion.div>

        <div className="space-y-16">
          {EXPERIENCE.map((job, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-8 md:p-10 hover:border-blue-500/30 transition-all duration-300 group shadow-lg"
            >
                {/* Decorative glow */}
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500"></div>

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8 relative z-10">
                    <div>
                        <div className="flex items-center gap-3 mb-2">
                             <div className="p-2 bg-blue-500/10 rounded-lg">
                                <Building2 className="w-6 h-6 text-blue-500" />
                             </div>
                             <h3 className="text-2xl md:text-3xl font-bold text-slate-100">{job.company}</h3>
                        </div>
                        <h4 className="text-xl text-blue-400 font-semibold mt-1 flex items-center gap-2">
                            {job.role}
                        </h4>
                    </div>

                    <div className="flex flex-col gap-2 md:text-right text-slate-400 text-sm font-medium bg-slate-950/50 p-4 rounded-xl border border-slate-800/50">
                        <div className="flex items-center md:justify-end gap-2 text-slate-300">
                            <Calendar className="w-4 h-4 text-blue-500" />
                            {job.period}
                        </div>
                        <div className="flex items-center md:justify-end gap-2">
                            <MapPin className="w-4 h-4 text-slate-500" />
                            {job.location}
                        </div>
                    </div>
                </div>

                <div className="relative z-10 mb-8">
                    <h5 className="text-sm uppercase tracking-wider text-slate-500 font-semibold mb-4">Key Responsibilities & Achievements</h5>
                    <ul className="space-y-4">
                        {job.description.map((desc, i) => (
                        <li key={i} className="flex items-start text-slate-300 leading-relaxed group/item">
                            <span className="mt-2 mr-4 min-w-[6px] h-[6px] rounded-full bg-blue-500 group-hover/item:scale-150 transition-transform duration-300"></span>
                            <span className="text-base md:text-lg text-slate-300/90">{desc}</span>
                        </li>
                        ))}
                    </ul>
                </div>

                {job.techStack && job.techStack.length > 0 && (
                    <div className="relative z-10 pt-6 border-t border-slate-800/50">
                        <h5 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-4 flex items-center gap-2">
                            <Briefcase className="w-3 h-3" /> Technologies Used
                        </h5>
                        <div className="flex flex-wrap gap-2">
                            {job.techStack.map((tech, idx) => (
                                <span 
                                    key={idx}
                                    className="px-3 py-1.5 text-sm bg-slate-950 text-blue-300 rounded-md border border-slate-800 font-medium hover:border-blue-500/40 hover:text-blue-200 transition-colors shadow-sm"
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                )}
            </motion.div>
          ))}
        </div>
        
        {/* Footer Navigation */}
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-20 flex justify-center"
        >
            <a 
                href="#"
                onClick={handleBackToHome}
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors py-3 px-6 rounded-full border border-slate-800 hover:border-slate-600 hover:bg-slate-900"
            >
                Back to Home
            </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;