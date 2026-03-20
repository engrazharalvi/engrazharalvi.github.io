import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { FiSettings, FiCheckCircle } from 'react-icons/fi';

const Projects = () => {
  // Aggregate all projects from experience for a focused projects view
  const allProjects = portfolioData.experience.flatMap(exp => 
    exp.projects.map(proj => ({
      company: exp.company,
      role: exp.role,
      title: proj
    }))
  );

  return (
    <section className="section-padding bg-white dark:bg-dark-bg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-base text-primary-500 font-semibold tracking-wide uppercase">My Portfolio</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Featured Projects
          </p>
          <div className="mt-4 w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-dark-card rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm flex flex-col hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-primary-500/10 to-primary-600/5 dark:from-primary-900/20 dark:to-primary-800/10 p-8 flex justify-center items-center h-48 relative overflow-hidden group">
                <div className="absolute -right-10 -top-10 bg-primary-500/10 w-32 h-32 rounded-full filter blur-xl group-hover:bg-primary-500/20 transition-all duration-500"></div>
                <FiSettings className="text-6xl text-primary-500/40 group-hover:text-primary-500 group-hover:rotate-180 transition-all duration-700" />
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                  {project.title}
                </h3>
                <div className="mt-auto">
                  <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <FiCheckCircle className="text-primary-500 flex-shrink-0" />
                    <span className="font-medium truncate">{project.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
