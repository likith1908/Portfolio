import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Hero = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-32 text-center">
        {/* Hero Content */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Name and Title */}
          <motion.h1 
            className="text-hero mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {portfolioData.personal.name}
          </motion.h1>
          
          <motion.h2 
            className="text-section mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {portfolioData.personal.title}
          </motion.h2>

          {/* Bio */}
          <motion.p 
            className="text-body-large mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {portfolioData.personal.bio}
          </motion.p>

          {/* Location and Availability */}
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-6 mb-12 text-body-small"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="flex items-center space-x-2">
              <MapPin size={16} className="text-gray-medium" />
              <span>{portfolioData.personal.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-700 font-medium">
                {portfolioData.personal.availability}
              </span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <motion.a
              href={`mailto:${portfolioData.personal.email}`}
              className="btn-primary flex items-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={16} />
              <span>Get in Touch</span>
            </motion.a>
            
            <motion.button
              onClick={() => {
                console.log('View Projects clicked');
                document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary flex items-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span>View Projects</span>
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div 
            className="flex justify-center space-x-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-circular"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </motion.a>
            
            <motion.a
              href={portfolioData.personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-circular"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="GitHub"
            >
              <Github size={20} />
            </motion.a>
            
            <motion.a
              href={`tel:${portfolioData.personal.phone}`}
              className="btn-circular"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              title="Phone"
            >
              <Phone size={20} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          whileHover={{ y: -4 }}
        >
          <div className="flex flex-col items-center">
            <span className="text-caption mb-2">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown size={24} className="text-gray-medium" />
            </motion.div>
          </div>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;