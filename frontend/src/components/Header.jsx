import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Download, Mail, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleDownloadResume = () => {
    // Mock function - will be replaced with actual download
    console.log('Resume download initiated');
    alert('Resume download would start here!');
  };

  return (
    <motion.header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="header">
        <div className="nav-container max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo/Name */}
          <motion.div 
            className="flex items-center"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-xl font-semibold text-gray-darkest">
              {portfolioData.personal.name}
            </h1>
            <div className="ml-3 px-2 py-1 bg-green-100 rounded-full">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                <span className="text-xs text-green-700 font-medium">Available</span>
              </div>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-gray-medium hover:text-gray-darkest transition-colors duration-200 font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              onClick={handleDownloadResume}
              className="btn-secondary flex items-center space-x-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Download size={16} />
              <span>Resume</span>
            </motion.button>
            
            <motion.a
              href={`mailto:${portfolioData.personal.email}`}
              className="btn-primary flex items-center space-x-2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Mail size={16} />
              <span>Contact</span>
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden btn-circular"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-lg ${
            isMenuOpen ? 'block' : 'hidden'
          }`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="px-4 py-6 space-y-4">
            {navigation.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left py-2 text-gray-medium hover:text-gray-darkest transition-colors duration-200 font-medium"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
              >
                {item.name}
              </motion.button>
            ))}
            
            <div className="pt-4 border-t border-gray-lighter space-y-3">
              <motion.button
                onClick={handleDownloadResume}
                className="btn-system w-full flex items-center justify-center space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <Download size={16} />
                <span>Download Resume</span>
              </motion.button>
              
              <motion.a
                href={`mailto:${portfolioData.personal.email}`}
                className="btn-primary w-full flex items-center justify-center space-x-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.7 }}
              >
                <Mail size={16} />
                <span>Get in Touch</span>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;