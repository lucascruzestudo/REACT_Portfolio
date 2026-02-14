import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import translations from '../locales/translations.js';

const Experience = ({ language }) => {
    const t = translations[language];

    const experiences = [
        { ...t.experience.mosten_dev, id: 'mosten_dev' },
        { ...t.experience.mosten_intern, id: 'mosten_intern' },
        { ...t.experience.santos_port, id: 'santos_port' }
    ];

    return (
            <section id="experience" className="snap-section px-4 md:px-8">
            <div className="w-full max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-center text-3xl font-bold text-white mb-10 md:text-4xl"
                >
                    {t.experience.title.toUpperCase()}
                </motion.h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Coluna 1: Experiência Profissional */}
                    <div className="flex flex-col gap-6">
                        <h3 className="text-2xl font-bold text-blue-400 mb-4 uppercase tracking-widest">{t.professionalExp.toUpperCase()}</h3>
                        <div className="space-y-6">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative pl-6 border-l border-blue-500/10 group hover:border-blue-500/40 transition-colors"
                                >
                                    <div className="mb-1">
                                        <h4 className="text-lg font-bold text-gray-200 group-hover:text-blue-400 transition-colors">{exp.role.toUpperCase()}</h4>
                                        <div className="flex justify-between items-center w-full">
                                            <p className="text-xs font-bold text-blue-500/80 uppercase tracking-widest">{exp.company}</p>
                                            <span className="text-[9px] font-bold text-gray-500 bg-gray-900/40 px-2 py-0.5 rounded">
                                                {exp.period}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="text-xs leading-snug text-gray-400 group-hover:text-gray-300 transition-colors italic">
                                        {exp.description}
                                    </p>



                                    {exp.technologies && exp.technologies.length > 0 && (
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {exp.technologies.map((tech) => (
                                                <span key={tech} className="bg-transparent border border-blue-400 text-blue-200 text-[9px] md:text-xs px-2 py-0.5 rounded-full font-semibold tracking-wide uppercase">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    {/* Coluna 2: Experiência Acadêmica */}
                    <div className="flex flex-col gap-12">
                        <h3 className="text-2xl font-bold text-blue-400 mb-6 uppercase tracking-widest">{t.academicExp.toUpperCase()}</h3>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="pl-6 border-l border-blue-500/10 group hover:border-blue-500/40 transition-colors"
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className="flex gap-6 items-center">
                                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500">
                                        <FaGraduationCap className="text-xl" />
                                    </div>
                                    <div>
                                        <h4 className="text-xl font-bold text-gray-200 group-hover:text-blue-400 transition-colors">
                                            {t.education.degree.toUpperCase()}
                                        </h4>
                                        <p className="text-xs font-bold text-blue-500/80 uppercase tracking-widest">
                                            {t.education.institution}
                                        </p>
                                    </div>
                                </div>
                                <span className="text-[10px] font-bold text-gray-500 bg-gray-900/40 px-2 py-0.5 rounded">
                                    {t.education.period}
                                </span>
                            </div>
                            <p className="text-xs leading-snug text-gray-400 italic mb-4">
                                {t.education.description}
                            </p>
                            {t.education.topics && t.education.topics.length > 0 && (
                                <div className="mt-2 flex flex-wrap gap-2">
                                    {t.education.topics.map((topic) => (
                                        <span key={topic} className="bg-transparent border border-blue-400 text-blue-200 text-[9px] md:text-xs px-2 py-0.5 rounded-full font-semibold tracking-wide uppercase">
                                            {topic}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
