import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { FiMonitor, FiTool, FiUserPlus } from 'react-icons/fi';

const Skills = () => {
  const { technical, tools, soft } = portfolioData.skills;

  const SkillCategory = ({ title, icon, skills, delay }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="bg-white dark:bg-dark-card rounded-2xl p-8 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-lg transition-all duration-300 group"
    >
      <div className="flex items-center gap-4 mb-8 pb-4 border-b border-gray-100 dark:border-gray-800">
        <div className="p-3 bg-primary-50 dark:bg-primary-900/20 text-primary-500 rounded-xl group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h3>
      </div>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-primary-400 flex-shrink-0"></div>
            <span className="text-gray-700 dark:text-gray-300 font-medium">{skill}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <section className="section-padding bg-gray-50 dark:bg-dark-bg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-base text-primary-500 font-semibold tracking-wide uppercase">My Expertise</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            Professional Skills
          </p>
          <div className="mt-4 w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <SkillCategory 
            title="Technical Skills" 
            icon={<FiMonitor className="text-2xl" />} 
            skills={technical} 
            delay={0.1}
          />
          <SkillCategory 
            title="Tools & Software" 
            icon={<FiTool className="text-2xl" />} 
            skills={tools} 
            delay={0.2}
          />
          <SkillCategory 
            title="Soft Skills" 
            icon={<FiUserPlus className="text-2xl" />} 
            skills={soft} 
            delay={0.3}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
