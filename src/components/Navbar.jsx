import { div } from 'framer-motion/client'
import { useState } from 'react'
import { BiX, BiMenu } from 'react-icons/bi'
import { BsLinkedin, BsGithub } from 'react-icons/bs'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const menuOpen = () => {
        setIsOpen(!isOpen)
    }

    return (
        <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-[#1A3055]/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
            <a href="#home" className='bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100'>
                Lucas Cruz
            </a>

            <ul className='hidden md:flex gap-10'>
                <li>
                    <a href="#home" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
                        Home
                    </a>
                </li>
                <li>
                    <a href="#tech" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
                        Tech
                    </a>
                </li>
                <li>
                    <a href="#projects" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
                        Projects
                    </a>
                </li>
                <li>
                    <a href="#contact" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
                        Contact
                    </a>
                </li>
            </ul>

            <ul className='hidden md:flex gap-5'>
                <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100'>
                    <a href="https://www.linkedin.com/in/lucasgomescruz/" target="_blank" rel="noopener noreferrer">
                        <BsLinkedin />
                    </a>
                </li>
                <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100'>
                    <a href="https://github.com/lucascruzestudo" target="_blank" rel="noopener noreferrer">
                        <BsGithub />
                    </a>
                </li>
            </ul>

            {isOpen ? (
                <BiX className='block md:hidden text-4xl' onClick={menuOpen} />
            ) : (
                <BiMenu className='block md:hidden text-4xl' onClick={menuOpen} />
            )}

            {isOpen && (
                <div className={`fixed right-0 top-[84px] flex h-screen w-1/2 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/90 p-12`}>
                    <ul className='flex flex-col gap-9'>
                        <li>
                            <a href="#home" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#tech" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
                                Tech
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className='cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100'>
                                Contact
                            </a>
                        </li>
                    </ul>
                    <ul className='flex flex-wrap gap-5'>
                        <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100'>
                            <a href="https://www.linkedin.com/in/lucasgomescruz/" target="_blank" rel="noopener noreferrer">
                                <BsLinkedin />
                            </a>
                        </li>
                        <li className='cursor-pointer text-xl opacity-70 transition-all duration-300 hover:text-blue-500 hover:opacity-100'>
                            <a href="https://github.com/lucascruzestudo" target="_blank" rel="noopener noreferrer">
                                <BsGithub />
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}

export default Navbar
