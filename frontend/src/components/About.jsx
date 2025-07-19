import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, FileText, Calendar } from 'lucide-react';
import { portfolioData } from '../data/mock';

const About = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-section mb-4">About Me</h2>
            <p className="text-body-large max-w-3xl mx-auto">
              Passionate about artificial intelligence and its applications in solving real-world problems. 
              Currently pursuing my journey in AI engineering with hands-on experience in cutting-edge technologies.
            </p>
          </motion.div>

          {/* Education Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="flex items-center mb-8">
              <GraduationCap className="text-gray-medium mr-3" size={28} />
              <h3 className="text-modal">Education</h3>
            </div>
            
            <div className="space-y-8">
              {portfolioData.education.map((edu) => (
                <motion.div
                  key={edu.id}
                  className="bg-gray-lightest rounded-lg p-6 border border-gray-lighter"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-3">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-darkest mb-1">
                        {edu.institution}
                      </h4>
                      <p className="text-body text-gray-dark">{edu.degree}</p>
                    </div>
                    <div className="flex flex-col md:text-right mt-2 md:mt-0">
                      <span className="text-body-small text-gray-medium">
                        {edu.duration}
                      </span>
                      <span className="text-body-small text-gray-medium">
                        {edu.location}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span className="text-body-small font-medium text-gray-medium">
                        CGPA: {edu.cgpa}
                      </span>
                      {edu.status && (
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-caption font-medium rounded-full">
                          {edu.status}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Patents Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="flex items-center mb-8">
              <FileText className="text-gray-medium mr-3" size={28} />
              <h3 className="text-modal">Patents</h3>
            </div>
            
            {portfolioData.patents.map((patent) => (
              <motion.div
                key={patent.id}
                className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-200"
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 8px 24px rgba(59, 130, 246, 0.15)"
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex flex-col md:flex-row md:items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-darkest mb-2">
                      {patent.title}
                    </h4>
                    <p className="text-body text-gray-dark mb-3">
                      {patent.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center gap-4 text-body-small text-gray-medium">
                  <span className="flex items-center">
                    <Calendar className="mr-2" size={14} />
                    Published: {patent.publishDate}
                  </span>
                  <span className="font-mono text-blue-600">
                    {patent.patentNumber}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Awards Section */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center mb-8">
              <Award className="text-gray-medium mr-3" size={28} />
              <h3 className="text-modal">Awards & Achievements</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {portfolioData.awards.map((award) => (
                <motion.div
                  key={award.id}
                  className="bg-yellow-50 rounded-lg p-6 border border-yellow-200"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 8px 24px rgba(245, 158, 11, 0.15)"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <h4 className="text-lg font-semibold text-gray-darkest mb-2">
                    {award.title}
                  </h4>
                  <p className="text-body text-gray-dark mb-3">
                    {award.description}
                  </p>
                  <span className="text-body-small text-yellow-600 font-medium">
                    {award.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;