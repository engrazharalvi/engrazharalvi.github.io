import React from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { FiMail, FiMapPin, FiPhone, FiAward } from 'react-icons/fi';

const About = () => {
  const { name, title, experience, contact, email, location, iqama } = portfolioData.personalInfo;

  const infoBoxes = [
    { icon: <FiAward className="text-primary-500 text-2xl" />, label: "Experience", value: experience },
    { icon: <FiMapPin className="text-primary-500 text-2xl" />, label: "Location", value: location },
    { icon: <FiPhone className="text-primary-500 text-2xl" />, label: "Phone", value: contact },
    { icon: <FiMail className="text-primary-500 text-2xl" />, label: "Email", value: email },
  ];

  return (
    <section className="section-padding bg-white dark:bg-dark-bg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-16">
          <h2 className="text-base text-primary-500 font-semibold tracking-wide uppercase">Get To Know More</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
            About Me
          </p>
          <div className="mt-4 w-24 h-1 bg-primary-500 mx-auto rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
            {infoBoxes.map((box, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -5 }}
                className="bg-gray-50 dark:bg-dark-card p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm text-center flex flex-col items-center justify-center transition-all duration-300 hover:shadow-md"
              >
                <div className="mb-4 bg-white dark:bg-dark-bg p-4 rounded-full shadow-sm">
                  {box.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{box.label}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm overflow-hidden text-ellipsis w-full">{box.value}</p>
              </motion.div>
            ))}
            <motion.div 
              whileHover={{ y: -5 }}
              className="bg-gray-50 dark:bg-dark-card p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm text-center flex flex-col items-center justify-center sm:col-span-2 transition-all duration-300 hover:shadow-md"
            >
               <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">Status</h3>
               <p className="text-primary-600 dark:text-primary-400 font-medium">{iqama}</p>
            </motion.div>
          </div>
          
          <div className="flex-1 text-lg text-gray-600 dark:text-gray-300 leading-relaxed space-y-6">
            <p>
              I am a dedicated and results-driven <strong className="text-gray-900 dark:text-white font-semibold">{title}</strong> with <strong className="text-gray-900 dark:text-white font-semibold">{experience}</strong> of hands-on experience in the engineering field.
            </p>
            <p className="bg-primary-50 dark:bg-primary-900/10 p-6 rounded-xl border-l-4 border-primary-500 italic text-gray-700 dark:text-gray-300">
              "{portfolioData.summary}"
            </p>
            <p>
              My expertise spans across PLC Programming, SCADA Systems, Variable Frequency Drives, and complete project lifecycles. I excel in testing, FAT/SAT, and on-site commissioning to ensure robust and reliable automated systems.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
