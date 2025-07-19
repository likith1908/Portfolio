import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Linkedin, 
  Github,
  MessageCircle,
  Clock,
  CheckCircle
} from 'lucide-react';
import { portfolioData, submitContactForm } from '../data/mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await submitContactForm(formData);
      setSubmitStatus({ type: 'success', message: response.message });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    }

    setIsSubmitting(false);
  };

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

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: portfolioData.personal.email,
      href: `mailto:${portfolioData.personal.email}`,
      description: "Best for detailed discussions"
    },
    {
      icon: Phone,
      title: "Phone",
      value: portfolioData.personal.phone,
      href: `tel:${portfolioData.personal.phone}`,
      description: "Quick conversations"
    },
    {
      icon: MapPin,
      title: "Location",
      value: portfolioData.personal.location,
      href: null,
      description: "Available for local meetings"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-white">
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
              <MessageCircle className="text-gray-medium mr-3" size={32} />
              <h2 className="text-section">Get In Touch</h2>
            </div>
            <p className="text-body-large max-w-3xl mx-auto">
              I'm always interested in discussing new opportunities, collaborations, 
              or innovative projects in AI and technology. Let's connect!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-modal mb-8">Contact Information</h3>
                
                {/* Contact Methods */}
                <div className="space-y-6">
                  {contactMethods.map((method, index) => {
                    const IconComponent = method.icon;
                    return (
                      <motion.div
                        key={method.title}
                        className="flex items-start space-x-4 p-4 rounded-lg bg-gray-lightest border border-gray-lighter"
                        whileHover={{ 
                          scale: 1.02,
                          boxShadow: "0 8px 24px rgba(0, 0, 0, 0.1)"
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-3 bg-white rounded-lg border border-gray-lighter">
                          <IconComponent className="text-gray-medium" size={20} />
                        </div>
                        
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-darkest mb-1">
                            {method.title}
                          </h4>
                          <p className="text-body-small text-gray-medium mb-2">
                            {method.description}
                          </p>
                          {method.href ? (
                            <motion.a
                              href={method.href}
                              className="text-link hover:underline"
                              whileHover={{ x: 4 }}
                            >
                              {method.value}
                            </motion.a>
                          ) : (
                            <span className="text-body text-gray-darkest">
                              {method.value}
                            </span>
                          )}
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="font-semibold text-gray-darkest mb-4">
                  Connect on Social
                </h4>
                <div className="flex space-x-4">
                  <motion.a
                    href={portfolioData.personal.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-circular bg-blue-50 border-blue-200 text-blue-600 hover:bg-blue-100"
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
                    className="btn-circular bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    title="GitHub"
                  >
                    <Github size={20} />
                  </motion.a>
                </div>
              </div>

              {/* Availability Status */}
              <div className="p-6 bg-green-50 rounded-lg border border-green-200">
                <div className="flex items-center mb-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                  <h4 className="font-semibold text-green-800">
                    Currently Available
                  </h4>
                </div>
                <p className="text-body-small text-green-700">
                  {portfolioData.personal.availability}
                </p>
                <div className="flex items-center mt-3 text-body-small text-green-600">
                  <Clock size={14} className="mr-1" />
                  <span>Response time: Usually within 24 hours</span>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <h3 className="text-modal mb-8">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label 
                      htmlFor="name" 
                      className="block text-body-small font-medium text-gray-darkest mb-2"
                    >
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-lighter rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label 
                      htmlFor="email" 
                      className="block text-body-small font-medium text-gray-darkest mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-lighter rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label 
                    htmlFor="subject" 
                    className="block text-body-small font-medium text-gray-darkest mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-lighter rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label 
                    htmlFor="message" 
                    className="block text-body-small font-medium text-gray-darkest mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-lighter rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me more about your project or opportunity..."
                  />
                </div>

                {/* Submit Status */}
                {submitStatus && (
                  <motion.div
                    className={`p-4 rounded-md ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-50 text-green-700 border border-green-200' 
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <div className="flex items-center">
                      {submitStatus.type === 'success' ? (
                        <CheckCircle size={16} className="mr-2" />
                      ) : (
                        <MessageCircle size={16} className="mr-2" />
                      )}
                      <span className="text-body-small">
                        {submitStatus.message}
                      </span>
                    </div>
                  </motion.div>
                )}

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary w-full flex items-center justify-center space-x-2 ${
                    isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      <span>Send Message</span>
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;