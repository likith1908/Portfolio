import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Database, 
  Cloud, 
  Wrench, 
  Cpu,
  BookOpen,
  Star
} from 'lucide-react';
import { portfolioData } from '../data/mock';

const Skills = () => {
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

  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: portfolioData.skills.languages,
      color: "blue"
    },
    {
      title: "Developer Tools",
      icon: Wrench,
      skills: portfolioData.skills.developerTools,
      color: "green"
    },
    {
      title: "Libraries & Frameworks",
      icon: Database,
      skills: portfolioData.skills.libraries,
      color: "purple"
    },
    {
      title: "Cloud & Infrastructure",
      icon: Cloud,
      skills: portfolioData.skills.cloudInfrastructure,
      color: "orange"
    },
    {
      title: "Hardware",
      icon: Cpu,
      skills: portfolioData.skills.hardware,
      color: "red"
    }
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-50 border-blue-200 text-blue-700',
      green: 'bg-green-50 border-green-200 text-green-700',
      purple: 'bg-purple-50 border-purple-200 text-purple-700',
      orange: 'bg-orange-50 border-orange-200 text-orange-700',
      red: 'bg-red-50 border-red-200 text-red-700'
    };
    return colors[color] || colors.blue;
  };

  const getIconColor = (color) => {
    const colors = {
      blue: 'text-blue-600',
      green: 'text-green-600',
      purple: 'text-purple-600',
      orange: 'text-orange-600',
      red: 'text-red-600'
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="skills" className="py-24 bg-gray-lightest">
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
              <Star className="text-gray-medium mr-3" size={32} />
              <h2 className="text-section">Technical Skills</h2>
            </div>
            <p className="text-body-large max-w-3xl mx-auto">
              Comprehensive technical expertise across programming languages, frameworks, tools, 
              and platforms essential for modern AI and software development.
            </p>
          </motion.div>

          {/* Skills Categories */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  className="bg-white rounded-lg p-8 border border-gray-lighter"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 12px 28px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Category Header */}
                  <div className="flex items-center mb-6">
                    <div className={`p-3 rounded-lg mr-4 ${getColorClasses(category.color)}`}>
                      <IconComponent 
                        className={getIconColor(category.color)} 
                        size={24} 
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-darkest">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="grid grid-cols-2 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="bg-gray-lightest rounded-md p-3 border border-gray-lighter text-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        whileHover={{ 
                          scale: 1.05,
                          backgroundColor: "rgba(255, 255, 255, 1)"
                        }}
                      >
                        <span className="text-body font-medium text-gray-darkest">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Certifications Section */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="flex items-center mb-8">
              <BookOpen className="text-gray-medium mr-3" size={28} />
              <h3 className="text-modal">Certifications</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {portfolioData.certifications.map((cert) => (
                <motion.div
                  key={cert.id}
                  className="bg-white rounded-lg p-6 border border-gray-lighter"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-semibold text-gray-darkest mb-2">
                        {cert.title}
                      </h4>
                      <p className="text-body text-gray-medium font-medium mb-2">
                        {cert.issuer}
                      </p>
                    </div>
                    <span className="text-body-small text-gray-medium font-medium">
                      {cert.date}
                    </span>
                  </div>
                  
                  <p className="text-body-small text-gray-dark">
                    {cert.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Summary */}
          <motion.div 
            variants={itemVariants}
            className="bg-white rounded-lg p-8 border border-gray-lighter text-center"
          >
            <h3 className="text-modal mb-6">Technical Expertise</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <div className="text-2xl font-bold text-gray-darkest mb-2">
                  {portfolioData.skills.languages.length}+
                </div>
                <div className="text-body-small text-gray-medium">
                  Programming Languages
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-darkest mb-2">
                  {portfolioData.skills.libraries.length}+
                </div>
                <div className="text-body-small text-gray-medium">
                  Libraries & Frameworks
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-darkest mb-2">
                  {portfolioData.skills.developerTools.length}+
                </div>
                <div className="text-body-small text-gray-medium">
                  Developer Tools
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-darkest mb-2">
                  {portfolioData.certifications.length}+
                </div>
                <div className="text-body-small text-gray-medium">
                  Certifications
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;