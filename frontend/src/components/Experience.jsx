import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data/mock';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'Internship':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Leadership':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  return (
    <section id="experience" className="py-24 bg-gray-lightest">
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
              <Briefcase className="text-gray-medium mr-3" size={32} />
              <h2 className="text-section">Experience</h2>
            </div>
            <p className="text-body-large max-w-3xl mx-auto">
              My journey in AI and technology, from internships to leadership roles, 
              showcasing hands-on experience in cutting-edge projects.
            </p>
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-lighter hidden md:block"></div>

            <div className="space-y-12">
              {portfolioData.experience.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 bg-white border-4 border-blue-500 rounded-full hidden md:block"></div>

                  {/* Experience Card */}
                  <motion.div
                    className="md:ml-20 bg-white rounded-lg p-6 shadow-sm border border-gray-lighter"
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 12px 28px rgba(0, 0, 0, 0.1)"
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-darkest mb-2">
                          {exp.position}
                        </h3>
                        <h4 className="text-lg text-gray-dark mb-3 font-medium">
                          {exp.company}
                        </h4>
                      </div>
                      
                      <div className="flex flex-col lg:text-right space-y-2">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-caption font-medium ${getTypeColor(exp.type)}`}>
                          {exp.type}
                        </span>
                        
                        <div className="flex flex-col lg:items-end space-y-1 text-body-small text-gray-medium">
                          <div className="flex items-center">
                            <Calendar className="mr-1" size={14} />
                            <span>{exp.duration}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="mr-1" size={14} />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="space-y-3">
                      <h5 className="font-semibold text-gray-darkest mb-3">
                        Key Achievements:
                      </h5>
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <motion.div
                          key={achievementIndex}
                          className="flex items-start space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: achievementIndex * 0.1 }}
                        >
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-body text-gray-dark leading-relaxed">
                            {achievement}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Company Link (if available) */}
                    {exp.company !== "Mahindra University" && (
                      <div className="mt-4 pt-4 border-t border-gray-lighter">
                        <motion.button
                          className="text-link flex items-center space-x-1 hover:underline"
                          whileHover={{ x: 4 }}
                          onClick={() => console.log(`Learn more about ${exp.company}`)}
                        >
                          <span>Learn more about {exp.company}</span>
                          <ExternalLink size={14} />
                        </motion.button>
                      </div>
                    )}
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <motion.div 
            variants={itemVariants}
            className="mt-20 bg-white rounded-lg p-8 shadow-sm border border-gray-lighter"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-2xl font-bold text-gray-darkest mb-2">
                  {portfolioData.experience.length}+
                </div>
                <div className="text-body text-gray-medium">
                  Professional Experiences
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-darkest mb-2">
                  2+
                </div>
                <div className="text-body text-gray-medium">
                  Years in AI/ML
                </div>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-darkest mb-2">
                  97%
                </div>
                <div className="text-body text-gray-medium">
                  Peak Accuracy Achieved
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;