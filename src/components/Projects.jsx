import React from 'react'
import { motion } from 'framer-motion'
import { projects } from '../assets/assets'
import ProjectCard from './ProjectCard'
import { FaArrowRight } from 'react-icons/fa'

const Projects = () => {
  return (
    <motion.div
      id='projects'
      className='py-12 bg-dark-200' >
        <div className='container mx-auto mx-6'>
            <h2 className='text-3xl font-bold text-center mb-4'>My 
                <span className='text-purple'> Projects</span>
            </h2>
            <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Building scalable MERN applications powered by AWS cloud.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto'>
                {/* Projects */}    
                {
                    projects.map((project, index)=>(
                        <ProjectCard key={index} {...project} />
                    ))
                }
            </div>
            <div className='text-center mt-12'>
                <a href='#' className='inline-flex items-center px-6 py-3 border  border-purple rounded-lg font-medium hover:bg-purple/20 hover:scale-103 duration-300 transition duration-300'>
                    <span>View More </span>
                    <FaArrowRight className='ml-2'/>
                </a>
            </div>
        </div>
    </motion.div>
  )
}

export default Projects
