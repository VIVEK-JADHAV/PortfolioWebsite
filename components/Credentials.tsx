import React from 'react';
import { CERTIFICATIONS, EDUCATION, HOBBIES } from '../constants';
import { Award, GraduationCap, Heart, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Credentials: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-slate-900/30 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Certifications - Featured Section */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center mb-10"
          >
            <div className="p-3 bg-blue-500/10 rounded-xl mr-4">
              <Award className="w-8 h-8 text-blue-500" />
            </div>
            <div>
              <h3 className="text-3xl font-bold text-slate-100">Certifications</h3>
              <p className="text-slate-400 mt-1">Professional credentials and verified expertise</p>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-slate-900 border border-slate-800 p-6 rounded-xl hover:border-blue-500/40 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 rounded-l-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-slate-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <span className="px-3 py-1 bg-slate-800 text-slate-300 text-xs font-semibold rounded-full border border-slate-700">
                    {cert.year}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-slate-200 group-hover:text-white transition-colors leading-tight">
                  {cert.name}
                </h4>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Education */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center mb-8">
                <GraduationCap className="w-6 h-6 text-blue-500 mr-3" />
                <h3 className="text-2xl font-bold text-slate-100">Education</h3>
             </div>
             <div className="space-y-6">
                {EDUCATION.map((edu, index) => (
                    <div key={index} className="bg-slate-900 border border-slate-800 p-8 rounded-xl hover:border-blue-500/30 transition-colors">
                        <h4 className="text-xl font-bold text-slate-100">{edu.institution}</h4>
                        <p className="text-blue-400 font-medium mt-2">{edu.degree}</p>
                        <p className="text-slate-500 text-sm mt-4 flex items-center">
                          <span className="w-2 h-2 bg-slate-600 rounded-full mr-2"></span>
                          {edu.year}
                        </p>
                    </div>
                ))}
             </div>
          </motion.div>

          {/* Hobbies/Interests */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
             <div className="flex items-center mb-8">
                <Heart className="w-6 h-6 text-blue-500 mr-3" />
                <h3 className="text-2xl font-bold text-slate-100">Interests & Hobbies</h3>
             </div>
             <div className="bg-slate-900 border border-slate-800 p-8 rounded-xl h-full">
                <p className="text-slate-400 mb-6">
                  Beyond data engineering, I am passionate about sharing knowledge and outdoor activities.
                </p>
                <div className="flex flex-wrap gap-3">
                    {HOBBIES.map((hobby, index) => (
                        <span key={index} className="px-5 py-2.5 bg-slate-800 text-slate-200 rounded-lg text-sm font-medium border border-slate-700 hover:border-blue-500/30 hover:text-blue-400 transition-colors">
                            {hobby}
                        </span>
                    ))}
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Credentials;