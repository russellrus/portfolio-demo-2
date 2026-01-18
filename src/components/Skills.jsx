import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data'; // We'll assume structure from data.js

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-opacity-50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-display text-accent mb-4">
            SKILL_TREE
          </h2>
          <div className="w-24 h-2 bg-secondary mx-auto mb-4"></div>
          <p className="text-primary font-pixel text-xl">
            Tools available in inventory
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((category, idx) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-background border-4 border-tertiary p-6 relative shadow-lg"
            >
              {/* Pixel Corners */}
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary"></div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-primary"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-primary"></div>

              <h3 className="text-2xl font-display text-secondary mb-6 text-center uppercase border-b-2 border-dashed border-gray-600 pb-2">
                {category.name}
              </h3>

              <div className="space-y-4">
                {category.items.map((skill) => (
                  <div key={skill} className="group">
                    <div className="flex justify-between mb-1 font-pixel text-lg">
                      <span className="text-gray-300 group-hover:text-accent transition-colors">
                        {skill}
                      </span>
                      <span className="text-secondary">LV. MAX</span>
                    </div>
                    <div className="w-full bg-gray-700 h-4 border-2 border-gray-600 relative">
                      <motion.div
                        className="bg-primary h-full absolute top-0 left-0"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${Math.floor(Math.random() * 20 + 80)}%` }} // Random high level
                        transition={{ duration: 1, delay: 0.5 }}
                      ></motion.div>
                      {/* Grid lines on bar */}
                      <div className="absolute inset-0 grid grid-cols-10 h-full w-full pointer-events-none">
                         {[...Array(10)].map((_, i) => (
                           <div key={i} className="border-r border-background/30 h-full"></div>
                         ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
