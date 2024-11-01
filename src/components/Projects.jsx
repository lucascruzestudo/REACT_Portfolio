import React from 'react'
import {motion} from 'framer-motion'
import Project1 from '/public/project1.png'
import { FaGithub } from 'react-icons/fa';

const projectsData = [
  {
    image: Project1,
    title: "CoreAPI",
    description: "API in .NET with CQRS and feature implementations to demonstrate expertise, having already implemented Redis, Docker, and dynamic responses based on the requested language, with plans to add more features in the future to serve as examples on how to use them.",
    technologies: [".NET", "PostgreSQL", "Redis", "Docker"],
    projectUrl: "https://github.com/lucascruzestudo/DOTNET_CoreAPI"
  }
]

const ScrollReveal = ({children}) => {
  return (
    <motion.div
    initial={{opacity: 0, y: 100}}
    whileInView={{opacity: 1, y: 0}}
    viewport={{once: true}}
    transition={{duration: 0.8}}
    >
      {children}
    </motion.div>
  )
}

const ProjectCard = ({ project }) => {
  return (
    <ScrollReveal>
      <div className="flex flex-col md:flex-row items-stretch gap-8 md:gap-8">
      <img
        src={project.image}
        className="w-full cursor-pointer object-cover rounded-2xl transition-all duration-300 hover:scale-105 md:w-[300px] md:h-auto"
        alt=""
      />
      <div className="flex flex-col justify-between gap-5 md:flex-grow">
        <div className="flex flex-col gap-3">
          <div className="text-xl font-semibold">{project.title}</div>
          <p className="text-gray-400">{project.description}</p>
        </div>
        <div className="flex flex-wrap gap-5">
          {project.technologies.map((tech, index) => (
            <span className="rounded-lg bg-white p-3 text-black" key={index}>
              {tech}
            </span>
          ))}
        </div>
        <a href={project.projectUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-gray-300">
          <FaGithub className="mr-2 text-2xl" />
          View on GitHub
        </a>
      </div>
    </div>
    </ScrollReveal>
  );
};

const Projects = () => {
  return (
    <div id='projects' className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:px-14 md:py-24'>
      <ScrollReveal>      <h1 className='text-4xl font-light text-white md:text-6xl'>My Projects</h1> </ScrollReveal>
      <div className="flex w-full max-w-[1000px] flex-col gap-16 text-white">
        {projectsData.map((project, index) => (<ProjectCard key={index} project={project} />))}
      </div>
    </div>
  )
}

export default Projects