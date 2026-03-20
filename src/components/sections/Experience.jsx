import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { FiBriefcase, FiCalendar, FiArrowRight } from 'react-icons/fi';

const Experience = () => {
  return (
    <section className="section-padding bg-gray-50 dark:bg-dark-card">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-base text-primary-500 font-semibold tracking-wide uppercase">My Journey</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Professional Experience
          </p>
          <div className="mt-4 w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700 rounded-full"></div>

          <div className="space-y-12">
            {portfolioData.experience.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 mt-6 md:mt-0 w-6 h-6 rounded-full bg-primary-500 border-4 border-white dark:border-dark-card shadow z-10"></div>
                
                <div className="ml-12 md:ml-0 md:w-1/2 flex flex-col px-0 md:px-8 pt-4 md:pt-0">
                  <div className={`bg-white dark:bg-dark-bg p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 ${index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'} w-full transition-transform hover:-translate-y-1 duration-300 hover:shadow-md hover:border-primary-100 dark:hover:border-primary-900`}>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
                      <FiBriefcase className="text-primary-500 flex-shrink-0" />
                      {exp.role}
                    </h3>
                    <h4 className="text-lg font-medium text-primary-600 dark:text-primary-400 mt-2 mb-3">
                      {exp.company}
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 mb-5 font-medium bg-gray-50 dark:bg-dark-card inline-flex px-3 py-1 rounded-full">
                      <FiCalendar />
                      <span>{exp.duration}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                      {exp.responsibilities}
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100 dark:border-gray-800">
                      <h5 className="text-sm font-bold text-gray-900 dark:text-white mb-3 uppercase tracking-wider">Key Projects</h5>
                      <ul className="space-y-2">
                        {exp.projects.map((project, i) => (
                          <li key={i} className="text-sm text-gray-600 dark:text-gray-400 flex items-start gap-2">
                            <FiArrowRight className="text-primary-500 mt-1 flex-shrink-0" />
                            <span>{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
