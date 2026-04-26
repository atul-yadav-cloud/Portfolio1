import React from 'react'
import { motion } from 'framer-motion'
import { aboutInfo, assets } from '../assets/assets'

const About = () => {
  return (
    <motion.div
      id='about'
      className='py-20 bg-dark-200'>

      <div className='container text-center mx-auto px-6'>

        {/* Heading */}

        <h2 className='text-3xl font-bold text-center mb-4'>About
          <span className='text-purple'> Me</span>
        </h2>
        <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>Get to know more about me and my passionate work.</p>

        {/*images my journey */}

        <div className='flex flex-col md:flex-row items-center gap-21'>

          {/* Image */}

          <div className='md:w-1/2 rounded-2xl overflow:hidden'>
            <motion.img
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1}}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              className='w-full h-full object-cover'
              src={assets.profileimg} alt="" />
          </div>

          {/*Text content */}

          <motion.div
            className='md:w-1/2'>
            <div className='rounded-2xl p-6 -mt-16 text-gray-300 text-left'>
              <h3 className='text-2xl font-semibold mb-2 cursor-pointer'>My Journey</h3>
              <p className='mb-3' >
                I am a dedicated React.js full stack developer with 3+ years of Exp. in designing, developing, and deploying robust, scalable, and SEO-friendly web applications. My expertise spans the entire development lifecycle, from responsive frontend development using React, Redux/Context API, and Tailwind CSS to powerful backend solutions with Node.js, Express, and databases like MongoDB. I specialize in delivering production-grade applications that focus on exceptional user experience (UX), performance optimization, and clean, maintainable code.</p>
                <p>Explore my projects to see how I leverage modern JavaScript frameworks to solve complex problems and drive digital success.</p>
              <br></br>

              {/*Cards */}

              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {
                  aboutInfo.map((data, index)=>(
                    <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:scale-102  hover:shadow-[0_0_20px_rgba(168,85,247,0.5)] cursor-pointer'>
                      <div className='text-purple text-2xl mb-4 '>
                        <data.icon  />
                        <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                        <p className='text-gray-400 text-sm'>{data.description}</p>
                      </div>
                    </div>
                  ))
                }
              </div>

            </div>

          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default About
