import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Calendar, ExternalLink, Github, Filter } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  
  const categories = ['All', 'AI/ML', 'Research', 'Data Science'];
  
  const filteredProjects = selectedCategory === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'AI/ML':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Research':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Data Science':
        return 'bg-green-100 text-green-700 border-green-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Code className="text-gray-medium mr-3" size={32} />
              <h2 className="text-section">Featured Projects</h2>
            </div>
            <p className="text-body-large max-w-3xl mx-auto">
              A showcase of my technical projects spanning AI/ML, research, and data science, 
              demonstrating practical applications of cutting-edge technologies.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex justify-center mb-12">
            <div className="flex items-center space-x-2 bg-gray-lightest rounded-lg p-2 border border-gray-lighter">
              <Filter size={16} className="text-gray-medium ml-2" />
              {categories.map((category) => (
                <motion.button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-md text-body-small font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-white text-gray-darkest shadow-sm border border-gray-lighter'
                      : 'text-gray-medium hover:text-gray-darkest hover:bg-white/50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="bg-gray-lightest rounded-lg p-8 border border-gray-lighter"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 12px 28px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ duration: 0.3 }}
                layout
              >
                {/* Project Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-6">
                  <div className="flex-1 mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold text-gray-darkest mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center space-x-4 mb-3">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-caption font-medium ${getCategoryColor(project.category)}`}>
                        {project.category}
                      </span>
                      <div className="flex items-center text-body-small text-gray-medium">
                        <Calendar className="mr-1" size={14} />
                        <span>{project.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project Description */}
                <p className="text-body text-gray-dark mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-darkest mb-3 text-body-small">
                    Technologies Used:
                  </h5>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-white text-gray-darkest text-caption font-medium rounded-md border border-gray-lighter"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="mb-6">
                  <h5 className="font-semibold text-gray-darkest mb-3 text-body-small">
                    Key Achievements:
                  </h5>
                  <div className="space-y-2">
                    {project.achievements.map((achievement, achievementIndex) => (
                      <div key={achievementIndex} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2.5 flex-shrink-0"></div>
                        <p className="text-body-small text-gray-dark">
                          {achievement}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Actions */}
                <div className="flex space-x-3 pt-4 border-t border-gray-lighter">
                  <motion.button
                    className="btn-link flex items-center space-x-1"
                    whileHover={{ x: 4 }}
                    onClick={() => console.log(`View ${project.title} details`)}
                  >
                    <span>View Details</span>
                    <ExternalLink size={14} />
                  </motion.button>
                  
                  <motion.button
                    className="btn-link flex items-center space-x-1"
                    whileHover={{ x: 4 }}
                    onClick={() => console.log(`View ${project.title} on GitHub`)}
                  >
                    <Github size={14} />
                    <span>Source Code</span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Project Summary */}
          <motion.div 
            variants={itemVariants}
            className="mt-16 text-center bg-gray-lightest rounded-lg p-8 border border-gray-lighter"
          >
            <h3 className="text-modal mb-6">Project Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-2xl font-bold text-gray-darkest mb-2">
                  {portfolioData.projects.length}+
                </div>
                <div className="text-body text-gray-medium">
                  Technical Projects
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-darkest mb-2">
                  3
                </div>
                <div className="text-body text-gray-medium">
                  Technology Domains
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-darkest mb-2">
                  1
                </div>
                <div className="text-body text-gray-medium">
                  Published Patent
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;