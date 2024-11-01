import { motion, AnimatePresence } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import { BiX, BiMenu } from 'react-icons/bi';
import { BsLinkedin, BsGithub } from 'react-icons/bs';
import translations from '../locales/translations.js';

const Navbar = ({ language, toggleLanguage }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navbarRef = useRef(null);
    const t = translations[language].nav;

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
        <nav ref={navbarRef} className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-[#1A3055]/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
            <a href="#home" className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100">
                Lucas
            </a>

            <ul className="hidden md:flex gap-10">
                <li><a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">{t.home}</a></li>
                <li><a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">{t.tech}</a></li>
                <li><a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">{t.projects}</a></li>
                <li><a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">{t.contact}</a></li>
            </ul>

            <ul className="hidden md:flex gap-5">
                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
                    <a href="https://www.linkedin.com/in/lucasgomescruz/" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin />
                    </a>
                </li>
                <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
                    <a href="https://github.com/lucascruzestudo" target="_blank" rel="noopener noreferrer">
                        <BsGithub />
                    </a>
                </li>
            </ul>

            <div className="hidden md:flex">
                <button
                    onClick={toggleLanguage}
                    className="cursor-pointer text-lg opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100"
                >
                    {language === 'en' ? 'PT' : 'EN'}
                </button>
            </div>

            {isOpen ? (
                <BiX className="block md:hidden text-4xl" onClick={menuOpen} />
            ) : (
                <BiMenu className="block md:hidden text-4xl" onClick={menuOpen} />
            )}

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'smooth', stiffness: 300, damping: 30 }}
                        className="fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-[#1A3156]/90 p-12"
                    >
                        <ul className="flex flex-col gap-9">
                            <li><a href="#home" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">Home</a></li>
                            <li><a href="#tech" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">Tech</a></li>
                            <li><a href="#projects" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">Projects</a></li>
                            <li><a href="#contact" className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100">Contact</a></li>
                        </ul>
                        <ul className="flex flex-wrap gap-5">
                            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
                                <a href="https://www.linkedin.com/in/lucasgomescruz/" target="_blank" rel="noopener noreferrer">
                                    <BsLinkedin />
                                </a>
                            </li>
                            <li className="cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100">
                                <a href="https://github.com/lucascruzestudo" target="_blank" rel="noopener noreferrer">
                                    <BsGithub />
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
