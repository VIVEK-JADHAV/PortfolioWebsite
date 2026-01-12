import React from 'react';
import { PERSONAL_INFO } from '../constants';
import { Mail, Phone, Linkedin, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact: React.FC = () => {
  return (
    <motion.footer 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="contact" 
        className="py-20 border-t border-slate-800 relative z-10 bg-slate-950"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-slate-100 mb-2">Let's Connect</h2>
            <p className="text-slate-400 max-w-md">
              I'm always open to discussing new opportunities in Data Engineering, Pipeline Optimization, and Cloud Architecture.
            </p>
          </div>

          <div className="flex flex-col gap-4">
             <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center justify-center md:justify-start gap-3 text-slate-300 hover:text-blue-400 transition-colors group">
                <div className="p-2 bg-slate-900 rounded-full group-hover:bg-slate-800 transition-colors">
                    <Mail className="w-5 h-5" />
                </div>
                {PERSONAL_INFO.email}
             </a>
             <a href={`tel:${PERSONAL_INFO.phone}`} className="flex items-center justify-center md:justify-start gap-3 text-slate-300 hover:text-blue-400 transition-colors group">
                <div className="p-2 bg-slate-900 rounded-full group-hover:bg-slate-800 transition-colors">
                    <Phone className="w-5 h-5" />
                </div>
                {PERSONAL_INFO.phone}
             </a>
             <div className="flex items-center justify-center md:justify-start gap-3 text-slate-300 group">
                <div className="p-2 bg-slate-900 rounded-full">
                    <MapPin className="w-5 h-5" />
                </div>
                {PERSONAL_INFO.location}
             </div>
             <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center md:justify-start gap-3 text-slate-300 hover:text-blue-400 transition-colors group">
                <div className="p-2 bg-slate-900 rounded-full group-hover:bg-slate-800 transition-colors">
                    <Linkedin className="w-5 h-5" />
                </div>
                View LinkedIn Profile
             </a>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-900 text-center text-slate-600 text-sm">
          <p>© {new Date().getFullYear()} Vivek R Jadhav. All rights reserved.</p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Contact;