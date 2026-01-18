import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', ...new Set(projects.flatMap(p => p.tags))];
  
  // Simplified category logic for demo: Just 'All' or specific tag match
  // For better UX, usually we have broad categories (Frontend, Game, etc.)
  // but here I'll stick to 'All' or manual selection if needed.
  // Actually, let's just use a few predefined categories for simplicity if `tags` are too diverse.
  const displayCategories = ['All', 'React', 'Game Dev', 'JavaScript'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.tags.includes(filter));

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display text-accent mb-4">
            MISSION_LOG
          </h2>
          <p className="text-primary font-pixel text-xl mb-8">
            Completed Operations
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {displayCategories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 font-pixel text-lg border-2 transition-all ${
                  filter === cat 
                    ? 'bg-primary text-background border-primary' 
                    : 'bg-transparent text-primary border-primary hover:bg-primary/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={project.id}
                className="bg-background border-4 border-secondary group hover:border-accent transition-colors duration-300 flex flex-col h-full"
              >
                <div className="relative overflow-hidden h-48 border-b-4 border-secondary bg-gray-900 group-hover:border-accent flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-contain p-4 transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none mix-blend-overlay"></div>
                </div>

                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-display text-primary mb-2 group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 font-pixel mb-4 flex-grow text-lg">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs bg-tertiary text-white px-2 py-1 font-bold font-mono">
                        #{tag.toUpperCase()}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-auto">
                    <a 
                      href={project.githubLink} 
                      className="flex-1 pixel-btn bg-gray-700 text-lg !flex flex-row items-center justify-center gap-6 hover:bg-gray-600 transition-all py-5"
                    >
                      <FaGithub className="text-2xl" /> 
                      <span className="leading-none">CODE</span>
                    </a>
                    <a 
                      href={project.demoLink} 
                      className="flex-1 pixel-btn text-lg !flex flex-row items-center justify-center gap-6 transition-all py-5"
                    >
                      <FaExternalLinkAlt className="text-xl" /> 
                      <span className="leading-none">DEMO</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
