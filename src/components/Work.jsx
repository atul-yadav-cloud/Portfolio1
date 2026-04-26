import React from 'react'
import { motion } from 'framer-motion'
import { workData } from '../assets/assets'

const Work = () => {
    return (
        <motion.div
            id='experience'
            className='py-20 bg-dark-100'>
                <div className='container mx-auto px-6'>
                    <h2 className='text-3xl font-bold text-center mb-4'>Work
                        <span  className='text-purple'> Experience</span>
                    </h2>
                    <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>My professional journey so far.</p>

                    <div className='max-w-3xl mx-auto'>
                        <div className='space-y-12'>
                            {
                                workData.map((data, index)=>(
                                    <div key={index}  className="relative pl-10 before:content-['']  before:absolute before:left-0 before:top-0 before:w-[2px] before:bg-purple before:h-full cursor-pointer hover:scale-101 transition-all duration-300">
                                        {/*Timeline dot */}
                                        <div className='absolute left-[-0.7rem] top-0 w-6 h-6 rounded-full bg-purple'></div>

                                        {/*Box */}
                                        <div className='bg-dark-300 rounded-2xl p-6 hover:scale-103  transition-all duration-300'>
                                            <div className='flex justify-between items-start mb-2'>
                                                <h3 className='text-xl font-semibold'>{data.role}</h3>
                                                <span className='px-3 py-1 bg-purple/20 hover:shadow-[0_0_20px_rgba(168,85,247,0.9)] text-gray-300 rounded-full'>{data.duration}</span>
                                            </div>
                                            <p className='text-gray-400 mb-2'>{data.company}</p>
                                            <p className='text-gray-300'>{data.description}</p>
                                        </div>
                                  </div>  
                                ))
                            }
                        </div>
                    </div>
                </div>

        </motion.div>
    )
}

export default Work
