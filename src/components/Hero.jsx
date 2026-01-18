import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import profileImg from '../assets/profile.jpeg';

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Parallax transforms - closer layers move more
  const xSmall = useTransform(mouseX, [0, window.innerWidth], [-15, 15]);
  const ySmall = useTransform(mouseY, [0, window.innerHeight], [-15, 15]);

  const xMedium = useTransform(mouseX, [0, window.innerWidth], [-30, 30]);
  const yMedium = useTransform(mouseY, [0, window.innerHeight], [-30, 30]);

  const xLarge = useTransform(mouseX, [0, window.innerWidth], [-60, 60]);
  const yLarge = useTransform(mouseY, [0, window.innerHeight], [-60, 60]);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background Stars - Multi-layered Pixel Space with Parallax */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Small Stars (Distant) */}
        <motion.div style={{ x: xSmall, y: ySmall }} className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={`small-${i}`}
              className="absolute bg-white w-0.5 h-0.5"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight, 
                opacity: Math.random() 
              }}
              animate={{ 
                opacity: [0.2, 1, 0.2],
              }}
              transition={{ 
                duration: Math.random() * 3 + 2, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
            />
          ))}
        </motion.div>

        {/* Medium Stars */}
        <motion.div style={{ x: xMedium, y: yMedium }} className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={`medium-${i}`}
              className="absolute bg-gray-300 w-1 h-1"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight, 
                opacity: Math.random() * 0.5 + 0.3
              }}
              animate={{ 
                y: [null, Math.random() * 10 - 5], // Slight drift
                opacity: [0.3, 0.8, 0.3]
              }}
              transition={{ 
                duration: Math.random() * 4 + 3, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
            />
          ))}
        </motion.div>

        {/* Large Stars (Nearby) */}
        <motion.div style={{ x: xLarge, y: yLarge }} className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={`large-${i}`}
              className="absolute bg-accent w-1.5 h-1.5"
              initial={{ 
                x: Math.random() * window.innerWidth, 
                y: Math.random() * window.innerHeight, 
                opacity: 0 
              }}
              animate={{ 
                opacity: [0.4, 1, 0.4],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                duration: Math.random() * 5 + 4, 
                repeat: Infinity, 
                ease: "easeInOut",
                delay: Math.random() * 5
              }}
            />
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl text-secondary mb-2 font-pixel">
              WELCOME TO MY UNIVERSE_
            </h2>
            <h1 className="text-4xl md:text-6xl font-display text-accent mb-6 leading-tight">
              I BUILD <br/>
              <span className="text-primary">DIGITAL WORLDS</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 font-pixel max-w-lg mx-auto md:mx-0">
              Frontend Developer | Space Explorer | Pixel Artist
              <br/>
              Crafting immersive web experiences with modern tech.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a href="#projects" className="pixel-btn text-center">
                VIEW PROJECTS
              </a>
              <a href="#contact" className="pixel-btn bg-tertiary hover:bg-secondary text-center">
                CONTACT ME
              </a>
            </div>
          </motion.div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            {/* Profile Image with Pixel Border */}
            <div className="w-64 h-64 md:w-80 md:h-80 bg-tertiary pixel-border overflow-hidden relative group z-10">
              <motion.img 
                src={profileImg} 
                alt="Profile" 
                className="w-full h-full object-cover filter contrast-125 brightness-110"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <div className="absolute inset-0 border-4 border-primary opacity-30 pointer-events-none"></div>
              <div className="absolute bottom-4 right-4 bg-background px-2 py-1 border-2 border-primary text-xs font-pixel">
                PLAYER_1
              </div>
            </div>
            
            {/* Decorative Elements - Orbiting Icons */}
            <motion.div 
              className="absolute -top-6 -right-6 text-4xl z-20"
              animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              👾
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-8 -left-8 text-4xl z-20"
              animate={{ x: [0, 15, 0], y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              🚀
            </motion.div>

            <motion.div 
              className="absolute top-1/2 -right-12 text-3xl z-0"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              ⭐
            </motion.div>

            <motion.div 
              className="absolute -top-12 left-10 text-3xl z-0"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              🪐
            </motion.div>

            <motion.div 
              className="absolute bottom-10 -left-14 text-2xl z-0"
              animate={{ opacity: [0.2, 0.8, 0.2] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              ✨
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
