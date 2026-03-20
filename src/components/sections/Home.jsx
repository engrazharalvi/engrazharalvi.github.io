import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

const Home = () => {
  const { name, title, profileImage, summary, resumeLink } = portfolioData.personalInfo;

  return (
    <section className="min-h-screen flex items-center justify-center section-padding pt-28">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12 w-full">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <h2 className="text-xl md:text-2xl text-primary-500 font-medium mb-2">Hello, I'm</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 tracking-tight">
            {name}
          </h1>
          <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
            {title}
          </h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed">
            {summary}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a 
              href={resumeLink} 
              download 
              className="px-8 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-full font-medium transition-colors shadow-lg shadow-primary-500/30 flex items-center justify-center gap-2"
            >
              Download CV
            </a>
            <button 
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-primary-500 text-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 rounded-full font-medium transition-colors"
            >
              Contact Me
            </button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center md:justify-end"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-primary-400 to-primary-600 animate-pulse opacity-20 -rotate-6"></div>
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-primary-600 to-primary-400 opacity-20 rotate-6 transform transition-transform hover:rotate-12 duration-500"></div>
            <img 
              src={profileImage} 
              alt={name} 
              className="w-full h-full object-cover rounded-[2rem] shadow-2xl relative z-10 border-4 border-white dark:border-dark-card"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
