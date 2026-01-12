import React from 'react';
import { SKILLS } from '../constants';
import { Code2, Database, Cloud, Server } from 'lucide-react';
import { motion } from 'framer-motion';

const getIcon = (category: string) => {
  if (category.includes("Languages")) return <Code2 className="w-6 h-6 text-blue-400" />;
  if (category.includes("AWS") || category.includes("Azure") || category.includes("Cloud")) return <Cloud className="w-6 h-6 text-blue-400" />;
  if (category.includes("Big Data")) return <Server className="w-6 h-6 text-blue-400" />;
  return <Database className="w-6 h-6 text-blue-400" />;
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  }
};

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-slate-900/30 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Technical Skills</h2>
          <div className="h-1 w-20 bg-blue-500 rounded mx-auto"></div>
          <p className="mt-4 text-slate-400">A comprehensive toolset for building scalable data solutions</p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {SKILLS.map((skillGroup, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-slate-900/80 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  {getIcon(skillGroup.category)}
                </div>
                <h3 className="font-semibold text-slate-200">{skillGroup.category}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 text-sm bg-slate-800 text-blue-100 rounded-full border border-slate-700 hover:border-blue-500/50 hover:bg-slate-800/80 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;