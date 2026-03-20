import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-dark-card py-8 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-primary-700 dark:from-primary-400 dark:to-primary-600">
              {portfolioData.personalInfo.name}
            </span>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">
              Building robust automated systems.
            </p>
          </div>
          <div className="text-center md:text-right">
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} All rights reserved.
            </p>
            <p className="text-gray-400 dark:text-gray-500 text-xs mt-1">
              Developed using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
