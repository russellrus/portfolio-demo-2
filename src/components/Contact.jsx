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

        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a href="mailto:your.email@example.com" className="pixel-btn bg-tertiary flex items-center justify-center gap-3">
            <FaEnvelope /> SEND EMAIL
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="pixel-btn bg-gray-700 flex items-center justify-center gap-3">
            <FaGithub /> GITHUB
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="pixel-btn bg-blue-700 flex items-center justify-center gap-3">
            <FaLinkedin /> LINKEDIN
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
