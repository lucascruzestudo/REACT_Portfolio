import React from 'react';
import Author from '/public/author.jpg';
import Resume from '/public/resume.pdf';
import { motion } from 'framer-motion';
import { HiDocumentArrowDown } from 'react-icons/hi2';
import { MdEmail } from 'react-icons/md';
import translations from '../locales/translations.js';

const Hero = ({ language }) => {
  const t = translations[language];

  return (
    <div id="home" className='px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32'>
      <div className='flex flex-col items-center justify-center gap-10 text-white'>

        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <img src={Author} alt="" className='w-[300px] cursor-pointer rounded-full shadow-xl shadow-[#0e1a2d] transition-all duration-300 hover:-translate-y-5 shadow-2xl md:w-[350px]' />
        </motion.div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className='flex max-w-[600px] flex-col items-center justify-center gap-3 text-center'>
          <h1 className='bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent text-5xl font-semibold'>{t.name}</h1>
          <h3 className='bg-gradient-to-r from-blue-300 to-blue-400 bg-clip-text text-transparent text-3xl font-light'>{t.role}</h3>
          <p className='md:text-base text-pretty text-sm text-gray-300'>
            {t.description}
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mt-5">
            <a
              href={Resume}
              download
              className="flex items-center rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-400 transition-all duration-300 text-sm sm:text-base hover:scale-105"
            >
              <HiDocumentArrowDown className="mr-2" />
              {t.downloadResume}
            </a>
            <a
              href="#contact"
              className="flex items-center rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-400 transition-all duration-300 text-sm sm:text-base hover:scale-105"
            >
              <MdEmail className="mr-2" />
              {t.contactMe}
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero;
