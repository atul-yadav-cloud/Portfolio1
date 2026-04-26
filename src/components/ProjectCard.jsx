import React from 'react'

const ProjectCard = ({title, description, image, tech}) => {
  return (
    <div className='bg-dark-300 rounded-2xl overflow-hidden hover:-transition-y-2 transition duration-300 cursor-pointer'>
      <img src={image} alt="" className='w-full h-60 object-cover'/>
      <div className='p-6'>
        <h3 className='text-xl font-semibold mb-2'>{title}</h3>
        <p className='text-gray-400 mb-4'>{description}</p>
        <div className='flex flex-wrap gap-2 mb-4'>
            {tech.map((item, index)=>(
                <span key={index} className='px-3 py-1 bg-dark-400 rounded-full text-sm'>
                    {item}
                </span>
            ))}
        </div>
        <div className='felx gap-2'>
          <a href='#' className='flex-1 text-center px-4 py-2 bg-purple rounded-lg font-medium hover:bg-purple-700 transition duration-200'> View Demo</a>
          <a href='#' className='flex-1 text-center px-4 py-2 ml-6 border border-purple rounded-lg font-medium hover:bg-purple/20 transition duration-200'>Source Code</a>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard
