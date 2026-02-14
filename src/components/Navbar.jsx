import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { BiX, BiMenu } from 'react-icons/bi';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { HiDocumentArrowDown } from 'react-icons/hi2';
import { MdEmail } from 'react-icons/md';
import translations from '../locales/translations.js';
import ResumePt from '/public/resume_pt.pdf';
import ResumeEn from '/public/resume_en.pdf';

const Navbar = ({ language, toggleLanguage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navbarRef = useRef(null);
    const section = translations[language];
    const t = section.nav;

    const menuOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (navbarRef.current && !navbarRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav ref={navbarRef} className="fixed top-0 z-50 flex w-full items-center justify-between px-4 py-4 text-white backdrop-blur-md transition-all duration-500 md:px-16 lg:justify-between">
            <a href="#home" className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent opacity-90 text-2xl font-bold transition-all duration-300 hover:opacity-100">
                Lucas
            </a>

            <ul className="hidden lg:flex gap-8 items-center">
                <li><a href="#home" className="text-sm font-medium opacity-70 transition-all duration-300 hover:opacity-100">{t.home.toUpperCase()}</a></li>
                <li><a href="#experience" className="text-sm font-medium opacity-70 transition-all duration-300 hover:opacity-100">{t.experience.toUpperCase()}</a></li>
                <li><a href="#projects" className="text-sm font-medium opacity-70 transition-all duration-300 hover:opacity-100">{t.projects.toUpperCase()}</a></li>
                <li><a href="#contact" className="text-sm font-medium opacity-70 transition-all duration-300 hover:opacity-100">{t.contact.toUpperCase()}</a></li>
            </ul>

            <div className="flex items-center gap-4">
                <div className="hidden sm:flex gap-4">
                    <a
                        href={language === 'en' ? ResumeEn : ResumePt}
                        download
                        className="flex items-center gap-2 rounded-full border border-blue-500/50 px-4 py-1.5 text-xs font-medium text-blue-400 transition-all duration-300 hover:bg-blue-500/10"
                    >
                        <HiDocumentArrowDown />
                        {section.downloadResume}
                    </a>
                    <a
                        href="#contact"
                        className="flex items-center gap-2 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-medium text-white transition-all duration-300 hover:bg-blue-500 shadow-lg shadow-blue-500/20"
                    >
                        <MdEmail />
                        {section.contactMe}
                    </a>
                </div>

                <div className="flex h-8 w-px bg-gray-800 hidden sm:block"></div>

                <button
                    onClick={toggleLanguage}
                    className="cursor-pointer text-sm font-bold opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100 px-2"
                >
                    {language === 'en' ? 'PT' : 'EN'}
                </button>

                {isOpen ? (
                    <BiX className="block lg:hidden text-3xl cursor-pointer" onClick={menuOpen} />
                ) : (
                    <BiMenu className="block lg:hidden text-3xl cursor-pointer" onClick={menuOpen} />
                )}
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 mt-[65px] flex h-screen w-64 flex-col items-start justify-start gap-8 border-l border-gray-800 bg-[#0a0a0a]/fb p-8 shadow-2xl lg:hidden"
                    >
                        <ul className="flex flex-col gap-6 w-full">
                            <li><a href="#home" className="block w-full text-lg opacity-70 transition-all duration-300 hover:opacity-100" onClick={menuOpen}>{t.home.toUpperCase()}</a></li>
                            <li><a href="#experience" className="block w-full text-lg opacity-70 transition-all duration-300 hover:opacity-100" onClick={menuOpen}>{t.experience.toUpperCase()}</a></li>
                            <li><a href="#projects" className="block w-full text-lg opacity-70 transition-all duration-300 hover:opacity-100" onClick={menuOpen}>{t.projects.toUpperCase()}</a></li>
                            <li><a href="#contact" className="block w-full text-lg opacity-70 transition-all duration-300 hover:opacity-100" onClick={menuOpen}>{t.contact.toUpperCase()}</a></li>
                        </ul>
                        <div className="border-t border-gray-800 w-full pt-6 flex flex-col gap-4">
                            <a
                                href={language === 'en' ? ResumeEn : ResumePt}
                                download
                                className="flex items-center justify-center gap-2 rounded-lg border border-blue-500/50 py-2.5 text-sm font-medium text-blue-400"
                                onClick={menuOpen}
                            >
                                <HiDocumentArrowDown />
                                {section.downloadResume}
                            </a>
                            <a
                                href="#contact"
                                className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 py-2.5 text-sm font-medium text-white"
                                onClick={menuOpen}
                            >
                                <MdEmail />
                                {section.contactMe}
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
