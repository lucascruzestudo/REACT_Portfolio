import React from 'react'
import { AiOutlineDotNet } from 'react-icons/ai'
import { BiLogoDocker, BiLogoPostgresql, BiLogoReact } from 'react-icons/bi'
import { motion } from 'framer-motion'
import translations from '../locales/translations.js';
import { SiMicrosoftsqlserver, SiRedis } from 'react-icons/si';
import { DiRedis } from 'react-icons/di';

const Tech = ({language}) => {
  const t = translations[language];

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView={"visible"}
      transition={{ duration: 0.5, delay: 0.2 }}
      id="tech"
      className="flex h-screen w-full flex-col items-center justify-center gap-16 py-8">
      <div className='text-4xl font-light text-white md:text-6xl'>{t.nav.tech}</div>
      <div className='flex flex-wrap items-center justify-center gap-10 p-5'>
        {[
          { icon: <AiOutlineDotNet />, label: ".NET" },
          { icon: <BiLogoReact />, label: "React" },
          { icon: <BiLogoPostgresql />, label: "PostgreSQL" },
          { icon: <SiMicrosoftsqlserver />, label: "SQL Server" },
          { icon: <BiLogoDocker />, label: "Docker" },
          { icon: <DiRedis />, label: "Redis" },
        ].map((tech, index) => (
          <div
            key={index}
            className='relative group cursor-pointer text-[80px] text-blue-400 transition-all duration-300 hover:-translate-y-5 sm:text-[100px] md:text-[120px]'>
            {tech.icon}
            <span className='absolute left-1/2 bottom-full mb-2 w-max -translate-x-1/2 rounded bg-white px-2 py-1 text-sm text-black opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100'>
              {tech.label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default Tech;
