import React from 'react';
import { PROJECTS } from '../constants';
import { FolderGit2, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">Key Projects</h2>
          <div className="h-1 w-20 bg-blue-500 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={index}
              className="group bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500/40 transition-all duration-300"
            >
              <div className="p-1 h-1 bg-gradient-to-r from-blue-600 to-cyan-400 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="p-8">
                <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <FolderGit2 className="w-6 h-6 text-blue-400" />
                </div>
                
                <h3 className="text-xl font-bold text-slate-100 mb-4 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                
                <div className="space-y-2 mb-6">
                  {project.description.map((desc, i) => (
                    <p key={i} className="text-slate-400 text-sm leading-relaxed">
                      {desc}
                    </p>
                  ))}
                </div>
                
                <div className="flex items-center text-blue-500 text-sm font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  View Details <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;