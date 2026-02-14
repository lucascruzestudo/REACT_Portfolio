import React from 'react';
import { motion } from 'framer-motion';
import JamcoreImg from '/public/jamcore.png';
import { FaGithub } from 'react-icons/fa';
import translations from '../locales/translations';

const Projects = ({ language }) => {
  const t = translations[language].projects;
  const projectsData = [
    t.projectA,
    { ...t.jamcore, image: JamcoreImg }
  ];

  return (
    <section id="projects" className="snap-section px-4 md:px-8">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mb-12 text-center text-2xl font-bold text-white md:text-4xl"
      >
        {t.title.toUpperCase()}
      </motion.h1>

      <div className="w-full max-w-3xl mx-auto">
        {projectsData.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-4 group md:flex-row items-center mb-8 border-b border-blue-500/10 pb-6 last:mb-0 last:border-b-0 last:pb-0"
          >
            <div
              className={
                "relative overflow-hidden rounded-xl border border-blue-500/10 w-full md:w-[280px] aspect-[4/3] flex-shrink-0 group-hover:border-blue-500/30 transition-colors bg-neutral-900"
              }
            >
              <img
                src={project.image}
                className={
                  "w-full h-full object-cover opacity-95 group-hover:text-blue-400 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                }
                alt={project.title}
                loading="lazy"
                draggable="false"
              />
            </div>

            <div className="flex flex-col gap-4 flex-1">
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-gray-200 mb-2 group-hover:text-blue-400 transition-colors">{project.title.toUpperCase()}</h3>
                <p className="text-gray-400 leading-snug text-xs md:text-sm italic border-l-2 border-blue-500/20 pl-3">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span className="bg-transparent border border-blue-400 text-blue-200 text-[9px] md:text-xs px-2 py-0.5 rounded-full font-semibold tracking-wide uppercase" key={techIndex}>
                    {tech}
                  </span>
                ))}
              </div>

              {/* Se o projeto tiver dois repositórios, mostra ambos */}
              {project.projectUrl2 ? (
                <div className="flex flex-col gap-2 pt-2">
                  <a
                    href={project.projectUrl2}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-500 font-bold hover:text-blue-400 transition-colors w-fit group/link"
                  >
                    <FaGithub className="text-lg" />
                    <span className="border-b border-transparent group-hover/link:border-blue-400/50 transition-all">Frontend</span>
                  </a>
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-500 font-bold hover:text-blue-400 transition-colors w-fit group/link"
                  >
                    <FaGithub className="text-lg" />
                    <span className="border-b border-transparent group-hover/link:border-blue-400/50 transition-all">Backend</span>
                  </a>
                </div>
              ) : (
                <a
                  href={project.projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-500 font-bold hover:text-blue-400 transition-colors w-fit pt-2 group/link"
                >
                  <FaGithub className="text-lg" />
                  <span className="border-b border-transparent group-hover/link:border-blue-400/50 transition-all">Backend</span>
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
