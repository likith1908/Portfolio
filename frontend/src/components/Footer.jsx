import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp, Mail, Linkedin, Github, Phone } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-darkest text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-semibold mb-4">{portfolioData.personal.name}</h3>
            <p className="text-gray-300 text-body mb-6">
              AI Engineer passionate about creating innovative solutions that bridge 
              the gap between artificial intelligence and real-world applications.
            </p>
            
            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-gray-800 rounded-lg p-3">
                <div className="text-lg font-bold text-white">
                  {portfolioData.projects.length}+
                </div>
                <div className="text-caption text-gray-400">Projects</div>
              </div>
              <div className="bg-gray-800 rounded-lg p-3">
                <div className="text-lg font-bold text-white">
                  {portfolioData.experience.length}+
                </div>
                <div className="text-caption text-gray-400">Experiences</div>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {[
                { name: 'About', href: '#about' },
                { name: 'Experience', href: '#experience' },
                { name: 'Projects', href: '#projects' },
                { name: 'Skills', href: '#skills' },
                { name: 'Contact', href: '#contact' }
              ].map((link) => (
                <motion.button
                  key={link.name}
                  onClick={() => {
                    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                  whileHover={{ x: 4 }}
                >
                  {link.name}
                </motion.button>
              ))}
            </nav>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-6">Get In Touch</h4>
            <div className="space-y-4">
              <motion.a
                href={`mailto:${portfolioData.personal.email}`}
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200"
                whileHover={{ x: 4 }}
              >
                <Mail size={16} />
                <span className="text-body-small">{portfolioData.personal.email}</span>
              </motion.a>
              
              <motion.a
                href={`tel:${portfolioData.personal.phone}`}
                className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200"
                whileHover={{ x: 4 }}
              >
                <Phone size={16} />
                <span className="text-body-small">{portfolioData.personal.phone}</span>
              </motion.a>
            </div>

            {/* Social Links */}
            <div className="mt-6">
              <h5 className="text-body font-medium mb-4">Connect</h5>
              <div className="flex space-x-4">
                <motion.a
                  href={portfolioData.personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin size={18} />
                </motion.a>
                
                <motion.a
                  href={portfolioData.personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-800 rounded-lg text-gray-300 hover:text-white hover:bg-gray-600 transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github size={18} />
                </motion.a>
                
                <motion.a
                  href={`mailto:${portfolioData.personal.email}`}
                  className="p-3 bg-gray-800 rounded-lg text-gray-300 hover:text-white hover:bg-red-600 transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail size={18} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 border-t border-gray-700"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Copyright */}
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-body-small text-gray-400">
                © {currentYear} {portfolioData.personal.name}. Made with
              </span>
              <Heart size={14} className="text-red-500" />
              <span className="text-body-small text-gray-400">
                and lots of ☕
              </span>
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-200"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <span className="text-body-small">Back to top</span>
              <ArrowUp size={14} />
            </motion.button>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-800 text-center">
            <p className="text-caption text-gray-500">
              This portfolio showcases my journey in AI, machine learning, and software development. 
              Always open to discussing exciting opportunities and collaborations.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;