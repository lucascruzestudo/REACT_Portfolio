import React from 'react';
import Author from '/public/author.jpg';
import { motion } from 'framer-motion';
import translations from '../locales/translations.js';

// Icons (importados do Tech.jsx)
import { AiOutlineDotNet } from 'react-icons/ai';
import { BiLogoDocker, BiLogoPostgresql, BiLogoReact, BiLogoAngular, BiLogoNodejs, BiLogoPython, BiLogoFlutter } from 'react-icons/bi';
import { SiMicrosoftsqlserver, SiRedis, SiCsharp, SiApachespark, SiPandas, SiMongodb, SiAzuredevops, SiGit, SiLinux, SiWindows } from 'react-icons/si';
import { FaChartBar, FaBrain } from 'react-icons/fa';

const Hero = ({ language }) => {
  const t = translations[language];

  const qualityTags = language === 'pt' ? [
    'Capacidade Analítica',
    'Resolução de Problemas',
    'Soluções Escaláveis',
    'Colaboração',
    'Mentoria Técnica',
    'Orientado a Resultados',
    'Qualidade de Código',
    'Melhoria Contínua',
    'Adaptável',
    'Aprendizado Rápido'
  ] : [
    'Analytical',
    'Problem Solving',
    'Scalable Solutions',
    'Collaborative',
    'Technical Mentorship',
    'Results-Oriented',
    'Code Quality',
    'Continuous Improvement',
    'Adaptable',
    'Fast Learner'
  ];

  // Stacks (copiado e adaptado do Tech.jsx)
  const techCategories = [
    {
      category: t.stacks.backend,
      technologies: [
        { icon: <AiOutlineDotNet />, label: ".NET Core" },
        { icon: <SiCsharp />, label: "C#" },
        { icon: <BiLogoNodejs />, label: "Node.js" },
        { icon: <BiLogoPython />, label: "Python" },
      ]
    },
    {
      category: t.stacks.frontend,
      technologies: [
        { icon: <BiLogoReact />, label: "React" },
        { icon: <BiLogoAngular />, label: "Angular" },
        { icon: <BiLogoFlutter />, label: "Flutter" },
      ]
    },
    {
      category: t.stacks.databases,
      technologies: [
        { icon: <BiLogoPostgresql />, label: "PostgreSQL" },
        { icon: <SiMicrosoftsqlserver />, label: "SQL Server" },
        { icon: <SiMongodb />, label: "NoSQL" },
        { icon: <SiRedis />, label: "Redis" },
      ]
    },
    {
      category: t.stacks.devops,
      technologies: [
        { icon: <BiLogoDocker />, label: "Docker" },
        { icon: <SiAzuredevops />, label: "Azure DevOps" },
        { icon: <SiGit />, label: "Git" },
        { icon: <SiLinux />, label: "Linux" },
        { icon: <SiWindows />, label: "Windows" },
      ]
    },
    {
      category: t.stacks.dataScience,
      technologies: [
        { icon: <SiApachespark />, label: "Spark" },
        { icon: <SiPandas />, label: "Pandas" },
        { icon: <FaChartBar />, label: "Viz" },
        { icon: <FaBrain />, label: "ML" },
      ]
    },
  ];

  return (
    <section id="home" className="snap-section px-4 md:px-8 pt-6">
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-white max-w-6xl mx-auto">
        {/* Bloco Hero */}
        <div className="flex flex-col items-center justify-center gap-6 md:w-8/12">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <img
              src={Author}
              alt={t.name}
              className="w-[180px] cursor-pointer rounded-full shadow-2xl shadow-blue-500/20 transition-all duration-300 hover:scale-105 md:w-[220px]"
            />
          </motion.div>
          <motion.div
            initial={{ y: 8, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-3 text-center max-w-md md:max-w-lg px-4"
          >
            <p className="text-sm text-blue-200/75 italic">{t.welcome}</p>
          </motion.div>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center justify-center gap-4 text-center"
          >
            <h1 className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent text-4xl font-bold md:text-6xl">
              {t.name.toUpperCase()}
            </h1>

            <div className="flex flex-wrap justify-center gap-2">
              {qualityTags.map((tag, i) => (
                <span
                  key={i}
                  className="bg-transparent border border-blue-400 text-blue-200 text-[9px] md:text-xs px-2 py-0.5 rounded-full font-semibold tracking-wide uppercase"
                >
                  {tag.toUpperCase()}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
        {/* Divisória vertical (visível em md+) - fina e mais alta */}
        <div className="hidden md:block w-px bg-blue-500/10 rounded md:h-96 lg:h-[36rem] mx-6" aria-hidden="true"></div>
        {/* Bloco Stacks - sem rótulo, em coluna */}
        <div className="flex flex-col gap-6 md:w-4/12 w-full">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center md:items-start"
            >
              <h3 className="mb-3 text-base font-bold text-blue-400/80 uppercase tracking-widest border-b border-blue-500/10 w-full pb-2">
                {category.category.toUpperCase()}
              </h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                {category.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="group relative cursor-pointer text-[44px] text-gray-400 transition-all duration-300 hover:text-blue-400 hover:scale-110 w-11 h-11 flex items-center justify-center"
                  >
                    {tech.icon}
                    <span className="absolute left-1/2 bottom-full mb-2 w-max -translate-x-1/2 rounded bg-white px-2.5 py-1.5 text-[13px] font-bold text-black opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
                      {tech.label}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
