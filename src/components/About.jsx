import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const timeline = [
    { year: '2026', event: 'Launching Portfolio v2', desc: 'Mastering React & Vite' },
    { year: '2025', event: 'Senior Frontend Dev', desc: 'Led a team of 5 at Tech Corp' },
    { year: '2023', event: 'Full Stack BootCamp', desc: 'Intensive training in MERN stack' },
    { year: '2021', event: 'Hello World', desc: 'Wrote my first line of code' },
  ];

  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start gap-12">
          
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-display text-accent mb-6">
              LOG_ENTRY: ABOUT_ME
            </h2>
            <div className="prose prose-invert">
              <p className="font-pixel text-lg text-gray-300 leading-relaxed mb-6">
                &gt; Hello! I am a software engineer with a passion for building pixel-perfect digital experiences.
                <br/><br/>
                &gt; My journey began when I discovered the magic of creating something out of nothing with code. Since then, I've been exploring the vast universe of web development.
                <br/><br/>
                &gt; I specialize in React, but I'm always upgrading my ship with new technologies.
              </p>
            </div>
            
            {/* Stats Box */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-gray-800 p-4 border-2 border-secondary text-center">
                <div className="text-3xl font-display text-primary">5+</div>
                <div className="text-xs font-pixel text-gray-400">YEARS EXP</div>
              </div>
              <div className="bg-gray-800 p-4 border-2 border-secondary text-center">
                <div className="text-3xl font-display text-primary">50+</div>
                <div className="text-xs font-pixel text-gray-400">PROJECTS</div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 w-full">
            <h3 className="text-2xl font-display text-secondary mb-6">
              TIMELINE
            </h3>
            <div className="space-y-6">
              {timeline.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 relative"
                >
                  {/* Vertical Line */}
                  <div className="w-1 bg-tertiary h-full absolute left-2 top-2 -z-10"></div>
                  
                  <div className="w-4 h-4 bg-primary border-2 border-white rounded-none z-10 mt-1 flex-shrink-0"></div>
                  
                  <div className="bg-gray-900 p-4 border-l-4 border-primary w-full">
                    <span className="text-accent font-display text-lg">{item.year}</span>
                    <h4 className="text-xl text-white font-bold font-pixel">{item.event}</h4>
                    <p className="text-gray-400 text-sm font-pixel">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
