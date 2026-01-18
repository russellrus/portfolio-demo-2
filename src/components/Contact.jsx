import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-20 text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-display text-accent mb-8">
          ESTABLISH_CONNECTION
        </h2>
        <p className="text-primary font-pixel text-xl mb-12">
          Ready to start a new mission?
        </p>

        <div className="flex flex-row justify-center items-center gap-4">
          <a 
            href="mailto:your.email@example.com" 
            className="w-full max-w-[120px] aspect-[4/3] pixel-btn bg-tertiary text-sm !flex flex-col items-center justify-center gap-2 transition-all group"
          >
            <FaEnvelope className="text-2xl group-hover:scale-110 transition-transform" /> 
            <span className="leading-none text-center">EMAIL</span>
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noreferrer" 
            className="w-full max-w-[120px] aspect-[4/3] pixel-btn bg-gray-700 text-sm !flex flex-col items-center justify-center gap-2 transition-all group"
          >
            <FaGithub className="text-3xl group-hover:scale-110 transition-transform" /> 
            <span className="leading-none text-center">GITHUB</span>
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noreferrer" 
            className="w-full max-w-[120px] aspect-[4/3] pixel-btn bg-blue-700 text-sm !flex flex-col items-center justify-center gap-2 transition-all group"
          >
            <FaLinkedin className="text-3xl group-hover:scale-110 transition-transform" /> 
            <span className="leading-none text-center">LINKEDIN</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
